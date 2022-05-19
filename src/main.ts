import { createApp } from 'vue';
import { VueQueryPlugin } from 'vue-query';
import App from './App.vue';
import router from './router';

import './styles/main.scss';

createApp(App)
  .use(router)
  .use(VueQueryPlugin)
  .mount('#app');
