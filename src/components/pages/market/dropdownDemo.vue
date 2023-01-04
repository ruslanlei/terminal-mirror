<template>
  <div :class="$style.demo">
    <Dropdown
      v-model:is-visible="isVisible4"
      :distance="10"
      :placement="['top', 'right']"
      :keep-within-window-vertical="true"
    >
      <template #trigger>
        <div :class="$style.trigger">
          top right
        </div>
      </template>
      <template #dropdown>
        <Card :class="$style.dropdown">
          dropdown
        </Card>
      </template>
    </Dropdown>
    <Dropdown
      v-model:is-visible="isVisible5"
      :distance="10"
      placement="top"
    >
      <template #trigger>
        <div :class="$style.trigger">
          top center
        </div>
      </template>
      <template #dropdown>
        <Card :class="$style.dropdown">
          dropdown
        </Card>
      </template>
    </Dropdown>
    <Dropdown
      v-model:is-visible="isVisible6"
      :distance="10"
      :placement="['top', 'left']"
    >
      <template #trigger>
        <div :class="$style.trigger">
          top left
        </div>
      </template>
      <template #dropdown>
        <Card :class="$style.dropdown">
          dropdown
        </Card>
      </template>
    </Dropdown>
    <Dropdown
      v-model:is-visible="isVisible3"
      :distance="10"
      :placement="['bottom', 'right']"
    >
      <template #trigger>
        <div :class="$style.trigger">
          bottom right
        </div>
      </template>
      <template #dropdown>
        <Card :class="$style.dropdown">
          dropdown
        </Card>
      </template>
    </Dropdown>
    <Dropdown
      v-model:is-visible="isVisible"
      :distance="10"
    >
      <template #trigger>
        <div :class="$style.trigger">
          bottom center
        </div>
      </template>
      <template #dropdown>
        <Card :class="$style.dropdown">
          dropdown
        </Card>
      </template>
    </Dropdown>
    <Dropdown
      v-model:is-visible="isVisible2"
      :distance="10"
      :placement="['bottom', 'left']"
    >
      <template #trigger>
        <div :class="$style.trigger">
          bottom left
        </div>
      </template>
      <template #dropdown>
        <Card :class="$style.dropdown">
          dropdown
        </Card>
      </template>
    </Dropdown>
    <Dropdown
      v-model:is-visible="isVisible9"
      :distance="10"
      :placement="['left', 'bottom']"
      :keep-within-window-horizontal="false"
    >
      <template #trigger>
        <div :class="$style.trigger">
          left bottom
        </div>
      </template>
      <template #dropdown>
        <Card :class="$style.dropdown">
          dropdown
        </Card>
      </template>
    </Dropdown>
    <Dropdown
      v-model:is-visible="isVisible8"
      :distance="10"
      placement="left"
    >
      <template #trigger>
        <div :class="$style.trigger">
          left center
        </div>
      </template>
      <template #dropdown>
        <Card :class="$style.dropdown">
          dropdown
        </Card>
      </template>
    </Dropdown>
    <Dropdown
      v-model:is-visible="isVisible7"
      :distance="10"
      :placement="['left', 'top']"
    >
      <template #trigger>
        <div :class="$style.trigger">
          left top
        </div>
      </template>
      <template #dropdown>
        <Card :class="$style.dropdown">
          dropdown
        </Card>
      </template>
    </Dropdown>
    <Dropdown
      v-model:is-visible="isVisible10"
      :distance="10"
      :placement="['right', 'bottom']"
      :keep-within-window-horizontal="false"
    >
      <template #trigger>
        <div :class="$style.trigger">
          right bottom
        </div>
      </template>
      <template #dropdown>
        <Card :class="$style.dropdown">
          dropdown
        </Card>
      </template>
    </Dropdown>
    <Dropdown
      v-model:is-visible="isVisible11"
      :distance="10"
      placement="right"
    >
      <template #trigger>
        <div :class="$style.trigger">
          right center
        </div>
      </template>
      <template #dropdown>
        <Card :class="$style.dropdown">
          dropdown
        </Card>
      </template>
    </Dropdown>
    <Dropdown
      v-model:is-visible="isVisible12"
      :distance="10"
      :placement="['right', 'top']"
    >
      <template #trigger>
        <div :class="$style.trigger">
          right top
        </div>
      </template>
      <template #dropdown>
        <Card :class="$style.dropdown">
          dropdown
        </Card>
      </template>
    </Dropdown>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Dropdown from '@/components/core/dropdown/Dropdown.vue';
import Card from '@/components/core/card/Card.vue';

const isVisible = ref(false);
const isVisible2 = ref(false);
const isVisible3 = ref(false);
const isVisible4 = ref(false);
const isVisible5 = ref(false);
const isVisible6 = ref(false);
const isVisible7 = ref(false);
const isVisible8 = ref(false);
const isVisible9 = ref(false);
const isVisible10 = ref(false);
const isVisible11 = ref(false);
const isVisible12 = ref(false);
</script>

<style lang="scss" module>
.demo {
  height: 3000px;
  padding: 100px;
  gap: 100px 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-content: flex-start;
}

.trigger {
  color: rgb(var(--color-accent-1));
  background-color: rgb(var(--color-background-2));
  display: flex;
  justify-content: center;
  padding: 20px;
  border-radius: 10px;
}

.dropdown {
  padding: 30px;
  width: 300px;
}
</style>
