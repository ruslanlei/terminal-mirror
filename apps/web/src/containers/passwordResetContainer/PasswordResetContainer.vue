<template>
  <div :class="$style.passwordResetContainer">
    <h1 :class="$style.label">
      <slot name="label" />
    </h1>
    <div :class="$style.description">
      <slot name="description" />
    </div>
    <div :class="$style.input">
      <slot name="emailInput" />
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

.passwordResetContainer {}

.label {
  @include h1;
  margin-top: 80px;
  color: rgb(var(--color-accent-1));
}

.description {
  @include text;
  margin-top: 10px;
  color: rgb(var(--color-accent-2));
}

.input {
  margin-top: 40px;
}

.submit {
  margin-top: 40px;
}
</style>
