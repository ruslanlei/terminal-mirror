type Nullable<T> = T | null | undefined
export declare namespace com.devexperts.dxst {
    class DxStudies<T extends com.devexperts.dxst.api.CandleDataItem> {
        constructor(maxElements: number, candles: Array<T>);
        get dataHolder(): any/* com.devexperts.dxst.api.CandleDataStore<T> */;
        set dataHolder(value: any/* com.devexperts.dxst.api.CandleDataStore<T> */);
        createStudy(id: string, params: Array<com.devexperts.dxst.api.StudyParam>): com.devexperts.dxst.api.Study;
        addCandleItem(item: T): void;
        addCandleItems(items: Array<T>): void;
        setTradingSessions(sessions: Array<com.devexperts.dxst.api.TradingSessionData>): void;
        setETHSessions(sessions: Array<com.devexperts.dxst.api.TradingSessionData>): void;
    }
}
export declare namespace com.devexperts.dxst.api {
    interface CandleDataItem extends com.devexperts.dxst.api.TradeDataItem {
        readonly isVisible: boolean;
        readonly open: number;
        readonly high: number;
        readonly low: number;
        readonly close: number;
        readonly volume: number;
        readonly impVolatility: Nullable<number>;
        readonly vwap: Nullable<number>;
        time: number;
        readonly __doNotUseOrImplementIt: {
            readonly "com.devexperts.dxst.api.CandleDataItem": unique symbol;
        } & com.devexperts.dxst.api.TradeDataItem["__doNotUseOrImplementIt"];
    }
}
export declare namespace com.devexperts.dxst.api {
    interface IFunction /* extends com.devexperts.dxst.api.ChangeListener */ {
        calculateAt(index: number): number;
        readonly childFunctions: any/* kotlin.collections.Collection<com.devexperts.dxst.api.IFunction> */;
        readonly ownPastOffset: number;
        readonly prefetchSize: number;
        readonly __doNotUseOrImplementIt: {
            readonly "com.devexperts.dxst.api.IFunction": unique symbol;
        };
    }
}
export declare namespace com.devexperts.dxst.api {
    class Study /* implements com.devexperts.dxst.api.ChangeListener */ {
        constructor(lineFunctions: any/* kotlin.collections.List<com.devexperts.dxst.api.IFunction> */, dataItems: any/* com.devexperts.dxst.api.DataItemsView */, pastOffset: number, expansionSize: number, prefetchSize: number, aggregationType: any/* com.devexperts.dxst.api.AggregationTypeEnum */, isOnlyLastAggregatedPeriod: boolean);
        get pastOffset(): number;
        get expansionSize(): number;
        get prefetchSize(): number;
        get aggregationType(): any/* com.devexperts.dxst.api.AggregationTypeEnum */;
        get isOnlyLastAggregatedPeriod(): boolean;
        get linesNumber(): number;
        getLine(index: number): com.devexperts.dxst.api.IFunction;
        calculateAll(): Array<Nullable<Float64Array>>;
        calculateAt(index: number): Float64Array;
        setCalculationOffset(offset: number): void;
        dispose(): void;
        static get Companion(): {
            maxValue(functions: any/* kotlin.collections.List<com.devexperts.dxst.api.IFunction> */, calculator: any/* com.devexperts.dxst.compatibility.Function<com.devexperts.dxst.api.IFunction, number> */): number;
            getOverallPastOffset(_function: com.devexperts.dxst.api.IFunction): number;
            create(builder: any/* com.devexperts.dxst.api.StudyBuilder */, dataItems: any/* com.devexperts.dxst.api.TradeDataHolder<com.devexperts.dxst.api.TradeDataItem> */, params: any/* kotlin.collections.Map<string, any> */): com.devexperts.dxst.api.Study;
        };
    }
}
export declare namespace com.devexperts.dxst.api {
    class StudyParam {
        constructor(key: string, value: any);
        get key(): string;
        get value(): any;
        set value(value: any);
        static get Companion(): {
            of(key: string, value: any): com.devexperts.dxst.api.StudyParam;
        };
    }
}
export declare namespace com.devexperts.dxst.api {
    interface TradeDataItem {
        readonly open: number;
        readonly high: number;
        readonly low: number;
        readonly close: number;
        readonly volume: number;
        readonly impVolatility: Nullable<number>;
        readonly vwap: Nullable<number>;
        time: number;
        readonly __doNotUseOrImplementIt: {
            readonly "com.devexperts.dxst.api.TradeDataItem": unique symbol;
        };
    }
}
export declare namespace com.devexperts.dxst.api {
    interface TradingSessionData {
        readonly from: number;
        readonly to: number;
        readonly high: Nullable<number>;
        readonly low: Nullable<number>;
        readonly __doNotUseOrImplementIt: {
            readonly "com.devexperts.dxst.api.TradingSessionData": unique symbol;
        };
    }
}
export as namespace dxstudies;