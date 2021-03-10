<template>
    <div :style="{backgroundImage: `url(${image})`}" class="avatar avatar-size"></div>
</template>

<script>
export default {
    props: {
        image: {
            default : 'https://picsum.photos/300/300?i=' + Math.random(),
            type: String
        }
    }
}
</script>

<style lang="scss" scoped>
.avatar {
    @apply rounded-xl;
    background-size: cover;
    background-position: center;
}
.avatar-size{
    @apply w-14 h-14;
}
</style>
