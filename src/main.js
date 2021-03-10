import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './state/store'
import "./assets/css/index.scss"
import 'vue-ionicons/ionicons.scss';

createApp(App)
    .use(store)
    .use(router)
    .mount('#app')
