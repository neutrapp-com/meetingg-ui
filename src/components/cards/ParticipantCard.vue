<template>
<a href="#">
    <div class="participant">
        <div class="avatar-contener">
            <avatar :image="avatar" />
        </div>
        <div class="sep"></div>
        <div class="text">
            {{ fullname }}
        </div>
        
    </div>
</a>
</template>


<script>
import avatar from '../shared/avatar.vue'
export default {
  components: { avatar },
    name: 'ParticipantCard',
    props : {
        avatar : {
            default : '',
            type: String
        },
        fullname : {
            default : 'name firstname',
            type: String
        },
        id : {
            default : '#',
            type: String
        }
    }
}
</script>

<style lang="scss">
.participant{
    @apply w-32 h-36 p-1;
    @apply flex flex-col;
    @apply border-2 rounded-lg;
    border-color: #2f3240;
    background-color: #242736;

    &:hover{
        @apply cursor-pointer transform  scale-105 shadow-2xl ;
    }

    .avatar-contener{
        @apply w-full h-full;
        max-height: 30%;

        .avatar{
            margin: auto;
        }
    }

    .sep{
        min-height: 10%
    }

    .text{
        @apply overflow-hidden text-center;
        min-height: 40%;
        max-height: 60%;
        margin: auto;
        overflow-wrap: break-word;
        color: #93959c;
    }
}
</style>