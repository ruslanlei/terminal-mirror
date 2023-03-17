import { IWhyToTrainCard } from '@/components/app/terminalLanding/composables/whyToTrainScreen/whyToTrainCard';

export interface WhyToTrainCardRowProps {

  progress: number,
  cards: [IWhyToTrainCard, IWhyToTrainCard],
}
