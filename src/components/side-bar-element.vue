<template>
<router-link :to="link">
    <div v-if="active===true" class="bg-gray-200 mb-6 bg-opacity-5 text-center pt-2 mx-auto mt-5 rounded-xl border-2 h-12 w-12 content-center justify-center">
                <ion-icon class="text-white text-3xl" :name="icon"></ion-icon>
    </div>
    <div v-else class="text-center pt-2 mx-auto mt-5  h-12 w-12 content-center justify-center">
        <ion-icon class="text-gray-400 text-3xl" :name="icon"></ion-icon>
    </div>
</router-link>
</template>


<script>
export default {
    name: 'SideBarElement',
    props : {
        icon : {
            default : 'home-outline',
            type: String
        },
        active : {
            default : false,
            type: Boolean
        },
        link : {
            default : '/',
            type: String
        }
    }
}
</script>

<style lang="scss">
.iconbutton{
    @apply h-12 w-12 p-2 rounded-lg;
    @apply border-2 rounded-lg;
    border-color: #2f3240;

    &:hover{
        @apply cursor-pointer transform  scale-105 shadow-2xl ;
    }

    .icon{
        @apply w-full h-full bg-no-repeat bg-contain;
    }
}
</style>