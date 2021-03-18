<template>
    <div class="flex flex-col scroll">
        <div v-if="getMessages.length === 0">
            <p class="mx-auto">There is no message in this discussion</p>
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
        ...discussionMethods,
        scrollToElement() {
            const el = this.$el.getElementsByClassName('chatinput')[0];

            if (el) {
            // Use el.scrollIntoView() to instantly scroll to the element
                el.scrollIntoView({behavior: 'smooth'});
            }
        }
    },
    computed:{
        ...discussionComputed,
        ...profileComputed
    },
    mounted() {
        this.scrollToElement();
    }
}
</script>
