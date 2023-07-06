/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React from 'react';
import { TradingDictionary } from '../../../../config/localization/trading';
import { OrderEntryType } from '../../../model/order.model';
import { ChartReactConfig } from '../../../../config/chart-react-config';
import { YAxisAlign } from '@dx-private/dxchart5-light/dist/chart/chart.config';
export interface OrderEntryDMProps {
    readonly yPosition: React.RefObject<HTMLDivElement>;
}
export interface OrderEntryProps {
    readonly opened: boolean;
    readonly setOpened: (opened: boolean) => void;
    readonly resetToDefault: () => void;
    readonly type: OrderEntryType;
    readonly quantity: number;
    readonly limitQuantity: number;
    readonly padding: number;
    readonly yAxisAlign: YAxisAlign;
    readonly tradingDict: TradingDictionary;
    readonly onChangeType: (t: OrderEntryType) => void;
    readonly onChangeQuantity: (q: number) => void;
    readonly onCompleteOrderEntry: () => void;
    readonly onCancel: () => void;
    readonly onBuy: () => void;
    readonly onSell: () => void;
    readonly validate?: () => boolean;
    readonly className?: string;
    readonly domMutationProps: OrderEntryDMProps;
    readonly config: ChartReactConfig;
}
export declare const OrderEntry: React.NamedExoticComponent<OrderEntryProps>;
