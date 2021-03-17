<template>
<div class="newmeeting  noselect">
    <div class="flex">
        <h1 class="text-3xl">
            New Meeting
        </h1>
    </div>
    <alert v-if="error !== null" :message="message" :type="error == false ? 'success' : 'error'" />
    <div class="form py-6">
        <form method="POST" id="form" class="w-full">
            <div class="mb-6 w-full">
                <label for="title" class="block mb-2 text-md text-gray-400">Title</label>
                <div class="form-group">
                    <input v-model="title" type="text" id="title" class="form-input" placeholder="Title" />
                </div>
            </div>
            <div class="flex space-x-4">
                <div class="mb-6 w-1/2">
                    <label for="start_at" class="text-sm text-md text-gray-400">Start At</label>
                    <div class="form-group">
                        <input v-model="start_at" type="datetime-local" name="start_at" id="start_at" class="form-input" />
                    </div>
                </div>
                <div class="mb-6 w-1/2">
                    <label for="end_at" class="text-sm text-md text-gray-400">End At</label>
                    <div class="form-group">
                        <input v-model="end_at" type="datetime-local" name="end_at" id="end_at" class="form-input" />
                    </div>
                </div>
            </div>
            <div class="mb-6">
                <label for="description" class="block mb-2 text-md text-gray-400">Description</label>
                <div class="form-group">
                    <textarea v-model="description" type="text" name="description" id="description" class="form-input" placeholder="Description" ></textarea>
                </div>
            </div>
        </form>
        <btn @click="tryNewMeeting" :highlighted="true" class="rounded-lg">
            <ion-icon class="text-light text-xl" name="add-outline"></ion-icon>
            <p class="text-light">Create new Meeting</p>
        </btn>
    </div>
    <participant-list v-on:inviteMember="$emit('inviteMember', participants)" :members="getMembers"/>
</div>

</template>

<script>
import ParticipantList from '@/components/widgets/meeting/ParticipantList.vue'
import Btn from '@/components/shared/Btn.vue'
import Alert from '@/components/shared/Alert.vue'

import {
    meetingMethods,
} from '@/state/helpers';

export default {
    components: {
        ParticipantList,
        Btn,
        Alert
    },
    data() {
        return {
            title: null,
            description: null,
            start_at: null,
            end_at: null,
            participants: [],
            error: null,
            message: '',
        }
    },
    methods:{
        ...meetingMethods,
        tryNewMeeting(){
            this.error = null

            return this.newMeeting({
                title: this.title,
                description: this.description,
                start_at: Date.parse(this.start_at)/1000,
                end_at: Date.parse(this.end_at)/1000,
                participants: this.participants.map(a => a.id).join(','),
            })
            .then((data) => {
                console.log(data)
                this.error = data.status != 'ok'
                this.message = !this.error ? 'Meeting Created Succesfully' : data.message
                if(!this.error){
                    this.selectMeeting(data.row);
                    this.$emit('meetingCreated')
                }
            })
            .catch((error) => {
                this.error = true
                this.message = error.response.data.message
            })

        },

        
    },
    computed : {
        getMembers(){
            return this.participants;
        }
    }
}
</script>

<style lang="scss" scoped>
.newmeeting {
    @apply flex flex-col w-full divide-y divide-light divide-opacity-5 space-y-6;

    .form-group{
        @apply flex flex-row py-3 w-full bg-light mr-4 bg-opacity-5 rounded-lg p-1;
    }
    .form-input{
        @apply pl-3  bg-light bg-opacity-0 text-light flex-auto leading-normal w-px flex-1 border-0 rounded rounded-l-none self-center relative outline-none;
    }
}
</style>
