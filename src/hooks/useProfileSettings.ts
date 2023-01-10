import { computed, ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useSessionStore } from '@/stores/session';
import { useProfileStore } from '@/stores/profile';

export const useProfileSettings = () => {
  const sessionStore = useSessionStore();

  const profileStore = useProfileStore();
  const {
    profile,
  } = storeToRefs(profileStore);

  const avatar = computed(() => profile.value?.avatar);
  const email = computed(() => profile.value?.email);
  const username = computed(() => profile.value?.username);

  const testKey = ref(0);

  setInterval(() => {
    testKey.value = testKey.value ? 0 : 1;
  }, 50000);

  return {
    logout: sessionStore.logout,
    avatar,
    email,
    username,
    testKey,
  };
};
