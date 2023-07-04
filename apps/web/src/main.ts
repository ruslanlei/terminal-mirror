import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { OutsideClickDirective } from '@terminal/uikit/directives/outsideClick';

import App from '@/App.vue';
import { router } from '@/router';
import { i18n } from '@/i18n';
import '@/api';

import { vMaska } from 'maska';

const pinia = createPinia();

createApp(App)
  .use(pinia)
  .use(router)
  .use(i18n)
  .directive('click-outside', OutsideClickDirective)
  .directive('mask', vMaska)
  .mount('#app');
