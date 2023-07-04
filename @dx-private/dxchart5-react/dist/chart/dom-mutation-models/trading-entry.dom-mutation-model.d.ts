/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React from 'react';
import { Sink } from '../../context/sink2';
import { OrderEntryViewModel } from '../view-models/trading/order-entry.view-model';
interface TradingEntryDomMutationModel {
    readonly yPosition: React.RefObject<HTMLDivElement>;
}
export declare const createTradingEntryDomMutationModel: import("../../context/context2").Context<Record<"orderEntryVM", OrderEntryViewModel>, Sink<TradingEntryDomMutationModel>>;
export {};
