<template>
  <navbar />
    <div>
      <div class="listbutton">
        <square-button icon="videocam" color="#ff742e" title="New Meeting" description="Setup new meeting" />
        <square-button icon="add-circle" color="#0e78f9" title="Join Meeting" description="Via invitation link" />
        <square-button icon="calendar-outline" color="#0e78f9" title="Schedule" description="Plan your meetings" />
        <square-button icon="desktop-outline" color="#0e78f9" title="Share  Screen" description="Show your work" />
      </div>

      <div class="listwidgets">
          <widget-date-time />
          <widget-meeting />
      </div>

      <div class="currentTest" style="background-color: #1c1f2e">
          <text-button text="Start" color="#0e78f9" fontColor="#FFFFFF" link="https://youtube.com"/>
          <text-button text="Copy invitation" link="page1"/>
          <text-button text="Join from Room"/>

          <icon-button icon="https://icons-for-free.com/iconfiles/png/512/svg+create+edit+edit+file+office+pencil+writing+creativ+icon-1320185158722776676.png"/>
          <icon-button icon="https://image.flaticon.com/icons/png/512/61/61848.png"/>

          <participant-card icon="https://www.assyst.de/cms/upload/sub/digitalisierung/15-M.jpg" fullname="petersonne jean-claude de la vega"/>
          <participant-card icon="https://www.assyst.de/cms/upload/sub/digitalisierung/15-M.jpg" fullname="Michel barder"/>

          <meeting-id numberId="707 904 6594"/>
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

      <meeting-page/>

    </div>
</template>

<script>

import SquareButton from '@/components/cards/SquareButton.vue'
import WidgetDateTime from '@/components/widgets/WidgetDateTime.vue';
import Navbar from '@/components/navbar.vue';

import TextButton from '@/components/cards/TextButton.vue';
import IconButton from '@/components/cards/IconButton.vue';
import ParticipantCard from '@/components/cards/ParticipantCard.vue';
import MeetingId from '@/components/cards/MeetingId.vue';

import participantList from '@/components/widgets/participantList.vue';

import meetingPage from '@/components/pages/meetingPage.vue';

var partList2 = [
  { id: Math.random(), fullname: 'Jhon Doe', avatar: 'https://www.assyst.de/cms/upload/sub/digitalisierung/15-M.jpg' },
  { id: Math.random(), fullname: 'Jhon Doe', avatar: 'https://www.assyst.de/cms/upload/sub/digitalisierung/15-M.jpg' },
  { id: Math.random(), fullname: 'Jhon Doe', avatar: 'https://www.assyst.de/cms/upload/sub/digitalisierung/15-M.jpg' }
]

export default {
  page:{
    title: 'Dashboard',
    meta: [{
        name: 'description',
        content: 'Dashboard'
    }],
    items : []
  },
   components: { 
     SquareButton, 
     WidgetDateTime, 
     Navbar, 
     TextButton, 
     IconButton, 
     ParticipantCard,
     MeetingId, 
    participantList, 
   meetingPage },
actions : {
  },
  data(){
    return{
      partList: [{ profileLink: "1", fullname: 'Jhon Doe', icon: 'https://www.assyst.de/cms/upload/sub/digitalisierung/15-M.jpg' },
       { profileLink: "2", fullname: 'Jaques Richard', icon: 'https://www.assyst.de/cms/upload/sub/digitalisierung/15-M.jpg' },
       { profileLink: "3", fullname: 'Patrick James', icon: 'https://www.assyst.de/cms/upload/sub/digitalisierung/15-M.jpg' },
       { profileLink: "4", fullname: 'Ricardo Baldos', icon: 'https://www.assyst.de/cms/upload/sub/digitalisierung/15-M.jpg' },
       { profileLink: "5", fullname: 'Dente Rack', icon: 'https://www.assyst.de/cms/upload/sub/digitalisierung/15-M.jpg' },
       { profileLink: "6", fullname: 'Dente Rack', icon: 'https://www.assyst.de/cms/upload/sub/digitalisierung/15-M.jpg' }],

      meetingList: [
        {title: "Reunion title", color: '#212534', startTime: (Date.now()/1000 + 3600 * 3), endTime: (Date.now()/1000  + 3600 * 4), members: partList2},
        {title: "Reunion title", color: '#212534', startTime: (Date.now()/1000 + 3600 * 3), endTime: (Date.now()/1000  + 3600 * 4), members: partList2}
      ]
    }
  }
}
</script>


<style lang="scss">
  .listbutton,.listwidgets,.currentTest{
    display: flex;

    > a , > div {
      @apply m-3;
    }
  }
</style>
