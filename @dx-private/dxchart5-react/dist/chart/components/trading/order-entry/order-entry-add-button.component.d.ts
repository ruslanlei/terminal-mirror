/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React from 'react';
export interface OrderEntryAddBtnProps {
    readonly onClick: () => void;
    readonly className?: string;
}
export declare const OrderEntryAddButton: React.NamedExoticComponent<OrderEntryAddBtnProps>;
