/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { TradingSessionsProvider } from './trading-sessions-provider';
export interface DxFeedScheduleOptions {
    readonly feedURL: string;
}
export declare const DEFAULT_OPTIONS: DxFeedScheduleOptions;
export declare const createDefaultTradingSessionsProvider: (initOptions?: DxFeedScheduleOptions) => TradingSessionsProvider;
