<template>
    <div class="widget">
        <meeting-list v-bind="{ meetingsList: meetingsList }" />
        <meeting-actions v-bind="{ meetingTitle: meetingTitle, startTime: startTime, endTime: endTime, meetingDescription: meetingDescription, meetingId: meetingId, meetingMembers: meetingMembers }" />
    </div>
</template>

<script>
    import meetingList from '../widgets/meeting/List.vue';
    import meetingActions from '../widgets/meeting/Actions.vue';

    export default {
        name : 'meetingPage',
        components: { meetingList, meetingActions },
        props : {
            meetingTitle : {
                default : 'Meeting Title 2',
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
                default : [{ profileLink: "1", fullname: 'Jhon Doe', icon: 'https://i.imgur.com/DkwKnRj.jpg' }, { profileLink: "2", fullname: 'Jhon Doe 2', icon: 'https://i.imgur.com/DkwKnRj.jpg' }],
                type: Array()
            },
            meetingsList : {
                default : [
                    {title: "Reunion", color: '#212534', startTime: (Date.now()/1000 + 3600 * 3), endTime: (Date.now()/1000  + 3600 * 4), members: [
                        { id: Math.random(), fullname: 'Jhon Doe', avatar: 'https://i.imgur.com/DkwKnRj.jpg' },
                        { id: Math.random(), fullname: 'Jhon Doe', avatar: 'https://i.imgur.com/DkwKnRj.jpg' },
                        { id: Math.random(), fullname: 'Jhon Doe', avatar: 'https://i.imgur.com/DkwKnRj.jpg' }]
                    },
                    {title: "Reunion 2", color: '#212534', startTime: (Date.now()/1000 + 3600 * 3), endTime: (Date.now()/1000  + 3600 * 4), members: [
                        { id: Math.random(), fullname: 'Jhon Doe', avatar: 'https://i.imgur.com/DkwKnRj.jpg' },
                        { id: Math.random(), fullname: 'Jhon Doe', avatar: 'https://i.imgur.com/DkwKnRj.jpg' },
                        { id: Math.random(), fullname: 'Jhon Doe', avatar: 'https://i.imgur.com/DkwKnRj.jpg' },
                        { id: Math.random(), fullname: 'Jhon Doe', avatar: 'https://i.imgur.com/DkwKnRj.jpg' },
                        { id: Math.random(), fullname: 'Jhon Doe', avatar: 'https://i.imgur.com/DkwKnRj.jpg' }]
                    }
                ],
                type: Array()
            }
        }
    }
</script>

<style scoped lang="scss">
.widget {
    @apply flex;
    background-color: #1c1f2e;

    div{
        width: 50%;
    }
}
</style>