<template>
  <UiSkeletonContainer>
    <UiHeader>
      <template #leftColumn>
        <div :class="$style.leftColumn">
          <UiSkeleton :class="$style.marketTypeSelectorSkeleton" />
          <UiDivider
            type="vertical"
            state="default"
            :class="[$style.divider, $style.dividerLeft]"
          />
          <div :class="$style.currencyStatsSkeleton">
            <UiSkeleton :class="$style.currencyLogoSkeleton" />
            <UiSkeleton :class="$style.selectedCurrencySkeleton" />
          </div>
        </div>
      </template>
      <template #rightColumn>
        <div :class="$style.profileBlock">
          <UiSkeleton :class="$style.avatarSkeleton" />
          <UiSkeleton :class="$style.avatarIconSkeleton" />
        </div>
      </template>
    </UiHeader>
  </UiSkeletonContainer>
</template>

<script setup lang="ts">
import { UiDivider } from '@terminal/uikit/components/divider';
import { UiSkeleton } from '@terminal/uikit/components/skeleton';
import { UiSkeletonContainer } from '@terminal/uikit/components/skeletonContainer';
import { UiHeader } from '@terminal/uikit/components/header';
</script>

<style lang="scss" module>
.divider {
  height: 25px;
}

.leftColumn {
  display: flex;
  align-items: center;
}

.profileBlock {
  display: flex;
  align-items: center;
  gap: 15px;
}

.dividerLeft {
  margin-left: 20px;
}

.marketTypeSelectorSkeleton {
  height: 32px;
  width: 213px;
  border-radius: 5px;
}

.currencyStatsSkeleton {
  display: flex;
  align-items: center;
  margin-left: 20px;
}

.selectedCurrencySkeleton {
  height: 40px;
  width: 400px;
  margin-left: 10px;
}

.currencyLogoSkeleton {
  height: 40px;
  width: 36px;
}

.avatarSkeleton {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.avatarIconSkeleton {
  width: 24px;
  height: 24px;
  border-radius: 5px;
}
</style>
