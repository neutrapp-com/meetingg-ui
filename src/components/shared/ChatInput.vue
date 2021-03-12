<template>
    <div class="p-4 flex flex-col h-28">
        <div class="flex justify-between w-full pb-4">
            <div class="flex space-x-4">
                <ion-icon class="text-gray-600 text-2xl" name="document-outline"></ion-icon>
                <ion-icon class="text-gray-600 text-2xl" name="mic-outline"></ion-icon>
            </div>
            <div class="flex">
                <ion-icon class="text-gray-600 text-2xl" name="happy-outline"></ion-icon>
            </div>
        </div>
        <div class="flex w-full items-center">
            <div class="flex w-full text-gray-400">Message {{destination}}</div>
            <div class="button border border-white border-opacity-5 h-10 px-6 rounded-lg items-center flex">
                <p class="text-white">Send</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props:{
            destination: {
                type: String,
                default:'',
            }
        },
    }
</script>

<style scoped>
.button{
    background-color: #0e78f9;
}
</style>
