<template>
<div class="list-container">
    <meeting-list v-bind="{ meetingsList: meetingsList }" />
</div>
<div>
    <meeting-actions v-bind="{ meetingTitle: meetingTitle, startTime: startTime, endTime: endTime, meetingDescription: meetingDescription, meetingId: meetingId, meetingMembers: meetingMembers }" />
</div>
</template>

<script>
import meetingList from '@/components/widgets/meeting/List.vue';
import meetingActions from '@/components/widgets/meeting/Actions.vue';
export default {
    components: {
        meetingList,
        meetingActions
    },
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
                default : 'Your very cool description',
                type: String
            },
            meetingId: {
                default: 'XXX XXX XXX',
                type: String
            },
            meetingMembers : {
                default : [{ profileLink: "1", fullname: 'Jhon Doe 1', avatar: 'https://i.imgur.com/DkwKnRj.jpg' }, { profileLink: "2", fullname: 'Jhon Doe 2', avatar: 'https://i.imgur.com/DkwKnRj.jpg' }],
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
                        { id: Math.random(), fullname: 'Jhon Doe', avatar: 'https://i.imgur.com/DkwKnRj.jpg' },
                        { id: Math.random(), fullname: 'Jhon Doe', avatar: 'https://i.imgur.com/DkwKnRj.jpg' },
                        { id: Math.random(), fullname: 'Jhon Doe', avatar: 'https://i.imgur.com/DkwKnRj.jpg' },
                        { id: Math.random(), fullname: 'Jhon Doe', avatar: 'https://i.imgur.com/DkwKnRj.jpg' }]
                    },
                    {title: "Reunion 3", color: '#212534', startTime: (Date.now()/1000 + 3600 * 3), endTime: (Date.now()/1000  + 3600 * 4), members: [
                        { id: Math.random(), fullname: 'Jhon Doe', avatar: 'https://i.imgur.com/DkwKnRj.jpg' },
                        { id: Math.random(), fullname: 'Jhon Doe', avatar: 'https://i.imgur.com/DkwKnRj.jpg' },
                        { id: Math.random(), fullname: 'Jhon Doe', avatar: 'https://i.imgur.com/DkwKnRj.jpg' }]
                    },
                    {title: "Reunion 4", color: '#212534', startTime: (Date.now()/1000 + 3600 * 3), endTime: (Date.now()/1000  + 3600 * 4), members: [
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

<style scoped>

.list-container{
    @apply flex flex-col m-auto;
    width: 40%;
}
</style>
