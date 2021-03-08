<template>
    <div class="contact" :class="active == true ? 'active' : ''">
        <avatar :image="avatar" />
        <a class="">
            {{ fullname }}
        </a>
    </div>
</template>

<script>
import avatar from "../shared/avatar.vue"

export default {
    components: { avatar },
    props : {
        avatar : {
            type : String
        },
        fullname : {
            type : String
        },
        active : Boolean
    }
}
</script>

<style lang="scss" scoped>
.contact {
    @apply font-semibold text-xl bg-opacity-10 w-full flex items-center space-x-4 p-3 rounded-xl text-white cursor-pointer; 

    &:hover,&.active{
        background-color: #0e78f9;
    }
}
</style>