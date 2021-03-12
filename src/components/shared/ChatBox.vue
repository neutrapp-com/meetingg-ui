<template>
    <div class="flex flex-col scroll">
        <div v-for="message in messages" v-bind:key="message.id">
            <user-message  v-if="message.user_id == id" :content="message.content" :date="message.date"/>
            <target-message v-else :content="message.content" :date="message.date"/>

        </div>
    </div>
</template>

<script>

import UserMessage from '../chat/UserMessage.vue'
import TargetMessage from '../chat/TargetMessage.vue'

    export default {
        components:{
            UserMessage,
            TargetMessage
        },
        data(){
            return{
                id: 1,
                messages:[
                    {
                        id:1,
                        user_id: 1,
                        date: "16h30",
                        content:"Lorem Ipsum"
                    },
                    {
                        id:2,
                        user_id: 1,
                        date: "16h40",
                        content:"Lorem Ipsum"
                    },
                    {
                        id:3,
                        user_id: 2,
                        date: "16h50",
                        content:"Lorem Ipsum"
                    },
                    {
                        id:4,
                        user_id: 2,
                        date: "16h55",
                        content:"Lorem IpsumdddddddddddddddddddddddddddddddddddddddLorem IpsumdddddddddddddddddddddddddddddddddddddddLorem IpsumdddddddddddddddddddddddddddddddddddddddLorem Ipsumddddddddddddddddddddddddddddddddddddddd"
                    },
                   
                    {
                        id:8,
                        user_id: 2,
                        date: "16h50",
                        content:"Lorem Ipsum"
                    },
                    {
                        id:9,
                        user_id: 2,
                        date: "16h50",
                        content:"Lorem Ipsum"
                    },
                    {
                        id:10,
                        user_id: 2,
                        date: "16h50",
                        content:"Lorem Ipsum"
                    },
                ]
            }
        },
    }
</script>
