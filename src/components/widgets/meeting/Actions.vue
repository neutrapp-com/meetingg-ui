<template>
    <div class="widget">
        <manage v-bind="meeting" />
        <meeting-id v-bind:id="meeting.id"/>
        <participant-list :members="meeting.members" @change-background="changeBackground()"/>
    </div>
</template>

<script>
    import MeetingId from './MeetingId.vue';
    import Manage from './Manage.vue';
    import ParticipantList from './ParticipantList.vue';

    export default {
        components: { MeetingId,
                        Manage,
                        ParticipantList},
        props : {
            meeting: {
                type: Object
            },
        },
        methods: {
            changeBackground(){
                this.$emit('changeBackground');
            }
        },
        computed : {
            updateDateWidget(){
                return (new Date()).toString();
            }
        }
    }
</script>

<style scoped lang="scss">

.widget {
    @apply flex flex-col w-full divide-y divide-light divide-opacity-5;
}

</style>