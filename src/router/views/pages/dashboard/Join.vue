<template>
    <div class="flex flex-col md:w-1/2 lg:w-1/5 justify-center space-y-8 items-center">
        <div class="flex text-8xl">
            <ion-icon name="people-circle-outline"></ion-icon>
        </div>
        <div class="flex">
            <h2 class="text-xl">Join Meeting</h2>
        </div> 
        <div class="join">
            <div class="flex flex-row h-12 w-full bg-light mr-4 bg-opacity-5 rounded-lg p-1 noselect">
                <input v-model="meeting" type="text" id="search" class="flex-shrink pl-3 flex-grow bg-light bg-opacity-0 text-light flex-auto leading-normal w-px flex-1 border-0 rounded rounded-l-none self-center relative  font-roboto text-md outline-none" placeholder="xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxx" />
            </div>
            
            <btn>
                <ion-icon class="icon-btn" name="search-outline">Join Meeting</ion-icon>
            </btn>
        </div>
    </div>
</template>

<script>
import Btn from '@/components/shared/Btn.vue'
export default {
    components: {Btn},
    methods: {
        navigateTo(link) {
            this.$router.push(link)
        },
        data() {
            return {
                meeting: null,
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.join {
    @apply flex flex-col space-y-6 justify-center w-full divide-x divide-light divide-opacity-5;

    input {}
}
</style>
