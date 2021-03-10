<template>
    <div class="text-gray-400 flex flex-col noselect">
        <div @click="open" :class="isOpen ? 'bg-white bg-opacity-5' : ''" class="w-full p-1 cursor-pointer rounded-lg flex  justify-between">
            <div class="flex w-full">
                <ion-icon class="text-xl px-3 my-3" :name="isOpen ? 'chevron-down-outline' : 'chevron-forward-outline'"></ion-icon>
                <div class="title my-3">{{title}}</div>
            </div>
            <div class="bg-white bg-opacity-5 w-12 h-12 p-1 rounded-lg items-center justify-center flex border border-white border-opacity-5">
                {{getContactsCount}}
            </div>
        </div>
        <div v-if="isOpen" class="content space-y-6 my-6 pl-16"> 
            <div v-for="contact in getContacts" v-bind:key="contact.id" class="w-full flex">
                <avatar />
                <p class="ml-4 self-center">{{contact.name}}</p>
            </div>   
        </div>
    </div>
</template>

<script>
import Avatar from './avatar.vue'

    export default {
        components:{
            Avatar
        },
        props:{
            title:{
                type:String,
            },
            contacts:{
                type:Array,
            }
        },
        data(){
            return{
                isOpen: false,
            }
        },
        computed:{
            getContacts(){
                return[{
                    id:1,
                    name:'Yassin Rais',
                },
                {
                    id:2,
                    name:'Floriant Cain',
                },
                {
                    id:3,
                    name:'Thibaut Allart',
                },
                ]
            },
            getContactsCount(){
                return this.getContacts.length;
            }
        },
        methods:{
            open(){
                this.isOpen = !this.isOpen
            },
        }
    }
</script>
