import { createApp } from 'vue'
import 'bootstrap'
import App from './App.vue'
import router from './router'

import './assets/scss/main.scss'
import './assets/css/style.css'

const app = createApp(App)

app.use(router)

app.mount('#body')
