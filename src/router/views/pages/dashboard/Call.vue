<template>
<div class="flex w-full divide-1 divide-x divide-light">
    <div class="flex flex-col divide-1 divide-y divide-light w-3/4">
        <div class="flex w-full bg-black bg-opacity-5 h-4/5">
            <participant-container :participants="participants"/>
        </div>
        <div class="flex w-full items-center justify-evenly h-1/5">
            <div class="flex space-x-4">
                <btn>
                    <ion-icon class="text-light text-xl" name="mic-outline"></ion-icon>
                    <ion-icon class="text-light ml-2 text-xl" name="chevron-up-outline"></ion-icon>
                </btn>
                <btn>
                    <ion-icon class="text-light text-xl" name="videocam-outline"></ion-icon>
                    <ion-icon class="text-light ml-2 text-xl" name="chevron-up-outline"></ion-icon>
                </btn>

            </div>
            <div class="flex">
                <div class="border border-light border-opacity-5 h-12 bg-red-600 rounded-lg items-center justify-center flex px-4 cursor-pointer">
                    <p class="text-light">End Meeting</p>
                </div>
            </div>

            <div class="flex space-x-4">
                <btn>
                    <ion-icon class="text-light text-xl" name="person-outline"></ion-icon>
                    <ion-icon class="text-light ml-2 text-xl" name="chevron-up-outline"></ion-icon>
                </btn>
                <btn :highlighted="true">
                    <ion-icon class="text-light text-xl" name="chatbox-ellipses-outline"></ion-icon>
                    <ion-icon class="text-light ml-2 text-xl" name="chevron-forward-outline"></ion-icon>
                </btn>
            </div>
        </div>
    </div>
    <div class="flex flex-col w-1/4 divide-1 divide-y divide-light">
        <div class="flex w-full p-4">
            <Switch class="w-full" :items="[{name : 'participants',title :'Participants (' + getParticipantsCount+')', selected:true},{name : 'viewers',title :'Viewers (' + getViewersCount+')'}]" v-on:switch="tab = $event"/>
        </div>
        <div class="flex p-4 flex-col w-full space-y-4 pt-4 scroll">
            <participant class="pr-4" v-for="participant in participants" v-bind:key="participant.id" :participant="participant"/>
        </div>
        <container-list class="bg-gray-400 bg-opacity-5 scroll" title="Chat" icon="chatbox-ellipses-outline">
            <div class="bg-opacity-0 w-full scroll">
                <chat-box/>
            </div>
        </container-list>
        <chat-input class="mb-4"/>
        
    </div>
</div>

</template>

<script>
import Switch from '@/components/shared/Switch.vue'
import Participant from '@/components/widgets/call/Participant.vue'
import ParticipantContainer from '@/components/widgets/call/ParticipantContainer.vue'
import ChatBox from '../../../../components/shared/ChatBox.vue'
import ContainerList from '@/components/ContainerList.vue'
import ChatInput from '../../../../components/shared/ChatInput.vue'
import Btn from '../../../../components/shared/Btn.vue'
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
            isChatOpen: false,
            tab: {},
            participants:[
                {
                    id:1,
                    lastname:"Rais",
                    firstname:"Yassin",
                    audio:false,
                    video:false,
                },
                {
                    id:2,
                    lastname:"Rais",
                    firstname:"Yassin",
                    audio:false,
                    video:true,
                },
                {
                    id:3,
                    lastname:"Rais",
                    firstname:"Yassin",
                    audio:true,
                    video:false,
                },
            ],
            viewers:[
                {
                    id:1,
                    lastname:"Rais",
                    firstname:"Yassin",
                    audio:false,
                    video:false,
                },
                {
                    id:2,
                    lastname:"Rais",
                    firstname:"Yassin",
                    audio:false,
                    video:true,
                },
                {
                    id:3,
                    lastname:"Rais",
                    firstname:"Yassin",
                    audio:true,
                    video:false,
                },
                {
                    id:4,
                    lastname:"Rais",
                    firstname:"Yassin",
                    audio:false,
                    video:false,
                },
                {
                    id:5,
                    lastname:"Rais",
                    firstname:"Yassin",
                    audio:false,
                    video:true,
                },
                {
                    id:6,
                    lastname:"Rais",
                    firstname:"Yassin",
                    audio:true,
                    video:false,
                },
            ]
        }
    },
    computed:{
        getParticipantsCount(){
            return this.participants.length
        },
        getViewersCount(){
            return this.viewers.length
        }
    },
    methods:{
        openChat(){
            this.openChat = !this.openChat
        }
    }
}
</script>
