<template>
    <nav class="navbar h-24 w-full fixed flex items-center justify-between noselect z-50">
        <div class="meta">
            <h1>{{title}}</h1>
        </div>
        <div class="flex items-center utils">
            <div class="mode" @click="toggleTheme()">
                <ion-icon v-if="isNightMode" name="sunny-outline"></ion-icon>
                <ion-icon v-else name="moon-outline"></ion-icon>
            </div>
            
            <avatar @click="showMenu = !showMenu" class="profile cursor-pointer" size="w-10 h-10 rounded-2xl" />
            <div v-if="showMenu" class="dropmenu origin-top-right  absolute right-10 mt-2 w-56 rounded-md shadow-lg  focus:outline-none" >
                <div class="py-1 z-50" role="none">
                    <a class="menuitem"><ion-icon name="cog"></ion-icon> Settings</a>
                    <a class="menuitem"><ion-icon name="call"></ion-icon> Support</a>
                    <a class="menuitem"><ion-icon name="log-out"></ion-icon> Logout</a>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Avatar from './shared/Avatar.vue'
export default {
    components: {
        Avatar
    },
    props: {
        title: {
            default: 'Home',
            type: String
        },
    },
    data(){
        return {
            showMenu : false
        }
    },
    computed:{
        ...mapGetters('theme',['isNightMode']),
    },
    methods:{
        ...mapActions('theme',['toggleTheme'])
    }
}
</script>

<style lang="scss" scoped>
.navbar {
    @apply px-10 text-dark;
    // background-color: #1C1F2E;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    width: calc(100vw - 6rem);

    .dark & {
        @apply text-light;
    }
    
    .meta{
        @apply font-bold text-xl;
    }

    .dropmenu {
        @apply bg-white ring-1 ring-dark ring-opacity-5;

        .dark & {
            @apply bg-dark text-light ring-white ring-opacity-5;
        }

        .menuitem{
            @apply flex  items-center px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-900 cursor-pointer ;

            ion-icon{
                @apply text-lg mr-2; 
            }
        }
    }

    .mode{
        @apply flex items-center text-2xl my-2 mr-4 p-4 cursor-pointer;

        .dark & {
            @apply text-light;
        }
    }

}
</style>
