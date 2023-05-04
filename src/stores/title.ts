import { computed, watch } from 'vue';
import { defineStore } from 'pinia';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';

const collectTitle = (
  projectName: string,
  additionalText?: string,
) => (
  additionalText
    ? `${projectName} - ${additionalText}`
    : projectName
);

export const useTitleStore = defineStore('title', () => {
  const { t } = useI18n();
  const route = useRoute();

  const projectName = computed(() => (
    route.meta.pageName as string || String(import.meta.env.VITE_APP_PROJECT_NAME)
  ));

  const additionalText = computed(() => {
    const keyOrString: string = route.meta.pageTitle as string || '';

    return t(keyOrString);
  });

  const pageTitle = computed(() => collectTitle(
    projectName.value,
    additionalText.value,
  ));

  watch(pageTitle, (title) => {
    document.title = title;
  }, { immediate: true });
});
