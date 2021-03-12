<template>
    <a class="squarebutton" :style="{ background: color }">
        <div class="icon">
            <ion-icon :name="icon"></ion-icon>
        </div>
        <div class="info">
            <h3>{{ title }}</h3>
            <p>{{ description }}</p>
        </div>
    </a>
</template>


<script>
export default {
    name: 'SquareButton',
    props : {
        title : {
            default : 'Title',
            type: String
        },
        description : {
            default : 'Set up new box',
            type: String
        },
        icon : {
            default : 'help',
            type: String
        },
        color : {
            default : '#ff742e',
            type: String
        }
    }
}
</script>


<style lang="scss">
.squarebutton{
    fill: white;

    @apply relative bg-blue-500  p-8 rounded-2xl w-56 h-56  text-gray-200;

    .dark & {
        @apply text-light;
    }

    &:hover{
        @apply cursor-pointer shadow-2xl ;
    }
    .info{
        @apply absolute bottom-3;
        
        h3{
            @apply mb-1;
            font-weight: bold;
        }
        
        p{
            @apply mt-1 mb-2;
        }
    }
    
    .icon{
        @apply
            text-center
            p-2 m-0
            rounded-xl border-solid border-white
            h-16 w-16
            flex flex-wrap content-center justify-center ;

        background: rgba(255,255,255,0.15);
        border-color: rgba(255,255,255,0.3);
        border-width: 1.5px;
        font-size: 2.7rem;
        
        ion-icon{
            -webkit-filter: drop-shadow( 3px 3px 2px rgba(0, 0, 0, .9));
           filter: drop-shadow( 3px 3px 2px rgba(0, 0, 0, .15));
        }
    }
}
</style>