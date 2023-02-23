export interface LearnToEarnFrame {
    label: string,
    description: string,
}

export interface LearnToEarnFrameProps {
    frame: LearnToEarnFrame,
    isActive?: boolean,
    progress: number, // 0 - 100
}
