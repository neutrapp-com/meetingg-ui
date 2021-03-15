<template>
    <img class="mx-auto" src="@/assets/images/logo.png" width="200">
    <h1 class="text-xl font-bold pb-3">Sign In</h1>
    <router-link to="/auth/register">You don't have an account ?</router-link>

    <div class="form-group">
        <div class="flex -mr-px justify-center p-3">
            <span class="flex items-center leading-normal bg-light px-3 border-0 rounded rounded-r-none text-2xl text-gray-500">
                <ion-icon name="mail-outline"></ion-icon>
            </span>
        </div>
        <input type="text" v-model="email" id="email" required class="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border-0 border-grey-light rounded rounded-l-none self-center relative  font-roboto text-md outline-none" placeholder="Email / Username" />
    </div>

    <div class="form-group">
        <div class="flex -mr-px justify-center p-3">
            <span class="flex items-center leading-normal bg-light px-3 border-0 rounded rounded-r-none text-2xl text-gray-500">
                <ion-icon name="lock-closed-outline"></ion-icon>
            </span>
        </div>
        <input type="text" v-model="password" id="password" required class="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border-0 border-grey-light rounded rounded-l-none self-center relative  font-roboto text-md outline-none" placeholder="Password" />
    </div>

    <div class="w-full text-right">
        <router-link to="/auth/forget">Forgot password ?</router-link>
    </div>

    <button @click="tryToLogIn" class="btn-auth">Sign In</button>
</template>

<script>
import { authMethods } from '@/state/helpers'

export default {
    components: {},
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


            return this.logIn({
                    email: this.email,
                    password: this.password,
                })
                .then((token) => {
                    this.tryingToLogIn = false
                    this.isAuthError = false
                    // Redirect to the originally requested page, or to the home page
                    this.$router.push(
                        this.$route.query.redirectFrom || {
                            name: 'Dashboard'
                        }
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