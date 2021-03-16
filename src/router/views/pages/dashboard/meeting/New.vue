<template>
<div class="flex md:flex-shrink-0 w-full items-center">
    <alert v-if="authError" :title="Error" :message="authError" type="error" />
    <div class="flex flex-col p-6 ml-16 w-full">
        <form method="POST" id="form" class="w-full">

            <div class="mb-6 w-full">
                <label for="title" class="block mb-2 text-md text-gray-400">Title</label>
                <div class="flex flex-row h-12 w-full bg-light mr-4 bg-opacity-5 rounded-lg p-1 noselect">
                    <input type="text" id="title" class="flex-shrink pl-3 flex-grow bg-light bg-opacity-0 text-light flex-auto leading-normal w-px flex-1 border-0 rounded rounded-l-none self-center relative  font-roboto text-md outline-none" placeholder="Title" />
                </div>
            </div>
            <div class="mb-6">
                <label for="start_day" class="block mb-2 text-md text-gray-400">Start Day</label>
                <div class="flex flex-row h-12 w-full bg-light mr-4 bg-opacity-5 rounded-lg p-1 noselect">
                    <input  type="date" name="start_day" id="start_day" class="flex-shrink pl-3 flex-grow bg-light bg-opacity-0 text-light flex-auto leading-normal w-px flex-1 border-0 rounded rounded-l-none self-center relative  font-roboto text-md outline-none" />
                </div>
            </div>
            <div class="flex space-x-4">
                <div class="mb-6 w-1/2">
                    <label for="start_at" class="text-sm text-md text-gray-400">Start At</label>
                    <div class="flex flex-row h-12 w-full bg-light mr-4 bg-opacity-5 rounded-lg p-1 noselect">
                        <input  type="time" name="start_at" id="start_at" class="flex-shrink pl-3 flex-grow bg-light bg-opacity-0 text-light flex-auto leading-normal w-px flex-1 border-0 rounded rounded-l-none self-center relative  font-roboto text-md outline-none" />
                    </div>
                </div>
                <div class="mb-6 w-1/2">
                    <label for="end_at" class="text-sm text-md text-gray-400">End At</label>
                    <div class="flex flex-row h-12 w-full bg-light mr-4 bg-opacity-5 rounded-lg p-1 noselect">
                        <input  type="time" name="end_at" id="end_at" class="flex-shrink pl-3 flex-grow bg-light bg-opacity-0 text-light flex-auto leading-normal w-px flex-1 border-0 rounded rounded-l-none self-center relative  font-roboto text-md outline-none" />
                    </div>
                </div>
            </div>
            <div class="mb-6">
                <label for="description" class="block mb-2 text-md text-gray-400">Description</label>
                <div class="flex flex-row h-12 w-full bg-light mr-4 bg-opacity-5 rounded-lg p-1 noselect">
                    <input  type="text" name="description" id="description" class="flex-shrink pl-3 flex-grow bg-light bg-opacity-0 text-light flex-auto leading-normal w-px flex-1 border-0 rounded rounded-l-none self-center relative  font-roboto text-md outline-none" placeholder="Description" />
                </div>
            </div>
        </form>
    </div>
    <div class="flex flex-col items-center w-full">
        <participant-list/>
        <btn :highlighted="true" class="w-4/5 h-12 m-6 rounded-lg ">
            <ion-icon class="text-light text-xl" name="add-outline"></ion-icon>
            <p class="text-light">Create new Meeting</p>
        </btn>

    </div>


</div>

</template>

<script>
import ParticipantList from '../../../../../components/widgets/meeting/ParticipantList.vue'
import Btn from '@/components/shared/Btn.vue'

export default {
    components: {
        ParticipantList,
        Btn
    },
}
</script>
