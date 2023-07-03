<template>
  <div :class="[$style.planCard, $style[state]]">
    <header :class="$style.header">
      <UiTypography
        v-if="card.headerText?.h1"
        size="h1"
        :state="['accent1', 'bold']"
      >
        {{ card.headerText?.h1 }}
      </UiTypography>
      <UiTypography
        v-if="card.headerText?.textLg"
        size="textLg"
        :state="['accent1', 'bold']"
      >
        {{ card.headerText?.textLg }}
      </UiTypography>
      <UiTypography
        v-if="card.headerText?.text"
        size="text"
        :state="['accent1', 'semiBold']"
      >
        {{ card.headerText?.text }}
      </UiTypography>
      <UiBadge
        v-if="card?.salePercents"
        state="accent1Background"
        :class="$style.saleBadge"
        size="md"
      >
        <UiTypography :state="['background1', 'bold']">
          {{ saleBadgeText }}
        </UiTypography>
      </UiBadge>
    </header>
    <main :class="$style.main">
      <UiTypography
        size="massive4"
        :state="['accent1', 'bold']"
      >
        {{ card.name }}
      </UiTypography>
      <div :class="$style.benefits">
        <UiTypography
          v-for="(additionalBenefit, index) in card.additionalBenefits"
          :key="index"
          size="textLg"
          state="accent1"
        >
          {{ additionalBenefit }}
        </UiTypography>
        <UiTypography
          size="h3"
          state="accent2"
        >
          {{ t('planCard.includedLabel') }}
        </UiTypography>
        <div :class="$style.benefitsList">
          <div
            v-for="(benefit, index) in card.benefits"
            :key="index"
            :class="$style.benefit"
          >
            <UiGradientCheckIcon
              :state="state"
              :value="benefit.active"
            />
            <UiTypography
              :class="$style.benefitLabel"
              :state="benefit.active ? 'accent1' : 'accent2'"
            >
              {{ benefit.label }}
            </UiTypography>
          </div>
        </div>
      </div>
    </main>
    <UiDivider
      :class="$style.divider"
      type="horizontal"
      state="accent3"
    />
    <footer :class="$style.footer">
      <UiTypography
        :state="['accent2']"
        size="massive4"
        :class="$style.price"
      >
        <UiTypography
          is-inline
          :state="['danger3', 'bold']"
        >
          {{ t('common.currencyAmount', { amount: card.price.value, currency: 'USDT' }) }}
        </UiTypography>
        <UiTypography
          v-if="card.price.period"
          is-inline
          :state="['semiBold']"
        >
          {{ ` / ${card.price.period}` }}
        </UiTypography>
      </UiTypography>
      <UiButton
        v-if="card.purchaseButton"
        size="xl"
        :state="[
          (({
            purple: 'gradientColor',
            orange: 'orangeGradientColor',
            blue: 'blueGradientColor'
          })[state]),
          'interactive',
        ]"
        :class="$style.trialButton"
        @click="onClickPurchase"
      >
        {{ card.purchaseButton }}
      </UiButton>
      <Link
        v-if="card.subscribeLink"
        :state="null"
        :size="null"
        :to="card.subscribeLink"
      >
        <UiButton
          size="xl"
          :state="['accent3Color', 'interactive']"
          :class="$style.subscribeButton"
          @click="onSubscribeClick"
        >
          {{ t('planCard.subscribe') }}
        </UiButton>
      </Link>
      <Link
        v-if="card.trialLink"
        :state="null"
        :size="null"
        :to="card.trialLink"
      >
        <UiButton
          size="xl"
          :state="[
            (({
              purple: 'gradientColor',
              orange: 'orangeGradientColor',
              blue: 'blueGradientColor'
            })[state]),
            'interactive',
          ]"
          :class="$style.trialButton"
        >
          {{ t('planCard.tryTrial') }}
        </UiButton>
      </Link>
      <Link
        :state="null"
        :size="null"
        :to="runtimeConfig.public.appLink"
        :class="$style.activePromocode"
      >
        <UiTypography
          size="textLg"
          :state="['accent2', 'alignCenter', 'semiBold']"
        >
          {{ t('planCard.activatePromoCode') }}
        </UiTypography>
      </Link>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { UiBadge } from '@terminal/uikit/components/badge';
import { UiButton } from '@terminal/uikit/components/button';
import { UiTypography } from '@terminal/uikit/components/typography';
import { UiDivider } from '@terminal/uikit/components/divider';
import { UiGradientCheckIcon } from '@terminal/uikit/components/gradientCheckIcon';
import { compose } from '@terminal/common/utils/fp';
import { percentFormat } from '@terminal/common/utils/numberFormat';
import { toNegative } from '@terminal/common/utils/number';
import { useRuntimeConfig } from '#imports';
import Link from '~/components/common/link/Link.vue';
import { PlanCardEmits, PlanCardProps } from './index';

const props = defineProps<PlanCardProps>();

const emit = defineEmits<PlanCardEmits>();

const runtimeConfig = useRuntimeConfig();

const { t } = useI18n();

const saleBadgeText = computed(() => (props.card?.salePercents ? compose(
  percentFormat(0),
  toNegative,
)(props.card.salePercents) : ''));

const onSubscribeClick = () => {
  emit('clickSubscribe');
};

const onClickPurchase = () => {
  emit('clickPurchase');
};
</script>

<style lang="scss" module>
.planCard {
  border-radius: 10px;
  overflow: hidden;
  background-color: rgb(var(--color-background-3));
  display: flex;
  flex-direction: column;
}

.header {
  padding: 20px 40px;
  position: relative;
}

.saleBadge {
  position: absolute;
  right: 40px;
}

.main {
  padding: 40px;
  flex-grow: 1;
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

.divider {}

.footer {
  padding: 40px;
}

.amountOfPlaces {
  & + .price {
    margin-top: 15px;
  }
}

.price {}

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
