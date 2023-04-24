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
      <Badge
        v-if="card?.salePercents"
        state="accent1Background"
        :class="$style.saleBadge"
        size="md"
      >
        <Typography :state="['background1', 'bold']">
          {{ saleBadgeText }}
        </Typography>
      </Badge>
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
          v-for="(additionalBenefit, index) in card.additionalBenefits"
          :key="index"
          size="textLg"
          state="accent1"
        >
          {{ additionalBenefit }}
        </Typography>
        <Typography
          size="h3"
          state="accent2"
        >
          {{ t('planCard.includedLabel') }}
        </Typography>
        <div :class="$style.benefitsList">
          <div
            v-for="(benefit, index) in card.benefits"
            :key="index"
            :class="$style.benefit"
          >
            <GradientCheckIcon
              :state="state"
              :value="benefit.active"
            />
            <Typography
              :class="$style.benefitLabel"
              :state="benefit.active ? 'accent1' : 'accent2'"
            >
              {{ benefit.label }}
            </Typography>
          </div>
        </div>
      </div>
    </main>
    <Divider
      :class="$style.divider"
      type="horizontal"
      state="accent3"
    />
    <footer :class="$style.footer">
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
      <Link
        :state="null"
        :size="null"
        :to="card?.subscribeLink"
      >
        <Button
          size="xl"
          :state="['accent3Color', 'interactive']"
          :class="$style.subscribeButton"
          @click="onSubscribeClick"
        >
          {{ t('planCard.subscribe') }}
        </Button>
      </Link>
      <Link
        v-if="card.hasTrial"
        :state="null"
        :size="null"
        :to="card?.trialLink"
      >
        <Button
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
        </Button>
      </Link>
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
          {{ t('planCard.activatePromoCode') }}
        </Typography>
      </Link>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import Typography from '@/components/app/typography/Typography.vue';
import Divider from '@/components/core/divider/Divider.vue';
import Button from '@/components/core/button/Button.vue';
import Link from '@/components/core/link/Link.vue';
import GradientCheckIcon from '@/components/core/gradientCheckIcon/GradientCheckIcon.vue';
import Badge from '@/components/core/badge/Badge.vue';
import { computed, resolveComponent } from 'vue';
import { compose } from '@/utils/fp';
import { percentFormat } from '@/utils/numberFormat';
import { toNegative } from '@/utils/number';
import { PlanCardEmits, PlanCardProps } from './index';

const props = defineProps<PlanCardProps>();

const emit = defineEmits<PlanCardEmits>();

const { t } = useI18n();

const saleBadgeText = computed(() => (props.card?.salePercents ? compose(
  percentFormat(0),
  toNegative,
)(props.card.salePercents) : ''));

const onSubscribeClick = () => {
  emit('clickSubscribe');
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
