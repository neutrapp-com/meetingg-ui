<template>
    <div class="h-screen text-dark flex items-center justify-center">
        <div class="w-1/4 text-center grid space-y-6">
            <slot />
        </div>
    </div>
</template>

<style lang="scss" >
.form-group{
    @apply flex flex-wrap items-stretch w-full relative bg-light text-black items-center rounded;
}
.btn-auth{
    @apply w-2/3 mt-6 py-2  mx-auto bg-dark rounded font-bold text-light;

    .dark & {
        @apply bg-light text-dark;
    }
}
</style>