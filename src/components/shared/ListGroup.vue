<template>
    <div class="group divide-y divide-light divide-opacity-5">
        <div class="title flex w-full justify-between items-center font-bold text-xl mb-4">
            {{title}} 
            <btn @click="isOpen = !isOpen">
               <ion-icon class="text-light text-xl" :name="isOpen ? 'folder-open-outline' : 'folder-outline'"></ion-icon>
            </btn>
        </div>
        <div v-if="isOpen" class="flex w-full mb-6 pt-6">
            <div class="flex flex-row h-12 w-full bg-light mr-4 bg-opacity-5 rounded-lg p-1 noselect">
                <input v-model="groupName" type="text" id="search" class="flex-shrink pl-3 flex-grow bg-light bg-opacity-0 text-light flex-auto leading-normal w-px flex-1 border-0 rounded rounded-l-none self-center relative  font-roboto text-md outline-none" placeholder="Group Name" />
            </div>
            <btn @click="_addGroup" class="w-16 space-x-4">
                <ion-icon class="text-light text-xl" name="add-circle-outline"></ion-icon>
            </btn>
        </div>
        <div class="content pt-6">        
            <slot/>
        </div>
    </div>
</template>

<script>
import Btn from '@/components/shared/Btn.vue'
import {
    contactComputed,
    contactMethods,

} from '@/state/helpers';

    export default {
        components:{
            Btn
        },
        props:{
            title:{
                type:String,
            }
        },
        data(){
            return{
                isOpen: false,
                groupName: null
            }
        },
        methods:{
            ...contactMethods,
            _addGroup(){
            return this.addGroup({
                    title: this.groupName,
                })
                .then((response) => {
                    this.fetchContacts()
                })
                .catch((error) => {
                })
            },
        },
        computed:{
            ...contactComputed
        }
    }
</script>

<style lang="scss" scoped>
.group{
    @apply text-dark;

    .dark & {
        @apply text-light;
    }
}
</style>