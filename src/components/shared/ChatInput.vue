<template>
    <div class="p-4 flex flex-col">
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
            <div class="flex flex-row w-full mr-4 rounded-lg p-1 noselect">
                <textarea v-model="message" type="text" class="focus:outline-none bg-light bg-opacity-0 w-full" :placeholder="'Message ' + destination" />
            </div>
            <btn @click="send" :highlighted="true" class="max-h-10">
                <p class="text-light">Send</p>
            </btn>
        </div>
    </div>
</template>

<script>
import Btn from '@/components/shared/Btn.vue'

import {
    discussionMethods,
} from '@/state/helpers';

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
        data(){
            return{
                message:null
            }
        },
        methods:{
            ...discussionMethods,
            send(){

            return this.sendMessage({
                content: this.message,
            })
            .then((data) => {
                this.message = null
            })
            .catch((error) => {
                this.message = null

            })

        },
    }
    }
</script>

<style scoped>
.button{
    background-color: #0e78f9;
}
</style>
