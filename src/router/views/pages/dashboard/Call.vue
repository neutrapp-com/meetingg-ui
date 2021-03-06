<template>
<div v-if="getMeeting != null" class="flex w-full divide-1 divide-x divide-light">
    <div class="flex flex-col divide-1 divide-y divide-light w-3/4">
        <div class="flex w-full bg-black bg-opacity-5 h-4/5">
            <participant-container :participants="getParticipantsList"/>
        </div>
        <div class="flex w-full items-center justify-evenly h-1/5">
            <div class="flex space-x-4">
                <btn @click="audio = !audio">
                    <ion-icon class="text-light text-xl" :name="audio ? 'mic-outline' : 'mic-off-outline'"></ion-icon>
                </btn>
                <btn @click="video = !video">
                    <ion-icon class="text-light text-xl" :name="video ? 'eye-outline' : 'eye-off-outline'"></ion-icon>
                </btn>
                <btn>
                    <ion-icon class="text-light text-xl" name="settings-outline"></ion-icon>
                </btn>

            </div>
            <div class="flex">
                <div @click="setMeeting();navigateTo('/')" class="border border-light border-opacity-5 h-12 bg-red-600 rounded-lg items-center justify-center flex px-4 cursor-pointer">
                    <p class="text-light">{{admin ? "End Meeting" : "Left Meeting"}}</p>
                </div>
            </div>

            <div class="flex space-x-4">
                <btn @click="toggleChat" :highlighted="!getIsChatDisplayed">
                    <ion-icon class="text-light text-xl" name="person-outline"></ion-icon>
                    <ion-icon class="text-light ml-2 text-xl" :name="!getIsChatDisplayed ? 'chevron-forward-outline' : 'chevron-up-outline'"></ion-icon>
                </btn>
                <btn @click="toggleChat" :highlighted="getIsChatDisplayed">
                    <ion-icon class="text-light text-xl" name="chatbox-ellipses-outline"></ion-icon>
                    <ion-icon class="text-light ml-2 text-xl" :name="getIsChatDisplayed ? 'chevron-forward-outline' : 'chevron-up-outline'"></ion-icon>
                </btn>
            </div>
        </div>
    </div>
    <div class="flex flex-col w-1/4 divide-1 divide-y divide-light">
        <div class="flex w-full p-4">
            <Switch class="w-full" :items="[{name : 'participants',title :'Participants (' + getParticipantsCount+')', selected:true},{name : 'viewers',title :'Viewers (' + getViewersCount+')'}]" v-on:switch="tab = $event"/>
        </div>
        <div v-if="tab.name =='participants'" class="flex p-4 flex-col w-full space-y-4 pt-4 scroll">
            <participant  class="pr-4" v-for="participant in getParticipantsList" v-bind:key="participant.id" :participant="participant"/>
        </div>
        <div v-if="tab.name =='viewers'" class="flex p-4 flex-col w-full space-y-4 pt-4 scroll">
            <participant  class="pr-4" v-for="viewer in []" v-bind:key="viewer.id" :viewer="true" :participant="viewer"/>
        </div>
        <container-list class="bg-gray-400 bg-opacity-5 scroll" title="Chat" icon="chatbox-ellipses-outline">
            <div class="bg-opacity-0 w-full h-96 pl-4 scroll">
                <chat-box/>
            </div>
        </container-list>
        <chat-input class="mb-4"/>
        
    </div>
</div>
<div v-else class="flex flex-col w-full items-center py-32">
    <div class="w-full flex mb-16">
        <p class="text-7xl mx-auto">There is no Call in progress</p>
    </div>
    <btn @click="navigateTo('/meetings')">
        <p>Go Back to Meetings</p>
    </btn>
</div>
</template>

<script>
import Switch from '@/components/shared/Switch.vue'
import Participant from '@/components/widgets/call/Participant.vue'
import ParticipantContainer from '@/components/widgets/call/ParticipantContainer.vue'
import ChatBox from '@/components/shared/ChatBox.vue'
import ContainerList from '@/components/ContainerList.vue'
import ChatInput from '@/components/shared/ChatInput.vue'
import Btn from '@/components/shared/Btn.vue'
import router from '@/router'
import Peer from 'peerjs'

import {
    callMethods,
    callComputed,
    meetingMethods,
    meetingComputed,
} from '@/state/helpers';

export default {
    components: {
        Switch,
        Participant,
        ParticipantContainer,
        ChatBox,
        ContainerList,
        ChatInput,
        Btn
    },
    data(){
        return{
            audio:false,
            video:false,
            admin:true,
            tab: {},
            peers : {},
            peerJs: {},
            participants : []
        }
    },
    computed:{
        getParticipantsCount(){
            return this.participants.length
        },
        getViewersCount(){
            return 0
        },
        ...callComputed,
        ...meetingComputed,
        getParticipantsList(){
            return this.participants
        }
    },
    methods:{
        navigateTo(link){
            router.push(link)
        },
        ...callMethods,
        ...meetingMethods,
        addVideoStream(video, stream){
            video.srcObject = stream
            video.addEventListener('loadedmetadata', () => {
                video.play()
            })

            document.getElementById('videolist').append(video);
        }
    },
    created(){ 
        let did = this.getMeeting.discussion.id;
        this.$socket.client.on('user-connected', user => {
            console.log('user-connected' , user)
            this.participants.push(user);
            this.$store.commit('discussion/PUSH_NEW_MESSAGE', { message: {
                id: Date.now(),
                content: `User connected : ${user.firstname} ${user.firstname}`,
                user : user,
                created_at: (new Date()).toString()
            }, discussionId: did})
        })

        this.peerJs = new Peer({
            host: 'localhost',
            port: 9000,
            path: '/',
            config: {
                'iceServers': [
                    { url: 'stun:stun.l.google.com:19302' },
                    { url: 'turn:homeo@turn.bistri.com:80', credential: 'homeo' }
                ]
            },
        });

        this.peerJs.on('open' , id => {
            console.log(this.getMeeting.id)
            this.$socket.client.emit('join-room', this.getMeeting.id, id);
        })

      
    },
    moutned(){
        let myVideo = document.createElement('video');
        myVideo.muted = true;
        setTimeout(()=>{
            navigator.mediaDevices.getUserMedia({
                video: true,
                audio: true
            }).then(stream => {
                console.log('Media Accepted')
                this.addVideoStream(myVideo, stream)
                
                this.peerJs.on('call', call => {
                    call.answer(stream)
                    const video = document.createElement('video')
                    call.on('stream', userVideoStream => {
                        this.addVideoStream(video, userVideoStream)
                    })
            
            }) 
        })
        })
    },
    beforeUnmount(){
        this.peerJs && this.peerJs.destroy(); 
    }
}
</script>
