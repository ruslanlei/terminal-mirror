import { useClipboard } from '@vueuse/core';
import { useToastStore } from '@/stores/toasts';
import { useRuntimeConfig } from '#imports';

export const useDiscordLink = (
  message: string,
) => {
  const toastStore = useToastStore();

  const runtimeConfig = useRuntimeConfig();

  const discordUsername = String(runtimeConfig.discordUsername);

  const { copy } = useClipboard();

  const copyDiscordLink = async () => {
    await copy(discordUsername);
    toastStore.showSuccess({
      text: message,
      duration: 10000,
    });
  };

  return {
    discordUsername,
    copyDiscordLink,
  };
};
