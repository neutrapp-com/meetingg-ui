<template>
<div class="flex flex-col w-2/5 p-6 divide-y divide-white divide-opacity-5">
    <div class="flex w-full justify-between pb-6">
        <div class="flex flex-row h-12 bg-white bg-opacity-5 rounded-lg p-1 noselect">
            <button @click="switchContact" :class="tabContact ? 'active' : 'text-gray-400'" class="w-32 focus:outline-none">Contacts</button>
            <button @click="switchChannel" :class="!tabContact ? 'active' : 'text-gray-400'" class="w-32 focus:outline-none">Channels</button>
        </div>

        <div class="bg-white bg-opacity-5 w-12 h-12 rounded-lg items-center justify-center flex">
            <ion-icon class="text-white text-xl" name="person-add"></ion-icon>
        </div>
    </div>
    <div class="w-full py-6 scroll">
        <list-group :title="tabContact ? 'My Contacts' : 'My Channels'">
            <list-sub-group v-for="subGroup in getSubGroups" v-bind:key="subGroup.id" :items="subGroup.items" :title="subGroup.title" />
        </list-group>
    </div>
</div>
<div class="flex-grow h-full">
    <p>{{getContactName}}</p>
</div>
</template>

<script>
import ListGroup from '@/components/shared/ListGroup.vue'
import ListSubGroup from '@/components/shared/ListSubGroup.vue'

export default {
    components: {
        ListGroup,
        ListSubGroup
    },
    data() {
        return {
            tabContact: false,
            groups: [{
                    id: 1,
                    title: "Starred",
                    items: [{
                        id: 1,
                        name: 'Yassin Rais',
                    }, {
                        id: 2,
                        name: 'Remy Duclos'
                    }]
                },
                {
                    id: 2,
                    title: "Others",
                    items: [{
                        id: 1,
                        name: 'Yassin Rais',
                    }, 
                    {
                        id: 2,
                        name: 'Remy Duclos'
                    },
                    {
                        id: 3,
                        name: 'Remy Duclos'
                    },
                    {
                        id: 4,
                        name: 'Remy Duclos'
                    },
                    {
                        id: 5,
                        name: 'Remy Duclos'
                    },
                    ]
                },
            ]
        }
    },
    computed: {
        getSubGroups() {
            return this.groups;
        }
    },
    methods: {
        switchContact() {
            this.tabContact = true;
        },
        switchChannel() {
            this.tabContact = false;
        }

    }
}
</script>

<style scoped>
.active {
    @apply text-white bg-white bg-opacity-10 rounded-lg border border-white border-opacity-5;
}
</style>
