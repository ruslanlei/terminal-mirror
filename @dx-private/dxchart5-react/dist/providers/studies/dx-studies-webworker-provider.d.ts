/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { ChartModel } from '@dx-private/dxchart5-light/dist/chart/components/chart/chart.model';
import { TradingSessionsProvider } from '../sessions/trading-sessions-provider';
import { StudiesDataProvider } from './studies-data-provider';
export declare const createDxStudiesWebWorkerProvider: (chartModel: ChartModel, tradingSessionsProvider: TradingSessionsProvider, tradingHoursProvider: () => string | undefined) => StudiesDataProvider;
