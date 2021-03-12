<template>
<div :style="{backgroundImage: `url(${image})`}" class="avatar" :class="size + ' ' + border"></div>
</template>

<script>
export default {
    props: {
        image: {
            default : 'https://picsum.photos/300/300?i=' + Math.random(),
            type: String
        },
        size: {
            default: "avatar-default",
            type: String
        },
        border: {
            default: "avatar-border",
            type: String
        },
    }
}
</script>

<style lang="scss" scoped>
.avatar {
    background-size: cover;
    background-position: center;
}
.avatar-border{
    @apply rounded-lg;
}
.avatar-default{
    @apply w-12 h-12;
}
</style>
