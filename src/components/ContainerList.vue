<template>
<div class="text-gray-400 flex flex-col noselect relative">
    <div @click="toggleChat" :class="getIsChatDisplayed ? '' : ''" class="w-full cursor-pointer top-0 rounded-lg flex">
        <div class="flex w-full justify-between">
            <div class="flex">
                <ion-icon class="text-xl px-3 my-3" :name="icon"></ion-icon>
                <div class="text-light my-3">{{title}}</div>
            </div>
            <ion-icon class="text-xl px-3 my-3" :name="getIsChatDisplayed ? 'chevron-down-outline' : 'chevron-forward-outline'"></ion-icon>
        </div>
    </div>
    <div v-if="getIsChatDisplayed" class="content">
        <slot />
    </div>
</div>
</template>

<script>

import {
    callComputed,
    callMethods
} from '@/state/helpers';

export default {
    props: {
        title: {
            type: String,
        },
        icon: {
            type: String,
            default: "home"
        }
    },
    methods: {
        ...callMethods
    },
    computed:{
        ...callComputed
    }
}
</script>
