<template>
    <div class="message" :class="self ? 'self':''">
        <div class="user flex">
            <avatar :image="avatar" size="w-10 h-10"/>
            <div class="content">
                <p>{{message.content}}</p>
            </div>
        </div>
    </div>
</template>

<script>
import Avatar from '../shared/Avatar.vue'

    export default {
        components:{
            Avatar
        },

        props:{
            message:{
                type: Object,

            },
            avatar:{
                type:String,
                default: ''
            },
            self : {
                type: Boolean
            }
        }
    }
</script>

<style lang="scss" scoped>
.message{
    @apply flex flex-col justify-between w-full my-2;        

    .content{
        @apply bg-light border border-white border-opacity-5 bg-opacity-5 rounded-xl mx-4 px-4 max-w-xl py-2 text-light;
        max-width: 60%;
    }

    &.self {
        .user{
            @apply flex flex-row-reverse ;
        }
        .content {
           background-color: #0e78f9;
        }
    }
}
</style>
