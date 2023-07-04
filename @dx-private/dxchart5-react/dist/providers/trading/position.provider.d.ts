/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { Order } from '../../chart/model/order.model';
export interface Position {
    id: string;
    side: 'buy' | 'sell';
    quantity: number;
    price: number;
    pl: number;
}
export interface PositionProvider {
    observePositions(symbol: string, dataCallback: (positions: Position[]) => void): void;
    closePosition(symbol: string, id: string): Promise<void>;
}
export interface InternalPositionProvider extends PositionProvider {
    addPosition(symbol: string, order: Order, instrumentPrice: number): void;
}
