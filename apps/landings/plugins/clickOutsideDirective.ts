import { OutsideClickDirective } from '@terminal/uikit/directives/outsideClick';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('click-outside', OutsideClickDirective);
});
