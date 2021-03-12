<template>
    <div class="widget flex divide-y divide-light divide-opacity-5">
        <div class="flex w-full justify-between mb-4"> 
            <h1> {{title}} </h1>
            <p class="mr-4">
                <ion-icon name="time-outline"></ion-icon> {{ getStartHour }} - {{ getEndHour }} |  {{ getTimeRemaining }}
            </p>
        </div>
        <div class="flex w-full"> 
            <div class="button-list">
                <div class="flex w-full space-x-4">
                    <btn :highlighted="true">
                        <ion-icon class="text-white mr-2 text-xl" name="caret-forward-outline"></ion-icon>
                        Start
                    </btn>
                    <btn>
                        <ion-icon class="text-gray-400 mr-2 text-xl" name="copy-outline"></ion-icon>
                        Copy invitation
                    </btn>
                    <btn>
                        <ion-icon class="text-gray-400 mr-2 text-xl" name="log-in-outline"></ion-icon>
                        Join from Room
                    </btn>
                </div>
                <div class="flex space-x-4">
                    <btn>
                        <ion-icon class="text-gray-400 text-xl" name="trash-outline"></ion-icon>
                    </btn>
                    <btn>
                        <ion-icon class="text-gray-400 text-xl" name="create-outline"></ion-icon>
                    </btn>
                </div>
            </div>
        </div>
        <p> {{description}} </p>
    </div>
</template>

<script>
    import Btn from '../../shared/Btn.vue';

    export default {
        name : 'manageMeeting',
        components: { Btn },
        props : {
            title : {
                default : 'Meeting Title',
                type: String
            },
            description : {
                default : 'Your description',
                type: String
            },
            startTime : {
            default : (Date.now()/1000 + 3600 * 3),
            type: Number
            },
            endTime : {
                default : (Date.now()/1000  + 3600 * 4),
                type: Number
            }
        },
        computed : {
            updateDateWidget(){
                return (new Date()).toString();
            },
            getStartHour(){
                let startDate = this.toDateTime(this.startTime);
                return startDate.getHours() + ':' + startDate.getMinutes();
            },
            getEndHour(){
                let endDate = this.toDateTime(this.endTime);
                return endDate.getHours() + ':' + endDate.getMinutes();
            },
            getTimeRemaining(){
                let secRem = this.startTime - (Date.now()/1000);
                let rem = this.toDateTime(secRem);
                
                return (secRem > 0 ? `starts in ${rem.getHours()} hours` : `finished ${rem.getHours()} hours ago`);
            },
            getMembers(){
                return this.members.slice(0,5);
            }
        },
         methods : {
            toDateTime(secs) {
                var t = new Date(1970, 0, 1);
                t.setSeconds(secs);
                return t;
            }
        }
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