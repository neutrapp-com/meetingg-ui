<template>
    <div class="chatinput">
        <div class="items">
            <div class="flex space-x-4">
                <ion-icon class="text-gray-600 text-2xl" name="document-outline"></ion-icon>
                <ion-icon class="text-gray-600 text-2xl" name="mic-outline"></ion-icon>
            </div>
            <div class="flex">
                <ion-icon class="text-gray-600 text-2xl" name="happy-outline"></ion-icon>
            </div>
        </div>
        <div class="inputs">
            <form class="flex flex-row w-full mr-4 rounded-lg p-1 noselect">
                <div class="flex flex-row w-full mr-4 rounded-lg p-1 noselect">
                    <textarea v-model="message" type="text" class="focus:outline-none bg-light bg-opacity-0 w-full" :placeholder="'Message ' + destination" />
                </div>
                <btn @click="send" :highlighted="true" class="max-h-10">
                    <p class="text-light">Send</p>
                </btn>
            </form>
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
                    if (data.status !== 'ok'){
                        this.$store.dispatch('toasts/addToast', {
                            title:'Send Message',
                            content: data.message,
                            type:'warning'
                        })
                    }
                })
                .catch((error) => {
                    this.message = null
                    this.$store.dispatch('toasts/addToast', {
                        title:'Send Message Faild',
                        content: error.response && error.response.message || 'Something is wrong',
                        icon: 'wifi-outline',
                        type:'error'
                    })
                })
            },
        }
    }
</script>

<style lang="scss" scoped>
.chatinput{
    @apply p-4 flex flex-col;

    .items{
        @apply flex justify-between w-full pb-4;
    }

    .inputs{
        @apply flex w-full items-center;
    }

}
.button{
    background-color: #0e78f9;
}
</style>
