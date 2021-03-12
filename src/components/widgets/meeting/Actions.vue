<template>
    <div class="widget">
        <manage v-bind="{ title: `${ meetingTitle }`, startTime: `${ startTime }`, endTime: `${ endTime }`, description: `${ meetingDescription }` }" />
        <meeting-id v-bind="{ numberId: `${ meetingId }` }"/>
        <participant-list :members="meetingMembers" />
    </div>
</template>

<script>
    import MeetingId from '../../cards/MeetingId.vue';
    import Manage from './Manage.vue';
    import ParticipantList from '../ParticipantList.vue';

    export default {
        components: { MeetingId,
                        Manage,
                        ParticipantList},
        props : {
            meetingTitle : {
                default : 'Meeting Title',
                type: String
            },
            startTime : {
                default : (Date.now()/1000 + 3600 * 3),
                type: Number
            },
            endTime : {
                default : (Date.now()/1000  + 3600 * 4),
                type: Number
            },
            meetingDescription : {
                default : 'Your description',
                type: String
            },
            meetingId: {
                default: 'XXX XXX XXX',
                type: String
            },
            meetingMembers : {
                default : [{ profileLink: "1", fullname: 'Jhon Doe', icon: 'https://i.imgur.com/DkwKnRj.jpg' }],
                type: Array()
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
    @apply flex flex-col w-full;
}

</style>