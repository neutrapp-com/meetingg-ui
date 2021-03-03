<template>
    <div class="widget">
        <h1>Meetings:</h1>
        <div class="meetings" >

            <div v-for="meeting in getMeetings" v-bind:key="meeting.id">
                <meeting v-bind="{ title: `${meeting.title}`, color: `${meeting.color}`, startTime: `${meeting.startTime}`, endTime: `${meeting.endTime}`, members: meeting.members}" />
            </div>
        </div>
    </div>
</template>

<script>
    import meeting from './meeting.vue';

    export default {
        name : 'meetingList',
        components: { meeting },
        props : {
            meetingsList : {
                default : [
                    {title: "Reunion", color: '#212534', startTime: (Date.now()/1000 + 3600 * 3), endTime: (Date.now()/1000  + 3600 * 4), members: [
                        { id: Math.random(), fullname: 'Jhon Doe', avatar: 'https://www.assyst.de/cms/upload/sub/digitalisierung/15-M.jpg' },
                        { id: Math.random(), fullname: 'Jhon Doe', avatar: 'https://www.assyst.de/cms/upload/sub/digitalisierung/15-M.jpg' },
                        { id: Math.random(), fullname: 'Jhon Doe', avatar: 'https://www.assyst.de/cms/upload/sub/digitalisierung/15-M.jpg' }]
                    }
                ],
                type: Array()
            }
        },
        computed :{
            getMeetings(){
                return this.meetingsList;
            },
            getMembers(){
                return this.meetingsList.members;
            }
        },
        data(){
            return {
                partList: [
                    { id: Math.random(), fullname: 'Jhon Doe', avatar: 'https://www.assyst.de/cms/upload/sub/digitalisierung/15-M.jpg' },
                    { id: Math.random(), fullname: 'Jhon Doe', avatar: 'https://www.assyst.de/cms/upload/sub/digitalisierung/15-M.jpg' },
                    { id: Math.random(), fullname: 'Jhon Doe', avatar: 'https://www.assyst.de/cms/upload/sub/digitalisierung/15-M.jpg' }
                ]
            }
        }
    }
</script>

<style scoped lang="scss">
.widget {
    @apply flex flex-col p-4;

    h1{
        @apply p-4;
        color: #ffffff;
        font-size: 2rem;
    }

    .meetings{
        @apply flex flex-wrap p-4;

        div{
            padding-right: 12px;
            padding-bottom: 12px;
            width: 95%;
        }
    }
}
</style>