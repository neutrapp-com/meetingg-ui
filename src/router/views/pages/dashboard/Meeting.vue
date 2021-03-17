<template>
    <div class="flex w-full divide-x divide-light divide-opacity-5">
        <div class="flex w-1/2 p-6 scroll">
            <list v-on:meetingClicked="selectMeeting($event)"  class="pr-6" :meetingsList="getMeetings"/>
        </div>  
        <div class="flex w-1/2 p-6 scroll">
            <panel v-if="getSelectedMeeting !== null" class="pr-6" v-bind:meeting="getSelectedMeeting"/>
            <new v-else-if="create" />
            <div v-else class="flex flex-col items-center justify-center h-full w-full">
                <h1 class="text-center p-4 text-4xl">Meeting</h1>
                <p class="text-center">Select a meeting in the left panel to view informations</p>
            </div>
        </div>  
    </div>
</template>

<script>
import List from '@/components/widgets/meeting/List.vue';
import Panel from '@/components/widgets/meeting/Panel.vue';

import {
    meetingComputed,
    meetingMethods
} from '@/state/helpers';
import New from './meeting/New.vue';

export default {
    components: {
        List,
        Panel,
        New,
    },
    props: {
        create : {
            type:Boolean,
            default: true,
        }
    },
    methods:{
        ...meetingMethods
    },
    computed:{
        ...meetingComputed
    },
    watch : {

    }
}
</script>
