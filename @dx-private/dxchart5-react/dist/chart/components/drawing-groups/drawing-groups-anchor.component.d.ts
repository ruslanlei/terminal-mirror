/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React from 'react';
import { CKSelectboxAnchorProps } from '../../../chart-kit/Selectbox/SelectboxAnchor.component';
export interface DrawingGroupsAnchorProps extends CKSelectboxAnchorProps {
}
export interface AnchorWidths {
    readonly anchorMinWidth: string;
    readonly anchorMaxWidth: string;
    readonly textWidth: string;
}
export declare const DrawingGroupsAnchor: React.MemoExoticComponent<React.ForwardRefExoticComponent<Pick<DrawingGroupsAnchorProps, "value" | "children" | "className" | "tabIndex" | "onKeyDown" | "onClick" | "testId" | "hasMenu" | "isOpened" | "ariaLabel" | "caretIcon" | "prefixIcon" | "valueText" | "isDisabled" | "isCaretIconChanged" | "ariaDescription"> & React.RefAttributes<HTMLButtonElement>>>;
