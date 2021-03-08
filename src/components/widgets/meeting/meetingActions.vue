<template>
    <div class="widget">
        <manage-meeting v-bind="{ title: `${ meetingTitle }`, startTime: `${ startTime }`, endTime: `${ endTime }`, description: `${ meetingDescription }` }" />
        <meeting-id v-bind="{ numberId: `${ meetingId }` }"/>
        <participant-list :members="meetingMembers" />
    </div>
</template>

<script>
    import MeetingId from '../../cards/MeetingId.vue';
    import manageMeeting from './manageMeeting.vue';
    import participantList from '../participantList.vue';

    export default {
        name : 'meetingActions',
        components: { MeetingId, manageMeeting, participantList},
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
    @apply flex flex-col;
    padding: 10px 30px 10px 30px;

    div{
        padding-top: 24px;
    }

}

</style>