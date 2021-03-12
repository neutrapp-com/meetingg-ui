<template>
<div class="text-gray-400 flex flex-col noselect">
    <div @click="open" :class="isOpen ? '' : ''" class="w-full cursor-pointer rounded-lg flex">
        <div class="flex w-full justify-between">
            <div class="flex">
                <ion-icon class="text-xl px-3 my-3" :name="icon"></ion-icon>
                <div class="text-white my-3">{{title}}</div>
            </div>
            <ion-icon class="text-xl px-3 my-3" :name="isOpen ? 'chevron-down-outline' : 'chevron-forward-outline'"></ion-icon>
        </div>
    </div>
    <div v-if="isOpen" class="content mt-2 mb-6 ml-6">
        <slot />
    </div>
</div>
</template>

<script>

export default {
    props: {
        title: {
            type: String,
        },
        icon: {
            type: String,
            default: "home"
        },
    },
    data() {
        return {
            isOpen: false,
        }
    },
    methods: {
        open() {
            this.isOpen = !this.isOpen
        },
    }
}
</script>
