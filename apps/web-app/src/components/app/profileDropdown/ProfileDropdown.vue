<template>
  <Dropdown
    :distance="20"
    :placement="['bottom', 'right']"
  >
    <template #trigger>
      <button
        type="button"
        :class="$style.trigger"
      >
        <UiAvatar :src="DefaultAvatar" />
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
import { UiAvatar } from '@terminal/uikit/components/avatar';
import Dropdown from '@/components/core/dropdown/Dropdown.vue';
import Icon from '@/components/core/icon/Icon.vue';
import ProfileSettings from '@/components/app/profileSettings/ProfileSettings.vue';
import DefaultAvatar from '@/assets/images/defaultAvatar.svg?url';
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
