// base
require('@popperjs/core')
require('bootstrap')
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// axios http client
const axios = require('axios').default;

require('./icons')
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

createApp(App)
    .use(router)
    .component("icon", FontAwesomeIcon)
    .mount('#app')
