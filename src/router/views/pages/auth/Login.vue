<template>
    <img class="mx-auto" v-if="getTheme==='light'" src="@/assets/images/logo_black.png" width="200">
    <img class="mx-auto" v-else src="@/assets/images/logo.png" width="200">
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


import {
    themeComputed,
} from '@/state/helpers';

export default {
    components: {Alert},
    data() {
        return {
            email: null,
            password: null,
            authError: null,
            tryingToLogIn: false,
        }
    },
    methods: {
        ...authMethods,
        // Try to log the user in with the email
        // and password they provided.
        tryToLogIn() {
            // Reset the authError if it existed.
            this.authError = null


            return this.logIn({
                    email: this.email,
                    password: this.password,
                })
                .then((token) => {
                    // Redirect to the originally requested page, or to the home page
                    this.$router.push(
                        this.$route.query.redirectFrom || {
                            path: '/'
                        }
                    )
                })
                .catch((error) => {
                    this.authError = error.response ? error.response.data.message : ''

                    if (!error.response){
                        this.$store.dispatch('toasts/addToast', {
                            title: 'Internal Server',
                            content: 'Please check if your net is working ...',
                            icon: 'globe',
                            type: 'error',
                            timeout: 5000
                        })
                    }
                })
        }, 
        getLogo(){
            return  '@/assets/images/logo.png'
        }
    },
    computed:{
        ...themeComputed
    }
}
</script>


<style lang="scss" scoped>
    .widgetmeeting {
        @apply w-full p-11 rounded-2xl flex text-gray-600 bg-dark transition text-dark;

        background-color:#E1E1E1;


        .dark & {
            @apply text-light bg-light bg-opacity-5;
            background-color:#212534;
        }


        ion-icon {
            fill: white;
        }

        .datetime {
            @apply  mt-2;
        }

        .members{
            @apply flex mt-4;

            .avatar {
                @apply mr-2;
            }
        }

    }
</style>