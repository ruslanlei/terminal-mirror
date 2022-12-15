import { computed, watch } from 'vue';
import { defineStore } from 'pinia';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';

export const useTitleStore = defineStore('title', () => {
  const { t } = useI18n();
  const route = useRoute();

  const projectName = String(import.meta.env.VITE_APP_PROJECT_NAME);
  const additionalText = computed(() => t(typeof route.meta.pageTitle === 'string'
    ? route.meta.pageTitle
    : ''));

  const pageTitle = computed(() => (additionalText.value
    ? `${projectName} - ${additionalText.value}`
    : projectName));

  watch(pageTitle, (title) => {
    document.title = title;
  }, { immediate: true });
});
