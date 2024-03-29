import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import { createPinia } from 'pinia'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faMoon, faSun, faArrowLeft, faCheck, faSpinner, faArrowRightLong, faXmark, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

library.add(faMoon, faSun, faArrowLeft, faCheck, faSpinner, faArrowRightLong, faXmark, faPlus, faMinus)

const app = createApp(App)
const pinia = createPinia()

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.use(pinia)
app.mount('#app')
