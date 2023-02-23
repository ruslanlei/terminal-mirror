export interface ILearnToEarnFrame {
    label: string,
    description: string,
}

export interface LearnToEarnFrameProps {
    frame: ILearnToEarnFrame,
    isActive?: boolean,
    progress: number, // 0 - 100
}
