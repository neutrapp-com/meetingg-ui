<template>
    <div class="switch noselect">
        <button v-for="item in getItems" :key="item.name" @click="selectSwitch(item)" :class="selected.name === item.name ? 'active' : ''" class="item">
            {{ item.title }}
        </button>
    </div>
</template>

<script>
export default {
    props : {
        items : {
            type: Array,
            default : () => [
                {
                    name : 'contact',
                    title: 'Contact',
                    selected : true
                },
                {
                    name : 'channels',
                    title: 'Channels'
                }
            ]
        }
    },
    data(){
        return {
            selected : {
            }
        }
    },
    computed : {
        getItems(){
            return this.items;
        }
    },
    methods : {
        selectSwitch(obj){
            this.selected = obj;
        }
    },
    created(){
        this.selected = this.items.find(x=> x.selected) || this.selected;
    },
    watch: {
        selected : function (selected) {
            this.$emit('switch' , selected);
            return selected;
        }
    }
}
</script>

<style lang="scss" scoped>
.switch{
    @apply flex flex-row h-12 bg-light bg-opacity-5 rounded-lg p-1;

    .item{
        @apply focus:outline-none text-gray-400 w-full;
    }

    .active{
        @apply text-light bg-light bg-opacity-10 rounded-lg border border-white border-opacity-5;
    }
}
</style>