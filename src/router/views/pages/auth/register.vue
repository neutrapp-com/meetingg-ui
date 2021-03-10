<template>
   
    <div class="h-screen text-white flex items-center justify-center">
        <div class="w-1/4 text-center grid space-y-6">
            <img class="mx-auto" src="../../../../assets/images/logo.png" width="200">
            <p class="text-xl font-bold pb-3">You want to join us ?</p>
            <p>We're just going to need some information...</p>

            <div class="flex flex-wrap items-stretch w-full relative bg-white text-black items-center rounded">
                <div class="flex -mr-px justify-center p-3">
                    <span
                        class="flex items-center leading-normal bg-white px-3 border-0 rounded rounded-r-none text-2xl text-gray-500"
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
                placeholder="Email"
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
                id="email"
                required
                class="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border-0 border-grey-light rounded rounded-l-none self-center relative  font-roboto text-md outline-none"
                placeholder="Password"
                />
            </div>
            <div class="flex flex-wrap items-stretch w-full relative bg-white text-black items-center rounded">
                <div class="flex -mr-px justify-center p-3">
                    <span
                        class="flex items-center leading-normal bg-white px-3 border-0 rounded rounded-r-none text-2xl text-gray-500"
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
            <router-link to="/login">Already have an acount ?</router-link>
            </div>

            <button @click="tryToLogIn" class="w-2/3 mt-6 py-2  mx-auto text-white rounded font-bold">Create Account</button>
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

<style scoped>
button{
    background-color: #242736;
    border: 2px solid #2F3240;
}
</style>
