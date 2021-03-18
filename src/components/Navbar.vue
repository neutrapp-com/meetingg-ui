<template>
<!-- <div v-if="showNotif || showMenu" @click="showNotif = showMenu = false" class="modal-overlay absolute z-20 w-full h-full bg-gray-900 opacity-50"></div> -->
    <nav class="navbar noselect">
        <div class="meta">
            <h1>{{title}}</h1>
        </div>
        <div class="flex items-center">
            <div class="btn-navbar center" @click="toggleTheme()">
                <ion-icon :name="isNightMode ? 'sunny-outline' : 'moon-outline'"></ion-icon>
            </div>

            <div class="btn-navbar" @focusout="showNotif = false" tabindex="10">
                <div class="center"  @click="showNotif = !showNotif" >
                    <ion-icon class="text-xl" name="notifications-outline"></ion-icon>
                </div>
                <div v-if="showNotif" class="dropmenu origin-top-right  absolute right-24 mt-4 w-80 rounded-md shadow-lg  focus:outline-none">
                    <div class="py-1 z-50" role="none">
                        <a v-if="!getNotifications.length" class="menuitem">
                            <io-icon name="check"></io-icon> The are no notification !
                        </a>
                        <a v-else v-for="not in getNotifications" :key="not.id" class="menuitem">
                            <ion-icon name="pin"></ion-icon> {{ not.title }}
                        </a>
                    </div>
                </div>
            </div>

            <div class="btn-navbar" @focusout="showMenu = false" tabindex="9">
                <div class="center"  @click="showMenu = !showMenu" >
                    <avatar :image="getAvatar" class="profile cursor-pointer" size="w-10 h-10 rounded-2xl" />
                </div>
                <div v-if="showMenu" class="dropmenu origin-top-right  absolute right-10 mt-4 w-56 rounded-md shadow-lg  focus:outline-none ">
                    <div class="py-1 z-50" role="none">
                        <a class="menuitem">
                            <ion-icon name="cog"></ion-icon> Settings
                        </a>
                        <a class="menuitem">
                            <ion-icon name="call"></ion-icon> Support
                        </a>
                        <a @click="$router.push({ path: '/auth/logout' })" class="menuitem">
                            <ion-icon name="log-out"></ion-icon> Logout
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
import {
    mapActions,
    mapGetters
} from 'vuex'
import { profileComputed,notificationComputed,notificationMethods } from '@/state/helpers'

import Avatar from './shared/Avatar.vue';

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
    data() {
        return {
            showMenu: false,
            showNotif: false,
            updateInterval: 50000
        }
    },
    computed: {
        ...profileComputed,
        ...notificationComputed,
        ...mapGetters('theme', ['isNightMode']),
    },
    methods: {
        ...notificationMethods,
        ...mapActions('theme', ['toggleTheme']),
        updateNotification(){
            this.fetchNotification();
            setTimeout(()=> {this.fetchNotification()}, this.updateInterval || 1000);
        }
    },
    created(){
        this.updateNotification();
    }
}
</script>

<style lang="scss" scoped>
.navbar {
    width: calc(100vw - 6rem);
    
    @apply h-24 fixed flex items-center justify-between z-50 px-10 text-dark border-b border-dark;


    .dark & {
        @apply text-light border-b border-light;
    }

    .meta {
        @apply font-bold text-xl;
    }

    .dropmenu {
        @apply bg-light ring-1 ring-dark ring-opacity-5;

        .dark & {
            @apply bg-dark text-light ring-white ring-opacity-5;
        }

        .menuitem {
            @apply flex items-center px-4 py-3 text-sm hover:bg-gray-100 hover:text-gray-900 cursor-pointer;

            ion-icon {
                @apply text-lg mr-2;
            }
        }
    }

    .btn-navbar {
        @apply text-2xl my-2 ml-2 cursor-pointer outline-none;

        &.center, .center{
            @apply flex items-center p-4;
        }
        .dark & {
            @apply text-light;
        }
    }

}
</style>
