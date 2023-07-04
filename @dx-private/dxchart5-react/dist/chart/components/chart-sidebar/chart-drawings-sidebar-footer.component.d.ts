/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React from 'react';
import { ButtonsState, SidebarFooterButtonType } from './chart-sidebar.model';
export interface DrawingsSidebarFooterProps {
    readonly buttonsState: ButtonsState;
    readonly expanded: boolean;
    readonly onButtonClick: (type: SidebarFooterButtonType) => void;
}
export declare const DrawingsSidebarFooter: React.NamedExoticComponent<DrawingsSidebarFooterProps>;
