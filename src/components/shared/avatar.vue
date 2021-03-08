<template>
<div :style="{backgroundImage: `url(${image})`}" class="avatar"></div>
</template>

<script>
export default {
    props: {
        image: {
            default : 'https://i.imgur.com/DkwKnRj.jpeg',
            type: String
        }
    }
}
</script>

<style lang="scss" scoped>
.avatar {
    @apply w-14 h-14 rounded-xl;
    background-size: cover;
    background-position: center;
}
</style>
