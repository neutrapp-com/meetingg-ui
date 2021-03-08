<template>
    <div class="w-full h-screen text-center text-white">
        <p class="text-4xl font-bold">Meetingg</p>
        <p class="text-xl font-bold">Sign In</p>
        <router-link to="/register">You don't have an account ?</router-link>
        <router-link to="/">
            <button class="ml-3 py-2 px-4 text-white rounded">Login</button>
        </router-link>
    </div>
</template>

<script>


    export default {
        components:{
        }
    }
</script>

<style scoped>
button{
    background-color: #242736;
    border: 2px solid #2F3240;
}
</style>
