/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React from 'react';
import { WithTooltipProps } from '../../Tooltip/WithTooltip';
import { CKMenuItemProps } from '../MenuItem.component';
export interface CKMenuItemWithTooltipProps extends CKMenuItemProps, Omit<WithTooltipProps, 'children' | 'disabled'> {
    readonly disableTooltip: boolean;
}
export declare const MenuItemWithTooltip: React.NamedExoticComponent<CKMenuItemWithTooltipProps>;
