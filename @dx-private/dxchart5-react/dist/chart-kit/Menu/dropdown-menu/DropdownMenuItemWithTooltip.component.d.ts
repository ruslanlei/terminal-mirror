/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { FC } from 'react';
import { DropdownMenuItemProps } from './DropdownMenuItem.component';
import { WithTooltipProps } from '../../Tooltip/WithTooltip';
export interface DropdownMenuItemWithTooltipProps extends DropdownMenuItemProps, Omit<WithTooltipProps, 'children' | 'disabled' | 'label'> {
    readonly disableTooltip: boolean;
}
export declare const DropdownMenuItemWithTooltip: FC<DropdownMenuItemWithTooltipProps>;
