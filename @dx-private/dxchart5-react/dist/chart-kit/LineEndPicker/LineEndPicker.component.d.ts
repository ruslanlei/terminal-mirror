/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React from 'react';
export declare const lineEndTypes: readonly ["arrow", "line"];
export type LineEndType = (typeof lineEndTypes)[number];
export interface LineEndSelectboxLocalization {
    arrow: string;
    none: string;
}
export interface LineEndSelectboxProps {
    readonly reversed?: boolean;
    readonly selectedType: LineEndType;
    readonly onTypeSelect: (type: LineEndType) => void;
    readonly localization: LineEndSelectboxLocalization;
    readonly className?: string;
    readonly parentEventTarget?: HTMLElement;
}
export declare const LineEndSelectbox: React.FC<LineEndSelectboxProps>;
