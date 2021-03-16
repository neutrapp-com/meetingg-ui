<template>
    <img class="mx-auto" src="@/assets/images/logo.png" width="200">
    <h1 class="text-xl font-bold pb-3">Sign In</h1>
    <router-link to="/auth/register">You don't have an account ?</router-link>

    <alert v-if="authError" :title="Error" :message="authError" type="error" />
    <form  @submit.prevent="tryToLogIn" >
        <div class="form-group">
            <div class="form-icon">
                <span class="form-input-icon">
                    <ion-icon name="mail-outline"></ion-icon>
                </span>
            </div>
            <input type="text" v-model="email" id="email" required class="form-input" placeholder="Email / Username" />
        </div>

        <div class="form-group">
            <div class="form-icon">
                <span class="form-input-icon">
                    <ion-icon name="lock-closed-outline"></ion-icon>
                </span>
            </div>
            <input type="password" v-model="password" id="password" required class="form-input" placeholder="Password" />
        </div>

        <div class="w-full text-right">
            <router-link to="/auth/forget">Forgot password ?</router-link>
        </div>

        <button type="submit" class="btn-auth">Sign In</button>
    </form>
</template>

<script>
import { authMethods } from '@/state/helpers'
import Alert from '@/components/shared/Alert.vue'

export default {
    components: {Alert},
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
                            path: '/'
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