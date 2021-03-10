<template>
  <div class="flex">
    <SideBar/>
    <div class="w-full">
      <navbar />
      <div class="flex w-full pt-20 pl-20">
        <div class=" bg-red-600">
           <square-button icon="videocam" color="#ff742e" title="New Meeting" description="Setup new meeting" />
          <square-button icon="add-circle" color="#0e78f9" title="Join Meeting" description="Via invitation link" />
          <square-button icon="calendar-outline" color="#0e78f9" title="Schedule" description="Plan your meetings" />
          <square-button icon="desktop-outline" color="#0e78f9" title="Share  Screen" description="Show your work" />
        </div>  
        <div class="container bg-blue-600 h-full">

        </div>
      </div>
    </div>
  </div>
    
</template>

<script>

import SquareButton from '@/components/cards/SquareButton.vue'

import SideBar from '../../../../components/side_bar'

import WidgetDateTime from '@/components/widgets/WidgetDateTime.vue';
import Navbar from '@/components/navbar.vue';

import TextButton from '@/components/cards/TextButton.vue';
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
     SideBar,
     Navbar, 
},
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

<style scoped>
.container{
  border-left: 0.5px solid rgba(255, 255, 255, 0.1)
}
</style>