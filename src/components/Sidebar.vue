<template>
<div class="w-24 h-screen pr-1 relative sidebar">
    <div class="flex items-center bg-blue-600 text-center mt-4 mx-auto rounded-xl h-14 w-14 content-center justify-center">
        <ion-icon class="text-white text-3xl" name="videocam"></ion-icon>
    </div>

    <div class="mt-16">
        <side-bar-element icon="home" :active="home" />
        <side-bar-element icon="chatbox-ellipses" :active="messages" />
        <side-bar-element icon="time" :active="meetings" />
        <side-bar-element icon="person-circle" :active="contacts" />
    </div>
    
    <div class="w-24 absolute bottom-0">
        <side-bar-element icon="cog" :active="true" />         
    </div>
</div>
</template>

<script>
import SideBarElement from './SideBarElement.vue'

export default {
    components: {
        SideBarElement
    },
    data() {
        return {
            home: true,
            messages: false,
            meetings: false,
            contacts: false,
            shedule: false,

        }
    },
    computed: {},
}
</script>
