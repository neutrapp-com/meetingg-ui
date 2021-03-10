<template>
    <div class="text-white">
        <div class="title font-bold text-xl mb-4">{{title}}</div>
        <div class="content">        
            <slot/>
        </div>
    </div>
</template>

<script>
    export default {
        props:{
            title:{
                type:String,
            }
        }
    }
</script>
