<template>
    <div class="flex w-full divide-x divide-light divide-opacity-5">
        <div class="flex w-1/2 p-6 scroll">
            <list v-on:meetingClicked="selectMeeting($event)"  class="pr-6" :meetingsList="getMeetings"/>
        </div>  
        <div v-on:clicked="openPopUp" class="flex w-1/2 scroll relative">
            <actions v-if="getSelectedMeeting !== null" class="p-6" v-bind:meeting="getSelectedMeeting"/>
            <div v-else class="flex flex-col items-center justify-center p-6 h-full w-full">
                <h1 class="text-center p-4 text-4xl">Meeting</h1>
                <p class="text-center">Select a meeting in the left panel to view informations</p>
            </div>
            <div v-if="!popup" class="absolute top-0 bg-black w-full h-full flex items-center bg-opacity-30 scroll">
                <div class="w-2/3 p-6 mx-auto scroll rounded-xl mt-28 bg">
                    <list-group class="pr-6" title="Add Participant">
                        <list-sub-group v-on:contactClicked="selectContact($event)" v-for="group in getGroups" v-bind:key="group.id" :items="group.contacts" :title="group.title" />
                    </list-group>
                    <btn @click="popup = !popup" class="mr-6 mt-6">
                        <p>Cancel</p>
                    </btn>
                </div>
            </div>
        </div>  
    </div>
</template>

<script>
import List from '@/components/widgets/meeting/List.vue';
import Actions from '@/components/widgets/meeting/Actions.vue';
import ListGroup from '@/components/shared/ListGroup.vue'
import ListSubGroup from '@/components/shared/ListSubGroup.vue'
import Btn from '@/components/shared/Btn.vue'

import {
    meetingComputed,
    meetingMethods,
    contactComputed,
    contactMethods
} from '@/state/helpers';

export default {
    components: {
        List,
        Actions,
        ListGroup,
        Btn,
        ListSubGroup
    },
    data(){
        return {
            popup: false
        }
    },
    methods:{
        ...meetingMethods,
        ...contactMethods,
        openPopUp(){
            console.log("eees")
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