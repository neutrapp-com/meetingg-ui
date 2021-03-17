<template>
	<div class="flex flex-col flex-wrap justify-center w-full divide-x divide-light divide-opacity-5">
        <div class="flex justify-center mb-4 scroll">
            <input type="text" v-model="meeting" id="meeting" pattern="[a-z0-9-]{36}" required>
        </div>
        <div class="flex justify-center mt-4 scroll">
            <button @click="navigateTo(meeting)">Rejoindre le Meeting</button>
        </div>
    </div>
</template>

<script>
import router from '@/router';

export default {
    methods:{
        navigateTo(link){
            router.push(link)
        },
        data(){
            return {
                meeting: null,
            }
        }
    }
}
</script>

<style scoped lang="scss">
    input {
        background-color: #313647;
        text-align: center;
        height: 100px;
        width: 350px;
        font-size: 3em;
    }

    button {
        font-size: 2em;
    }
</style>