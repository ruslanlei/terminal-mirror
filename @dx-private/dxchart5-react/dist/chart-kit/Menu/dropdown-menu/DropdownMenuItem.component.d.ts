/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React, { FC } from 'react';
import { CKMenuItemProps } from '../MenuItem.component';
export interface DropdownMenuItemProps extends CKMenuItemProps {
    readonly icon?: React.ReactNode;
    readonly label: string;
    readonly className?: string;
    readonly testId?: string;
}
export declare const DropdownMenuItem: FC<DropdownMenuItemProps>;
