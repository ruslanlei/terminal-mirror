<template>
  <div
    :class="[
      $style.orderListWrapper,
      isDisabled && $style.disabled,
    ]"
  >
    <transition
      name="skeletonTransition"
      mode="out-in"
    >
      <ListSkeleton
        v-if="isLoading"
        :class="$style.skeleton"
      />
      <div
        v-else
        :class="$style.content"
      >
        <div :class="$style.orderList">
          <slot name="orderList" />
        </div>
        <div
          v-if="'pagination' in $slots"
          :class="$style.paginationContainer"
        >
          <slot name="pagination" />
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import ListSkeleton from '@/components/app/listSkeleton/ListSkeleton.vue';
import { ActiveOrderListContainerProps } from './index';

defineProps<ActiveOrderListContainerProps>();
</script>

<style lang="scss" module>
@import "@terminal/uikit/assets/styles/utils";

.orderListWrapper {
  width: 100%;
  display: flex;
  @include transparentOnDisabled;
  flex-grow: 1;
}

.content {
  width: 100%;
  flex-grow: 1;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
}

.paginationContainer {
  display: flex;
  justify-content: flex-end;
  width: 100%;
  position: sticky;
  bottom: 0;
  z-index: 3;
  background: linear-gradient(to top, rgb(var(--color-background-1)), transparent);
  padding-bottom: 20px;

  & + .orderList {
    margin-top: 20px;
  }
}

.orderList {
  width: 100%;
  display: flex;
  flex-grow: 1;
  & > * {
    width: 100%;
  }

  & + .paginationContainer {
    margin-top: 20px;
  }
}

.skeleton {
  width: 100%;
  flex-grow: 1;
}
</style>
