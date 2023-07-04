/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React, { ComponentType } from 'react';
import { FontPickerAnchorProps } from './FontPickerAnchor.component';
export interface Font {
    fontSize: string;
}
export type FontPickerValue = string | number;
export interface CKFontPickerProps {
    readonly fonts?: Font[];
    readonly onValueChange: (value: string | number) => void;
    readonly Anchor?: ComponentType<FontPickerAnchorProps>;
    readonly value: string | number;
    readonly className?: string;
    readonly parentEventTarget?: HTMLDivElement;
}
export declare const FontPicker: React.MemoExoticComponent<(props: CKFontPickerProps) => JSX.Element>;
