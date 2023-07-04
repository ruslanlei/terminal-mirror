/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React from 'react';
export interface ColorPickerColorItemTestIds {
    readonly colorButtonPalette?: string;
}
export interface ColorPickerColorItemProps {
    readonly isActive: boolean;
    readonly isCustomOpacity: boolean;
    readonly isCurrentColorDefault: boolean;
    readonly color: string;
    readonly idx: number;
    readonly portal: HTMLElement;
    readonly testIds?: ColorPickerColorItemTestIds;
}
export declare const ColorPickerColorItem: React.MemoExoticComponent<(props: ColorPickerColorItemProps) => JSX.Element>;
