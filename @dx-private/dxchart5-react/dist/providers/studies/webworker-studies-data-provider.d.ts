/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
/// <reference path="../../../typings/@dx-private/dxstudies/dist/dxstudies.d.ts" />
export class DxStudiesDataProvider {
    constructor(chartModel: any, tradingSessionsProvider: any, tradingHoursProvider: any);
    studiesCalculator: import("@dx-private/dxstudies/dxstudies").com.devexperts.dxst.DxStudies;
    fullStudiesCalculator: import("@dx-private/dxstudies/dxstudies").com.devexperts.dxst.DxStudies;
    dxStudyConfigs: {};
    dxStudyCache: {};
    dxStudyDataCache: {};
    firstCandleTimeStamp: number;
    lastCandleTimeStamp: number;
    seriesLengthWithFake: number;
    /**
     * This promise indicates studies calculator init status.
     * Used to synchronize studies calculations, which should happend only after calculators init.
     */
    resolveCalculatorPromise: null;
    calculatorInitStatus: Promise<any>;
    chartModel: null;
    tradingSessionsProvider: null;
    tradingHoursProvider: null;
    initStudiesCalculators(): Promise<void>;
    /**
     * Tricky logic which is intended to optimize studies calculations in case we have only last candle update
     * (or a new candle came)
     * @doc-tags tricky
     */
    updateCalculators(): Promise<void>;
    calculateOnlyLastValues(startIdx: any, lastCandleIdx: any): void;
    addFakeCandleIfNeeded(): void;
    calculateWithDxStudies(config: any): any;
    calculateStudy(config: any): Promise<any>;
    applySessions(th: any, candles: any, candlesWithFake: any): Promise<void>;
}
