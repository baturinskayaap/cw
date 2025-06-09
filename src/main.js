import { createApp } from 'vue'
import { create, NConfigProvider } from 'naive-ui'
import { createPinia } from 'pinia'
import router from './router'
import './assets/main.css'
import App from './App.vue'

// Создаем экземпляр Naive UI
const naive = create({
  components: [NConfigProvider],
})

// Инициализируем Vue приложение
const app = createApp(App)
const pinia = createPinia()

// Подключаем Naive UI
app.use(naive)
app.use(pinia)
app.use(router)

// Монтируем приложение
app.mount('#app')
