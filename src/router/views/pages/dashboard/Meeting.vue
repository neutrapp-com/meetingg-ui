<template>
    <div class="flex w-full divide-x divide-light divide-opacity-5">
        <div class="flex w-1/2 p-6 scroll">
            <list v-on:meetingClicked="selectMeeting($event)"  class="pr-6" :meetingsList="getMeetings"/>
        </div>  
        <div class="flex w-1/2 p-6 scroll">
            <actions v-if="getSelectedMeeting !== null" class="pr-6" v-bind:meeting="getSelectedMeeting"/>
            <p v-else>eee</p>
        </div>
    </div>
</template>

<script>
import List from '@/components/widgets/meeting/List.vue';
import Actions from '@/components/widgets/meeting/Actions.vue';

import {
    meetingComputed,
    meetingMethods
} from '@/state/helpers';

export default {
    components: {
        List,
        Actions
    },
    methods:{
        ...meetingMethods
    },
    computed:{
        ...meetingComputed
    }
}
</script>
