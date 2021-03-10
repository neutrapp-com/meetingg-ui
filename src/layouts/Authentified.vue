<template>
<div class="flex divide-x divide-white divide-opacity-5">
    <SideBar />
    <div class="w-full">
        <navbar :title="getTitle" />
        <div class="flex flex-wrap lg:flex-nowrap w-full pt-24 h-full lg:divide-x divide-white divide-opacity-5 sm:space-y-8 md:space-y-0 justify-center">
            <slot />
        </div>
    </div>
</div>
</template>

<script>
import SideBar from '@/components/Sidebar.vue'
import Navbar from '@/components/Navbar.vue';

export default {
    components: {
        SideBar,
        Navbar,
    },
    computed: {
        getTitle(){
            return this.$route.name;
        }
    }
}
</script>

<style scoped>
.container {
    border-left: 0.5px solid rgba(255, 255, 255, 0.1)
}
</style>
