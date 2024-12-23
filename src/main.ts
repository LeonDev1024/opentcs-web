import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css'
const app = createApp(App)
app.use(router)
app.use(Antd)
app.use(createPinia())
app.mount('#app')