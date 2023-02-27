import { onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useSessionStore } from '@/stores/session';
import { useProfileStore } from '@/stores/profile';
import { useTitleStore } from '@/stores/title';
import { useI18nStore } from '@/stores/i18n';
import { useCommonStore } from '@/stores/common';
import { useEmulatorStore } from '@/stores/emulator';
import { useMarketStore } from '@/stores/market';

export const useApp = () => {
  const route = useRoute();

  useCommonStore();
  useTitleStore();
  useI18nStore();
  const sessionStore = useSessionStore();
  const profileStore = useProfileStore();
  const marketStore = useMarketStore();
  const emulatorStore = useEmulatorStore();

  watch(route, () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });

  const isPreparing = ref(false);

  const fetchAppResources = async () => {
    isPreparing.value = true;

    await marketStore.getPairs();

    if (sessionStore.token) {
      await profileStore.getProfile();
      await marketStore.fetchFavoritePairs();
      await emulatorStore.fetchBalance();
    }

    isPreparing.value = false;
  };

  onMounted(fetchAppResources);

  return {
    isPreparing,
  };
};
