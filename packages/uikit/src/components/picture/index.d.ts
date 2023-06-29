export { default as UiPicture } from "../../../components/picture/Picture";
export interface PictureProps {
    src?: string;
    srcset?: string;
    alt?: string;
    transitionDuration?: number;
    isFill?: boolean;
}
