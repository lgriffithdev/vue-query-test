import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { VueQueryPlugin } from 'vue-query';

import './styles/main.scss';

createApp(App)
  .use(router)
  .use(VueQueryPlugin)
  .mount('#app');
