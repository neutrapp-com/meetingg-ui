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
                id="email"
                required
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
                id="password"
                required
                class="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border-0 border-grey-light rounded rounded-l-none self-center relative  font-roboto text-md outline-none"
                placeholder="Password"
                />
            </div>

            <div class="w-full text-right">
            <router-link to="/forget">Forgot password ?</router-link>
            </div>

            <button @click="tryToLogIn" class="w-2/3 mt-6 py-2  mx-auto text-white rounded font-bold">Sign In</button>
        </div>
    </div>
</template>

<script>

import authMethods from '../../../../state/helpers'


export default {
    components:{
    },
    data() {
        return {
        email: null,
        password: null,
        authError: null,
        tryingToLogIn: false,
        isAuthError: false,
        }
    },
    methods: {
        ...authMethods,
        // Try to log the user in with the email
        // and password they provided.
        tryToLogIn() {
            this.tryingToLogIn = true
            // Reset the authError if it existed.
            this.authError = null
            this.email = document.getElementById("email").value;
            this.password = document.getElementById("password").value;

            return this.logIn({
                email: this.email,
                password: this.password,
            })
                .then((token) => {
                    this.tryingToLogIn = false
                    this.isAuthError = false
                    // Redirect to the originally requested page, or to the home page
                    this.$router.push(
                        this.$route.query.redirectFrom || { name: 'Dashboard' }
                    )
                })
                .catch((error) => {
                    this.tryingToLogIn = false
                    this.authError = error.response ? error.response.data.message : ''
                    this.isAuthError = true
                })
            },
        }
    }
</script>

<style scoped>
button{
    background-color: #242736;
    border: 2px solid #2F3240;
}
</style>
