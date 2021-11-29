require('@popperjs/core')
require('bootstrap')
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

require('./icons')
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


createApp(App)
    .use(router)
    .component("icon", FontAwesomeIcon)
    .mount('#app')
