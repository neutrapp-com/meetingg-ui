<template>
<div class="flex flex-col w-2/5 p-6 divide-y divide-white divide-opacity-5">
    <div class="flex w-full justify-between pb-6">
        <div class="flex flex-row h-12 bg-light bg-opacity-5 rounded-lg p-1 noselect">
            <button @click="switchContact" :class="tabContact ? 'active' : 'text-gray-400'" class="w-32 focus:outline-none">Contacts</button>
            <button @click="switchChannel" :class="!tabContact ? 'active' : 'text-gray-400'" class="w-32 focus:outline-none">Channels</button>
        </div>

        <div class="bg-light bg-opacity-5 w-12 h-12 rounded-lg items-center justify-center flex">
            <ion-icon class="text-white text-xl" name="person-add"></ion-icon>
        </div>
    </div>
    <div class="w-full py-6 scroll">
        <list-group :title="tabContact ? 'My Contacts' : 'My Channels'">
            <list-sub-group v-on:contactClicked="currentContact = $event" v-for="subGroup in getSubGroups" v-bind:key="subGroup.id" :items="subGroup.items" :title="subGroup.title" />
        </list-group>
    </div>
  </div>  
  <div class="flex-grow h-full p-6">
    <div class="w-full flex flex-col bg-light bg-opacity-5 rounded-lg border border-white border-opacity-5 p-10 divide-y divide-white divide-opacity-5">
        <div class="flex w-full pb-10">
            <avatar size="w-32 h-32"/>
            <p class="self-center text-4xl ml-10 text-white font-bold">{{currentContact.firstname + " " + currentContact.lastname}}</p>  
        </div>
        <div class="w-full flex justify-between py-5 text-gray-400">
            <div class="flex space-x-6">
                <div class="bg-light bg-opacity-5 border border-white border-opacity-5 h-12 rounded-lg items-center justify-center flex">
                    <ion-icon class="text-gray-400 text-xl ml-4" name="call-outline"></ion-icon>
                    <p class="mx-4">Call</p>
                </div>
                <div class="message h-12 border border-white border-opacity-5 rounded-lg items-center justify-center flex">
                    <ion-icon class="text-white text-xl ml-4" name="chatbox-ellipses-outline"></ion-icon>
                    <p class="mx-4 text-white">Message</p>
                </div>
                <div class="bg-light border border-white border-opacity-5 bg-opacity-5 h-12 rounded-lg items-center justify-center flex">
                    <ion-icon class="text-gray-400 text-xl ml-4" name="videocam-outline"></ion-icon>
                    <p class="mx-4">Video-Call</p>
                </div>
            </div>
            <div class="flex space-x-6">
                <div class="bg-light border border-white border-opacity-5 bg-opacity-5 w-12 h-12 rounded-lg items-center justify-center flex">
                    <ion-icon class="text-gray-400 text-xl" name="create-outline"></ion-icon>
                </div>
                <div class="bg-light border border-white border-opacity-5 bg-opacity-5 w-12 h-12 rounded-lg items-center justify-center flex">
                    <ion-icon class="text-gray-400 text-xl" name="trash-outline"></ion-icon>
                </div>
            </div>
        </div>
        <div class="flex w-full pb-6">
            <p class="text-xl font-bold text-white mt-16">Contact's Info</p>
        </div>
        <div>
            <div class="flex w-full pt-6">
                <div class="flex w-2/3">
                    <div class="bg-light border border-white border-opacity-5 bg-opacity-5 w-12 h-12 rounded-lg items-center justify-center flex">
                        <ion-icon class="text-gray-400 text-xl" name="call-outline"></ion-icon>
                    </div>
                    <div class="text-white mt-1 ml-4">
                        <p class="text-xs text-gray-400">Phone</p>
                        <p>{{currentContact.phone}}</p>
                    </div>
                </div>
                <div class="flex w-1/2">
                    <div class="bg-light border border-white border-opacity-5 bg-opacity-5 w-12 h-12 rounded-lg items-center justify-center flex">
                        <ion-icon class="text-gray-400 text-xl" name="print-outline"></ion-icon>
                    </div>
                    <div class="text-white mt-1 ml-4">
                        <p class="text-xs text-gray-400">Fax</p>
                        <p>{{currentContact.fax}}</p>
                    </div>
                </div>
            </div>
            <div class="flex w-full pt-6">
                <div class="flex w-2/3">
                    <div class="bg-light border border-white border-opacity-5 bg-opacity-5 w-12 h-12 rounded-lg items-center justify-center flex">
                        <ion-icon class="text-gray-400 text-xl" name="mail-outline"></ion-icon>
                    </div>
                    <div class="text-white mt-1 ml-4">
                        <p class="text-xs text-gray-400">Email</p>
                        <p>{{currentContact.email}}</p>
                    </div>
                </div>
                <div class="flex w-1/2">
                    <div class="bg-light border border-white border-opacity-5 bg-opacity-5 w-12 h-12 rounded-lg items-center justify-center flex">
                        <ion-icon class="text-gray-400 text-xl" name="business-outline"></ion-icon>
                    </div>
                    <div class="text-white mt-1 ml-4">
                        <p class="text-xs text-gray-400">City</p>
                        <p>{{currentContact.city}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>

import Avatar from '@/components/shared/Avatar.vue'
import ListGroup from '@/components/shared/ListGroup.vue'
import ListSubGroup from '@/components/shared/ListSubGroup.vue'

export default {
    components:{
        Avatar,
        ListGroup,
        ListSubGroup
    },
    data(){
        return{
            tabContact: false,
            currentContact:{
                firstname: "Rais",
                lastname: "Yassin",
                email: "yassine@rais.me",
                phone: "06 01 02 03 04",
                fax: "03 24 65 89 78",
                city: "Reims",
                status: 0,
                id:1,

            },
            groups: [{
                    id: 1,
                    title: "Starred",
                    items: [{
                        firstname: "Rais",
                        lastname: "Yassin",
                        email: "yassine@rais.me",
                        phone: "06 01 02 03 04",
                        fax: "03 24 65 89 78",
                        city: "Reims",
                        status: 0,
                        id:1,
                    }, {
                        id: 2,
                        firstname: "Rais",
                        lastname: "Yassin",
                        email: "yassine@rais.me",
                        phone: "06 01 02 03 04",
                        fax: "03 24 65 89 78",
                        city: "Reims",
                        status: 0,
                    }]
                },
                {
                    id: 2,
                    title: "Others",
                    items: [{
                        firstname: "Rais",
                        lastname: "Yassin",
                        email: "yassine@rais.me",
                        phone: "06 01 02 03 04",
                        fax: "03 24 65 89 78",
                        city: "Reims",
                        status: 0,
                        id:1,
                    }, 
                    {
                        id: 2,
                        firstname: "Rais",
                        lastname: "Mohammed",
                        email: "yassine@rais.me",
                        phone: "06 01 02 03 04",
                        fax: "03 24 65 89 78",
                        city: "Reims",
                        status: 0,
                    },
                    {
                        id: 3,
                        firstname: "Rais",
                        lastname: "Remy",
                        email: "yassine@rais.me",
                        phone: "06 01 02 03 04",
                        fax: "03 24 65 89 78",
                        city: "Reims",
                        status: 0,
                    },
                    {
                        id: 4,
                        firstname: "Papriko",
                        lastname: "Albero",
                        email: "alberto@rais.me",
                        phone: "06 01 02 03 04",
                        fax: "03 24 65 89 78",
                        city: "Reims",
                        status: 0,
                    },
                    {
                        id: 5,
                        firstname: "Rais",
                        lastname: "Yassin",
                        email: "yassine@rais.me",
                        phone: "06 01 02 03 04",
                        fax: "03 24 65 89 78",
                        city: "Reims",
                        status: 0,
                    },
                    ]
                },
            ]
        }
    },
    computed: {
        getSubGroups() {
            return this.groups;
        }
    },
    methods: {
        switchContact() {
            this.tabContact = true;
        },
        switchChannel() {
            this.tabContact = false;
        }

    }
}
</script>

<style scoped>
.active {
    @apply text-white bg-light bg-opacity-10 rounded-lg border border-white border-opacity-5;
}
.message{
    background-color: #0e78f9;
}

</style>
