<template>
<div class="flex flex-grow divide-1 divide-x divide-light">
    <div class="flex flex-col flex-grow divide-1 divide-y divide-light">
        <div class="flex w-full h-full bg-black bg-opacity-5">
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
            <div class="flex space-x-4">
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
    
</div>

<div class="flex flex-col w-1/4 divide-1 divide-y divide-light">
        <container-list class="bg-gray-400 bg-opacity-5 scroll" title="Chat" icon="chatbox-ellipses-outline">
            <div class="bg-opacity-0 w-full pl-4 scroll">
                <chat-box/>
            </div>
        </container-list>
        <chat-input class="mb-4"/>
        
</div>

</template>

<script>
import ParticipantContainer from '@/components/widgets/call/ParticipantContainer.vue'
import ChatBox from '../../../../components/shared/ChatBox.vue'
import ContainerList from '@/components/ContainerList.vue'
import ChatInput from '../../../../components/shared/ChatInput.vue'
import Btn from '../../../../components/shared/Btn.vue'
export default {
    components: {
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
                    lastname:"Doe",
                    firstname:"John",
                    audio:false,
                    video:true,
                },
            ],
        }
    },
    methods:{
        openChat(){
            this.openChat = !this.openChat
        }
    }
}
</script>
