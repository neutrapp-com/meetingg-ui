<template>
<div class="lauth">
    <SideBar />
    <div class="main scroll">
        <navbar :title="getTitle" />
        <div class="container">
            <slot />
        </div>
    </div>
</div>
</template>

<script>
import SideBar from '@/components/Sidebar.vue'
import Navbar from '@/components/Navbar.vue';
import { authComputed } from '@/state/helpers'
import { io } from 'socket.io-client'

export default {
    components: {
        SideBar,
        Navbar,
    },
    computed: {
        ...authComputed,
        getTitle() {
            return this.$route.name;
        }
    },
    created(){
        let jwt = this.getToken;
        this.$socket.client.open();
    }
}
</script>

<style lang="scss" scoped>
.lauth {
    @apply flex divide-x divide-dark divide-opacity-5;
    
    &.dark  {
        @apply divide-light;
        .container {
                @apply divide-light;
        }
    }
    .container {
        @apply flex flex-wrap lg:flex-nowrap w-full pt-24 h-full lg:divide-x divide-dark divide-opacity-5 sm:space-y-8 md:space-y-0 justify-center;
    }

    .main {
        @apply w-full flex-grow;
    }
}
</style>
