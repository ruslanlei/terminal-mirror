<template>
  <div :class="$style.authChangePasswordContainer">
    <div :class="$style.label">
      <slot name="label" />
    </div>
    <div :class="$style.description">
      <slot name="description" />
    </div>
    <div :class="$style.field">
      <slot name="password" />
    </div>
    <div :class="$style.field">
      <slot name="repeatPassword" />
    </div>
    <div :class="$style.submit">
      <slot name="submit" />
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" module>
@import "@terminal/uikit/assets/styles/utils";

.authChangePasswordContainer {
  padding-top: 80px;
}

.label {
  @include h1;
  color: rgb(var(--color-accent-1));
}

.description {
  @include text;
  font-weight: 500;
  color: rgb(var(--color-accent-2));
  margin-top: 10px;
}

.field {
  margin-top: 40px;
  &:not(:first-child) {
    margin-top: 20px;
  }
}

.submit {
  margin-top: 40px;
}
</style>
