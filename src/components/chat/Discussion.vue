<template>
    <div class="discussion-user" :class="active == true ? 'active' : ''">
        <avatar :image="getAvatar" size="w-12 h-12"/>
        <p class="ml-4 self-center text-sm">{{ discussion.title }}</p>
    </div>
</template>

<script>
import avatar from "../shared/Avatar.vue"

export default {
    components: { avatar },
    props : {
        discussion : {
            type : Object
        },
    },
    computed: {
        getAvatar(){
            return this.discussion.users[0].avatar;
        }
    },
}
</script>

<style lang="scss" scoped>
.discussion-user {
    @apply text-xl bg-opacity-10 w-full flex items-center space-x-4 p-2 rounded-lg transition duration-100 ease-in-out cursor-pointer  text-dark ;

    .dark & {
        @apply text-light;
    } 
    

    &:hover,&.active{
        background-color: #0e78f9;
    }
}
</style>