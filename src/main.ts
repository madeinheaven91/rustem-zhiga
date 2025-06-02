import { createApp } from 'vue'
import '@/app/style.css'
import router from '@/app/router.ts'
import App from '@/app/App.vue'

const app = createApp(App)
app.use(router)
app.mount('#app')
