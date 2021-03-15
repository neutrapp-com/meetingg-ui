<template>
    <div class="flex w-full">
        <div class="flex w-full h-full">
            <camera :participant="getMainCamera"/>
        </div>
        <div class="scroll">
            <div v-for="participant in getSubCamera" v-bind:key="participant.id" class="flex flex-col p-1">
                <camera class="flex" :participant="participant"/>
            </div>
        </div>
        
    </div>
</template>

<script>
import { computed } from 'vue';
    import Camera from './Camera.vue';
    export default {
        components:{
            Camera
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