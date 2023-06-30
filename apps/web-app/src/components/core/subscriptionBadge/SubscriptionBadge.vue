<template>
  <transition
    name="subscriptionBadgeTransition"
    mode="out-in"
  >
    <div
      :key="state"
      :class="[$style.subscriptionBadge, $style[state]]"
    >
      <CertificateImage :state="computedImageState" />
      <div :class="$style.text">
        <div :class="$style.label">
          {{ computedLabel }}
        </div>
        <div :class="$style.description">
          {{ computedDescription }}
        </div>
      </div>
      <UiIcon
        v-if="to"
        :class="$style.icon"
        icon="arrowRight"
      />
    </div>
  </transition>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { UiIcon } from '@terminal/uikit/components/icon';
import { SubscriptionBadgeProps } from '@/components/core/subscriptionBadge/index';
import CertificateImage from './ceritificateImage/CertificateImage.vue';

const props = defineProps<SubscriptionBadgeProps>();

const { t } = useI18n();

const computedImageState = computed(() => ({
  paid: 'purple',
  unpaid: 'orange',
}[props.state]));

const computedLabel = computed(() => ({
  paid: t('subscription.paid.label'),
  unpaid: t('subscription.unpaid.label'),
}[props.state]));

const computedDescription = computed(() => ({
  paid: t('subscription.paid.description', {
    endDate: props.paidUntil,
  }),
  unpaid: t('subscription.unpaid.description'),
}[props.state]));
</script>

<style lang="scss" module>
@import "src/assets/styles/utils";

.subscriptionBadge {
  border-radius: 5px;
  padding: 0 20px 0 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: background 250ms;
  &:hover {
    transform: scale(1.005);
  }
}

.text {
  margin-left: 20px;
}

.label {
  color: rgb(var(--color-accent-1));
  @include title2;
  letter-spacing: 0.05em;
  font-weight: 600;
}

.description {
  color: rgba(var(--color-accent-1), 0.6);
  @include title5;
}

.paid {
  background: var(--color-main-gradient);
}

.unpaid {
  background: var(--color-orange-gradient);
}

.icon {
  margin-left: auto;
  color: rgb(var(--color-accent-1));
}
</style>

<style lang="scss">
.subscriptionBadgeTransition {
  &-enter-active,
  &-leave-active {
    transition: transform 200ms, opacity 200ms;
  }

  &-enter-from,
  &-leave-to {
    opacity: 0;
  }

  &-enter-from {
    transform: scale(1.025) translateY(-5px);
  }
  &-leave-to {
    transform: scale(0.975) translateY(5px);
  }
}
</style>
