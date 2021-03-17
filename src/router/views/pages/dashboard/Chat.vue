<template>
<div class="chat">
    <div class="flex flex-col w-1/4 divide-y divide-light ">
        <div class="flex justify-between p-6">
            <div class="flex flex-row h-12 w-full bg-light mr-4 bg-opacity-5 rounded-lg p-1 noselect">
                <input type="text" id="search" class="flex-shrink pl-3 flex-grow bg-light bg-opacity-0 text-light flex-auto leading-normal w-px flex-1 border-0 rounded rounded-l-none self-center relative  font-roboto text-md outline-none" placeholder="Jump to..." />
            </div>
            <btn>
                <ion-icon class="icon-btn" name="search-outline"></ion-icon>
            </btn>
        </div>
        <div class="flex flex-1  scroll">
            <div class="flex flex-col w-full text-light p-6">
                <div class="flex w-full font-bold text-xl mb-4">Discussions</div>
                <contact v-for="contact in getDiscussions" :key="contact.id" @click="selectDiscussion(contact)" v-bind="contact" />
            </div>
        </div>
    </div>
    <div v-if="getSelectedDiscussion !==null" class="flex-grow w-1/2 divide-y divide-light ">
        <div class="flex justify-between w-full p-6">
            <div class="flex">
                <avatar size="w-12 h-12" />
                <p class="self-center text-xl ml-6 text-light">{{getSelectedDiscussion.firstname + " " + getSelectedDiscussion.lastname}}</p>
            </div>
            <div class="flex space-x-4">
                <btn>
                    <ion-icon class="icon-btn" name="videocam-outline"></ion-icon>
                </btn>
                <btn>
                    <ion-icon class="icon-btn" name="call-outline"></ion-icon>
                </btn>
                <btn>
                    <ion-icon class="icon-btn" name="star-outline"></ion-icon>
                </btn>
            </div>
        </div>
        <div class="flex flex-col chatpanel content-between divide-y divide-light ">
            <chat-box class="p-5" />
            <chat-input class=" w-full" :destination="getSelectedDiscussion.firstname + ' ' + getSelectedDiscussion.lastname" />
        </div>
    </div>
    <div v-else class="flex flex-col items-center justify-center h-full flex-grow w-1/2">
            <h1 class="text-center p-4 text-4xl">Chat</h1>
            <p class="text-center">Select a contact in the left panel to view the discussion</p>
    </div>
    <div class="flex-grow w-1/4 divide-y divide-light scroll">
        <div class="flex">
            <btn :highlighted="true" class="w-full h-12 m-6 rounded-lg ">
                <ion-icon class="text-light text-xl" name="add-outline"></ion-icon>
                <p class="text-light">Add members</p>
            </btn>
        </div>
        <div class="flex flex-col space-y-6 p-6 pt-4">
            <container-list title="Images" icon="image-outline">   
                <div v-if="images.length != 0" class="gallery-list" id="Images">
                    <div class="gallery-item" v-for="image in images" :key="image" :style="{backgroundImage:`url(${image})`}"> </div>
                </div>
            </container-list>
            <container-list title="Files" icon="document-outline">
                <div v-if="files.length != 0">

                </div>
                <div v-if="files.length == 0"> You didn't share any file. </div>
            </container-list>
            <container-list title="Starred" icon="star-outline">
                <div v-if="starred.length == 0">
                    <p>Nothing starred.</p>
                </div>
            </container-list>

            <container-list title="More Options" icon="settings-outline">
                    
            </container-list>
        </div>
    </div>
</div>
</template>

<script>
import Avatar from '@/components/shared/Avatar.vue'
import ChatBox from '@/components/shared/ChatBox.vue'
import ChatInput from '@/components/shared/ChatInput.vue'
import Contact from '@/components/chat/Contact.vue'
import ContainerList from '@/components/ContainerList.vue'
import Btn from '@/components/shared/Btn.vue'


import {
    discussionComputed,
    discussionMethods
} from '@/state/helpers';



export default {
    data() {
        return {
            images:['https://picsum.photos/165/300?i=' + Math.random(),'https://picsum.photos/600/166?i=' + Math.random(),'https://picsum.photos/165/166?i=' + Math.random(),'https://picsum.photos/165/166?i=' + Math.random()],
            files:[
                {title : 'hey', logo : "blabla" , size : 10}
                ],
            starred:[]
        }
    },
    components: {
        Avatar,
        ChatBox,
        ChatInput,
        Contact,
        ContainerList,
        Btn
    },
    methods:{
        ...discussionMethods
    },
    computed:{
        ...discussionComputed
    }
}
</script>

<style lang="scss" scoped>
.chat {
    @apply flex flex-row w-full divide-x divide-light ;

    .chatpanel {
        @apply flex-col;
        max-height: calc(100vh - 6rem * 2);
    }
    .btn-icon{
        @apply text-gray-400 text-5xl;
    }

    .gallery-list{
        @apply grid gap-4 p-4 grid-cols-2;

        .gallery-item {
            @apply h-40 w-full rounded-xl bg-cover bg-center;
        }
    }
}
</style>
