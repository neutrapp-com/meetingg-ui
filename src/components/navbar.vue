<template>
  <div class="h-20 fixed w-full flex items-center container">
        <p class="font-bold ml-5 text-white text-xl">{{title}}</p>
  </div>
</template>

<script>

export default {
    name: 'Navbar',
    components:{
      
    },
    props:{
        title : {
            default : 'Home',
            type: String
        },
    }
}
</script>

<style scoped>
.container{
  background-color: #1C1F2E;
  border-bottom: 0.5px solid rgba(255, 255, 255, 0.1)
}
</style>