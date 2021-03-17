<template>
    <div class="widget">
        <manage :meeting="meeting" />
        <meeting-id v-bind:id="meeting.id" />
        <participant-list :members="meeting.members" />
    </div>
</template>

<script>
import MeetingId from './MeetingId.vue';
import Manage from './Manage.vue';
import ParticipantList from './ParticipantList.vue';

export default {
    components: {
        MeetingId,
        Manage,
        ParticipantList
    },
    props: {
        meeting: {
            type: Object
        },
    },
}
</script>

<style lang="scss" scoped>
.widget {
    @apply flex flex-col w-full divide-y divide-light divide-opacity-5;
}
</style>
