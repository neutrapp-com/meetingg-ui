<template>
    <div class="auth">
        <form class="auth-content">
            <slot />
        </form>
    </div>
</template>

<style lang="scss">
.auth{
    @apply h-screen text-dark flex items-center justify-center;

    .auth-content{
        @apply w-3/4 md:w-2/4 xl:w-2/5 2xl:w-1/4 text-center grid space-y-6;
    }
    form{
        @apply space-y-6;
    }
    .form-group{
        @apply flex flex-wrap items-stretch w-full relative bg-light text-black items-center rounded;
    }
    .form-input{
        @apply flex-shrink flex-grow py-3 flex-auto leading-normal w-px flex-1 border-0  rounded rounded-l-none self-center relative outline-none;
    }
    .form-input-icon{
        @apply flex items-center leading-normal bg-light px-2 border-0 rounded rounded-r-none text-2xl text-gray-500;
    }
    .form-icon{
        @apply flex -mr-px justify-center p-3;
    }
}
.btn-auth{
    @apply w-2/3 mt-6 py-3  mx-auto bg-dark rounded font-bold text-light;

    .dark & {
        @apply bg-light text-dark;
    }
}
</style>