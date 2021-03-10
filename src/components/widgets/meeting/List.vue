<template>
<div class="widget">
    <meeting class="meeting-block" v-for="meeting in getMeetings" v-bind:key="meeting.id" v-bind="{ title: `${meeting.title}`, color: `${meeting.color}`, startTime: `${meeting.startTime}`, endTime: `${meeting.endTime}`, members: meeting.members}" />
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
            default: [{
                title: "Reunion",
                color: '#212534',
                startTime: (Date.now() / 1000 + 3600 * 3),
                endTime: (Date.now() / 1000 + 3600 * 4),
                members: [{
                        id: Math.random(),
                        fullname: 'Jhon Doe',
                        avatar: 'https://i.imgur.com/DkwKnRj.jpg'
                    },
                    {
                        id: Math.random(),
                        fullname: 'Jhon Doe',
                        avatar: 'https://i.imgur.com/DkwKnRj.jpg'
                    },
                    {
                        id: Math.random(),
                        fullname: 'Jhon Doe',
                        avatar: 'https://i.imgur.com/DkwKnRj.jpg'
                    }
                ]
            }],
            type: Array()
        }
    },
    computed: {
        getMeetings() {
            return this.meetingsList;
        },
        getMembers() {
            return this.meetingsList.members;
        }
    },
    data() {
        return {
            partList: [{
                    id: Math.random(),
                    fullname: 'Jhon Doe',
                    avatar: 'https://i.imgur.com/DkwKnRj.jpg'
                },
                {
                    id: Math.random(),
                    fullname: 'Jhon Doe',
                    avatar: 'https://i.imgur.com/DkwKnRj.jpg'
                },
                {
                    id: Math.random(),
                    fullname: 'Jhon Doe',
                    avatar: 'https://i.imgur.com/DkwKnRj.jpg'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.widget {
    @apply flex flex w-full;

    h1 {
        @apply p-4;
        color: #ffffff;
        font-size: 2rem;
    }

    .meeting-block{
        @apply my-2;
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
