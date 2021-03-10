<template>
<div class="text-gray-400 flex flex-col noselect">
    <div @click="open" :class="isOpen ? 'bg-white bg-opacity-5' : ''" class="w-full p-1 cursor-pointer rounded-lg flex  justify-between">
        <div class="flex w-full">
            <ion-icon class="text-xl px-3 my-3" :name="isOpen ? 'chevron-down-outline' : 'chevron-forward-outline'"></ion-icon>
            <div class="title my-3">{{title}}</div>
        </div>
        <div class="bg-white bg-opacity-5 w-12 h-12 p-1 rounded-lg items-center justify-center flex border border-white border-opacity-5">
            {{getItemsCount}}
        </div>
    </div>
    <div v-if="isOpen" class="content mt-2 mb-6 ml-6">
        <contact v-for="contact in getItems" :key="contact.id" v-bind="contact" />
    </div>
</div>
</template>

<script>
import Contact from '../chat/Contact.vue'

export default {
    components: {
        Contact
    },
    props: {
        title: {
            type: String,
        },
        items: {
            type: Array(),
            default : []
        }
    },
    data() {
        return {
            isOpen: false,
        }
    },
    computed: {
        getItems() {
            return this.items;
        },
        getItemsCount() {
            return this.getItems.length;
        }
    },
    methods: {
        open() {
            this.isOpen = !this.isOpen
        },
    }
}
</script>
