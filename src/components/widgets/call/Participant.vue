<template>
    <div class="flex w-full h-full">
        <div class="flex w-full items-center">
            <avatar size="w-10 h-10" :image="participant.avatar"/>
            <p class="ml-4">{{participant.lastname + ' ' + participant.firstname}}</p>
        </div>
        <div v-if="!viewer" class="flex items-center">
            <ion-icon class="text-gray-400 text-xl mr-2" :name="participant.audio ? 'mic-outline': 'mic-off-outline'"></ion-icon>
            <ion-icon class="text-gray-400 text-xl" :name="participant.video ? 'eye-outline': 'eye-off-outline'"></ion-icon>
        </div>
    </div>
</template>

<script>
import Avatar from '../../shared/Avatar.vue'
    export default {
        components:{
            Avatar
        },
        props:{
            participant:{
                type:Object,
            },
            viewer:{
                type:Boolean,
                default: false
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>