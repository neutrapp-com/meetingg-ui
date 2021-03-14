<template>
    <div class="flex flex-col bg-red-600 w-full">
        <!--<div v-for="participant in participants" v-bind:key="participant.id" class="bg-red-200 w-4/5 h-full flex grow">-->
        <div v-for="participant in participants" v-bind:key="participant.id" class="h-full flex">
            <camera :participant="participant"/>
        </div>
    </div>
</template>

<script>
    import Camera from './Camera.vue';
    export default {
        components:{
            Camera
        },
        props:{
            participants:{
                type:Array
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>