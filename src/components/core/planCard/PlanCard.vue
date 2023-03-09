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
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import Icon from '@/components/core/icon/Icon.vue';
import Typography from '@/components/app/typography/Typography.vue';
import Divider from '@/components/core/divider/Divider.vue';
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
</style>
