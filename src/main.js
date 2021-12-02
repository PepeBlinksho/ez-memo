// BASE
require('@popperjs/core')
require('bootstrap')
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ApiRouter from "@/components/System/ApiRouter";
// ICON
require('./icons')
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// AXIOS HTTP
window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

createApp(App)
    .use(router)
    .mixin(ApiRouter)
    .component("icon", FontAwesomeIcon)
    .mount('#app')
