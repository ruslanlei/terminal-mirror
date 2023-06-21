export interface IPhotoCard {
    label: string,
    description: string,
    imageSrcSet: string,
}

export interface PhotoCardProps {
    cardData: IPhotoCard,
}
