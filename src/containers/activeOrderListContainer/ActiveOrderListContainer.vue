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
        <div
          v-if="'paginationTop' in $slots"
          :class="$style.pagination"
        >
          <slot name="paginationTop" />
        </div>
        <div :class="$style.orderList">
          <slot name="orderList" />
        </div>
        <div
          v-if="'paginationBottom' in $slots"
          :class="$style.pagination"
        >
          <slot name="paginationBottom" />
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
@import "src/assets/styles/utils";

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

.pagination {
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

  & + .pagination {
    margin-top: 20px;
  }
}

.skeleton {
  width: 100%;
  flex-grow: 1;
}
</style>
