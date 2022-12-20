import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from '@/App.vue';
import { router } from '@/router';
import { i18n } from '@/i18n';
import '@/api';

import { OutsideClickDirective } from '@/directives/outsideClick';
import { vMaska } from 'maska';
import FloatingVue from 'floating-vue';
import 'floating-vue/dist/style.css';

const pinia = createPinia();

createApp(App)
  .use(pinia)
  .use(router)
  .use(i18n)
  .use(FloatingVue)
  .directive('click-outside', OutsideClickDirective)
  .directive('mask', vMaska)
  .mount('#app');
