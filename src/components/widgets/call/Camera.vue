<template>
    <div class="camera relative">
        <video controls>

            <source src="/media/cc0-videos/flower.webm"
                    type="video/webm">

            <source src="/media/cc0-videos/flower.mp4"
                    type="video/mp4">

            Sorry, your browser doesn't support embedded videos.
        </video>

        <div class="informations absolute bottom-0">
            <div>
                <p class="ml-4 bg">{{participant.lastname + ' ' + participant.firstname}}</p>
            </div>
            <div class="flex">
                <ion-icon class="text-gray-400 text-xl mr-2 bg" :name="participant.audio ? 'mic-outline': 'mic-off-outline'"></ion-icon>
                <ion-icon class="text-gray-400 text-xl bg" :name="participant.video ? 'eye-outline': 'eye-off-outline'"></ion-icon>
            </div>
        </div>
        
    </div>
</template>

<script>
    export default {
        props:{
            participant:{
                type:Object,
            }
        }
    }
</script>

<style lang="scss" scoped>

.camera{
    @apply flex w-full;
    

    .informations{
        @apply flex bg-cover bg-center;
        justify-content: space-between;

        .bg{
            background-color: rgba(0, 0, 0, 0.4);
            padding: 2px;
            border-radius: 5px;
        }
    }

    
}




</style>