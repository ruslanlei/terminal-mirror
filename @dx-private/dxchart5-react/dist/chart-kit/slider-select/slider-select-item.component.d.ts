/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { ReactNode } from 'react';
export interface SliderSelectItemProps<T> {
    readonly value: T;
    readonly isActive: boolean;
    readonly icon?: JSX.Element;
    readonly onItemSelect: (value: T) => void;
    readonly children?: ReactNode;
    readonly className?: string;
}
export declare const SliderSelectItem: <T extends string | number>(props: SliderSelectItemProps<T>) => JSX.Element;
