<template>
<div class="sidebar">
    <router-link to="/" class="logo">
        <ion-icon name="videocam"></ion-icon>
    </router-link>

    <div class="mt-16 pt-1">
        <side-bar-element :link="route.path" v-for="route in getMenu" :key="route.name" :title="route.title"  :icon="route.icon" :active="menuActive(route.name)" />
    </div>

    <div class="w-24 absolute bottom-0">
        <side-bar-element link="/settings" icon="cog" :active="menuActive('Settings')" />         
    </div>
</div>
</template>

<script>
import { dashboardMenu } from '../router/routes';
import SideBarElement from './SideBarElement.vue'

export default {
    components: {
        SideBarElement
    },
    methods: {
        menuActive(routeName){
            return routeName === this.$route.name;
        }
    },
    computed : {
        getMenu(){
            return dashboardMenu;
        }
    }
}
</script>


<style lang="scss" scoped>
.sidebar{
    @apply text-dark w-24 h-screen pr-1 relative ;

    .dark & {
        @apply text-light; 
    }

    .logo{
        @apply flex items-center bg-blue-600 text-center mt-6 mx-auto rounded-xl h-14 w-14 content-center justify-center text-light text-3xl;
    }
}
</style>