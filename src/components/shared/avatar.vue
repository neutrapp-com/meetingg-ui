<template>
<div :style="{backgroundImage: `url(${image})`}" class="avatar" :class="size"></div>
</template>

<script>
export default {
    props: {
        image: {
            default : 'https://i.imgur.com/DkwKnRj.jpeg',
            type: String
        },
        size: {
            default: "w-14 h-14",
            type: String
        },
    }
}
</script>

<style lang="scss" scoped>
.avatar {
    @apply rounded-xl;
    background-size: cover;
    background-position: center;
}
</style>
