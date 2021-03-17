<template>
    <div class="widgetmeeting">
        <div class="w-8/12">
            <h2 class="title text-2xl font-bold">
                {{ title }}
            </h2>
            <p class="datetime">
                <ion-icon name="time-outline"></ion-icon> {{ getStartHour }} - {{ getEndHour }} |  {{ getTimeRemaining }}
            </p>

            <div class="listusers mg-2">
                <ul class="members">
                    <li v-for="member in getMembers" v-bind:key="member.id">
                        <avatar :image="member.avatar" />
                    </li>
                </ul>
            </div>
        </div>
        <div class="w-4/12 ">
            <span class="rounded-xl bg-gray-600 bg-opacity-40 border-opacity-5 px-6 pt-3 pb-1 float-right">
                <ion-icon name="options-outline" class="d-flex text-lg"/>
            </span>
        </div>
    </div>
</template>


<script>
import avatar from '../shared/Avatar.vue';
export default {
  components: { avatar },
    props : {
        title: {
            default: "Design Daily Zoom Meeting",
            type: String
        },
        startTime : {
            default : (Date.now()/1000 + 3600 * 3),
            type: Number
        },
        endTime : {
            default : (Date.now()/1000  + 3600 * 4),
            type: Number
        },
        users : {
            default : []
        }
    },
    computed : {
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
            console.log(this.users)
            return this.users.slice(0,5);
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

<style lang="scss" scoped>
    .widgetmeeting {
        @apply w-full p-11 rounded-2xl flex text-gray-600 bg-dark transition  text-dark border-b border-dark;

        background-color:#E1E1E1;


        .dark & {
            @apply text-light bg-light bg-opacity-5;
            background-color:#212534;
        }


        ion-icon {
            fill: white;
        }

        .datetime {
            @apply  mt-2;
        }

        .members{
            @apply flex mt-4;

            .avatar {
                @apply mr-2;
            }
        }

    }
</style>