<template>
    <div class="widget">
        <manage v-on:deleteMeeting="deleteM" :meeting="meeting" />
        <participant-list v-on:inviteMember="$emit('inviteMember', participants)" :members="meeting.members" />
    </div>
</template>

<script>
import Manage from './Manage.vue';
import ParticipantList from './ParticipantList.vue';

export default {
    components: {
        Manage,
        ParticipantList
    },
    props: {
        meeting: {
            type: Object
        },
    },
    methods:{
        deleteM(){
            this.$emit('deleteMeeting')
        }
    }
}
</script>

<style lang="scss" scoped>
.widget {
    @apply flex flex-col w-full divide-y divide-light divide-opacity-5;
}
</style>
