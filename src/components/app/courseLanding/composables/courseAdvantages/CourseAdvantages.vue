<template>
  <section :class="$style.courseAdvantagesCard">
    <Card :class="$style.card">
      <Typography
        :state="['accent1', 'bold']"
        size="massive2"
      >
        {{ t('courseLanding.advantagesCard.heading') }}
      </Typography>
      <main :class="$style.main">
        <Card
          state="background1"
          :class="[
            $style.badge,
            $style.topBadge
          ]"
        >
          <Typography
            :state="['accent1', 'medium', 'alignCenter']"
            size="textLg"
          >
            {{ t('courseLanding.advantagesCard.getPractice') }}
          </Typography>
        </Card>
        <div :class="$style.columns">
          <div :class="[$style.column, $style.columnLeft]">
            <Card
              v-for="({ label, className }, cardIndex) in cardsLeftColumn"
              :key="cardIndex"
              state="background1"
              :class="[
                $style.badge,
                className,
              ]"
            >
              <Typography
                :state="['accent1', 'medium', 'alignCenter']"
                size="textLg"
              >
                {{ label }}
              </Typography>
            </Card>
          </div>
          <DogeCoin :class="$style.picture" />
          <div :class="[$style.column, $style.columnRight]">
            <Card
              v-for="({ label, className }, cardIndex) in cardsRightColumn"
              :key="cardIndex"
              state="background1"
              :class="[
                $style.badge,
                className,
              ]"
            >
              <Typography
                :state="['accent1', 'medium', 'alignCenter']"
                size="textLg"
              >
                {{ label }}
              </Typography>
            </Card>
          </div>
        </div>
        <Card
          :class="$style.advantageBadgeGradient"
          state="background1"
        >
          <Typography
            :state="['accent1', 'medium', 'alignCenter']"
            size="textLg"
          >
            {{ t('courseLanding.advantagesCard.gainKnowledge') }}
          </Typography>
        </Card>
      </main>
    </Card>
    <Button
      :is-wide="false"
      state="gradientColor"
      :class="$style.button"
      size="xl"
      @click="onClickSignUp"
    >
      {{ t('courseLanding.advantagesCard.button') }}
    </Button>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import Typography from '@/components/app/typography/Typography.vue';
import Card from '@/components/core/card/Card.vue';

import Button from '@/components/core/button/Button.vue';

import { useCssModules } from '@/hooks/useCssModules';
import { CourseAdvantagesEmits } from '@/components/app/courseLanding/composables/courseAdvantages/index';
import DogeCoin from './assets/doge.svg';

const { t } = useI18n();

const emit = defineEmits<CourseAdvantagesEmits>();

const onClickSignUp = () => {
  emit('clickSignUp');
};

const { $style } = useCssModules();

const cardsLeftColumn = computed(() => [
  {
    label: t('courseLanding.advantagesCard.exchangeCrypto'),
    className: $style.topCard,
  },
  {
    label: t('courseLanding.advantagesCard.whatCourseDepends'),
    className: $style.secondRowCard,
  },
  {
    label: t('courseLanding.advantagesCard.payNAcceptPayments'),
    className: $style.thirdRowCard,
  },
  {
    label: t('courseLanding.advantagesCard.tradingStrategies'),
    className: $style.bottomCard,
  },
]);

const cardsRightColumn = computed(() => [
  {
    label: t('courseLanding.advantagesCard.reliableExchanges'),
    className: $style.topCard,
  },
  {
    label: t('courseLanding.advantagesCard.incomeLevel'),
    className: $style.secondRowCard,
  },
  {
    label: t('courseLanding.advantagesCard.psychologicalAspects'),
    className: $style.thirdRowCard,
  },
  {
    label: t('courseLanding.advantagesCard.protectCrypto'),
    className: $style.bottomCard,
  },
]);
</script>

<style lang="scss" module>
.courseAdvantagesCard {
  padding-top: 240px;
  height: 1448px;
  position: relative;
  display: flex;
  justify-content: center;
}

.card {
  border-radius: 50px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1660px;
  position: relative;
}

.picture {
  align-self: center;
}

.badge {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 18px;
}

.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
}

.topCard {
  max-width: 360px;
  position: relative;
  height: 94px;
}

.secondRowCard {
  height: 94px;
}

.thirdRowCard {
  height: 124px;
}

.bottomCard {
  max-width: 400px;
  position: relative;
  height: 94px;
}

.columns {
  display: grid;
  grid-template-columns: 1fr 342px 1fr;
  gap: 50px;
  margin-top: 40px;
  max-width: 1240px;
}

.column {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.columnLeft {
  align-items: flex-end;
  .topCard {
    right: -50px;
  }
  .bottomCard {
    right: -70px;
  }
}

.columnRight {
  align-items: flex-start;
  .topCard {
    left: -50px;
  }
  .bottomCard {
    left: -70px;
  }
}

.topBadge {
}

.defaultSizeBadge {
}

.advantageBadgeGradient {
  width: 100%;
  max-width: 820px;
  margin-top: 40px;
  padding: 18px;
  border-radius: 10px;
}

.button {
  position: absolute;
  left: 42%;
  bottom: -33px;
  padding: 20px 60px;
}
</style>
