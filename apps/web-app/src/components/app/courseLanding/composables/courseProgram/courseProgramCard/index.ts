export interface ICourseProgramCard {
    moduleIndex: string,
    heading: string,
    description: string,
    contentsHeading: {
        keyPath: string,
        period: string,
    },
    contents: string,
    imageSrcSet: string,
}

export interface CourseProgramCard {
    data: ICourseProgramCard,
}
