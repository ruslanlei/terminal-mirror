import {
  ref,
  watch,
  onMounted,
} from 'vue';
import { useRoute } from 'vue-router';
import { useSessionStore } from '@/stores/session';
import { useProfileStore } from '@/stores/profile';
import { useTitleStore } from '@/stores/title';
import { useI18nStore } from '@/stores/i18n';
import { useCommonStore } from '@/stores/common';
import { useMarketStore } from '@/stores/market';

export const useApp = () => {
  const route = useRoute();

  useCommonStore();
  useTitleStore();
  useI18nStore();
  const sessionStore = useSessionStore();
  const profileStore = useProfileStore();
  const marketStore = useMarketStore();

  watch(route, () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });

  const isPreparing = ref(false);

  const fetchAppResources = async () => {
    if ([
      !marketStore.isPairsPreFetched,
      !profileStore.isProfilePreFetched,
    ].some(Boolean)) {
      isPreparing.value = true;
    }

    await marketStore.fetchPairs();

    if (sessionStore.token) {
      await profileStore.fetchAllProfileData();
    }

    isPreparing.value = false;
  };

  onMounted(fetchAppResources);

  return {
    isPreparing,
  };
};
