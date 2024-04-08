import { registerPlugins } from '@/plugins'
import App from './App.vue'
import { createApp } from 'vue'
import router from '@/router/index.ts'
import { createPinia } from 'pinia'
import '@/mock/index.ts'
import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'
const pinia = createPinia()
const app = createApp(App)
app.use(pinia)
app.use(ElementPlus)
registerPlugins(app)
app.use(router)
app.mount('#app')
