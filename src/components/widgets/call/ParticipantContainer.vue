<template>
    <div class="flex w-full" id="videolist">
        <div class="flex w-full h-full">
            
        </div>
    </div>
</template>

<script>
import Camera from './Camera.vue';
export default {
    components:{
        // Camera
    },
    props:{
        participants:{
            type:Array
        }
    },
    computed:{
        getMainCamera(){
            return this.participants[0]
        },
        getSubCamera(){
            let sub = []
            for(let i = 1; i<this.participants.length; i++){
                sub.push(this.participants[i])
            }
            return sub
        }
    }
}
</script>

<style lang="scss" scoped>

</style>