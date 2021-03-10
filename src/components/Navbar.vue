<template>
    <nav class="h-20 fixed w-full flex items-center navbar">
        <p class="font-bold ml-5 text-white text-xl">{{title}}</p>
    </nav>
</template>

<script>
export default {
    components: {

    },
    props: {
        title: {
            default: 'Home',
            type: String
        },
    }
}
</script>

<style lang="scss" scoped>
.navbar {
    background-color: #1C1F2E;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}
</style>
