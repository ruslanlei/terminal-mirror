import { defineStore } from 'pinia';

export const useProfileStore = defineStore('profile', () => {
  const handleGetProfile = () => {};

  return {
    getProfile: handleGetProfile,
  };
});
