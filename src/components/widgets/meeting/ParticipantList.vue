<template>
    <div class="widget">
        <div class="title">
            <ion-icon class="icon" name="people"></ion-icon>
            <h1>Participants :</h1>
        </div>
        <div class="participants" >
            <div v-for="member in getMembers" v-bind:key="member.id">
                <participant-card v-bind="member"/>
            </div>
            <div >
                <participant-card link="#" fullname="Invite Members" :avatar="null">
                    <ion-icon name="duplicate"></ion-icon>
                </participant-card>
            </div>
        </div>
    </div>
</template>

<script>
    import ParticipantCard from '../../cards/ParticipantCard.vue';
    export default {
        name : 'ParticipantList',
        components: { ParticipantCard },
        props : {
            members : {
                type: Array()
            }
        },
        computed :{
            getMembers(){
                return this.members;
            },
            countMembers(){
                return this.members.length;
            }
        }
    }
</script>

<style scoped lang="scss">
.widget {
    @apply flex flex-col divide-none;

    h1{
        @apply p-4;
        color: #a8a9ae;
    }

    .participants{
        @apply flex flex-wrap p-4;

        .participant{
            @apply m-2;
        }
    }
    .title{
        @apply flex items-center text-xl;

        .icon{
            @apply text-2xl;
        }
    }
}
</style>