<template>
    <div :class="highlighted ? 'highlighted text-white' : 'bg-white bg-opacity-5 text-gray-400'" class=" border border-white border-opacity-5 h-12 rounded-lg items-center justify-center flex px-4">
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
.highlighted{
    @apply bg-active;
}
</style>