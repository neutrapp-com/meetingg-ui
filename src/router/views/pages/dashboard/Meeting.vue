<template>
    <div class="flex w-full divide-x divide-light divide-opacity-5" :class="{ 'opacity-10': displayAddMember }">
        <div class="flex w-1/2 p-6 scroll">
            <list v-on:meetingClicked="selectMeeting($event)"  class="pr-6" :meetingsList="getMeetings"/>
        </div>  
        <div class="flex w-1/2 p-6 scroll">
            <actions v-if="getSelectedMeeting !== null" class="pr-6" v-bind:meeting="getSelectedMeeting" @change-background="childMessageReceived()"/>
            <div v-else class="flex flex-col items-center justify-center h-full w-full">
                <h1 class="text-center p-4 text-4xl">Meeting</h1>
                <p class="text-center">Select a meeting in the left panel to view informations</p>
            </div>
        </div>  
    </div>

    <!-- popup -->
    <div v-if="displayAddMember" class="popup">
        <div class="flex flex-col">
            <h1 class="m-14 text-4xl">Add a member</h1>
            <div class="flex flex-row  h-12 bg-light mr-4 ml-4 bg-opacity-5 rounded-lg p-1 noselect">
                <input type="text" id="addMemberName" class="flex-shrink pl-3 flex-grow bg-light bg-opacity-0 text-light flex-auto leading-normal w-px flex-1 border-0 rounded rounded-l-none self-center relative font-roboto text-md outline-none" placeholder="Member name" />
            </div>
            <btn :highlighted="true" class="m-6 rounded-lg" @click="displayAddMember = !displayAddMember;">
                <p class="text-light">Close</p>
            </btn>

        </div>
    </div>
</template>

<script>
import List from '@/components/widgets/meeting/List.vue';
import Actions from '@/components/widgets/meeting/Actions.vue';
import Btn from '@/components/shared/Btn.vue'

import {
    meetingComputed,
    meetingMethods
} from '@/state/helpers';

export default {
    data(){
        return {displayAddMember: false};
    },
    components: {
        List,
        Actions,
        Btn
    },
    methods:{
        ...meetingMethods,
        childMessageReceived(){
            this.displayAddMember = !this.displayAddMember;
        }
    },
    computed:{
        ...meetingComputed
    }
}
</script>

<style scoped lang="scss">
.popup{
    @apply absolute;
    background-color:#282a39;
}
</style>