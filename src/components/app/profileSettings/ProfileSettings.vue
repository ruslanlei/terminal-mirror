<template>
  <Card :class="$style.profileSettings">
    <header :class="$style.header">
      <Avatar :src="avatar" />
      <div :class="$style.name">
        {{ profile?.username }}
        <Icon
          :class="$style.verificationBadge"
          icon="verificationCircle"
        />
      </div>
    </header>
  </Card>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import Card from '@/components/core/card/Card.vue';
import Avatar from '@/components/core/avatar/Avatar.vue';
import Icon from '@/components/core/icon/Icon.vue';
import { useProfileStore } from '@/stores/profile';
import { storeToRefs } from 'pinia';

const profileStore = useProfileStore();
const {
  profile,
} = storeToRefs(profileStore);

const avatar = computed(() => profile.value?.avatar);
</script>

<style lang="scss" module>
@import "src/assets/styles/utils";

.profileSettings {
  padding: 20px;
}

.header {
  display: flex;
  align-items: center;
}

.name {
  display: flex;
  align-items: center;
  margin-left: 20px;
  @include title2;
  font-weight: 600;
  color: rgb(var(--color-accent-1));
}

.verificationBadge {
  margin-left: 10px;
}
</style>
