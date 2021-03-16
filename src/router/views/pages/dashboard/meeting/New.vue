<template>
<div class="flex md:flex-shrink-0">
 <alert v-if="authError" :title="Error" :message="authError" type="error" />

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

    <button class="btn-auth">Create new Meeting</button>
</div>
</template>

<script>

export default {
    components: {
    },
}
</script>

