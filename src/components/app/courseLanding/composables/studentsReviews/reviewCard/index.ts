export interface IReviewCard {
    username: string,
    userPosition: string,
    date: string,
    chapters: {
        label: string,
        text: string,
    }[],
    picture: string,
}

export interface ReviewCardProps {
    data: IReviewCard,
}
