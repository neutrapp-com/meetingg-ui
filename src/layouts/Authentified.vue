<template>
<div class="lauth">
    <SideBar />
    <div class="main">
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

export default {
    components: {
        SideBar,
        Navbar,
    },
    computed: {
        getTitle() {
            return this.$route.name;
        }
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
