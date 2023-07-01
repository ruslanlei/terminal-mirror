import {
  ILearnToEarnFrame,
} from '../learnToEarnFrame';

export interface LearnToEarnFramesProps {
  frames: ILearnToEarnFrame[],
  modelValue: number,
}

export interface LearnToEarnFramesEmits {
  (e: 'update:modelValue'): void
}
