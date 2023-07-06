/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { IconsConfig } from '../../../config/icons/icons-config';
import { ButtonsState, SidebarFooterButtonType } from './chart-sidebar.model';
import { SidebarDictionary } from '../../../config/localization/sidebar';
export declare const getSidebarFooterIconByType: (type: SidebarFooterButtonType, iconsConfig: IconsConfig, buttonsState: ButtonsState) => JSX.Element;
export declare const getSidebarFooterButtonName: (type: SidebarFooterButtonType, dictSidebar: SidebarDictionary, buttonsState: ButtonsState) => string;
