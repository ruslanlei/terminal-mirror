import { ref } from 'vue';
import { defineStore } from 'pinia';
import { useI18n } from 'vue-i18n';
import { useStorage } from '@vueuse/core';
import { useToastStore } from '@/stores/toasts';
import { getProfile, Profile } from '@/api/endpoints/auth/getProfile';

export const useProfileStore = defineStore('profile', () => {
  const { t } = useI18n();
  const toastStore = useToastStore();

  const profile = useStorage<Profile | null>('profile', null);

  const balance = ref(0);

  const handleGetProfile = async () => {
    const { result, data } = await getProfile();

    if (result) {
      profile.value = {
        ...data,
        avatar: 'https://picsum.photos/200/300',
      };
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
    balance,
  };
});
