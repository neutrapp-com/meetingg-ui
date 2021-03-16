<template>
<div class="flex md:flex-shrink-0 w-full items-center">
    <alert v-if="authError" :title="Error" :message="authError" type="error" />
    <div class="flex flex-col p-6 ml-16 w-full">
        <form method="POST" id="form" class="w-full">

            <div class="mb-6 w-full">
                <label for="title" class="block mb-2 text-md text-gray-400">Title</label>
                <input type="text" name="title" id="title" placeholder="Meeting" required class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
            </div>
            <div class="mb-6">
                <label for="start_day" class="block mb-2 text-md text-gray-400">Start Day</label>
                <input type="date" name="start_day" id="start_day" placeholder="you@company.com" required class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
            </div>
            <div class="flex space-x-4">
                <div class="mb-6 w-1/2">
                    <label for="start_at" class="text-sm text-md text-gray-400">Start At</label>
                    <input type="time" name="start_at" id="start_at" placeholder="+1 (555) 1234-567" required class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                </div>
                <div class="mb-6 w-1/2">
                    <label for="end_at" class="text-sm text-md text-gray-400">End At</label>
                    <input type="time" name="end_at" id="end_at" placeholder="+1 (555) 1234-567" required class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                </div>
            </div>
            <div class="mb-6">
                <label for="description" class="block mb-2 text-md text-gray-400">Description</label>

                <textarea rows="5" name="description" id="description" placeholder="Meeting's description" class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" required></textarea>
            </div>
        </form>
    </div>
    <div class="flex flex-col items-center w-full">
        <participant-list/>
        <button class="btn w-1/2">Create new Meeting</button>

    </div>


</div>

</template>

<script>
import ParticipantList from '../../../../../components/widgets/meeting/ParticipantList.vue'

export default {
    components: {
        ParticipantList
    },
}
</script>

<style  lang="scss" scoped>
.btn{
    @apply w-2/3 mt-6 py-2  mx-auto bg-dark rounded font-bold text-light;

    .dark & {
        @apply bg-light text-dark;
    }
}

</style>