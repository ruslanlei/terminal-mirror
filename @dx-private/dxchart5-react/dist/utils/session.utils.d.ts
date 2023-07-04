/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { HighlightType } from '@dx-private/dxchart5-light/dist/chart/components/highlights/highlights.model';
import { Candle } from '@dx-private/dxchart5-light/dist/chart/model/candle.model';
import { TradingSession, TradingSessionsProvider } from '../providers/sessions/trading-sessions-provider';
export declare const generateSessions: (tradingSessionsProvider: TradingSessionsProvider, options: {
    filter: HighlightType[];
    tradingHours?: string;
    candles: Candle[];
    symbol: string;
    from?: number;
    to?: number;
}) => Promise<Record<HighlightType, TradingSession[]>>;
/**
 * Generates sessions limited to @param to and filters them. In other words - if @param to is in the middle of the session,
 * the session will be limited to this parameter
 */
export declare const generateSessionsStrict: (provider: TradingSessionsProvider, from: number, to: number, options: {
    tradingHours: string;
    candles: Candle[];
    period: number;
    symbol: string;
    filter: string[];
}) => Promise<TradingSession[]>;
