<template>
<div class="toast" :class="type">
    <div class="body" >
        <div class="icon" >
            <ion-icon v-if="icon !== null"  :name="icon"></ion-icon>
        </div>
        <div class="info" >
            <span class="title">{{ title }}</span>
            <span class="content ">{{ content }}</span>
        </div>
        <div class="utils" @click="closeToast()">
            Dismiss
        </div>
    </div>
</div>
</template>

<script>
export default {
    props : {
        id:{
            type: String
        },
        title : {
            type: String
        },
        content : {
            type: String
        },
        icon : {
            type: String,
            default : null
        },
        timeout : {
            type: Number,
            default: -1
        }
    },
    data(){
        return {
            timer : null,
            timeleft:0,
            clock: 300
        }
    },
    methods :{
        closeToast(){
            this.$store.dispatch('toasts/dropToast' , this.id);
        },
        updateTime(){
            this.timeleft-= this.clock;
            
            if(this.timeleft <= 0 ){
                clearInterval(this.timer);

                setTimeout(()=>{
                    this.closeToast();
                },300);
            }
        }
    },
    mounted(){
        /**
         * Start Interval
         */
        if (this.timeout > 0){
            this.timeleft = this.timeout;

            console.log(this.timeout);
            this.timer = setInterval(()=>{
                this.updateTime();
            },this.clock);
        }
    }
}
</script>

<style lang="scss" scoped>
.toast{
    @apply flex bg-white rounded-lg border-gray-300 border shadow-lg text-left ;

    .body{
        @apply flex flex-row text-gray-500  justify-center items-center ;

        .content{
            @apply block;
        }

        .info{
            @apply ml-2 mr-6 px-2 py-2 w-56;
   
            .title{
                @apply font-semibold;
            }

        }

        .icon{
            @apply flex items-center  justify-center pl-4 py-2 text-center text-3xl;
        }

        .utils{
            @apply flex   px-4 py-2 border-l border-dark cursor-pointer hover:text-red-300;
        }
    }

}

.success{
    @apply bg-green-50 border-green-50;
}
.error{
    @apply bg-red-50 border-red-50;
}
.warning{
    @apply bg-yellow-50 border-yellow-50;
}
    
</style>
