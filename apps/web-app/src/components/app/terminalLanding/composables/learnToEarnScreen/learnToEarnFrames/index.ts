import {
  ILearnToEarnFrame,
} from '@/components/app/terminalLanding/composables/learnToEarnScreen/learnToEarnFrame';

export interface LearnToEarnFramesProps {
  frames: ILearnToEarnFrame[],
  modelValue: number,
}

export interface LearnToEarnFramesEmits {
  (e: 'update:modelValue'): void
}
