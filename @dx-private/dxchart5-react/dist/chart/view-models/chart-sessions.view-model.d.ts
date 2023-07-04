/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { HighlightType } from '@dx-private/dxchart5-light/dist/chart/components/highlights/highlights.model';
import { Candle } from '@dx-private/dxchart5-light/dist/chart/model/candle.model';
import { Sink } from '../../context/sink2';
import { SessionType, TradingSession, TradingSessionsProvider } from '../../providers/sessions/trading-sessions-provider';
import { Property } from '../../utils/property.utils';
import { ChartWithModules } from '../components/canvas-chart-renderer/chart-with-modules';
import { AggregationPeriodViewModel } from './aggregation-period.view-model';
import { ChartConfiguratorViewModel } from './chart-configurator.view-model';
import { ChartDataViewModel } from './chart-data.view-model';
export type ChartSessionsType = SessionType;
export type ChartSessionsVMState = Record<ChartSessionsType, TradingSession[]>;
export interface ChartSessionsViewModel {
    readonly sessions: Property<ChartSessionsVMState>;
    readonly nextCandleTimestampOffset: Property<number>;
    readonly changeNextCandleTimestampOffset: (offsetInMs: number) => void;
    readonly generateSessions: (filter: HighlightType[], from: number, to?: number, customCandles?: Candle[]) => Promise<Partial<Record<HighlightType, TradingSession[]>>>;
}
export declare const createChartSessionsViewModel: import("../../context/context2").Context<Record<"chartConfiguratorViewModel", ChartConfiguratorViewModel> & Record<"chartDataViewModel", ChartDataViewModel> & Record<"aggregationPeriodViewModel", AggregationPeriodViewModel> & Record<"chartInstance", ChartWithModules> & Record<"tradingSessionsProvider", TradingSessionsProvider>, Sink<ChartSessionsViewModel>>;
