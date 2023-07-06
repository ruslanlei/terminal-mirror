/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import * as React from 'react';
import { ToolbarPosition } from '../../view-models/drawing.view-model';
export interface DragWrapperProps {
    readonly position: ToolbarPosition;
    readonly drag: (position: ToolbarPosition) => void;
    readonly handle: string;
    readonly children: React.ReactNode;
    readonly bounds?: {
        left?: number;
        right?: number;
        top?: number;
        bottom?: number;
    };
}
declare const DragWrapper: React.MemoExoticComponent<(props: DragWrapperProps) => JSX.Element>;
export default DragWrapper;
