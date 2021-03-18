<template>
<div class="setting">


    <h1>PARAMETRES VOCAUX</h1>
    <div class="audio">
        
        <div class="">
            <h1 v-on:click="opt1 = !opt1" class="bg-gray-600 rounded-full py-3 px-6">
                Périphérique d'entrée
            </h1>

            <div v-if="opt1" class="audio-opt" > 
                <ul v-for="opt in audioEnt" :key="opt">{{opt}}</ul>
            </div>
        </div>
        <div class="">
            <h1 v-on:click="opt2 = !opt2" class="bg-gray-600 rounded-full py-3 px-6">
                Périphérique de sortie
            </h1>
            
            <div v-if="opt2"  class="audio-opt" > 
                <ul v-for="opt in audioSrt" :key="opt">{{opt}}</ul>
            </div>
        </div>
        
    </div>
<hr>
    <div class="micro">
        <h1 class="p-5">Activation du Micro</h1>
        <div class="flex flex-col space-y-3">
            <p class="micro-opt">Detection de la voix</p>
            <p  class="micro-opt">Appuyer-pour-parler</p>


        </div>

    </div>

    <div class="video">
        <h1>PARAMETRES CAMERA</h1>
        <p v-on:click="opt3 = !opt3" class="bg-gray-600 rounded-full py-3 px-6">Caméra</p>
        <div v-if="opt3"  class="video-opt" > 
                <ul v-for="opt in vidOpt" :key="opt">{{opt}}</ul>
            </div>
        </div>

</div>



</template>

<script>



import {

} from '@/state/helpers';



export default {
    data() {
        return {
            opt1:false,
            opt2:false,
            opt3:false,
            micro:false,
            audioEnt:["Default","Microphone pc", "Headset Microphone"],
            audioSrt:["Default","Haut-Parleurs", "Wireless Headset"],
            vidOpt:["Default", "USB WebCam"]
        }
    },
    components: {

    },
    methods:{

    },
    computed:{

    }
}
</script>

<style lang="scss" scoped>
.audio {
    @apply grid grid-cols-2 gap-4 p-5 ;
    .audio-opt {
        @apply bg-gray-800 rounded-3xl p-5;
    }
}

.micro {
    @apply h-48 flex flex-col content-start;
    .micro-opt{
        @apply bg-gray-600 rounded-full py-3 px-6 text-center;
    }
}

.video {
    @apply grid grid-cols-1 gap-4 p-5 w-auto ;
    .video-opt {
        @apply bg-gray-800 rounded-3xl p-5;
    }
}

</style>
