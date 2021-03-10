<template>
    <div class="widget">
        <h2>12:02</h2>
        <p>{{ updateDateWidget }}</p>
    </div>
</template>

<script>
export default {
    name : 'WidgetDateTime',
    computed : {
        updateDateWidget(){
            return (new Date()).toString();
        }
    }
}
</script>

<style scoped lang="scss">
.widget {
    @apply w-full  p-10 pt-16 rounded-2xl text-white;

    h2 {
        @apply text-6xl font-bold p-0 m-0 mb-2 mt-5;
    }

    p {
        @apply text-2xl p-0 m-0 mt-2 font-medium break-all;
        line-break: break-all;
    }

    background-color: #446373;
    background-image: url('../../assets/images/widgetexample.png');
    background-size: auto 100%;
    background-position: right;
    background-repeat: no-repeat;
}
</style>