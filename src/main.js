import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { MotionPlugin } from '@vueuse/motion'
import TopMenu from '@/components/TopMenu.vue';

const app = createApp(App)

app.use(MotionPlugin)
app.use(TopMenu)
app.use(router)

app.mount('#app')
