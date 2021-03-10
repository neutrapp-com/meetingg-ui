<template>
<div class="flex divide-x divide-white divide-opacity-5">
    <SideBar />
    <div class="w-full">
        <navbar />
        <div class="flex flex-wrap w-full pt-20 h-full divide-x divide-white divide-opacity-5">
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
}
</script>

<style scoped>
.container {
    border-left: 0.5px solid rgba(255, 255, 255, 0.1)
}
</style>
