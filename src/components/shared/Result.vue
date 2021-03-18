<template>
<div class="flex items-center">
    <div class="contact-user" :class="active == true ? 'active' : ''">
        <avatar :image="profile.avatar" size="w-12 h-12"/>
        <p class="ml-4 self-center text-sm">{{ getFullName }}</p>
    </div>
    <btn class="ml-4"  @click="$emit('addProfile', profile); added = true" >
        <ion-icon class="text-light text-xl" :name="added ? 'checkmark-outline' : 'person-add'"></ion-icon>
    </btn>
</div>
</template>

<script>
import avatar from "../shared/Avatar.vue"
import Btn from '../shared/Btn.vue';

export default {
    components: { avatar, Btn },
        props : {
        profile : {
            type : Object
        },
        active : Boolean
    },
    computed: {
        getFullName(){
            return this.profile.firstname + ' ' + this.profile.lastname;
        }
    },
    data(){
        return{
            added:false,
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