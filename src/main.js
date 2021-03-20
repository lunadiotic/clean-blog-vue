import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

/* Bootstrap CSS */
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

/* jQuery */
import jQuery from 'jquery'
global.$ = jQuery

/* Fontawesome */
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

/* Clean Blog*/
import '@/assets/css/app.css'
import '@/assets/js/app.js'

createApp(App).use(store).use(router).mount('#app')
