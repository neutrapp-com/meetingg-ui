<template>
<router-link :to="link">
    <a :title="title" :class="active ? 'active':''" class="side-btn">
        <ion-icon class="icon" :name="getIcon"></ion-icon>
    </a>
</router-link>
</template>


<script>
export default {
    props : {
        title : {
            default : '',
            type: String
        },
        icon : {
            default : 'home',
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
    },
    computed:{
        getIcon(){
            return this.icon + (!this.active && '-outline' || '');
        }
    }
}
</script>

<style lang="scss" scoped>
.side-btn{
    @apply my-2 flex items-center text-center mx-auto rounded-xl h-14 w-14 content-center justify-center;
    border-color: #2f3240;

    .icon{
        @apply text-white text-opacity-60 text-3xl;
    }
    
    &:hover, &.active{
        @apply bg-gray-200 bg-opacity-5  text-white bg-bottom;

        .icon{
            @apply text-opacity-90;
        }
    }

}
</style>