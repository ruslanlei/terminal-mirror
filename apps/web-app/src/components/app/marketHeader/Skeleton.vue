<template>
  <SkeletonContainer>
    <Header>
      <template #leftColumn>
        <div :class="$style.leftColumn">
          <Skeleton :class="$style.marketTypeSelectorSkeleton" />
          <Divider
            type="vertical"
            state="default"
            :class="[$style.divider, $style.dividerLeft]"
          />
          <div :class="$style.currencyStatsSkeleton">
            <Skeleton :class="$style.currencyLogoSkeleton" />
            <Skeleton :class="$style.selectedCurrencySkeleton" />
          </div>
        </div>
      </template>
      <template #rightColumn>
        <div :class="$style.profileBlock">
          <Skeleton :class="$style.avatarSkeleton" />
          <Skeleton :class="$style.avatarIconSkeleton" />
        </div>
      </template>
    </Header>
  </SkeletonContainer>
</template>

<script setup lang="ts">
import Header from '@/components/core/header/Header.vue';
import Divider from '@/components/core/divider/Divider.vue';
import Skeleton from '@/components/core/skeleton/Skeleton.vue';
import SkeletonContainer from '@/components/core/skeletonContainer/SkeletonContainer.vue';
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
