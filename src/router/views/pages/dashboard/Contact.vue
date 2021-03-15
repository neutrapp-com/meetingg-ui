<template>
<div class="contact-list">
    <div class="header">
        <Switch class="w-4/5" :items="[{name : 'contact',title :'Contact', },{name : 'channels',title :'Meetings', selected:true}]" v-on:switch="tab = $event" />

        <btn>
            <ion-icon class="text-light text-xl" name="person-add"></ion-icon>
        </btn>
    </div>
    <div class="w-full p-6 scroll">
        <list-group class="pr-6" :title="tab.title">
            <list-sub-group v-on:contactClicked="currentContact = $event" v-for="subGroup in getSubGroups" v-bind:key="subGroup.id" :items="subGroup.items" :title="subGroup.title" />
        </list-group>
    </div>
</div>
<div class="flex-grow h-full p-6">
    <div class="contact-box">
        <div class="flex w-full pb-10">
            <avatar size="w-32 h-32" />
            <p class="self-center text-4xl ml-10 text-light font-bold">{{currentContact.firstname + " " + currentContact.lastname}}</p>
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
                <btn>
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
                        <p>{{currentContact.phone}}</p>
                    </div>
                </div>
                <div class="flex w-1/2">
                    <div class="contact-info">
                        <ion-icon class="text-gray-400 text-xl" name="print-outline"></ion-icon>
                    </div>
                    <div class="text-light mt-1 ml-4">
                        <p class="text-xs text-gray-400">Fax</p>
                        <p>{{currentContact.fax}}</p>
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
                        <p>{{currentContact.email}}</p>
                    </div>
                </div>
                <div class="flex w-1/2">
                    <div class="contact-info">
                        <ion-icon class="text-gray-400 text-xl" name="business-outline"></ion-icon>
                    </div>
                    <div class="text-light mt-1 ml-4">
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
import Btn from '@/components/shared/Btn.vue'
import Switch from '@/components/shared/Switch.vue'

export default {
    components: {
        Avatar,
        ListGroup,
        ListSubGroup,
        Btn,
        Switch,
    },
    data() {
        return {
            tab: {},
            currentContact: {
                firstname: "Rais",
                lastname: "Yassin",
                email: "yassine@rais.me",
                phone: "06 01 02 03 04",
                fax: "03 24 65 89 78",
                city: "Reims",
                status: 0,
                id: 1,

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
                            id: 1,
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
}
</script>

<style lang="scss" scoped>
.contact-list {
    @apply flex flex-col w-2/5 divide-y divide-light divide-opacity-5;

    .header{
        @apply flex w-full p-6 justify-between;
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
