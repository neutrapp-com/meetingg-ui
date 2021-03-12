<template>
    <div class="flex flex-col">
      <img src="@/assets/images/not-found.png" alt class="img-fluid mx-auto" width="300"/>
      

      <div class="text-dark text-center">
        <p class="mt-3">We couldn’t connect the dots</p>
        <p class="mt-3">Error 404</p>
        <p class="text-muted mb-5">
        This page was not found.
        <br />You may have mistyped the address or the page may have moved.
        </p>
        <router-link to="/" class=""
        > <button class="px-5 mt-6 py-2  mx-auto bg-dark text-light rounded">Take me back to Home</button></router-link
        >
      </div>
    </div>
</template>

<script>

export default {
    }
</script>
