import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'

// Axios
// import * as Vue from 'vue' // in Vue 3
import axios from 'axios'
import VueAxios from 'vue-axios'

createApp(App).use(Quasar, quasarUserOptions).use(store).use(router).use(VueAxios, axios).mount('#app')
