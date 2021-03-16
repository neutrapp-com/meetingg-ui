<template>
    <div class="widget">
        <h1>Participants:</h1>
        <div class="participants" >

            <div v-for="member in getMembers" v-bind:key="member.id">
                <participant-card v-bind="member"/>
            </div>
            <div >
                <participant-card link="#" fullname="Invite Members" :avatar="null" @click="changeBackground();">
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
        methods: {
            changeBackground(){
                this.$emit('changeBackground');
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
    @apply flex flex-col;

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
}
</style>