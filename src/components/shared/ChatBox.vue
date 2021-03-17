<template>
    <div class="flex flex-col scroll">
        <div v-if="getMessages.length === 0">
            <p class="mx-auto">You never send messages to this person</p>
            <p class="mx-auto">Start the discussion</p>
        </div>
        <div v-else v-for="message in getMessages" v-bind:key="message.id">
            <message  :self="message.user_id == getProfile.id" :message="message"/>
        </div>
    </div>
</template>

<script>
import Message from '../chat/Message.vue'

import {
    discussionComputed,
    discussionMethods,
    profileComputed,
} from '@/state/helpers';

export default {
    components:{
        Message,
    },
    methods:{
        ...discussionMethods
    },
    computed:{
        ...discussionComputed,
        ...profileComputed
    },
}
</script>
