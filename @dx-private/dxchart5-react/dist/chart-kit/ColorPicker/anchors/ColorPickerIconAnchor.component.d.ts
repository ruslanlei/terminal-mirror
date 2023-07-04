/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import * as React from 'react';
import { CKDropdownAnchorProps } from '../../Dropdown/Dropdown';
export type ColorPickerAnchorProps = CKDropdownAnchorProps<{
    readonly color: string;
    readonly opacity: number;
    readonly disabled?: boolean;
    readonly ariaLabelledBy?: string;
    readonly ariaLabel?: string;
}>;
export declare const ColorPickerIconAnchor: React.MemoExoticComponent<React.ForwardRefExoticComponent<Pick<ColorPickerAnchorProps, "children" | "key" | "className" | "onKeyDown" | "onClick" | "additionalProps"> & React.RefAttributes<HTMLButtonElement>>>;
