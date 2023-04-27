import { createApp, markRaw } from 'vue'
import ElementPlus from "element-plus";
import "element-plus/theme-chalk/index.css";
import App from './App.vue'

// Router
import router from "./router/router"
// Store
import { createPinia } from "pinia"
const pinia = createPinia()
pinia.use(({ store }) => {
    store.router = markRaw(router)
})


createApp(App)
    .use(router)
    .use(ElementPlus)
    .mount('#app')
