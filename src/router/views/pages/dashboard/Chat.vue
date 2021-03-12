<template>
<div class="chat">
    <div class="flex flex-col w-1/4 divide-y divide-light ">
        <div class="flex justify-between p-6">
            <div class="flex flex-row h-12 w-full bg-light mr-4 bg-opacity-5 rounded-lg p-1 noselect">
                <input type="text" id="search" class="flex-shrink pl-3 flex-grow bg-light bg-opacity-0 text-white flex-auto leading-normal w-px flex-1 border-0 border-grey-light rounded rounded-l-none self-center relative  font-roboto text-md outline-none" placeholder="Jump to..." />
            </div>
            <btn>
                <ion-icon class="icon-btn" name="search-outline"></ion-icon>
            </btn>
        </div>
        <div class="flex flex-grow flex-col scroll">
            <div class="flex flex-col w-full text-white p-6">
                <div class="flex w-full font-bold text-xl mb-4">Starred</div>
                <div class="flex mt-4">
                    <div class="w-full p-1 cursor-pointer rounded-lg flex text-gray-400 justify-between">
                        <div class="flex w-full">
                            <ion-icon class="text-xl text-gray-400 px-3 my-3" name="star"></ion-icon>
                            <div class="title my-3">Starred Messages</div>
                        </div>
                        <div class="bg-light bg-opacity-5 w-12 h-10 p-1 rounded-lg items-center justify-center flex border border-white border-opacity-5">
                            0
                        </div>
                    </div>
                </div>
                <div class="flex">
                    <div class="w-full p-1 cursor-pointer rounded-lg flex text-gray-400 justify-between">
                        <div class="flex w-full">
                            <ion-icon class="text-xl text-gray-400 px-3 my-3" name="person-add"></ion-icon>
                            <div class="title my-3">Contact Requests</div>
                        </div>
                        <div class="bg-light bg-opacity-5 w-12 h-10 p-1 rounded-lg items-center justify-center flex border border-white border-opacity-5">
                            0
                        </div>
                    </div>
                </div>
                <contact v-for="contact in getItems" :key="contact.id" @click="$emit('contactClicked' , contact)" v-bind="contact" />
            </div>
        </div>
    </div>
    <div class="flex-grow w-1/2 divide-y divide-light ">
        <div class="flex justify-between w-full p-6">
            <div class="flex">
                <avatar size="w-12 h-12" />
                <p class="self-center text-xl ml-6 text-white">{{getCurrentDiscussion.firstname + " " + getCurrentDiscussion.lastname}}</p>
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
            <chat-box class="flex w-full h-full" />
            <chat-input class="flex w-full" :destination="getCurrentDiscussion.firstname + ' ' + getCurrentDiscussion.lastname" />
        </div>
    </div>
    <div class="flex-grow w-1/4 divide-y divide-light ">
        <div class="flex p-6">
            <btn :highlighted="true" class="w-full h-12 rounded-lg ">
                <ion-icon class="text-white text-xl" name="add-outline"></ion-icon>
                <p class="text-white">Add members</p>
            </btn>
        </div>
        <div class="flex flex-col space-y-6 p-6 pt-4">
            <container-list title="Images" icon="image-outline">
                <div v-if="image.length ===0">
                    <p>Nothing here</p>
                </div>
            </container-list>
            <container-list title="Files" icon="document-outline">
                <div v-if="image.length ===0">
                    <p>Nothing here</p>
                </div>
            </container-list>
            <container-list title="Starred" icon="star-outline">
                <div v-if="image.length ===0">
                    <p>Nothing here</p>
                </div>
            </container-list>
            <container-list title="More Options" icon="settings-outline">
                <div v-if="image.length ===0">
                    <p>Nothing here</p>
                </div>
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

export default {
    components: {
        Avatar,
        ChatBox,
        ChatInput,
        Contact,
        ContainerList,
        Btn
    },
    data() {
        return {
            group: [{
                firstname: "Rais",
                lastname: "Yassin",
                email: "yassine@rais.me",
                phone: "06 01 02 03 04",
                fax: "03 24 65 89 78",
                city: "Reims",
                status: 0,
                id: 1,
            }, {
                id: 2,
                firstname: "Rais",
                lastname: "Yassin",
                email: "yassine@rais.me",
                phone: "06 01 02 03 04",
                fax: "03 24 65 89 78",
                city: "Reims",
                status: 0,
            }],

            image: []
        }
    },
    computed: {
        getCurrentDiscussion() {
            return {
                lastname: "Rais",
                firstname: "Yassin",
            }
        },
        getItems() {
            return this.group;
        },
    }

}
</script>

<style lang="scss" scoped>
.chat {
    @apply flex flex-row w-full divide-x divide-light ;

    .chatpanel {
        height: 85%;
    }
    .btn-icon{
        @apply text-gray-400 text-xl;
    }
}
</style>
