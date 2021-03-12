<template>
    <div class="widget">
        <h1> {{title}} </h1>
        <h6>
            <ion-icon name="time-outline"></ion-icon> {{ getStartHour }} - {{ getEndHour }} |  {{ getTimeRemaining }}
        </h6>
        <hr>
        <div class="button-list">
            <text-button text="Start" color="#0e78f9" fontColor="#FFFFFF" link="https://youtube.com"/>
            <text-button text="Copy invitation" link="page1"/>
            <text-button text="Join from Room"/>
            <icon-button icon="https://icons-for-free.com/iconfiles/png/512/svg+create+edit+edit+file+office+pencil+writing+creativ+icon-1320185158722776676.png"/>
            <icon-button icon="https://image.flaticon.com/icons/png/512/61/61848.png"/>
        </div>
        <hr>
        <h6> {{description}} </h6>
    </div>
</template>

<script>
    import TextButton from '../../cards/TextButton.vue';
    import IconButton from '../../cards/IconButton.vue';

    export default {
        name : 'manageMeeting',
        components: { TextButton, IconButton },
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
    @apply flex flex-col;

    h1{
        color: white;
        font-size: 2rem;
    }

    h6{
        @apply p-4;
        color: #a8a9ae;
    }

    hr{
        height: 1px;
        background-color: #a8a9ae;
        border: none;
    }

    .button-list{
        @apply flex p-4;

        a{
            margin-right: 12px;
        }
    }
}
</style>