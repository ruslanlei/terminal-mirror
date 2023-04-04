<template>
  <div
    :class="[
      $style.avatar,
      $style[size],
      $style[state]
    ]"
  >
    <slot>
      <Picture
        v-if="src"
        :src="src"
      />
      <Typography
        v-else-if="label"
        size="title1"
        :state="['accent1', 'bold', 'uppercase']"
      >
        {{ firstLetter(label) }}
      </Typography>
    </slot>
  </div>
</template>

<script setup lang="ts">
import Picture from '@/components/core/picture/Picture.vue';
import Typography from '@/components/app/typography/Typography.vue';
import { firstLetter } from '@/utils/string';
import { AvatarProps } from './index';

withDefaults(
  defineProps<AvatarProps>(),
  {
    size: 'md',
  },
);
</script>

<style lang="scss" module>
.avatar {
  border-radius: 50%;
  transition: transform 160ms;
  user-select: none;
  object-fit: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    transform: scale(1.05);
  }
  &:active {
    transform: scale(0.95);
  }
}

@mixin size($size) {
  width: $size;
  min-width: $size;
  height: $size;
  min-height: $size;
}

.md {
  @include size(40px);
}

.sm {
  @include size(28px);
}

.danger {
  background-color: rgb(var(--color-danger));
}

.success {
  background-color: rgb(var(--color-success));
}
</style>
