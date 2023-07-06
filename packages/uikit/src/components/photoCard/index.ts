export { default as UiPhotoCard } from './PhotoCard.vue';
export interface IPhotoCard {
    label: string,
    description: string,
    imageSrcSet: string,
}

export interface PhotoCardProps {
    cardData: IPhotoCard,
}
