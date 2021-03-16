<template>
    <div class="participant" :class="avatar == null ? 'active':''">
        <div class="avatar">
            <avatar v-if="avatar !== null" :image="avatar" size="w-14 h-14" />
            <div  v-else class="icon"  ><slot/></div>
        </div>
        <div class="sep"></div>
        <div class="text">
            {{ fullname }}
        </div>
        
    </div>
</template>


<script>
import avatar from '../shared/Avatar.vue'
export default {
  components: { avatar },
    name: 'ParticipantCard',
    props : {
        avatar : {
            type: String
        },
        fullname : {
            type: String
        },
        id : {
            type: String
        }
    }
}
</script>

<style lang="scss">
.participant{
    @apply w-32 h-36 flex flex-col items-center justify-center space-y-3 border rounded-xl border-light bg-light bg-opacity-5;

    &:hover{
        @apply cursor-pointer shadow-md bg-opacity-10;
    }

    .text{
        @apply overflow-hidden text-center;
        overflow-wrap: break-word;
        color: #93959c;
    }
    .icon{
        @apply  w-14 h-14 flex items-center justify-center  rounded-xl text-3xl bg-light bg-opacity-20;
    }

    &.active{
        @apply  bg-active text-light border border-light;
        .text{
            @apply text-light;
        }
    }
}
</style>