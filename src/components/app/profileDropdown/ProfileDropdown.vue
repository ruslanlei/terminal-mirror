<template>
  <Dropdown
    v-model:is-visible="isVisible"
    :distance="20"
    :placement="['bottom', 'right']"
  >
    <template #trigger>
      <button
        type="button"
        :class="$style.trigger"
      >
        <Avatar :src="avatar" />
        <Icon
          :class="$style.triggerIcon"
          icon="arrowDown"
        />
      </button>
    </template>
    <template #dropdown>
      <ProfileSettings />
    </template>
  </Dropdown>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import Dropdown from '@/components/core/dropdown/Dropdown.vue';
import Icon from '@/components/core/icon/Icon.vue';
import Avatar from '@/components/core/avatar/Avatar.vue';
import ProfileSettings from '@/components/app/profileSettings/ProfileSettings.vue';
import { useProfileStore } from '@/stores/profile';

const profileStore = useProfileStore();
const avatar = computed(() => profileStore.profile?.avatar);

const isVisible = ref(false);
</script>

<style lang="scss" module>
.trigger {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.triggerIcon {
  margin-left: 12px;
  color: rgb(var(--color-accent-2));
}
</style>
