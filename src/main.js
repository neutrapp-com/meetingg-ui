// js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './state/store'
// import axios from 'axios'

// css
import "./assets/css/index.scss"
import 'vue-ionicons/ionicons.scss';

const app = createApp(App)
    .use(store)
    .use(router);

// if (process.env.VUE_APP_API_BASE_URL !== undefined) {
//     axios.defaults.baseURL = process.env.VUE_APP_API_BASE_URL;
// }
// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';


app.mount('#app')