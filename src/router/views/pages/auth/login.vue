<template>
   
    <div class="h-screen text-white flex items-center justify-center">
        <div class="w-1/4 text-center grid space-y-6">
            <img class="mx-auto" src="../../../../assets/images/logo.png" width="200">
            <p class="text-xl font-bold pb-3">Sign In</p>
            <router-link to="/register">You don't have an account ?</router-link>

            <div class="flex flex-wrap items-stretch w-full relative bg-white text-black items-center rounded">
                <div class="flex -mr-px justify-center p-3">
                    <span
                        class="flex items-center leading-normal bg-white px-3 border-0 rounded rounded-r-none text-2xl text-gray-500"
                    >
                        <ion-icon name="mail-outline"></ion-icon>
                    </span>
                </div>
                <input
                type="text"
                class="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border-0 border-grey-light rounded rounded-l-none self-center relative  font-roboto text-md outline-none"
                placeholder="Email / Username"
                />
            </div>

            <div class="flex flex-wrap items-stretch w-full relative bg-white text-black items-center rounded">
                <div class="flex -mr-px justify-center p-3">
                    <span
                        class="flex items-center leading-normal bg-white px-3 border-0 rounded rounded-r-none text-2xl text-gray-500"
                    >
                        <ion-icon name="lock-closed-outline"></ion-icon>
                    </span>
                </div>
                <input
                type="text"
                class="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border-0 border-grey-light rounded rounded-l-none self-center relative  font-roboto text-md outline-none"
                placeholder="Password"
                />
            </div>

            <div class="w-full text-right">
            <router-link to="/forget">Forgot password ?</router-link>
            </div>
            <router-link to="/">
                <button class="w-1/2 mt-6 py-2 text-white rounded font-bold">Sign In</button>
            </router-link>
        </div>
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
