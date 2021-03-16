<template>
<div class="flex md:flex-shrink-0 w-full items-center">
    <alert v-if="error !== null" :title="Error" :message="error" type="error" />
    <div class="flex flex-col p-6 ml-16 w-full">
        <form method="POST" id="form" class="w-full">

            <div class="mb-6 w-full">
                <label for="title" class="block mb-2 text-md text-gray-400">Title</label>
                <div class="flex flex-row h-12 w-full bg-light mr-4 bg-opacity-5 rounded-lg p-1 noselect">
                    <input v-model="title" type="text" id="title" class="flex-shrink pl-3 flex-grow bg-light bg-opacity-0 text-light flex-auto leading-normal w-px flex-1 border-0 rounded rounded-l-none self-center relative  font-roboto text-md outline-none" placeholder="Title" />
                </div>
            </div>
            <div class="flex space-x-4">
                <div class="mb-6 w-1/2">
                    <label for="start_at" class="text-sm text-md text-gray-400">Start At</label>
                    <div class="flex flex-row h-12 w-full bg-light mr-4 bg-opacity-5 rounded-lg p-1 noselect">
                        <input v-model="start_at" type="datetime-local" name="start_at" id="start_at" class="flex-shrink pl-3 flex-grow bg-light bg-opacity-0 text-light flex-auto leading-normal w-px flex-1 border-0 rounded rounded-l-none self-center relative  font-roboto text-md outline-none" />
                    </div>
                </div>
                <div class="mb-6 w-1/2">
                    <label for="end_at" class="text-sm text-md text-gray-400">End At</label>
                    <div class="flex flex-row h-12 w-full bg-light mr-4 bg-opacity-5 rounded-lg p-1 noselect">
                        <input v-model="end_at" type="datetime-local" name="end_at" id="end_at" class="flex-shrink pl-3 flex-grow bg-light bg-opacity-0 text-light flex-auto leading-normal w-px flex-1 border-0 rounded rounded-l-none self-center relative  font-roboto text-md outline-none" />
                    </div>
                </div>
            </div>
            <div class="mb-6">
                <label for="description" class="block mb-2 text-md text-gray-400">Description</label>
                <div class="flex flex-row h-12 w-full bg-light mr-4 bg-opacity-5 rounded-lg p-1 noselect">
                    <input v-model="description" type="text" name="description" id="description" class="flex-shrink pl-3 flex-grow bg-light bg-opacity-0 text-light flex-auto leading-normal w-px flex-1 border-0 rounded rounded-l-none self-center relative  font-roboto text-md outline-none" placeholder="Description" />
                </div>
            </div>
        </form>
    </div>
    <div class="flex flex-col items-center w-full">
        <participant-list/>
        <btn @click="tryNewMeeting" :highlighted="true" class="w-4/5 h-12 m-6 rounded-lg ">
            <ion-icon class="text-light text-xl" name="add-outline"></ion-icon>
            <p class="text-light">Create new Meeting</p>
        </btn>

    </div>


</div>

</template>

<script>
import ParticipantList from '../../../../../components/widgets/meeting/ParticipantList.vue'
import Btn from '@/components/shared/Btn.vue'

import {
    meetingMethods,
} from '@/state/helpers';

export default {
    components: {
        ParticipantList,
        Btn
    },
    data() {
        return {
        title: null,
        description: null,
        start_day: Date.now(),
        start_at: Date.now(),
        end_at: null,
        participants:[],
        try: false,
        error: null
        }
    },
    methods:{
        ...meetingMethods,
        tryNewMeeting(){
            this.try = true
            // Reset the authError if it existed.
            this.error = null
            return this.newMeeting({
                title: this.title,
                description: this.description,
                start_at: this.start_day,
                start_end: this.end_at,
                participants: this.participants
            })
                .then((token) => {
                this.try = false
                this.error = false
                // Redirect to the originally requested page, or to the home page
                this.$router.push(
                    this.$route.query.redirectFrom || { name: 'Dashboard' }
                )
                })
                .catch((error) => {
                this.tryingToLogIn = false
                this.error = error.response ? error.response.data.message : ''
                })
        }
    }
}
</script>
