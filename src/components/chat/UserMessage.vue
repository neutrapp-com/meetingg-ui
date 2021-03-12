<template>
    <div class="flex justify-between w-full my-2">
        <div class="flex">
            <avatar size="w-10 h-10"/>
            <div class="background rounded-xl ml-4 px-4 py-2 max-w-full text-white">
                <p>{{content}}</p>
            </div>
        </div>
        <p class="text-xs text-gray-600"> {{date}}</p>
    </div>
</template>

<script>
import Avatar from '../shared/Avatar.vue'

    export default {
        components:{
            Avatar
        },

        props:{
            content:{
                type: String,
                default: ''
            },
            date:{
                type: String,
            }
        }
    }
</script>

<style scoped>
.background{
    background-color: #0e78f9;
}
</style>
