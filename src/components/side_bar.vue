<template>
    <div class="w-28 h-screen pr-1 relative"> 
        <div class="bg-blue-600 text-center pt-2 mx-auto mt-6 rounded-xl h-14 w-14 content-center justify-center">
            <ion-icon class="text-white text-4xl" name="videocam"></ion-icon>
        </div>

        <div class="mt-16">
           <side-bar-element :active="home"/>
           <side-bar-element icon="chatbox-ellipses-outline" :active="messages"/>
           <side-bar-element icon="time-outline" :active="meetings"/>
           <side-bar-element icon="person-circle-outline" :active="contacts"/>
           <side-bar-element icon="calendar-outline" :active="shedule"/>
        </div>


        <div class="w-24 absolute bottom-0">
            <div class="bg-gray-200 mb-6 bg-opacity-5 text-center pt-2 mx-auto mt-5 rounded-xl border-2 h-14 w-14 content-center justify-center">
                <ion-icon class="text-white text-4xl" name="settings-outline"></ion-icon>
            </div>
        </div>
    </div>


</template>
<script>
import SideBarElement from './side-bar-element.vue'
export default {
  components: { SideBarElement},
  data() {
      return {
          home: true,
          messages: false,
          meetings: false,
          contacts: false,
          shedule: false,

      }
  },
  computed: {
  },
}
</script>