<template>
<div class="widget">
    <template v-if="meetingsList && meetingsList.length > 0">
        <meeting @click="selectMeeting(meeting); $emit('meetingClicked' , meeting);navigateTo('/meetings')" class="meeting-block" v-for="meeting in meetingsList" v-bind:key="meeting.id" :meeting="meeting" />
    </template>
    <div v-else class="flex items-center py-8 justify-center">
        <h2 class="text-xl">You don't have any upcoming meetings!!</h2>
    </div>
</div>
</template>

<script>
import Meeting from '../Meeting.vue';
import router from '@/router'

import {
    meetingMethods,
} from '@/state/helpers';


export default {
    components: {
        Meeting
    },
    props: {
        meetingsList: {
            type: Array()
        }
    },
    methods:{
        ...meetingMethods,
        navigateTo(link){
            router.push(link)
        }
    }
}
</script>

<style lang="scss" scoped>
.widget {
    @apply flex flex-col w-full;

    h1 {
        @apply p-4;
        color: #ffffff;
        font-size: 2rem;
    }

    .meeting-block{
        @apply my-2 cursor-pointer;
    }

    .meetings {
        @apply flex flex-wrap p-4;

        div {
            padding-right: 12px;
            padding-bottom: 12px;
            width: 95%;
        }
        
    }
}
</style>
