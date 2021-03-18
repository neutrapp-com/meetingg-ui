<template>
    <div class="meeting">
        <div class="flex flex-col w-2/5 divide-y divide-light divide-opacity-5">
            <div class="flex p-6 space-x-4">
                <btn :highlighted="true" @click="create = true" class="w-full py-6 rounded-lg ">
                    <ion-icon class="text-light text-xl mr-6" name="videocam"></ion-icon>
                    <p class="text-light text-xl">New Meeting</p>
                </btn>
                <btn @click="join = true; create = false" class="w-full py-6 rounded-lg ">
                    <ion-icon class="text-light text-xl mr-6" name="log-in-outline"></ion-icon>
                    <p class="text-light text-xl">Join Meeting</p>
                </btn>
            </div>
            <div class="w-full scroll pr-6">
                <list @click="join = false; create = false" v-on:meetingClicked="selectMeeting($event); create = false"  class="p-6 pt-4" :meetingsList="getMeetings"/>
            </div>
        </div>  
        <div class="flex w-3/5 scroll relative  py-8 px-8">
            <new v-if="create" v-on:inviteMember="inviteMember($event)" v-on:meetingCreated="create = false"/>
            <join v-else-if="join" v-on:inviteMember="inviteMember($event)" v-on:meetingCreated="create = false"/>
            <panel v-else-if="getSelectedMeeting !== null" v-on:inviteMember="inviteMember($event)" v-on:deleteMeeting="delMeeting($event)" class="pr-6" v-bind:meeting="getSelectedMeeting"/>
            <div v-else class="flex flex-col items-center justify-center p-6 h-full w-full">
                <h1 class="text-center p-4 text-4xl">Meeting</h1>
                <p class="text-center">Select a meeting in the left panel to view informations</p>
            </div>
        </div>  
        <div v-if="popup" class="absolute top-0 bg-black w-full h-full flex items-center bg-opacity-30 scroll">
            <div class="md:w-1/2 xl:1/5 lg:w-2/5 p-6 mx-auto scroll rounded-xl mt-28 bg">
                <list-group class="pr-6" title="Add Participant">
                    <list-sub-group class="scroll" v-on:contactClicked="contactAdd($event)" v-for="group in getGroups" v-bind:key="group.id" :items="group.contacts" :title="group.title" />
                </list-group>
                <btn @click="popup = !popup" class="mr-6 mt-6">
                    <p>Cancel</p>
                </btn>
            </div>
        </div>
    </div>
</template>

<script>
import List from '@/components/widgets/meeting/List.vue';
import Panel from '@/components/widgets/meeting/Panel.vue';
import ListGroup from '@/components/shared/ListGroup.vue'
import ListSubGroup from '@/components/shared/ListSubGroup.vue'
import Btn from '@/components/shared/Btn.vue'

import {
    meetingComputed,
    meetingMethods,
    contactComputed,
    contactMethods
} from '@/state/helpers';
import New from './meeting/New.vue';
import Join from './meeting/Join.vue';

export default {
    components: {
        List,
        Panel,
        New,    
        Join,
        Btn,
        ListGroup,
        ListSubGroup
    },
    data(){
        return {
            create: false,
            join: false,
            new: true,
            popup: false,
            newParticipants: []
        }
    },
    methods:{
        ...meetingMethods,
        ...contactMethods,
        inviteMember(participants){
            this.newParticipants = participants
            this.popup = !this.popup
        },
        contactAdd(contact){
            if(!this.newParticipants.find(item => item.id == contact.id)){
                this.newParticipants.push(contact)
            }
        },
        delMeeting(){
            return this.deleteMeeting({})
            .then((response) => {
                    this.unselectMeeting()
                   this.fetchMeetings()
            })
            .catch((error) => {
            })
        }
    },
    created(){
        this.fetchMeetings();
        this.fetchContacts();
    },
    computed:{
        ...meetingComputed,
        ...contactComputed
    }
}
</script>

<style scoped>
.meeting{
    @apply flex w-full divide-x divide-light transition divide-opacity-5 p-0;
}
.bg{
    background-color: #34394e;
}
</style>