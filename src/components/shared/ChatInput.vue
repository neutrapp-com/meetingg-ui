<template>
    <div class="p-4 flex flex-col h-24">
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
            <btn :highlighted="true">
                <p class="text-white">Send</p>
            </btn>
        </div>
    </div>
</template>

<script>
import Btn from '@/components/shared/Btn.vue'
    export default {
        components:{
            Btn,
        },
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
