/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React from 'react';
export interface RightOffsetResizerComponentProps {
    readonly visible: boolean;
    readonly maxOrderWidth: number;
    readonly initialRightOffset: number;
    readonly onResizerDrag: (deltaX: number) => void;
    readonly onResizerHover: () => void;
    readonly chartWidth: number;
    readonly yAxisWidth: number;
    readonly buttonRef: React.RefObject<HTMLButtonElement>;
    readonly isVisible: boolean;
    readonly canvasHeight: number;
}
export declare const RightOffsetResizerComponent: React.FC<RightOffsetResizerComponentProps>;
