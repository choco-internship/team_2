
import { createApp } from 'vue'
import App from './App.vue'
import router from './routes/routes'
import store from './store'
// import "./assets/styles/styles.scss"


createApp(App).use(router).use(store).mount('#app')
