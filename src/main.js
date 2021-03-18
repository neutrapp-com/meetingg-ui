// js
import { createApp, reactive } from 'vue'
import App from './App.vue'
import router from './router'
import store from './state/store'
// import axios from 'axios'
import VueSocketIOExt from 'vue-socket.io-extended';
import { io } from 'socket.io-client';


const socket = io(process.env.API_VUE_SOCKET_BASE_URL || 'http://localhost:9090/', {
    query: { jwt: JSON.parse(localStorage.getItem('auth.session') || '{ "token" : "-"}').token },
    transports: ["websocket"],
    reconnection: true,
    reconnectionDelay: 10000,
    reconnectionDelayMax: 5000,
    reconnectionAttempts: 1,
    autoConnect: false
});

// css
import "./assets/css/index.scss"
import 'vue-ionicons/ionicons.scss';

const app = createApp(App)

app.use(store)
    .use(router)
    .use(VueSocketIOExt, socket);

app.mount('#app')