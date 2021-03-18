<template>
    <div class="widget flex divide-y divide-light divide-opacity-5">
        <div class="flex w-full justify-between mb-4"> 
            <h1> {{meeting.title}} </h1>
            <p class="mr-4">
                <ion-icon name="time-outline"></ion-icon> {{ getStartHour }} - {{ getEndHour }} |  {{ getTimeRemaining }}
            </p>
        </div>
        <div class="flex w-full"> 
            <div class="button-list">
                <div class="flex w-full space-x-4">
                    <btn :highlighted="true">
                        <ion-icon class="text-light mr-2 text-xl" name="caret-forward-outline"></ion-icon>
                        Start
                    </btn>
                    <btn @click="navigateTo('/call')">
                        <ion-icon class="text-gray-400 mr-2 text-xlv" name="log-in-outline"></ion-icon>
                        Join
                    </btn>
                    <btn>
                        <ion-icon class="text-gray-400 mr-2 text-xl" name="copy-outline"></ion-icon>
                        Copy invitation
                    </btn>          
                </div>
                <div class="flex space-x-4">
                    <btn @click="$emit('deleteMeeting')">
                        <ion-icon class="text-gray-400 text-xl" name="trash-outline"></ion-icon>
                    </btn>
                    <btn>
                        <ion-icon class="text-gray-400 text-xl" name="create-outline"></ion-icon>
                    </btn>
                </div>
            </div>
        </div>
        <div>
             <p class="py-4" v-if="meeting.description != undefined"> {{meeting.description}} </p>
        </div>
    </div>
</template>

<script>
    import Btn from '../../shared/Btn.vue';
    import router from '@/router'

    export default {
        name : 'manageMeeting',
        components: { Btn },
        props : {
            meeting : {
                type: Object
            },
        },
        data(){
            return{
                remTime: false,
            }
        },
        computed : {
            updateDateWidget(){
                return (new Date()).toString();
            },
            getMembers(){
                return this.members.slice(0,5);
            },
            isStarted(){
                console.log(this.getTimeRemaining)
                return this.getTimeRemaining<=0
            },
            getStartHour(){
                let startDate = this.toDateTime(this.toTimeStamp(this.meeting.start_at));
                return startDate.getHours() + ':' + startDate.getMinutes();
            },
            getEndHour(){
                let endDate = this.toDateTime(this.toTimeStamp(this.meeting.start_at));
                return endDate.getHours() + ':' + endDate.getMinutes();
            },
            getTimeRemaining(){
                let secRem = this.toTimeStamp(this.meeting.start_at) - (Date.now()/1000);
                let rem = this.toDateTime(secRem);
                
                return (secRem > 0 ? `starts in ${rem.getHours()} hours` : `finished ${rem.getHours()} hours ago`);
            },
        },
         methods : {
            toTimeStamp(date) {
                return Date.parse(date)/1000;
            },
            navigateTo(link){
                router.push(link)
            },
            toDateTime(secs) {
                var t = new Date(1970, 0, 1);
                t.setSeconds(secs);
                return t;
            }
        },
    }
</script>

<style scoped lang="scss">
.widget {
    @apply flex flex-col pb-4;

    h1{
        color: white;
        font-size: 2rem;
    }

    p{
        @apply pt-4;
        color: #a8a9ae;
    }

    .button-list{
        @apply flex w-full justify-between py-4;

    }
}
</style>