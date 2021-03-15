<template>
    <img class="mx-auto" src="@/assets/images/logo.png" width="200">
    <h1 class="text-xl font-bold pb-3">You want to join us ?</h1>
    <p>We're just going to need some information...</p>

    <div class="form-group">
        <div class="flex -mr-px justify-center p-3">
            <span
                class="flex items-center leading-normal bg-light px-3 border-0 rounded rounded-r-none text-2xl text-gray-500"
            >
                <ion-icon name="person-outline"></ion-icon>
            </span>
        </div>
        <input
        type="text"
        id="email"
        required
        class="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border-0 border-grey-light rounded rounded-l-none self-center relative  font-roboto text-md outline-none"
        placeholder="Username"
        />
    </div>
    <div class="form-group">
        <div class="flex -mr-px justify-center p-3">
            <span
                class="flex items-center leading-normal bg-light px-3 border-0 rounded rounded-r-none text-2xl text-gray-500"
            >
                <ion-icon name="mail-outline"></ion-icon>
            </span>
        </div>
        <input
        type="text"
        id="email"
        required
        class="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border-0 border-grey-light rounded rounded-l-none self-center relative  font-roboto text-md outline-none"
        placeholder="Email"
        />
    </div>
    <div class="form-group">
        <div class="flex -mr-px justify-center p-3">
            <span
                class="flex items-center leading-normal bg-light px-3 border-0 rounded rounded-r-none text-2xl text-gray-500"
            >
                <ion-icon name="lock-closed-outline"></ion-icon>
            </span>
        </div>
        <input
        type="text"
        id="email"
        required
        class="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border-0 border-grey-light rounded rounded-l-none self-center relative  font-roboto text-md outline-none"
        placeholder="Password"
        />
    </div>
    <div class="form-group">
        <div class="flex -mr-px justify-center p-3">
            <span
                class="flex items-center leading-normal bg-light px-3 border-0 rounded rounded-r-none text-2xl text-gray-500"
            >
                <ion-icon name="repeat-outline"></ion-icon>
            </span>
        </div>
        <input
        type="text"
        id="password"
        required
        class="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border-0 border-grey-light rounded rounded-l-none self-center relative  font-roboto text-md outline-none"
        placeholder="Confirm Password"
        />
    </div>

    <div class="w-full text-right">
        <router-link to="/auth/login">Already have an acount ?</router-link>
    </div>

    <button @click="tryToLogIn" class="btn-auth">Create Account</button>
</template>

<script>

import { authMethods } from '@/state/helpers'


export default {
    components:{
    },
    data() {
        return {
        agree: null,
        username: null,
        email: null,
        password: null,
        cpassword: null,
        regError: null,
        tryingToRegister: false,
        isRegisterError: false,
        }
    },
    methods: {
    ...authMethods,
    // Try to register the user in with the email, firstname
    // and password they provided.
    tryToRegisterIn() {
      this.tryingToRegister = true
      // Reset the regError if it existed.
      this.regError = null
      return this.register({
        username: this.username,
        email: this.email,
        password: this.password,
        cpassword: this.cpassword,
        agree: !!this.agree,
      })
        .then((token) => {
          this.tryingToRegister = false
          this.isRegisterError = false
          // Redirect to the originally requested page, or to the confirm-account page
          this.$router.push( 
            this.$route.query.redirectFrom || { name: 'confirm-account' , params : { email : this.email } }
          )
        })
        .catch((error) => {
          this.tryingToRegister = false
          this.regError = error.response ? error.response.data.message : ''
          this.isRegisterError = true
        })
    },
  }
}
</script>