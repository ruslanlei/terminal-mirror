<template>
  <div :class="[$style.planCard, $style[state]]">
    <header :class="$style.header">
      <Typography
        v-if="card.headerText?.h1"
        size="h1"
        :state="['accent1', 'bold']"
      >
        {{ card.headerText?.h1 }}
      </Typography>
      <Typography
        v-if="card.headerText?.textLg"
        size="textLg"
        :state="['accent1', 'bold']"
      >
        {{ card.headerText?.textLg }}
      </Typography>
      <Typography
        v-if="card.headerText?.text"
        size="text"
        :state="['accent1', 'semiBold']"
      >
        {{ card.headerText?.text }}
      </Typography>
    </header>
    <main :class="$style.main">
      <Typography
        size="massive4"
        :state="['accent1', 'bold']"
      >
        {{ card.name }}
      </Typography>
      <div :class="$style.benefits">
        <Typography
          size="h3"
          state="accent2"
        >
          {{ t('terminalLanding.plans.card.includedLabel') }}
        </Typography>
        <div :class="$style.benefitsList">
          <div
            v-for="(benefit, index) in card.benefits"
            :key="index"
            :class="$style.benefit"
          >
            <Icon
              :size="32"
              :icon="benefit.active ? 'checkSpecial' : 'crossSpecial'"
            />
            <Typography
              :class="$style.benefitLabel"
              :state="benefit.active ? 'accent1' : 'accent2'"
            >
              {{ benefit.label }}
            </Typography>
          </div>
        </div>
        <Divider
          :class="$style.divider"
          type="horizontal"
          state="accent3"
        />
        <Typography
          :state="['accent2']"
          size="massive4"
          :class="$style.price"
        >
          <i18n-t
            tag="span"
            keypath="common.slashWithSpaces"
          >
            <template #value1>
              <Typography
                is-inline
                :state="['danger3', 'bold']"
              >
                {{ t('common.currencyAmount', { amount: card.price.value, currency: '₽' }) }}
              </Typography>
            </template>
            <template #value2>
              {{ t('common.currencyAmount', { amount: card.price.withoutSale, currency: '₽' }) }}
            </template>
          </i18n-t>
        </Typography>
        <Button
          size="xl"
          :state="['accent3Color', 'interactive']"
          :class="$style.subscribeButton"
        >
          {{ t('terminalLanding.plans.card.subscribe') }}
        </Button>
        <Button
          size="xl"
          :state="['gradientColor', 'interactive']"
          :class="$style.trialButton"
        >
          {{ t('terminalLanding.plans.card.tryTrial') }}
        </Button>
        <Link
          :state="null"
          :size="null"
          :to="{ name: 'index' }"
          :class="$style.activePromocode"
        >
          <Typography
            size="textLg"
            :state="['accent2', 'alignCenter', 'semiBold']"
          >
            {{ t('terminalLanding.plans.card.activatePromoCode') }}
          </Typography>
        </Link>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import Icon from '@/components/core/icon/Icon.vue';
import Typography from '@/components/app/typography/Typography.vue';
import Divider from '@/components/core/divider/Divider.vue';
import Button from '@/components/core/button/Button.vue';
import Link from '@/components/core/link/Link.vue';
import { PlanCardProps } from './index';

const props = defineProps<PlanCardProps>();

const { t } = useI18n();
</script>

<style lang="scss" module>
.planCard {
  border-radius: 10px;
  overflow: hidden;
  background-color: rgb(var(--color-background-3));
}

.header {
  padding: 20px 40px;
}

.main {
  padding: 40px;
}

.purple {
  .header {
    background: var(--color-main-gradient);
  }
}

.orange {
  .header {
    background: var(--color-orange-gradient);
  }
}

.blue {
  .header {
    background: var(--color-blue-gradient);
  }
}

.benefits {
  margin-top: 40px;
}

.benefitsList {
  margin-top: 22px;
}

.benefit {
  display: flex;
  align-items: center;
  &:not(:first-child) {
    margin-top: 15px;
  }
}

.benefitLabel {
  margin-left: 11px;
}

.divider {
  margin-top: 40px;
  margin-left: -40px;
  margin-right: -40px;
}

.price {
  margin-top: 40px;
}

.subscribeButton, .trialButton {
  padding: 22px;
}

.subscribeButton {
  margin-top: 40px;
}

.trialButton {
  margin-top: 20px;
}

.activePromocode {
  margin-top: 15px;
}
</style>
