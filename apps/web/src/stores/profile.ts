import { computed, ref } from 'vue';
import { defineStore } from 'pinia';
import { useI18n } from 'vue-i18n';
import { useStorage } from '@vueuse/core';
import { isEmpty } from '@terminal/common/utils/object';
import { useToastStore } from '@/stores/toasts';
import { getProfile } from '@/api/endpoints/auth/getProfile';
import { Profile } from '@/api/types/profile';
import { useEmulatorStore } from '@/stores/emulator';
import { useMarketStore } from '@/stores/market';

export const useProfileStore = defineStore('profile', () => {
  const { t } = useI18n();
  const toastStore = useToastStore();
  const emulatorStore = useEmulatorStore();
  const marketStore = useMarketStore();

  const profile = useStorage<Profile | {}>('profileData', {});
  const isProfilePreFetched = computed(() => !isEmpty(profile.value));

  const isFetchingProfile = ref(false);
  const handleGetProfile = async () => {
    isFetchingProfile.value = true;
    const { result, data } = await getProfile();
    isFetchingProfile.value = false;

    if (result) {
      profile.value = data;
    } else {
      toastStore.showDanger({
        text: t('profile.failedToFetch'),
        duration: 2000,
      });
    }
  };

  const handleFetchAllProfileData = async () => {
    await handleGetProfile();
    await emulatorStore.fetchBalance();
    await marketStore.fetchFavoritePairs();
  };

  const fetchAllProfileData = async () => {
    if (!isProfilePreFetched.value) {
      await handleFetchAllProfileData();
      return;
    }

    handleFetchAllProfileData();
  };

  return {
    profile,
    isProfilePreFetched,
    isFetchingProfile,
    getProfile: handleGetProfile,
    fetchAllProfileData,
  };
});
