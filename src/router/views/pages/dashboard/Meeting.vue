<template>
    <div class="flex w-full divide-x divide-light divide-opacity-5">
        <div class="flex w-2/5 p-6 scroll">
            <list v-on:meetingClicked="selectMeeting($event)"  class="pr-6" :meetingsList="getMeetings"/>
        </div>  
        <div class="flex w-3/5 scroll relative  py-8 px-8">
            <panel v-if="getSelectedMeeting !== null" class="pr-6" v-bind:meeting="getSelectedMeeting"/>
            <new v-else-if="create" v-on:inviteMember="inviteMember()"  />
            <div v-else class="flex flex-col items-center justify-center p-6 h-full w-full">
                <h1 class="text-center p-4 text-4xl">Meeting</h1>
                <p class="text-center">Select a meeting in the left panel to view informations</p>
            </div>
        </div>  
        <div v-if="!popup" class="absolute top-0 bg-black w-full h-full flex items-center bg-opacity-30 scroll">
            <div class="md:w-1/2 xl:1/5 lg:w-2/5 p-6 mx-auto scroll rounded-xl mt-28 bg">
                <list-group class="pr-6" title="Add Participant">
                    <list-sub-group class="scroll" v-on:contactClicked="selectContact($event)" v-for="group in getGroups" v-bind:key="group.id" :items="group.contacts" :title="group.title" />
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

export default {
    components: {
        List,
        Panel,
        New,
        Btn,
        ListGroup,
        ListSubGroup
    },
    props: {
        create : {
            type:Boolean,
            default: true,
        }
    },
    data(){
        return {
            popup: false
        }
    },
    methods:{
        ...meetingMethods,
        ...contactMethods,
        inviteMember(){
            this.popup = !this.popup
        }
    },
    computed:{
        ...meetingComputed,
        ...contactComputed
    }
}
</script>

<style scoped>
.bg{
    background-color: #34394e;
}
</style>