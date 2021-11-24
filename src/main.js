require('@popperjs/core')
require('bootstrap')
require('./icons')
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

createApp(App).use(router).component('icon', FontAwesomeIcon).mount('#app')
