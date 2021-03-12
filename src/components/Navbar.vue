<template> 
    <nav class="navbar h-24 w-full fixed flex items-center justify-between noselect z-50"> 
        <div >
            <p class="font-bold ml-5 text-white text-xl">{{title}}</p>
        </div>
        <div>
            <p class="font-bold  text-white text-xl">profile icon</p>
        </div>
    </nav>
</template>

<script>
export default {
    components: {

    },
    props: {
        title: {
            default: 'Home',
            type: String
        },
    }
}
</script>

<style lang="scss" scoped>
.navbar {
    // background-color: #1C1F2E;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);

    width: calc(100vw - 6rem);
}
</style>
