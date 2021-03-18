<template>
<div class="contact-list">
    <div class="header">
        <div class="flex w-full space-x-6">
            <Switch class="w-2/3" :items="contactSwitch" v-on:switch="tab = $event" />
            <btn @click="openSearch = !openSearch;" class="flex flex-grow space-x-4" :highlighted="true">
                <ion-icon class="text-light text-xl" :name="openSearch ?  'close-outline' :'person-add'"></ion-icon>
                <p>{{openSearch ? 'Close' : 'Contact'}}</p>
            </btn>
        </div>
        <div v-if="openSearch" class="flex w-full mt-6">
            <div class="flex flex-row h-12 w-full bg-light mr-4 bg-opacity-5 rounded-lg p-1 noselect">
                <input v-model="contactName" type="text" id="search" class="flex-shrink pl-3 flex-grow bg-light bg-opacity-0 text-light flex-auto leading-normal w-px flex-1 border-0 rounded rounded-l-none self-center relative  font-roboto text-md outline-none" placeholder="Add contact..." />
            </div>
            <btn @click="searchContacts" class="w-16 space-x-4">
                <ion-icon class="text-light text-xl" name="search-outline"></ion-icon>
            </btn>
        </div>
    </div>
    <div class="w-full p-6 scroll">
        <list-group v-if="searchResultDisplay && openSearch" class="pr-6" title="Search Results">
            <result v-on:addProfile="_addContact($event)" v-for="profile in searchResult" :key="profile.id" :profile="profile" />
        </list-group>
        <list-group v-else class="pr-6" :title="tab.title">
            <list-sub-group v-on:contactClicked="selectContact($event)" v-for="group in getGroups" v-bind:key="group.id" :items="group.contacts" :title="group.title" />
        </list-group>
    </div>
</div>

