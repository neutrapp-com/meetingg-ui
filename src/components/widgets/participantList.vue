<template>
    <div class="widget">
        <h1>Participants:</h1>
        <div class="participants" >

            <div v-for="member in getMembers" v-bind:key="member.id">
                <participant-card v-bind="member"/>
            </div>

            <div style="backgroud-color: red;">
                <participant-card link="#" fullname="INVITE MEMBERS" avatar="https://cdn3.iconfinder.com/data/icons/basic-interface/100/add_user-512.png"/>
            </div>

        </div>
    </div>
</template>

<script>
    import ParticipantCard from '../cards/ParticipantCard.vue';

    export default {
        name : 'participantList',
        components: { ParticipantCard },
        props : {
            members : {
                default : [
                    { id: "1", fullname: 'Jhon Doe', avatar: 'https://i.imgur.com/DkwKnRj.jpg' },
                    { id: "2", fullname: 'Jaques Richard', avatar: 'https://i.imgur.com/DkwKnRj.jpg' },
                    { id: "3", fullname: 'Patrick James', avatar: 'https://i.imgur.com/DkwKnRj.jpg' },
                    { id: "4", fullname: 'Ricardo Baldos', avatar: 'https://i.imgur.com/DkwKnRj.jpg' },
                    { id: "5", fullname: 'Dente Rack', avatar: 'https://i.imgur.com/DkwKnRj.jpg' },
                    { id: "6", fullname: 'Gibs stark', avatar: 'https://i.imgur.com/DkwKnRj.jpg' },
                    { id: "1", fullname: 'Jhon Doe', avatar: 'https://i.imgur.com/DkwKnRj.jpg' },
                    { id: "2", fullname: 'Jaques Richard', avatar: 'https://i.imgur.com/DkwKnRj.jpg' },
                    { id: "3", fullname: 'Patrick James', avatar: 'https://i.imgur.com/DkwKnRj.jpg' },
                    { id: "4", fullname: 'Ricardo Baldos', avatar: 'https://i.imgur.com/DkwKnRj.jpg' },
                    { id: "5", fullname: 'Dente Rack', avatar: 'https://i.imgur.com/DkwKnRj.jpg' },
                    { id: "6", fullname: 'Gibs stark', avatar: 'https://i.imgur.com/DkwKnRj.jpg' }
                ],
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
    @apply flex flex-col p-4;

    h1{
        @apply p-4;
        color: #a8a9ae;
    }

    .participants{
        @apply flex flex-wrap p-4;

        div{
            padding-right: 12px;
            padding-bottom: 12px;
        }
    }
}
</style>