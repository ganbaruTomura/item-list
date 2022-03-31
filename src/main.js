import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index.js'
import './styles/app.css';

// const app = createApp(App);
// app.use(router);
// app.mount('#app')
createApp(App).use(router).mount('#app')