<div class="flex-grow h-full p-6">
    <div v-if="getSelectedContact !== null" class="contact-box">
        <div class="flex w-full pb-10">
            <avatar :image="getSelectedContact.avatar" size="w-32 h-32" />
            <p class="self-center text-4xl ml-10 text-light font-bold">{{getSelectedContact.firstname + " " + getSelectedContact.lastname}}</p>
        </div>
        <div class="w-full flex justify-between py-5 text-gray-400">
            <div class="flex space-x-6">
                <btn>
                    <ion-icon class="text-gray-400 text-xl" name="call-outline"></ion-icon>
                    <p class="ml-4">Call</p>
                </btn>
                <btn :highlighted="true">
                    <ion-icon class="text-light text-xl" name="chatbox-ellipses-outline"></ion-icon>
                    <p class="ml-4 text-light">Message</p>
                </btn>
                <btn>
                    <ion-icon class="text-gray-400 text-xl" name="videocam-outline"></ion-icon>
                    <p class="ml-4">Video-Call</p>
                </btn>
            </div>
            <div class="flex space-x-6">
                <btn>
                    <ion-icon class="text-gray-400 text-xl" name="create-outline"></ion-icon>
                </btn>
                <btn @click="_deleteContact">
                    <ion-icon class="text-gray-400 text-xl" name="trash-outline"></ion-icon>
                </btn>
            </div>
        </div>
        <div class="flex w-full pb-6">
            <p class="text-xl font-bold text-light mt-16">Contact's Info</p>
        </div>
        <div>
            <div class="flex w-full pt-6">
                <div class="flex w-2/3">
                    <div class="contact-info">
                        <ion-icon class="text-gray-400 text-xl" name="call-outline"></ion-icon>
                    </div>
                    <div class="text-light mt-1 ml-4">
                        <p class="text-xs text-gray-400">Phone</p>
                        <p>{{getSelectedContact.phone == null ? '-' : getSelectedContact.phone }}</p>
                    </div>
                </div>
                <div class="flex w-1/2">
                    <div class="contact-info">
                        <ion-icon class="text-gray-400 text-xl" name="print-outline"></ion-icon>
                    </div>
                    <div class="text-light mt-1 ml-4">
                        <p class="text-xs text-gray-400">Fax</p>
                        <p>{{getSelectedContact.fax == null ? '-' : getSelectedContact.fax }}</p>
                    </div>
                </div>
            </div>
            <div class="flex w-full pt-6">
                <div class="flex w-2/3">
                    <div class="contact-info">
                        <ion-icon class="text-gray-400 text-xl" name="mail-outline"></ion-icon>
                    </div>
                    <div class="text-light mt-1 ml-4">
                        <p class="text-xs text-gray-400">Email</p>
                        <p>{{getSelectedContact.email == null ? '-' : getSelectedContact.email }}</p>
                    </div>
                </div>
                <div class="flex w-1/2">
                    <div class="contact-info">
                        <ion-icon class="text-gray-400 text-xl" name="business-outline"></ion-icon>
                    </div>
                    <div class="text-light mt-1 ml-4">
                        <p class="text-xs text-gray-400">City</p>
                        <p>{{getSelectedContact.city == null ? '-' : getSelectedContact.city }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="flex flex-col items-center justify-center h-full" v-else>
        <div>
            <img class="m-auto" src="@/assets/images/contact-book.png">
            <h1 class="text-center p-4 text-4xl mt-8">Contact</h1>
            <p class="text-center">Select a contact in the left panel to view his informations</p>
        </div>
    </div>
</div>
</template>

<script>
import Avatar from '@/components/shared/Avatar.vue'
import ListGroup from '@/components/shared/ListGroup.vue'
import ListSubGroup from '@/components/shared/ListSubGroup.vue'
import Btn from '@/components/shared/Btn.vue'
import Switch from '@/components/shared/Switch.vue'
import router from '@/router'
import Result from '@/components/shared/Result.vue'

import {
    contactComputed,
    contactMethods,
    discussionMethods

} from '@/state/helpers';

export default {
    components: {
        Avatar,
        ListGroup,
        ListSubGroup,
        Btn,
        Switch,
        Result
    },
    data() {
        return {
            searchResultDisplay: false,
            searchResult: [],
            contactName: null,
            openSearch: false,
            contactSwitch:[{name : 'contact',title :'Contact', selected:true},{name : 'channels',title :'Meetings'}],
            tab: {},
        }
    },
    computed: {
        ...contactComputed,
        getSubGroups() {
            return this.groups;
        }
    },
    methods: {
        ...contactMethods,
        ...discussionMethods,
        navigateTo(link){
            router.push(link)
        },
        searchContacts(){
            return this.searchContact({
                    search: this.contactName,
                })
                .then((response) => {
                   this.searchResultDisplay = true
                   this.searchResult = response.rows
                })
                .catch((error) => {
                })
        }, 
        _addContact(contact){
            return this.addContact({
                    target_id: contact.id,
                    title: contact.lastname + ' ' + contact.firstname
                })
                .then((response) => {
                   this.fetchContacts()
                })
                .catch((error) => {
                })
        },
        _deleteContact(){
            console.log('ee')
            return this.deleteContact({})
            .then((response) => {
                   this.fetchContacts()
                })
                .catch((error) => {
                })
        }
    },
    created(){
        this.fetchContacts()
    }
}
</script>

<style lang="scss" scoped>
.contact-list {
    @apply flex flex-col w-2/5 divide-y divide-light divide-opacity-5;

    .header{
        @apply flex flex-col w-full p-6 justify-between;
    }
}

.message {
    background-color: #0e78f9;
}

.contact-box {
    @apply w-full flex flex-col bg-light bg-opacity-5 rounded-lg border border-white border-opacity-5 p-10 divide-y divide-light divide-opacity-5;
}

.contact-info {
    @apply bg-light border border-white border-opacity-5 bg-opacity-5 w-12 h-12 rounded-lg items-center justify-center flex;
}
</style>
