<template>
    <div class="flex justify-between w-full my-2">
        <div class="flex">
            <avatar size="w-10 h-10"/>
            <div class="bg-light border border-white border-opacity-5 bg-opacity-5 rounded-xl ml-4 px-4 max-w-xl py-2 text-white">
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