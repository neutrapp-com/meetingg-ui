<template>
    <div class="widget">
        <h1>Participants:</h1>
        <div class="participants" >

            <div v-for="member in getMembers" v-bind:key="member.profileLink">
                <participant-card v-bind="{ link: `${member.profileLink}`, fullname: `${member.fullname}`, icon: `${member.icon}`}"/>
            </div>

            <div style="backgroud-color: red;">
                <participant-card link="#" fullname="INVITE MEMBERS" icon="https://cdn3.iconfinder.com/data/icons/basic-interface/100/add_user-512.png"/>
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
                    { profileLink: "1", fullname: 'Jhon Doe', icon: 'https://www.assyst.de/cms/upload/sub/digitalisierung/15-M.jpg' },
                    { profileLink: "2", fullname: 'Jaques Richard', icon: 'https://www.assyst.de/cms/upload/sub/digitalisierung/15-M.jpg' },
                    { profileLink: "3", fullname: 'Patrick James', icon: 'https://www.assyst.de/cms/upload/sub/digitalisierung/15-M.jpg' },
                    { profileLink: "4", fullname: 'Ricardo Baldos', icon: 'https://www.assyst.de/cms/upload/sub/digitalisierung/15-M.jpg' },
                    { profileLink: "5", fullname: 'Dente Rack', icon: 'https://www.assyst.de/cms/upload/sub/digitalisierung/15-M.jpg' },
                    { profileLink: "6", fullname: 'Gibs stark', icon: 'https://www.assyst.de/cms/upload/sub/digitalisierung/15-M.jpg' },
                    { profileLink: "1", fullname: 'Jhon Doe', icon: 'https://www.assyst.de/cms/upload/sub/digitalisierung/15-M.jpg' },
                    { profileLink: "2", fullname: 'Jaques Richard', icon: 'https://www.assyst.de/cms/upload/sub/digitalisierung/15-M.jpg' },
                    { profileLink: "3", fullname: 'Patrick James', icon: 'https://www.assyst.de/cms/upload/sub/digitalisierung/15-M.jpg' },
                    { profileLink: "4", fullname: 'Ricardo Baldos', icon: 'https://www.assyst.de/cms/upload/sub/digitalisierung/15-M.jpg' },
                    { profileLink: "5", fullname: 'Dente Rack', icon: 'https://www.assyst.de/cms/upload/sub/digitalisierung/15-M.jpg' },
                    { profileLink: "6", fullname: 'Gibs stark', icon: 'https://www.assyst.de/cms/upload/sub/digitalisierung/15-M.jpg' }
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