export class DxStudies<T extends CandleDataItem> {
    createStudy(id: string, params: StudyParam[]): Study;
    addCandleItem(item: T);
    addCandleItems(item: T[]);
    setTradingSessions(sessions: TradingSessionData[]);
}

export class StudyParam {
}

export function of(key: string, value: any): StudyParam;

export class Study {
    getLine(index: number): IFunction;
    calculateAll(): number[][];
}

export function create(id: string, dataItems: TradeDataHolder, params: StudyParam[]): Study;

export interface IFunction {
    calculateAt(index: number): number
}

export interface TradeDataHolder {
}

export interface CandleDataItem extends TradeDataItem {
    isVisible: boolean;
}

export interface TradeDataItem {
    open: number;
    high: number;
    low: number;
    close: number;
    impVolatility: number;
    volume: number;
    vwap: number;
    time: number;
}

export interface TradingSessionData {
    from: number;
    to: number;
}
