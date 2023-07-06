/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React from 'react';
import { OrderEntryType } from '../../../model/order.model';
import { TradingDictionary } from '../../../../config/localization/trading';
import { ChartReactConfig } from '../../../../config/chart-react-config';
export interface OrderEntryInputProps {
    readonly type: OrderEntryType;
    readonly quantity: number;
    readonly limitQuantity: number;
    readonly tradingDict: TradingDictionary;
    readonly onTypeChange: (type: OrderEntryType) => void;
    readonly onQuantityChange: (quantity: number) => void;
    readonly onBuy: () => void;
    readonly onSell: () => void;
    readonly className?: string;
    readonly config: ChartReactConfig;
}
export declare const OrderEntryInput: React.NamedExoticComponent<OrderEntryInputProps>;
