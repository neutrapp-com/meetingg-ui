<template>
<div class="widget">
    <meeting @click="$emit('meetingClicked' , meeting)" class="meeting-block" v-for="meeting in meetingsList" v-bind:key="meeting.id" v-bind="{ title: `${meeting.title}`, color: `${meeting.color}`, startTime: `${meeting.startTime}`, endTime: `${meeting.endTime}`, members: meeting.members}" />
</div>
</template>

<script>
import Meeting from '../Meeting.vue';

export default {
    components: {
        Meeting
    },
    props: {
        meetingsList: {
            type: Array()
        }
    },
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
