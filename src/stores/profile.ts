import { defineStore } from 'pinia';
import { useI18n } from 'vue-i18n';
import { useStorage } from '@vueuse/core';
import { useToastStore } from '@/stores/toasts';
import { getProfile, Profile } from '@/api/endpoints/auth/getProfile';

export const useProfileStore = defineStore('profile', () => {
  const { t } = useI18n();
  const toastStore = useToastStore();

  const profile = useStorage<Profile | null>('profile', null);

  const handleGetProfile = async () => {
    const { result, data } = await getProfile();

    if (result) {
      profile.value = data;
    } else {
      toastStore.showDanger({
        text: t('profile.failedToFetch'),
        duration: 2000,
      });
    }
  };

  return {
    profile,
    getProfile: handleGetProfile,
  };
});
