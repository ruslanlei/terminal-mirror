import { nextTick, ref } from 'vue';
import { defineStore } from 'pinia';
import { useI18n } from 'vue-i18n';
import { useToastStore } from '@/stores/toasts';
import { getProfile } from '@/api/endpoints/auth/getProfile';
import { Profile } from '@/api/types/profile';

export const useProfileStore = defineStore('profile', () => {
  const { t } = useI18n();
  const toastStore = useToastStore();

  const profile = ref<Profile | null>(null);

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

  return {
    profile,
    isFetchingProfile,
    getProfile: handleGetProfile,
  };
});
