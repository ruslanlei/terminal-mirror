/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { SliderSelectItemProps } from './slider-select-item.component';
export type SliderSelectOption<T> = Pick<SliderSelectItemProps<T>, 'value' | 'icon' | 'children'>;
export interface SliderSelectProps<T> {
    readonly options: SliderSelectOption<T>[];
    readonly value: T;
    readonly onValueChange: (value: T) => void;
    readonly className?: string;
}
export declare const RawSliderSelect: <T extends string | number>(props: SliderSelectProps<T>) => JSX.Element;
export declare const SliderSelect: <T extends string | number>(props: SliderSelectProps<T>) => JSX.Element;
