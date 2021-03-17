<template>
    <img class="mx-auto" v-if="getTheme==='light'" src="@/assets/images/logo_black.png" width="200">
    <img class="mx-auto" v-else src="@/assets/images/logo.png" width="200">
    <h1 class="text-xl font-bold pb-3">You want to join us ?</h1>
    <p>We're just going to need some information...</p>

    <alert v-if="regError" :title="Error" :message="regError" type="error" />
    <form @submit.prevent="tryToRegister" >

        <div class="form-group">
            <div class="form-icon">
                <span class="form-input-icon">
                    <ion-icon name="person-outline"></ion-icon>
                </span>
            </div>
            <input type="text" v-model="firstname" id="firstname" required class="form-input" placeholder="Jhone" />
            <input type="text" v-model="lastname" id="lastname" required class="form-input right-input" placeholder="Doe" />
        </div>
        <div class="form-group">
            <div class="form-icon">
                <span class="form-input-icon">
                    <ion-icon name="mail-outline"></ion-icon>
                </span>
            </div>
            <input type="email" v-model="email" id="email" required class="form-input" placeholder="email@example.com" />
        </div>
        <div class="form-group">
            <div class="form-icon">
                <span class="form-input-icon">
                    <ion-icon name="lock-closed-outline"></ion-icon>
                </span>
            </div>
            <input type="password" id="cpassword" v-model="password" required class="form-input" placeholder="Password" />
            <div class="form-icon">
                <span class="form-input-icon">
                    <ion-icon name="repeat-outline"></ion-icon>
                </span>
            </div>
            <input type="password" id="cpassword" v-model="cpassword" required class="form-input" placeholder="Confirm Password" />
        </div>

        <div class="flex space-x-2 items-center">
            <input type="checkbox" v-model="agree" name="agree" id="agree">
            <label for="agree">
                I Agre the terms &amp; conditions
            </label>
        </div>

        <div class="w-full">
            <router-link to="/auth/login">Already have an acount ?</router-link>
        </div>

        <button type="submit" class="btn-auth">Create Account</button>
    </form>
</template>

<script>
import {
    authMethods,
    themeComputed,
} from '@/state/helpers'
import Alert from '@/components/shared/Alert.vue'
export default {
    components: {
        Alert
    },
    data() {
        return {
            firstname: null,
            lastname: null,
            email: null,
            password: null,
            cpassword: null,
            agree: false,
            regError: null,
        }
    },
    methods: {
        ...authMethods,
        // Try to register the user in with the email, firstname
        // and password they provided.
        tryToRegister() {
            // Reset the regError if it existed.
            this.regError = null
            return this.register({
                    firstname: this.firstname,
                    lastname: this.lastname,
                    email: this.email,
                    password: this.password,
                    cpassword: this.cpassword,
                    agree: !!this.agree,
                })
                .then((token) => {
                    // Redirect to the originally requested page, or to the confirm-account page
                    this.$router.push({
                        name: 'Login'
                    })
                })
                .catch((error) => {
                    this.regError = error.response ? error.response.data.message : ''
                })
        },
    },
    computed:{
        ...themeComputed,
    }
}
</script>

<style lang="scss" scoped>
.right-input {
    border-right: solid 1px rgba(25, 25, 25, 0.1);
}
</style>
