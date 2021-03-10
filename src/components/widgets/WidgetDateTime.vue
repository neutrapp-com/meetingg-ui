<template>
    <div class="widget">
        <h2>{{ getTimeHour }}<small class="text-md">:{{ getTimeSeconds }}</small> </h2>
        <p>{{ getTimeFormat }}</p>
    </div>
</template>

<script>
import moment from 'moment';

export default {
    data () {
        return {
            datetime : Date.now()
        } 
    },
    computed: {
        getTimeFormat() {
            return moment(this.datetime).format('LLLL')
        },
        getTimeHour(){
            return moment(this.datetime).format('hh:mm')
        },
        getTimeSeconds(){
            return moment(this.datetime).format('s').padStart(2,'0');
        },
    },
    methods : {
        getDateTime(){
            return this.datetime;
        },
        updateTime() {
            var self = this;
            self.datetime = Date.now();
            setTimeout(self.updateTime, 1000) // recursive!
        },
    },
    mounted: function() {
      this.updateTime();
    }
}
</script>

<style scoped lang="scss">
.widget {
    @apply w-full  p-10 pt-16 rounded-2xl text-white;

    h2 {
        @apply text-6xl font-bold p-0 m-0 mb-2 mt-5;
    }

    p {
        @apply text-2xl p-0 m-0 mt-2 font-medium break-all;
        line-break: break-all;
    }

    background-color: #446373;
    background-image: url('../../assets/images/widgetexample.png');
    background-size: auto 100%;
    background-position: right;
    background-repeat: no-repeat;
}
</style>