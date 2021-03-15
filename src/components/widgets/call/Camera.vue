<template>
    <div class="camera">
        <div class="informations">
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
    @apply flex bg-cover;
    background-image: url('https://ak.picdn.net/shutterstock/videos/26198027/thumb/12.jpg');
    

    .informations{
        @apply flex w-full;
        justify-content: space-between;

        .bg{
            background-color: rgba(0, 0, 0, 0.4);
            padding: 2px;
            border-radius: 5px;
        }
    }

    
}




</style>