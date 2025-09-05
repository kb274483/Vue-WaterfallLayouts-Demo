import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueResponsiveWaterfall from 'vue-responsive-waterfall'
import 'vue-responsive-waterfall/dist/vue-responsive-waterfall.css'


const app = createApp(App)

app.use(router)
app.use(VueResponsiveWaterfall)
app.mount('#app')
