<template>
<a v-bind="{href: link}" >
    <div class="textbutton" v-bind:style="{ background: color, color: fontColor }">
        {{ text }}
    </div>
</a>
</template>


<script>
export default {
    name: 'TextButton',
    props : {
        text : {
            default : 'Your Text Here',
            type: String
        },
        color : {
            default : '#232634',
            type: String
        },
        fontColor : {
            default : '#97989e',
            type: String
        },
        link : {
            default : '#',
            type: String
        }
    }
}
</script>

<style lang="scss">
.textbutton{
    @apply px-6 py-3 rounded-lg;
    @apply border-2 rounded-lg;
    min-height: 3rem;
    border-color: #2f3240;
    font-size: 1rem;

    &:hover{
        @apply cursor-pointer transform  scale-105 shadow-2xl ;
    }
}
</style>