<template>
    <div class="flex flex-col scroll">
        <div v-for="message in messages" v-bind:key="message.id">
            <message  :self="message.user_id == id" :content="message.content" :date="message.date"/>
        </div>
    </div>
</template>

<script>
import Message from '../chat/Message.vue'
import { LoremIpsum } from "lorem-ipsum";

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
});


export default {
    components:{
        Message,
    },
    data(){
        return{
            id: 1,
            messages: Array(50).fill({
                id: 1,
                user_id: 2,
                date: "14h50",
                content: "Random Message"
            }).map(message=>{
                return {
                    ...message,
                    id : (Math.random() * 100).toFixed(0),
                    user_id : (Math.random() * 3).toFixed(0),
                    content :  lorem.generateWords().toString()
                }
            })
        }
    },
}
</script>
