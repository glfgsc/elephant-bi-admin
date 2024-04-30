import { registerPlugins } from '@/plugins'
import App from './App.vue'
import { createApp } from 'vue'
import router from '@/router/index'
import { createPinia } from 'pinia'
import '@/mock/index'
import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'
import ContextMenuDirective from '@/utils/directive/contextMenu';
const pinia = createPinia()
const app = createApp(App)
app.use(pinia)
app.use(ElementPlus)
app.directive('context-menu',ContextMenuDirective)
registerPlugins(app)
app.use(router)
app.mount('#app')
