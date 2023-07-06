/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React from 'react';
import { OrderSide } from '../../../../model/order.model';
export interface SideProps {
    readonly side: OrderSide;
    readonly className?: string;
}
export declare const Side: React.NamedExoticComponent<SideProps>;
export declare const renderSide: (side: OrderSide) => JSX.Element;
