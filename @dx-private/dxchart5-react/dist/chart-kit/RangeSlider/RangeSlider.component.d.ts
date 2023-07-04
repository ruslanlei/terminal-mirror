/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React from 'react';
export interface RangeSliderElement {
    readonly key: string | number;
    readonly desc: string;
    readonly value: number;
}
interface RangeSliderProps {
    readonly elements: RangeSliderElement[];
    readonly selectedIdx?: number;
    readonly minIdx?: number;
    readonly maxIdx?: number;
    readonly showLabels?: boolean;
    readonly onValueChange?: (value: number) => void;
}
export declare const RangeSlider: React.MemoExoticComponent<(props: RangeSliderProps) => JSX.Element>;
export {};
