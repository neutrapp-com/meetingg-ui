<template>
    <div class="btn" :class="highlighted ? 'highlighted' : 'nh'" >
        <slot/>
    </div>
</template>

<script>
export default {
    props: {
        highlighted:{
            default: false,
            type:Boolean
        }
    }
}
</script>

<style scoped>
.btn{
    @apply border border-light border-opacity-5 h-12 rounded-lg items-center justify-center flex px-4 cursor-pointer;
}

.highlighted{
    @apply bg-active text-light;
}
.nh{
    @apply bg-light bg-opacity-5 text-gray-400;
}
</style>