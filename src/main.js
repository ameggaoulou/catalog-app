import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

createApp(App).use(router).mount('#app');