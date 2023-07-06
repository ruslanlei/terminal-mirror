import { IWhyToTrainCard } from '../whyToTrainCard';

export interface WhyToTrainCardRowProps {

  progress: number,
  cards: [IWhyToTrainCard, IWhyToTrainCard],
}
