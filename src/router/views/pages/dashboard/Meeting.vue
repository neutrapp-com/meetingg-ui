<template>
    <div class="flex w-full divide-x divide-light divide-opacity-5">
        <div class="flex w-1/2 p-6 scroll">
            <list :meetingsList="list"/>
        </div>  
        <div class="flex w-1/2 p-6 scroll">
            <actions v-bind="current"/>
        </div>  
    </div>
</template>

<script>
import List from '@/components/widgets/meeting/List.vue';
import Actions from '@/components/widgets/meeting/Actions.vue';
export default {
    components: {
        List,
        Actions
    },
    data(){
        return{
            current:{
                meetingTitle: 'Meeting Title',
                startTime: (Date.now()/1000 + 3600 * 3),
                endTime: (Date.now()/1000  + 3600 * 4),
                meetingDescription: 'Your very cool description',
                meetingId: 'XXX XXX XXX',
                meetingMembers: [{ 
                        profileLink: "1", 
                        fullname: 'Jhon Doe 1', 
                        avatar: 'https://i.imgur.com/DkwKnRj.jpg' 
                    }, 
                    { 
                        profileLink: "2", 
                        fullname: 'Jhon Doe 2', 
                        avatar: 'https://i.imgur.com/DkwKnRj.jpg' 
                    }
                ],
            },
            list :[
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
        }
    }
}
</script>
