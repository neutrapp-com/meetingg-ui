<template>
    <div class="contact-user" :class="active == true ? 'active' : ''">
        <avatar :image="avatar" size="w-12 h-12"/>
        <p class="ml-4 self-center text-sm">{{ getFullName }}</p>
    </div>
</template>

<script>
import avatar from "../shared/Avatar.vue"

export default {
    components: { avatar },
    props : {
        avatar : {
            type : String
        },
        firstname : {
            type : String
        },
        lastname : {type: String},
        email : {type: String},
        active : Boolean
    },
    computed: {
        getFullName(){
            return this.firstname + ' ' + this.lastname;
        }
    }
}
</script>

<style lang="scss" scoped>
.contact-user {
    @apply text-xl bg-opacity-10 w-full flex items-center space-x-4 p-2 rounded-lg transition duration-100 ease-in-out cursor-pointer  text-dark ;

    .dark & {
        @apply text-light;
    } 
    

    &:hover,&.active{
        background-color: #0e78f9;
    }
}
</style>