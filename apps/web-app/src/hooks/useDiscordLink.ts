import { useToastStore } from '@/stores/toasts';
import { useClipboard } from '@vueuse/core';

export const useDiscordLink = (
  message: string,
) => {
  const toastStore = useToastStore();

  const discordUsername = String(import.meta.env.VITE_APP_DISCORD_USERNAME);

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
