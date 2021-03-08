<template>
<navbar />
<div>
    <div class="listbutton">
        <square-button icon="videocam" color="#ff742e" title="New Meeting" description="Setup new meeting" />
        <square-button icon="add-circle" color="#0e78f9" title="Join Meeting" description="Via invitation link" />
        <square-button icon="calendar-outline" color="#0e78f9" title="Schedule" description="Plan your meetings" />
        <square-button icon="desktop-outline" color="#0e78f9" title="Share  Screen" description="Show your work" />
    </div>

    <div class="row">
        <list-contacts title="Recent" />
    </div>
    <div class="listwidgets">
        <widget-date-time />
        <widget-meeting />
    </div>

    <div class="currentTest" style="background-color: #1c1f2e">
        <text-button text="Start" color="#0e78f9" fontColor="#FFFFFF" link="https://youtube.com" />
        <text-button text="Copy invitation" link="page1" />
        <text-button text="Join from Room" />

        <icon-button icon="https://icons-for-free.com/iconfiles/png/512/svg+create+edit+edit+file+office+pencil+writing+creativ+icon-1320185158722776676.png" />
        <icon-button icon="https://image.flaticon.com/icons/png/512/61/61848.png" />

        <participant-card icon="https://i.imgur.com/DkwKnRj.jpg" fullname="petersonne jean-claude de la vega" />
        <participant-card icon="https://i.imgur.com/DkwKnRj.jpg" fullname="Michel barder" />

        <meeting-id numberId="707 904 6594" />
    </div>

    <br>
    <div style="background-color: #1c1f2e;">
        <manage-meeting title="Titre de la réunion" description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)." />
    </div>

    <br>

    <div style="background-color: #1c1f2e;">
        <participant-list :members="partList" />
    </div>

    <br>

    <div style="width: 50%; background-color: #1c1f2e;">
        <meeting-actions meetingTitle="Réunion test" meetingDescription="Une réunion juste pour le test" meetingId="127 258 9516" :meetingMembers="partList" />
    </div>

    <div style="width: 50%; background-color: #1c1f2e;">
        <meeting-list :meetingsList="meetingList" />
    </div>

    <br><br><br>

    <meeting-page />

</div>
</template>

<script>
import SquareButton from './components/cards/SquareButton.vue'
import WidgetDateTime from './components/widgets/WidgetDateTime.vue';
import WidgetMeeting from './components/widgets/meeting/WidgetMeeting.vue';
import Navbar from './components/navbar.vue';

import TextButton from './components/cards/TextButton.vue';
import IconButton from './components/cards/IconButton.vue';
import ParticipantCard from './components/cards/ParticipantCard.vue';
import MeetingId from './components/cards/MeetingId.vue';

import manageMeeting from './components/widgets/meeting/manageMeeting.vue';
import participantList from './components/widgets/participantList.vue';

import meetingActions from './components/widgets/meeting/meetingActions.vue';
import meetingList from './components/widgets/meeting/meetingList.vue';

import meetingPage from './components/pages/meetingPage.vue';
import ListContacts from './components/chat/ListContacts.vue';

var partList2 = [{
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

export default {
    components: {
        SquareButton,
        WidgetDateTime,
        Navbar,
        WidgetMeeting,
        TextButton,
        IconButton,
        ParticipantCard,
        MeetingId,
        manageMeeting,
        participantList,
        meetingActions,
        meetingList,
        meetingPage,
        ListContacts
    },
    acitons: {},
    data() {
        return {
            partList: [{
                    id: "1",
                    fullname: 'Jhon Doe',
                    avatar: 'https://i.imgur.com/DkwKnRj.jpg'
                },
                {
                    id: "2",
                    fullname: 'Jaques Richard',
                    avatar: 'https://i.imgur.com/DkwKnRj.jpg'
                },
                {
                    id: "3",
                    fullname: 'Patrick James',
                    avatar: 'https://i.imgur.com/DkwKnRj.jpg'
                },
                {
                    id: "4",
                    fullname: 'Ricardo Baldos',
                    avatar: 'https://i.imgur.com/DkwKnRj.jpg'
                },
                {
                    id: "5",
                    fullname: 'Dente Rack',
                    avatar: 'https://i.imgur.com/DkwKnRj.jpg'
                },
                {
                    id: "6",
                    fullname: 'Dente Rack',
                    avatar: 'https://i.imgur.com/DkwKnRj.jpg'
                }
            ],

            meetingList: [{
                    title: "Reunion title",
                    color: '#212534',
                    startTime: (Date.now() / 1000 + 3600 * 3),
                    endTime: (Date.now() / 1000 + 3600 * 4),
                    members: partList2
                },
                {
                    title: "Reunion title",
                    color: '#212534',
                    startTime: (Date.now() / 1000 + 3600 * 3),
                    endTime: (Date.now() / 1000 + 3600 * 4),
                    members: partList2
                }
            ]
        }
    }
}
</script>

<style lang="scss">
body{
    background-color: #1c1f2e;
}
.listbutton,
.listwidgets,
.currentTest {
    display: flex;

    >a,
    >div {
        @apply m-3;
    }
}
</style>
