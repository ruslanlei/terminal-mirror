(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'dxstudies'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'dxstudies'.");
    }
    root.dxstudies = factory(typeof dxstudies === 'undefined' ? {} : dxstudies, this['kotlin-kotlin-stdlib-js-ir']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var toMutableList = kotlin_kotlin.$_$.b1;
  var toString = kotlin_kotlin.$_$.u1;
  var contains = kotlin_kotlin.$_$.z1;
  var protoOf = kotlin_kotlin.$_$.s1;
  var listOf = kotlin_kotlin.$_$.u;
  var classMeta = kotlin_kotlin.$_$.f1;
  var VOID = kotlin_kotlin.$_$.h2;
  var setMetadataFor = kotlin_kotlin.$_$.t1;
  var DoubleCompanionObject_getInstance = kotlin_kotlin.$_$.k;
  var defineProp = kotlin_kotlin.$_$.h1;
  var objectMeta = kotlin_kotlin.$_$.r1;
  var toMutableList_0 = kotlin_kotlin.$_$.a1;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.f;
  var emptyList = kotlin_kotlin.$_$.r;
  var Unit_getInstance = kotlin_kotlin.$_$.m;
  var sortedWith = kotlin_kotlin.$_$.y;
  var equals = kotlin_kotlin.$_$.a2;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.i;
  var Enum = kotlin_kotlin.$_$.b2;
  var interfaceMeta = kotlin_kotlin.$_$.j1;
  var objectCreate = kotlin_kotlin.$_$.q1;
  var first = kotlin_kotlin.$_$.s;
  var binarySearch = kotlin_kotlin.$_$.o;
  var ensureNotNull = kotlin_kotlin.$_$.d2;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.b;
  var toMutableSet = kotlin_kotlin.$_$.c1;
  var removeAll = kotlin_kotlin.$_$.w;
  var toSet = kotlin_kotlin.$_$.d1;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.h;
  var THROW_CCE = kotlin_kotlin.$_$.c2;
  var isInterface = kotlin_kotlin.$_$.l1;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.e;
  var arrayIterator = kotlin_kotlin.$_$.e1;
  var NullPointerException_init_$Create$ = kotlin_kotlin.$_$.j;
  var IntCompanionObject_getInstance = kotlin_kotlin.$_$.l;
  var fillArrayVal = kotlin_kotlin.$_$.i1;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.q;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.a;
  var toDoubleArray = kotlin_kotlin.$_$.z;
  var listOf_0 = kotlin_kotlin.$_$.t;
  var Exception_init_$Create$ = kotlin_kotlin.$_$.g;
  var mutableListOf = kotlin_kotlin.$_$.v;
  var compareTo = kotlin_kotlin.$_$.g1;
  var MutableList = kotlin_kotlin.$_$.n;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.d;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.g2;
  var isFinite = kotlin_kotlin.$_$.e2;
  var isNumber = kotlin_kotlin.$_$.m1;
  var numberToDouble = kotlin_kotlin.$_$.n1;
  var round = kotlin_kotlin.$_$.y1;
  var numberToInt = kotlin_kotlin.$_$.o1;
  var isNaN_0 = kotlin_kotlin.$_$.f2;
  var binarySearch_0 = kotlin_kotlin.$_$.p;
  var setOf = kotlin_kotlin.$_$.x;
  var get_E = kotlin_kotlin.$_$.v1;
  var log = kotlin_kotlin.$_$.x1;
  var isArray = kotlin_kotlin.$_$.k1;
  var abs = kotlin_kotlin.$_$.w1;
  var HashMap_init_$Create$_0 = kotlin_kotlin.$_$.c;
  var numberToLong = kotlin_kotlin.$_$.p1;
  //endregion
  //region block: pre-declaration
  setMetadataFor(DxStudies, 'DxStudies', classMeta);
  setMetadataFor(sam$kotlin_Comparator$0, 'sam$kotlin_Comparator$0', classMeta);
  setMetadataFor(TradeDataItem, 'TradeDataItem', interfaceMeta);
  setMetadataFor(CandleDataItem, 'CandleDataItem', interfaceMeta, VOID, [TradeDataItem]);
  setMetadataFor(CandleImpl, 'CandleImpl', classMeta, VOID, [CandleDataItem]);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(AbstractCandleTradeDataHolder, 'AbstractCandleTradeDataHolder', classMeta);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(AggregationTypeEnum, 'AggregationTypeEnum', classMeta, Enum);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(AverageTypeEnum, 'AverageTypeEnum', classMeta, Enum);
  setMetadataFor(sam$kotlin_Comparator$0_0, 'sam$kotlin_Comparator$0', classMeta);
  setMetadataFor(MergeResult, 'MergeResult', classMeta);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(CandleTradeDataHolder, 'CandleTradeDataHolder', classMeta, AbstractCandleTradeDataHolder);
  setMetadataFor(CandleDataStore, 'CandleDataStore', classMeta, CandleTradeDataHolder);
  setMetadataFor(Changes, 'Changes', classMeta);
  setMetadataFor(DataItemsView, 'DataItemsView', classMeta);
  setMetadataFor(IFunction, 'IFunction', interfaceMeta);
  setMetadataFor(Companion_3, 'Companion', objectMeta);
  setMetadataFor(PriceFieldEnum, 'PriceFieldEnum', classMeta, Enum);
  setMetadataFor(Study$Companion$create$pastOffset$1, VOID, classMeta);
  setMetadataFor(Companion_4, 'Companion', objectMeta);
  setMetadataFor(Study, 'Study', classMeta);
  setMetadataFor(Companion_5, 'Companion', objectMeta);
  setMetadataFor(StudyBuilder, 'StudyBuilder', classMeta);
  setMetadataFor(Companion_6, 'Companion', objectMeta);
  setMetadataFor(StudyParam, 'StudyParam', classMeta);
  setMetadataFor(TradingSessionData, 'TradingSessionData', interfaceMeta);
  setMetadataFor(ADX, 'ADX', classMeta, StudyBuilder);
  setMetadataFor(Companion_7, 'Companion', objectMeta);
  setMetadataFor(ADXR, 'ADXR', classMeta, StudyBuilder);
  setMetadataFor(AccelerationDeceleration, 'AccelerationDeceleration', classMeta, StudyBuilder);
  setMetadataFor(AccumulationDistribution, 'AccumulationDistribution', classMeta, StudyBuilder);
  setMetadataFor(Companion_8, 'Companion', objectMeta);
  setMetadataFor(Aroon, 'Aroon', classMeta, StudyBuilder);
  setMetadataFor(Companion_9, 'Companion', objectMeta);
  setMetadataFor(AroonOscillator, 'AroonOscillator', classMeta, StudyBuilder);
  setMetadataFor(AverageTrueRange, 'AverageTrueRange', classMeta, StudyBuilder);
  setMetadataFor(AwesomeOscillator, 'AwesomeOscillator', classMeta, StudyBuilder);
  setMetadataFor(BollingerBands, 'BollingerBands', classMeta, StudyBuilder);
  setMetadataFor(Companion_10, 'Companion', objectMeta);
  setMetadataFor(CCI, 'CCI', classMeta, StudyBuilder);
  setMetadataFor(Companion_11, 'Companion', objectMeta);
  setMetadataFor(CenterOfGravityOscillator, 'CenterOfGravityOscillator', classMeta, StudyBuilder);
  setMetadataFor(Companion_12, 'Companion', objectMeta);
  setMetadataFor(ChaikinOscillator, 'ChaikinOscillator', classMeta, StudyBuilder);
  setMetadataFor(Companion_13, 'Companion', objectMeta);
  setMetadataFor(ChaikinVolatility, 'ChaikinVolatility', classMeta, StudyBuilder);
  setMetadataFor(ChandeMomentumOscillator, 'ChandeMomentumOscillator', classMeta, StudyBuilder);
  setMetadataFor(CommoditySelection, 'CommoditySelection', classMeta, StudyBuilder);
  setMetadataFor(Comparative, 'Comparative', classMeta, StudyBuilder);
  setMetadataFor(DEMA, 'DEMA', classMeta, StudyBuilder);
  setMetadataFor(DMI, 'DMI', classMeta, StudyBuilder);
  setMetadataFor(Companion_14, 'Companion', objectMeta);
  setMetadataFor(DayOpenClose, 'DayOpenClose', classMeta, StudyBuilder);
  setMetadataFor(DeMarker, 'DeMarker', classMeta, StudyBuilder);
  setMetadataFor(DetrendedPriceOsc, 'DetrendedPriceOsc', classMeta, StudyBuilder);
  setMetadataFor(Companion_15, 'Companion', objectMeta);
  setMetadataFor(DynamicMomentumIndex, 'DynamicMomentumIndex', classMeta, StudyBuilder);
  setMetadataFor(EMA, 'EMA', classMeta, StudyBuilder);
  setMetadataFor(Elder, 'Elder', classMeta, StudyBuilder);
  setMetadataFor(Companion_16, 'Companion', objectMeta);
  setMetadataFor(EnvelopeCommon, 'EnvelopeCommon', classMeta, StudyBuilder);
  setMetadataFor(EnvelopeEMA, 'EnvelopeEMA', classMeta, EnvelopeCommon);
  setMetadataFor(EnvelopeSMA, 'EnvelopeSMA', classMeta, EnvelopeCommon);
  setMetadataFor(EnvelopeSMMA, 'EnvelopeSMMA', classMeta, EnvelopeCommon);
  setMetadataFor(EnvelopeWMA, 'EnvelopeWMA', classMeta, EnvelopeCommon);
  setMetadataFor(Companion_17, 'Companion', objectMeta);
  setMetadataFor(FastStochastic, 'FastStochastic', classMeta, StudyBuilder);
  setMetadataFor(Companion_18, 'Companion', objectMeta);
  setMetadataFor(FibonacciBollingerBands, 'FibonacciBollingerBands', classMeta, StudyBuilder);
  setMetadataFor(ForceIndex, 'ForceIndex', classMeta, StudyBuilder);
  setMetadataFor(Companion_19, 'Companion', objectMeta);
  setMetadataFor(ForecastOscillator, 'ForecastOscillator', classMeta, StudyBuilder);
  setMetadataFor(Companion_20, 'Companion', objectMeta);
  setMetadataFor(FullStochastic, 'FullStochastic', classMeta, StudyBuilder);
  setMetadataFor(Companion_21, 'Companion', objectMeta);
  setMetadataFor(GTRAP, 'GTRAP', classMeta, StudyBuilder);
  setMetadataFor(WilliamsAlligator, 'WilliamsAlligator', classMeta, StudyBuilder);
  setMetadataFor(GatorOscillator, 'GatorOscillator', classMeta, WilliamsAlligator);
  setMetadataFor(HLVolatility, 'HLVolatility', classMeta, StudyBuilder);
  setMetadataFor(Companion_22, 'Companion', objectMeta);
  setMetadataFor(Ichimoku, 'Ichimoku', classMeta, StudyBuilder);
  setMetadataFor(ImpliedVolatility, 'ImpliedVolatility', classMeta, StudyBuilder);
  setMetadataFor(Companion_23, 'Companion', objectMeta);
  setMetadataFor(ImpliedVolatilityGauge, 'ImpliedVolatilityGauge', classMeta, StudyBuilder);
  setMetadataFor(Companion_24, 'Companion', objectMeta);
  setMetadataFor(Inertia, 'Inertia', classMeta, StudyBuilder);
  setMetadataFor(Companion_25, 'Companion', objectMeta);
  setMetadataFor(IntradayMomentumIndex, 'IntradayMomentumIndex', classMeta, StudyBuilder);
  setMetadataFor(KRI, 'KRI', classMeta, StudyBuilder);
  setMetadataFor(KaufmanMovingAverage, 'KaufmanMovingAverage', classMeta, StudyBuilder);
  setMetadataFor(Companion_26, 'Companion', objectMeta);
  setMetadataFor(KeltnerChannels, 'KeltnerChannels', classMeta, StudyBuilder);
  setMetadataFor(LinearRegression, 'LinearRegression', classMeta, StudyBuilder);
  setMetadataFor(Companion_27, 'Companion', objectMeta);
  setMetadataFor(LinearRegressionChannel, 'LinearRegressionChannel', classMeta, StudyBuilder);
  setMetadataFor(Companion_28, 'Companion', objectMeta);
  setMetadataFor(LinearRegressionSlope, 'LinearRegressionSlope', classMeta, StudyBuilder);
  setMetadataFor(Companion_29, 'Companion', objectMeta);
  setMetadataFor(MACD, 'MACD', classMeta, StudyBuilder);
  setMetadataFor(MarketFacilitationIndex, 'MarketFacilitationIndex', classMeta, StudyBuilder);
  setMetadataFor(Companion_30, 'Companion', objectMeta);
  setMetadataFor(MassIndex, 'MassIndex', classMeta, StudyBuilder);
  setMetadataFor(MedianPrice, 'MedianPrice', classMeta, StudyBuilder);
  setMetadataFor(Momentum, 'Momentum', classMeta, StudyBuilder);
  setMetadataFor(Companion_31, 'Companion', objectMeta);
  setMetadataFor(MoneyFlowIndex, 'MoneyFlowIndex', classMeta, StudyBuilder);
  setMetadataFor(NegativeVolumeIndex, 'NegativeVolumeIndex', classMeta, StudyBuilder);
  setMetadataFor(OnBalanceVolume, 'OnBalanceVolume', classMeta, StudyBuilder);
  setMetadataFor(Companion_32, 'Companion', objectMeta);
  setMetadataFor(Oscillator, 'Oscillator', classMeta, StudyBuilder);
  setMetadataFor(Companion_33, 'Companion', objectMeta);
  setMetadataFor(ParabolicSAR, 'ParabolicSAR', classMeta, StudyBuilder);
  setMetadataFor(PercentChange, 'PercentChange', classMeta, StudyBuilder);
  setMetadataFor(Companion_34, 'Companion', objectMeta);
  setMetadataFor(PercentOfResistance, 'PercentOfResistance', classMeta, StudyBuilder);
  setMetadataFor(Companion_35, 'Companion', objectMeta);
  setMetadataFor(PercentagePriceOscillator, 'PercentagePriceOscillator', classMeta, StudyBuilder);
  setMetadataFor(Companion_36, 'Companion', objectMeta);
  setMetadataFor(PivotPoints, 'PivotPoints', classMeta, StudyBuilder);
  setMetadataFor(Companion_37, 'Companion', objectMeta);
  setMetadataFor(PriceChannel, 'PriceChannel', classMeta, StudyBuilder);
  setMetadataFor(Companion_38, 'Companion', objectMeta);
  setMetadataFor(PriceOscillator, 'PriceOscillator', classMeta, StudyBuilder);
  setMetadataFor(PriceVolumeTrend, 'PriceVolumeTrend', classMeta, StudyBuilder);
  setMetadataFor(ROC, 'ROC', classMeta, StudyBuilder);
  setMetadataFor(RankCorrelationIndex, 'RankCorrelationIndex', classMeta, StudyBuilder);
  setMetadataFor(Companion_39, 'Companion', objectMeta);
  setMetadataFor(RelativeStrengthIndex, 'RelativeStrengthIndex', classMeta, StudyBuilder);
  setMetadataFor(RelativeVigorIndex, 'RelativeVigorIndex', classMeta, StudyBuilder);
  setMetadataFor(RelativeVigorIndexSMA, 'RelativeVigorIndexSMA', classMeta, StudyBuilder);
  setMetadataFor(Companion_40, 'Companion', objectMeta);
  setMetadataFor(RelativeVolatilityIndex, 'RelativeVolatilityIndex', classMeta, StudyBuilder);
  setMetadataFor(SMA, 'SMA', classMeta, StudyBuilder);
  setMetadataFor(SMMA, 'SMMA', classMeta, StudyBuilder);
  setMetadataFor(Companion_41, 'Companion', objectMeta);
  setMetadataFor(SROC, 'SROC', classMeta, StudyBuilder);
  setMetadataFor(Companion_42, 'Companion', objectMeta);
  setMetadataFor(STARCBands, 'STARCBands', classMeta, StudyBuilder);
  setMetadataFor(Companion_43, 'Companion', objectMeta);
  setMetadataFor(SchaffTrendCycle, 'SchaffTrendCycle', classMeta, StudyBuilder);
  setMetadataFor(Companion_44, 'Companion', objectMeta);
  setMetadataFor(SlowStochastic, 'SlowStochastic', classMeta, StudyBuilder);
  setMetadataFor(StandardDeviation, 'StandardDeviation', classMeta, StudyBuilder);
  setMetadataFor(Companion_45, 'Companion', objectMeta);
  setMetadataFor(StandardDeviationChannel, 'StandardDeviationChannel', classMeta, StudyBuilder);
  setMetadataFor(Companion_46, 'Companion', objectMeta);
  setMetadataFor(StandardErrorBands, 'StandardErrorBands', classMeta, StudyBuilder);
  setMetadataFor(StdDevVolatility, 'StdDevVolatility', classMeta, StudyBuilder);
  setMetadataFor(Companion_47, 'Companion', objectMeta);
  setMetadataFor(StudyBuilderFactory$1, VOID, classMeta);
  setMetadataFor(StudyBuilderFactory$2, VOID, classMeta);
  setMetadataFor(StudyBuilderFactory$3, VOID, classMeta);
  setMetadataFor(StudyBuilderFactory$4, VOID, classMeta);
  setMetadataFor(StudyBuilderFactory$5, VOID, classMeta);
  setMetadataFor(StudyBuilderFactory$6, VOID, classMeta);
  setMetadataFor(StudyBuilderFactory$7, VOID, classMeta);
  setMetadataFor(StudyBuilderFactory$8, VOID, classMeta);
  setMetadataFor(StudyBuilderFactory$9, VOID, classMeta);
  setMetadataFor(StudyBuilderFactory$10, VOID, classMeta);
  setMetadataFor(StudyBuilderFactory$11, VOID, classMeta);
  setMetadataFor(StudyBuilderFactory$12, VOID, classMeta);
  setMetadataFor(StudyBuilderFactory$13, VOID, classMeta);
  setMetadataFor(StudyBuilderFactory$14, VOID, classMeta);
  setMetadataFor(StudyBuilderFactory$15, VOID, classMeta);
  setMetadataFor(StudyBuilderFactory$16, VOID, classMeta);
  setMetadataFor(StudyBuilderFactory$17, VOID, classMeta);
  setMetadataFor(StudyBuilderFactory$18, VOID, classMeta);
  setMetadataFor(StudyBuilderFactory$19, VOID, classMeta);
  setMetadataFor(StudyBuilderFactory$20, VOID, classMeta);
  setMetadataFor(StudyBuilderFactory$21, VOID, classMeta);
  setMetadataFor(StudyBuilderFactory$22, VOID, classMeta);
  setMetadataFor(StudyBuilderFactory$23, VOID, classMeta);
  setMetadataFor(StudyBuilderFactory$24, VOID, classMeta);
  setMetadataFor(StudyBuilderFactory$25, VOID, classMeta);
  setMetadataFor(StudyBuilderFactory$26, VOID, classMeta);
  setMetadataFor(StudyBuilderFactory$27, VOID, classMeta);
  setMetadataFor(StudyBuilderFactory$28, VOID, classMeta);
  setMetadataFor(StudyBuilderFactory$29, VOID, classMeta);
  setMetadataFor(StudyBuilderFactory$30, VOID, classMeta);
  setMetadataFor(StudyBuilderFactory$31, VOID, classMeta);
  setMetadataFor(StudyBuilderFactory$32, VOID, classMeta);
  setMetadataFor(StudyBuilderFactory$33, VOID, classMeta);
  setMetadataFor(StudyBuilderFactory$34, VOID, classMeta);
  setMetadataFor(StudyBuilderFactory$35, VOID, classMeta);
  setMetadataFor(StudyBuilderFactory$36, VOID, classMeta);
  setMetadataFor(StudyBuilderFactory$37, VOID, classMeta);
  setMetadataFor(StudyBuilderFactory$38, VOID, classMeta);
  setMetadataFor(StudyBuilderFactory$39, VOID, classMeta);
  setMetadataFor(StudyBuilderFactory$40, VOID, classMeta);
  setMetadataFor(StudyBuilderFactory$41, VOID, classMeta);
  setMetadataFor(StudyBuilderFactory$42, VOID, classMeta);
  setMetadataFor(StudyBuilderFactory$43, VOID, classMeta);
  setMetadataFor(StudyBuilderFactory$44, VOID, classMeta);
  setMetadataFor(StudyBuilderFactory$45, VOID, classMeta);
  setMetadataFor(StudyBuilderFactory$46, VOID, classMeta);
  setMetadataFor(StudyBuilderFactory$47, VOID, classMeta);
  setMetadataFor(StudyBuilderFactory$48, VOID, classMeta);
  setMetadataFor(StudyBuilderFactory$49, VOID, classMeta);
  setMetadataFor(StudyBuilderFactory$50, VOID, classMeta);
  setMetadataFor(StudyBuilderFactory$51, VOID, classMeta);
  setMetadataFor(StudyBuilderFactory$52, VOID, classMeta);
  setMetadataFor(StudyBuilderFactory$53, VOID, classMeta);
  setMetadataFor(StudyBuilderFactory$54, VOID, classMeta);
  setMetadataFor(StudyBuilderFactory$55, VOID, classMeta);
  setMetadataFor(StudyBuilderFactory$56, VOID, classMeta);
  setMetadataFor(StudyBuilderFactory$57, VOID, classMeta);
  setMetadataFor(StudyBuilderFactory$58, VOID, classMeta);
  setMetadataFor(StudyBuilderFactory$59, VOID, classMeta);
  setMetadataFor(StudyBuilderFactory$60, VOID, classMeta);
  setMetadataFor(StudyBuilderFactory$61, VOID, classMeta);
  setMetadataFor(StudyBuilderFactory$62, VOID, classMeta);
  setMetadataFor(StudyBuilderFactory$63, VOID, classMeta);
  setMetadataFor(StudyBuilderFactory$64, VOID, classMeta);
  setMetadataFor(StudyBuilderFactory$65, VOID, classMeta);
  setMetadataFor(StudyBuilderFactory$66, VOID, classMeta);
  setMetadataFor(StudyBuilderFactory$67, VOID, classMeta);
  setMetadataFor(StudyBuilderFactory$68, VOID, classMeta);
  setMetadataFor(StudyBuilderFactory$69, VOID, classMeta);
  setMetadataFor(StudyBuilderFactory$70, VOID, classMeta);
  setMetadataFor(StudyBuilderFactory$71, VOID, classMeta);
  setMetadataFor(StudyBuilderFactory$72, VOID, classMeta);
  setMetadataFor(StudyBuilderFactory$73, VOID, classMeta);
  setMetadataFor(StudyBuilderFactory$74, VOID, classMeta);
  setMetadataFor(StudyBuilderFactory$75, VOID, classMeta);
  setMetadataFor(StudyBuilderFactory$76, VOID, classMeta);
  setMetadataFor(StudyBuilderFactory$77, VOID, classMeta);
  setMetadataFor(StudyBuilderFactory$78, VOID, classMeta);
  setMetadataFor(StudyBuilderFactory$79, VOID, classMeta);
  setMetadataFor(StudyBuilderFactory$80, VOID, classMeta);
  setMetadataFor(StudyBuilderFactory$81, VOID, classMeta);
  setMetadataFor(StudyBuilderFactory$82, VOID, classMeta);
  setMetadataFor(StudyBuilderFactory$83, VOID, classMeta);
  setMetadataFor(StudyBuilderFactory$84, VOID, classMeta);
  setMetadataFor(StudyBuilderFactory$85, VOID, classMeta);
  setMetadataFor(StudyBuilderFactory$86, VOID, classMeta);
  setMetadataFor(StudyBuilderFactory$87, VOID, classMeta);
  setMetadataFor(StudyBuilderFactory$88, VOID, classMeta);
  setMetadataFor(StudyBuilderFactory$89, VOID, classMeta);
  setMetadataFor(StudyBuilderFactory$90, VOID, classMeta);
  setMetadataFor(StudyBuilderFactory$91, VOID, classMeta);
  setMetadataFor(StudyBuilderFactory$92, VOID, classMeta);
  setMetadataFor(StudyBuilderFactory$93, VOID, classMeta);
  setMetadataFor(StudyBuilderFactory$94, VOID, classMeta);
  setMetadataFor(StudyBuilderFactory$95, VOID, classMeta);
  setMetadataFor(StudyBuilderFactory$96, VOID, classMeta);
  setMetadataFor(StudyBuilderFactory$97, VOID, classMeta);
  setMetadataFor(StudyBuilderFactory$98, VOID, classMeta);
  setMetadataFor(StudyBuilderFactory$99, VOID, classMeta);
  setMetadataFor(StudyBuilderFactory$100, VOID, classMeta);
  setMetadataFor(StudyBuilderFactory$101, VOID, classMeta);
  setMetadataFor(StudyBuilderFactory$102, VOID, classMeta);
  setMetadataFor(StudyBuilderFactory, 'StudyBuilderFactory', classMeta, Enum);
  setMetadataFor(Companion_48, 'Companion', objectMeta);
  setMetadataFor(SwingAccumulation, 'SwingAccumulation', classMeta, StudyBuilder);
  setMetadataFor(PriceValue, 'PriceValue', classMeta, Enum);
  setMetadataFor(Companion_49, 'Companion', objectMeta);
  setMetadataFor(SwingIndex, 'SwingIndex', classMeta, StudyBuilder);
  setMetadataFor(TDSequential, 'TDSequential', classMeta, StudyBuilder);
  setMetadataFor(TEMA, 'TEMA', classMeta, StudyBuilder);
  setMetadataFor(TMA, 'TMA', classMeta, StudyBuilder);
  setMetadataFor(Companion_50, 'Companion', objectMeta);
  setMetadataFor(TimeSeriesForecast, 'TimeSeriesForecast', classMeta, StudyBuilder);
  setMetadataFor(TripleEMA, 'TripleEMA', classMeta, StudyBuilder);
  setMetadataFor(Companion_51, 'Companion', objectMeta);
  setMetadataFor(TrueStrengthIndex, 'TrueStrengthIndex', classMeta, StudyBuilder);
  setMetadataFor(TypicalPrice, 'TypicalPrice', classMeta, StudyBuilder);
  setMetadataFor(Companion_52, 'Companion', objectMeta);
  setMetadataFor(UltimateOscillator, 'UltimateOscillator', classMeta, StudyBuilder);
  setMetadataFor(VWAP, 'VWAP', classMeta, StudyBuilder);
  setMetadataFor(VerticalHorizontalFilter, 'VerticalHorizontalFilter', classMeta, StudyBuilder);
  setMetadataFor(WMA, 'WMA', classMeta, StudyBuilder);
  setMetadataFor(Companion_53, 'Companion', objectMeta);
  setMetadataFor(WaveTrend, 'WaveTrend', classMeta, StudyBuilder);
  setMetadataFor(Companion_54, 'Companion', objectMeta);
  setMetadataFor(WaveTrendWithCrosses, 'WaveTrendWithCrosses', classMeta, StudyBuilder);
  setMetadataFor(WeightedClose, 'WeightedClose', classMeta, StudyBuilder);
  setMetadataFor(WildersSmoothing, 'WildersSmoothing', classMeta, StudyBuilder);
  setMetadataFor(WilliamsAD, 'WilliamsAD', classMeta, StudyBuilder);
  setMetadataFor(Companion_55, 'Companion', objectMeta);
  setMetadataFor(Companion_56, 'Companion', objectMeta);
  setMetadataFor(WilliamsFractal, 'WilliamsFractal', classMeta, StudyBuilder);
  setMetadataFor(Companion_57, 'Companion', objectMeta);
  setMetadataFor(WilliamsPercentRange, 'WilliamsPercentRange', classMeta, StudyBuilder);
  setMetadataFor(Companion_58, 'Companion', objectMeta);
  setMetadataFor(ZigZag, 'ZigZag', classMeta, StudyBuilder);
  setMetadataFor(MathUtils, 'MathUtils', objectMeta);
  setMetadataFor(AbstractCachingFunction, 'AbstractCachingFunction', classMeta, VOID, [IFunction]);
  setMetadataFor(AbsFunction, 'AbsFunction', classMeta, AbstractCachingFunction);
  setMetadataFor(ArithmeticFunction, 'ArithmeticFunction', classMeta, VOID, [IFunction]);
  setMetadataFor(ArithmeticOperation, 'ArithmeticOperation', classMeta, Enum);
  setMetadataFor(BuyingPressure, 'BuyingPressure', classMeta, AbstractCachingFunction);
  setMetadataFor(CloseLocationValueFunction, 'CloseLocationValueFunction', classMeta, AbstractCachingFunction);
  setMetadataFor(CombineFunction, 'CombineFunction', classMeta, VOID, [IFunction]);
  setMetadataFor(CommonFunctions, 'CommonFunctions', objectMeta);
  setMetadataFor(ConstantFunction, 'ConstantFunction', classMeta, VOID, [IFunction]);
  setMetadataFor(CumulativeSumFunction, 'CumulativeSumFunction', classMeta, AbstractCachingFunction);
  setMetadataFor(CumulativeSumWithinSessionFunction, 'CumulativeSumWithinSessionFunction', classMeta, AbstractCachingFunction);
  setMetadataFor(DiffDivPrevFunction, 'DiffDivPrevFunction', classMeta, AbstractCachingFunction);
  setMetadataFor(DiffPrevFunction, 'DiffPrevFunction', classMeta, AbstractCachingFunction);
  setMetadataFor(DirectionalIndexFunction, 'DirectionalIndexFunction', classMeta, AbstractCachingFunction);
  setMetadataFor(DirectionalMovementFunction, 'DirectionalMovementFunction', classMeta, AbstractCachingFunction);
  setMetadataFor(DisplacementFunction, 'DisplacementFunction', classMeta, VOID, [IFunction]);
  setMetadataFor(Companion_59, 'Companion', objectMeta);
  setMetadataFor(Trend, 'Trend', classMeta, Enum);
  setMetadataFor(DorseyTrendFunction, 'DorseyTrendFunction', classMeta, AbstractCachingFunction);
  setMetadataFor(ETHPriceSourceFunction, 'ETHPriceSourceFunction', classMeta, VOID, [IFunction]);
  setMetadataFor(Equals, 'Equals', classMeta, AbstractCachingFunction);
  setMetadataFor(Floor, 'Floor', classMeta, AbstractCachingFunction);
  setMetadataFor(BackRangeDependentFunction, 'BackRangeDependentFunction', classMeta, AbstractCachingFunction);
  setMetadataFor(HighestFunction, 'HighestFunction', classMeta, BackRangeDependentFunction);
  setMetadataFor(HighestAllFunction, 'HighestAllFunction', classMeta, HighestFunction);
  setMetadataFor(HighestHighPeriod, 'HighestHighPeriod', classMeta, BackRangeDependentFunction);
  setMetadataFor(IfFunction, 'IfFunction', classMeta, AbstractCachingFunction);
  setMetadataFor(IntradaySumFunction, 'IntradaySumFunction', classMeta, BackRangeDependentFunction);
  setMetadataFor(LimitFunction, 'LimitFunction', classMeta, VOID, [IFunction]);
  setMetadataFor(LinearDeviationFunction, 'LinearDeviationFunction', classMeta, BackRangeDependentFunction);
  setMetadataFor(LinearRegressionCurveFunction, 'LinearRegressionCurveFunction', classMeta, BackRangeDependentFunction);
  setMetadataFor(LnDivPrevFunction, 'LnDivPrevFunction', classMeta, AbstractCachingFunction);
  setMetadataFor(LogarithmFunction, 'LogarithmFunction', classMeta, AbstractCachingFunction);
  setMetadataFor(LowestFunction, 'LowestFunction', classMeta, BackRangeDependentFunction);
  setMetadataFor(LowestLowPeriod, 'LowestLowPeriod', classMeta, BackRangeDependentFunction);
  setMetadataFor(MapFunction, 'MapFunction', classMeta, VOID, [IFunction]);
  setMetadataFor(MapToOneFunction, 'MapToOneFunction', classMeta, VOID, [IFunction]);
  setMetadataFor(MaxValueFunction, 'MaxValueFunction', classMeta, AbstractCachingFunction);
  setMetadataFor(MinValueFunction, 'MinValueFunction', classMeta, AbstractCachingFunction);
  setMetadataFor(MoneyFlowFunction, 'MoneyFlowFunction', classMeta, AbstractCachingFunction);
  setMetadataFor(MovingAverageExponential, 'MovingAverageExponential', classMeta, AbstractCachingFunction);
  setMetadataFor(MovingAverageSimple, 'MovingAverageSimple', classMeta, BackRangeDependentFunction);
  setMetadataFor(MovingAverageSmoothed, 'MovingAverageSmoothed', classMeta, AbstractCachingFunction);
  setMetadataFor(MovingAverageWeighted, 'MovingAverageWeighted', classMeta, BackRangeDependentFunction);
  setMetadataFor(NegativeVolumeIndexFunction, 'NegativeVolumeIndexFunction', classMeta, AbstractCachingFunction);
  setMetadataFor(PredicateFunction, 'PredicateFunction', classMeta, VOID, [IFunction]);
  setMetadataFor(PriceAggregatedSourceFunction, 'PriceAggregatedSourceFunction', classMeta, VOID, [IFunction]);
  setMetadataFor(PriceSourceFunction, 'PriceSourceFunction', classMeta, VOID, [IFunction]);
  setMetadataFor(Companion_60, 'Companion', objectMeta);
  setMetadataFor(RelativeVolatilityFunction, 'RelativeVolatilityFunction', classMeta, AbstractCachingFunction);
  setMetadataFor(SeriesCrossingPoints, 'SeriesCrossingPoints', classMeta, VOID, [IFunction]);
  setMetadataFor(SessionSet, 'SessionSet', classMeta, Enum);
  setMetadataFor(SignFunction, 'SignFunction', classMeta, AbstractCachingFunction);
  setMetadataFor(SimpleWeightedSumFunction, 'SimpleWeightedSumFunction', classMeta, BackRangeDependentFunction);
  setMetadataFor(StandardDeviationFunction, 'StandardDeviationFunction', classMeta, BackRangeDependentFunction);
  setMetadataFor(StandardErrorOfEstimationFunction, 'StandardErrorOfEstimationFunction', classMeta, BackRangeDependentFunction);
  setMetadataFor(SumFunction, 'SumFunction', classMeta, BackRangeDependentFunction);
  setMetadataFor(TrueRangeFunction, 'TrueRangeFunction', classMeta, AbstractCachingFunction);
  setMetadataFor(WildersAverage, 'WildersAverage', classMeta, AbstractCachingFunction);
  setMetadataFor(WindowFunction, 'WindowFunction', classMeta, VOID, [IFunction]);
  setMetadataFor(ZeroFunction, 'ZeroFunction', classMeta, ConstantFunction);
  setMetadataFor(DynamicMomentumIndexFunction, 'DynamicMomentumIndexFunction', classMeta, AbstractCachingFunction);
  setMetadataFor(FractalOperation, 'FractalOperation', classMeta, Enum);
  setMetadataFor(KaufmanNamaFunction, 'KaufmanNamaFunction', classMeta, AbstractCachingFunction);
  setMetadataFor(LinearRegressionFunction, 'LinearRegressionFunction', classMeta, AbstractCachingFunction);
  setMetadataFor(Extremum, 'Extremum', classMeta);
  setMetadataFor(ParabolicSarFunction, 'ParabolicSarFunction', classMeta, AbstractCachingFunction);
  setMetadataFor(SchaffTrendFrac, 'SchaffTrendFrac', classMeta, AbstractCachingFunction);
  setMetadataFor(SpearmansRho, 'SpearmansRho', classMeta, BackRangeDependentFunction);
  setMetadataFor(SwingIndexRatio, 'SwingIndexRatio', classMeta, AbstractCachingFunction);
  setMetadataFor(WilliamsADFunction, 'WilliamsADFunction', classMeta, AbstractCachingFunction);
  setMetadataFor(WilliamsFractalFilter, 'WilliamsFractalFilter', classMeta, AbstractCachingFunction);
  setMetadataFor(Extremum_0, 'Extremum', classMeta);
  setMetadataFor(ZigZagFunction, 'ZigZagFunction', classMeta, AbstractCachingFunction);
  setMetadataFor(CountdownFunction, 'CountdownFunction', classMeta, AbstractCachingFunction);
  setMetadataFor(PerfectCountdownFunction, 'PerfectCountdownFunction', classMeta, AbstractCachingFunction);
  setMetadataFor(PerfectSetupFunction, 'PerfectSetupFunction', classMeta, VOID, [IFunction]);
  setMetadataFor(TDBuySell, 'TDBuySell', classMeta, Enum);
  setMetadataFor(PriceFlipFunction, 'PriceFlipFunction', classMeta, VOID, [IFunction]);
  setMetadataFor(SetupFunction, 'SetupFunction', classMeta, AbstractCachingFunction);
  setMetadataFor(TDSupportResistance, 'TDSupportResistance', classMeta, Enum);
  setMetadataFor(SupportResistanceFunction, 'SupportResistanceFunction', classMeta, AbstractCachingFunction);
  setMetadataFor(sam$kotlin_Comparator$0_1, 'sam$kotlin_Comparator$0', classMeta);
  setMetadataFor(sam$kotlin_Comparator$0_2, 'sam$kotlin_Comparator$0', classMeta);
  setMetadataFor(WilliamsFractalUtils, 'WilliamsFractalUtils', objectMeta);
  //endregion
  function mutableList($this, items) {
    return toMutableList(items);
  }
  function updateStudyParams($this, params) {
    // Inline function 'kotlin.collections.forEach' call
    var indexedObject = params;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'com.devexperts.dxst.DxStudies.updateStudyParams.<anonymous>' call
      var key = element.key;
      if (contains(key, 'average') ? !(key === 'averageLength') : false) {
        element.value = Companion_getInstance_1().fromTitle(toString(element.value));
      }
      if ((contains(key, 'price') ? true : key === 'high') ? true : key === 'low') {
        element.value = Companion_getInstance_3().o7(toString(element.value));
      }
      if (contains(key, 'aggregation')) {
        element.value = Companion_getInstance_0().o7(toString(element.value));
      }
    }
  }
  function DxStudies(maxElements, candles) {
    var timeCandles = mutableList(this, candles.slice());
    this.dataHolder = new CandleDataStore(maxElements, timeCandles);
  }
  protoOf(DxStudies).p7 = function (_set____db54di) {
    this.dataHolder = _set____db54di;
  };
  protoOf(DxStudies).q7 = function () {
    return this.dataHolder;
  };
  protoOf(DxStudies).createStudy = function (id, params) {
    updateStudyParams(this, params);
    var create = Companion_getInstance_4().r7(id, this.dataHolder, params);
    this.dataHolder.z7(create);
    if (!(this.dataHolder.a8() === 0)) {
      create.d8(new Changes(0, 0, this.dataHolder.a8()));
    }
    return create;
  };
  protoOf(DxStudies).addCandleItem = function (item) {
    this.dataHolder.mergeCandles(mutableList(this, [item]));
  };
  protoOf(DxStudies).addCandleItems = function (items) {
    this.dataHolder.mergeCandles(mutableList(this, items.slice()));
  };
  protoOf(DxStudies).setTradingSessions = function (sessions) {
    this.dataHolder.e8(listOf(sessions.slice()));
  };
  protoOf(DxStudies).setETHSessions = function (sessions) {
    this.dataHolder.f8(listOf(sessions.slice()));
  };
  function sam$kotlin_Comparator$0(function_0) {
    this.g8_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0).h8 = function (a, b) {
    return this.g8_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).compare = function (a, b) {
    return this.h8(a, b);
  };
  function AbstractCandleTradeDataHolder$Companion$SESSION_START$lambda(s1, s2) {
    return s1.getFrom() < s2.getFrom() ? -1 : s1.getFrom() > s2.getFrom() ? 1 : 0;
  }
  function getAggregatedCandle($this, fromDateTime, toDateTime) {
    var open = null;
    var high = null;
    var low = null;
    var close = null;
    var tmp0_iterator = $this.s7_1.c();
    while (tmp0_iterator.d()) {
      var c = tmp0_iterator.e();
      var containsUpper = toDateTime - 1;
      var containsArg = c.getTime();
      if (fromDateTime <= containsArg ? containsArg <= containsUpper : false) {
        if (open == null ? true : open.getTime() > c.getTime()) {
          open = c;
        }
        if (high == null ? true : high.getHigh() < c.getHigh()) {
          high = c;
        }
        if (low == null ? true : low.getLow() > c.getLow()) {
          low = c;
        }
        if (close == null ? true : close.getTime() < c.getTime()) {
          close = c;
        }
      }
    }
    DoubleCompanionObject_getInstance();
    var openValue = NaN;
    DoubleCompanionObject_getInstance();
    var highValue = NaN;
    DoubleCompanionObject_getInstance();
    var lowValue = NaN;
    DoubleCompanionObject_getInstance();
    var closeValue = NaN;
    if (!(open == null))
      openValue = open.getOpen();
    if (!(high == null))
      highValue = high.getHigh();
    if (!(low == null))
      lowValue = low.getLow();
    if (!(close == null))
      closeValue = close.getClose();
    var tmp = openValue;
    var tmp_0 = highValue;
    var tmp_1 = lowValue;
    var tmp_2 = closeValue;
    DoubleCompanionObject_getInstance();
    return new CandleImpl(tmp, tmp_0, tmp_1, tmp_2, NaN, 0.0, 0.0, fromDateTime, true);
  }
  function CandleImpl(_open, _high, _low, _close, _impVolatility, _volume, _vwap, _time, _isVisible) {
    var tmp;
    if (_open === VOID) {
      DoubleCompanionObject_getInstance();
      tmp = NaN;
    } else {
      tmp = _open;
    }
    _open = tmp;
    var tmp_0;
    if (_high === VOID) {
      DoubleCompanionObject_getInstance();
      tmp_0 = NaN;
    } else {
      tmp_0 = _high;
    }
    _high = tmp_0;
    var tmp_1;
    if (_low === VOID) {
      DoubleCompanionObject_getInstance();
      tmp_1 = NaN;
    } else {
      tmp_1 = _low;
    }
    _low = tmp_1;
    var tmp_2;
    if (_close === VOID) {
      DoubleCompanionObject_getInstance();
      tmp_2 = NaN;
    } else {
      tmp_2 = _close;
    }
    _close = tmp_2;
    var tmp_3;
    if (_impVolatility === VOID) {
      DoubleCompanionObject_getInstance();
      tmp_3 = NaN;
    } else {
      tmp_3 = _impVolatility;
    }
    _impVolatility = tmp_3;
    var tmp_4;
    if (_volume === VOID) {
      DoubleCompanionObject_getInstance();
      tmp_4 = NaN;
    } else {
      tmp_4 = _volume;
    }
    _volume = tmp_4;
    var tmp_5;
    if (_vwap === VOID) {
      DoubleCompanionObject_getInstance();
      tmp_5 = NaN;
    } else {
      tmp_5 = _vwap;
    }
    _vwap = tmp_5;
    _time = _time === VOID ? 0.0 : _time;
    _isVisible = _isVisible === VOID ? true : _isVisible;
    this.i8_1 = _open;
    this.j8_1 = _high;
    this.k8_1 = _low;
    this.l8_1 = _close;
    this.m8_1 = _impVolatility;
    this.n8_1 = _volume;
    this.o8_1 = _vwap;
    this.p8_1 = _time;
    this.q8_1 = _isVisible;
  }
  protoOf(CandleImpl).r8 = function () {
    return this.i8_1;
  };
  protoOf(CandleImpl).getOpen = function () {
    return this.r8();
  };
  protoOf(CandleImpl).s8 = function () {
    return this.j8_1;
  };
  protoOf(CandleImpl).getHigh = function () {
    return this.s8();
  };
  protoOf(CandleImpl).t8 = function () {
    return this.k8_1;
  };
  protoOf(CandleImpl).getLow = function () {
    return this.t8();
  };
  protoOf(CandleImpl).u8 = function () {
    return this.l8_1;
  };
  protoOf(CandleImpl).getClose = function () {
    return this.u8();
  };
  protoOf(CandleImpl).v8 = function () {
    return this.m8_1;
  };
  protoOf(CandleImpl).getImpVolatility = function () {
    return this.v8();
  };
  protoOf(CandleImpl).w8 = function () {
    return this.n8_1;
  };
  protoOf(CandleImpl).getVolume = function () {
    return this.w8();
  };
  protoOf(CandleImpl).x8 = function () {
    return this.o8_1;
  };
  protoOf(CandleImpl).getVwap = function () {
    return this.x8();
  };
  protoOf(CandleImpl).y8 = function (_set____db54di) {
    this.p8_1 = _set____db54di;
  };
  protoOf(CandleImpl).setTime = function (_set____db54di) {
    return this.y8(_set____db54di);
  };
  protoOf(CandleImpl).z8 = function () {
    return this.p8_1;
  };
  protoOf(CandleImpl).getTime = function () {
    return this.z8();
  };
  protoOf(CandleImpl).a9 = function () {
    return this.q8_1;
  };
  protoOf(CandleImpl).getIsVisible = function () {
    return this.a9();
  };
  defineProp(protoOf(CandleImpl), 'open', function () {
    return this.r8();
  });
  defineProp(protoOf(CandleImpl), 'high', function () {
    return this.s8();
  });
  defineProp(protoOf(CandleImpl), 'low', function () {
    return this.t8();
  });
  defineProp(protoOf(CandleImpl), 'close', function () {
    return this.u8();
  });
  defineProp(protoOf(CandleImpl), 'impVolatility', function () {
    return this.v8();
  });
  defineProp(protoOf(CandleImpl), 'volume', function () {
    return this.w8();
  });
  defineProp(protoOf(CandleImpl), 'vwap', function () {
    return this.x8();
  });
  defineProp(protoOf(CandleImpl), 'time', function () {
    return this.z8();
  }, function (value) {
    this.y8(value);
  });
  defineProp(protoOf(CandleImpl), 'isVisible', function () {
    return this.a9();
  });
  function Companion() {
    Companion_instance = this;
    var tmp = this;
    var tmp_0 = AbstractCandleTradeDataHolder$Companion$SESSION_START$lambda;
    tmp.b9_1 = new sam$kotlin_Comparator$0(tmp_0);
  }
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function AbstractCandleTradeDataHolder(candles) {
    Companion_getInstance();
    this.s7_1 = toMutableList_0(candles);
    this.t7_1 = false;
    this.u7_1 = -1;
    this.v7_1 = -1;
    this.w7_1 = LinkedHashSet_init_$Create$();
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.listOf' call
    tmp$ret$0 = emptyList();
    tmp.x7_1 = tmp$ret$0;
    var tmp_0 = this;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.listOf' call
    tmp$ret$1 = emptyList();
    tmp_0.y7_1 = tmp$ret$1;
  }
  protoOf(AbstractCandleTradeDataHolder).e8 = function (value) {
    this.x7_1 = sortedWith(value, Companion_getInstance().b9_1);
  };
  protoOf(AbstractCandleTradeDataHolder).c9 = function () {
    return this.x7_1;
  };
  protoOf(AbstractCandleTradeDataHolder).f8 = function (value) {
    this.y7_1 = sortedWith(value, Companion_getInstance().b9_1);
  };
  protoOf(AbstractCandleTradeDataHolder).d9 = function () {
    return this.y7_1;
  };
  protoOf(AbstractCandleTradeDataHolder).a8 = function () {
    var lastIndex = this.e9();
    var tmp;
    if (lastIndex < 0) {
      tmp = 0;
    } else {
      tmp = (lastIndex - this.f9() | 0) + 1 | 0;
    }
    return tmp;
  };
  protoOf(AbstractCandleTradeDataHolder).z7 = function (changeListener) {
    this.w7_1.a(changeListener);
  };
  protoOf(AbstractCandleTradeDataHolder).addChangeListener = function (changeListener) {
    return this.z7(changeListener);
  };
  protoOf(AbstractCandleTradeDataHolder).g9 = function (changeListener) {
    this.w7_1.p2(changeListener);
  };
  protoOf(AbstractCandleTradeDataHolder).removeChangeListener = function (changeListener) {
    return this.g9(changeListener);
  };
  protoOf(AbstractCandleTradeDataHolder).h9 = function (index) {
    return this.s7_1.g(index);
  };
  protoOf(AbstractCandleTradeDataHolder).getTradeItem = function (index) {
    return this.h9(index);
  };
  protoOf(AbstractCandleTradeDataHolder).f9 = function () {
    if (this.u7_1 < 0) {
      var inductionVariable = 0;
      var last = this.s7_1.f() - 1 | 0;
      if (inductionVariable <= last)
        $l$loop: do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (this.s7_1.g(i).getIsVisible()) {
            this.u7_1 = i;
            break $l$loop;
          }
        }
         while (inductionVariable <= last);
    }
    return this.u7_1;
  };
  protoOf(AbstractCandleTradeDataHolder).firstVisibleIndex = function () {
    return this.f9();
  };
  protoOf(AbstractCandleTradeDataHolder).e9 = function () {
    if (this.v7_1 < 0) {
      var inductionVariable = this.s7_1.f() - 1 | 0;
      if (0 <= inductionVariable)
        $l$loop: do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + -1 | 0;
          if (this.s7_1.g(i).getIsVisible()) {
            this.v7_1 = i;
            break $l$loop;
          }
        }
         while (0 <= inductionVariable);
    }
    return this.v7_1;
  };
  protoOf(AbstractCandleTradeDataHolder).i9 = function () {
    return this.s7_1.f();
  };
  protoOf(AbstractCandleTradeDataHolder).size = function () {
    return this.i9();
  };
  protoOf(AbstractCandleTradeDataHolder).j9 = function (index, type, displace) {
    var candle = this.s7_1.g(index);
    var fromDateTime = this.getAggregationStamp(candle.getTime(), type, displace);
    var toDateTime = this.getAggregationStamp(candle.getTime(), type, displace + 1 | 0);
    if (this.t7_1 ? !this.s7_1.h() : false) {
      var lastCandle = this.s7_1.g(this.s7_1.f() - 1 | 0);
      var lastFromDateTime = this.getAggregationStamp(lastCandle.getTime(), type, displace);
      if (!(fromDateTime === lastFromDateTime)) {
        return new CandleImpl();
      }
    }
    return getAggregatedCandle(this, fromDateTime, toDateTime);
  };
  protoOf(AbstractCandleTradeDataHolder).getAggregatedTradeItem = function (index, type, displace) {
    return this.j9(index, type, displace);
  };
  protoOf(AbstractCandleTradeDataHolder).k9 = function (changes) {
    var tmp0_iterator = this.w7_1.c();
    while (tmp0_iterator.d()) {
      var changeListener = tmp0_iterator.e();
      changeListener.dataChanged(changes);
    }
  };
  var AggregationTypeEnum_DEFAULT_instance;
  var AggregationTypeEnum_DAY_instance;
  var AggregationTypeEnum_WEEK_instance;
  var AggregationTypeEnum_MONTH_instance;
  function Companion_0() {
    Companion_instance_0 = this;
  }
  protoOf(Companion_0).o7 = function (title) {
    var indexedObject = values();
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var type = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (equals(type.n9_1, title, true)) {
        return type;
      }
    }
    throw IllegalStateException_init_$Create$('Unknown average type: ' + title);
  };
  var Companion_instance_0;
  function Companion_getInstance_0() {
    AggregationTypeEnum_initEntries();
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function values() {
    return [AggregationTypeEnum_DEFAULT_getInstance(), AggregationTypeEnum_DAY_getInstance(), AggregationTypeEnum_WEEK_getInstance(), AggregationTypeEnum_MONTH_getInstance()];
  }
  var AggregationTypeEnum_entriesInitialized;
  function AggregationTypeEnum_initEntries() {
    if (AggregationTypeEnum_entriesInitialized)
      return Unit_getInstance();
    AggregationTypeEnum_entriesInitialized = true;
    AggregationTypeEnum_DEFAULT_instance = new AggregationTypeEnum('DEFAULT', 0, 'DEFAULT');
    AggregationTypeEnum_DAY_instance = new AggregationTypeEnum('DAY', 1, 'DAY');
    AggregationTypeEnum_WEEK_instance = new AggregationTypeEnum('WEEK', 2, 'WEEK');
    AggregationTypeEnum_MONTH_instance = new AggregationTypeEnum('MONTH', 3, 'MONTH');
    Companion_getInstance_0();
  }
  function AggregationTypeEnum(name, ordinal, title) {
    Enum.call(this, name, ordinal);
    this.n9_1 = title;
  }
  protoOf(AggregationTypeEnum).toString = function () {
    return this.n9_1;
  };
  function AggregationTypeEnum_DEFAULT_getInstance() {
    AggregationTypeEnum_initEntries();
    return AggregationTypeEnum_DEFAULT_instance;
  }
  function AggregationTypeEnum_DAY_getInstance() {
    AggregationTypeEnum_initEntries();
    return AggregationTypeEnum_DAY_instance;
  }
  function AggregationTypeEnum_WEEK_getInstance() {
    AggregationTypeEnum_initEntries();
    return AggregationTypeEnum_WEEK_instance;
  }
  function AggregationTypeEnum_MONTH_getInstance() {
    AggregationTypeEnum_initEntries();
    return AggregationTypeEnum_MONTH_instance;
  }
  var AverageTypeEnum_SIMPLE_instance;
  var AverageTypeEnum_WILDERS_instance;
  var AverageTypeEnum_WEIGHTED_instance;
  var AverageTypeEnum_EXPONENTIAL_instance;
  function Companion_1() {
    Companion_instance_1 = this;
  }
  protoOf(Companion_1).fromTitle = function (title) {
    var indexedObject = values_0();
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var averageType = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (equals(averageType.q9_1, title, true)) {
        return averageType;
      }
    }
    throw IllegalStateException_init_$Create$('Unknown average type: ' + title);
  };
  var Companion_instance_1;
  function Companion_getInstance_1() {
    AverageTypeEnum_initEntries();
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function values_0() {
    return [AverageTypeEnum_SIMPLE_getInstance(), AverageTypeEnum_WILDERS_getInstance(), AverageTypeEnum_WEIGHTED_getInstance(), AverageTypeEnum_EXPONENTIAL_getInstance()];
  }
  var AverageTypeEnum_entriesInitialized;
  function AverageTypeEnum_initEntries() {
    if (AverageTypeEnum_entriesInitialized)
      return Unit_getInstance();
    AverageTypeEnum_entriesInitialized = true;
    AverageTypeEnum_SIMPLE_instance = new AverageTypeEnum('SIMPLE', 0, 'SIMPLE');
    AverageTypeEnum_WILDERS_instance = new AverageTypeEnum('WILDERS', 1, 'WILDERS');
    AverageTypeEnum_WEIGHTED_instance = new AverageTypeEnum('WEIGHTED', 2, 'WEIGHTED');
    AverageTypeEnum_EXPONENTIAL_instance = new AverageTypeEnum('EXPONENTIAL', 3, 'EXPONENTIAL');
    Companion_getInstance_1();
  }
  function AverageTypeEnum(name, ordinal, title) {
    Enum.call(this, name, ordinal);
    this.q9_1 = title;
  }
  protoOf(AverageTypeEnum).toString = function () {
    return this.q9_1;
  };
  function AverageTypeEnum_SIMPLE_getInstance() {
    AverageTypeEnum_initEntries();
    return AverageTypeEnum_SIMPLE_instance;
  }
  function AverageTypeEnum_WILDERS_getInstance() {
    AverageTypeEnum_initEntries();
    return AverageTypeEnum_WILDERS_instance;
  }
  function AverageTypeEnum_WEIGHTED_getInstance() {
    AverageTypeEnum_initEntries();
    return AverageTypeEnum_WEIGHTED_instance;
  }
  function AverageTypeEnum_EXPONENTIAL_getInstance() {
    AverageTypeEnum_initEntries();
    return AverageTypeEnum_EXPONENTIAL_instance;
  }
  function CandleDataItem() {
  }
  function MergeResult_init_$Init$($outer, $this) {
    $this.u9_1 = $outer;
    MergeResult.call($this);
    $this.r9_1 = null;
    $this.s9_1 = null;
    $this.t9_1 = true;
    return $this;
  }
  function MergeResult_init_$Create$($outer) {
    return MergeResult_init_$Init$($outer, objectCreate(protoOf(MergeResult)));
  }
  function MergeResult_init_$Init$_0($outer, changes, inserted, $this) {
    $this.u9_1 = $outer;
    MergeResult.call($this);
    $this.r9_1 = changes;
    $this.s9_1 = inserted;
    $this.t9_1 = false;
    return $this;
  }
  function MergeResult_init_$Create$_0($outer, changes, inserted) {
    return MergeResult_init_$Init$_0($outer, changes, inserted, objectCreate(protoOf(MergeResult)));
  }
  function sam$kotlin_Comparator$0_0(function_0) {
    this.v9_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0_0).h8 = function (a, b) {
    return this.v9_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_0).compare = function (a, b) {
    return this.h8(a, b);
  };
  function CandleDataStore$Companion$CANDLE_DATE$lambda(o1, o2) {
    return o1.getTime() < o2.getTime() ? -1 : o1.getTime() > o2.getTime() ? 1 : 0;
  }
  function getFirstUpdatedIndex($this, updatedCandles, insertedCandles) {
    var firstUpdatedElement;
    if (!insertedCandles.h() ? !updatedCandles.h() : false) {
      firstUpdatedElement = Companion_getInstance_2().w9_1.compare(first(insertedCandles), first(updatedCandles)) < 0 ? first(insertedCandles) : first(updatedCandles);
    } else {
      firstUpdatedElement = !insertedCandles.h() ? first(insertedCandles) : first(updatedCandles);
    }
    return binarySearch($this.s7_1, firstUpdatedElement, Companion_getInstance_2().w9_1);
  }
  function trimLeftCandles($this, candles) {
    if (candles.f() > $this.fa()) {
      var trimLeft = candles.f() - $this.fa() | 0;
      candles.j3(0, trimLeft).h3();
      return trimLeft;
    }
    return 0;
  }
  function sortCandles($this, candles) {
    sortedWith(candles, Companion_getInstance_2().w9_1);
  }
  function resetCachedIndexes($this) {
    $this.u7_1 = -1;
    $this.v7_1 = -1;
  }
  function isCandleEquals($this, candle1, candle2) {
    return ((((candle1.getLow() === candle2.getLow() ? candle1.getHigh() === candle2.getHigh() : false) ? candle1.getOpen() === candle2.getOpen() : false) ? candle1.getClose() === candle2.getClose() : false) ? candle1.getTime() === candle2.getTime() : false) ? candle1.getIsVisible() === candle2.getIsVisible() : false;
  }
  function MergeResult() {
  }
  function Companion_2() {
    Companion_instance_2 = this;
    var tmp = this;
    var tmp_0 = CandleDataStore$Companion$CANDLE_DATE$lambda;
    tmp.w9_1 = new sam$kotlin_Comparator$0_0(tmp_0);
  }
  var Companion_instance_2;
  function Companion_getInstance_2() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function CandleDataStore$mergeCandlesSilent$lambda(this$0) {
    return function (candle) {
      return Companion_getInstance_2().w9_1.compare(candle, this$0.s7_1.g(0)) < 0;
    };
  }
  function CandleDataStore$mergeCandlesSilent$lambda_0(this$0) {
    return function (candle) {
      return Companion_getInstance_2().w9_1.compare(candle, this$0.s7_1.g(0)) < 0;
    };
  }
  function CandleDataStore(maxElements, candles) {
    Companion_getInstance_2();
    CandleTradeDataHolder.call(this, candles);
    this.ea_1 = maxElements;
    sortCandles(this, this.s7_1);
    trimLeftCandles(this, this.s7_1);
  }
  protoOf(CandleDataStore).fa = function () {
    return this.ea_1;
  };
  protoOf(CandleDataStore).mergeCandles = function (update) {
    var result = this.ga(update);
    if (!result.t9_1) {
      this.k9(ensureNotNull(result.r9_1));
    }
    return result;
  };
  protoOf(CandleDataStore).ga = function (update) {
    resetCachedIndexes(this);
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    var candlesToMerge = tmp$ret$0;
    candlesToMerge.r2(update);
    while (candlesToMerge.f() > this.fa()) {
      candlesToMerge.p1(0);
    }
    if (this.s7_1.h()) {
      this.s7_1 = toMutableList_0(candlesToMerge);
      var changes = new Changes(0, 0, this.a8());
      return MergeResult_init_$Create$_0(this, changes, toMutableSet(candlesToMerge));
    }
    var candlesToMergeIterator = candlesToMerge.c();
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$1 = ArrayList_init_$Create$();
    var updatedCandles = tmp$ret$1;
    while (candlesToMergeIterator.d()) {
      var mergeCandle = candlesToMergeIterator.e();
      var index = binarySearch(this.s7_1, mergeCandle, Companion_getInstance_2().w9_1);
      if (index >= 0) {
        var currentCandle = this.s7_1.g(index);
        if (!isCandleEquals(this, mergeCandle, currentCandle)) {
          this.s7_1.o1(index, mergeCandle);
          updatedCandles.a(mergeCandle);
        }
        candlesToMergeIterator.q1();
      }
    }
    this.s7_1.r2(candlesToMerge);
    sortCandles(this, this.s7_1);
    var removedFromLeft = trimLeftCandles(this, this.s7_1);
    var notInsertedCandles = toMutableList_0(candlesToMerge);
    removeAll(notInsertedCandles, CandleDataStore$mergeCandlesSilent$lambda(this));
    removedFromLeft = removedFromLeft - notInsertedCandles.f() | 0;
    notInsertedCandles.h3();
    removeAll(updatedCandles, CandleDataStore$mergeCandlesSilent$lambda_0(this));
    if (candlesToMerge.h() ? updatedCandles.h() : false) {
      return MergeResult_init_$Create$(this);
    }
    var firstUpdatedIndex = getFirstUpdatedIndex(this, toSet(updatedCandles), toSet(candlesToMerge));
    var changes_0 = new Changes(removedFromLeft, firstUpdatedIndex, this.a8());
    return MergeResult_init_$Create$_0(this, changes_0, toSet(candlesToMerge));
  };
  function CandleTradeDataHolder(candles) {
    AbstractCandleTradeDataHolder.call(this, candles);
  }
  protoOf(CandleTradeDataHolder).oa = function (timestamp, type, displace) {
    var millisInHour = 3600000;
    var timestampWithoutTime = timestamp - timestamp % imul(millisInHour, 24);
    var tmp0_subject = type;
    var tmp0 = tmp0_subject.s6_1;
    {
      var calculatedTime;
      switch (tmp0) {
        case 1:
          calculatedTime = timestampWithoutTime + imul(imul(displace, millisInHour), 24);
          break;
        case 2:
          calculatedTime = timestampWithoutTime - timestampWithoutTime % imul(imul(millisInHour, 24), 7) + imul(imul(imul(displace, millisInHour), 24), 7);
          break;
        case 3:
          calculatedTime = timestampWithoutTime + imul(imul(imul(displace, millisInHour), 24), 30);
          break;
        default:
          calculatedTime = 0.0;
          break;
      }
    }
    return calculatedTime;
  };
  protoOf(CandleTradeDataHolder).getAggregationStamp = function (timestamp, type, displace) {
    return this.oa(timestamp, type, displace);
  };
  function Changes(removedFromLeft, firstIndexChanged, newDataLength) {
    this.pa_1 = removedFromLeft;
    this.qa_1 = firstIndexChanged;
    this.ra_1 = newDataLength;
  }
  function DataItemsView(originalTradeData) {
    this.sa_1 = originalTradeData;
    this.ta_1 = 0;
  }
  protoOf(DataItemsView).c9 = function () {
    return this.sa_1.c9();
  };
  protoOf(DataItemsView).d9 = function () {
    return this.sa_1.d9();
  };
  protoOf(DataItemsView).z7 = function (changeListener) {
    this.sa_1.addChangeListener(changeListener);
  };
  protoOf(DataItemsView).addChangeListener = function (changeListener) {
    return this.z7(changeListener);
  };
  protoOf(DataItemsView).g9 = function (changeListener) {
    this.sa_1.removeChangeListener(changeListener);
  };
  protoOf(DataItemsView).removeChangeListener = function (changeListener) {
    return this.g9(changeListener);
  };
  protoOf(DataItemsView).h9 = function (index) {
    if (index < 0 ? true : index > (this.sa_1.size() - this.ta_1 | 0)) {
      throw IllegalArgumentException_init_$Create$('index out of range: ' + index + '. size: ' + this.i9());
    }
    return this.sa_1.getTradeItem(index + this.ta_1 | 0);
  };
  protoOf(DataItemsView).getTradeItem = function (index) {
    return this.h9(index);
  };
  protoOf(DataItemsView).j9 = function (index, type, displace) {
    if (index < 0 ? true : index > (this.sa_1.size() - this.ta_1 | 0)) {
      throw IllegalArgumentException_init_$Create$('index out of range: ' + index + '. size: ' + this.i9());
    }
    return this.sa_1.getAggregatedTradeItem(index + this.ta_1 | 0, type, displace);
  };
  protoOf(DataItemsView).getAggregatedTradeItem = function (index, type, displace) {
    return this.j9(index, type, displace);
  };
  protoOf(DataItemsView).f9 = function () {
    return this.sa_1.firstVisibleIndex() - this.ta_1 | 0;
  };
  protoOf(DataItemsView).firstVisibleIndex = function () {
    return this.f9();
  };
  protoOf(DataItemsView).a8 = function () {
    return this.sa_1.a8() - this.ta_1 | 0;
  };
  protoOf(DataItemsView).i9 = function () {
    return this.sa_1.size() - this.ta_1 | 0;
  };
  protoOf(DataItemsView).size = function () {
    return this.i9();
  };
  protoOf(DataItemsView).ua = function (offset) {
    if (offset < 0) {
      throw IllegalArgumentException_init_$Create$('offset should not be negative: ' + offset);
    }
    this.ta_1 = offset;
  };
  function IFunction() {
  }
  var PriceFieldEnum_OPEN_instance;
  var PriceFieldEnum_HIGH_instance;
  var PriceFieldEnum_LOW_instance;
  var PriceFieldEnum_CLOSE_instance;
  var PriceFieldEnum_IMP_VOLATILITY_instance;
  var PriceFieldEnum_MEDIAN_instance;
  var PriceFieldEnum_TYPICAL_instance;
  var PriceFieldEnum_OHLC_AVERAGE_instance;
  var PriceFieldEnum_VOLUME_instance;
  function Companion_3() {
    Companion_instance_3 = this;
  }
  protoOf(Companion_3).o7 = function (title) {
    var indexedObject = values_1();
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var pfe = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (equals(pfe.r6_1, title, true)) {
        return pfe;
      }
    }
    throw IllegalStateException_init_$Create$('Unknown price field: ' + title);
  };
  var Companion_instance_3;
  function Companion_getInstance_3() {
    PriceFieldEnum_initEntries();
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function values_1() {
    return [PriceFieldEnum_OPEN_getInstance(), PriceFieldEnum_HIGH_getInstance(), PriceFieldEnum_LOW_getInstance(), PriceFieldEnum_CLOSE_getInstance(), PriceFieldEnum_IMP_VOLATILITY_getInstance(), PriceFieldEnum_MEDIAN_getInstance(), PriceFieldEnum_TYPICAL_getInstance(), PriceFieldEnum_OHLC_AVERAGE_getInstance(), PriceFieldEnum_VOLUME_getInstance()];
  }
  var PriceFieldEnum_entriesInitialized;
  function PriceFieldEnum_initEntries() {
    if (PriceFieldEnum_entriesInitialized)
      return Unit_getInstance();
    PriceFieldEnum_entriesInitialized = true;
    PriceFieldEnum_OPEN_instance = new PriceFieldEnum('OPEN', 0, 'open');
    PriceFieldEnum_HIGH_instance = new PriceFieldEnum('HIGH', 1, 'high');
    PriceFieldEnum_LOW_instance = new PriceFieldEnum('LOW', 2, 'low');
    PriceFieldEnum_CLOSE_instance = new PriceFieldEnum('CLOSE', 3, 'close');
    PriceFieldEnum_IMP_VOLATILITY_instance = new PriceFieldEnum('IMP_VOLATILITY', 4, 'impVolatility');
    PriceFieldEnum_MEDIAN_instance = new PriceFieldEnum('MEDIAN', 5, 'median');
    PriceFieldEnum_TYPICAL_instance = new PriceFieldEnum('TYPICAL', 6, 'hlc_av');
    PriceFieldEnum_OHLC_AVERAGE_instance = new PriceFieldEnum('OHLC_AVERAGE', 7, 'ohlc_av');
    PriceFieldEnum_VOLUME_instance = new PriceFieldEnum('VOLUME', 8, 'volume');
    Companion_getInstance_3();
  }
  function PriceFieldEnum(name, ordinal, title) {
    Enum.call(this, name, ordinal);
    this.ab_1 = title;
  }
  protoOf(PriceFieldEnum).toString = function () {
    return this.ab_1;
  };
  function PriceFieldEnum_OPEN_getInstance() {
    PriceFieldEnum_initEntries();
    return PriceFieldEnum_OPEN_instance;
  }
  function PriceFieldEnum_HIGH_getInstance() {
    PriceFieldEnum_initEntries();
    return PriceFieldEnum_HIGH_instance;
  }
  function PriceFieldEnum_LOW_getInstance() {
    PriceFieldEnum_initEntries();
    return PriceFieldEnum_LOW_instance;
  }
  function PriceFieldEnum_CLOSE_getInstance() {
    PriceFieldEnum_initEntries();
    return PriceFieldEnum_CLOSE_instance;
  }
  function PriceFieldEnum_IMP_VOLATILITY_getInstance() {
    PriceFieldEnum_initEntries();
    return PriceFieldEnum_IMP_VOLATILITY_instance;
  }
  function PriceFieldEnum_MEDIAN_getInstance() {
    PriceFieldEnum_initEntries();
    return PriceFieldEnum_MEDIAN_instance;
  }
  function PriceFieldEnum_TYPICAL_getInstance() {
    PriceFieldEnum_initEntries();
    return PriceFieldEnum_TYPICAL_instance;
  }
  function PriceFieldEnum_OHLC_AVERAGE_getInstance() {
    PriceFieldEnum_initEntries();
    return PriceFieldEnum_OHLC_AVERAGE_instance;
  }
  function PriceFieldEnum_VOLUME_getInstance() {
    PriceFieldEnum_initEntries();
    return PriceFieldEnum_VOLUME_instance;
  }
  function getOverallPrefetch($this, functions) {
    var prefetch = 0;
    var tmp0_iterator = functions.c();
    while (tmp0_iterator.d()) {
      var function_0 = tmp0_iterator.e();
      var tmp$ret$1;
      // Inline function 'kotlin.comparisons.maxOf' call
      var tmp2_maxOf = getOverallPrefetch($this, function_0.childFunctions);
      var tmp$ret$0;
      // Inline function 'kotlin.comparisons.maxOf' call
      var tmp0_maxOf = function_0.prefetchSize;
      var tmp1_maxOf = prefetch;
      tmp$ret$0 = Math.max(tmp0_maxOf, tmp1_maxOf);
      var tmp3_maxOf = tmp$ret$0;
      tmp$ret$1 = Math.max(tmp2_maxOf, tmp3_maxOf);
      prefetch = tmp$ret$1;
    }
    return prefetch;
  }
  function Study$Companion$create$pastOffset$1() {
  }
  protoOf(Study$Companion$create$pastOffset$1).bb = function (input) {
    return Companion_getInstance_4().getOverallPastOffset(input);
  };
  protoOf(Study$Companion$create$pastOffset$1).cb = function (input) {
    return this.bb((!(input == null) ? isInterface(input, IFunction) : false) ? input : THROW_CCE());
  };
  function Companion_4() {
    Companion_instance_4 = this;
  }
  protoOf(Companion_4).r7 = function (id, dataItems, params) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp$ret$0 = LinkedHashMap_init_$Create$();
    var paramMap = tmp$ret$0;
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_forEach = arrayIterator(params);
    var tmp$ret$1;
    // Inline function 'kotlin.collections.iterator' call
    tmp$ret$1 = tmp0_forEach;
    var tmp0_iterator = tmp$ret$1;
    while (tmp0_iterator.d()) {
      var element = tmp0_iterator.e();
      // Inline function 'com.devexperts.dxst.api.Companion.create.<anonymous>' call
      paramMap.e4(element.key, element.value);
    }
    var builderFactory = Companion_getInstance_47().eb(id);
    var builder = builderFactory.jb();
    var dataItemsView = new DataItemsView(dataItems);
    var functions = builder.kb(dataItemsView, paramMap);
    var aggregationType = builder.lb(paramMap);
    return this.ob(functions, dataItemsView, builder.mb(paramMap), getOverallPrefetch(this, functions), aggregationType, builder.nb(paramMap));
  };
  protoOf(Companion_4).ob = function (lineFunctions, dataItems, expansionSize, prefetchSize, aggregationType, onlyLastAggregatedPeriod) {
    if (lineFunctions.h()) {
      throw IllegalArgumentException_init_$Create$('Collection of functions is empty!');
    }
    if (dataItems == null) {
      throw NullPointerException_init_$Create$('null data items');
    }
    var pastOffset = this.maxValue(lineFunctions, new Study$Companion$create$pastOffset$1());
    var tmp$ret$0;
    // Inline function 'kotlin.comparisons.maxOf' call
    tmp$ret$0 = Math.max(0, expansionSize);
    return new Study(lineFunctions, dataItems, pastOffset, tmp$ret$0, prefetchSize, aggregationType, onlyLastAggregatedPeriod);
  };
  protoOf(Companion_4).maxValue = function (functions, calculator) {
    var max = IntCompanionObject_getInstance().MIN_VALUE;
    var tmp0_iterator = functions.c();
    while (tmp0_iterator.d()) {
      var f = tmp0_iterator.e();
      var value = calculator.cb(f);
      if (max < value) {
        max = value;
      }
    }
    return max;
  };
  protoOf(Companion_4).getOverallPastOffset = function (function_0) {
    var ownPastOffset = function_0.ownPastOffset;
    var maxChildPastOffset = 0;
    var tmp0_iterator = function_0.childFunctions.c();
    while (tmp0_iterator.d()) {
      var func = tmp0_iterator.e();
      var srcPastOffset = this.getOverallPastOffset(func);
      if (maxChildPastOffset < srcPastOffset) {
        maxChildPastOffset = srcPastOffset;
      }
    }
    return ownPastOffset + maxChildPastOffset | 0;
  };
  protoOf(Companion_4).create = function (builder, dataItems, params) {
    var dataItemsView = new DataItemsView(dataItems);
    var functions = builder.kb(dataItemsView, params);
    var aggregationType = builder.lb(params);
    return this.ob(functions, dataItemsView, builder.mb(params), getOverallPrefetch(this, functions), aggregationType, builder.nb(params));
  };
  var Companion_instance_4;
  function Companion_getInstance_4() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function Study(lineFunctions, dataItems, pastOffset, expansionSize, prefetchSize, aggregationType, isOnlyLastAggregatedPeriod) {
    Companion_getInstance_4();
    this.b8_1 = lineFunctions;
    this.c8_1 = dataItems;
    this.pastOffset = pastOffset;
    this.expansionSize = expansionSize;
    this.prefetchSize = prefetchSize;
    this.aggregationType = aggregationType;
    this.isOnlyLastAggregatedPeriod = isOnlyLastAggregatedPeriod;
  }
  protoOf(Study).pb = function () {
    return this.pastOffset;
  };
  protoOf(Study).qb = function () {
    return this.expansionSize;
  };
  protoOf(Study).xa = function () {
    return this.prefetchSize;
  };
  protoOf(Study).rb = function () {
    return this.aggregationType;
  };
  protoOf(Study).sb = function () {
    return this.isOnlyLastAggregatedPeriod;
  };
  protoOf(Study).tb = function () {
    return this.b8_1.f();
  };
  protoOf(Study).d8 = function (changes) {
    var tmp0_iterator = this.b8_1.c();
    while (tmp0_iterator.d()) {
      var lineFunction = tmp0_iterator.e();
      lineFunction.dataChanged(changes);
    }
    return 0;
  };
  protoOf(Study).dataChanged = function (changes) {
    return this.d8(changes);
  };
  protoOf(Study).getLine = function (index) {
    return this.b8_1.g(index);
  };
  protoOf(Study).calculateAll = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp0_arrayOfNulls = this.c8_1.i9();
    tmp$ret$0 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
    var lines = tmp$ret$0;
    var inductionVariable = 0;
    var last = this.c8_1.i9() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$3;
        // Inline function 'kotlin.collections.map' call
        var tmp2_map = this.b8_1;
        var tmp$ret$2;
        // Inline function 'kotlin.collections.mapTo' call
        var tmp1_mapTo = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp2_map, 10));
        var tmp0_iterator = tmp2_map.c();
        while (tmp0_iterator.d()) {
          var item = tmp0_iterator.e();
          var tmp$ret$1;
          // Inline function 'com.devexperts.dxst.api.Study.calculateAll.<anonymous>' call
          tmp$ret$1 = item.calculateAt(i);
          tmp1_mapTo.a(tmp$ret$1);
        }
        tmp$ret$2 = tmp1_mapTo;
        tmp$ret$3 = tmp$ret$2;
        lines[i] = toDoubleArray(tmp$ret$3);
      }
       while (!(i === last));
    return lines;
  };
  protoOf(Study).calculateAt = function (index) {
    var tmp$ret$2;
    // Inline function 'kotlin.collections.map' call
    var tmp1_map = this.b8_1;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp1_map, 10));
    var tmp0_iterator = tmp1_map.c();
    while (tmp0_iterator.d()) {
      var item = tmp0_iterator.e();
      var tmp$ret$0;
      // Inline function 'com.devexperts.dxst.api.Study.calculateAt.<anonymous>' call
      tmp$ret$0 = item.calculateAt(index);
      tmp0_mapTo.a(tmp$ret$0);
    }
    tmp$ret$1 = tmp0_mapTo;
    tmp$ret$2 = tmp$ret$1;
    return toDoubleArray(tmp$ret$2);
  };
  protoOf(Study).setCalculationOffset = function (offset) {
    this.c8_1.ua(offset);
  };
  protoOf(Study).dispose = function () {
    this.c8_1.g9(this);
  };
  defineProp(protoOf(Study), 'linesNumber', protoOf(Study).tb);
  function Companion_5() {
    Companion_instance_5 = this;
    this.ub_1 = 'length';
    this.vb_1 = 'displace';
    this.wb_1 = 'price';
    this.xb_1 = 'average';
  }
  var Companion_instance_5;
  function Companion_getInstance_5() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function StudyBuilder() {
    Companion_getInstance_5();
  }
  protoOf(StudyBuilder).kb = function (data, params) {
    this.yb(params);
    return this.zb(data, params);
  };
  protoOf(StudyBuilder).yb = function (params) {
  };
  protoOf(StudyBuilder).mb = function (params) {
    return 0;
  };
  protoOf(StudyBuilder).lb = function (params) {
    return AggregationTypeEnum_DEFAULT_getInstance();
  };
  protoOf(StudyBuilder).nb = function (params) {
    return false;
  };
  protoOf(StudyBuilder).ac = function (params) {
    this.bc(params, Companion_getInstance_5().vb_1);
  };
  protoOf(StudyBuilder).cc = function (params) {
    this.bc(params, Companion_getInstance_5().ub_1);
  };
  protoOf(StudyBuilder).dc = function (params) {
    this.ec(params, Companion_getInstance_5().wb_1);
  };
  protoOf(StudyBuilder).fc = function (params) {
    this.ec(params, Companion_getInstance_5().xb_1);
  };
  protoOf(StudyBuilder).gc = function (params, name) {
    this.ec(params, name);
  };
  protoOf(StudyBuilder).bc = function (params, name) {
    this.ec(params, name);
  };
  protoOf(StudyBuilder).hc = function (params, name) {
    this.ec(params, name);
  };
  protoOf(StudyBuilder).ic = function (params, name) {
    this.ec(params, name);
  };
  protoOf(StudyBuilder).ec = function (params, name) {
    var tmp0_elvis_lhs = params.d1(name);
    if (tmp0_elvis_lhs == null)
      throw IllegalArgumentException_init_$Create$("Couldn't find parameter '" + name);
    else
      tmp0_elvis_lhs;
  };
  function Companion_6() {
    Companion_instance_6 = this;
  }
  protoOf(Companion_6).of = function (key, value) {
    return new StudyParam(key, value);
  };
  var Companion_instance_6;
  function Companion_getInstance_6() {
    if (Companion_instance_6 == null)
      new Companion_6();
    return Companion_instance_6;
  }
  function StudyParam(key, value) {
    Companion_getInstance_6();
    this.key = key;
    this.value = value;
  }
  protoOf(StudyParam).s = function () {
    return this.key;
  };
  protoOf(StudyParam).jc = function (_set____db54di) {
    this.value = _set____db54di;
  };
  protoOf(StudyParam).u = function () {
    return this.value;
  };
  function TradeDataItem() {
  }
  function TradingSessionData() {
  }
  function ADX() {
    StudyBuilder.call(this);
  }
  protoOf(ADX).yb = function (params) {
    protoOf(StudyBuilder).cc.call(this, params);
    protoOf(StudyBuilder).fc.call(this, params);
  };
  protoOf(ADX).zb = function (data, params) {
    var tmp = params.d1(Companion_getInstance_5().ub_1);
    var length = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
    var tmp_0 = params.d1(Companion_getInstance_5().xb_1);
    var averageType = tmp_0 instanceof AverageTypeEnum ? tmp_0 : THROW_CCE();
    return listOf_0(CommonFunctions_getInstance().oc(data, length, averageType));
  };
  function negateExact($this, a) {
    if (a === IntCompanionObject_getInstance().MIN_VALUE) {
      throw Exception_init_$Create$('Integer overflow');
    }
    return -a | 0;
  }
  function Companion_7() {
    Companion_instance_7 = this;
  }
  protoOf(Companion_7).pc = function (data, length, averageType) {
    var displace = negateExact(this, length - 1 | 0);
    var todayADX = CommonFunctions_getInstance().oc(data, length, averageType);
    var periodADX = new DisplacementFunction(CommonFunctions_getInstance().oc(data, length, averageType), displace);
    return new ArithmeticFunction(todayADX, periodADX, ArithmeticOperation_MIDPOINT_getInstance());
  };
  var Companion_instance_7;
  function Companion_getInstance_7() {
    if (Companion_instance_7 == null)
      new Companion_7();
    return Companion_instance_7;
  }
  function ADXR() {
    Companion_getInstance_7();
    StudyBuilder.call(this);
  }
  protoOf(ADXR).yb = function (params) {
    protoOf(StudyBuilder).cc.call(this, params);
    protoOf(StudyBuilder).fc.call(this, params);
  };
  protoOf(ADXR).zb = function (data, params) {
    var tmp = params.d1(Companion_getInstance_5().ub_1);
    var length = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
    var tmp_0 = params.d1(Companion_getInstance_5().xb_1);
    var averageType = tmp_0 instanceof AverageTypeEnum ? tmp_0 : THROW_CCE();
    return listOf([CommonFunctions_getInstance().oc(data, length, averageType), Companion_getInstance_7().pc(data, length, averageType)]);
  };
  function AccelerationDeceleration() {
    StudyBuilder.call(this);
  }
  protoOf(AccelerationDeceleration).zb = function (data, params) {
    var awesome = CommonFunctions_getInstance().qc(data);
    var avgAwesome = new MovingAverageSimple(CommonFunctions_getInstance().qc(data), 5);
    var accDec = new ArithmeticFunction(awesome, avgAwesome, ArithmeticOperation_MINUS_getInstance());
    var zero = new ZeroFunction();
    return listOf([accDec, zero]);
  };
  function AccumulationDistribution() {
    StudyBuilder.call(this);
  }
  protoOf(AccumulationDistribution).zb = function (data, params) {
    var accDist = WindowFunction_init_$Create$(CommonFunctions_getInstance().rc(data), 0, true);
    var zero = new ZeroFunction();
    return listOf([accDist, zero]);
  };
  function constructAroonFunction($this, length, daysSince) {
    var arg1 = new ArithmeticFunction(new ArithmeticFunction(new ConstantFunction(length - 1 | 0), daysSince, ArithmeticOperation_MINUS_getInstance()), new ConstantFunction(length - 1 | 0), ArithmeticOperation_DIV_ZERO_getInstance());
    return new ArithmeticFunction(new ConstantFunction(100.0), arg1, ArithmeticOperation_MULT_getInstance());
  }
  function Companion_8() {
    Companion_instance_8 = this;
    this.sc_1 = 'overbought';
    this.tc_1 = 'oversold';
  }
  protoOf(Companion_8).uc = function (data, length) {
    return constructAroonFunction(this, length, new HighestHighPeriod(new PriceSourceFunction(data, PriceFieldEnum_HIGH_getInstance()), length));
  };
  protoOf(Companion_8).vc = function (data, length) {
    return constructAroonFunction(this, length, new LowestLowPeriod(new PriceSourceFunction(data, PriceFieldEnum_LOW_getInstance()), length));
  };
  var Companion_instance_8;
  function Companion_getInstance_8() {
    if (Companion_instance_8 == null)
      new Companion_8();
    return Companion_instance_8;
  }
  function Aroon() {
    Companion_getInstance_8();
    StudyBuilder.call(this);
  }
  protoOf(Aroon).yb = function (params) {
    protoOf(StudyBuilder).bc.call(this, params, Companion_getInstance_5().ub_1);
    protoOf(StudyBuilder).bc.call(this, params, Companion_getInstance_8().sc_1);
    protoOf(StudyBuilder).bc.call(this, params, Companion_getInstance_8().tc_1);
  };
  protoOf(Aroon).zb = function (data, params) {
    var tmp = params.d1(Companion_getInstance_5().ub_1);
    var length = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
    var tmp_0 = params.d1(Companion_getInstance_8().sc_1);
    var overbought = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE();
    var tmp_1 = params.d1(Companion_getInstance_8().tc_1);
    var oversold = (!(tmp_1 == null) ? typeof tmp_1 === 'number' : false) ? tmp_1 : THROW_CCE();
    var aroonUp = Companion_getInstance_8().uc(data, length);
    var aroonDown = Companion_getInstance_8().vc(data, length);
    var oversoldFunction = new ConstantFunction(oversold);
    var overboughtFunction = new ConstantFunction(overbought);
    return listOf([aroonUp, aroonDown, overboughtFunction, oversoldFunction]);
  };
  function Companion_9() {
    Companion_instance_9 = this;
    this.wc_1 = 'overbought';
    this.xc_1 = 'oversold';
  }
  var Companion_instance_9;
  function Companion_getInstance_9() {
    if (Companion_instance_9 == null)
      new Companion_9();
    return Companion_instance_9;
  }
  function AroonOscillator() {
    Companion_getInstance_9();
    StudyBuilder.call(this);
  }
  protoOf(AroonOscillator).yb = function (params) {
    protoOf(StudyBuilder).cc.call(this, params);
    protoOf(StudyBuilder).bc.call(this, params, Companion_getInstance_9().wc_1);
    protoOf(StudyBuilder).bc.call(this, params, Companion_getInstance_9().xc_1);
  };
  protoOf(AroonOscillator).zb = function (data, params) {
    var tmp = params.d1(Companion_getInstance_5().ub_1);
    var length = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
    var tmp_0 = params.d1(Companion_getInstance_9().wc_1);
    var overbought = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE();
    var tmp_1 = params.d1(Companion_getInstance_9().xc_1);
    var oversold = (!(tmp_1 == null) ? typeof tmp_1 === 'number' : false) ? tmp_1 : THROW_CCE();
    var aroonUp = Companion_getInstance_8().uc(data, length);
    var aroonDown = Companion_getInstance_8().vc(data, length);
    var aroonOscillator = new ArithmeticFunction(aroonUp, aroonDown, ArithmeticOperation_MINUS_getInstance());
    var overboughtFunction = new ConstantFunction(overbought);
    var midLine = new ZeroFunction();
    var oversoldFunction = new ConstantFunction(oversold);
    return listOf([overboughtFunction, midLine, oversoldFunction, aroonOscillator]);
  };
  function AverageTrueRange() {
    StudyBuilder.call(this);
  }
  protoOf(AverageTrueRange).yb = function (params) {
    protoOf(StudyBuilder).cc.call(this, params);
    protoOf(StudyBuilder).fc.call(this, params);
  };
  protoOf(AverageTrueRange).zb = function (data, params) {
    var tmp = params.d1(Companion_getInstance_5().ub_1);
    var length = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
    var tmp_0 = params.d1(Companion_getInstance_5().xb_1);
    var averageType = tmp_0 instanceof AverageTypeEnum ? tmp_0 : THROW_CCE();
    var tr = CommonFunctions_getInstance().yc(data);
    var atr = CommonFunctions_getInstance().zc(averageType, tr, length);
    return listOf_0(atr);
  };
  function AwesomeOscillator() {
    StudyBuilder.call(this);
  }
  protoOf(AwesomeOscillator).zb = function (data, params) {
    var awesome = CommonFunctions_getInstance().qc(data);
    var zero = new ZeroFunction();
    return listOf([awesome, zero]);
  };
  function constructBandFunction($this, price, params, numDev, averageType) {
    var tmp = params.d1(Companion_getInstance_5().ub_1);
    var length = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
    var tmp_0 = params.d1(Companion_getInstance_5().vb_1);
    var displace = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE();
    var deviation = new StandardDeviationFunction(price, length);
    var displacedDeviation = new DisplacementFunction(deviation, displace);
    var average = CommonFunctions_getInstance().zc(averageType, price, length);
    var displacedEma = new DisplacementFunction(average, displace);
    return new ArithmeticFunction(displacedEma, new ArithmeticFunction(displacedDeviation, new ConstantFunction(numDev), ArithmeticOperation_MULT_getInstance()), ArithmeticOperation_PLUS_getInstance());
  }
  function BollingerBands() {
    StudyBuilder.call(this);
    this.ad_1 = 'numDevUp';
    this.bd_1 = 'numDevDown';
  }
  protoOf(BollingerBands).yb = function (params) {
    protoOf(StudyBuilder).cc.call(this, params);
    protoOf(StudyBuilder).dc.call(this, params);
    protoOf(StudyBuilder).ac.call(this, params);
    protoOf(StudyBuilder).hc.call(this, params, this.ad_1);
    protoOf(StudyBuilder).hc.call(this, params, this.bd_1);
    protoOf(StudyBuilder).fc.call(this, params);
  };
  protoOf(BollingerBands).zb = function (data, params) {
    var tmp = params.d1(Companion_getInstance_5().wb_1);
    var priceField = tmp instanceof PriceFieldEnum ? tmp : THROW_CCE();
    var tmp_0 = params.d1(Companion_getInstance_5().ub_1);
    var length = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE();
    var tmp_1 = params.d1(Companion_getInstance_5().vb_1);
    var displace = (!(tmp_1 == null) ? typeof tmp_1 === 'number' : false) ? tmp_1 : THROW_CCE();
    var tmp_2 = params.d1(Companion_getInstance_5().xb_1);
    var averageType = tmp_2 instanceof AverageTypeEnum ? tmp_2 : THROW_CCE();
    var price = new PriceSourceFunction(data, priceField);
    var average = CommonFunctions_getInstance().zc(averageType, price, length);
    var displacedEma = new DisplacementFunction(average, displace);
    var tmp_3 = params.d1(this.ad_1);
    var numDevUp = (!(tmp_3 == null) ? typeof tmp_3 === 'number' : false) ? tmp_3 : THROW_CCE();
    var upBand = constructBandFunction(this, price, params, numDevUp, averageType);
    var tmp_4 = params.d1(this.bd_1);
    var numDevDown = (!(tmp_4 == null) ? typeof tmp_4 === 'number' : false) ? tmp_4 : THROW_CCE();
    var lowBand = constructBandFunction(this, price, params, numDevDown, averageType);
    return listOf([lowBand, displacedEma, upBand]);
  };
  protoOf(BollingerBands).mb = function (params) {
    var tmp = params.d1(Companion_getInstance_5().vb_1);
    var displace = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
    return -displace | 0;
  };
  function Companion_10() {
    Companion_instance_10 = this;
    this.cd_1 = 'oversold';
    this.dd_1 = 'overbought';
  }
  var Companion_instance_10;
  function Companion_getInstance_10() {
    if (Companion_instance_10 == null)
      new Companion_10();
    return Companion_instance_10;
  }
  function CCI() {
    Companion_getInstance_10();
    StudyBuilder.call(this);
  }
  protoOf(CCI).yb = function (params) {
    protoOf(StudyBuilder).cc.call(this, params);
    protoOf(StudyBuilder).bc.call(this, params, Companion_getInstance_10().dd_1);
    protoOf(StudyBuilder).bc.call(this, params, Companion_getInstance_10().cd_1);
  };
  protoOf(CCI).zb = function (data, params) {
    var tmp = params.d1(Companion_getInstance_5().ub_1);
    var length = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
    var tmp_0 = params.d1(Companion_getInstance_10().dd_1);
    var overbought = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE();
    var tmp_1 = params.d1(Companion_getInstance_10().cd_1);
    var oversold = (!(tmp_1 == null) ? typeof tmp_1 === 'number' : false) ? tmp_1 : THROW_CCE();
    var price = CommonFunctions_getInstance().ed(data);
    var avg = new MovingAverageSimple(price, length);
    var linDev = new LinearDeviationFunction(price, length);
    var c0015 = new ConstantFunction(0.015);
    var cci = new ArithmeticFunction(new ArithmeticFunction(new ArithmeticFunction(price, avg, ArithmeticOperation_MINUS_getInstance()), linDev, ArithmeticOperation_DIV_ZERO_getInstance()), c0015, ArithmeticOperation_DIV_getInstance());
    var zero = new ZeroFunction();
    var overboughtF = new ConstantFunction(overbought);
    var oversoldF = new ConstantFunction(oversold);
    return listOf([cci, overboughtF, zero, oversoldF]);
  };
  function Companion_11() {
    Companion_instance_11 = this;
    this.fd_1 = 'period';
  }
  var Companion_instance_11;
  function Companion_getInstance_11() {
    if (Companion_instance_11 == null)
      new Companion_11();
    return Companion_instance_11;
  }
  function CenterOfGravityOscillator() {
    Companion_getInstance_11();
    StudyBuilder.call(this);
  }
  protoOf(CenterOfGravityOscillator).yb = function (params) {
    protoOf(StudyBuilder).dc.call(this, params);
    protoOf(StudyBuilder).bc.call(this, params, Companion_getInstance_11().fd_1);
  };
  protoOf(CenterOfGravityOscillator).zb = function (data, params) {
    var tmp = params.d1(Companion_getInstance_5().wb_1);
    var priceField = tmp instanceof PriceFieldEnum ? tmp : THROW_CCE();
    var tmp_0 = params.d1(Companion_getInstance_11().fd_1);
    var period = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE();
    var price = new PriceSourceFunction(data, priceField);
    var weightedSum = new SimpleWeightedSumFunction(price, period);
    var sum = new SumFunction(price, period);
    var minuFactor = new ConstantFunction(-1.0);
    var cog = new ArithmeticFunction(new ArithmeticFunction(weightedSum, sum, ArithmeticOperation_DIV_getInstance()), minuFactor, ArithmeticOperation_MULT_getInstance());
    return listOf_0(cog);
  };
  function constructEmaDistributionFunction($this, accDist, length) {
    return new MovingAverageExponential(accDist, length);
  }
  function Companion_12() {
    Companion_instance_12 = this;
    this.gd_1 = 'shortLength';
    this.hd_1 = 'longLength';
  }
  var Companion_instance_12;
  function Companion_getInstance_12() {
    if (Companion_instance_12 == null)
      new Companion_12();
    return Companion_instance_12;
  }
  function ChaikinOscillator() {
    Companion_getInstance_12();
    StudyBuilder.call(this);
  }
  protoOf(ChaikinOscillator).yb = function (params) {
    protoOf(StudyBuilder).bc.call(this, params, Companion_getInstance_12().gd_1);
    protoOf(StudyBuilder).bc.call(this, params, Companion_getInstance_12().hd_1);
  };
  protoOf(ChaikinOscillator).zb = function (data, params) {
    var tmp = params.d1(Companion_getInstance_12().gd_1);
    var shortLength = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
    var tmp_0 = params.d1(Companion_getInstance_12().hd_1);
    var longLength = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE();
    var emaShort = constructEmaDistributionFunction(Companion_getInstance_12(), CommonFunctions_getInstance().rc(data), shortLength);
    var emaLong = constructEmaDistributionFunction(Companion_getInstance_12(), CommonFunctions_getInstance().rc(data), longLength);
    var chaikinOsc = WindowFunction_init_$Create$(new ArithmeticFunction(emaShort, emaLong, ArithmeticOperation_MINUS_getInstance()), 0, true);
    var zero = new ZeroFunction();
    return listOf([chaikinOsc, zero]);
  };
  function constructSmaHighLowDiffFunction($this, data, length) {
    var diffPrice = CommonFunctions_getInstance().id(data);
    return new MovingAverageSimple(diffPrice, length);
  }
  function Companion_13() {
    Companion_instance_13 = this;
    this.jd_1 = 'shiftLength';
  }
  var Companion_instance_13;
  function Companion_getInstance_13() {
    if (Companion_instance_13 == null)
      new Companion_13();
    return Companion_instance_13;
  }
  function ChaikinVolatility() {
    Companion_getInstance_13();
    StudyBuilder.call(this);
  }
  protoOf(ChaikinVolatility).yb = function (params) {
    protoOf(StudyBuilder).cc.call(this, params);
    protoOf(StudyBuilder).bc.call(this, params, Companion_getInstance_13().jd_1);
  };
  protoOf(ChaikinVolatility).zb = function (data, params) {
    var tmp = params.d1(Companion_getInstance_5().ub_1);
    var length = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
    var tmp_0 = params.d1(Companion_getInstance_13().jd_1);
    var shiftLength = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE();
    var smaDelayed = new DisplacementFunction(constructSmaHighLowDiffFunction(Companion_getInstance_13(), data, length), -shiftLength | 0);
    var chvFract = new ArithmeticFunction(constructSmaHighLowDiffFunction(Companion_getInstance_13(), data, length), smaDelayed, ArithmeticOperation_DIFF_DIV_RIGHT_getInstance());
    var chv = new ArithmeticFunction(chvFract, new ConstantFunction(100.0), ArithmeticOperation_MULT_getInstance());
    var zero = new ZeroFunction();
    return listOf([chv, zero]);
  };
  function constructInOrDecrementFunction($this, closeDiffFactor, factor) {
    var closeDiff = new ArithmeticFunction(closeDiffFactor, new ConstantFunction(factor), ArithmeticOperation_MULT_getInstance());
    return new ArithmeticFunction(closeDiff, new ConstantFunction(0.0), ArithmeticOperation_MAX_getInstance());
  }
  function ChandeMomentumOscillator() {
    StudyBuilder.call(this);
  }
  protoOf(ChandeMomentumOscillator).yb = function (params) {
    protoOf(StudyBuilder).cc.call(this, params);
  };
  protoOf(ChandeMomentumOscillator).zb = function (data, params) {
    var tmp = params.d1(Companion_getInstance_5().ub_1);
    var length = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
    var price = new PriceSourceFunction(data, PriceFieldEnum_CLOSE_getInstance());
    var increment = constructInOrDecrementFunction(this, new DiffPrevFunction(price), 1);
    var sumIncrement = new SumFunction(increment, length);
    var decrement = constructInOrDecrementFunction(this, new DiffPrevFunction(price), -1);
    var sumDecrement = new SumFunction(decrement, length);
    var cmoFract = new ArithmeticFunction(sumIncrement, sumDecrement, ArithmeticOperation_DIFF_DIV_SUM_ZERO_getInstance());
    var cmo = WindowFunction_init_$Create$(new ArithmeticFunction(cmoFract, new ConstantFunction(100.0), ArithmeticOperation_MULT_getInstance()), 0, true);
    var upper = new ConstantFunction(50.0);
    var lower = new ConstantFunction(-50.0);
    var zero = new ZeroFunction();
    return listOf([cmo, upper, lower, zero]);
  };
  function constructCommoditySelection($this, data, params) {
    var tmp = params.d1($this.kd_1);
    var bigPointValue = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
    var tmp_0 = params.d1($this.ld_1);
    var myCommission = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE();
    var tmp_1 = params.d1($this.md_1);
    var myMargin = (!(tmp_1 == null) ? typeof tmp_1 === 'number' : false) ? tmp_1 : THROW_CCE();
    var tmp_2 = params.d1(Companion_getInstance_5().ub_1);
    var length = (!(tmp_2 == null) ? typeof tmp_2 === 'number' : false) ? tmp_2 : THROW_CCE();
    var tmp_3 = params.d1(Companion_getInstance_5().xb_1);
    var averageType = tmp_3 instanceof AverageTypeEnum ? tmp_3 : THROW_CCE();
    var coefficient = constructCoefficient($this, bigPointValue, myCommission, myMargin);
    var adxr = Companion_getInstance_7().pc(data, length, averageType);
    var movingAverage = CommonFunctions_getInstance().zc(averageType, CommonFunctions_getInstance().yc(data), length);
    var coefficientMultByMovingAverage = new ArithmeticFunction(coefficient, movingAverage, ArithmeticOperation_MULT_getInstance());
    return new ArithmeticFunction(coefficientMultByMovingAverage, adxr, ArithmeticOperation_MULT_getInstance());
  }
  function constructCoefficient($this, bigPointValue, myCommission, myMargin) {
    var c100 = new ConstantFunction(100.0);
    var tmp = new ConstantFunction(bigPointValue);
    var tmp$ret$0;
    // Inline function 'kotlin.math.sqrt' call
    tmp$ret$0 = Math.sqrt(myMargin);
    var x = new ArithmeticFunction(tmp, new ConstantFunction(tmp$ret$0), ArithmeticOperation_DIV_getInstance());
    var y = new ConstantFunction(150 + myCommission);
    var z = new ArithmeticFunction(x, y, ArithmeticOperation_DIV_getInstance());
    return new ArithmeticFunction(c100, z, ArithmeticOperation_MULT_getInstance());
  }
  function CommoditySelection() {
    StudyBuilder.call(this);
    this.kd_1 = 'bigPointValue';
    this.ld_1 = 'myCommission';
    this.md_1 = 'myMargin';
  }
  protoOf(CommoditySelection).yb = function (params) {
    protoOf(StudyBuilder).hc.call(this, params, this.kd_1);
    protoOf(StudyBuilder).cc.call(this, params);
    protoOf(StudyBuilder).hc.call(this, params, this.ld_1);
    protoOf(StudyBuilder).hc.call(this, params, this.md_1);
    protoOf(StudyBuilder).fc.call(this, params);
  };
  protoOf(CommoditySelection).zb = function (data, params) {
    var si = constructCommoditySelection(this, data, params);
    return listOf_0(si);
  };
  function Comparative() {
    StudyBuilder.call(this);
  }
  protoOf(Comparative).zb = function (data, params) {
    var function_0 = new PriceSourceFunction(data, PriceFieldEnum_CLOSE_getInstance());
    return listOf_0(function_0);
  };
  function DEMA() {
    StudyBuilder.call(this);
  }
  protoOf(DEMA).yb = function (params) {
    protoOf(StudyBuilder).cc.call(this, params);
    protoOf(StudyBuilder).dc.call(this, params);
    protoOf(StudyBuilder).ac.call(this, params);
  };
  protoOf(DEMA).zb = function (data, params) {
    var tmp = params.d1(Companion_getInstance_5().ub_1);
    var length = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
    var tmp_0 = params.d1(Companion_getInstance_5().vb_1);
    var displace = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE();
    var tmp_1 = params.d1(Companion_getInstance_5().wb_1);
    var priceField = tmp_1 instanceof PriceFieldEnum ? tmp_1 : THROW_CCE();
    var term1 = new ArithmeticFunction(new ConstantFunction(2.0), new MovingAverageExponential(new PriceSourceFunction(data, priceField), length), ArithmeticOperation_MULT_getInstance());
    var term2 = new MovingAverageExponential(new MovingAverageExponential(new PriceSourceFunction(data, priceField), length), length, length);
    var dema = new ArithmeticFunction(term1, term2, ArithmeticOperation_MINUS_getInstance());
    return listOf_0(new DisplacementFunction(dema, displace));
  };
  protoOf(DEMA).mb = function (params) {
    var tmp = params.d1(Companion_getInstance_5().vb_1);
    var displace = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
    return -displace | 0;
  };
  function DMI() {
    StudyBuilder.call(this);
  }
  protoOf(DMI).yb = function (params) {
    protoOf(StudyBuilder).cc.call(this, params);
    protoOf(StudyBuilder).fc.call(this, params);
  };
  protoOf(DMI).zb = function (data, params) {
    var tmp = params.d1(Companion_getInstance_5().ub_1);
    var length = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
    var tmp_0 = params.d1(Companion_getInstance_5().xb_1);
    var averageType = tmp_0 instanceof AverageTypeEnum ? tmp_0 : THROW_CCE();
    var diPlus = CommonFunctions_getInstance().nd(data, length, true, averageType);
    var diMinus = CommonFunctions_getInstance().nd(data, length, false, averageType);
    var aDx = CommonFunctions_getInstance().oc(data, length, averageType);
    return listOf([WindowFunction_init_$Create$(diMinus, 0, true), WindowFunction_init_$Create$(diPlus, 0, true), aDx]);
  };
  function Companion_14() {
    Companion_instance_14 = this;
    this.od_1 = 'aggregation';
    this.pd_1 = 'showOnlyLast';
    this.qd_1 = 'rightexpansion';
  }
  var Companion_instance_14;
  function Companion_getInstance_14() {
    if (Companion_instance_14 == null)
      new Companion_14();
    return Companion_instance_14;
  }
  function DayOpenClose() {
    Companion_getInstance_14();
    StudyBuilder.call(this);
  }
  protoOf(DayOpenClose).yb = function (params) {
    protoOf(StudyBuilder).ic.call(this, params, Companion_getInstance_14().od_1);
    protoOf(StudyBuilder).gc.call(this, params, Companion_getInstance_14().pd_1);
    protoOf(StudyBuilder).bc.call(this, params, Companion_getInstance_14().qd_1);
  };
  protoOf(DayOpenClose).zb = function (data, params) {
    var tmp = params.d1(Companion_getInstance_14().od_1);
    var aggregation = tmp instanceof AggregationTypeEnum ? tmp : THROW_CCE();
    var open = new PriceAggregatedSourceFunction(data, aggregation, PriceFieldEnum_OPEN_getInstance());
    var close = new PriceAggregatedSourceFunction(data, aggregation, PriceFieldEnum_CLOSE_getInstance());
    return listOf([open, close]);
  };
  protoOf(DayOpenClose).mb = function (params) {
    var tmp = params.d1(Companion_getInstance_14().qd_1);
    return (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
  };
  protoOf(DayOpenClose).lb = function (params) {
    var tmp = params.d1(Companion_getInstance_14().od_1);
    return tmp instanceof AggregationTypeEnum ? tmp : THROW_CCE();
  };
  protoOf(DayOpenClose).nb = function (params) {
    var tmp = params.d1(Companion_getInstance_14().pd_1);
    return (!(tmp == null) ? typeof tmp === 'boolean' : false) ? tmp : THROW_CCE();
  };
  function constructHighAverageFunction($this, data) {
    var highDiff = new DiffPrevFunction(new PriceSourceFunction(data, PriceFieldEnum_HIGH_getInstance()));
    var highDiffPos = new ArithmeticFunction(new ZeroFunction(), highDiff, ArithmeticOperation_MAX_getInstance());
    return new MovingAverageSimple(highDiffPos, 8);
  }
  function constructLowAverageFunction($this, data) {
    var lowDiff = new DiffPrevFunction(new PriceSourceFunction(data, PriceFieldEnum_LOW_getInstance()));
    var negLowDiff = new ArithmeticFunction(new ZeroFunction(), lowDiff, ArithmeticOperation_MINUS_getInstance());
    var lowDiffPos = new ArithmeticFunction(new ZeroFunction(), negLowDiff, ArithmeticOperation_MAX_getInstance());
    return new MovingAverageSimple(lowDiffPos, 8);
  }
  function DeMarker() {
    StudyBuilder.call(this);
  }
  protoOf(DeMarker).zb = function (data, params) {
    var c100 = new ConstantFunction(100.0);
    var function_0 = new ArithmeticFunction(constructHighAverageFunction(this, data), constructLowAverageFunction(this, data), ArithmeticOperation_PLUS_getInstance());
    var dm = WindowFunction_init_$Create$(new ArithmeticFunction(new ArithmeticFunction(constructHighAverageFunction(this, data), function_0, ArithmeticOperation_DIV_ZERO_getInstance()), c100, ArithmeticOperation_MULT_getInstance()), 0, true);
    return listOf_0(dm);
  };
  function DetrendedPriceOsc() {
    StudyBuilder.call(this);
  }
  protoOf(DetrendedPriceOsc).yb = function (params) {
    protoOf(StudyBuilder).cc.call(this, params);
    protoOf(StudyBuilder).dc.call(this, params);
  };
  protoOf(DetrendedPriceOsc).zb = function (data, params) {
    var tmp = params.d1(Companion_getInstance_5().wb_1);
    var priceField = tmp instanceof PriceFieldEnum ? tmp : THROW_CCE();
    var tmp_0 = params.d1(Companion_getInstance_5().ub_1);
    var length = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE();
    var disp = (length / 2 | 0) + 1 | 0;
    var price = new PriceSourceFunction(data, priceField);
    var dispPriceAv = new DisplacementFunction(price, -disp | 0);
    var sma = new MovingAverageSimple(dispPriceAv, length);
    var dpo = new ArithmeticFunction(price, sma, ArithmeticOperation_MINUS_getInstance());
    var zero = new ZeroFunction();
    return listOf([dpo, zero]);
  };
  function constructRatio($this, priceSource, stdevLength, avgOfStdevLength) {
    var std = new StandardDeviationFunction(priceSource, stdevLength);
    var stdAverage = new MovingAverageSimple(std, avgOfStdevLength);
    return new ArithmeticFunction(std, stdAverage, ArithmeticOperation_DIV_getInstance());
  }
  function constructDynamicLength($this, ratio, dymiLength) {
    return new Floor(new ArithmeticFunction(new ConstantFunction(dymiLength), ratio, ArithmeticOperation_DIV_getInstance()));
  }
  function Companion_15() {
    Companion_instance_15 = this;
    this.rd_1 = 'maxDynamicLength';
    this.sd_1 = 'minDynamicLength';
    this.td_1 = 'stDevLength';
    this.ud_1 = 'stDevAverageLength';
    this.vd_1 = 'dynamicLength';
    this.wd_1 = 'oversold';
    this.xd_1 = 'overbought';
  }
  protoOf(Companion_15).yd = function (priceSource, stdevLength, avgOfStdevLength, dymiLength, lowerLimit, upperLimit, averageType) {
    var ratio = constructRatio(this, priceSource, stdevLength, avgOfStdevLength);
    var dynamicLength = constructDynamicLength(this, ratio, dymiLength);
    return new DynamicMomentumIndexFunction(priceSource, dynamicLength, lowerLimit, upperLimit, averageType);
  };
  var Companion_instance_15;
  function Companion_getInstance_15() {
    if (Companion_instance_15 == null)
      new Companion_15();
    return Companion_instance_15;
  }
  function DynamicMomentumIndex() {
    Companion_getInstance_15();
    StudyBuilder.call(this);
  }
  protoOf(DynamicMomentumIndex).yb = function (params) {
    protoOf(StudyBuilder).bc.call(this, params, Companion_getInstance_15().rd_1);
    protoOf(StudyBuilder).bc.call(this, params, Companion_getInstance_15().sd_1);
    protoOf(StudyBuilder).bc.call(this, params, Companion_getInstance_15().td_1);
    protoOf(StudyBuilder).bc.call(this, params, Companion_getInstance_15().ud_1);
    protoOf(StudyBuilder).bc.call(this, params, Companion_getInstance_15().vd_1);
  };
  protoOf(DynamicMomentumIndex).zb = function (data, params) {
    var tmp = params.d1(Companion_getInstance_15().td_1);
    var stdevLength = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
    var tmp_0 = params.d1(Companion_getInstance_15().ud_1);
    var avgOfStdevLength = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE();
    var tmp_1 = params.d1(Companion_getInstance_15().vd_1);
    var dymiLength = (!(tmp_1 == null) ? typeof tmp_1 === 'number' : false) ? tmp_1 : THROW_CCE();
    var tmp_2 = params.d1(Companion_getInstance_15().rd_1);
    var upperLimit = (!(tmp_2 == null) ? typeof tmp_2 === 'number' : false) ? tmp_2 : THROW_CCE();
    var tmp_3 = params.d1(Companion_getInstance_15().sd_1);
    var lowerLimit = (!(tmp_3 == null) ? typeof tmp_3 === 'number' : false) ? tmp_3 : THROW_CCE();
    var tmp_4 = params.d1(Companion_getInstance_15().wd_1);
    var oversold = (!(tmp_4 == null) ? typeof tmp_4 === 'number' : false) ? tmp_4 : THROW_CCE();
    var tmp_5 = params.d1(Companion_getInstance_15().xd_1);
    var overbought = (!(tmp_5 == null) ? typeof tmp_5 === 'number' : false) ? tmp_5 : THROW_CCE();
    var tmp_6 = params.d1(Companion_getInstance_5().wb_1);
    var priceFieldEnum = tmp_6 instanceof PriceFieldEnum ? tmp_6 : THROW_CCE();
    var priceSource = new PriceSourceFunction(data, priceFieldEnum);
    var dmi = Companion_getInstance_15().yd(priceSource, stdevLength, avgOfStdevLength, dymiLength, lowerLimit, upperLimit, AverageTypeEnum_WILDERS_getInstance());
    return listOf([dmi, new ConstantFunction(overbought), new ConstantFunction(oversold)]);
  };
  function EMA() {
    StudyBuilder.call(this);
  }
  protoOf(EMA).yb = function (params) {
    protoOf(StudyBuilder).cc.call(this, params);
    protoOf(StudyBuilder).dc.call(this, params);
    protoOf(StudyBuilder).ac.call(this, params);
  };
  protoOf(EMA).zb = function (data, params) {
    var tmp = params.d1(Companion_getInstance_5().ub_1);
    var length = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
    var tmp_0 = params.d1(Companion_getInstance_5().vb_1);
    var displace = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE();
    var tmp_1 = params.d1(Companion_getInstance_5().wb_1);
    var priceField = tmp_1 instanceof PriceFieldEnum ? tmp_1 : THROW_CCE();
    var priceFunc = new PriceSourceFunction(data, priceField);
    var emaFunc = new MovingAverageExponential(priceFunc, length);
    return listOf_0(displace === 0 ? emaFunc : new DisplacementFunction(emaFunc, displace));
  };
  protoOf(EMA).mb = function (params) {
    var tmp = params.d1(Companion_getInstance_5().vb_1);
    var displace = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
    return -displace | 0;
  };
  function Elder() {
    StudyBuilder.call(this);
  }
  protoOf(Elder).yb = function (params) {
    protoOf(StudyBuilder).cc.call(this, params);
  };
  protoOf(Elder).zb = function (data, params) {
    var tmp = params.d1(Companion_getInstance_5().ub_1);
    var length = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
    var closePriceSource = new PriceSourceFunction(data, PriceFieldEnum_CLOSE_getInstance());
    var avgBull = new MovingAverageExponential(closePriceSource, length);
    var avgBear = new MovingAverageExponential(closePriceSource, length);
    var high = new PriceSourceFunction(data, PriceFieldEnum_HIGH_getInstance());
    var low = new PriceSourceFunction(data, PriceFieldEnum_LOW_getInstance());
    var bull = new ArithmeticFunction(high, avgBull, ArithmeticOperation_MINUS_getInstance());
    var bear = new ArithmeticFunction(low, avgBear, ArithmeticOperation_MINUS_getInstance());
    var zero = new ZeroFunction();
    return listOf([bull, bear, zero]);
  };
  function Companion_16() {
    Companion_instance_16 = this;
    this.zd_1 = 'priceAbove';
    this.ae_1 = 'percentAbove';
    this.be_1 = 'priceBelow';
    this.ce_1 = 'percentBelow';
  }
  var Companion_instance_16;
  function Companion_getInstance_16() {
    if (Companion_instance_16 == null)
      new Companion_16();
    return Companion_instance_16;
  }
  function EnvelopeCommon() {
    Companion_getInstance_16();
    StudyBuilder.call(this);
  }
  protoOf(EnvelopeCommon).de = function (data, params, isAbove) {
    var tmp = params.d1(Companion_getInstance_5().ub_1);
    var length = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
    var tmp_0 = params.d1(Companion_getInstance_5().vb_1);
    var displace = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE();
    var priceField;
    var percent;
    if (isAbove) {
      var tmp_1 = params.d1(Companion_getInstance_16().zd_1);
      priceField = tmp_1 instanceof PriceFieldEnum ? tmp_1 : THROW_CCE();
      var tmp_2 = params.d1(Companion_getInstance_16().ae_1);
      percent = 1 + ((!(tmp_2 == null) ? typeof tmp_2 === 'number' : false) ? tmp_2 : THROW_CCE()) / 100;
    } else {
      var tmp_3 = params.d1(Companion_getInstance_16().be_1);
      priceField = tmp_3 instanceof PriceFieldEnum ? tmp_3 : THROW_CCE();
      var tmp_4 = params.d1(Companion_getInstance_16().ce_1);
      percent = 1 - ((!(tmp_4 == null) ? typeof tmp_4 === 'number' : false) ? tmp_4 : THROW_CCE()) / 100;
    }
    var price = new PriceSourceFunction(data, priceField);
    var average = this.ee(price, length);
    var displacement = new DisplacementFunction(average, displace);
    return new ArithmeticFunction(displacement, new ConstantFunction(percent), ArithmeticOperation_MULT_getInstance());
  };
  protoOf(EnvelopeCommon).yb = function (params) {
    protoOf(StudyBuilder).cc.call(this, params);
    protoOf(StudyBuilder).ac.call(this, params);
    protoOf(StudyBuilder).ec.call(this, params, Companion_getInstance_16().zd_1);
    protoOf(StudyBuilder).hc.call(this, params, Companion_getInstance_16().ae_1);
    protoOf(StudyBuilder).ec.call(this, params, Companion_getInstance_16().be_1);
    protoOf(StudyBuilder).hc.call(this, params, Companion_getInstance_16().ce_1);
  };
  protoOf(EnvelopeCommon).zb = function (data, params) {
    var above = this.de(data, params, true);
    var below = this.de(data, params, false);
    return listOf([above, below]);
  };
  protoOf(EnvelopeCommon).mb = function (params) {
    var tmp = params.d1(Companion_getInstance_5().vb_1);
    var displace = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
    return -displace | 0;
  };
  function EnvelopeEMA() {
    EnvelopeCommon.call(this);
  }
  protoOf(EnvelopeEMA).ee = function (price, length) {
    return new MovingAverageExponential(price, length);
  };
  function EnvelopeSMA() {
    EnvelopeCommon.call(this);
  }
  protoOf(EnvelopeSMA).ee = function (price, length) {
    return new MovingAverageSimple(price, length);
  };
  function EnvelopeSMMA() {
    EnvelopeCommon.call(this);
  }
  protoOf(EnvelopeSMMA).ee = function (price, length) {
    return new MovingAverageSmoothed(price, length);
  };
  function EnvelopeWMA() {
    EnvelopeCommon.call(this);
  }
  protoOf(EnvelopeWMA).ee = function (price, length) {
    return new MovingAverageWeighted(price, length);
  };
  function Companion_17() {
    Companion_instance_17 = this;
    this.fe_1 = 'kPeriod';
    this.ge_1 = 'dPeriod';
    this.he_1 = 'overbought';
    this.ie_1 = 'oversold';
  }
  var Companion_instance_17;
  function Companion_getInstance_17() {
    if (Companion_instance_17 == null)
      new Companion_17();
    return Companion_instance_17;
  }
  function FastStochastic() {
    Companion_getInstance_17();
    StudyBuilder.call(this);
  }
  protoOf(FastStochastic).yb = function (params) {
    protoOf(StudyBuilder).bc.call(this, params, Companion_getInstance_17().fe_1);
    protoOf(StudyBuilder).bc.call(this, params, Companion_getInstance_17().ge_1);
    protoOf(StudyBuilder).bc.call(this, params, Companion_getInstance_17().he_1);
    protoOf(StudyBuilder).bc.call(this, params, Companion_getInstance_17().ie_1);
    protoOf(StudyBuilder).fc.call(this, params);
  };
  protoOf(FastStochastic).zb = function (data, params) {
    var tmp = params.d1(Companion_getInstance_17().fe_1);
    var kperiod = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
    var tmp_0 = params.d1(Companion_getInstance_17().ge_1);
    var dperiod = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE();
    var tmp_1 = params.d1(Companion_getInstance_17().he_1);
    var overbought = (!(tmp_1 == null) ? typeof tmp_1 === 'number' : false) ? tmp_1 : THROW_CCE();
    var tmp_2 = params.d1(Companion_getInstance_17().ie_1);
    var oversold = (!(tmp_2 == null) ? typeof tmp_2 === 'number' : false) ? tmp_2 : THROW_CCE();
    var tmp_3 = params.d1(Companion_getInstance_5().xb_1);
    var averageType = tmp_3 instanceof AverageTypeEnum ? tmp_3 : THROW_CCE();
    return CommonFunctions_getInstance().je(data, dperiod, overbought, oversold, kperiod, 1, averageType);
  };
  function Companion_18() {
    Companion_instance_18 = this;
    this.ke_1 = 'multiplier';
  }
  var Companion_instance_18;
  function Companion_getInstance_18() {
    if (Companion_instance_18 == null)
      new Companion_18();
    return Companion_instance_18;
  }
  function FibonacciBollingerBands() {
    Companion_getInstance_18();
    StudyBuilder.call(this);
  }
  protoOf(FibonacciBollingerBands).yb = function (params) {
    protoOf(StudyBuilder).cc.call(this, params);
    protoOf(StudyBuilder).dc.call(this, params);
    protoOf(StudyBuilder).bc.call(this, params, Companion_getInstance_18().ke_1);
  };
  protoOf(FibonacciBollingerBands).zb = function (data, params) {
    var tmp = params.d1(Companion_getInstance_5().ub_1);
    var length = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
    var tmp_0 = params.d1(Companion_getInstance_5().wb_1);
    var priceField = tmp_0 instanceof PriceFieldEnum ? tmp_0 : THROW_CCE();
    var tmp_1 = params.d1(Companion_getInstance_18().ke_1);
    var mult = (!(tmp_1 == null) ? typeof tmp_1 === 'number' : false) ? tmp_1 : THROW_CCE();
    var volume = new PriceSourceFunction(data, PriceFieldEnum_VOLUME_getInstance());
    var src = new PriceSourceFunction(data, priceField);
    var sma1 = new MovingAverageSimple(new ArithmeticFunction(volume, src, ArithmeticOperation_MULT_getInstance()), length);
    var sma2 = new MovingAverageSimple(volume, length);
    var basis = new ArithmeticFunction(sma1, sma2, ArithmeticOperation_DIV_getInstance());
    var dev = new ArithmeticFunction(new ConstantFunction(mult), new StandardDeviationFunction(src, length), ArithmeticOperation_MULT_getInstance());
    var const1 = new ArithmeticFunction(new ConstantFunction(0.236), dev, ArithmeticOperation_MULT_getInstance());
    var const2 = new ArithmeticFunction(new ConstantFunction(0.382), dev, ArithmeticOperation_MULT_getInstance());
    var const3 = new ArithmeticFunction(new ConstantFunction(0.5), dev, ArithmeticOperation_MULT_getInstance());
    var const4 = new ArithmeticFunction(new ConstantFunction(0.618), dev, ArithmeticOperation_MULT_getInstance());
    var const5 = new ArithmeticFunction(new ConstantFunction(0.764), dev, ArithmeticOperation_MULT_getInstance());
    var const6 = new ArithmeticFunction(new ConstantFunction(1.0), dev, ArithmeticOperation_MULT_getInstance());
    var upper_1 = new ArithmeticFunction(basis, const1, ArithmeticOperation_PLUS_getInstance());
    var upper_2 = new ArithmeticFunction(basis, const2, ArithmeticOperation_PLUS_getInstance());
    var upper_3 = new ArithmeticFunction(basis, const3, ArithmeticOperation_PLUS_getInstance());
    var upper_4 = new ArithmeticFunction(basis, const4, ArithmeticOperation_PLUS_getInstance());
    var upper_5 = new ArithmeticFunction(basis, const5, ArithmeticOperation_PLUS_getInstance());
    var upper_6 = new ArithmeticFunction(basis, const6, ArithmeticOperation_PLUS_getInstance());
    var lower_1 = new ArithmeticFunction(basis, const1, ArithmeticOperation_MINUS_getInstance());
    var lower_2 = new ArithmeticFunction(basis, const2, ArithmeticOperation_MINUS_getInstance());
    var lower_3 = new ArithmeticFunction(basis, const3, ArithmeticOperation_MINUS_getInstance());
    var lower_4 = new ArithmeticFunction(basis, const4, ArithmeticOperation_MINUS_getInstance());
    var lower_5 = new ArithmeticFunction(basis, const5, ArithmeticOperation_MINUS_getInstance());
    var lower_6 = new ArithmeticFunction(basis, const6, ArithmeticOperation_MINUS_getInstance());
    return listOf([basis, upper_1, upper_2, upper_3, upper_4, upper_5, upper_6, lower_1, lower_2, lower_3, lower_4, lower_5, lower_6]);
  };
  function ForceIndex() {
    StudyBuilder.call(this);
  }
  protoOf(ForceIndex).yb = function (params) {
    protoOf(StudyBuilder).cc.call(this, params);
  };
  protoOf(ForceIndex).zb = function (data, params) {
    var tmp = params.d1(Companion_getInstance_5().ub_1);
    var length = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
    var closeDiff = new DiffPrevFunction(new PriceSourceFunction(data, PriceFieldEnum_CLOSE_getInstance()));
    var cv = new ArithmeticFunction(closeDiff, new PriceSourceFunction(data, PriceFieldEnum_VOLUME_getInstance()), ArithmeticOperation_MULT_getInstance());
    var fi = new MovingAverageExponential(cv, length, 1);
    var zero = new ZeroFunction();
    return listOf([fi, zero]);
  };
  function constructFosc($this, data, params) {
    var priceClose = new PriceSourceFunction(data, PriceFieldEnum_CLOSE_getInstance());
    var yForecast = new DisplacementFunction(constructForecast($this, data, params), -1);
    var priceCloseMinusForecast = new ArithmeticFunction(priceClose, yForecast, ArithmeticOperation_MINUS_getInstance());
    var divPriceClose = new ArithmeticFunction(priceCloseMinusForecast, priceClose, ArithmeticOperation_DIV_getInstance());
    return new ArithmeticFunction(divPriceClose, new ConstantFunction(100.0), ArithmeticOperation_MULT_getInstance());
  }
  function constructForecast($this, data, params) {
    var tmp = params.d1(Companion_getInstance_5().ub_1);
    var length = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
    var priceClose = new PriceSourceFunction(data, PriceFieldEnum_CLOSE_getInstance());
    var linearRegressionCurve = new LinearRegressionCurveFunction(priceClose, length);
    var linearRegressionSlope = Companion_getInstance_28().le(data, length, PriceFieldEnum_CLOSE_getInstance());
    return new ArithmeticFunction(linearRegressionCurve, linearRegressionSlope, ArithmeticOperation_PLUS_getInstance());
  }
  function Companion_19() {
    Companion_instance_19 = this;
    this.me_1 = 'smLength';
  }
  var Companion_instance_19;
  function Companion_getInstance_19() {
    if (Companion_instance_19 == null)
      new Companion_19();
    return Companion_instance_19;
  }
  function ForecastOscillator() {
    Companion_getInstance_19();
    StudyBuilder.call(this);
  }
  protoOf(ForecastOscillator).yb = function (params) {
    protoOf(StudyBuilder).cc.call(this, params);
    protoOf(StudyBuilder).bc.call(this, params, Companion_getInstance_19().me_1);
  };
  protoOf(ForecastOscillator).zb = function (data, params) {
    var tmp = params.d1(Companion_getInstance_19().me_1);
    var smLength = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
    var fosc = constructFosc(this, data, params);
    var zero = new ZeroFunction();
    var sma = new MovingAverageSimple(fosc, smLength);
    return listOf([fosc, sma, zero]);
  };
  function Companion_20() {
    Companion_instance_20 = this;
    this.ne_1 = 'kPeriod';
    this.oe_1 = 'kSlowing';
    this.pe_1 = 'dPeriod';
    this.qe_1 = 'overbought';
    this.re_1 = 'oversold';
  }
  var Companion_instance_20;
  function Companion_getInstance_20() {
    if (Companion_instance_20 == null)
      new Companion_20();
    return Companion_instance_20;
  }
  function FullStochastic() {
    Companion_getInstance_20();
    StudyBuilder.call(this);
  }
  protoOf(FullStochastic).yb = function (params) {
    protoOf(StudyBuilder).bc.call(this, params, Companion_getInstance_20().ne_1);
    protoOf(StudyBuilder).bc.call(this, params, Companion_getInstance_20().oe_1);
    protoOf(StudyBuilder).bc.call(this, params, Companion_getInstance_20().pe_1);
    protoOf(StudyBuilder).bc.call(this, params, Companion_getInstance_20().qe_1);
    protoOf(StudyBuilder).bc.call(this, params, Companion_getInstance_20().re_1);
    protoOf(StudyBuilder).fc.call(this, params);
  };
  protoOf(FullStochastic).zb = function (data, params) {
    var tmp = params.d1(Companion_getInstance_20().ne_1);
    var kperiod = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
    var tmp_0 = params.d1(Companion_getInstance_20().oe_1);
    var kslowing = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE();
    var tmp_1 = params.d1(Companion_getInstance_20().pe_1);
    var dperiod = (!(tmp_1 == null) ? typeof tmp_1 === 'number' : false) ? tmp_1 : THROW_CCE();
    var tmp_2 = params.d1(Companion_getInstance_20().qe_1);
    var overbought = (!(tmp_2 == null) ? typeof tmp_2 === 'number' : false) ? tmp_2 : THROW_CCE();
    var tmp_3 = params.d1(Companion_getInstance_20().re_1);
    var oversold = (!(tmp_3 == null) ? typeof tmp_3 === 'number' : false) ? tmp_3 : THROW_CCE();
    var tmp_4 = params.d1(Companion_getInstance_5().xb_1);
    var averageType = tmp_4 instanceof AverageTypeEnum ? tmp_4 : THROW_CCE();
    return CommonFunctions_getInstance().je(data, dperiod, overbought, oversold, kperiod, kslowing, averageType);
  };
  function Companion_21() {
    Companion_instance_21 = this;
    this.se_1 = 'showPriceLines';
  }
  var Companion_instance_21;
  function Companion_getInstance_21() {
    if (Companion_instance_21 == null)
      new Companion_21();
    return Companion_instance_21;
  }
  function GTRAP() {
    Companion_getInstance_21();
    StudyBuilder.call(this);
  }
  protoOf(GTRAP).yb = function (params) {
    protoOf(StudyBuilder).gc.call(this, params, Companion_getInstance_21().se_1);
  };
  protoOf(GTRAP).zb = function (data, params) {
    var tmp = params.d1(Companion_getInstance_21().se_1);
    var showPriceLines = (!(tmp == null) ? typeof tmp === 'boolean' : false) ? tmp : THROW_CCE();
    var highPriceLast = new ETHPriceSourceFunction(data, PriceFieldEnum_HIGH_getInstance(), SessionSet_ONLY_LAST_getInstance());
    var lowPriceLast = new ETHPriceSourceFunction(data, PriceFieldEnum_LOW_getInstance(), SessionSet_ONLY_LAST_getInstance());
    var highPrice = new ETHPriceSourceFunction(data, PriceFieldEnum_HIGH_getInstance(), SessionSet_WITHOUT_LAST_getInstance());
    var lowPrice = new ETHPriceSourceFunction(data, PriceFieldEnum_LOW_getInstance(), SessionSet_WITHOUT_LAST_getInstance());
    var lastHighForAllCandles = new ETHPriceSourceFunction(data, PriceFieldEnum_HIGH_getInstance(), SessionSet_ONLY_LAST_FOR_ALL_CANDLES_getInstance());
    var lastLowForAllCandles = new ETHPriceSourceFunction(data, PriceFieldEnum_LOW_getInstance(), SessionSet_ONLY_LAST_FOR_ALL_CANDLES_getInstance());
    var lines = mutableListOf([highPrice, lowPrice, highPriceLast, lowPriceLast]);
    if (showPriceLines) {
      lines.r2(listOf([lastHighForAllCandles, lastLowForAllCandles]));
    } else {
      DoubleCompanionObject_getInstance();
      var tmp_0 = new ConstantFunction(NaN);
      DoubleCompanionObject_getInstance();
      lines.r2(listOf([tmp_0, new ConstantFunction(NaN)]));
    }
    return lines;
  };
  function GatorOscillator() {
    WilliamsAlligator.call(this);
  }
  protoOf(GatorOscillator).yb = function (params) {
    this.ec(params, Companion_getInstance_55().ze_1);
    this.ec(params, Companion_getInstance_55().af_1);
    this.bc(params, Companion_getInstance_55().te_1);
    this.bc(params, Companion_getInstance_55().ue_1);
    this.bc(params, Companion_getInstance_55().ve_1);
    this.bc(params, Companion_getInstance_55().we_1);
    this.bc(params, Companion_getInstance_55().xe_1);
    this.bc(params, Companion_getInstance_55().ye_1);
    this.fc(params);
  };
  protoOf(GatorOscillator).zb = function (data, params) {
    var tmp = params.d1(Companion_getInstance_55().ze_1);
    var priceHigh = tmp instanceof PriceFieldEnum ? tmp : THROW_CCE();
    var tmp_0 = params.d1(Companion_getInstance_55().af_1);
    var priceLow = tmp_0 instanceof PriceFieldEnum ? tmp_0 : THROW_CCE();
    var tmp_1 = params.d1(Companion_getInstance_55().te_1);
    var jawLength = (!(tmp_1 == null) ? typeof tmp_1 === 'number' : false) ? tmp_1 : THROW_CCE();
    var tmp_2 = params.d1(Companion_getInstance_55().ue_1);
    var jawDisplace = (!(tmp_2 == null) ? typeof tmp_2 === 'number' : false) ? tmp_2 : THROW_CCE();
    var tmp_3 = params.d1(Companion_getInstance_55().ve_1);
    var teethLength = (!(tmp_3 == null) ? typeof tmp_3 === 'number' : false) ? tmp_3 : THROW_CCE();
    var tmp_4 = params.d1(Companion_getInstance_55().we_1);
    var teethDisplace = (!(tmp_4 == null) ? typeof tmp_4 === 'number' : false) ? tmp_4 : THROW_CCE();
    var tmp_5 = params.d1(Companion_getInstance_55().xe_1);
    var lipsLength = (!(tmp_5 == null) ? typeof tmp_5 === 'number' : false) ? tmp_5 : THROW_CCE();
    var tmp_6 = params.d1(Companion_getInstance_55().ye_1);
    var lipsDisplace = (!(tmp_6 == null) ? typeof tmp_6 === 'number' : false) ? tmp_6 : THROW_CCE();
    var tmp_7 = params.d1(Companion_getInstance_5().xb_1);
    var averageType = tmp_7 instanceof AverageTypeEnum ? tmp_7 : THROW_CCE();
    var medianPrice = Companion_getInstance_55().bf(data, priceHigh, priceLow);
    var jawFunction = Companion_getInstance_55().cf(medianPrice, jawLength, -jawDisplace | 0, averageType);
    var teeth1Function = Companion_getInstance_55().cf(medianPrice, teethLength, -teethDisplace | 0, averageType);
    var teeth2Function = Companion_getInstance_55().cf(medianPrice, teethLength, -teethDisplace | 0, averageType);
    var lipsFunction = Companion_getInstance_55().cf(medianPrice, lipsLength, -lipsDisplace | 0, averageType);
    var histogram1 = new AbsFunction(new ArithmeticFunction(jawFunction, teeth1Function, ArithmeticOperation_MINUS_getInstance()));
    var histogram2 = new ArithmeticFunction(new AbsFunction(new ArithmeticFunction(teeth2Function, lipsFunction, ArithmeticOperation_MINUS_getInstance())), new ConstantFunction(-1.0), ArithmeticOperation_MULT_getInstance());
    var zero = new ZeroFunction();
    return listOf([histogram1, histogram2, zero]);
  };
  protoOf(GatorOscillator).mb = function (params) {
    var tmp = params.d1(Companion_getInstance_55().ue_1);
    var jawDisplace = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
    var tmp_0 = params.d1(Companion_getInstance_55().we_1);
    var teethDisplace = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE();
    var tmp_1 = params.d1(Companion_getInstance_55().ye_1);
    var lipsDisplace = (!(tmp_1 == null) ? typeof tmp_1 === 'number' : false) ? tmp_1 : THROW_CCE();
    return MathUtils_getInstance().df(new Int32Array([jawDisplace, teethDisplace, lipsDisplace]));
  };
  function HLVolatility() {
    StudyBuilder.call(this);
  }
  protoOf(HLVolatility).yb = function (params) {
    protoOf(StudyBuilder).cc.call(this, params);
  };
  protoOf(HLVolatility).zb = function (data, params) {
    var tmp = params.d1(Companion_getInstance_5().ub_1);
    var length = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
    var highPrice = new PriceSourceFunction(data, PriceFieldEnum_HIGH_getInstance());
    var highest = new HighestFunction(highPrice, length);
    var lowPrice = new PriceSourceFunction(data, PriceFieldEnum_LOW_getInstance());
    var lowest = new LowestFunction(lowPrice, length);
    var numerator = new ArithmeticFunction(highest, lowest, ArithmeticOperation_MINUS_getInstance());
    var emaNumerator = new MovingAverageExponential(numerator, length, length);
    var closePrice = new PriceSourceFunction(data, PriceFieldEnum_CLOSE_getInstance());
    var emaClose = new MovingAverageExponential(closePrice, length);
    var hlvFactor = new ArithmeticFunction(emaNumerator, emaClose, ArithmeticOperation_DIV_ZERO_getInstance());
    var hlv = new ArithmeticFunction(hlvFactor, new ConstantFunction(100.0), ArithmeticOperation_MULT_getInstance());
    var zero = new ZeroFunction();
    return listOf([hlv, zero]);
  };
  function createIchimokuSen($this, highPrice, lowPrice, length) {
    var maxPrice = new HighestFunction(highPrice, length);
    var minPrice = new LowestFunction(lowPrice, length);
    var maxPlusMin = new ArithmeticFunction(maxPrice, minPrice, ArithmeticOperation_PLUS_getInstance());
    return new ArithmeticFunction(maxPlusMin, new ConstantFunction(2.0), ArithmeticOperation_DIV_getInstance());
  }
  function createIchimokuSenkouSpanA($this, tenkanSen, kijunSen, displace) {
    var sum = new ArithmeticFunction(tenkanSen, kijunSen, ArithmeticOperation_PLUS_getInstance());
    var sumDiv2 = new ArithmeticFunction(sum, new ConstantFunction(2.0), ArithmeticOperation_DIV_getInstance());
    return new DisplacementFunction(sumDiv2, -displace | 0);
  }
  function Companion_22() {
    Companion_instance_22 = this;
    this.ef_1 = 'tenkanPeriod';
    this.ff_1 = 'kijunPeriod';
  }
  var Companion_instance_22;
  function Companion_getInstance_22() {
    if (Companion_instance_22 == null)
      new Companion_22();
    return Companion_instance_22;
  }
  function Ichimoku() {
    Companion_getInstance_22();
    StudyBuilder.call(this);
  }
  protoOf(Ichimoku).yb = function (params) {
    protoOf(StudyBuilder).bc.call(this, params, Companion_getInstance_22().ef_1);
    protoOf(StudyBuilder).bc.call(this, params, Companion_getInstance_22().ff_1);
  };
  protoOf(Ichimoku).zb = function (data, params) {
    var tmp = params.d1(Companion_getInstance_22().ef_1);
    var tenkanPeriod = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
    var tmp_0 = params.d1(Companion_getInstance_22().ff_1);
    var kijunPeriod = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE();
    var periods = imul(kijunPeriod, 2);
    var close = new PriceSourceFunction(data, PriceFieldEnum_CLOSE_getInstance());
    var highPrice = new PriceSourceFunction(data, PriceFieldEnum_HIGH_getInstance());
    var lowPrice = new PriceSourceFunction(data, PriceFieldEnum_LOW_getInstance());
    var tenkanSenShow = WindowFunction_init_$Create$(createIchimokuSen(Companion_getInstance_22(), highPrice, lowPrice, tenkanPeriod), 0, true);
    var tenkanSen = WindowFunction_init_$Create$(createIchimokuSen(Companion_getInstance_22(), highPrice, lowPrice, tenkanPeriod), 0, true);
    var kijunSenShow = WindowFunction_init_$Create$(createIchimokuSen(Companion_getInstance_22(), highPrice, lowPrice, kijunPeriod), 0, true);
    var kijunSen = WindowFunction_init_$Create$(createIchimokuSen(Companion_getInstance_22(), highPrice, lowPrice, kijunPeriod), 0, true);
    var chikouSpan = WindowFunction_init_$Create$(new DisplacementFunction(close, kijunPeriod), -kijunPeriod | 0, true);
    var senkouSpanA = WindowFunction_init_$Create$(createIchimokuSenkouSpanA(Companion_getInstance_22(), tenkanSen, kijunSen, kijunPeriod), kijunPeriod, true);
    var senkouSpanB = WindowFunction_init_$Create$(new DisplacementFunction(createIchimokuSen(Companion_getInstance_22(), highPrice, lowPrice, periods), -kijunPeriod | 0), kijunPeriod, true);
    return listOf([tenkanSenShow, kijunSenShow, chikouSpan, senkouSpanA, senkouSpanB]);
  };
  protoOf(Ichimoku).mb = function (params) {
    var tmp = params.d1(Companion_getInstance_22().ff_1);
    return (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
  };
  function ImpliedVolatility() {
    StudyBuilder.call(this);
  }
  protoOf(ImpliedVolatility).zb = function (data, params) {
    return listOf_0(new PriceSourceFunction(data, PriceFieldEnum_IMP_VOLATILITY_getInstance()));
  };
  function Companion_23() {
    Companion_instance_23 = this;
    this.gf_1 = 'showHistoricalVolatility';
    this.hf_1 = 30;
    this.if_1 = 252;
    this.jf_1 = 5;
  }
  var Companion_instance_23;
  function Companion_getInstance_23() {
    if (Companion_instance_23 == null)
      new Companion_23();
    return Companion_instance_23;
  }
  function getVolatilitySegregationFunctions($this, data, yearHigh, yearLow) {
    var lines = ArrayList_init_$Create$_0(Companion_getInstance_23().jf_1 - 1 | 0);
    var distanceHistoricalVolatility = new ArithmeticFunction(new ArithmeticFunction(yearHigh, yearLow, ArithmeticOperation_MINUS_getInstance()), new ConstantFunction(Companion_getInstance_23().jf_1), ArithmeticOperation_DIV_getInstance());
    var inductionVariable = Companion_getInstance_23().jf_1 - 1 | 0;
    if (1 <= inductionVariable)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        lines.a(limit($this, data, new ArithmeticFunction(yearLow, new ArithmeticFunction(new ConstantFunction(i), distanceHistoricalVolatility, ArithmeticOperation_MULT_getInstance()), ArithmeticOperation_PLUS_getInstance())));
      }
       while (1 <= inductionVariable);
    return lines;
  }
  function getHistoricalVolatilityFunction($this, data) {
    var continuouslyCompoundedReturn = new LnDivPrevFunction(new PriceSourceFunction(data, PriceFieldEnum_CLOSE_getInstance()));
    var tmp$ret$0;
    // Inline function 'kotlin.math.sqrt' call
    var tmp0_sqrt = 1.0 * Companion_getInstance_23().hf_1 * Companion_getInstance_23().if_1 / (Companion_getInstance_23().hf_1 - 1 | 0);
    tmp$ret$0 = Math.sqrt(tmp0_sqrt);
    var annualizingFactor = tmp$ret$0;
    return new ArithmeticFunction(new StandardDeviationFunction(continuouslyCompoundedReturn, Companion_getInstance_23().hf_1), new ConstantFunction(annualizingFactor), ArithmeticOperation_MULT_getInstance());
  }
  function getImpVolatilityFunction($this, data) {
    return new PriceSourceFunction(data, PriceFieldEnum_IMP_VOLATILITY_getInstance());
  }
  function limit($this, tradeDataHolder, srcFunction) {
    return new LimitFunction(tradeDataHolder, srcFunction, Companion_getInstance_23().if_1);
  }
  function ImpliedVolatilityGauge() {
    Companion_getInstance_23();
    StudyBuilder.call(this);
  }
  protoOf(ImpliedVolatilityGauge).zb = function (data, params) {
    var lines = ArrayList_init_$Create$_0((2 + Companion_getInstance_23().jf_1 | 0) + 1 | 0);
    var impVolatility = getImpVolatilityFunction(this, data);
    var historicalVolatility = getHistoricalVolatilityFunction(this, data);
    var yearHigh = new HighestFunction(historicalVolatility, Companion_getInstance_23().if_1);
    lines.a(limit(this, data, yearHigh));
    var yearLow = new LowestFunction(historicalVolatility, Companion_getInstance_23().if_1);
    lines.r2(getVolatilitySegregationFunctions(this, data, yearHigh, yearLow));
    lines.a(limit(this, data, yearLow));
    lines.a(limit(this, data, impVolatility));
    var tmp = params.d1(Companion_getInstance_23().gf_1);
    var showHistoricalVolatility = (!(tmp == null) ? typeof tmp === 'boolean' : false) ? tmp : THROW_CCE();
    if (showHistoricalVolatility) {
      lines.a(limit(this, data, historicalVolatility));
    } else {
      DoubleCompanionObject_getInstance();
      lines.a(new ConstantFunction(NaN));
    }
    return lines;
  };
  protoOf(ImpliedVolatilityGauge).yb = function (params) {
    this.gc(params, Companion_getInstance_23().gf_1);
  };
  function constructInertia($this, data, regressionLength, rviLength) {
    var rvi = Companion_getInstance_40().mf(data, rviLength);
    return new LinearRegressionCurveFunction(rvi, regressionLength);
  }
  function Companion_24() {
    Companion_instance_24 = this;
    this.nf_1 = 'rviLength';
    this.of_1 = 'regressionLength';
    this.pf_1 = new ConstantFunction(50.0);
  }
  var Companion_instance_24;
  function Companion_getInstance_24() {
    if (Companion_instance_24 == null)
      new Companion_24();
    return Companion_instance_24;
  }
  function Inertia() {
    Companion_getInstance_24();
    StudyBuilder.call(this);
  }
  protoOf(Inertia).yb = function (params) {
    protoOf(StudyBuilder).bc.call(this, params, Companion_getInstance_24().nf_1);
    protoOf(StudyBuilder).bc.call(this, params, Companion_getInstance_24().of_1);
  };
  protoOf(Inertia).zb = function (data, params) {
    var tmp = params.d1(Companion_getInstance_24().of_1);
    var regressionLength = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
    var tmp_0 = params.d1(Companion_getInstance_24().nf_1);
    var rviLength = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE();
    var inertia = constructInertia(this, data, regressionLength, rviLength);
    return listOf([inertia, Companion_getInstance_24().pf_1]);
  };
  function Companion_25() {
    Companion_instance_25 = this;
    this.qf_1 = 'overbought';
    this.rf_1 = 'oversold';
  }
  var Companion_instance_25;
  function Companion_getInstance_25() {
    if (Companion_instance_25 == null)
      new Companion_25();
    return Companion_instance_25;
  }
  function IntradayMomentumIndex() {
    Companion_getInstance_25();
    StudyBuilder.call(this);
  }
  protoOf(IntradayMomentumIndex).yb = function (params) {
    protoOf(StudyBuilder).cc.call(this, params);
    protoOf(StudyBuilder).bc.call(this, params, Companion_getInstance_25().qf_1);
    protoOf(StudyBuilder).bc.call(this, params, Companion_getInstance_25().rf_1);
  };
  protoOf(IntradayMomentumIndex).zb = function (data, params) {
    var tmp = params.d1(Companion_getInstance_5().ub_1);
    var length = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
    var tmp_0 = params.d1(Companion_getInstance_25().qf_1);
    var overbought = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE();
    var tmp_1 = params.d1(Companion_getInstance_25().rf_1);
    var oversold = (!(tmp_1 == null) ? typeof tmp_1 === 'number' : false) ? tmp_1 : THROW_CCE();
    var openPriceSourceFunction = new PriceSourceFunction(data, PriceFieldEnum_OPEN_getInstance());
    var closePriceSourceFunction = new PriceSourceFunction(data, PriceFieldEnum_CLOSE_getInstance());
    var siUp = new IntradaySumFunction(new ArithmeticFunction(closePriceSourceFunction, openPriceSourceFunction, ArithmeticOperation_MINUS_getInstance()), length);
    var siDown = new IntradaySumFunction(new ArithmeticFunction(openPriceSourceFunction, closePriceSourceFunction, ArithmeticOperation_MINUS_getInstance()), length);
    var imi = new ArithmeticFunction(new ArithmeticFunction(siUp, new ArithmeticFunction(siUp, siDown, ArithmeticOperation_PLUS_getInstance()), ArithmeticOperation_DIV_ZERO_getInstance()), new ConstantFunction(100.0), ArithmeticOperation_MULT_getInstance());
    var overboughtF = new ConstantFunction(overbought);
    var oversoldF = new ConstantFunction(oversold);
    return listOf([imi, overboughtF, oversoldF]);
  };
  function constructKRI($this, data, params) {
    var tmp = params.d1(Companion_getInstance_5().ub_1);
    var length = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
    var tmp_0 = params.d1(Companion_getInstance_5().wb_1);
    var priceField = tmp_0 instanceof PriceFieldEnum ? tmp_0 : THROW_CCE();
    var smaAverage = new MovingAverageSimple(new PriceSourceFunction(data, priceField), length);
    var smaAverage2 = new MovingAverageSimple(new PriceSourceFunction(data, priceField), length);
    var priceMinusSmaAverage = new ArithmeticFunction(new PriceSourceFunction(data, priceField), smaAverage, ArithmeticOperation_MINUS_getInstance());
    var priceMinusSmaAverageDivSmaAverage = new ArithmeticFunction(priceMinusSmaAverage, smaAverage2, ArithmeticOperation_DIV_getInstance());
    return new ArithmeticFunction(priceMinusSmaAverageDivSmaAverage, new ConstantFunction(100.0), ArithmeticOperation_MULT_getInstance());
  }
  function KRI() {
    StudyBuilder.call(this);
  }
  protoOf(KRI).yb = function (params) {
    protoOf(StudyBuilder).cc.call(this, params);
    protoOf(StudyBuilder).dc.call(this, params);
  };
  protoOf(KRI).zb = function (data, params) {
    return listOf([constructKRI(this, data, params), new ZeroFunction()]);
  };
  function get_nfastend() {
    _init_properties_KaufmanMovingAverage_kt__9kckec();
    return nfastend;
  }
  var nfastend;
  function get_nslowend() {
    _init_properties_KaufmanMovingAverage_kt__9kckec();
    return nslowend;
  }
  var nslowend;
  function get_notZero() {
    _init_properties_KaufmanMovingAverage_kt__9kckec();
    return notZero;
  }
  var notZero;
  function KaufmanMovingAverage() {
    StudyBuilder.call(this);
  }
  protoOf(KaufmanMovingAverage).yb = function (params) {
    protoOf(StudyBuilder).cc.call(this, params);
  };
  protoOf(KaufmanMovingAverage).zb = function (data, params) {
    var tmp = params.d1(Companion_getInstance_5().ub_1);
    var Length = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
    var xPrice = new PriceSourceFunction(data, PriceFieldEnum_CLOSE_getInstance());
    var xvnoise = new AbsFunction(new DiffPrevFunction(xPrice));
    var nsignal = new AbsFunction(new DiffPrevFunction(xPrice, Length));
    var nnoise = new SumFunction(xvnoise, Length);
    var nefratio = new IfFunction(get_notZero(), nnoise, new ArithmeticFunction(nsignal, nnoise, ArithmeticOperation_DIV_getInstance()), new ZeroFunction());
    var nsmooth = new ArithmeticFunction(new ArithmeticFunction(new ArithmeticFunction(nefratio, new ConstantFunction(get_nfastend() - get_nslowend()), ArithmeticOperation_MULT_getInstance()), new ConstantFunction(get_nslowend()), ArithmeticOperation_PLUS_getInstance()), new ConstantFunction(2.0), ArithmeticOperation_POW_getInstance());
    var nAMA = new KaufmanNamaFunction(nsmooth, xPrice);
    return listOf_0(nAMA);
  };
  function notZero$lambda(x) {
    _init_properties_KaufmanMovingAverage_kt__9kckec();
    return !(compareTo(x, 0.0) === 0);
  }
  var properties_initialized_KaufmanMovingAverage_kt_1imheq;
  function _init_properties_KaufmanMovingAverage_kt__9kckec() {
    if (properties_initialized_KaufmanMovingAverage_kt_1imheq) {
    } else {
      properties_initialized_KaufmanMovingAverage_kt_1imheq = true;
      nfastend = 0.666;
      nslowend = 0.0645;
      notZero = notZero$lambda;
    }
  }
  function Companion_26() {
    Companion_instance_26 = this;
    this.sf_1 = 'factor';
  }
  var Companion_instance_26;
  function Companion_getInstance_26() {
    if (Companion_instance_26 == null)
      new Companion_26();
    return Companion_instance_26;
  }
  function KeltnerChannels() {
    Companion_getInstance_26();
    StudyBuilder.call(this);
  }
  protoOf(KeltnerChannels).yb = function (params) {
    protoOf(StudyBuilder).cc.call(this, params);
    protoOf(StudyBuilder).hc.call(this, params, Companion_getInstance_26().sf_1);
    protoOf(StudyBuilder).fc.call(this, params);
  };
  protoOf(KeltnerChannels).zb = function (data, params) {
    var tmp = params.d1(Companion_getInstance_5().ub_1);
    var length = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
    var tmp_0 = params.d1(Companion_getInstance_26().sf_1);
    var factor = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE();
    var tmp_1 = params.d1(Companion_getInstance_5().wb_1);
    var priceField = tmp_1 instanceof PriceFieldEnum ? tmp_1 : THROW_CCE();
    var tmp_2 = params.d1(Companion_getInstance_5().xb_1);
    var averageType = tmp_2 instanceof AverageTypeEnum ? tmp_2 : THROW_CCE();
    var price = new PriceSourceFunction(data, priceField);
    var midLine = CommonFunctions_getInstance().zc(averageType, price, length);
    var ucEma = CommonFunctions_getInstance().zc(averageType, price, length);
    var lcEma = CommonFunctions_getInstance().zc(averageType, price, length);
    var ucAtr = new MovingAverageSimple(CommonFunctions_getInstance().yc(data), length);
    var lcAtr = new MovingAverageSimple(CommonFunctions_getInstance().yc(data), length);
    var upperBand = new ArithmeticFunction(ucEma, new ArithmeticFunction(new ConstantFunction(factor), ucAtr, ArithmeticOperation_MULT_getInstance()), ArithmeticOperation_PLUS_getInstance());
    var lowerBand = new ArithmeticFunction(lcEma, new ArithmeticFunction(new ConstantFunction(factor), lcAtr, ArithmeticOperation_MULT_getInstance()), ArithmeticOperation_MINUS_getInstance());
    return listOf([lowerBand, midLine, upperBand]);
  };
  function constructLinearRegressionCurve($this, data, params) {
    var tmp = params.d1(Companion_getInstance_5().ub_1);
    var length = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
    var tmp_0 = params.d1(Companion_getInstance_5().wb_1);
    var priceField = tmp_0 instanceof PriceFieldEnum ? tmp_0 : THROW_CCE();
    var priceSource = new PriceSourceFunction(data, priceField);
    return new LinearRegressionCurveFunction(priceSource, length);
  }
  function LinearRegression() {
    StudyBuilder.call(this);
  }
  protoOf(LinearRegression).yb = function (params) {
    protoOf(StudyBuilder).cc.call(this, params);
    protoOf(StudyBuilder).ac.call(this, params);
    protoOf(StudyBuilder).dc.call(this, params);
  };
  protoOf(LinearRegression).zb = function (data, params) {
    var tmp = params.d1(Companion_getInstance_5().vb_1);
    var displace = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
    var linearRegressionCurve = constructLinearRegressionCurve(this, data, params);
    return listOf_0(new DisplacementFunction(linearRegressionCurve, displace));
  };
  protoOf(LinearRegression).mb = function (params) {
    var tmp = params.d1(Companion_getInstance_5().vb_1);
    var displace = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
    return -displace | 0;
  };
  function constructLRChannel($this, priceSource, operation, width) {
    var linearRegression = new LinearRegressionFunction(priceSource);
    var linearRegressionMinusPriceAbs = new AbsFunction(new ArithmeticFunction(linearRegression, priceSource, ArithmeticOperation_MINUS_getInstance()));
    var highest = new HighestAllFunction(linearRegressionMinusPriceAbs);
    var channel = new ArithmeticFunction(highest, new ConstantFunction(width / 100.0), ArithmeticOperation_MULT_getInstance());
    return new ArithmeticFunction(new LinearRegressionFunction(priceSource), channel, operation);
  }
  function Companion_27() {
    Companion_instance_27 = this;
    this.tf_1 = 'width';
  }
  var Companion_instance_27;
  function Companion_getInstance_27() {
    if (Companion_instance_27 == null)
      new Companion_27();
    return Companion_instance_27;
  }
  function LinearRegressionChannel() {
    Companion_getInstance_27();
    StudyBuilder.call(this);
  }
  protoOf(LinearRegressionChannel).yb = function (params) {
    protoOf(StudyBuilder).dc.call(this, params);
    protoOf(StudyBuilder).hc.call(this, params, Companion_getInstance_27().tf_1);
  };
  protoOf(LinearRegressionChannel).zb = function (data, params) {
    var tmp = params.d1(Companion_getInstance_27().tf_1);
    var width = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
    var tmp_0 = params.d1(Companion_getInstance_5().wb_1);
    var priceField = tmp_0 instanceof PriceFieldEnum ? tmp_0 : THROW_CCE();
    var priceSource = new PriceSourceFunction(data, priceField);
    var upperChannel = constructLRChannel(this, priceSource, ArithmeticOperation_PLUS_getInstance(), width);
    var lowerChannel = constructLRChannel(this, priceSource, ArithmeticOperation_MINUS_getInstance(), width);
    return listOf([lowerChannel, new LinearRegressionFunction(new PriceSourceFunction(data, priceField)), upperChannel]);
  };
  function Companion_28() {
    Companion_instance_28 = this;
  }
  protoOf(Companion_28).le = function (data, length, priceField) {
    var c6 = new ConstantFunction(6.0);
    var priceSource = new PriceSourceFunction(data, priceField);
    var priceWma = new MovingAverageWeighted(priceSource, length);
    var priceSma = new MovingAverageSimple(priceSource, length);
    var lengthMinusOne = new ConstantFunction(length - 1 | 0);
    var priceWmaMinusPriceSma = new ArithmeticFunction(priceWma, priceSma, ArithmeticOperation_MINUS_getInstance());
    var priceWmaMinusPriceSmaMultBy6 = new ArithmeticFunction(priceWmaMinusPriceSma, c6, ArithmeticOperation_MULT_getInstance());
    return new ArithmeticFunction(priceWmaMinusPriceSmaMultBy6, lengthMinusOne, ArithmeticOperation_DIV_getInstance());
  };
  var Companion_instance_28;
  function Companion_getInstance_28() {
    if (Companion_instance_28 == null)
      new Companion_28();
    return Companion_instance_28;
  }
  function LinearRegressionSlope() {
    Companion_getInstance_28();
    StudyBuilder.call(this);
  }
  protoOf(LinearRegressionSlope).yb = function (params) {
    protoOf(StudyBuilder).cc.call(this, params);
    protoOf(StudyBuilder).dc.call(this, params);
  };
  protoOf(LinearRegressionSlope).zb = function (data, params) {
    var tmp = params.d1(Companion_getInstance_5().ub_1);
    var length = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
    var tmp_0 = params.d1(Companion_getInstance_5().wb_1);
    var priceField = tmp_0 instanceof PriceFieldEnum ? tmp_0 : THROW_CCE();
    return listOf_0(Companion_getInstance_28().le(data, length, priceField));
  };
  function constructMACDValue($this, data, params) {
    var tmp = params.d1($this.uf_1);
    var fastLength = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
    var tmp_0 = params.d1($this.vf_1);
    var slowLength = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE();
    var tmp_1 = params.d1(Companion_getInstance_5().xb_1);
    var averageType = tmp_1 instanceof AverageTypeEnum ? tmp_1 : THROW_CCE();
    var price = new PriceSourceFunction(data, PriceFieldEnum_CLOSE_getInstance());
    return $this.xf(fastLength, slowLength, averageType, price);
  }
  function constructMACDAverage($this, macd, params) {
    var tmp = params.d1($this.uf_1);
    var fastLength = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
    var tmp_0 = params.d1($this.vf_1);
    var slowLength = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE();
    var tmp_1 = params.d1($this.wf_1);
    var macdLength = (!(tmp_1 == null) ? typeof tmp_1 === 'number' : false) ? tmp_1 : THROW_CCE();
    var tmp_2 = params.d1(Companion_getInstance_5().xb_1);
    var averageType = tmp_2 instanceof AverageTypeEnum ? tmp_2 : THROW_CCE();
    var tmp_3 = CommonFunctions_getInstance();
    var tmp$ret$0;
    // Inline function 'kotlin.comparisons.maxOf' call
    tmp$ret$0 = Math.max(slowLength, fastLength);
    return tmp_3.yf(averageType, macd, macdLength, tmp$ret$0);
  }
  function constructMACDDiff($this, macd, macdAverage) {
    return new ArithmeticFunction(macd, macdAverage, ArithmeticOperation_MINUS_getInstance());
  }
  function Companion_29() {
    Companion_instance_29 = this;
    this.uf_1 = 'fastLength';
    this.vf_1 = 'slowLength';
    this.wf_1 = 'macdLength';
  }
  protoOf(Companion_29).xf = function (fastLength, slowLength, averageType, price) {
    var emaFast = CommonFunctions_getInstance().zc(averageType, price, fastLength);
    var emaSlow = CommonFunctions_getInstance().zc(averageType, price, slowLength);
    return new ArithmeticFunction(emaFast, emaSlow, ArithmeticOperation_MINUS_getInstance());
  };
  var Companion_instance_29;
  function Companion_getInstance_29() {
    if (Companion_instance_29 == null)
      new Companion_29();
    return Companion_instance_29;
  }
  function MACD() {
    Companion_getInstance_29();
    StudyBuilder.call(this);
  }
  protoOf(MACD).yb = function (params) {
    protoOf(StudyBuilder).bc.call(this, params, Companion_getInstance_29().uf_1);
    protoOf(StudyBuilder).bc.call(this, params, Companion_getInstance_29().vf_1);
    protoOf(StudyBuilder).bc.call(this, params, Companion_getInstance_29().wf_1);
    protoOf(StudyBuilder).fc.call(this, params);
  };
  protoOf(MACD).zb = function (data, params) {
    var valueForAvg1 = constructMACDValue(Companion_getInstance_29(), data, params);
    var valueForAvg2 = constructMACDValue(Companion_getInstance_29(), data, params);
    var valueForDiff = constructMACDValue(Companion_getInstance_29(), data, params);
    var valueShow = constructMACDValue(Companion_getInstance_29(), data, params);
    var avg = constructMACDAverage(Companion_getInstance_29(), valueForAvg1, params);
    var avgForDiff = constructMACDAverage(Companion_getInstance_29(), valueForAvg2, params);
    var diff = constructMACDDiff(Companion_getInstance_29(), valueForDiff, avgForDiff);
    return listOf([valueShow, avg, diff]);
  };
  function MarketFacilitationIndex() {
    StudyBuilder.call(this);
  }
  protoOf(MarketFacilitationIndex).zb = function (data, params) {
    var highPrice = new PriceSourceFunction(data, PriceFieldEnum_HIGH_getInstance());
    var lowPrice = new PriceSourceFunction(data, PriceFieldEnum_LOW_getInstance());
    var volume = new PriceSourceFunction(data, PriceFieldEnum_VOLUME_getInstance());
    var c100 = new ConstantFunction(100.0);
    var mfi = new ArithmeticFunction(new ArithmeticFunction(new ArithmeticFunction(highPrice, lowPrice, ArithmeticOperation_MINUS_getInstance()), volume, ArithmeticOperation_DIV_ZERO_getInstance()), c100, ArithmeticOperation_MULT_getInstance());
    return listOf_0(mfi);
  };
  function constructEmaHighLowDiffFunction($this, data, length) {
    var diffPrice = CommonFunctions_getInstance().id(data);
    return new MovingAverageExponential(diffPrice, length);
  }
  function Companion_30() {
    Companion_instance_30 = this;
    this.zf_1 = 'sumLength';
    this.ag_1 = 'setup';
    this.bg_1 = 'trigger';
  }
  var Companion_instance_30;
  function Companion_getInstance_30() {
    if (Companion_instance_30 == null)
      new Companion_30();
    return Companion_instance_30;
  }
  function MassIndex() {
    Companion_getInstance_30();
    StudyBuilder.call(this);
  }
  protoOf(MassIndex).yb = function (params) {
    protoOf(StudyBuilder).cc.call(this, params);
    protoOf(StudyBuilder).bc.call(this, params, Companion_getInstance_30().zf_1);
    protoOf(StudyBuilder).hc.call(this, params, Companion_getInstance_30().ag_1);
    protoOf(StudyBuilder).hc.call(this, params, Companion_getInstance_30().bg_1);
  };
  protoOf(MassIndex).zb = function (data, params) {
    var tmp = params.d1(Companion_getInstance_5().ub_1);
    var length = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
    var tmp_0 = params.d1(Companion_getInstance_30().zf_1);
    var sumLength = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE();
    var tmp_1 = params.d1(Companion_getInstance_30().ag_1);
    var setupLevel = (!(tmp_1 == null) ? typeof tmp_1 === 'number' : false) ? tmp_1 : THROW_CCE();
    var tmp_2 = params.d1(Companion_getInstance_30().bg_1);
    var triggerLevel = (!(tmp_2 == null) ? typeof tmp_2 === 'number' : false) ? tmp_2 : THROW_CCE();
    var emaDiff1 = constructEmaHighLowDiffFunction(Companion_getInstance_30(), data, length);
    var emaDiff2 = constructEmaHighLowDiffFunction(Companion_getInstance_30(), data, length);
    var emaEmaDiff = new MovingAverageExponential(emaDiff1, length, length);
    var miFract = new ArithmeticFunction(emaDiff2, emaEmaDiff, ArithmeticOperation_DIV_ZERO_getInstance());
    var mi = new SumFunction(miFract, sumLength);
    var setup = new ConstantFunction(setupLevel);
    var trigger = new ConstantFunction(triggerLevel);
    return listOf([mi, trigger, setup]);
  };
  function MedianPrice() {
    StudyBuilder.call(this);
  }
  protoOf(MedianPrice).zb = function (data, params) {
    var medianPrice = new PriceSourceFunction(data, PriceFieldEnum_MEDIAN_getInstance());
    return listOf_0(medianPrice);
  };
  function Momentum() {
    StudyBuilder.call(this);
  }
  protoOf(Momentum).yb = function (params) {
    protoOf(StudyBuilder).cc.call(this, params);
    protoOf(StudyBuilder).dc.call(this, params);
  };
  protoOf(Momentum).zb = function (data, params) {
    var tmp = params.d1(Companion_getInstance_5().ub_1);
    var length = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
    var tmp_0 = params.d1(Companion_getInstance_5().wb_1);
    var priceField = tmp_0 instanceof PriceFieldEnum ? tmp_0 : THROW_CCE();
    var price = new PriceSourceFunction(data, priceField);
    var pDelayed = new DisplacementFunction(price, -length | 0);
    var momentum = new ArithmeticFunction(price, pDelayed, ArithmeticOperation_MINUS_getInstance());
    var zero = new ZeroFunction();
    return listOf([momentum, zero]);
  };
  function constructMFI($this, data, length) {
    var sumPrice = CommonFunctions_getInstance().ed(data);
    var volume = new PriceSourceFunction(data, PriceFieldEnum_VOLUME_getInstance());
    var moneyFlowPositive = new MoneyFlowFunction(sumPrice, volume, true);
    var posAvgMF = new MovingAverageSimple(moneyFlowPositive, length);
    var moneyFlowNegative = new MoneyFlowFunction(sumPrice, volume, false);
    var totalAvgMF = new MovingAverageSimple(moneyFlowNegative, length);
    var c100 = new ConstantFunction(100.0);
    return new ArithmeticFunction(new ArithmeticFunction(posAvgMF, totalAvgMF, ArithmeticOperation_DIV_ZERO_getInstance()), c100, ArithmeticOperation_MULT_getInstance());
  }
  function Companion_31() {
    Companion_instance_31 = this;
    this.cg_1 = 'overbought';
    this.dg_1 = 'oversold';
  }
  var Companion_instance_31;
  function Companion_getInstance_31() {
    if (Companion_instance_31 == null)
      new Companion_31();
    return Companion_instance_31;
  }
  function MoneyFlowIndex() {
    Companion_getInstance_31();
    StudyBuilder.call(this);
  }
  protoOf(MoneyFlowIndex).yb = function (params) {
    protoOf(StudyBuilder).cc.call(this, params);
    protoOf(StudyBuilder).bc.call(this, params, Companion_getInstance_31().cg_1);
    protoOf(StudyBuilder).bc.call(this, params, Companion_getInstance_31().dg_1);
  };
  protoOf(MoneyFlowIndex).zb = function (data, params) {
    var tmp = params.d1(Companion_getInstance_5().ub_1);
    var length = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
    var tmp_0 = params.d1(Companion_getInstance_31().cg_1);
    var overbought = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE();
    var tmp_1 = params.d1(Companion_getInstance_31().dg_1);
    var oversold = (!(tmp_1 == null) ? typeof tmp_1 === 'number' : false) ? tmp_1 : THROW_CCE();
    var overboughtF = new ConstantFunction(overbought);
    var oversoldF = new ConstantFunction(oversold);
    var mfi = constructMFI(Companion_getInstance_31(), data, length);
    return listOf([mfi, overboughtF, oversoldF]);
  };
  function NegativeVolumeIndex() {
    StudyBuilder.call(this);
  }
  protoOf(NegativeVolumeIndex).zb = function (data, params) {
    var volume = new PriceSourceFunction(data, PriceFieldEnum_VOLUME_getInstance());
    var close = new PriceSourceFunction(data, PriceFieldEnum_CLOSE_getInstance());
    var nvi = new NegativeVolumeIndexFunction(volume, close);
    return listOf_0(nvi);
  };
  function OnBalanceVolume() {
    StudyBuilder.call(this);
  }
  protoOf(OnBalanceVolume).zb = function (data, params) {
    var close = new PriceSourceFunction(data, PriceFieldEnum_CLOSE_getInstance());
    var volume = new PriceSourceFunction(data, PriceFieldEnum_VOLUME_getInstance());
    var diffPrev = new DiffPrevFunction(close);
    var sign = new SignFunction(diffPrev);
    var bv = new ArithmeticFunction(sign, volume, ArithmeticOperation_MULT_getInstance());
    var obv = WindowFunction_init_$Create$(new CumulativeSumFunction(bv), 0, true);
    return listOf_0(obv);
  };
  function Companion_32() {
    Companion_instance_32 = this;
    this.eg_1 = 'fastLength';
    this.fg_1 = 'slowLength';
  }
  var Companion_instance_32;
  function Companion_getInstance_32() {
    if (Companion_instance_32 == null)
      new Companion_32();
    return Companion_instance_32;
  }
  function Oscillator() {
    Companion_getInstance_32();
    StudyBuilder.call(this);
  }
  protoOf(Oscillator).yb = function (params) {
    protoOf(StudyBuilder).dc.call(this, params);
    protoOf(StudyBuilder).bc.call(this, params, Companion_getInstance_32().eg_1);
    protoOf(StudyBuilder).bc.call(this, params, Companion_getInstance_32().fg_1);
  };
  protoOf(Oscillator).zb = function (data, params) {
    var tmp = params.d1(Companion_getInstance_5().wb_1);
    var priceField = tmp instanceof PriceFieldEnum ? tmp : THROW_CCE();
    var tmp_0 = params.d1(Companion_getInstance_32().eg_1);
    var fastLength = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE();
    var tmp_1 = params.d1(Companion_getInstance_32().fg_1);
    var slowLength = (!(tmp_1 == null) ? typeof tmp_1 === 'number' : false) ? tmp_1 : THROW_CCE();
    var price = new PriceSourceFunction(data, priceField);
    var smaFast = new MovingAverageSimple(price, fastLength);
    var smaSlow = new MovingAverageSimple(price, slowLength);
    var oscFactor = new ArithmeticFunction(smaFast, smaSlow, ArithmeticOperation_DIFF_DIV_RIGHT_getInstance());
    var osc = new ArithmeticFunction(oscFactor, new ConstantFunction(100.0), ArithmeticOperation_MULT_getInstance());
    var zero = new ZeroFunction();
    return listOf([osc, zero]);
  };
  function Companion_33() {
    Companion_instance_33 = this;
    this.gg_1 = 'high';
    this.hg_1 = 'low';
  }
  var Companion_instance_33;
  function Companion_getInstance_33() {
    if (Companion_instance_33 == null)
      new Companion_33();
    return Companion_instance_33;
  }
  function ParabolicSAR() {
    Companion_getInstance_33();
    StudyBuilder.call(this);
  }
  protoOf(ParabolicSAR).yb = function (params) {
    protoOf(StudyBuilder).ec.call(this, params, Companion_getInstance_33().gg_1);
    protoOf(StudyBuilder).ec.call(this, params, Companion_getInstance_33().hg_1);
  };
  protoOf(ParabolicSAR).zb = function (data, params) {
    var tmp = params.d1(Companion_getInstance_33().gg_1);
    var highField = tmp instanceof PriceFieldEnum ? tmp : THROW_CCE();
    var tmp_0 = params.d1(Companion_getInstance_33().hg_1);
    var lowField = tmp_0 instanceof PriceFieldEnum ? tmp_0 : THROW_CCE();
    var accFactor = 0.02;
    var accLimit = 0.2;
    var highPrice = new PriceSourceFunction(data, highField);
    var lowPrice = new PriceSourceFunction(data, lowField);
    var sar = WindowFunction_init_$Create$(new ParabolicSarFunction(highPrice, lowPrice, accFactor, accLimit), 0, true);
    return listOf_0(sar);
  };
  function constructPercentChange($this, data, priceField) {
    var price = new PriceSourceFunction(data, priceField);
    var priceDisplace = new DisplacementFunction(price, -1);
    var priceMinusDisplaced = new ArithmeticFunction(price, priceDisplace, ArithmeticOperation_MINUS_getInstance());
    var priceMinusDisplacedMultBy100 = new ArithmeticFunction(new ConstantFunction(100.0), priceMinusDisplaced, ArithmeticOperation_MULT_getInstance());
    return new ArithmeticFunction(priceMinusDisplacedMultBy100, priceDisplace, ArithmeticOperation_DIV_getInstance());
  }
  function PercentChange() {
    StudyBuilder.call(this);
  }
  protoOf(PercentChange).yb = function (params) {
    protoOf(StudyBuilder).dc.call(this, params);
  };
  protoOf(PercentChange).zb = function (data, params) {
    var tmp = params.d1(Companion_getInstance_5().wb_1);
    var priceField = tmp instanceof PriceFieldEnum ? tmp : THROW_CCE();
    var percentChange = constructPercentChange(this, data, priceField);
    return listOf([percentChange, new ZeroFunction()]);
  };
  function Companion_34() {
    Companion_instance_34 = this;
    this.ig_1 = 'overbought';
    this.jg_1 = 'oversold';
  }
  var Companion_instance_34;
  function Companion_getInstance_34() {
    if (Companion_instance_34 == null)
      new Companion_34();
    return Companion_instance_34;
  }
  function PercentOfResistance() {
    Companion_getInstance_34();
    StudyBuilder.call(this);
  }
  protoOf(PercentOfResistance).yb = function (params) {
    protoOf(StudyBuilder).bc.call(this, params, Companion_getInstance_5().ub_1);
    protoOf(StudyBuilder).bc.call(this, params, Companion_getInstance_34().ig_1);
    protoOf(StudyBuilder).bc.call(this, params, Companion_getInstance_34().jg_1);
  };
  protoOf(PercentOfResistance).zb = function (data, params) {
    var tmp = params.d1(Companion_getInstance_5().ub_1);
    var length = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
    var tmp_0 = params.d1(Companion_getInstance_34().ig_1);
    var overbought = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE();
    var tmp_1 = params.d1(Companion_getInstance_34().jg_1);
    var oversold = (!(tmp_1 == null) ? typeof tmp_1 === 'number' : false) ? tmp_1 : THROW_CCE();
    var lowPrice = new PriceSourceFunction(data, PriceFieldEnum_LOW_getInstance());
    var low = new LowestFunction(lowPrice, length);
    var highPrice = new PriceSourceFunction(data, PriceFieldEnum_HIGH_getInstance());
    var high = new HighestFunction(highPrice, length);
    var high2 = new HighestFunction(highPrice, length);
    var close = new PriceSourceFunction(data, PriceFieldEnum_CLOSE_getInstance());
    var cMinus100 = new ConstantFunction(-100.0);
    var numerator = new ArithmeticFunction(high, close, ArithmeticOperation_MINUS_getInstance());
    var denominator = new ArithmeticFunction(high2, low, ArithmeticOperation_MINUS_getInstance());
    var divResult = new ArithmeticFunction(numerator, denominator, ArithmeticOperation_DIV_getInstance());
    var multBycMinus100 = new ArithmeticFunction(divResult, cMinus100, ArithmeticOperation_MULT_getInstance());
    var pcrF = new ArithmeticFunction(multBycMinus100, cMinus100, ArithmeticOperation_MINUS_getInstance());
    var overboughtF = new ConstantFunction(overbought);
    var oversoldF = new ConstantFunction(oversold);
    return listOf([pcrF, overboughtF, oversoldF]);
  };
  function Companion_35() {
    Companion_instance_35 = this;
    this.kg_1 = 'fastLength';
    this.lg_1 = 'slowLength';
  }
  protoOf(Companion_35).mg = function (data, fastLength, slowLength, priceField, averageType) {
    var priceSource = new PriceSourceFunction(data, priceField);
    var priceOscillator = Companion_getInstance_38().pg(data, fastLength, slowLength, priceField, averageType);
    var priceOscillatorMultBy100 = new ArithmeticFunction(priceOscillator, new ConstantFunction(100.0), ArithmeticOperation_MULT_getInstance());
    return new ArithmeticFunction(priceOscillatorMultBy100, new MovingAverageExponential(priceSource, slowLength), ArithmeticOperation_DIV_getInstance());
  };
  var Companion_instance_35;
  function Companion_getInstance_35() {
    if (Companion_instance_35 == null)
      new Companion_35();
    return Companion_instance_35;
  }
  function PercentagePriceOscillator() {
    Companion_getInstance_35();
    StudyBuilder.call(this);
  }
  protoOf(PercentagePriceOscillator).yb = function (params) {
    protoOf(StudyBuilder).bc.call(this, params, Companion_getInstance_35().kg_1);
    protoOf(StudyBuilder).bc.call(this, params, Companion_getInstance_35().lg_1);
    protoOf(StudyBuilder).dc.call(this, params);
    protoOf(StudyBuilder).fc.call(this, params);
  };
  protoOf(PercentagePriceOscillator).zb = function (data, params) {
    var tmp = params.d1(Companion_getInstance_5().wb_1);
    var priceField = tmp instanceof PriceFieldEnum ? tmp : THROW_CCE();
    var tmp_0 = params.d1(Companion_getInstance_35().kg_1);
    var fastLength = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE();
    var tmp_1 = params.d1(Companion_getInstance_35().lg_1);
    var slowLength = (!(tmp_1 == null) ? typeof tmp_1 === 'number' : false) ? tmp_1 : THROW_CCE();
    var tmp_2 = params.d1(Companion_getInstance_5().xb_1);
    var averageType = tmp_2 instanceof AverageTypeEnum ? tmp_2 : THROW_CCE();
    var priceOscillator = Companion_getInstance_35().mg(data, fastLength, slowLength, priceField, averageType);
    return listOf([priceOscillator, new ZeroFunction()]);
  };
  function constructPivot($this, data, type) {
    var close = new PriceAggregatedSourceFunction(data, type, PriceFieldEnum_CLOSE_getInstance(), $this.sg_1);
    var hi = new PriceAggregatedSourceFunction(data, type, PriceFieldEnum_HIGH_getInstance(), $this.sg_1);
    var low = new PriceAggregatedSourceFunction(data, type, PriceFieldEnum_LOW_getInstance(), $this.sg_1);
    var pivot = new ArithmeticFunction(new ArithmeticFunction(new ArithmeticFunction(hi, low, ArithmeticOperation_PLUS_getInstance()), close, ArithmeticOperation_PLUS_getInstance()), new ConstantFunction(3.0), ArithmeticOperation_DIV_getInstance());
    var doublePivot = new ArithmeticFunction(pivot, new ConstantFunction(2.0), ArithmeticOperation_MULT_getInstance());
    var r1 = new ArithmeticFunction(doublePivot, low, ArithmeticOperation_MINUS_getInstance());
    var s1 = new ArithmeticFunction(doublePivot, hi, ArithmeticOperation_MINUS_getInstance());
    var hml = new ArithmeticFunction(hi, low, ArithmeticOperation_MINUS_getInstance());
    var r2 = new ArithmeticFunction(pivot, hml, ArithmeticOperation_PLUS_getInstance());
    var r3 = new ArithmeticFunction(r2, hml, ArithmeticOperation_PLUS_getInstance());
    var lmh = new ArithmeticFunction(low, hi, ArithmeticOperation_MINUS_getInstance());
    var s2 = new ArithmeticFunction(pivot, lmh, ArithmeticOperation_PLUS_getInstance());
    var s3 = new ArithmeticFunction(s2, lmh, ArithmeticOperation_PLUS_getInstance());
    return listOf([r3, r2, r1, pivot, s1, s2, s3]);
  }
  function Companion_36() {
    Companion_instance_36 = this;
    this.qg_1 = 'aggregation';
    this.rg_1 = 'showOnlyLast';
    this.sg_1 = -1;
  }
  var Companion_instance_36;
  function Companion_getInstance_36() {
    if (Companion_instance_36 == null)
      new Companion_36();
    return Companion_instance_36;
  }
  function PivotPoints() {
    Companion_getInstance_36();
    StudyBuilder.call(this);
  }
  protoOf(PivotPoints).yb = function (params) {
    protoOf(StudyBuilder).ic.call(this, params, Companion_getInstance_36().qg_1);
    protoOf(StudyBuilder).gc.call(this, params, Companion_getInstance_36().rg_1);
  };
  protoOf(PivotPoints).zb = function (data, params) {
    var tmp = params.d1(Companion_getInstance_36().qg_1);
    var aggregation = tmp instanceof AggregationTypeEnum ? tmp : THROW_CCE();
    return constructPivot(Companion_getInstance_36(), data, aggregation);
  };
  protoOf(PivotPoints).lb = function (params) {
    var tmp = params.d1(Companion_getInstance_36().qg_1);
    return tmp instanceof AggregationTypeEnum ? tmp : THROW_CCE();
  };
  protoOf(PivotPoints).nb = function (params) {
    var tmp = params.d1(Companion_getInstance_36().rg_1);
    return (!(tmp == null) ? typeof tmp === 'boolean' : false) ? tmp : THROW_CCE();
  };
  function Companion_37() {
    Companion_instance_37 = this;
    this.tg_1 = 'shiftLength';
  }
  var Companion_instance_37;
  function Companion_getInstance_37() {
    if (Companion_instance_37 == null)
      new Companion_37();
    return Companion_instance_37;
  }
  function PriceChannel() {
    Companion_getInstance_37();
    StudyBuilder.call(this);
  }
  protoOf(PriceChannel).yb = function (params) {
    protoOf(StudyBuilder).cc.call(this, params);
    protoOf(StudyBuilder).bc.call(this, params, Companion_getInstance_37().tg_1);
  };
  protoOf(PriceChannel).zb = function (data, params) {
    var tmp = params.d1(Companion_getInstance_5().ub_1);
    var length = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
    var tmp_0 = params.d1(Companion_getInstance_37().tg_1);
    var shiftLength = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE();
    var highPrice = new PriceSourceFunction(data, PriceFieldEnum_HIGH_getInstance());
    var highest = new HighestFunction(highPrice, length);
    var highestDisplaced = new DisplacementFunction(highest, shiftLength - 1 | 0);
    var lowPrice = new PriceSourceFunction(data, PriceFieldEnum_LOW_getInstance());
    var lowest = new LowestFunction(lowPrice, length);
    var lowestDisplaced = new DisplacementFunction(lowest, shiftLength - 1 | 0);
    return listOf([highestDisplaced, lowestDisplaced]);
  };
  protoOf(PriceChannel).mb = function (params) {
    var tmp = params.d1(Companion_getInstance_37().tg_1);
    var shiftLength = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
    return -shiftLength | 0;
  };
  function Companion_38() {
    Companion_instance_38 = this;
    this.ng_1 = 'fastLength';
    this.og_1 = 'slowLength';
  }
  protoOf(Companion_38).pg = function (data, fastLength, slowLength, priceField, averageType) {
    var priceSource = new PriceSourceFunction(data, priceField);
    var firstMovingAverage = CommonFunctions_getInstance().zc(averageType, priceSource, fastLength);
    var secondMovingAverage = CommonFunctions_getInstance().zc(averageType, priceSource, slowLength);
    return new ArithmeticFunction(firstMovingAverage, secondMovingAverage, ArithmeticOperation_MINUS_getInstance());
  };
  var Companion_instance_38;
  function Companion_getInstance_38() {
    if (Companion_instance_38 == null)
      new Companion_38();
    return Companion_instance_38;
  }
  function PriceOscillator() {
    Companion_getInstance_38();
    StudyBuilder.call(this);
  }
  protoOf(PriceOscillator).yb = function (params) {
    protoOf(StudyBuilder).bc.call(this, params, Companion_getInstance_38().ng_1);
    protoOf(StudyBuilder).bc.call(this, params, Companion_getInstance_38().og_1);
    protoOf(StudyBuilder).dc.call(this, params);
    protoOf(StudyBuilder).fc.call(this, params);
  };
  protoOf(PriceOscillator).zb = function (data, params) {
    var tmp = params.d1(Companion_getInstance_5().wb_1);
    var priceField = tmp instanceof PriceFieldEnum ? tmp : THROW_CCE();
    var tmp_0 = params.d1(Companion_getInstance_38().ng_1);
    var fastLength = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE();
    var tmp_1 = params.d1(Companion_getInstance_38().og_1);
    var slowLength = (!(tmp_1 == null) ? typeof tmp_1 === 'number' : false) ? tmp_1 : THROW_CCE();
    var tmp_2 = params.d1(Companion_getInstance_5().xb_1);
    var averageType = tmp_2 instanceof AverageTypeEnum ? tmp_2 : THROW_CCE();
    var priceOscillator = Companion_getInstance_38().pg(data, fastLength, slowLength, priceField, averageType);
    return listOf([priceOscillator, new ZeroFunction()]);
  };
  function PriceVolumeTrend() {
    StudyBuilder.call(this);
  }
  protoOf(PriceVolumeTrend).zb = function (data, params) {
    var close = new PriceSourceFunction(data, PriceFieldEnum_CLOSE_getInstance());
    var volume = new PriceSourceFunction(data, PriceFieldEnum_VOLUME_getInstance());
    var diffDivPrev = new DiffDivPrevFunction(close);
    var pv = new ArithmeticFunction(diffDivPrev, volume, ArithmeticOperation_MULT_getInstance());
    var pvt = WindowFunction_init_$Create$(new CumulativeSumFunction(pv), 0, true);
    return listOf_0(pvt);
  };
  function ROC() {
    StudyBuilder.call(this);
  }
  protoOf(ROC).yb = function (params) {
    protoOf(StudyBuilder).cc.call(this, params);
    protoOf(StudyBuilder).dc.call(this, params);
  };
  protoOf(ROC).zb = function (data, params) {
    var tmp = params.d1(Companion_getInstance_5().ub_1);
    var length = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
    var tmp_0 = params.d1(Companion_getInstance_5().wb_1);
    var priceField = tmp_0 instanceof PriceFieldEnum ? tmp_0 : THROW_CCE();
    var price = new PriceSourceFunction(data, priceField);
    var pDelayed = new DisplacementFunction(price, -length | 0);
    var rocFract = new ArithmeticFunction(price, pDelayed, ArithmeticOperation_DIFF_DIV_RIGHT_getInstance());
    var roc = new ArithmeticFunction(rocFract, new ConstantFunction(100.0), ArithmeticOperation_MULT_getInstance());
    var zero = new ZeroFunction();
    return listOf([roc, zero]);
  };
  function createRCI($this, data, params) {
    var tmp = params.d1(Companion_getInstance_5().ub_1);
    var length = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
    var tmp_0 = params.d1(Companion_getInstance_5().wb_1);
    var priceField = tmp_0 instanceof PriceFieldEnum ? tmp_0 : THROW_CCE();
    var priceSource = new PriceSourceFunction(data, priceField);
    var sumOfSquareRanks = new SpearmansRho(priceSource, length);
    return new ArithmeticFunction(sumOfSquareRanks, new ConstantFunction(100.0), ArithmeticOperation_MULT_getInstance());
  }
  function RankCorrelationIndex() {
    StudyBuilder.call(this);
    this.ug_1 = 'overbought';
    this.vg_1 = 'oversold';
    this.wg_1 = 'averageLength';
  }
  protoOf(RankCorrelationIndex).yb = function (params) {
    protoOf(StudyBuilder).dc.call(this, params);
    protoOf(StudyBuilder).cc.call(this, params);
    protoOf(StudyBuilder).bc.call(this, params, this.ug_1);
    protoOf(StudyBuilder).bc.call(this, params, this.vg_1);
    protoOf(StudyBuilder).bc.call(this, params, this.wg_1);
  };
  protoOf(RankCorrelationIndex).zb = function (data, params) {
    var tmp = params.d1(this.ug_1);
    var overbought = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
    var tmp_0 = params.d1(this.vg_1);
    var oversold = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE();
    var tmp_1 = params.d1(this.wg_1);
    var averageLength = (!(tmp_1 == null) ? typeof tmp_1 === 'number' : false) ? tmp_1 : THROW_CCE();
    var zero = new ZeroFunction();
    var rci = createRCI(this, data, params);
    var rciAverage = new MovingAverageSimple(createRCI(this, data, params), averageLength);
    return listOf([rci, rciAverage, new ConstantFunction(overbought), zero, new ConstantFunction(oversold)]);
  };
  function Companion_39() {
    Companion_instance_39 = this;
    this.xg_1 = 'overbought';
    this.yg_1 = 'oversold';
  }
  var Companion_instance_39;
  function Companion_getInstance_39() {
    if (Companion_instance_39 == null)
      new Companion_39();
    return Companion_instance_39;
  }
  function RelativeStrengthIndex() {
    Companion_getInstance_39();
    StudyBuilder.call(this);
  }
  protoOf(RelativeStrengthIndex).yb = function (params) {
    protoOf(StudyBuilder).dc.call(this, params);
    protoOf(StudyBuilder).cc.call(this, params);
    protoOf(StudyBuilder).bc.call(this, params, Companion_getInstance_39().xg_1);
    protoOf(StudyBuilder).bc.call(this, params, Companion_getInstance_39().yg_1);
    protoOf(StudyBuilder).fc.call(this, params);
  };
  protoOf(RelativeStrengthIndex).zb = function (data, params) {
    var tmp = params.d1(Companion_getInstance_5().wb_1);
    var priceField = tmp instanceof PriceFieldEnum ? tmp : THROW_CCE();
    var tmp_0 = params.d1(Companion_getInstance_5().ub_1);
    var length = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE();
    var tmp_1 = params.d1(Companion_getInstance_39().xg_1);
    var overbought = (!(tmp_1 == null) ? typeof tmp_1 === 'number' : false) ? tmp_1 : THROW_CCE();
    var tmp_2 = params.d1(Companion_getInstance_39().yg_1);
    var oversold = (!(tmp_2 == null) ? typeof tmp_2 === 'number' : false) ? tmp_2 : THROW_CCE();
    var tmp_3 = params.d1(Companion_getInstance_5().xb_1);
    var averageType = tmp_3 instanceof AverageTypeEnum ? tmp_3 : THROW_CCE();
    var priceSourceFunction = new PriceSourceFunction(data, priceField);
    var overboughtF = new ConstantFunction(overbought);
    var oversoldF = new ConstantFunction(oversold);
    var rsi = CommonFunctions_getInstance().zg(priceSourceFunction, length, averageType);
    return listOf([rsi, overboughtF, oversoldF]);
  };
  function RelativeVigorIndex() {
    StudyBuilder.call(this);
  }
  protoOf(RelativeVigorIndex).zb = function (data, params) {
    var rvi = CommonFunctions_getInstance().ah(data);
    return listOf_0(rvi);
  };
  function RelativeVigorIndexSMA() {
    StudyBuilder.call(this);
  }
  protoOf(RelativeVigorIndexSMA).yb = function (params) {
    protoOf(StudyBuilder).cc.call(this, params);
  };
  protoOf(RelativeVigorIndexSMA).zb = function (data, params) {
    var tmp = params.d1(Companion_getInstance_5().ub_1);
    var length = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
    var smaRvi = new MovingAverageSimple(CommonFunctions_getInstance().ah(data), length);
    return listOf_0(smaRvi);
  };
  function Companion_40() {
    Companion_instance_40 = this;
    this.kf_1 = 'overbought';
    this.lf_1 = 'oversold';
  }
  protoOf(Companion_40).mf = function (data, length) {
    var hiPrice = new PriceSourceFunction(data, PriceFieldEnum_HIGH_getInstance());
    var loPrice = new PriceSourceFunction(data, PriceFieldEnum_LOW_getInstance());
    var highRVI = new RelativeVolatilityFunction(hiPrice, length);
    var lowRVI = new RelativeVolatilityFunction(loPrice, length);
    return new ArithmeticFunction(new ArithmeticFunction(highRVI, lowRVI, ArithmeticOperation_PLUS_getInstance()), new ConstantFunction(2.0), ArithmeticOperation_DIV_getInstance());
  };
  var Companion_instance_40;
  function Companion_getInstance_40() {
    if (Companion_instance_40 == null)
      new Companion_40();
    return Companion_instance_40;
  }
  function RelativeVolatilityIndex() {
    Companion_getInstance_40();
    StudyBuilder.call(this);
  }
  protoOf(RelativeVolatilityIndex).yb = function (params) {
    protoOf(StudyBuilder).cc.call(this, params);
    protoOf(StudyBuilder).bc.call(this, params, Companion_getInstance_40().kf_1);
    protoOf(StudyBuilder).bc.call(this, params, Companion_getInstance_40().lf_1);
  };
  protoOf(RelativeVolatilityIndex).zb = function (data, params) {
    var tmp = params.d1(Companion_getInstance_5().ub_1);
    var length = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
    var tmp_0 = params.d1(Companion_getInstance_40().kf_1);
    var overbought = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE();
    var tmp_1 = params.d1(Companion_getInstance_40().lf_1);
    var oversold = (!(tmp_1 == null) ? typeof tmp_1 === 'number' : false) ? tmp_1 : THROW_CCE();
    var rvi = Companion_getInstance_40().mf(data, length);
    return listOf([rvi, new ConstantFunction(overbought), new ConstantFunction(oversold)]);
  };
  function SMA() {
    StudyBuilder.call(this);
  }
  protoOf(SMA).yb = function (params) {
    protoOf(StudyBuilder).cc.call(this, params);
    protoOf(StudyBuilder).dc.call(this, params);
    protoOf(StudyBuilder).ac.call(this, params);
  };
  protoOf(SMA).zb = function (data, params) {
    var tmp = params.d1(Companion_getInstance_5().ub_1);
    var length = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
    var tmp_0 = params.d1(Companion_getInstance_5().vb_1);
    var displace = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE();
    var tmp_1 = params.d1(Companion_getInstance_5().wb_1);
    var priceField = tmp_1 instanceof PriceFieldEnum ? tmp_1 : THROW_CCE();
    var priceFunc = new PriceSourceFunction(data, priceField);
    var smaFunc = new MovingAverageSimple(priceFunc, length);
    var displacedSmaFunc = new DisplacementFunction(smaFunc, displace);
    return listOf_0(displacedSmaFunc);
  };
  protoOf(SMA).mb = function (params) {
    var tmp = params.d1(Companion_getInstance_5().vb_1);
    var displace = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
    return -displace | 0;
  };
  function SMMA() {
    StudyBuilder.call(this);
  }
  protoOf(SMMA).yb = function (params) {
    protoOf(StudyBuilder).cc.call(this, params);
    protoOf(StudyBuilder).dc.call(this, params);
    protoOf(StudyBuilder).ac.call(this, params);
  };
  protoOf(SMMA).zb = function (data, params) {
    var tmp = params.d1(Companion_getInstance_5().ub_1);
    var length = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
    var tmp_0 = params.d1(Companion_getInstance_5().vb_1);
    var displace = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE();
    var tmp_1 = params.d1(Companion_getInstance_5().wb_1);
    var priceField = tmp_1 instanceof PriceFieldEnum ? tmp_1 : THROW_CCE();
    var priceFunc = new PriceSourceFunction(data, priceField);
    var smaFunc = new MovingAverageSmoothed(priceFunc, length);
    var displacedSmaFunc = new DisplacementFunction(smaFunc, displace);
    return listOf_0(displacedSmaFunc);
  };
  protoOf(SMMA).mb = function (params) {
    var tmp = params.d1(Companion_getInstance_5().vb_1);
    var displace = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
    return -displace | 0;
  };
  function Companion_41() {
    Companion_instance_41 = this;
    this.bh_1 = 'shiftLength';
  }
  var Companion_instance_41;
  function Companion_getInstance_41() {
    if (Companion_instance_41 == null)
      new Companion_41();
    return Companion_instance_41;
  }
  function SROC() {
    Companion_getInstance_41();
    StudyBuilder.call(this);
  }
  protoOf(SROC).yb = function (params) {
    protoOf(StudyBuilder).cc.call(this, params);
    protoOf(StudyBuilder).dc.call(this, params);
    protoOf(StudyBuilder).bc.call(this, params, Companion_getInstance_41().bh_1);
  };
  protoOf(SROC).zb = function (data, params) {
    var tmp = params.d1(Companion_getInstance_5().ub_1);
    var length = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
    var tmp_0 = params.d1(Companion_getInstance_41().bh_1);
    var shiftLength = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE();
    var tmp_1 = params.d1(Companion_getInstance_5().wb_1);
    var priceField = tmp_1 instanceof PriceFieldEnum ? tmp_1 : THROW_CCE();
    var price = new PriceSourceFunction(data, priceField);
    var emaPrice = new MovingAverageExponential(price, length);
    var emaPriceForDelay = new MovingAverageExponential(price, length);
    var emaPriceDelayed = new DisplacementFunction(emaPriceForDelay, -shiftLength | 0);
    var srocFract = new ArithmeticFunction(emaPrice, emaPriceDelayed, ArithmeticOperation_DIFF_DIV_RIGHT_getInstance());
    var sroc = new ArithmeticFunction(srocFract, new ConstantFunction(100.0), ArithmeticOperation_MULT_getInstance());
    var zero = new ZeroFunction();
    return listOf([sroc, zero]);
  };
  function priceSma($this, data, priceField, smaLength) {
    return new MovingAverageSimple(new PriceSourceFunction(data, priceField), smaLength);
  }
  function Companion_42() {
    Companion_instance_42 = this;
    this.ch_1 = 'multiplierFactor';
    this.dh_1 = 'atrLength';
    this.eh_1 = 'smaLength';
  }
  var Companion_instance_42;
  function Companion_getInstance_42() {
    if (Companion_instance_42 == null)
      new Companion_42();
    return Companion_instance_42;
  }
  function STARCBands() {
    Companion_getInstance_42();
    StudyBuilder.call(this);
  }
  protoOf(STARCBands).yb = function (params) {
    protoOf(StudyBuilder).dc.call(this, params);
    protoOf(StudyBuilder).hc.call(this, params, Companion_getInstance_42().ch_1);
    protoOf(StudyBuilder).bc.call(this, params, Companion_getInstance_42().dh_1);
    protoOf(StudyBuilder).bc.call(this, params, Companion_getInstance_42().eh_1);
    protoOf(StudyBuilder).bc.call(this, params, Companion_getInstance_5().vb_1);
  };
  protoOf(STARCBands).zb = function (data, params) {
    var tmp = params.d1(Companion_getInstance_42().ch_1);
    var multiplierFactor = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
    var tmp_0 = params.d1(Companion_getInstance_42().dh_1);
    var atrLength = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE();
    var tmp_1 = params.d1(Companion_getInstance_42().eh_1);
    var smaLength = (!(tmp_1 == null) ? typeof tmp_1 === 'number' : false) ? tmp_1 : THROW_CCE();
    var tmp_2 = params.d1(Companion_getInstance_5().vb_1);
    var displace = (!(tmp_2 == null) ? typeof tmp_2 === 'number' : false) ? tmp_2 : THROW_CCE();
    var tmp_3 = params.d1(Companion_getInstance_5().wb_1);
    var priceField = tmp_3 instanceof PriceFieldEnum ? tmp_3 : THROW_CCE();
    var upper = new ArithmeticFunction(priceSma(Companion_getInstance_42(), data, priceField, smaLength), new ArithmeticFunction(new ConstantFunction(multiplierFactor), CommonFunctions_getInstance().fh(data, atrLength), ArithmeticOperation_MULT_getInstance()), ArithmeticOperation_PLUS_getInstance());
    var upperDisplace = new DisplacementFunction(upper, displace);
    var lower = new ArithmeticFunction(priceSma(Companion_getInstance_42(), data, priceField, smaLength), new ArithmeticFunction(new ConstantFunction(multiplierFactor), CommonFunctions_getInstance().fh(data, atrLength), ArithmeticOperation_MULT_getInstance()), ArithmeticOperation_MINUS_getInstance());
    var lowerDisplace = new DisplacementFunction(lower, displace);
    var sma = priceSma(Companion_getInstance_42(), data, priceField, smaLength);
    var smaDisplace = new DisplacementFunction(sma, displace);
    return listOf([lowerDisplace, smaDisplace, upperDisplace]);
  };
  protoOf(STARCBands).mb = function (params) {
    var tmp = params.d1(Companion_getInstance_5().vb_1);
    var displace = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
    return -displace | 0;
  };
  function buildSchaffPF($this, length, func, slowing, offset) {
    var lowest = new LowestFunction(func, length);
    var range = new ArithmeticFunction(new HighestFunction(func, length), lowest, ArithmeticOperation_MINUS_getInstance());
    var fastK = CommonFunctions_getInstance().gh(func, lowest, range);
    var scaffFracOffset = offset + (length - 1 | 0) | 0;
    var schaffFrac = new SchaffTrendFrac(range, fastK, scaffFracOffset);
    return new MovingAverageExponential(schaffFrac, slowing, scaffFracOffset);
  }
  function Companion_43() {
    Companion_instance_43 = this;
    this.hh_1 = 'fastLength';
    this.ih_1 = 'slowLength';
    this.jh_1 = 'kPeriod';
    this.kh_1 = 'kSlowing';
    this.lh_1 = new ConstantFunction(20.0);
    this.mh_1 = new ConstantFunction(80.0);
  }
  var Companion_instance_43;
  function Companion_getInstance_43() {
    if (Companion_instance_43 == null)
      new Companion_43();
    return Companion_instance_43;
  }
  function SchaffTrendCycle() {
    Companion_getInstance_43();
    StudyBuilder.call(this);
  }
  protoOf(SchaffTrendCycle).yb = function (params) {
    protoOf(StudyBuilder).bc.call(this, params, Companion_getInstance_43().jh_1);
    protoOf(StudyBuilder).bc.call(this, params, Companion_getInstance_43().hh_1);
    protoOf(StudyBuilder).bc.call(this, params, Companion_getInstance_43().ih_1);
    protoOf(StudyBuilder).bc.call(this, params, Companion_getInstance_43().kh_1);
  };
  protoOf(SchaffTrendCycle).zb = function (data, params) {
    var tmp = params.d1(Companion_getInstance_43().jh_1);
    var kPeriod = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
    var tmp_0 = params.d1(Companion_getInstance_43().hh_1);
    var fastLength = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE();
    var tmp_1 = params.d1(Companion_getInstance_43().ih_1);
    var slowLength = (!(tmp_1 == null) ? typeof tmp_1 === 'number' : false) ? tmp_1 : THROW_CCE();
    var tmp_2 = params.d1(Companion_getInstance_43().kh_1);
    var slowing = (!(tmp_2 == null) ? typeof tmp_2 === 'number' : false) ? tmp_2 : THROW_CCE();
    var price = new PriceSourceFunction(data, PriceFieldEnum_CLOSE_getInstance());
    var macd = Companion_getInstance_29().xf(fastLength, slowLength, AverageTypeEnum_EXPONENTIAL_getInstance(), price);
    var tmp$ret$0;
    // Inline function 'kotlin.comparisons.maxOf' call
    tmp$ret$0 = Math.max(fastLength, slowLength);
    var pfOffset = tmp$ret$0 - 1 | 0;
    var pf = buildSchaffPF(this, kPeriod, macd, slowing, pfOffset);
    var pffOffset = (pfOffset + (kPeriod - 1 | 0) | 0) + (slowing - 1 | 0) | 0;
    var pff = buildSchaffPF(this, kPeriod, pf, slowing, pffOffset);
    return listOf([pff, Companion_getInstance_43().mh_1, Companion_getInstance_43().lh_1]);
  };
  function Companion_44() {
    Companion_instance_44 = this;
    this.nh_1 = 'kPeriod';
    this.oh_1 = 'dPeriod';
    this.ph_1 = 'overbought';
    this.qh_1 = 'oversold';
  }
  var Companion_instance_44;
  function Companion_getInstance_44() {
    if (Companion_instance_44 == null)
      new Companion_44();
    return Companion_instance_44;
  }
  function SlowStochastic() {
    Companion_getInstance_44();
    StudyBuilder.call(this);
  }
  protoOf(SlowStochastic).yb = function (params) {
    protoOf(StudyBuilder).bc.call(this, params, Companion_getInstance_44().nh_1);
    protoOf(StudyBuilder).bc.call(this, params, Companion_getInstance_44().oh_1);
    protoOf(StudyBuilder).bc.call(this, params, Companion_getInstance_44().ph_1);
    protoOf(StudyBuilder).bc.call(this, params, Companion_getInstance_44().qh_1);
    protoOf(StudyBuilder).fc.call(this, params);
  };
  protoOf(SlowStochastic).zb = function (data, params) {
    var tmp = params.d1(Companion_getInstance_44().nh_1);
    var kperiod = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
    var tmp_0 = params.d1(Companion_getInstance_44().oh_1);
    var dperiod = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE();
    var tmp_1 = params.d1(Companion_getInstance_44().ph_1);
    var overbought = (!(tmp_1 == null) ? typeof tmp_1 === 'number' : false) ? tmp_1 : THROW_CCE();
    var tmp_2 = params.d1(Companion_getInstance_44().qh_1);
    var oversold = (!(tmp_2 == null) ? typeof tmp_2 === 'number' : false) ? tmp_2 : THROW_CCE();
    var tmp_3 = params.d1(Companion_getInstance_5().xb_1);
    var averageType = tmp_3 instanceof AverageTypeEnum ? tmp_3 : THROW_CCE();
    return CommonFunctions_getInstance().je(data, dperiod, overbought, oversold, kperiod, 3, averageType);
  };
  function StandardDeviation() {
    StudyBuilder.call(this);
  }
  protoOf(StandardDeviation).yb = function (params) {
    protoOf(StudyBuilder).dc.call(this, params);
    protoOf(StudyBuilder).cc.call(this, params);
  };
  protoOf(StandardDeviation).zb = function (data, params) {
    var tmp = params.d1(Companion_getInstance_5().wb_1);
    var priceField = tmp instanceof PriceFieldEnum ? tmp : THROW_CCE();
    var tmp_0 = params.d1(Companion_getInstance_5().ub_1);
    var length = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE();
    var price = new PriceSourceFunction(data, priceField);
    var stdDev = new StandardDeviationFunction(price, length);
    return listOf_0(stdDev);
  };
  function Companion_45() {
    Companion_instance_45 = this;
    this.rh_1 = 'deviations';
  }
  var Companion_instance_45;
  function Companion_getInstance_45() {
    if (Companion_instance_45 == null)
      new Companion_45();
    return Companion_instance_45;
  }
  function StandardDeviationChannel() {
    Companion_getInstance_45();
    StudyBuilder.call(this);
  }
  protoOf(StandardDeviationChannel).yb = function (params) {
    protoOf(StudyBuilder).cc.call(this, params);
    protoOf(StudyBuilder).dc.call(this, params);
    protoOf(StudyBuilder).hc.call(this, params, Companion_getInstance_45().rh_1);
  };
  protoOf(StandardDeviationChannel).zb = function (data, params) {
    var tmp = params.d1(Companion_getInstance_5().ub_1);
    var length = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
    var tmp_0 = params.d1(Companion_getInstance_5().wb_1);
    var priceField = tmp_0 instanceof PriceFieldEnum ? tmp_0 : THROW_CCE();
    var tmp_1 = params.d1(Companion_getInstance_45().rh_1);
    var deviations = (!(tmp_1 == null) ? typeof tmp_1 === 'number' : false) ? tmp_1 : THROW_CCE();
    var dataObj = data instanceof DataItemsView ? data : THROW_CCE();
    var tmp_2 = dataObj.sa_1;
    var candlesDataHolder = tmp_2 instanceof CandleTradeDataHolder ? tmp_2 : THROW_CCE();
    var tmp_3 = candlesDataHolder.s7_1.j3(data.a8() - length | 0, data.a8());
    var targetCandles = isInterface(tmp_3, MutableList) ? tmp_3 : THROW_CCE();
    var newCandlesDataHolder = new CandleTradeDataHolder(targetCandles);
    var price = new PriceSourceFunction(newCandlesDataHolder, priceField);
    var lrcForHigh = WindowFunction_init_$Create$(new LinearRegressionFunction(price), 0, true);
    var lrcForLow = WindowFunction_init_$Create$(new LinearRegressionFunction(price), 0, true);
    var lrcShow = WindowFunction_init_$Create$(new LinearRegressionFunction(price), 0, true);
    var stdhMultHigh = new ArithmeticFunction(lrcForHigh, new ConstantFunction(deviations / 10), ArithmeticOperation_MULT_getInstance());
    var stdhMultLow = new ArithmeticFunction(lrcForLow, new ConstantFunction(deviations / 10), ArithmeticOperation_MULT_getInstance());
    var highLineAr = new ArithmeticFunction(lrcForHigh, stdhMultHigh, ArithmeticOperation_PLUS_getInstance());
    var lowLineAr = new ArithmeticFunction(lrcForLow, stdhMultLow, ArithmeticOperation_MINUS_getInstance());
    var highLine = new DisplacementFunction(highLineAr, (-data.a8() | 0) + length | 0);
    var midLine = new DisplacementFunction(lrcShow, (-data.a8() | 0) + length | 0);
    var lowLine = new DisplacementFunction(lowLineAr, (-data.a8() | 0) + length | 0);
    return listOf([midLine, highLine, lowLine]);
  };
  function constructMainFunction($this, data, priceField, smLength, linRegLength) {
    var lrc = new LinearRegressionCurveFunction(new PriceSourceFunction(data, priceField), linRegLength);
    return new MovingAverageSimple(lrc, smLength);
  }
  function constructBandFunction_0($this, data, priceField, smLength, linRegLength, numDev) {
    var mainFunction = constructMainFunction($this, data, priceField, smLength, linRegLength);
    var see = new MovingAverageSimple(new StandardErrorOfEstimationFunction(new PriceSourceFunction(data, priceField), linRegLength), smLength);
    return new ArithmeticFunction(new ArithmeticFunction(see, new ConstantFunction(numDev), ArithmeticOperation_MULT_getInstance()), mainFunction, ArithmeticOperation_PLUS_getInstance());
  }
  function Companion_46() {
    Companion_instance_46 = this;
    this.sh_1 = 'linRegLength';
    this.th_1 = 'smLength';
    this.uh_1 = 'numDevUp';
    this.vh_1 = 'numDevDown';
  }
  var Companion_instance_46;
  function Companion_getInstance_46() {
    if (Companion_instance_46 == null)
      new Companion_46();
    return Companion_instance_46;
  }
  function StandardErrorBands() {
    Companion_getInstance_46();
    StudyBuilder.call(this);
  }
  protoOf(StandardErrorBands).yb = function (params) {
    protoOf(StudyBuilder).dc.call(this, params);
    protoOf(StudyBuilder).bc.call(this, params, Companion_getInstance_46().sh_1);
    protoOf(StudyBuilder).bc.call(this, params, Companion_getInstance_46().th_1);
    protoOf(StudyBuilder).ac.call(this, params);
    protoOf(StudyBuilder).hc.call(this, params, Companion_getInstance_46().uh_1);
    protoOf(StudyBuilder).hc.call(this, params, Companion_getInstance_46().vh_1);
  };
  protoOf(StandardErrorBands).zb = function (data, params) {
    var tmp = params.d1(Companion_getInstance_5().wb_1);
    var priceField = tmp instanceof PriceFieldEnum ? tmp : THROW_CCE();
    var tmp_0 = params.d1(Companion_getInstance_46().sh_1);
    var linRegLength = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE();
    var tmp_1 = params.d1(Companion_getInstance_46().th_1);
    var smLength = (!(tmp_1 == null) ? typeof tmp_1 === 'number' : false) ? tmp_1 : THROW_CCE();
    var tmp_2 = params.d1(Companion_getInstance_5().vb_1);
    var displace = (!(tmp_2 == null) ? typeof tmp_2 === 'number' : false) ? tmp_2 : THROW_CCE();
    var tmp_3 = params.d1(Companion_getInstance_46().uh_1);
    var numDevUp = (!(tmp_3 == null) ? typeof tmp_3 === 'number' : false) ? tmp_3 : THROW_CCE();
    var tmp_4 = params.d1(Companion_getInstance_46().vh_1);
    var numDevDown = (!(tmp_4 == null) ? typeof tmp_4 === 'number' : false) ? tmp_4 : THROW_CCE();
    return listOf([new DisplacementFunction(constructBandFunction_0(Companion_getInstance_46(), data, priceField, smLength, linRegLength, numDevDown), displace), new DisplacementFunction(constructMainFunction(Companion_getInstance_46(), data, priceField, smLength, linRegLength), displace), new DisplacementFunction(constructBandFunction_0(Companion_getInstance_46(), data, priceField, smLength, linRegLength, numDevUp), displace)]);
  };
  protoOf(StandardErrorBands).mb = function (params) {
    var tmp = params.d1(Companion_getInstance_5().vb_1);
    var displace = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
    return -displace | 0;
  };
  function StdDevVolatility() {
    StudyBuilder.call(this);
  }
  protoOf(StdDevVolatility).yb = function (params) {
    protoOf(StudyBuilder).cc.call(this, params);
    protoOf(StudyBuilder).dc.call(this, params);
  };
  protoOf(StdDevVolatility).zb = function (data, params) {
    var tmp = params.d1(Companion_getInstance_5().ub_1);
    var length = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
    var tmp_0 = params.d1(Companion_getInstance_5().wb_1);
    var priceField = tmp_0 instanceof PriceFieldEnum ? tmp_0 : THROW_CCE();
    var priceFunction = new PriceSourceFunction(data, priceField);
    var lnDivPrevious = new LnDivPrevFunction(priceFunction);
    var sigma = new StandardDeviationFunction(lnDivPrevious, length);
    return listOf_0(sigma);
  };
  var StudyBuilderFactory_WILLIAMS_FRACTAL_instance;
  var StudyBuilderFactory_PERCENTAGE_PRICE_OSCILLATOR_instance;
  var StudyBuilderFactory_DYNAMIC_MOMENTUM_INDEX_instance;
  var StudyBuilderFactory_WILLIAMS_AD_instance;
  var StudyBuilderFactory_PRICE_OSCILLATOR_instance;
  var StudyBuilderFactory_PERCENT_CHANGE_instance;
  var StudyBuilderFactory_LINEAR_REGRESSION_SLOPE_instance;
  var StudyBuilderFactory_LINEAR_REGRESSION_CHANNEL_instance;
  var StudyBuilderFactory_COMMODITY_SELECTION_instance;
  var StudyBuilderFactory_LINEAR_REGRESSION_instance;
  var StudyBuilderFactory_INERTIA_instance;
  var StudyBuilderFactory_KRI_instance;
  var StudyBuilderFactory_RANK_CORRELATION_INDEX_instance;
  var StudyBuilderFactory_SWING_ACCUMULATION_instance;
  var StudyBuilderFactory_AROON_OSCILLATOR_instance;
  var StudyBuilderFactory_AROON_instance;
  var StudyBuilderFactory_SWING_INDEX_instance;
  var StudyBuilderFactory_STARCBANDS_instance;
  var StudyBuilderFactory_FORECAST_OSCILLATOR_instance;
  var StudyBuilderFactory_KELTNER_CHANNELS_instance;
  var StudyBuilderFactory_TEMA_instance;
  var StudyBuilderFactory_TYPICAL_PRICE_instance;
  var StudyBuilderFactory_DEMA_instance;
  var StudyBuilderFactory_MEDIAN_PRICE_instance;
  var StudyBuilderFactory_FULL_STOCHASTIC_instance;
  var StudyBuilderFactory_STANDARD_ERROR_BANDS_instance;
  var StudyBuilderFactory_PERCENT_OF_RESISTANCE_instance;
  var StudyBuilderFactory_CENTER_OF_GRAVITY_OSCILLATOR_instance;
  var StudyBuilderFactory_ACCELERATION_DECELERATION_instance;
  var StudyBuilderFactory_ACCUMULATION_DISTRIBUTION_instance;
  var StudyBuilderFactory_ADX_instance;
  var StudyBuilderFactory_ADXR_instance;
  var StudyBuilderFactory_AVERAGE_TRUE_RANGE_instance;
  var StudyBuilderFactory_AWESOME_OSCILLATOR_instance;
  var StudyBuilderFactory_BOLLINGER_BANDS_instance;
  var StudyBuilderFactory_CCI_instance;
  var StudyBuilderFactory_CHAIKIN_OSCILLATOR_instance;
  var StudyBuilderFactory_CHAIKIN_VOLATILITY_instance;
  var StudyBuilderFactory_CHANDE_MOMENTUM_OSCILLATOR_instance;
  var StudyBuilderFactory_DE_MARKER_instance;
  var StudyBuilderFactory_DETRENDED_PRICE_OSC_instance;
  var StudyBuilderFactory_DMI_instance;
  var StudyBuilderFactory_ELDER_instance;
  var StudyBuilderFactory_EMA_instance;
  var StudyBuilderFactory_ENVELOPE_EMA_instance;
  var StudyBuilderFactory_ENVELOPE_SMA_instance;
  var StudyBuilderFactory_ENVELOPE_SMMA_instance;
  var StudyBuilderFactory_ENVELOPE_WMA_instance;
  var StudyBuilderFactory_FAST_STOCHASTIC_instance;
  var StudyBuilderFactory_FORCE_INDEX_instance;
  var StudyBuilderFactory_GATOR_OSCILLATOR_instance;
  var StudyBuilderFactory_HLVOLATILITY_instance;
  var StudyBuilderFactory_ICHIMOKU_instance;
  var StudyBuilderFactory_INTRADAY_MOMENTUM_INDEX_instance;
  var StudyBuilderFactory_MACD_instance;
  var StudyBuilderFactory_MARKET_FACILITATION_INDEX_instance;
  var StudyBuilderFactory_MASS_INDEX_instance;
  var StudyBuilderFactory_MOMENTUM_instance;
  var StudyBuilderFactory_MONEY_FLOW_INDEX_instance;
  var StudyBuilderFactory_NEGATIVE_VOLUME_INDEX_instance;
  var StudyBuilderFactory_ON_BALANCE_VOLUME_instance;
  var StudyBuilderFactory_DAY_OPEN_CLOSE_instance;
  var StudyBuilderFactory_OSCILLATOR_instance;
  var StudyBuilderFactory_PARABOLIC_SAR_instance;
  var StudyBuilderFactory_PIVOT_POINTS_instance;
  var StudyBuilderFactory_PRICE_CHANNEL_instance;
  var StudyBuilderFactory_PRICE_VOLUME_TREND_instance;
  var StudyBuilderFactory_RELATIVE_STRENGTH_INDEX_instance;
  var StudyBuilderFactory_RELATIVE_VIGOR_INDEX_instance;
  var StudyBuilderFactory_RELATIVE_VIGOR_INDEX_SMA_instance;
  var StudyBuilderFactory_RELATIVE_VOLATILITY_INDEX_instance;
  var StudyBuilderFactory_ROC_instance;
  var StudyBuilderFactory_SLOW_STOCHASTIC_instance;
  var StudyBuilderFactory_SMA_instance;
  var StudyBuilderFactory_SMMA_instance;
  var StudyBuilderFactory_SROC_instance;
  var StudyBuilderFactory_SCHAFF_TREND_CYCLE_instance;
  var StudyBuilderFactory_STANDARD_DEVIATION_CHANNEL_instance;
  var StudyBuilderFactory_STANDARD_DEVIATION_instance;
  var StudyBuilderFactory_STD_DEV_VOLATILITY_instance;
  var StudyBuilderFactory_TIME_SERIES_FORECAST_instance;
  var StudyBuilderFactory_TMA_instance;
  var StudyBuilderFactory_TRIPLE_EMA_instance;
  var StudyBuilderFactory_TRUE_STRENGTH_INDEX_instance;
  var StudyBuilderFactory_ULTIMATE_OSCILLATOR_instance;
  var StudyBuilderFactory_VERTICAL_HORIZONTAL_FILTER_instance;
  var StudyBuilderFactory_VWAP_instance;
  var StudyBuilderFactory_WEIGHTED_CLOSE_instance;
  var StudyBuilderFactory_WILDERS_SMOOTHING_instance;
  var StudyBuilderFactory_WILLIAMS_ALLIGATOR_instance;
  var StudyBuilderFactory_WILLIAMS_PERCENT_RANGE_instance;
  var StudyBuilderFactory_WMA_instance;
  var StudyBuilderFactory_ZIG_ZAG_instance;
  var StudyBuilderFactory_COMPARATIVE_instance;
  var StudyBuilderFactory_IMPLIED_VOLATILITY_instance;
  var StudyBuilderFactory_IMPLIED_VOLATILITY_GAUGE_instance;
  var StudyBuilderFactory_TD_SEQUENTIAL_instance;
  var StudyBuilderFactory_GTRAP_instance;
  var StudyBuilderFactory_KAUFMAN_MOVING_AVERAGE_instance;
  var StudyBuilderFactory_WAVE_TREND_WITH_CROSSES_instance;
  var StudyBuilderFactory_FIBONACCI_BOLLINGER_BANDS_instance;
  var StudyBuilderFactory_WAVE_TREND_instance;
  function Companion_47() {
    Companion_instance_47 = this;
    this.db_1 = HashMap_init_$Create$();
    var indexedObject = values_2();
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var studyBuilderFactory = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'kotlin.collections.set' call
      var tmp1_set = this.db_1;
      var tmp$ret$1;
      // Inline function 'kotlin.text.toUpperCase' call
      var tmp0_toUpperCase = studyBuilderFactory.hb_1;
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = tmp0_toUpperCase;
      tmp$ret$1 = tmp$ret$0.toUpperCase();
      var tmp2_set = tmp$ret$1;
      tmp1_set.e4(tmp2_set, studyBuilderFactory);
    }
  }
  protoOf(Companion_47).eb = function (id) {
    var tmp$ret$1;
    // Inline function 'kotlin.text.toUpperCase' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = id;
    tmp$ret$1 = tmp$ret$0.toUpperCase();
    return ensureNotNull(this.db_1.d1(tmp$ret$1));
  };
  var Companion_instance_47;
  function Companion_getInstance_47() {
    StudyBuilderFactory_initEntries();
    if (Companion_instance_47 == null)
      new Companion_47();
    return Companion_instance_47;
  }
  function values_2() {
    return [StudyBuilderFactory_WILLIAMS_FRACTAL_getInstance(), StudyBuilderFactory_PERCENTAGE_PRICE_OSCILLATOR_getInstance(), StudyBuilderFactory_DYNAMIC_MOMENTUM_INDEX_getInstance(), StudyBuilderFactory_WILLIAMS_AD_getInstance(), StudyBuilderFactory_PRICE_OSCILLATOR_getInstance(), StudyBuilderFactory_PERCENT_CHANGE_getInstance(), StudyBuilderFactory_LINEAR_REGRESSION_SLOPE_getInstance(), StudyBuilderFactory_LINEAR_REGRESSION_CHANNEL_getInstance(), StudyBuilderFactory_COMMODITY_SELECTION_getInstance(), StudyBuilderFactory_LINEAR_REGRESSION_getInstance(), StudyBuilderFactory_INERTIA_getInstance(), StudyBuilderFactory_KRI_getInstance(), StudyBuilderFactory_RANK_CORRELATION_INDEX_getInstance(), StudyBuilderFactory_SWING_ACCUMULATION_getInstance(), StudyBuilderFactory_AROON_OSCILLATOR_getInstance(), StudyBuilderFactory_AROON_getInstance(), StudyBuilderFactory_SWING_INDEX_getInstance(), StudyBuilderFactory_STARCBANDS_getInstance(), StudyBuilderFactory_FORECAST_OSCILLATOR_getInstance(), StudyBuilderFactory_KELTNER_CHANNELS_getInstance(), StudyBuilderFactory_TEMA_getInstance(), StudyBuilderFactory_TYPICAL_PRICE_getInstance(), StudyBuilderFactory_DEMA_getInstance(), StudyBuilderFactory_MEDIAN_PRICE_getInstance(), StudyBuilderFactory_FULL_STOCHASTIC_getInstance(), StudyBuilderFactory_STANDARD_ERROR_BANDS_getInstance(), StudyBuilderFactory_PERCENT_OF_RESISTANCE_getInstance(), StudyBuilderFactory_CENTER_OF_GRAVITY_OSCILLATOR_getInstance(), StudyBuilderFactory_ACCELERATION_DECELERATION_getInstance(), StudyBuilderFactory_ACCUMULATION_DISTRIBUTION_getInstance(), StudyBuilderFactory_ADX_getInstance(), StudyBuilderFactory_ADXR_getInstance(), StudyBuilderFactory_AVERAGE_TRUE_RANGE_getInstance(), StudyBuilderFactory_AWESOME_OSCILLATOR_getInstance(), StudyBuilderFactory_BOLLINGER_BANDS_getInstance(), StudyBuilderFactory_CCI_getInstance(), StudyBuilderFactory_CHAIKIN_OSCILLATOR_getInstance(), StudyBuilderFactory_CHAIKIN_VOLATILITY_getInstance(), StudyBuilderFactory_CHANDE_MOMENTUM_OSCILLATOR_getInstance(), StudyBuilderFactory_DE_MARKER_getInstance(), StudyBuilderFactory_DETRENDED_PRICE_OSC_getInstance(), StudyBuilderFactory_DMI_getInstance(), StudyBuilderFactory_ELDER_getInstance(), StudyBuilderFactory_EMA_getInstance(), StudyBuilderFactory_ENVELOPE_EMA_getInstance(), StudyBuilderFactory_ENVELOPE_SMA_getInstance(), StudyBuilderFactory_ENVELOPE_SMMA_getInstance(), StudyBuilderFactory_ENVELOPE_WMA_getInstance(), StudyBuilderFactory_FAST_STOCHASTIC_getInstance(), StudyBuilderFactory_FORCE_INDEX_getInstance(), StudyBuilderFactory_GATOR_OSCILLATOR_getInstance(), StudyBuilderFactory_HLVOLATILITY_getInstance(), StudyBuilderFactory_ICHIMOKU_getInstance(), StudyBuilderFactory_INTRADAY_MOMENTUM_INDEX_getInstance(), StudyBuilderFactory_MACD_getInstance(), StudyBuilderFactory_MARKET_FACILITATION_INDEX_getInstance(), StudyBuilderFactory_MASS_INDEX_getInstance(), StudyBuilderFactory_MOMENTUM_getInstance(), StudyBuilderFactory_MONEY_FLOW_INDEX_getInstance(), StudyBuilderFactory_NEGATIVE_VOLUME_INDEX_getInstance(), StudyBuilderFactory_ON_BALANCE_VOLUME_getInstance(), StudyBuilderFactory_DAY_OPEN_CLOSE_getInstance(), StudyBuilderFactory_OSCILLATOR_getInstance(), StudyBuilderFactory_PARABOLIC_SAR_getInstance(), StudyBuilderFactory_PIVOT_POINTS_getInstance(), StudyBuilderFactory_PRICE_CHANNEL_getInstance(), StudyBuilderFactory_PRICE_VOLUME_TREND_getInstance(), StudyBuilderFactory_RELATIVE_STRENGTH_INDEX_getInstance(), StudyBuilderFactory_RELATIVE_VIGOR_INDEX_getInstance(), StudyBuilderFactory_RELATIVE_VIGOR_INDEX_SMA_getInstance(), StudyBuilderFactory_RELATIVE_VOLATILITY_INDEX_getInstance(), StudyBuilderFactory_ROC_getInstance(), StudyBuilderFactory_SLOW_STOCHASTIC_getInstance(), StudyBuilderFactory_SMA_getInstance(), StudyBuilderFactory_SMMA_getInstance(), StudyBuilderFactory_SROC_getInstance(), StudyBuilderFactory_SCHAFF_TREND_CYCLE_getInstance(), StudyBuilderFactory_STANDARD_DEVIATION_CHANNEL_getInstance(), StudyBuilderFactory_STANDARD_DEVIATION_getInstance(), StudyBuilderFactory_STD_DEV_VOLATILITY_getInstance(), StudyBuilderFactory_TIME_SERIES_FORECAST_getInstance(), StudyBuilderFactory_TMA_getInstance(), StudyBuilderFactory_TRIPLE_EMA_getInstance(), StudyBuilderFactory_TRUE_STRENGTH_INDEX_getInstance(), StudyBuilderFactory_ULTIMATE_OSCILLATOR_getInstance(), StudyBuilderFactory_VERTICAL_HORIZONTAL_FILTER_getInstance(), StudyBuilderFactory_VWAP_getInstance(), StudyBuilderFactory_WEIGHTED_CLOSE_getInstance(), StudyBuilderFactory_WILDERS_SMOOTHING_getInstance(), StudyBuilderFactory_WILLIAMS_ALLIGATOR_getInstance(), StudyBuilderFactory_WILLIAMS_PERCENT_RANGE_getInstance(), StudyBuilderFactory_WMA_getInstance(), StudyBuilderFactory_ZIG_ZAG_getInstance(), StudyBuilderFactory_COMPARATIVE_getInstance(), StudyBuilderFactory_IMPLIED_VOLATILITY_getInstance(), StudyBuilderFactory_IMPLIED_VOLATILITY_GAUGE_getInstance(), StudyBuilderFactory_TD_SEQUENTIAL_getInstance(), StudyBuilderFactory_GTRAP_getInstance(), StudyBuilderFactory_KAUFMAN_MOVING_AVERAGE_getInstance(), StudyBuilderFactory_WAVE_TREND_WITH_CROSSES_getInstance(), StudyBuilderFactory_FIBONACCI_BOLLINGER_BANDS_getInstance(), StudyBuilderFactory_WAVE_TREND_getInstance()];
  }
  function StudyBuilderFactory$1() {
  }
  protoOf(StudyBuilderFactory$1).jb = function () {
    return new WilliamsFractal();
  };
  function StudyBuilderFactory$2() {
  }
  protoOf(StudyBuilderFactory$2).jb = function () {
    return new PercentagePriceOscillator();
  };
  function StudyBuilderFactory$3() {
  }
  protoOf(StudyBuilderFactory$3).jb = function () {
    return new DynamicMomentumIndex();
  };
  function StudyBuilderFactory$4() {
  }
  protoOf(StudyBuilderFactory$4).jb = function () {
    return new WilliamsAD();
  };
  function StudyBuilderFactory$5() {
  }
  protoOf(StudyBuilderFactory$5).jb = function () {
    return new PriceOscillator();
  };
  function StudyBuilderFactory$6() {
  }
  protoOf(StudyBuilderFactory$6).jb = function () {
    return new PercentChange();
  };
  function StudyBuilderFactory$7() {
  }
  protoOf(StudyBuilderFactory$7).jb = function () {
    return new LinearRegressionSlope();
  };
  function StudyBuilderFactory$8() {
  }
  protoOf(StudyBuilderFactory$8).jb = function () {
    return new LinearRegressionChannel();
  };
  function StudyBuilderFactory$9() {
  }
  protoOf(StudyBuilderFactory$9).jb = function () {
    return new CommoditySelection();
  };
  function StudyBuilderFactory$10() {
  }
  protoOf(StudyBuilderFactory$10).jb = function () {
    return new LinearRegression();
  };
  function StudyBuilderFactory$11() {
  }
  protoOf(StudyBuilderFactory$11).jb = function () {
    return new Inertia();
  };
  function StudyBuilderFactory$12() {
  }
  protoOf(StudyBuilderFactory$12).jb = function () {
    return new KRI();
  };
  function StudyBuilderFactory$13() {
  }
  protoOf(StudyBuilderFactory$13).jb = function () {
    return new RankCorrelationIndex();
  };
  function StudyBuilderFactory$14() {
  }
  protoOf(StudyBuilderFactory$14).jb = function () {
    return new SwingAccumulation();
  };
  function StudyBuilderFactory$15() {
  }
  protoOf(StudyBuilderFactory$15).jb = function () {
    return new AroonOscillator();
  };
  function StudyBuilderFactory$16() {
  }
  protoOf(StudyBuilderFactory$16).jb = function () {
    return new Aroon();
  };
  function StudyBuilderFactory$17() {
  }
  protoOf(StudyBuilderFactory$17).jb = function () {
    return new SwingIndex();
  };
  function StudyBuilderFactory$18() {
  }
  protoOf(StudyBuilderFactory$18).jb = function () {
    return new STARCBands();
  };
  function StudyBuilderFactory$19() {
  }
  protoOf(StudyBuilderFactory$19).jb = function () {
    return new ForecastOscillator();
  };
  function StudyBuilderFactory$20() {
  }
  protoOf(StudyBuilderFactory$20).jb = function () {
    return new KeltnerChannels();
  };
  function StudyBuilderFactory$21() {
  }
  protoOf(StudyBuilderFactory$21).jb = function () {
    return new TEMA();
  };
  function StudyBuilderFactory$22() {
  }
  protoOf(StudyBuilderFactory$22).jb = function () {
    return new TypicalPrice();
  };
  function StudyBuilderFactory$23() {
  }
  protoOf(StudyBuilderFactory$23).jb = function () {
    return new DEMA();
  };
  function StudyBuilderFactory$24() {
  }
  protoOf(StudyBuilderFactory$24).jb = function () {
    return new MedianPrice();
  };
  function StudyBuilderFactory$25() {
  }
  protoOf(StudyBuilderFactory$25).jb = function () {
    return new FullStochastic();
  };
  function StudyBuilderFactory$26() {
  }
  protoOf(StudyBuilderFactory$26).jb = function () {
    return new StandardErrorBands();
  };
  function StudyBuilderFactory$27() {
  }
  protoOf(StudyBuilderFactory$27).jb = function () {
    return new PercentOfResistance();
  };
  function StudyBuilderFactory$28() {
  }
  protoOf(StudyBuilderFactory$28).jb = function () {
    return new CenterOfGravityOscillator();
  };
  function StudyBuilderFactory$29() {
  }
  protoOf(StudyBuilderFactory$29).jb = function () {
    return new AccelerationDeceleration();
  };
  function StudyBuilderFactory$30() {
  }
  protoOf(StudyBuilderFactory$30).jb = function () {
    return new AccumulationDistribution();
  };
  function StudyBuilderFactory$31() {
  }
  protoOf(StudyBuilderFactory$31).jb = function () {
    return new ADX();
  };
  function StudyBuilderFactory$32() {
  }
  protoOf(StudyBuilderFactory$32).jb = function () {
    return new ADXR();
  };
  function StudyBuilderFactory$33() {
  }
  protoOf(StudyBuilderFactory$33).jb = function () {
    return new AverageTrueRange();
  };
  function StudyBuilderFactory$34() {
  }
  protoOf(StudyBuilderFactory$34).jb = function () {
    return new AwesomeOscillator();
  };
  function StudyBuilderFactory$35() {
  }
  protoOf(StudyBuilderFactory$35).jb = function () {
    return new BollingerBands();
  };
  function StudyBuilderFactory$36() {
  }
  protoOf(StudyBuilderFactory$36).jb = function () {
    return new CCI();
  };
  function StudyBuilderFactory$37() {
  }
  protoOf(StudyBuilderFactory$37).jb = function () {
    return new ChaikinOscillator();
  };
  function StudyBuilderFactory$38() {
  }
  protoOf(StudyBuilderFactory$38).jb = function () {
    return new ChaikinVolatility();
  };
  function StudyBuilderFactory$39() {
  }
  protoOf(StudyBuilderFactory$39).jb = function () {
    return new ChandeMomentumOscillator();
  };
  function StudyBuilderFactory$40() {
  }
  protoOf(StudyBuilderFactory$40).jb = function () {
    return new DeMarker();
  };
  function StudyBuilderFactory$41() {
  }
  protoOf(StudyBuilderFactory$41).jb = function () {
    return new DetrendedPriceOsc();
  };
  function StudyBuilderFactory$42() {
  }
  protoOf(StudyBuilderFactory$42).jb = function () {
    return new DMI();
  };
  function StudyBuilderFactory$43() {
  }
  protoOf(StudyBuilderFactory$43).jb = function () {
    return new Elder();
  };
  function StudyBuilderFactory$44() {
  }
  protoOf(StudyBuilderFactory$44).jb = function () {
    return new EMA();
  };
  function StudyBuilderFactory$45() {
  }
  protoOf(StudyBuilderFactory$45).jb = function () {
    return new EnvelopeEMA();
  };
  function StudyBuilderFactory$46() {
  }
  protoOf(StudyBuilderFactory$46).jb = function () {
    return new EnvelopeSMA();
  };
  function StudyBuilderFactory$47() {
  }
  protoOf(StudyBuilderFactory$47).jb = function () {
    return new EnvelopeSMMA();
  };
  function StudyBuilderFactory$48() {
  }
  protoOf(StudyBuilderFactory$48).jb = function () {
    return new EnvelopeWMA();
  };
  function StudyBuilderFactory$49() {
  }
  protoOf(StudyBuilderFactory$49).jb = function () {
    return new FastStochastic();
  };
  function StudyBuilderFactory$50() {
  }
  protoOf(StudyBuilderFactory$50).jb = function () {
    return new ForceIndex();
  };
  function StudyBuilderFactory$51() {
  }
  protoOf(StudyBuilderFactory$51).jb = function () {
    return new GatorOscillator();
  };
  function StudyBuilderFactory$52() {
  }
  protoOf(StudyBuilderFactory$52).jb = function () {
    return new HLVolatility();
  };
  function StudyBuilderFactory$53() {
  }
  protoOf(StudyBuilderFactory$53).jb = function () {
    return new Ichimoku();
  };
  function StudyBuilderFactory$54() {
  }
  protoOf(StudyBuilderFactory$54).jb = function () {
    return new IntradayMomentumIndex();
  };
  function StudyBuilderFactory$55() {
  }
  protoOf(StudyBuilderFactory$55).jb = function () {
    return new MACD();
  };
  function StudyBuilderFactory$56() {
  }
  protoOf(StudyBuilderFactory$56).jb = function () {
    return new MarketFacilitationIndex();
  };
  function StudyBuilderFactory$57() {
  }
  protoOf(StudyBuilderFactory$57).jb = function () {
    return new MassIndex();
  };
  function StudyBuilderFactory$58() {
  }
  protoOf(StudyBuilderFactory$58).jb = function () {
    return new Momentum();
  };
  function StudyBuilderFactory$59() {
  }
  protoOf(StudyBuilderFactory$59).jb = function () {
    return new MoneyFlowIndex();
  };
  function StudyBuilderFactory$60() {
  }
  protoOf(StudyBuilderFactory$60).jb = function () {
    return new NegativeVolumeIndex();
  };
  function StudyBuilderFactory$61() {
  }
  protoOf(StudyBuilderFactory$61).jb = function () {
    return new OnBalanceVolume();
  };
  function StudyBuilderFactory$62() {
  }
  protoOf(StudyBuilderFactory$62).jb = function () {
    return new DayOpenClose();
  };
  function StudyBuilderFactory$63() {
  }
  protoOf(StudyBuilderFactory$63).jb = function () {
    return new Oscillator();
  };
  function StudyBuilderFactory$64() {
  }
  protoOf(StudyBuilderFactory$64).jb = function () {
    return new ParabolicSAR();
  };
  function StudyBuilderFactory$65() {
  }
  protoOf(StudyBuilderFactory$65).jb = function () {
    return new PivotPoints();
  };
  function StudyBuilderFactory$66() {
  }
  protoOf(StudyBuilderFactory$66).jb = function () {
    return new PriceChannel();
  };
  function StudyBuilderFactory$67() {
  }
  protoOf(StudyBuilderFactory$67).jb = function () {
    return new PriceVolumeTrend();
  };
  function StudyBuilderFactory$68() {
  }
  protoOf(StudyBuilderFactory$68).jb = function () {
    return new RelativeStrengthIndex();
  };
  function StudyBuilderFactory$69() {
  }
  protoOf(StudyBuilderFactory$69).jb = function () {
    return new RelativeVigorIndex();
  };
  function StudyBuilderFactory$70() {
  }
  protoOf(StudyBuilderFactory$70).jb = function () {
    return new RelativeVigorIndexSMA();
  };
  function StudyBuilderFactory$71() {
  }
  protoOf(StudyBuilderFactory$71).jb = function () {
    return new RelativeVolatilityIndex();
  };
  function StudyBuilderFactory$72() {
  }
  protoOf(StudyBuilderFactory$72).jb = function () {
    return new ROC();
  };
  function StudyBuilderFactory$73() {
  }
  protoOf(StudyBuilderFactory$73).jb = function () {
    return new SlowStochastic();
  };
  function StudyBuilderFactory$74() {
  }
  protoOf(StudyBuilderFactory$74).jb = function () {
    return new SMA();
  };
  function StudyBuilderFactory$75() {
  }
  protoOf(StudyBuilderFactory$75).jb = function () {
    return new SMMA();
  };
  function StudyBuilderFactory$76() {
  }
  protoOf(StudyBuilderFactory$76).jb = function () {
    return new SROC();
  };
  function StudyBuilderFactory$77() {
  }
  protoOf(StudyBuilderFactory$77).jb = function () {
    return new SchaffTrendCycle();
  };
  function StudyBuilderFactory$78() {
  }
  protoOf(StudyBuilderFactory$78).jb = function () {
    return new StandardDeviationChannel();
  };
  function StudyBuilderFactory$79() {
  }
  protoOf(StudyBuilderFactory$79).jb = function () {
    return new StandardDeviation();
  };
  function StudyBuilderFactory$80() {
  }
  protoOf(StudyBuilderFactory$80).jb = function () {
    return new StdDevVolatility();
  };
  function StudyBuilderFactory$81() {
  }
  protoOf(StudyBuilderFactory$81).jb = function () {
    return new TimeSeriesForecast();
  };
  function StudyBuilderFactory$82() {
  }
  protoOf(StudyBuilderFactory$82).jb = function () {
    return new TMA();
  };
  function StudyBuilderFactory$83() {
  }
  protoOf(StudyBuilderFactory$83).jb = function () {
    return new TripleEMA();
  };
  function StudyBuilderFactory$84() {
  }
  protoOf(StudyBuilderFactory$84).jb = function () {
    return new TrueStrengthIndex();
  };
  function StudyBuilderFactory$85() {
  }
  protoOf(StudyBuilderFactory$85).jb = function () {
    return new UltimateOscillator();
  };
  function StudyBuilderFactory$86() {
  }
  protoOf(StudyBuilderFactory$86).jb = function () {
    return new VerticalHorizontalFilter();
  };
  function StudyBuilderFactory$87() {
  }
  protoOf(StudyBuilderFactory$87).jb = function () {
    return new VWAP();
  };
  function StudyBuilderFactory$88() {
  }
  protoOf(StudyBuilderFactory$88).jb = function () {
    return new WeightedClose();
  };
  function StudyBuilderFactory$89() {
  }
  protoOf(StudyBuilderFactory$89).jb = function () {
    return new WildersSmoothing();
  };
  function StudyBuilderFactory$90() {
  }
  protoOf(StudyBuilderFactory$90).jb = function () {
    return new WilliamsAlligator();
  };
  function StudyBuilderFactory$91() {
  }
  protoOf(StudyBuilderFactory$91).jb = function () {
    return new WilliamsPercentRange();
  };
  function StudyBuilderFactory$92() {
  }
  protoOf(StudyBuilderFactory$92).jb = function () {
    return new WMA();
  };
  function StudyBuilderFactory$93() {
  }
  protoOf(StudyBuilderFactory$93).jb = function () {
    return new ZigZag();
  };
  function StudyBuilderFactory$94() {
  }
  protoOf(StudyBuilderFactory$94).jb = function () {
    return new Comparative();
  };
  function StudyBuilderFactory$95() {
  }
  protoOf(StudyBuilderFactory$95).jb = function () {
    return new ImpliedVolatility();
  };
  function StudyBuilderFactory$96() {
  }
  protoOf(StudyBuilderFactory$96).jb = function () {
    return new ImpliedVolatilityGauge();
  };
  function StudyBuilderFactory$97() {
  }
  protoOf(StudyBuilderFactory$97).jb = function () {
    return new TDSequential();
  };
  function StudyBuilderFactory$98() {
  }
  protoOf(StudyBuilderFactory$98).jb = function () {
    return new GTRAP();
  };
  function StudyBuilderFactory$99() {
  }
  protoOf(StudyBuilderFactory$99).jb = function () {
    return new KaufmanMovingAverage();
  };
  function StudyBuilderFactory$100() {
  }
  protoOf(StudyBuilderFactory$100).jb = function () {
    return new WaveTrendWithCrosses();
  };
  function StudyBuilderFactory$101() {
  }
  protoOf(StudyBuilderFactory$101).jb = function () {
    return new FibonacciBollingerBands();
  };
  function StudyBuilderFactory$102() {
  }
  protoOf(StudyBuilderFactory$102).jb = function () {
    return new WaveTrend();
  };
  var StudyBuilderFactory_entriesInitialized;
  function StudyBuilderFactory_initEntries() {
    if (StudyBuilderFactory_entriesInitialized)
      return Unit_getInstance();
    StudyBuilderFactory_entriesInitialized = true;
    StudyBuilderFactory_WILLIAMS_FRACTAL_instance = new StudyBuilderFactory('WILLIAMS_FRACTAL', 0, 'WilliamsFractal', new StudyBuilderFactory$1());
    StudyBuilderFactory_PERCENTAGE_PRICE_OSCILLATOR_instance = new StudyBuilderFactory('PERCENTAGE_PRICE_OSCILLATOR', 1, 'PercentagePriceOscillator', new StudyBuilderFactory$2());
    StudyBuilderFactory_DYNAMIC_MOMENTUM_INDEX_instance = new StudyBuilderFactory('DYNAMIC_MOMENTUM_INDEX', 2, 'DynamicMomentumIndex', new StudyBuilderFactory$3());
    StudyBuilderFactory_WILLIAMS_AD_instance = new StudyBuilderFactory('WILLIAMS_AD', 3, 'WilliamsAD', new StudyBuilderFactory$4());
    StudyBuilderFactory_PRICE_OSCILLATOR_instance = new StudyBuilderFactory('PRICE_OSCILLATOR', 4, 'PriceOscillator', new StudyBuilderFactory$5());
    StudyBuilderFactory_PERCENT_CHANGE_instance = new StudyBuilderFactory('PERCENT_CHANGE', 5, 'PercentChange', new StudyBuilderFactory$6());
    StudyBuilderFactory_LINEAR_REGRESSION_SLOPE_instance = new StudyBuilderFactory('LINEAR_REGRESSION_SLOPE', 6, 'LinearRegressionSlope', new StudyBuilderFactory$7());
    StudyBuilderFactory_LINEAR_REGRESSION_CHANNEL_instance = new StudyBuilderFactory('LINEAR_REGRESSION_CHANNEL', 7, 'LinearRegressionChannel', new StudyBuilderFactory$8());
    StudyBuilderFactory_COMMODITY_SELECTION_instance = new StudyBuilderFactory('COMMODITY_SELECTION', 8, 'CommoditySelection', new StudyBuilderFactory$9());
    StudyBuilderFactory_LINEAR_REGRESSION_instance = new StudyBuilderFactory('LINEAR_REGRESSION', 9, 'LinearRegression', new StudyBuilderFactory$10());
    StudyBuilderFactory_INERTIA_instance = new StudyBuilderFactory('INERTIA', 10, 'Inertia', new StudyBuilderFactory$11());
    StudyBuilderFactory_KRI_instance = new StudyBuilderFactory('KRI', 11, 'KRI', new StudyBuilderFactory$12());
    StudyBuilderFactory_RANK_CORRELATION_INDEX_instance = new StudyBuilderFactory('RANK_CORRELATION_INDEX', 12, 'RankCorrelationIndex', new StudyBuilderFactory$13());
    StudyBuilderFactory_SWING_ACCUMULATION_instance = new StudyBuilderFactory('SWING_ACCUMULATION', 13, 'SwingAccumulation', new StudyBuilderFactory$14());
    StudyBuilderFactory_AROON_OSCILLATOR_instance = new StudyBuilderFactory('AROON_OSCILLATOR', 14, 'AroonOscillator', new StudyBuilderFactory$15());
    StudyBuilderFactory_AROON_instance = new StudyBuilderFactory('AROON', 15, 'Aroon', new StudyBuilderFactory$16());
    StudyBuilderFactory_SWING_INDEX_instance = new StudyBuilderFactory('SWING_INDEX', 16, 'SwingIndex', new StudyBuilderFactory$17());
    StudyBuilderFactory_STARCBANDS_instance = new StudyBuilderFactory('STARCBANDS', 17, 'STARCBands', new StudyBuilderFactory$18());
    StudyBuilderFactory_FORECAST_OSCILLATOR_instance = new StudyBuilderFactory('FORECAST_OSCILLATOR', 18, 'ForecastOscillator', new StudyBuilderFactory$19());
    StudyBuilderFactory_KELTNER_CHANNELS_instance = new StudyBuilderFactory('KELTNER_CHANNELS', 19, 'KeltnerChannels', new StudyBuilderFactory$20());
    StudyBuilderFactory_TEMA_instance = new StudyBuilderFactory('TEMA', 20, 'TEMA', new StudyBuilderFactory$21());
    StudyBuilderFactory_TYPICAL_PRICE_instance = new StudyBuilderFactory('TYPICAL_PRICE', 21, 'TypicalPrice', new StudyBuilderFactory$22());
    StudyBuilderFactory_DEMA_instance = new StudyBuilderFactory('DEMA', 22, 'DEMA', new StudyBuilderFactory$23());
    StudyBuilderFactory_MEDIAN_PRICE_instance = new StudyBuilderFactory('MEDIAN_PRICE', 23, 'MedianPrice', new StudyBuilderFactory$24());
    StudyBuilderFactory_FULL_STOCHASTIC_instance = new StudyBuilderFactory('FULL_STOCHASTIC', 24, 'FullStochastic', new StudyBuilderFactory$25());
    StudyBuilderFactory_STANDARD_ERROR_BANDS_instance = new StudyBuilderFactory('STANDARD_ERROR_BANDS', 25, 'StandardErrorBands', new StudyBuilderFactory$26());
    StudyBuilderFactory_PERCENT_OF_RESISTANCE_instance = new StudyBuilderFactory('PERCENT_OF_RESISTANCE', 26, 'PercentOfResistance', new StudyBuilderFactory$27());
    StudyBuilderFactory_CENTER_OF_GRAVITY_OSCILLATOR_instance = new StudyBuilderFactory('CENTER_OF_GRAVITY_OSCILLATOR', 27, 'CenterOfGravityOscillator', new StudyBuilderFactory$28());
    StudyBuilderFactory_ACCELERATION_DECELERATION_instance = new StudyBuilderFactory('ACCELERATION_DECELERATION', 28, 'AccelerationDeceleration', new StudyBuilderFactory$29());
    StudyBuilderFactory_ACCUMULATION_DISTRIBUTION_instance = new StudyBuilderFactory('ACCUMULATION_DISTRIBUTION', 29, 'AccumulationDistribution', new StudyBuilderFactory$30());
    StudyBuilderFactory_ADX_instance = new StudyBuilderFactory('ADX', 30, 'ADX', new StudyBuilderFactory$31());
    StudyBuilderFactory_ADXR_instance = new StudyBuilderFactory('ADXR', 31, 'ADXR', new StudyBuilderFactory$32());
    StudyBuilderFactory_AVERAGE_TRUE_RANGE_instance = new StudyBuilderFactory('AVERAGE_TRUE_RANGE', 32, 'AverageTrueRange', new StudyBuilderFactory$33());
    StudyBuilderFactory_AWESOME_OSCILLATOR_instance = new StudyBuilderFactory('AWESOME_OSCILLATOR', 33, 'AwesomeOscillator', new StudyBuilderFactory$34());
    StudyBuilderFactory_BOLLINGER_BANDS_instance = new StudyBuilderFactory('BOLLINGER_BANDS', 34, 'BollingerBands', new StudyBuilderFactory$35());
    StudyBuilderFactory_CCI_instance = new StudyBuilderFactory('CCI', 35, 'CCI', new StudyBuilderFactory$36());
    StudyBuilderFactory_CHAIKIN_OSCILLATOR_instance = new StudyBuilderFactory('CHAIKIN_OSCILLATOR', 36, 'ChaikinOscillator', new StudyBuilderFactory$37());
    StudyBuilderFactory_CHAIKIN_VOLATILITY_instance = new StudyBuilderFactory('CHAIKIN_VOLATILITY', 37, 'ChaikinVolatility', new StudyBuilderFactory$38());
    StudyBuilderFactory_CHANDE_MOMENTUM_OSCILLATOR_instance = new StudyBuilderFactory('CHANDE_MOMENTUM_OSCILLATOR', 38, 'ChandeMomentumOscillator', new StudyBuilderFactory$39());
    StudyBuilderFactory_DE_MARKER_instance = new StudyBuilderFactory('DE_MARKER', 39, 'DeMarker', new StudyBuilderFactory$40());
    StudyBuilderFactory_DETRENDED_PRICE_OSC_instance = new StudyBuilderFactory('DETRENDED_PRICE_OSC', 40, 'DetrendedPriceOsc', new StudyBuilderFactory$41());
    StudyBuilderFactory_DMI_instance = new StudyBuilderFactory('DMI', 41, 'DMI', new StudyBuilderFactory$42());
    StudyBuilderFactory_ELDER_instance = new StudyBuilderFactory('ELDER', 42, 'Elder', new StudyBuilderFactory$43());
    StudyBuilderFactory_EMA_instance = new StudyBuilderFactory('EMA', 43, 'EMA', new StudyBuilderFactory$44());
    StudyBuilderFactory_ENVELOPE_EMA_instance = new StudyBuilderFactory('ENVELOPE_EMA', 44, 'EnvelopeEMA', new StudyBuilderFactory$45());
    StudyBuilderFactory_ENVELOPE_SMA_instance = new StudyBuilderFactory('ENVELOPE_SMA', 45, 'EnvelopeSMA', new StudyBuilderFactory$46());
    StudyBuilderFactory_ENVELOPE_SMMA_instance = new StudyBuilderFactory('ENVELOPE_SMMA', 46, 'EnvelopeSMMA', new StudyBuilderFactory$47());
    StudyBuilderFactory_ENVELOPE_WMA_instance = new StudyBuilderFactory('ENVELOPE_WMA', 47, 'EnvelopeWMA', new StudyBuilderFactory$48());
    StudyBuilderFactory_FAST_STOCHASTIC_instance = new StudyBuilderFactory('FAST_STOCHASTIC', 48, 'FastStochastic', new StudyBuilderFactory$49());
    StudyBuilderFactory_FORCE_INDEX_instance = new StudyBuilderFactory('FORCE_INDEX', 49, 'ForceIndex', new StudyBuilderFactory$50());
    StudyBuilderFactory_GATOR_OSCILLATOR_instance = new StudyBuilderFactory('GATOR_OSCILLATOR', 50, 'GatorOscillator', new StudyBuilderFactory$51());
    StudyBuilderFactory_HLVOLATILITY_instance = new StudyBuilderFactory('HLVOLATILITY', 51, 'HLVolatility', new StudyBuilderFactory$52());
    StudyBuilderFactory_ICHIMOKU_instance = new StudyBuilderFactory('ICHIMOKU', 52, 'Ichimoku', new StudyBuilderFactory$53());
    StudyBuilderFactory_INTRADAY_MOMENTUM_INDEX_instance = new StudyBuilderFactory('INTRADAY_MOMENTUM_INDEX', 53, 'IntradayMomentumIndex', new StudyBuilderFactory$54());
    StudyBuilderFactory_MACD_instance = new StudyBuilderFactory('MACD', 54, 'MACD', new StudyBuilderFactory$55());
    StudyBuilderFactory_MARKET_FACILITATION_INDEX_instance = new StudyBuilderFactory('MARKET_FACILITATION_INDEX', 55, 'MarketFacilitationIndex', new StudyBuilderFactory$56());
    StudyBuilderFactory_MASS_INDEX_instance = new StudyBuilderFactory('MASS_INDEX', 56, 'MassIndex', new StudyBuilderFactory$57());
    StudyBuilderFactory_MOMENTUM_instance = new StudyBuilderFactory('MOMENTUM', 57, 'Momentum', new StudyBuilderFactory$58());
    StudyBuilderFactory_MONEY_FLOW_INDEX_instance = new StudyBuilderFactory('MONEY_FLOW_INDEX', 58, 'MoneyFlowIndex', new StudyBuilderFactory$59());
    StudyBuilderFactory_NEGATIVE_VOLUME_INDEX_instance = new StudyBuilderFactory('NEGATIVE_VOLUME_INDEX', 59, 'NegativeVolumeIndex', new StudyBuilderFactory$60());
    StudyBuilderFactory_ON_BALANCE_VOLUME_instance = new StudyBuilderFactory('ON_BALANCE_VOLUME', 60, 'OnBalanceVolume', new StudyBuilderFactory$61());
    StudyBuilderFactory_DAY_OPEN_CLOSE_instance = new StudyBuilderFactory('DAY_OPEN_CLOSE', 61, 'DayOpenClose', new StudyBuilderFactory$62());
    StudyBuilderFactory_OSCILLATOR_instance = new StudyBuilderFactory('OSCILLATOR', 62, 'Oscillator', new StudyBuilderFactory$63());
    StudyBuilderFactory_PARABOLIC_SAR_instance = new StudyBuilderFactory('PARABOLIC_SAR', 63, 'ParabolicSAR', new StudyBuilderFactory$64());
    StudyBuilderFactory_PIVOT_POINTS_instance = new StudyBuilderFactory('PIVOT_POINTS', 64, 'PivotPoints', new StudyBuilderFactory$65());
    StudyBuilderFactory_PRICE_CHANNEL_instance = new StudyBuilderFactory('PRICE_CHANNEL', 65, 'PriceChannel', new StudyBuilderFactory$66());
    StudyBuilderFactory_PRICE_VOLUME_TREND_instance = new StudyBuilderFactory('PRICE_VOLUME_TREND', 66, 'PriceVolumeTrend', new StudyBuilderFactory$67());
    StudyBuilderFactory_RELATIVE_STRENGTH_INDEX_instance = new StudyBuilderFactory('RELATIVE_STRENGTH_INDEX', 67, 'RelativeStrengthIndex', new StudyBuilderFactory$68());
    StudyBuilderFactory_RELATIVE_VIGOR_INDEX_instance = new StudyBuilderFactory('RELATIVE_VIGOR_INDEX', 68, 'RelativeVigorIndex', new StudyBuilderFactory$69());
    StudyBuilderFactory_RELATIVE_VIGOR_INDEX_SMA_instance = new StudyBuilderFactory('RELATIVE_VIGOR_INDEX_SMA', 69, 'RelativeVigorIndexSMA', new StudyBuilderFactory$70());
    StudyBuilderFactory_RELATIVE_VOLATILITY_INDEX_instance = new StudyBuilderFactory('RELATIVE_VOLATILITY_INDEX', 70, 'RelativeVolatilityIndex', new StudyBuilderFactory$71());
    StudyBuilderFactory_ROC_instance = new StudyBuilderFactory('ROC', 71, 'ROC', new StudyBuilderFactory$72());
    StudyBuilderFactory_SLOW_STOCHASTIC_instance = new StudyBuilderFactory('SLOW_STOCHASTIC', 72, 'SlowStochastic', new StudyBuilderFactory$73());
    StudyBuilderFactory_SMA_instance = new StudyBuilderFactory('SMA', 73, 'SMA', new StudyBuilderFactory$74());
    StudyBuilderFactory_SMMA_instance = new StudyBuilderFactory('SMMA', 74, 'SMMA', new StudyBuilderFactory$75());
    StudyBuilderFactory_SROC_instance = new StudyBuilderFactory('SROC', 75, 'SROC', new StudyBuilderFactory$76());
    StudyBuilderFactory_SCHAFF_TREND_CYCLE_instance = new StudyBuilderFactory('SCHAFF_TREND_CYCLE', 76, 'SchaffTrendCycle', new StudyBuilderFactory$77());
    StudyBuilderFactory_STANDARD_DEVIATION_CHANNEL_instance = new StudyBuilderFactory('STANDARD_DEVIATION_CHANNEL', 77, 'StandardDeviationChannel', new StudyBuilderFactory$78());
    StudyBuilderFactory_STANDARD_DEVIATION_instance = new StudyBuilderFactory('STANDARD_DEVIATION', 78, 'StandardDeviation', new StudyBuilderFactory$79());
    StudyBuilderFactory_STD_DEV_VOLATILITY_instance = new StudyBuilderFactory('STD_DEV_VOLATILITY', 79, 'StdDevVolatility', new StudyBuilderFactory$80());
    StudyBuilderFactory_TIME_SERIES_FORECAST_instance = new StudyBuilderFactory('TIME_SERIES_FORECAST', 80, 'TimeSeriesForecast', new StudyBuilderFactory$81());
    StudyBuilderFactory_TMA_instance = new StudyBuilderFactory('TMA', 81, 'TMA', new StudyBuilderFactory$82());
    StudyBuilderFactory_TRIPLE_EMA_instance = new StudyBuilderFactory('TRIPLE_EMA', 82, 'TripleEMA', new StudyBuilderFactory$83());
    StudyBuilderFactory_TRUE_STRENGTH_INDEX_instance = new StudyBuilderFactory('TRUE_STRENGTH_INDEX', 83, 'TrueStrengthIndex', new StudyBuilderFactory$84());
    StudyBuilderFactory_ULTIMATE_OSCILLATOR_instance = new StudyBuilderFactory('ULTIMATE_OSCILLATOR', 84, 'UltimateOscillator', new StudyBuilderFactory$85());
    StudyBuilderFactory_VERTICAL_HORIZONTAL_FILTER_instance = new StudyBuilderFactory('VERTICAL_HORIZONTAL_FILTER', 85, 'VerticalHorizontalFilter', new StudyBuilderFactory$86());
    StudyBuilderFactory_VWAP_instance = new StudyBuilderFactory('VWAP', 86, 'VWAP', new StudyBuilderFactory$87());
    StudyBuilderFactory_WEIGHTED_CLOSE_instance = new StudyBuilderFactory('WEIGHTED_CLOSE', 87, 'WeightedClose', new StudyBuilderFactory$88());
    StudyBuilderFactory_WILDERS_SMOOTHING_instance = new StudyBuilderFactory('WILDERS_SMOOTHING', 88, 'WildersSmoothing', new StudyBuilderFactory$89());
    StudyBuilderFactory_WILLIAMS_ALLIGATOR_instance = new StudyBuilderFactory('WILLIAMS_ALLIGATOR', 89, 'WilliamsAlligator', new StudyBuilderFactory$90());
    StudyBuilderFactory_WILLIAMS_PERCENT_RANGE_instance = new StudyBuilderFactory('WILLIAMS_PERCENT_RANGE', 90, 'WilliamsPercentRange', new StudyBuilderFactory$91());
    StudyBuilderFactory_WMA_instance = new StudyBuilderFactory('WMA', 91, 'WMA', new StudyBuilderFactory$92());
    StudyBuilderFactory_ZIG_ZAG_instance = new StudyBuilderFactory('ZIG_ZAG', 92, 'ZigZag', new StudyBuilderFactory$93());
    StudyBuilderFactory_COMPARATIVE_instance = new StudyBuilderFactory('COMPARATIVE', 93, 'COMPARATIVE', new StudyBuilderFactory$94());
    StudyBuilderFactory_IMPLIED_VOLATILITY_instance = new StudyBuilderFactory('IMPLIED_VOLATILITY', 94, 'ImpliedVolatility', new StudyBuilderFactory$95());
    StudyBuilderFactory_IMPLIED_VOLATILITY_GAUGE_instance = new StudyBuilderFactory('IMPLIED_VOLATILITY_GAUGE', 95, 'ImpliedVolatilityGauge', new StudyBuilderFactory$96());
    StudyBuilderFactory_TD_SEQUENTIAL_instance = new StudyBuilderFactory('TD_SEQUENTIAL', 96, 'TDSequential', new StudyBuilderFactory$97());
    StudyBuilderFactory_GTRAP_instance = new StudyBuilderFactory('GTRAP', 97, 'GTRAP', new StudyBuilderFactory$98());
    StudyBuilderFactory_KAUFMAN_MOVING_AVERAGE_instance = new StudyBuilderFactory('KAUFMAN_MOVING_AVERAGE', 98, 'KAMA', new StudyBuilderFactory$99());
    StudyBuilderFactory_WAVE_TREND_WITH_CROSSES_instance = new StudyBuilderFactory('WAVE_TREND_WITH_CROSSES', 99, 'WaveTrendWithCrosses', new StudyBuilderFactory$100());
    StudyBuilderFactory_FIBONACCI_BOLLINGER_BANDS_instance = new StudyBuilderFactory('FIBONACCI_BOLLINGER_BANDS', 100, 'FibonacciBollingerBands', new StudyBuilderFactory$101());
    StudyBuilderFactory_WAVE_TREND_instance = new StudyBuilderFactory('WAVE_TREND', 101, 'WaveTrend', new StudyBuilderFactory$102());
    Companion_getInstance_47();
  }
  function StudyBuilderFactory(name, ordinal, id, factory) {
    Enum.call(this, name, ordinal);
    this.hb_1 = id;
    this.ib_1 = factory;
  }
  protoOf(StudyBuilderFactory).jb = function () {
    return this.ib_1.jb();
  };
  function StudyBuilderFactory_WILLIAMS_FRACTAL_getInstance() {
    StudyBuilderFactory_initEntries();
    return StudyBuilderFactory_WILLIAMS_FRACTAL_instance;
  }
  function StudyBuilderFactory_PERCENTAGE_PRICE_OSCILLATOR_getInstance() {
    StudyBuilderFactory_initEntries();
    return StudyBuilderFactory_PERCENTAGE_PRICE_OSCILLATOR_instance;
  }
  function StudyBuilderFactory_DYNAMIC_MOMENTUM_INDEX_getInstance() {
    StudyBuilderFactory_initEntries();
    return StudyBuilderFactory_DYNAMIC_MOMENTUM_INDEX_instance;
  }
  function StudyBuilderFactory_WILLIAMS_AD_getInstance() {
    StudyBuilderFactory_initEntries();
    return StudyBuilderFactory_WILLIAMS_AD_instance;
  }
  function StudyBuilderFactory_PRICE_OSCILLATOR_getInstance() {
    StudyBuilderFactory_initEntries();
    return StudyBuilderFactory_PRICE_OSCILLATOR_instance;
  }
  function StudyBuilderFactory_PERCENT_CHANGE_getInstance() {
    StudyBuilderFactory_initEntries();
    return StudyBuilderFactory_PERCENT_CHANGE_instance;
  }
  function StudyBuilderFactory_LINEAR_REGRESSION_SLOPE_getInstance() {
    StudyBuilderFactory_initEntries();
    return StudyBuilderFactory_LINEAR_REGRESSION_SLOPE_instance;
  }
  function StudyBuilderFactory_LINEAR_REGRESSION_CHANNEL_getInstance() {
    StudyBuilderFactory_initEntries();
    return StudyBuilderFactory_LINEAR_REGRESSION_CHANNEL_instance;
  }
  function StudyBuilderFactory_COMMODITY_SELECTION_getInstance() {
    StudyBuilderFactory_initEntries();
    return StudyBuilderFactory_COMMODITY_SELECTION_instance;
  }
  function StudyBuilderFactory_LINEAR_REGRESSION_getInstance() {
    StudyBuilderFactory_initEntries();
    return StudyBuilderFactory_LINEAR_REGRESSION_instance;
  }
  function StudyBuilderFactory_INERTIA_getInstance() {
    StudyBuilderFactory_initEntries();
    return StudyBuilderFactory_INERTIA_instance;
  }
  function StudyBuilderFactory_KRI_getInstance() {
    StudyBuilderFactory_initEntries();
    return StudyBuilderFactory_KRI_instance;
  }
  function StudyBuilderFactory_RANK_CORRELATION_INDEX_getInstance() {
    StudyBuilderFactory_initEntries();
    return StudyBuilderFactory_RANK_CORRELATION_INDEX_instance;
  }
  function StudyBuilderFactory_SWING_ACCUMULATION_getInstance() {
    StudyBuilderFactory_initEntries();
    return StudyBuilderFactory_SWING_ACCUMULATION_instance;
  }
  function StudyBuilderFactory_AROON_OSCILLATOR_getInstance() {
    StudyBuilderFactory_initEntries();
    return StudyBuilderFactory_AROON_OSCILLATOR_instance;
  }
  function StudyBuilderFactory_AROON_getInstance() {
    StudyBuilderFactory_initEntries();
    return StudyBuilderFactory_AROON_instance;
  }
  function StudyBuilderFactory_SWING_INDEX_getInstance() {
    StudyBuilderFactory_initEntries();
    return StudyBuilderFactory_SWING_INDEX_instance;
  }
  function StudyBuilderFactory_STARCBANDS_getInstance() {
    StudyBuilderFactory_initEntries();
    return StudyBuilderFactory_STARCBANDS_instance;
  }
  function StudyBuilderFactory_FORECAST_OSCILLATOR_getInstance() {
    StudyBuilderFactory_initEntries();
    return StudyBuilderFactory_FORECAST_OSCILLATOR_instance;
  }
  function StudyBuilderFactory_KELTNER_CHANNELS_getInstance() {
    StudyBuilderFactory_initEntries();
    return StudyBuilderFactory_KELTNER_CHANNELS_instance;
  }
  function StudyBuilderFactory_TEMA_getInstance() {
    StudyBuilderFactory_initEntries();
    return StudyBuilderFactory_TEMA_instance;
  }
  function StudyBuilderFactory_TYPICAL_PRICE_getInstance() {
    StudyBuilderFactory_initEntries();
    return StudyBuilderFactory_TYPICAL_PRICE_instance;
  }
  function StudyBuilderFactory_DEMA_getInstance() {
    StudyBuilderFactory_initEntries();
    return StudyBuilderFactory_DEMA_instance;
  }
  function StudyBuilderFactory_MEDIAN_PRICE_getInstance() {
    StudyBuilderFactory_initEntries();
    return StudyBuilderFactory_MEDIAN_PRICE_instance;
  }
  function StudyBuilderFactory_FULL_STOCHASTIC_getInstance() {
    StudyBuilderFactory_initEntries();
    return StudyBuilderFactory_FULL_STOCHASTIC_instance;
  }
  function StudyBuilderFactory_STANDARD_ERROR_BANDS_getInstance() {
    StudyBuilderFactory_initEntries();
    return StudyBuilderFactory_STANDARD_ERROR_BANDS_instance;
  }
  function StudyBuilderFactory_PERCENT_OF_RESISTANCE_getInstance() {
    StudyBuilderFactory_initEntries();
    return StudyBuilderFactory_PERCENT_OF_RESISTANCE_instance;
  }
  function StudyBuilderFactory_CENTER_OF_GRAVITY_OSCILLATOR_getInstance() {
    StudyBuilderFactory_initEntries();
    return StudyBuilderFactory_CENTER_OF_GRAVITY_OSCILLATOR_instance;
  }
  function StudyBuilderFactory_ACCELERATION_DECELERATION_getInstance() {
    StudyBuilderFactory_initEntries();
    return StudyBuilderFactory_ACCELERATION_DECELERATION_instance;
  }
  function StudyBuilderFactory_ACCUMULATION_DISTRIBUTION_getInstance() {
    StudyBuilderFactory_initEntries();
    return StudyBuilderFactory_ACCUMULATION_DISTRIBUTION_instance;
  }
  function StudyBuilderFactory_ADX_getInstance() {
    StudyBuilderFactory_initEntries();
    return StudyBuilderFactory_ADX_instance;
  }
  function StudyBuilderFactory_ADXR_getInstance() {
    StudyBuilderFactory_initEntries();
    return StudyBuilderFactory_ADXR_instance;
  }
  function StudyBuilderFactory_AVERAGE_TRUE_RANGE_getInstance() {
    StudyBuilderFactory_initEntries();
    return StudyBuilderFactory_AVERAGE_TRUE_RANGE_instance;
  }
  function StudyBuilderFactory_AWESOME_OSCILLATOR_getInstance() {
    StudyBuilderFactory_initEntries();
    return StudyBuilderFactory_AWESOME_OSCILLATOR_instance;
  }
  function StudyBuilderFactory_BOLLINGER_BANDS_getInstance() {
    StudyBuilderFactory_initEntries();
    return StudyBuilderFactory_BOLLINGER_BANDS_instance;
  }
  function StudyBuilderFactory_CCI_getInstance() {
    StudyBuilderFactory_initEntries();
    return StudyBuilderFactory_CCI_instance;
  }
  function StudyBuilderFactory_CHAIKIN_OSCILLATOR_getInstance() {
    StudyBuilderFactory_initEntries();
    return StudyBuilderFactory_CHAIKIN_OSCILLATOR_instance;
  }
  function StudyBuilderFactory_CHAIKIN_VOLATILITY_getInstance() {
    StudyBuilderFactory_initEntries();
    return StudyBuilderFactory_CHAIKIN_VOLATILITY_instance;
  }
  function StudyBuilderFactory_CHANDE_MOMENTUM_OSCILLATOR_getInstance() {
    StudyBuilderFactory_initEntries();
    return StudyBuilderFactory_CHANDE_MOMENTUM_OSCILLATOR_instance;
  }
  function StudyBuilderFactory_DE_MARKER_getInstance() {
    StudyBuilderFactory_initEntries();
    return StudyBuilderFactory_DE_MARKER_instance;
  }
  function StudyBuilderFactory_DETRENDED_PRICE_OSC_getInstance() {
    StudyBuilderFactory_initEntries();
    return StudyBuilderFactory_DETRENDED_PRICE_OSC_instance;
  }
  function StudyBuilderFactory_DMI_getInstance() {
    StudyBuilderFactory_initEntries();
    return StudyBuilderFactory_DMI_instance;
  }
  function StudyBuilderFactory_ELDER_getInstance() {
    StudyBuilderFactory_initEntries();
    return StudyBuilderFactory_ELDER_instance;
  }
  function StudyBuilderFactory_EMA_getInstance() {
    StudyBuilderFactory_initEntries();
    return StudyBuilderFactory_EMA_instance;
  }
  function StudyBuilderFactory_ENVELOPE_EMA_getInstance() {
    StudyBuilderFactory_initEntries();
    return StudyBuilderFactory_ENVELOPE_EMA_instance;
  }
  function StudyBuilderFactory_ENVELOPE_SMA_getInstance() {
    StudyBuilderFactory_initEntries();
    return StudyBuilderFactory_ENVELOPE_SMA_instance;
  }
  function StudyBuilderFactory_ENVELOPE_SMMA_getInstance() {
    StudyBuilderFactory_initEntries();
    return StudyBuilderFactory_ENVELOPE_SMMA_instance;
  }
  function StudyBuilderFactory_ENVELOPE_WMA_getInstance() {
    StudyBuilderFactory_initEntries();
    return StudyBuilderFactory_ENVELOPE_WMA_instance;
  }
  function StudyBuilderFactory_FAST_STOCHASTIC_getInstance() {
    StudyBuilderFactory_initEntries();
    return StudyBuilderFactory_FAST_STOCHASTIC_instance;
  }
  function StudyBuilderFactory_FORCE_INDEX_getInstance() {
    StudyBuilderFactory_initEntries();
    return StudyBuilderFactory_FORCE_INDEX_instance;
  }
  function StudyBuilderFactory_GATOR_OSCILLATOR_getInstance() {
    StudyBuilderFactory_initEntries();
    return StudyBuilderFactory_GATOR_OSCILLATOR_instance;
  }
  function StudyBuilderFactory_HLVOLATILITY_getInstance() {
    StudyBuilderFactory_initEntries();
    return StudyBuilderFactory_HLVOLATILITY_instance;
  }
  function StudyBuilderFactory_ICHIMOKU_getInstance() {
    StudyBuilderFactory_initEntries();
    return StudyBuilderFactory_ICHIMOKU_instance;
  }
  function StudyBuilderFactory_INTRADAY_MOMENTUM_INDEX_getInstance() {
    StudyBuilderFactory_initEntries();
    return StudyBuilderFactory_INTRADAY_MOMENTUM_INDEX_instance;
  }
  function StudyBuilderFactory_MACD_getInstance() {
    StudyBuilderFactory_initEntries();
    return StudyBuilderFactory_MACD_instance;
  }
  function StudyBuilderFactory_MARKET_FACILITATION_INDEX_getInstance() {
    StudyBuilderFactory_initEntries();
    return StudyBuilderFactory_MARKET_FACILITATION_INDEX_instance;
  }
  function StudyBuilderFactory_MASS_INDEX_getInstance() {
    StudyBuilderFactory_initEntries();
    return StudyBuilderFactory_MASS_INDEX_instance;
  }
  function StudyBuilderFactory_MOMENTUM_getInstance() {
    StudyBuilderFactory_initEntries();
    return StudyBuilderFactory_MOMENTUM_instance;
  }
  function StudyBuilderFactory_MONEY_FLOW_INDEX_getInstance() {
    StudyBuilderFactory_initEntries();
    return StudyBuilderFactory_MONEY_FLOW_INDEX_instance;
  }
  function StudyBuilderFactory_NEGATIVE_VOLUME_INDEX_getInstance() {
    StudyBuilderFactory_initEntries();
    return StudyBuilderFactory_NEGATIVE_VOLUME_INDEX_instance;
  }
  function StudyBuilderFactory_ON_BALANCE_VOLUME_getInstance() {
    StudyBuilderFactory_initEntries();
    return StudyBuilderFactory_ON_BALANCE_VOLUME_instance;
  }
  function StudyBuilderFactory_DAY_OPEN_CLOSE_getInstance() {
    StudyBuilderFactory_initEntries();
    return StudyBuilderFactory_DAY_OPEN_CLOSE_instance;
  }
  function StudyBuilderFactory_OSCILLATOR_getInstance() {
    StudyBuilderFactory_initEntries();
    return StudyBuilderFactory_OSCILLATOR_instance;
  }
  function StudyBuilderFactory_PARABOLIC_SAR_getInstance() {
    StudyBuilderFactory_initEntries();
    return StudyBuilderFactory_PARABOLIC_SAR_instance;
  }
  function StudyBuilderFactory_PIVOT_POINTS_getInstance() {
    StudyBuilderFactory_initEntries();
    return StudyBuilderFactory_PIVOT_POINTS_instance;
  }
  function StudyBuilderFactory_PRICE_CHANNEL_getInstance() {
    StudyBuilderFactory_initEntries();
    return StudyBuilderFactory_PRICE_CHANNEL_instance;
  }
  function StudyBuilderFactory_PRICE_VOLUME_TREND_getInstance() {
    StudyBuilderFactory_initEntries();
    return StudyBuilderFactory_PRICE_VOLUME_TREND_instance;
  }
  function StudyBuilderFactory_RELATIVE_STRENGTH_INDEX_getInstance() {
    StudyBuilderFactory_initEntries();
    return StudyBuilderFactory_RELATIVE_STRENGTH_INDEX_instance;
  }
  function StudyBuilderFactory_RELATIVE_VIGOR_INDEX_getInstance() {
    StudyBuilderFactory_initEntries();
    return StudyBuilderFactory_RELATIVE_VIGOR_INDEX_instance;
  }
  function StudyBuilderFactory_RELATIVE_VIGOR_INDEX_SMA_getInstance() {
    StudyBuilderFactory_initEntries();
    return StudyBuilderFactory_RELATIVE_VIGOR_INDEX_SMA_instance;
  }
  function StudyBuilderFactory_RELATIVE_VOLATILITY_INDEX_getInstance() {
    StudyBuilderFactory_initEntries();
    return StudyBuilderFactory_RELATIVE_VOLATILITY_INDEX_instance;
  }
  function StudyBuilderFactory_ROC_getInstance() {
    StudyBuilderFactory_initEntries();
    return StudyBuilderFactory_ROC_instance;
  }
  function StudyBuilderFactory_SLOW_STOCHASTIC_getInstance() {
    StudyBuilderFactory_initEntries();
    return StudyBuilderFactory_SLOW_STOCHASTIC_instance;
  }
  function StudyBuilderFactory_SMA_getInstance() {
    StudyBuilderFactory_initEntries();
    return StudyBuilderFactory_SMA_instance;
  }
  function StudyBuilderFactory_SMMA_getInstance() {
    StudyBuilderFactory_initEntries();
    return StudyBuilderFactory_SMMA_instance;
  }
  function StudyBuilderFactory_SROC_getInstance() {
    StudyBuilderFactory_initEntries();
    return StudyBuilderFactory_SROC_instance;
  }
  function StudyBuilderFactory_SCHAFF_TREND_CYCLE_getInstance() {
    StudyBuilderFactory_initEntries();
    return StudyBuilderFactory_SCHAFF_TREND_CYCLE_instance;
  }
  function StudyBuilderFactory_STANDARD_DEVIATION_CHANNEL_getInstance() {
    StudyBuilderFactory_initEntries();
    return StudyBuilderFactory_STANDARD_DEVIATION_CHANNEL_instance;
  }
  function StudyBuilderFactory_STANDARD_DEVIATION_getInstance() {
    StudyBuilderFactory_initEntries();
    return StudyBuilderFactory_STANDARD_DEVIATION_instance;
  }
  function StudyBuilderFactory_STD_DEV_VOLATILITY_getInstance() {
    StudyBuilderFactory_initEntries();
    return StudyBuilderFactory_STD_DEV_VOLATILITY_instance;
  }
  function StudyBuilderFactory_TIME_SERIES_FORECAST_getInstance() {
    StudyBuilderFactory_initEntries();
    return StudyBuilderFactory_TIME_SERIES_FORECAST_instance;
  }
  function StudyBuilderFactory_TMA_getInstance() {
    StudyBuilderFactory_initEntries();
    return StudyBuilderFactory_TMA_instance;
  }
  function StudyBuilderFactory_TRIPLE_EMA_getInstance() {
    StudyBuilderFactory_initEntries();
    return StudyBuilderFactory_TRIPLE_EMA_instance;
  }
  function StudyBuilderFactory_TRUE_STRENGTH_INDEX_getInstance() {
    StudyBuilderFactory_initEntries();
    return StudyBuilderFactory_TRUE_STRENGTH_INDEX_instance;
  }
  function StudyBuilderFactory_ULTIMATE_OSCILLATOR_getInstance() {
    StudyBuilderFactory_initEntries();
    return StudyBuilderFactory_ULTIMATE_OSCILLATOR_instance;
  }
  function StudyBuilderFactory_VERTICAL_HORIZONTAL_FILTER_getInstance() {
    StudyBuilderFactory_initEntries();
    return StudyBuilderFactory_VERTICAL_HORIZONTAL_FILTER_instance;
  }
  function StudyBuilderFactory_VWAP_getInstance() {
    StudyBuilderFactory_initEntries();
    return StudyBuilderFactory_VWAP_instance;
  }
  function StudyBuilderFactory_WEIGHTED_CLOSE_getInstance() {
    StudyBuilderFactory_initEntries();
    return StudyBuilderFactory_WEIGHTED_CLOSE_instance;
  }
  function StudyBuilderFactory_WILDERS_SMOOTHING_getInstance() {
    StudyBuilderFactory_initEntries();
    return StudyBuilderFactory_WILDERS_SMOOTHING_instance;
  }
  function StudyBuilderFactory_WILLIAMS_ALLIGATOR_getInstance() {
    StudyBuilderFactory_initEntries();
    return StudyBuilderFactory_WILLIAMS_ALLIGATOR_instance;
  }
  function StudyBuilderFactory_WILLIAMS_PERCENT_RANGE_getInstance() {
    StudyBuilderFactory_initEntries();
    return StudyBuilderFactory_WILLIAMS_PERCENT_RANGE_instance;
  }
  function StudyBuilderFactory_WMA_getInstance() {
    StudyBuilderFactory_initEntries();
    return StudyBuilderFactory_WMA_instance;
  }
  function StudyBuilderFactory_ZIG_ZAG_getInstance() {
    StudyBuilderFactory_initEntries();
    return StudyBuilderFactory_ZIG_ZAG_instance;
  }
  function StudyBuilderFactory_COMPARATIVE_getInstance() {
    StudyBuilderFactory_initEntries();
    return StudyBuilderFactory_COMPARATIVE_instance;
  }
  function StudyBuilderFactory_IMPLIED_VOLATILITY_getInstance() {
    StudyBuilderFactory_initEntries();
    return StudyBuilderFactory_IMPLIED_VOLATILITY_instance;
  }
  function StudyBuilderFactory_IMPLIED_VOLATILITY_GAUGE_getInstance() {
    StudyBuilderFactory_initEntries();
    return StudyBuilderFactory_IMPLIED_VOLATILITY_GAUGE_instance;
  }
  function StudyBuilderFactory_TD_SEQUENTIAL_getInstance() {
    StudyBuilderFactory_initEntries();
    return StudyBuilderFactory_TD_SEQUENTIAL_instance;
  }
  function StudyBuilderFactory_GTRAP_getInstance() {
    StudyBuilderFactory_initEntries();
    return StudyBuilderFactory_GTRAP_instance;
  }
  function StudyBuilderFactory_KAUFMAN_MOVING_AVERAGE_getInstance() {
    StudyBuilderFactory_initEntries();
    return StudyBuilderFactory_KAUFMAN_MOVING_AVERAGE_instance;
  }
  function StudyBuilderFactory_WAVE_TREND_WITH_CROSSES_getInstance() {
    StudyBuilderFactory_initEntries();
    return StudyBuilderFactory_WAVE_TREND_WITH_CROSSES_instance;
  }
  function StudyBuilderFactory_FIBONACCI_BOLLINGER_BANDS_getInstance() {
    StudyBuilderFactory_initEntries();
    return StudyBuilderFactory_FIBONACCI_BOLLINGER_BANDS_instance;
  }
  function StudyBuilderFactory_WAVE_TREND_getInstance() {
    StudyBuilderFactory_initEntries();
    return StudyBuilderFactory_WAVE_TREND_instance;
  }
  function Companion_48() {
    Companion_instance_48 = this;
    this.wh_1 = 'limit';
  }
  var Companion_instance_48;
  function Companion_getInstance_48() {
    if (Companion_instance_48 == null)
      new Companion_48();
    return Companion_instance_48;
  }
  function SwingAccumulation() {
    Companion_getInstance_48();
    StudyBuilder.call(this);
  }
  protoOf(SwingAccumulation).yb = function (params) {
    protoOf(StudyBuilder).hc.call(this, params, Companion_getInstance_48().wh_1);
  };
  protoOf(SwingAccumulation).zb = function (data, params) {
    var si = Companion_getInstance_49().yh(data, params);
    return listOf([new CumulativeSumFunction(si), new ZeroFunction()]);
  };
  var PriceValue_TODAY_CLOSE_instance;
  var PriceValue_TODAY_OPEN_instance;
  var PriceValue_TODAY_HIGH_instance;
  var PriceValue_TODAY_LOW_instance;
  var PriceValue_YESTERDAY_OPEN_instance;
  var PriceValue_YESTERDAY_CLOSE_instance;
  var PriceValue_YESTERDAY_HIGH_instance;
  var PriceValue_YESTERDAY_LOW_instance;
  var PriceValue_entriesInitialized;
  function PriceValue_initEntries() {
    if (PriceValue_entriesInitialized)
      return Unit_getInstance();
    PriceValue_entriesInitialized = true;
    PriceValue_TODAY_CLOSE_instance = new PriceValue('TODAY_CLOSE', 0);
    PriceValue_TODAY_OPEN_instance = new PriceValue('TODAY_OPEN', 1);
    PriceValue_TODAY_HIGH_instance = new PriceValue('TODAY_HIGH', 2);
    PriceValue_TODAY_LOW_instance = new PriceValue('TODAY_LOW', 3);
    PriceValue_YESTERDAY_OPEN_instance = new PriceValue('YESTERDAY_OPEN', 4);
    PriceValue_YESTERDAY_CLOSE_instance = new PriceValue('YESTERDAY_CLOSE', 5);
    PriceValue_YESTERDAY_HIGH_instance = new PriceValue('YESTERDAY_HIGH', 6);
    PriceValue_YESTERDAY_LOW_instance = new PriceValue('YESTERDAY_LOW', 7);
  }
  function getFormula($this, data) {
    var close = getPriceFunction($this, PriceValue_TODAY_CLOSE_getInstance(), data);
    var closeY = getPriceFunction($this, PriceValue_YESTERDAY_CLOSE_getInstance(), data);
    var open = getPriceFunction($this, PriceValue_TODAY_OPEN_getInstance(), data);
    var openY = getPriceFunction($this, PriceValue_YESTERDAY_OPEN_getInstance(), data);
    var c4 = new ConstantFunction(4.0);
    var c2 = new ConstantFunction(2.0);
    var closeMinusOpen = new ArithmeticFunction(close, open, ArithmeticOperation_MINUS_getInstance());
    var closeMinusOpenDiv2 = new ArithmeticFunction(closeMinusOpen, c2, ArithmeticOperation_DIV_getInstance());
    var yCloseMinusYOpen = new ArithmeticFunction(closeY, openY, ArithmeticOperation_MINUS_getInstance());
    var yCloseMinusYOpenDiv4 = new ArithmeticFunction(yCloseMinusYOpen, c4, ArithmeticOperation_DIV_getInstance());
    var closeMinusYClose = new ArithmeticFunction(close, closeY, ArithmeticOperation_MINUS_getInstance());
    var plus = new ArithmeticFunction(closeMinusYClose, closeMinusOpenDiv2, ArithmeticOperation_PLUS_getInstance());
    return new ArithmeticFunction(plus, yCloseMinusYOpenDiv4, ArithmeticOperation_PLUS_getInstance());
  }
  function getArithmeticPriceFunction($this, first, second, operation, data) {
    var firstFunc = getPriceFunction($this, first, data);
    var secondFunc = getPriceFunction($this, second, data);
    return new ArithmeticFunction(firstFunc, secondFunc, operation);
  }
  function getPriceFunction($this, value, data) {
    var result;
    var tmp0_subject = value;
    var tmp0 = tmp0_subject.s6_1;
    switch (tmp0) {
      case 0:
        result = new PriceSourceFunction(data, PriceFieldEnum_CLOSE_getInstance());
        break;
      case 1:
        result = new PriceSourceFunction(data, PriceFieldEnum_OPEN_getInstance());
        break;
      case 2:
        result = new PriceSourceFunction(data, PriceFieldEnum_HIGH_getInstance());
        break;
      case 3:
        result = new PriceSourceFunction(data, PriceFieldEnum_LOW_getInstance());
        break;
      case 4:
        result = new DisplacementFunction(new PriceSourceFunction(data, PriceFieldEnum_OPEN_getInstance()), -1);
        break;
      case 5:
        result = new DisplacementFunction(new PriceSourceFunction(data, PriceFieldEnum_CLOSE_getInstance()), -1);
        break;
      case 6:
        result = new DisplacementFunction(new PriceSourceFunction(data, PriceFieldEnum_HIGH_getInstance()), -1);
        break;
      case 7:
        result = new DisplacementFunction(new PriceSourceFunction(data, PriceFieldEnum_LOW_getInstance()), -1);
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return result;
  }
  function PriceValue(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Companion_49() {
    Companion_instance_49 = this;
    this.xh_1 = 'limit';
  }
  protoOf(Companion_49).yh = function (data, params) {
    var tmp = params.d1(this.xh_1);
    var limit = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
    var hcprev = new AbsFunction(getArithmeticPriceFunction(this, PriceValue_TODAY_HIGH_getInstance(), PriceValue_YESTERDAY_CLOSE_getInstance(), ArithmeticOperation_MINUS_getInstance(), data));
    var lcprev = new AbsFunction(getArithmeticPriceFunction(this, PriceValue_TODAY_LOW_getInstance(), PriceValue_YESTERDAY_CLOSE_getInstance(), ArithmeticOperation_MINUS_getInstance(), data));
    var upper = new MaxValueFunction([new AbsFunction(hcprev), new AbsFunction(lcprev)]);
    var formula = getFormula(this, data);
    var ratio = new SwingIndexRatio(data);
    var c50 = new ConstantFunction(50.0);
    var formulaDivRatio = new ArithmeticFunction(formula, ratio, ArithmeticOperation_DIV_ZERO_getInstance());
    var upperDivLimit = new ArithmeticFunction(upper, new ConstantFunction(limit), ArithmeticOperation_DIV_ZERO_getInstance());
    var formulaDivRatioMultUpperDivLimit = new ArithmeticFunction(formulaDivRatio, upperDivLimit, ArithmeticOperation_MULT_getInstance());
    var min = new MinValueFunction([new ConstantFunction(100.0), new ArithmeticFunction(c50, formulaDivRatioMultUpperDivLimit, ArithmeticOperation_MULT_getInstance())]);
    return new MaxValueFunction([new ConstantFunction(-100.0), min]);
  };
  var Companion_instance_49;
  function Companion_getInstance_49() {
    if (Companion_instance_49 == null)
      new Companion_49();
    return Companion_instance_49;
  }
  function PriceValue_TODAY_CLOSE_getInstance() {
    PriceValue_initEntries();
    return PriceValue_TODAY_CLOSE_instance;
  }
  function PriceValue_TODAY_OPEN_getInstance() {
    PriceValue_initEntries();
    return PriceValue_TODAY_OPEN_instance;
  }
  function PriceValue_TODAY_HIGH_getInstance() {
    PriceValue_initEntries();
    return PriceValue_TODAY_HIGH_instance;
  }
  function PriceValue_TODAY_LOW_getInstance() {
    PriceValue_initEntries();
    return PriceValue_TODAY_LOW_instance;
  }
  function PriceValue_YESTERDAY_OPEN_getInstance() {
    PriceValue_initEntries();
    return PriceValue_YESTERDAY_OPEN_instance;
  }
  function PriceValue_YESTERDAY_CLOSE_getInstance() {
    PriceValue_initEntries();
    return PriceValue_YESTERDAY_CLOSE_instance;
  }
  function SwingIndex() {
    Companion_getInstance_49();
    StudyBuilder.call(this);
  }
  protoOf(SwingIndex).yb = function (params) {
    protoOf(StudyBuilder).hc.call(this, params, Companion_getInstance_49().xh_1);
  };
  protoOf(SwingIndex).zb = function (data, params) {
    var si = Companion_getInstance_49().yh(data, params);
    return listOf([si, new ZeroFunction()]);
  };
  function TDSequential$constructFunctionsArray$lambda(x, y) {
    var tmp;
    if (isFinite(x)) {
      tmp = 1.0;
    } else if (isFinite(y)) {
      tmp = -1.0;
    } else {
      DoubleCompanionObject_getInstance();
      tmp = NaN;
    }
    return tmp;
  }
  function TDSequential$constructFunctionsArray$lambda_0($countdownStartFromIndex) {
    return function (x) {
      return isFinite(x) ? x >= $countdownStartFromIndex : false;
    };
  }
  function TDSequential$constructFunctionsArray$lambda_1($countdownBarLength) {
    return function (x) {
      var tmp;
      if (isFinite(x) ? x === -($countdownBarLength - 1.0) : false) {
        tmp = 1.0;
      } else {
        DoubleCompanionObject_getInstance();
        tmp = NaN;
      }
      return tmp;
    };
  }
  function TDSequential$constructFunctionsArray$lambda_2($countdownBarLength) {
    return function (y) {
      var tmp;
      if (isFinite(y) ? y === -($countdownBarLength - 1.0) : false) {
        tmp = 1.0;
      } else {
        DoubleCompanionObject_getInstance();
        tmp = NaN;
      }
      return tmp;
    };
  }
  function TDSequential$constructFunctionsArray$lambda_3(x) {
    var tmp;
    if (isFinite(x)) {
      tmp = -x;
    } else {
      DoubleCompanionObject_getInstance();
      tmp = NaN;
    }
    return tmp;
  }
  function TDSequential() {
    StudyBuilder.call(this);
    this.zh_1 = 'setupBarLength';
    this.ai_1 = 'countdownBarLength';
    this.bi_1 = 'countdownStartFromIndex';
  }
  protoOf(TDSequential).yb = function (params) {
    protoOf(StudyBuilder).hc.call(this, params, this.zh_1);
    protoOf(StudyBuilder).hc.call(this, params, this.ai_1);
    protoOf(StudyBuilder).hc.call(this, params, this.bi_1);
  };
  protoOf(TDSequential).zb = function (data, params) {
    var tmp = params.d1(this.zh_1);
    var setupBarLength = numberToDouble(isNumber(tmp) ? tmp : THROW_CCE());
    var tmp_0 = params.d1(this.ai_1);
    var countdownBarLength = numberToDouble(isNumber(tmp_0) ? tmp_0 : THROW_CCE());
    var tmp_1 = params.d1(this.bi_1);
    var countdownStartFromIndex = numberToDouble(isNumber(tmp_1) ? tmp_1 : THROW_CCE());
    var sellFlip = new PriceFlipFunction(data, TDBuySell_SELL_getInstance());
    var buyFlip = new PriceFlipFunction(data, TDBuySell_BUY_getInstance());
    var buySetup = new SetupFunction(data, sellFlip, TDBuySell_BUY_getInstance(), setupBarLength);
    var sellSetup = new SetupFunction(data, buyFlip, TDBuySell_SELL_getInstance(), setupBarLength);
    var setupSignum = new CombineFunction(data, sellSetup, buySetup, TDSequential$constructFunctionsArray$lambda);
    var countdownBuy = new CountdownFunction(data, buySetup, sellSetup, TDBuySell_BUY_getInstance(), setupBarLength, countdownBarLength);
    var countdownSell = new CountdownFunction(data, sellSetup, buySetup, TDBuySell_SELL_getInstance(), setupBarLength, countdownBarLength);
    var countdownShow = TDSequential$constructFunctionsArray$lambda_0(countdownStartFromIndex);
    var countdownBuyShow = new PredicateFunction(data, countdownBuy, countdownBuy, countdownShow);
    var countdownSellShow = new PredicateFunction(data, countdownSell, countdownSell, countdownShow);
    var countdownBuyExtra = new MapFunction(data, countdownBuy, TDSequential$constructFunctionsArray$lambda_1(countdownBarLength));
    var countdownSellExtra = new MapFunction(data, countdownSell, TDSequential$constructFunctionsArray$lambda_2(countdownBarLength));
    var perfectBuyCountdown = new PerfectCountdownFunction(data, countdownBuy, TDBuySell_BUY_getInstance(), setupBarLength, countdownBarLength);
    var perfectSellCountdown = new PerfectCountdownFunction(data, countdownSell, TDBuySell_SELL_getInstance(), setupBarLength, countdownBarLength);
    var perfectBuySetup = new PerfectSetupFunction(data, buySetup, TDBuySell_BUY_getInstance(), setupBarLength);
    var perfectSellSetup = new PerfectSetupFunction(data, sellSetup, TDBuySell_SELL_getInstance(), setupBarLength);
    var buySetupArrow = perfectBuySetup;
    var sellSetupArrow = new MapFunction(data, perfectSellSetup, TDSequential$constructFunctionsArray$lambda_3);
    var resistance = new SupportResistanceFunction(data, buySetup, TDSupportResistance_Resistance_getInstance(), setupBarLength);
    var support = new SupportResistanceFunction(data, sellSetup, TDSupportResistance_Support_getInstance(), setupBarLength);
    return listOf([buySetup, sellSetup, countdownBuyShow, countdownSellShow, perfectBuySetup, perfectSellSetup, support, resistance, countdownBuyExtra, countdownSellExtra, setupSignum, perfectBuyCountdown, perfectSellCountdown, buySetupArrow, sellSetupArrow]);
  };
  function TEMA() {
    StudyBuilder.call(this);
  }
  protoOf(TEMA).yb = function (params) {
    protoOf(StudyBuilder).cc.call(this, params);
    protoOf(StudyBuilder).dc.call(this, params);
    protoOf(StudyBuilder).ac.call(this, params);
  };
  protoOf(TEMA).zb = function (data, params) {
    var tmp = params.d1(Companion_getInstance_5().ub_1);
    var length = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
    var tmp_0 = params.d1(Companion_getInstance_5().vb_1);
    var displace = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE();
    var tmp_1 = params.d1(Companion_getInstance_5().wb_1);
    var priceField = tmp_1 instanceof PriceFieldEnum ? tmp_1 : THROW_CCE();
    var term1 = new ArithmeticFunction(new ConstantFunction(3.0), new MovingAverageExponential(new PriceSourceFunction(data, priceField), length), ArithmeticOperation_MULT_getInstance());
    var term2 = new ArithmeticFunction(new ConstantFunction(3.0), new MovingAverageExponential(new MovingAverageExponential(new PriceSourceFunction(data, priceField), length), length, length), ArithmeticOperation_MULT_getInstance());
    var term3 = new MovingAverageExponential(new MovingAverageExponential(new MovingAverageExponential(new PriceSourceFunction(data, priceField), length), length, length), length, imul(2, length));
    var tema = new ArithmeticFunction(new ArithmeticFunction(term1, term2, ArithmeticOperation_MINUS_getInstance()), term3, ArithmeticOperation_PLUS_getInstance());
    return listOf_0(new DisplacementFunction(tema, displace));
  };
  protoOf(TEMA).mb = function (params) {
    var tmp = params.d1(Companion_getInstance_5().vb_1);
    var displace = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
    return -displace | 0;
  };
  function TMA() {
    StudyBuilder.call(this);
  }
  protoOf(TMA).yb = function (params) {
    protoOf(StudyBuilder).cc.call(this, params);
    protoOf(StudyBuilder).dc.call(this, params);
    protoOf(StudyBuilder).ac.call(this, params);
  };
  protoOf(TMA).zb = function (data, params) {
    var tmp = params.d1(Companion_getInstance_5().ub_1);
    var length = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
    var tmp_0 = params.d1(Companion_getInstance_5().vb_1);
    var displace = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE();
    var tmp_1 = params.d1(Companion_getInstance_5().wb_1);
    var priceField = tmp_1 instanceof PriceFieldEnum ? tmp_1 : THROW_CCE();
    var effectiveLength = numberToInt(round((length + 1 | 0) / 2.0));
    var priceFunc = new PriceSourceFunction(data, priceField);
    var smaFunc = new MovingAverageSimple(priceFunc, effectiveLength);
    var tmaFunc = new MovingAverageSimple(smaFunc, effectiveLength);
    var displacedTmaFunc = new DisplacementFunction(tmaFunc, displace);
    return listOf_0(displacedTmaFunc);
  };
  protoOf(TMA).mb = function (params) {
    var tmp = params.d1(Companion_getInstance_5().vb_1);
    var displace = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
    return -displace | 0;
  };
  function Companion_50() {
    Companion_instance_50 = this;
    this.ci_1 = 'regressionLength';
    this.di_1 = 'forecastLength';
  }
  var Companion_instance_50;
  function Companion_getInstance_50() {
    if (Companion_instance_50 == null)
      new Companion_50();
    return Companion_instance_50;
  }
  function TimeSeriesForecast() {
    Companion_getInstance_50();
    StudyBuilder.call(this);
  }
  protoOf(TimeSeriesForecast).yb = function (params) {
    protoOf(StudyBuilder).dc.call(this, params);
    protoOf(StudyBuilder).bc.call(this, params, Companion_getInstance_50().di_1);
    protoOf(StudyBuilder).bc.call(this, params, Companion_getInstance_50().ci_1);
  };
  protoOf(TimeSeriesForecast).zb = function (data, params) {
    var tmp = params.d1(Companion_getInstance_50().ci_1);
    var regressionLength = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
    var tmp_0 = params.d1(Companion_getInstance_50().di_1);
    var forecastLength = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE();
    var tmp_1 = params.d1(Companion_getInstance_5().wb_1);
    var priceField = tmp_1 instanceof PriceFieldEnum ? tmp_1 : THROW_CCE();
    var price = new PriceSourceFunction(data, priceField);
    var inertia = new LinearRegressionCurveFunction(price, regressionLength);
    var cPeriod = new ConstantFunction(forecastLength);
    var linRegSl = Companion_getInstance_28().le(data, regressionLength, priceField);
    var lrs = new ArithmeticFunction(cPeriod, linRegSl, ArithmeticOperation_MULT_getInstance());
    return listOf_0(new ArithmeticFunction(inertia, lrs, ArithmeticOperation_PLUS_getInstance()));
  };
  function TripleEMA() {
    StudyBuilder.call(this);
  }
  protoOf(TripleEMA).yb = function (params) {
    protoOf(StudyBuilder).cc.call(this, params);
    protoOf(StudyBuilder).dc.call(this, params);
  };
  protoOf(TripleEMA).zb = function (data, params) {
    var tmp = params.d1(Companion_getInstance_5().ub_1);
    var length = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
    var shiftLength = 1;
    var tmp_0 = params.d1(Companion_getInstance_5().wb_1);
    var priceField = tmp_0 instanceof PriceFieldEnum ? tmp_0 : THROW_CCE();
    var logPriceFunctionForTriple = new LogarithmFunction(new PriceSourceFunction(data, priceField));
    var logPriceFunctionForPrev = new LogarithmFunction(new PriceSourceFunction(data, priceField));
    var triple = new MovingAverageExponential(new MovingAverageExponential(new MovingAverageExponential(logPriceFunctionForTriple, length), length, length), length, imul(2, length));
    var pricePrevious = new DisplacementFunction(logPriceFunctionForPrev, -shiftLength | 0);
    var triplePrevious = new MovingAverageExponential(new MovingAverageExponential(new MovingAverageExponential(pricePrevious, length, shiftLength), length, length + shiftLength | 0), length, imul(2, length) + shiftLength | 0);
    var trixFactor = new ArithmeticFunction(triple, triplePrevious, ArithmeticOperation_MINUS_getInstance());
    var trix = new ArithmeticFunction(trixFactor, new ConstantFunction(10000.0), ArithmeticOperation_MULT_getInstance());
    var zero = new ZeroFunction();
    return listOf([trix, zero]);
  };
  function getTSI($this, price, longLength, shortLength, averageType) {
    var priceDelayed = new DisplacementFunction(price, -1);
    var momentum = new ArithmeticFunction(price, priceDelayed, ArithmeticOperation_MINUS_getInstance());
    var averageOfAverage = getAverageOfAverage($this, momentum, longLength, shortLength, averageType);
    var absMomentum = new AbsFunction(momentum);
    var absEmaEma = getAverageOfAverage($this, absMomentum, longLength, shortLength, averageType);
    var div = new ArithmeticFunction(averageOfAverage, absEmaEma, ArithmeticOperation_DIV_ZERO_getInstance());
    var c100 = new ConstantFunction(100.0);
    return new ArithmeticFunction(div, c100, ArithmeticOperation_MULT_getInstance());
  }
  function getAverageOfAverage($this, function_0, longLength, shortLength, averageType) {
    return CommonFunctions_getInstance().yf(averageType, CommonFunctions_getInstance().yf(averageType, function_0, longLength, 1), shortLength, longLength);
  }
  function Companion_51() {
    Companion_instance_51 = this;
    this.ei_1 = 'longLength';
    this.fi_1 = 'shortLength';
    this.gi_1 = 'signalLength';
  }
  var Companion_instance_51;
  function Companion_getInstance_51() {
    if (Companion_instance_51 == null)
      new Companion_51();
    return Companion_instance_51;
  }
  function TrueStrengthIndex() {
    Companion_getInstance_51();
    StudyBuilder.call(this);
  }
  protoOf(TrueStrengthIndex).yb = function (params) {
    protoOf(StudyBuilder).bc.call(this, params, Companion_getInstance_51().ei_1);
    protoOf(StudyBuilder).bc.call(this, params, Companion_getInstance_51().fi_1);
    protoOf(StudyBuilder).bc.call(this, params, Companion_getInstance_51().gi_1);
    protoOf(StudyBuilder).dc.call(this, params);
    protoOf(StudyBuilder).fc.call(this, params);
  };
  protoOf(TrueStrengthIndex).zb = function (data, params) {
    var tmp = params.d1(Companion_getInstance_51().ei_1);
    var longLength = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
    var tmp_0 = params.d1(Companion_getInstance_51().fi_1);
    var shortLength = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE();
    var tmp_1 = params.d1(Companion_getInstance_51().gi_1);
    var signalLength = (!(tmp_1 == null) ? typeof tmp_1 === 'number' : false) ? tmp_1 : THROW_CCE();
    var tmp_2 = params.d1(Companion_getInstance_5().wb_1);
    var priceField = tmp_2 instanceof PriceFieldEnum ? tmp_2 : THROW_CCE();
    var tmp_3 = params.d1(Companion_getInstance_5().xb_1);
    var averageType = tmp_3 instanceof AverageTypeEnum ? tmp_3 : THROW_CCE();
    var price = new PriceSourceFunction(data, priceField);
    var tsi = getTSI(this, price, longLength, shortLength, averageType);
    var signalTsi = CommonFunctions_getInstance().yf(averageType, tsi, signalLength, (shortLength + longLength | 0) - 1 | 0);
    return listOf([tsi, signalTsi, new ZeroFunction()]);
  };
  function TypicalPrice() {
    StudyBuilder.call(this);
  }
  protoOf(TypicalPrice).zb = function (data, params) {
    var typicalPrice = new PriceSourceFunction(data, PriceFieldEnum_TYPICAL_getInstance());
    return listOf_0(typicalPrice);
  };
  function constructBuyingPressure($this, data) {
    var low = new PriceSourceFunction(data, PriceFieldEnum_LOW_getInstance());
    var close = new PriceSourceFunction(data, PriceFieldEnum_CLOSE_getInstance());
    return new BuyingPressure(low, close);
  }
  function constructValueFunction($this, diff, trRng, factor) {
    var valFactor = new ArithmeticFunction(diff, trRng, ArithmeticOperation_DIV_ZERO_getInstance());
    return new ArithmeticFunction(valFactor, new ConstantFunction(factor), ArithmeticOperation_MULT_getInstance());
  }
  function Companion_52() {
    Companion_instance_52 = this;
    this.hi_1 = 'fastLength';
    this.ii_1 = 'mediumLength';
    this.ji_1 = 'slowLength';
  }
  var Companion_instance_52;
  function Companion_getInstance_52() {
    if (Companion_instance_52 == null)
      new Companion_52();
    return Companion_instance_52;
  }
  function UltimateOscillator() {
    Companion_getInstance_52();
    StudyBuilder.call(this);
  }
  protoOf(UltimateOscillator).yb = function (params) {
    protoOf(StudyBuilder).bc.call(this, params, Companion_getInstance_52().hi_1);
    protoOf(StudyBuilder).bc.call(this, params, Companion_getInstance_52().ii_1);
    protoOf(StudyBuilder).bc.call(this, params, Companion_getInstance_52().ji_1);
  };
  protoOf(UltimateOscillator).zb = function (data, params) {
    var tmp = params.d1(Companion_getInstance_52().hi_1);
    var fastLength = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
    var tmp_0 = params.d1(Companion_getInstance_52().ii_1);
    var mediumLength = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE();
    var tmp_1 = params.d1(Companion_getInstance_52().ji_1);
    var slowLength = (!(tmp_1 == null) ? typeof tmp_1 === 'number' : false) ? tmp_1 : THROW_CCE();
    var trRngFast = new SumFunction(CommonFunctions_getInstance().yc(data), fastLength);
    var trRngMed = new SumFunction(CommonFunctions_getInstance().yc(data), mediumLength);
    var trRngSlow = new SumFunction(CommonFunctions_getInstance().yc(data), slowLength);
    var diffFast = new SumFunction(constructBuyingPressure(Companion_getInstance_52(), data), fastLength);
    var diffMed = new SumFunction(constructBuyingPressure(Companion_getInstance_52(), data), mediumLength);
    var diffSlow = new SumFunction(constructBuyingPressure(Companion_getInstance_52(), data), slowLength);
    var factorFast = slowLength / fastLength;
    var factorMed = slowLength / mediumLength;
    var valFast = constructValueFunction(Companion_getInstance_52(), diffFast, trRngFast, factorFast);
    var valMed = constructValueFunction(Companion_getInstance_52(), diffMed, trRngMed, factorMed);
    var valFastMed = new ArithmeticFunction(valFast, valMed, ArithmeticOperation_PLUS_getInstance());
    var valSlow = new ArithmeticFunction(diffSlow, trRngSlow, ArithmeticOperation_DIV_ZERO_getInstance());
    var val = new ArithmeticFunction(valFastMed, valSlow, ArithmeticOperation_PLUS_getInstance());
    var ultOsc = constructValueFunction(Companion_getInstance_52(), val, new ConstantFunction(factorFast + factorMed + 1.0), 100.0);
    return listOf_0(ultOsc);
  };
  function VWAP() {
    StudyBuilder.call(this);
  }
  protoOf(VWAP).zb = function (data, params) {
    var volume = new PriceSourceFunction(data, PriceFieldEnum_VOLUME_getInstance());
    var typicalPrice = new PriceSourceFunction(data, PriceFieldEnum_TYPICAL_getInstance());
    var vp = new ArithmeticFunction(typicalPrice, volume, ArithmeticOperation_MULT_getInstance());
    var totalVP = new CumulativeSumWithinSessionFunction(data, vp);
    var totalVolume = new CumulativeSumWithinSessionFunction(data, volume);
    var vwap = WindowFunction_init_$Create$(new ArithmeticFunction(totalVP, totalVolume, ArithmeticOperation_DIV_ZERO_getInstance()), 0, true);
    return listOf_0(vwap);
  };
  function VerticalHorizontalFilter() {
    StudyBuilder.call(this);
  }
  protoOf(VerticalHorizontalFilter).yb = function (params) {
    protoOf(StudyBuilder).cc.call(this, params);
  };
  protoOf(VerticalHorizontalFilter).zb = function (data, params) {
    var tmp = params.d1(Companion_getInstance_5().ub_1);
    var length = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
    var highPrice = new PriceSourceFunction(data, PriceFieldEnum_HIGH_getInstance());
    var highest = new HighestFunction(highPrice, length);
    var lowPrice = new PriceSourceFunction(data, PriceFieldEnum_LOW_getInstance());
    var lowest = new LowestFunction(lowPrice, length);
    var numerator = new AbsFunction(new ArithmeticFunction(highest, lowest, ArithmeticOperation_MINUS_getInstance()));
    var closePrice = new PriceSourceFunction(data, PriceFieldEnum_CLOSE_getInstance());
    var closeDiff = new DiffPrevFunction(closePrice);
    var absCloseDiff = new AbsFunction(closeDiff);
    var denominator = new SumFunction(absCloseDiff, length);
    var vhf = WindowFunction_init_$Create$(new ArithmeticFunction(numerator, denominator, ArithmeticOperation_DIV_ZERO_getInstance()), 0, true);
    return listOf_0(vhf);
  };
  function WMA() {
    StudyBuilder.call(this);
  }
  protoOf(WMA).yb = function (params) {
    protoOf(StudyBuilder).cc.call(this, params);
    protoOf(StudyBuilder).dc.call(this, params);
    protoOf(StudyBuilder).ac.call(this, params);
  };
  protoOf(WMA).zb = function (data, params) {
    var tmp = params.d1(Companion_getInstance_5().ub_1);
    var length = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
    var tmp_0 = params.d1(Companion_getInstance_5().vb_1);
    var displace = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE();
    var tmp_1 = params.d1(Companion_getInstance_5().wb_1);
    var priceField = tmp_1 instanceof PriceFieldEnum ? tmp_1 : THROW_CCE();
    var priceFunc = new PriceSourceFunction(data, priceField);
    var wmaFunc = new MovingAverageWeighted(priceFunc, length);
    var displacedSmaFunc = new DisplacementFunction(wmaFunc, displace);
    return listOf_0(displacedSmaFunc);
  };
  protoOf(WMA).mb = function (params) {
    var tmp = params.d1(Companion_getInstance_5().vb_1);
    var displace = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
    return -displace | 0;
  };
  function Companion_53() {
    Companion_instance_53 = this;
    this.ki_1 = 'channelLength';
    this.li_1 = 'averageLength';
    this.mi_1 = 'overBoughtLevel1';
    this.ni_1 = 'overBoughtLevel2';
    this.oi_1 = 'overSoldLevel1';
    this.pi_1 = 'overSoldLevel2';
  }
  var Companion_instance_53;
  function Companion_getInstance_53() {
    if (Companion_instance_53 == null)
      new Companion_53();
    return Companion_instance_53;
  }
  function WaveTrend() {
    Companion_getInstance_53();
    StudyBuilder.call(this);
  }
  protoOf(WaveTrend).yb = function (params) {
    protoOf(StudyBuilder).bc.call(this, params, Companion_getInstance_53().ki_1);
    protoOf(StudyBuilder).bc.call(this, params, Companion_getInstance_53().li_1);
    protoOf(StudyBuilder).bc.call(this, params, Companion_getInstance_53().mi_1);
    protoOf(StudyBuilder).bc.call(this, params, Companion_getInstance_53().ni_1);
    protoOf(StudyBuilder).bc.call(this, params, Companion_getInstance_53().oi_1);
    protoOf(StudyBuilder).bc.call(this, params, Companion_getInstance_53().pi_1);
  };
  protoOf(WaveTrend).zb = function (data, params) {
    var tmp = params.d1(Companion_getInstance_53().ki_1);
    var channelLen = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
    var tmp_0 = params.d1(Companion_getInstance_53().li_1);
    var averageLen = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE();
    var tmp_1 = params.d1(Companion_getInstance_53().mi_1);
    var obLevel1 = new ConstantFunction((!(tmp_1 == null) ? typeof tmp_1 === 'number' : false) ? tmp_1 : THROW_CCE());
    var tmp_2 = params.d1(Companion_getInstance_53().ni_1);
    var obLevel2 = new ConstantFunction((!(tmp_2 == null) ? typeof tmp_2 === 'number' : false) ? tmp_2 : THROW_CCE());
    var tmp_3 = params.d1(Companion_getInstance_53().oi_1);
    var osLevel1 = new ConstantFunction((!(tmp_3 == null) ? typeof tmp_3 === 'number' : false) ? tmp_3 : THROW_CCE());
    var tmp_4 = params.d1(Companion_getInstance_53().pi_1);
    var osLevel2 = new ConstantFunction((!(tmp_4 == null) ? typeof tmp_4 === 'number' : false) ? tmp_4 : THROW_CCE());
    var averagePrice = new PriceSourceFunction(data, PriceFieldEnum_TYPICAL_getInstance());
    var esa = new MovingAverageExponential(averagePrice, channelLen);
    var af = new ArithmeticFunction(averagePrice, esa, ArithmeticOperation_MINUS_getInstance());
    var abs = new AbsFunction(af);
    var d = new MovingAverageExponential(abs, channelLen, channelLen);
    var ci = new ArithmeticFunction(new ArithmeticFunction(averagePrice, esa, ArithmeticOperation_MINUS_getInstance()), new ArithmeticFunction(new ConstantFunction(0.015), d, ArithmeticOperation_MULT_getInstance()), ArithmeticOperation_DIV_getInstance());
    var wt1 = new MovingAverageExponential(ci, averageLen, channelLen + averageLen | 0);
    var wt2 = new MovingAverageSimple(wt1, 4);
    var zero = new ZeroFunction();
    var wtdiff = new ArithmeticFunction(wt1, wt2, ArithmeticOperation_MINUS_getInstance());
    return listOf([zero, obLevel1, obLevel2, osLevel1, osLevel2, wt1, wt2, wtdiff]);
  };
  function Companion_54() {
    Companion_instance_54 = this;
    this.qi_1 = 'channelLength';
    this.ri_1 = 'averageLength';
    this.si_1 = 'overBoughtLevel1';
    this.ti_1 = 'overBoughtLevel2';
    this.ui_1 = 'overSoldLevel1';
    this.vi_1 = 'overSoldLevel2';
  }
  var Companion_instance_54;
  function Companion_getInstance_54() {
    if (Companion_instance_54 == null)
      new Companion_54();
    return Companion_instance_54;
  }
  function WaveTrendWithCrosses() {
    Companion_getInstance_54();
    StudyBuilder.call(this);
  }
  protoOf(WaveTrendWithCrosses).yb = function (params) {
    protoOf(StudyBuilder).bc.call(this, params, Companion_getInstance_54().qi_1);
    protoOf(StudyBuilder).bc.call(this, params, Companion_getInstance_54().ri_1);
    protoOf(StudyBuilder).bc.call(this, params, Companion_getInstance_54().si_1);
    protoOf(StudyBuilder).bc.call(this, params, Companion_getInstance_54().ti_1);
    protoOf(StudyBuilder).bc.call(this, params, Companion_getInstance_54().ui_1);
    protoOf(StudyBuilder).bc.call(this, params, Companion_getInstance_54().vi_1);
  };
  protoOf(WaveTrendWithCrosses).zb = function (data, params) {
    var tmp = params.d1(Companion_getInstance_54().qi_1);
    var channelLen = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
    var tmp_0 = params.d1(Companion_getInstance_54().ri_1);
    var averageLen = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE();
    var tmp_1 = params.d1(Companion_getInstance_54().si_1);
    var obLevel1 = new ConstantFunction((!(tmp_1 == null) ? typeof tmp_1 === 'number' : false) ? tmp_1 : THROW_CCE());
    var tmp_2 = params.d1(Companion_getInstance_54().ti_1);
    var obLevel2 = new ConstantFunction((!(tmp_2 == null) ? typeof tmp_2 === 'number' : false) ? tmp_2 : THROW_CCE());
    var tmp_3 = params.d1(Companion_getInstance_54().ui_1);
    var osLevel1 = new ConstantFunction((!(tmp_3 == null) ? typeof tmp_3 === 'number' : false) ? tmp_3 : THROW_CCE());
    var tmp_4 = params.d1(Companion_getInstance_54().vi_1);
    var osLevel2 = new ConstantFunction((!(tmp_4 == null) ? typeof tmp_4 === 'number' : false) ? tmp_4 : THROW_CCE());
    var averagePrice = new PriceSourceFunction(data, PriceFieldEnum_TYPICAL_getInstance());
    var esa = new MovingAverageExponential(averagePrice, channelLen);
    var af = new ArithmeticFunction(averagePrice, esa, ArithmeticOperation_MINUS_getInstance());
    var abs = new AbsFunction(af);
    var d = new MovingAverageExponential(abs, channelLen, channelLen);
    var ci = new ArithmeticFunction(new ArithmeticFunction(averagePrice, esa, ArithmeticOperation_MINUS_getInstance()), new ArithmeticFunction(new ConstantFunction(0.015), d, ArithmeticOperation_MULT_getInstance()), ArithmeticOperation_DIV_getInstance());
    var wt1 = new MovingAverageExponential(ci, averageLen, channelLen + averageLen | 0);
    var wt2 = new MovingAverageSimple(wt1, 4);
    var zero = new ZeroFunction();
    var wtdiff = new ArithmeticFunction(wt1, wt2, ArithmeticOperation_MINUS_getInstance());
    var crosses1 = new SeriesCrossingPoints(data, wt1, wt2, false, channelLen + averageLen | 0);
    var crosses2 = new SeriesCrossingPoints(data, wt1, wt2, true, channelLen + averageLen | 0);
    var candle1 = new MapToOneFunction(data, crosses1);
    var candle2 = new MapToOneFunction(data, crosses2);
    return listOf([zero, obLevel1, obLevel2, osLevel1, osLevel2, wt1, wt2, wtdiff, crosses1, crosses2, candle1, candle2]);
  };
  function WeightedClose() {
    StudyBuilder.call(this);
  }
  protoOf(WeightedClose).yb = function (params) {
    protoOf(StudyBuilder).cc.call(this, params);
  };
  protoOf(WeightedClose).zb = function (data, params) {
    var tmp = params.d1(Companion_getInstance_5().ub_1);
    var length = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
    var close = new PriceSourceFunction(data, PriceFieldEnum_CLOSE_getInstance());
    var high = new PriceSourceFunction(data, PriceFieldEnum_HIGH_getInstance());
    var low = new PriceSourceFunction(data, PriceFieldEnum_LOW_getInstance());
    var c2 = new ConstantFunction(2.0);
    var c4 = new ConstantFunction(4.0);
    var sumPrices = new ArithmeticFunction(new ArithmeticFunction(c2, close, ArithmeticOperation_MULT_getInstance()), new ArithmeticFunction(high, low, ArithmeticOperation_PLUS_getInstance()), ArithmeticOperation_PLUS_getInstance());
    var wtdClose = new ArithmeticFunction(sumPrices, c4, ArithmeticOperation_DIV_getInstance());
    var avg = new MovingAverageSimple(wtdClose, length);
    return listOf([wtdClose, avg]);
  };
  function WildersSmoothing() {
    StudyBuilder.call(this);
  }
  protoOf(WildersSmoothing).yb = function (params) {
    protoOf(StudyBuilder).cc.call(this, params);
    protoOf(StudyBuilder).dc.call(this, params);
    protoOf(StudyBuilder).ac.call(this, params);
  };
  protoOf(WildersSmoothing).zb = function (data, params) {
    var tmp = params.d1(Companion_getInstance_5().ub_1);
    var length = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
    var tmp_0 = params.d1(Companion_getInstance_5().vb_1);
    var displace = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE();
    var tmp_1 = params.d1(Companion_getInstance_5().wb_1);
    var priceField = tmp_1 instanceof PriceFieldEnum ? tmp_1 : THROW_CCE();
    var priceFunc = new PriceSourceFunction(data, priceField);
    var wildersFunc = new WildersAverage(priceFunc, length);
    var displacedFunc = new DisplacementFunction(wildersFunc, displace);
    return listOf_0(displacedFunc);
  };
  protoOf(WildersSmoothing).mb = function (params) {
    var tmp = params.d1(Companion_getInstance_5().vb_1);
    var displace = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
    return -displace | 0;
  };
  function WilliamsAD() {
    StudyBuilder.call(this);
  }
  protoOf(WilliamsAD).zb = function (data, params) {
    var williamsAD = new WilliamsADFunction(data);
    return listOf([williamsAD, new ZeroFunction()]);
  };
  function Companion_55() {
    Companion_instance_55 = this;
    this.te_1 = 'jawLength';
    this.ue_1 = 'jawDisplace';
    this.ve_1 = 'teethLength';
    this.we_1 = 'teethDisplace';
    this.xe_1 = 'lipsLength';
    this.ye_1 = 'lipsDisplace';
    this.ze_1 = 'priceHigh';
    this.af_1 = 'priceLow';
  }
  protoOf(Companion_55).bf = function (data, priceHigh, priceLow) {
    var highPrice = new PriceSourceFunction(data, priceHigh);
    var lowPrice = new PriceSourceFunction(data, priceLow);
    return new ArithmeticFunction(highPrice, lowPrice, ArithmeticOperation_MIDPOINT_getInstance());
  };
  protoOf(Companion_55).cf = function (medianPrice, averageLength, displacementLength, averageType) {
    var averageFunction = CommonFunctions_getInstance().zc(averageType, medianPrice, averageLength);
    return new DisplacementFunction(averageFunction, displacementLength);
  };
  var Companion_instance_55;
  function Companion_getInstance_55() {
    if (Companion_instance_55 == null)
      new Companion_55();
    return Companion_instance_55;
  }
  function WilliamsAlligator() {
    Companion_getInstance_55();
    StudyBuilder.call(this);
  }
  protoOf(WilliamsAlligator).yb = function (params) {
    protoOf(StudyBuilder).ec.call(this, params, Companion_getInstance_55().ze_1);
    protoOf(StudyBuilder).ec.call(this, params, Companion_getInstance_55().af_1);
    protoOf(StudyBuilder).bc.call(this, params, Companion_getInstance_55().te_1);
    protoOf(StudyBuilder).bc.call(this, params, Companion_getInstance_55().ue_1);
    protoOf(StudyBuilder).bc.call(this, params, Companion_getInstance_55().ve_1);
    protoOf(StudyBuilder).bc.call(this, params, Companion_getInstance_55().we_1);
    protoOf(StudyBuilder).bc.call(this, params, Companion_getInstance_55().xe_1);
    protoOf(StudyBuilder).bc.call(this, params, Companion_getInstance_55().ye_1);
    protoOf(StudyBuilder).fc.call(this, params);
  };
  protoOf(WilliamsAlligator).zb = function (data, params) {
    var tmp = params.d1(Companion_getInstance_55().ze_1);
    var priceHigh = tmp instanceof PriceFieldEnum ? tmp : THROW_CCE();
    var tmp_0 = params.d1(Companion_getInstance_55().af_1);
    var priceLow = tmp_0 instanceof PriceFieldEnum ? tmp_0 : THROW_CCE();
    var tmp_1 = params.d1(Companion_getInstance_55().te_1);
    var jawLength = (!(tmp_1 == null) ? typeof tmp_1 === 'number' : false) ? tmp_1 : THROW_CCE();
    var tmp_2 = params.d1(Companion_getInstance_55().ue_1);
    var jawDisplace = (!(tmp_2 == null) ? typeof tmp_2 === 'number' : false) ? tmp_2 : THROW_CCE();
    var tmp_3 = params.d1(Companion_getInstance_55().ve_1);
    var teethLength = (!(tmp_3 == null) ? typeof tmp_3 === 'number' : false) ? tmp_3 : THROW_CCE();
    var tmp_4 = params.d1(Companion_getInstance_55().we_1);
    var teethDisplace = (!(tmp_4 == null) ? typeof tmp_4 === 'number' : false) ? tmp_4 : THROW_CCE();
    var tmp_5 = params.d1(Companion_getInstance_55().xe_1);
    var lipsLength = (!(tmp_5 == null) ? typeof tmp_5 === 'number' : false) ? tmp_5 : THROW_CCE();
    var tmp_6 = params.d1(Companion_getInstance_55().ye_1);
    var lipsDisplace = (!(tmp_6 == null) ? typeof tmp_6 === 'number' : false) ? tmp_6 : THROW_CCE();
    var tmp_7 = params.d1(Companion_getInstance_5().xb_1);
    var averageType = tmp_7 instanceof AverageTypeEnum ? tmp_7 : THROW_CCE();
    var medianPrice = Companion_getInstance_55().bf(data, priceHigh, priceLow);
    var jawFunction = Companion_getInstance_55().cf(medianPrice, jawLength, -jawDisplace | 0, averageType);
    var teethFunction = Companion_getInstance_55().cf(medianPrice, teethLength, -teethDisplace | 0, averageType);
    var lipsFunction = Companion_getInstance_55().cf(medianPrice, lipsLength, -lipsDisplace | 0, averageType);
    return listOf([jawFunction, teethFunction, lipsFunction]);
  };
  protoOf(WilliamsAlligator).mb = function (params) {
    var tmp = params.d1(Companion_getInstance_55().we_1);
    var teethDisplace = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
    var tmp_0 = params.d1(Companion_getInstance_55().ue_1);
    var jawDisplace = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE();
    var tmp_1 = params.d1(Companion_getInstance_55().ye_1);
    var lipsDisplace = (!(tmp_1 == null) ? typeof tmp_1 === 'number' : false) ? tmp_1 : THROW_CCE();
    return MathUtils_getInstance().df(new Int32Array([teethDisplace, lipsDisplace, jawDisplace]));
  };
  function Companion_56() {
    Companion_instance_56 = this;
    this.wi_1 = 'offset';
  }
  var Companion_instance_56;
  function Companion_getInstance_56() {
    if (Companion_instance_56 == null)
      new Companion_56();
    return Companion_instance_56;
  }
  function WilliamsFractal() {
    Companion_getInstance_56();
    StudyBuilder.call(this);
  }
  protoOf(WilliamsFractal).yb = function (params) {
    protoOf(StudyBuilder).bc.call(this, params, Companion_getInstance_56().wi_1);
  };
  protoOf(WilliamsFractal).zb = function (data, params) {
    var tmp = params.d1(Companion_getInstance_56().wi_1);
    var offset = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
    var priceHigh = new PriceSourceFunction(data, PriceFieldEnum_HIGH_getInstance());
    var priceLow = new PriceSourceFunction(data, PriceFieldEnum_LOW_getInstance());
    var upFractal = new WilliamsFractalFilter(priceHigh, offset, FractalOperation_UP_getInstance());
    var downFractal = new WilliamsFractalFilter(priceLow, offset, FractalOperation_DOWN_getInstance());
    return listOf([upFractal, downFractal]);
  };
  function Companion_57() {
    Companion_instance_57 = this;
    this.xi_1 = 'overbought';
    this.yi_1 = 'oversold';
  }
  var Companion_instance_57;
  function Companion_getInstance_57() {
    if (Companion_instance_57 == null)
      new Companion_57();
    return Companion_instance_57;
  }
  function WilliamsPercentRange() {
    Companion_getInstance_57();
    StudyBuilder.call(this);
  }
  protoOf(WilliamsPercentRange).yb = function (params) {
    protoOf(StudyBuilder).cc.call(this, params);
    protoOf(StudyBuilder).bc.call(this, params, Companion_getInstance_57().xi_1);
    protoOf(StudyBuilder).bc.call(this, params, Companion_getInstance_57().yi_1);
  };
  protoOf(WilliamsPercentRange).zb = function (data, params) {
    var tmp = params.d1(Companion_getInstance_5().ub_1);
    var length = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
    var tmp_0 = params.d1(Companion_getInstance_57().xi_1);
    var overbought = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE();
    var tmp_1 = params.d1(Companion_getInstance_57().yi_1);
    var oversold = (!(tmp_1 == null) ? typeof tmp_1 === 'number' : false) ? tmp_1 : THROW_CCE();
    var highPrice = new PriceSourceFunction(data, PriceFieldEnum_HIGH_getInstance());
    var hh = new HighestFunction(highPrice, length);
    var hh2 = new HighestFunction(highPrice, length);
    var lowPrice = new PriceSourceFunction(data, PriceFieldEnum_LOW_getInstance());
    var ll = new LowestFunction(lowPrice, length);
    var close = new PriceSourceFunction(data, PriceFieldEnum_CLOSE_getInstance());
    var c100 = new ConstantFunction(-100.0);
    var wpr = WindowFunction_init_$Create$(new ArithmeticFunction(new ArithmeticFunction(new ArithmeticFunction(hh, close, ArithmeticOperation_MINUS_getInstance()), new ArithmeticFunction(hh2, ll, ArithmeticOperation_MINUS_getInstance()), ArithmeticOperation_DIV_ZERO_getInstance()), c100, ArithmeticOperation_MULT_getInstance()), 0, true);
    var overboughtF = new ConstantFunction(overbought);
    var oversoldF = new ConstantFunction(oversold);
    return listOf([wpr, oversoldF, overboughtF]);
  };
  function Companion_58() {
    Companion_instance_58 = this;
    this.zi_1 = 'deviation';
  }
  var Companion_instance_58;
  function Companion_getInstance_58() {
    if (Companion_instance_58 == null)
      new Companion_58();
    return Companion_instance_58;
  }
  function ZigZag() {
    Companion_getInstance_58();
    StudyBuilder.call(this);
  }
  protoOf(ZigZag).yb = function (params) {
    protoOf(StudyBuilder).dc.call(this, params);
    protoOf(StudyBuilder).bc.call(this, params, Companion_getInstance_58().zi_1);
  };
  protoOf(ZigZag).zb = function (data, params) {
    var tmp = params.d1(Companion_getInstance_5().wb_1);
    var priceField = tmp instanceof PriceFieldEnum ? tmp : THROW_CCE();
    var priceSource = new PriceSourceFunction(data, priceField);
    var tmp_0 = params.d1(Companion_getInstance_58().zi_1);
    var deviation = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE();
    var zigzag = WindowFunction_init_$Create$(new ZigZagFunction(priceSource, deviation / 10000.0), 0, true);
    return listOf_0(zigzag);
  };
  function MathUtils() {
    MathUtils_instance = this;
  }
  protoOf(MathUtils).df = function (values) {
    var maximum = values[0];
    var indexedObject = values;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var value = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (value > maximum) {
        maximum = value;
      }
    }
    return maximum;
  };
  var MathUtils_instance;
  function MathUtils_getInstance() {
    if (MathUtils_instance == null)
      new MathUtils();
    return MathUtils_instance;
  }
  function AbsFunction(srcFunc) {
    AbstractCachingFunction.call(this);
    this.bj_1 = srcFunc;
  }
  protoOf(AbsFunction).cj = function (index) {
    var tmp$ret$0;
    // Inline function 'kotlin.math.abs' call
    var tmp0_abs = this.bj_1.calculateAt(index);
    tmp$ret$0 = Math.abs(tmp0_abs);
    return tmp$ret$0;
  };
  protoOf(AbsFunction).va = function () {
    return listOf_0(this.bj_1);
  };
  defineProp(protoOf(AbsFunction), 'childFunctions', function () {
    return this.va();
  });
  defineProp(protoOf(AbsFunction), 'ownPastOffset', function () {
    return this.wa();
  });
  defineProp(protoOf(AbsFunction), 'prefetchSize', function () {
    return this.xa();
  });
  function ArithmeticFunction(leftFunc, rightFunc, operation) {
    this.fj_1 = leftFunc;
    this.gj_1 = rightFunc;
    this.hj_1 = operation;
  }
  protoOf(ArithmeticFunction).calculateAt = function (index) {
    return this.ij(this.fj_1.calculateAt(index), this.gj_1.calculateAt(index));
  };
  protoOf(ArithmeticFunction).wa = function () {
    return 0;
  };
  protoOf(ArithmeticFunction).xa = function () {
    return 0;
  };
  protoOf(ArithmeticFunction).va = function () {
    return listOf([this.fj_1, this.gj_1]);
  };
  protoOf(ArithmeticFunction).ij = function (leftValue, rightValue) {
    DoubleCompanionObject_getInstance();
    var result = NaN;
    var tmp0_subject = this.hj_1;
    var tmp0 = tmp0_subject.s6_1;
    switch (tmp0) {
      case 0:
        result = leftValue + rightValue;
        break;
      case 1:
        result = leftValue - rightValue;
        break;
      case 2:
        result = leftValue * rightValue;
        break;
      case 3:
        result = leftValue / rightValue;
        break;
      case 4:
        result = !(compareTo(rightValue, 0.0) === 0) ? leftValue / rightValue : 0.0;
        break;
      case 5:
        result = (leftValue + rightValue) / 2.0;
        break;
      case 6:
        var tmp$ret$0;
        // Inline function 'kotlin.comparisons.maxOf' call
        tmp$ret$0 = Math.max(leftValue, rightValue);

        result = tmp$ret$0;
        break;
      case 7:
        var tmp;
        if (compareTo(rightValue + leftValue, 0.0) === 0) {
          tmp = 0.0;
        } else {
          tmp = (leftValue - rightValue) / (leftValue + rightValue);
        }

        result = tmp;
        break;
      case 8:
        var tmp$ret$1;
        // Inline function 'kotlin.math.abs' call
        var tmp0_abs = leftValue - rightValue;
        tmp$ret$1 = Math.abs(tmp0_abs);

        result = tmp$ret$1 / (leftValue + rightValue);
        break;
      case 9:
        result = (leftValue - rightValue) / rightValue;
        break;
      case 10:
        result = (leftValue - rightValue) / leftValue;
        break;
      case 11:
        var tmp$ret$2;
        // Inline function 'kotlin.math.pow' call
        tmp$ret$2 = Math.pow(leftValue, rightValue);

        result = tmp$ret$2;
        break;
    }
    return result;
  };
  protoOf(ArithmeticFunction).d8 = function (changes) {
    var tmp$ret$0;
    // Inline function 'kotlin.comparisons.minOf' call
    var tmp0_minOf = this.fj_1.dataChanged(changes);
    var tmp1_minOf = this.gj_1.dataChanged(changes);
    tmp$ret$0 = Math.min(tmp0_minOf, tmp1_minOf);
    return tmp$ret$0;
  };
  protoOf(ArithmeticFunction).dataChanged = function (changes) {
    return this.d8(changes);
  };
  defineProp(protoOf(ArithmeticFunction), 'ownPastOffset', function () {
    return this.wa();
  });
  defineProp(protoOf(ArithmeticFunction), 'prefetchSize', function () {
    return this.xa();
  });
  defineProp(protoOf(ArithmeticFunction), 'childFunctions', function () {
    return this.va();
  });
  var ArithmeticOperation_PLUS_instance;
  var ArithmeticOperation_MINUS_instance;
  var ArithmeticOperation_MULT_instance;
  var ArithmeticOperation_DIV_instance;
  var ArithmeticOperation_DIV_ZERO_instance;
  var ArithmeticOperation_MIDPOINT_instance;
  var ArithmeticOperation_MAX_instance;
  var ArithmeticOperation_DIFF_DIV_SUM_ZERO_instance;
  var ArithmeticOperation_ABSDIFF_DIV_SUM_instance;
  var ArithmeticOperation_DIFF_DIV_RIGHT_instance;
  var ArithmeticOperation_DIFF_DIV_LEFT_instance;
  var ArithmeticOperation_POW_instance;
  var ArithmeticOperation_entriesInitialized;
  function ArithmeticOperation_initEntries() {
    if (ArithmeticOperation_entriesInitialized)
      return Unit_getInstance();
    ArithmeticOperation_entriesInitialized = true;
    ArithmeticOperation_PLUS_instance = new ArithmeticOperation('PLUS', 0);
    ArithmeticOperation_MINUS_instance = new ArithmeticOperation('MINUS', 1);
    ArithmeticOperation_MULT_instance = new ArithmeticOperation('MULT', 2);
    ArithmeticOperation_DIV_instance = new ArithmeticOperation('DIV', 3);
    ArithmeticOperation_DIV_ZERO_instance = new ArithmeticOperation('DIV_ZERO', 4);
    ArithmeticOperation_MIDPOINT_instance = new ArithmeticOperation('MIDPOINT', 5);
    ArithmeticOperation_MAX_instance = new ArithmeticOperation('MAX', 6);
    ArithmeticOperation_DIFF_DIV_SUM_ZERO_instance = new ArithmeticOperation('DIFF_DIV_SUM_ZERO', 7);
    ArithmeticOperation_ABSDIFF_DIV_SUM_instance = new ArithmeticOperation('ABSDIFF_DIV_SUM', 8);
    ArithmeticOperation_DIFF_DIV_RIGHT_instance = new ArithmeticOperation('DIFF_DIV_RIGHT', 9);
    ArithmeticOperation_DIFF_DIV_LEFT_instance = new ArithmeticOperation('DIFF_DIV_LEFT', 10);
    ArithmeticOperation_POW_instance = new ArithmeticOperation('POW', 11);
  }
  function ArithmeticOperation(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function ArithmeticOperation_PLUS_getInstance() {
    ArithmeticOperation_initEntries();
    return ArithmeticOperation_PLUS_instance;
  }
  function ArithmeticOperation_MINUS_getInstance() {
    ArithmeticOperation_initEntries();
    return ArithmeticOperation_MINUS_instance;
  }
  function ArithmeticOperation_MULT_getInstance() {
    ArithmeticOperation_initEntries();
    return ArithmeticOperation_MULT_instance;
  }
  function ArithmeticOperation_DIV_getInstance() {
    ArithmeticOperation_initEntries();
    return ArithmeticOperation_DIV_instance;
  }
  function ArithmeticOperation_DIV_ZERO_getInstance() {
    ArithmeticOperation_initEntries();
    return ArithmeticOperation_DIV_ZERO_instance;
  }
  function ArithmeticOperation_MIDPOINT_getInstance() {
    ArithmeticOperation_initEntries();
    return ArithmeticOperation_MIDPOINT_instance;
  }
  function ArithmeticOperation_MAX_getInstance() {
    ArithmeticOperation_initEntries();
    return ArithmeticOperation_MAX_instance;
  }
  function ArithmeticOperation_DIFF_DIV_SUM_ZERO_getInstance() {
    ArithmeticOperation_initEntries();
    return ArithmeticOperation_DIFF_DIV_SUM_ZERO_instance;
  }
  function ArithmeticOperation_DIFF_DIV_RIGHT_getInstance() {
    ArithmeticOperation_initEntries();
    return ArithmeticOperation_DIFF_DIV_RIGHT_instance;
  }
  function ArithmeticOperation_POW_getInstance() {
    ArithmeticOperation_initEntries();
    return ArithmeticOperation_POW_instance;
  }
  function getTrueLowValue($this, low, prevClose) {
    if (isNaN_0(low) ? true : isNaN_0(prevClose)) {
      DoubleCompanionObject_getInstance();
      return NaN;
    }
    var tmp$ret$0;
    // Inline function 'kotlin.comparisons.minOf' call
    tmp$ret$0 = Math.min(low, prevClose);
    return tmp$ret$0;
  }
  function BuyingPressure(low, close) {
    AbstractCachingFunction.call(this);
    this.kj_1 = low;
    this.lj_1 = close;
  }
  protoOf(BuyingPressure).wa = function () {
    return 1;
  };
  protoOf(BuyingPressure).va = function () {
    return listOf([this.kj_1, this.lj_1]);
  };
  protoOf(BuyingPressure).cj = function (index) {
    var trueLow = this.kj_1.calculateAt(index);
    if (index > 0) {
      trueLow = getTrueLowValue(this, trueLow, this.lj_1.calculateAt(index - 1 | 0));
    }
    var thisClose = this.lj_1.calculateAt(index);
    return thisClose - trueLow;
  };
  defineProp(protoOf(BuyingPressure), 'ownPastOffset', function () {
    return this.wa();
  });
  defineProp(protoOf(BuyingPressure), 'childFunctions', function () {
    return this.va();
  });
  defineProp(protoOf(BuyingPressure), 'prefetchSize', function () {
    return this.xa();
  });
  function getCloseLocationValue($this, low, close, high) {
    return !(compareTo(high, low) === 0) ? (close - low - (high - close)) / (high - low) : 1.0;
  }
  function CloseLocationValueFunction(low, close, high) {
    AbstractCachingFunction.call(this);
    this.nj_1 = low;
    this.oj_1 = close;
    this.pj_1 = high;
  }
  protoOf(CloseLocationValueFunction).va = function () {
    return listOf([this.nj_1, this.oj_1, this.pj_1]);
  };
  protoOf(CloseLocationValueFunction).cj = function (index) {
    var l = this.nj_1.calculateAt(index);
    var h = this.pj_1.calculateAt(index);
    var c = this.oj_1.calculateAt(index);
    return getCloseLocationValue(this, l, c, h);
  };
  defineProp(protoOf(CloseLocationValueFunction), 'childFunctions', function () {
    return this.va();
  });
  defineProp(protoOf(CloseLocationValueFunction), 'ownPastOffset', function () {
    return this.wa();
  });
  defineProp(protoOf(CloseLocationValueFunction), 'prefetchSize', function () {
    return this.xa();
  });
  function CombineFunction(tradeDataHolder, xFunction, yFunction, predicate) {
    this.qj_1 = tradeDataHolder;
    this.rj_1 = xFunction;
    this.sj_1 = yFunction;
    this.tj_1 = predicate;
  }
  protoOf(CombineFunction).va = function () {
    return listOf([this.rj_1, this.sj_1]);
  };
  protoOf(CombineFunction).wa = function () {
    return 0;
  };
  protoOf(CombineFunction).xa = function () {
    return 0;
  };
  protoOf(CombineFunction).calculateAt = function (index) {
    return this.tj_1(this.rj_1.calculateAt(index), this.sj_1.calculateAt(index));
  };
  protoOf(CombineFunction).d8 = function (changes) {
    var tmp$ret$0;
    // Inline function 'kotlin.comparisons.maxOf' call
    var tmp0_maxOf = this.qj_1.a8() - 1 | 0;
    tmp$ret$0 = Math.max(0, tmp0_maxOf);
    return tmp$ret$0;
  };
  protoOf(CombineFunction).dataChanged = function (changes) {
    return this.d8(changes);
  };
  defineProp(protoOf(CombineFunction), 'childFunctions', function () {
    return this.va();
  });
  defineProp(protoOf(CombineFunction), 'ownPastOffset', function () {
    return this.wa();
  });
  defineProp(protoOf(CombineFunction), 'prefetchSize', function () {
    return this.xa();
  });
  function createMidpointFunction($this, data) {
    return new ArithmeticFunction(new PriceSourceFunction(data, PriceFieldEnum_LOW_getInstance()), new PriceSourceFunction(data, PriceFieldEnum_HIGH_getInstance()), ArithmeticOperation_MIDPOINT_getInstance());
  }
  function CommonFunctions() {
    CommonFunctions_instance = this;
    this.kc_1 = new ConstantFunction(-1.0);
    this.lc_1 = new ConstantFunction(1.0);
    this.mc_1 = new ConstantFunction(50.0);
    this.nc_1 = new ConstantFunction(100.0);
  }
  protoOf(CommonFunctions).yc = function (data) {
    var low = new PriceSourceFunction(data, PriceFieldEnum_LOW_getInstance());
    var close = new PriceSourceFunction(data, PriceFieldEnum_CLOSE_getInstance());
    var high = new PriceSourceFunction(data, PriceFieldEnum_HIGH_getInstance());
    return new TrueRangeFunction(low, close, high);
  };
  protoOf(CommonFunctions).je = function (data, dperiod, overbought, oversold, kperiod, slowing, averageTypeEnum) {
    var k = this.yf(averageTypeEnum, this.uj(data, kperiod), slowing, kperiod);
    var kd = this.yf(averageTypeEnum, this.uj(data, kperiod), slowing, kperiod);
    var d = this.yf(averageTypeEnum, kd, dperiod, slowing + kperiod | 0);
    var overboughtF = new ConstantFunction(overbought);
    var oversoldF = new ConstantFunction(oversold);
    return listOf([k, d, overboughtF, oversoldF]);
  };
  protoOf(CommonFunctions).uj = function (data, length) {
    var loPrice = new PriceSourceFunction(data, PriceFieldEnum_LOW_getInstance());
    var hiPrice = new PriceSourceFunction(data, PriceFieldEnum_HIGH_getInstance());
    var priceSource = new PriceSourceFunction(data, PriceFieldEnum_CLOSE_getInstance());
    var value1 = new LowestFunction(loPrice, length);
    var hiFunc = new HighestFunction(hiPrice, length);
    var value2 = new ArithmeticFunction(hiFunc, value1, ArithmeticOperation_MINUS_getInstance());
    return this.gh(priceSource, value1, value2);
  };
  protoOf(CommonFunctions).gh = function (price, value1, value2) {
    var nom = new ArithmeticFunction(price, value1, ArithmeticOperation_MINUS_getInstance());
    var div = new ArithmeticFunction(nom, value2, ArithmeticOperation_DIV_ZERO_getInstance());
    return new ArithmeticFunction(div, this.nc_1, ArithmeticOperation_MULT_getInstance());
  };
  protoOf(CommonFunctions).qc = function (data) {
    var avgShort = new MovingAverageSimple(createMidpointFunction(this, data), 5);
    var avgLong = new MovingAverageSimple(createMidpointFunction(this, data), 34);
    return new ArithmeticFunction(avgShort, avgLong, ArithmeticOperation_MINUS_getInstance());
  };
  protoOf(CommonFunctions).rc = function (data) {
    var clv = new CloseLocationValueFunction(new PriceSourceFunction(data, PriceFieldEnum_LOW_getInstance()), new PriceSourceFunction(data, PriceFieldEnum_CLOSE_getInstance()), new PriceSourceFunction(data, PriceFieldEnum_HIGH_getInstance()));
    return new CumulativeSumFunction(new ArithmeticFunction(new PriceSourceFunction(data, PriceFieldEnum_VOLUME_getInstance()), clv, ArithmeticOperation_MULT_getInstance()));
  };
  protoOf(CommonFunctions).id = function (data) {
    var highPrice = new PriceSourceFunction(data, PriceFieldEnum_HIGH_getInstance());
    var lowPrice = new PriceSourceFunction(data, PriceFieldEnum_LOW_getInstance());
    return new ArithmeticFunction(highPrice, lowPrice, ArithmeticOperation_MINUS_getInstance());
  };
  protoOf(CommonFunctions).ed = function (data) {
    var lowPrice = new PriceSourceFunction(data, PriceFieldEnum_LOW_getInstance());
    var closePrice = new PriceSourceFunction(data, PriceFieldEnum_CLOSE_getInstance());
    var highPrice = new PriceSourceFunction(data, PriceFieldEnum_HIGH_getInstance());
    var sumlLowClose = new ArithmeticFunction(lowPrice, closePrice, ArithmeticOperation_PLUS_getInstance());
    return new ArithmeticFunction(sumlLowClose, highPrice, ArithmeticOperation_PLUS_getInstance());
  };
  protoOf(CommonFunctions).ah = function (data) {
    var openPrice = new PriceSourceFunction(data, PriceFieldEnum_OPEN_getInstance());
    var highPrice = new PriceSourceFunction(data, PriceFieldEnum_HIGH_getInstance());
    var lowPrice = new PriceSourceFunction(data, PriceFieldEnum_LOW_getInstance());
    var closePrice = new PriceSourceFunction(data, PriceFieldEnum_CLOSE_getInstance());
    return new ArithmeticFunction(new ArithmeticFunction(closePrice, openPrice, ArithmeticOperation_MINUS_getInstance()), new ArithmeticFunction(highPrice, lowPrice, ArithmeticOperation_MINUS_getInstance()), ArithmeticOperation_DIV_ZERO_getInstance());
  };
  protoOf(CommonFunctions).fh = function (data, length) {
    return new MovingAverageSimple(this.yc(data), length);
  };
  protoOf(CommonFunctions).nd = function (data, length, isPlus, averageType) {
    var priceLow = new PriceSourceFunction(data, PriceFieldEnum_LOW_getInstance());
    var lowDiff = new ArithmeticFunction(new DiffPrevFunction(priceLow), this.kc_1, ArithmeticOperation_MULT_getInstance());
    var priceHigh = new PriceSourceFunction(data, PriceFieldEnum_HIGH_getInstance());
    var hiDiff = new DiffPrevFunction(priceHigh);
    var dm = isPlus ? new DirectionalMovementFunction(hiDiff, lowDiff) : new DirectionalMovementFunction(lowDiff, hiDiff);
    var atr = this.yf(averageType, this.yc(data), length, length);
    return new ArithmeticFunction(new ArithmeticFunction(this.yf(averageType, dm, length, length), this.nc_1, ArithmeticOperation_MULT_getInstance()), atr, ArithmeticOperation_DIV_ZERO_getInstance());
  };
  protoOf(CommonFunctions).oc = function (data, length, averageType) {
    var dx = new DirectionalIndexFunction(this.nd(data, length, true, averageType), this.nd(data, length, false, averageType));
    var adx = this.yf(averageType, dx, length, imul(2, length));
    return WindowFunction_init_$Create$(adx, 0, true);
  };
  protoOf(CommonFunctions).zg = function (priceSourceFunction, length, averageType) {
    var net = this.yf(averageType, new DiffPrevFunction(priceSourceFunction), length, length);
    var tot = this.yf(averageType, new AbsFunction(new DiffPrevFunction(priceSourceFunction)), length, length);
    var chgRatio = new ArithmeticFunction(net, tot, ArithmeticOperation_DIV_ZERO_getInstance());
    return WindowFunction_init_$Create$(new ArithmeticFunction(this.mc_1, new ArithmeticFunction(chgRatio, this.lc_1, ArithmeticOperation_PLUS_getInstance()), ArithmeticOperation_MULT_getInstance()), 0, true);
  };
  protoOf(CommonFunctions).yf = function (averageType, source, length, offset) {
    var result;
    var tmp0_subject = averageType;
    var tmp0 = tmp0_subject.s6_1;
    switch (tmp0) {
      case 0:
        result = new MovingAverageSimple(source, length);
        break;
      case 1:
        result = new WildersAverage(source, length);
        break;
      case 2:
        result = new MovingAverageWeighted(source, length);
        break;
      case 3:
        result = offset == null ? new MovingAverageExponential(source, length) : new MovingAverageExponential(source, length, offset);
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return result;
  };
  protoOf(CommonFunctions).zc = function (averageType, source, length, offset, $super) {
    offset = offset === VOID ? null : offset;
    return $super === VOID ? this.yf(averageType, source, length, offset) : $super.yf.call(this, averageType, source, length, offset);
  };
  var CommonFunctions_instance;
  function CommonFunctions_getInstance() {
    if (CommonFunctions_instance == null)
      new CommonFunctions();
    return CommonFunctions_instance;
  }
  function ConstantFunction(value) {
    this.vj_1 = value;
  }
  protoOf(ConstantFunction).calculateAt = function (index) {
    return this.vj_1;
  };
  protoOf(ConstantFunction).wa = function () {
    return 0;
  };
  protoOf(ConstantFunction).xa = function () {
    return 0;
  };
  protoOf(ConstantFunction).va = function () {
    return emptyList();
  };
  protoOf(ConstantFunction).d8 = function (changes) {
    return changes.qa_1;
  };
  protoOf(ConstantFunction).dataChanged = function (changes) {
    return this.d8(changes);
  };
  defineProp(protoOf(ConstantFunction), 'ownPastOffset', function () {
    return this.wa();
  });
  defineProp(protoOf(ConstantFunction), 'prefetchSize', function () {
    return this.xa();
  });
  defineProp(protoOf(ConstantFunction), 'childFunctions', function () {
    return this.va();
  });
  function CumulativeSumFunction(src) {
    AbstractCachingFunction.call(this);
    this.xj_1 = src;
  }
  protoOf(CumulativeSumFunction).va = function () {
    return listOf_0(this.xj_1);
  };
  protoOf(CumulativeSumFunction).cj = function (index) {
    var v = this.xj_1.calculateAt(index);
    if (isNaN_0(v)) {
      v = 0.0;
    }
    if (index === 0) {
      return v;
    }
    return this.calculateAt(index - 1 | 0) + v;
  };
  defineProp(protoOf(CumulativeSumFunction), 'childFunctions', function () {
    return this.va();
  });
  defineProp(protoOf(CumulativeSumFunction), 'ownPastOffset', function () {
    return this.wa();
  });
  defineProp(protoOf(CumulativeSumFunction), 'prefetchSize', function () {
    return this.xa();
  });
  function getFirstItemInTradingSessionIndex($this, index) {
    var item = $this.zj_1.getTradeItem(index);
    if (!(item == null)) {
      var session = getSessionForTimestamp($this, item.getTime());
      if (!(session == null)) {
        if (index === 0) {
          return index;
        }
        var prevItem = $this.zj_1.getTradeItem(index - 1 | 0);
        if (!(prevItem == null) ? prevItem.getTime() >= session.getFrom() : false) {
          return getFirstItemInTradingSessionIndex($this, index - 1 | 0);
        }
        return index;
      }
    }
    return -1;
  }
  function getSessionForTimestamp($this, timestamp) {
    var tmp = $this.zj_1.c9();
    var index = binarySearch_0(tmp, VOID, VOID, CumulativeSumWithinSessionFunction$getSessionForTimestamp$lambda($this, timestamp));
    if (index >= 0) {
      return $this.zj_1.c9().g(index);
    }
    return null;
  }
  function timestampInSessionCompare($this, timestamp, session) {
    if (session.getFrom() <= timestamp ? timestamp < session.getTo() : false) {
      return 0;
    }
    if (timestamp < session.getFrom()) {
      return 1;
    }
    return -1;
  }
  function CumulativeSumWithinSessionFunction$getSessionForTimestamp$lambda(this$0, $timestamp) {
    return function (session) {
      return timestampInSessionCompare(this$0, $timestamp, session);
    };
  }
  function CumulativeSumWithinSessionFunction(data, src) {
    AbstractCachingFunction.call(this);
    this.zj_1 = data;
    this.ak_1 = src;
  }
  protoOf(CumulativeSumWithinSessionFunction).va = function () {
    return listOf_0(this.ak_1);
  };
  protoOf(CumulativeSumWithinSessionFunction).cj = function (index) {
    var v = this.ak_1.calculateAt(index);
    if (isNaN_0(v)) {
      v = 0.0;
    }
    var firstItemIndex = getFirstItemInTradingSessionIndex(this, index);
    if (firstItemIndex === -1) {
      DoubleCompanionObject_getInstance();
      return NaN;
    }
    if (firstItemIndex === index) {
      return v;
    }
    return this.calculateAt(index - 1 | 0) + v;
  };
  defineProp(protoOf(CumulativeSumWithinSessionFunction), 'childFunctions', function () {
    return this.va();
  });
  defineProp(protoOf(CumulativeSumWithinSessionFunction), 'ownPastOffset', function () {
    return this.wa();
  });
  defineProp(protoOf(CumulativeSumWithinSessionFunction), 'prefetchSize', function () {
    return this.xa();
  });
  function DiffDivPrevFunction(srcFunc) {
    AbstractCachingFunction.call(this);
    this.ck_1 = srcFunc;
  }
  protoOf(DiffDivPrevFunction).wa = function () {
    return 1;
  };
  protoOf(DiffDivPrevFunction).va = function () {
    return listOf_0(this.ck_1);
  };
  protoOf(DiffDivPrevFunction).cj = function (index) {
    if (index === 0) {
      DoubleCompanionObject_getInstance();
      return NaN;
    }
    var last = this.ck_1.calculateAt(index);
    var prev = this.ck_1.calculateAt(index - 1 | 0);
    if (isNaN_0(prev)) {
      prev = 0.0;
    }
    return !(compareTo(prev, 0.0) === 0) ? (last - prev) / prev : 0.0;
  };
  defineProp(protoOf(DiffDivPrevFunction), 'ownPastOffset', function () {
    return this.wa();
  });
  defineProp(protoOf(DiffDivPrevFunction), 'childFunctions', function () {
    return this.va();
  });
  defineProp(protoOf(DiffDivPrevFunction), 'prefetchSize', function () {
    return this.xa();
  });
  function DiffPrevFunction(srcFunc, distance) {
    distance = distance === VOID ? 1 : distance;
    AbstractCachingFunction.call(this);
    this.ek_1 = srcFunc;
    this.fk_1 = distance;
  }
  protoOf(DiffPrevFunction).va = function () {
    return listOf_0(this.ek_1);
  };
  protoOf(DiffPrevFunction).wa = function () {
    return 1;
  };
  protoOf(DiffPrevFunction).cj = function (index) {
    if ((index - this.fk_1 | 0) < 0) {
      DoubleCompanionObject_getInstance();
      return NaN;
    }
    var last = this.ek_1.calculateAt(index);
    var prev = this.ek_1.calculateAt(index - this.fk_1 | 0);
    return last - prev;
  };
  defineProp(protoOf(DiffPrevFunction), 'childFunctions', function () {
    return this.va();
  });
  defineProp(protoOf(DiffPrevFunction), 'ownPastOffset', function () {
    return this.wa();
  });
  defineProp(protoOf(DiffPrevFunction), 'prefetchSize', function () {
    return this.xa();
  });
  function diValue($this, dip, dim) {
    if (isNaN_0(dim) ? true : isNaN_0(dip)) {
      DoubleCompanionObject_getInstance();
      return NaN;
    }
    if (dip + dim > 0.0) {
      var tmp$ret$0;
      // Inline function 'kotlin.math.abs' call
      var tmp0_abs = dip - dim;
      tmp$ret$0 = Math.abs(tmp0_abs);
      return 100 * tmp$ret$0 / (dip + dim);
    } else
      return 0.0;
  }
  function DirectionalIndexFunction(diPlus, diMinus) {
    AbstractCachingFunction.call(this);
    this.hk_1 = diPlus;
    this.ik_1 = diMinus;
  }
  protoOf(DirectionalIndexFunction).va = function () {
    return listOf([this.hk_1, this.ik_1]);
  };
  protoOf(DirectionalIndexFunction).cj = function (index) {
    return diValue(this, this.hk_1.calculateAt(index), this.ik_1.calculateAt(index));
  };
  defineProp(protoOf(DirectionalIndexFunction), 'childFunctions', function () {
    return this.va();
  });
  defineProp(protoOf(DirectionalIndexFunction), 'ownPastOffset', function () {
    return this.wa();
  });
  defineProp(protoOf(DirectionalIndexFunction), 'prefetchSize', function () {
    return this.xa();
  });
  function dmValue($this, md, ad) {
    var tmp;
    if (isNaN_0(md) ? true : isNaN_0(ad)) {
      DoubleCompanionObject_getInstance();
      tmp = NaN;
    } else if (md > ad ? md > 0.0 : false) {
      tmp = md;
    } else {
      tmp = 0.0;
    }
    return tmp;
  }
  function DirectionalMovementFunction(mainDiff, auxDiff) {
    AbstractCachingFunction.call(this);
    this.kk_1 = mainDiff;
    this.lk_1 = auxDiff;
  }
  protoOf(DirectionalMovementFunction).va = function () {
    return listOf([this.kk_1, this.lk_1]);
  };
  protoOf(DirectionalMovementFunction).cj = function (index) {
    return dmValue(this, this.kk_1.calculateAt(index), this.lk_1.calculateAt(index));
  };
  defineProp(protoOf(DirectionalMovementFunction), 'childFunctions', function () {
    return this.va();
  });
  defineProp(protoOf(DirectionalMovementFunction), 'ownPastOffset', function () {
    return this.wa();
  });
  defineProp(protoOf(DirectionalMovementFunction), 'prefetchSize', function () {
    return this.xa();
  });
  function DisplacementFunction(srcFunc, displacement) {
    this.mk_1 = srcFunc;
    this.nk_1 = displacement;
    this.ok_1 = 0;
  }
  protoOf(DisplacementFunction).va = function () {
    return this.mk_1.childFunctions;
  };
  protoOf(DisplacementFunction).calculateAt = function (index) {
    if ((index + this.nk_1 | 0) < 0 ? true : (index + this.nk_1 | 0) >= this.ok_1) {
      DoubleCompanionObject_getInstance();
      return NaN;
    }
    return this.mk_1.calculateAt(index + this.nk_1 | 0);
  };
  protoOf(DisplacementFunction).wa = function () {
    return this.mk_1.ownPastOffset - this.nk_1 | 0;
  };
  protoOf(DisplacementFunction).xa = function () {
    return this.mk_1.prefetchSize;
  };
  protoOf(DisplacementFunction).d8 = function (changes) {
    this.ok_1 = changes.ra_1;
    var tmp$ret$0;
    // Inline function 'kotlin.comparisons.maxOf' call
    var tmp0_maxOf = this.mk_1.dataChanged(changes);
    tmp$ret$0 = Math.max(0, tmp0_maxOf);
    return tmp$ret$0;
  };
  protoOf(DisplacementFunction).dataChanged = function (changes) {
    return this.d8(changes);
  };
  defineProp(protoOf(DisplacementFunction), 'childFunctions', function () {
    return this.va();
  });
  defineProp(protoOf(DisplacementFunction), 'ownPastOffset', function () {
    return this.wa();
  });
  defineProp(protoOf(DisplacementFunction), 'prefetchSize', function () {
    return this.xa();
  });
  var Trend_UP_instance;
  var Trend_DOWN_instance;
  var Trend_entriesInitialized;
  function Trend_initEntries() {
    if (Trend_entriesInitialized)
      return Unit_getInstance();
    Trend_entriesInitialized = true;
    Trend_UP_instance = new Trend('UP', 0);
    Trend_DOWN_instance = new Trend('DOWN', 1);
  }
  function Companion_59() {
    Companion_instance_59 = this;
    this.pk_1 = 10;
  }
  var Companion_instance_59;
  function Companion_getInstance_59() {
    if (Companion_instance_59 == null)
      new Companion_59();
    return Companion_instance_59;
  }
  function Trend(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Trend_UP_getInstance() {
    Trend_initEntries();
    return Trend_UP_instance;
  }
  function Trend_DOWN_getInstance() {
    Trend_initEntries();
    return Trend_DOWN_instance;
  }
  function DorseyTrendFunction(price, stdDeviation, trend) {
    Companion_getInstance_59();
    AbstractCachingFunction.call(this);
    this.rk_1 = price;
    this.sk_1 = stdDeviation;
    this.tk_1 = trend;
  }
  protoOf(DorseyTrendFunction).va = function () {
    return listOf([this.rk_1, this.sk_1]);
  };
  protoOf(DorseyTrendFunction).cj = function (index) {
    if (index < 1) {
      DoubleCompanionObject_getInstance();
      return NaN;
    }
    var atIndex = this.rk_1.calculateAt(index);
    var atPrevious = this.rk_1.calculateAt(index - 1 | 0);
    if (isNaN_0(atIndex) ? true : isNaN_0(atPrevious)) {
      DoubleCompanionObject_getInstance();
      return NaN;
    }
    if ((this.tk_1.equals(Trend_UP_getInstance()) ? atIndex > atPrevious : false) ? true : this.tk_1.equals(Trend_DOWN_getInstance()) ? atIndex < atPrevious : false) {
      return this.sk_1.calculateAt(index);
    }
    return 0.0;
  };
  defineProp(protoOf(DorseyTrendFunction), 'childFunctions', function () {
    return this.va();
  });
  defineProp(protoOf(DorseyTrendFunction), 'ownPastOffset', function () {
    return this.wa();
  });
  defineProp(protoOf(DorseyTrendFunction), 'prefetchSize', function () {
    return this.xa();
  });
  function calculate($this, index) {
    var di = $this.uk_1.getTradeItem(index);
    var tmp;
    if (!(di == null)) {
      var tmp0_subject = $this.wk_1;
      var tmp0 = tmp0_subject.s6_1;
      var tmp_0;
      switch (tmp0) {
        case 2:
          tmp_0 = getPrice($this, getLastETH($this));
          break;
        case 0:
          tmp_0 = getPrice($this, getSessionForTimestamp_0($this, di.getTime(), true));
          break;
        case 1:
          var lastETH = getLastETH($this);
          if (!(lastETH == null) ? timestampInSessionCompare_0($this, di.getTime(), lastETH) === 0 : false) {
            return getPrice($this, lastETH);
          }

          DoubleCompanionObject_getInstance();
          return NaN;
        default:
          noWhenBranchMatchedException();
          break;
      }
      tmp = tmp_0;
    } else {
      DoubleCompanionObject_getInstance();
      return NaN;
    }
    return tmp;
  }
  function getLastETH($this) {
    var currentTime = epochMillis();
    var lastETH;
    var tmp;
    if (!isCachedZoneValid($this, currentTime)) {
      tmp = getLastETHSession($this, currentTime);
    } else {
      tmp = $this.uk_1.d9().g($this.xk_1);
    }
    lastETH = tmp;
    return lastETH;
  }
  function getLastETHSession($this, currentTime) {
    if ($this.uk_1.d9().h()) {
      return null;
    }
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.indexOfFirst' call
      var tmp0_indexOfFirst = $this.uk_1.d9();
      var index = 0;
      var tmp0_iterator = tmp0_indexOfFirst.c();
      while (tmp0_iterator.d()) {
        var item = tmp0_iterator.e();
        var tmp$ret$0;
        // Inline function 'com.devexperts.dxst.functions.ETHPriceSourceFunction.getLastETHSession.<anonymous>' call
        tmp$ret$0 = item.getFrom() >= currentTime.a7();
        if (tmp$ret$0) {
          tmp$ret$1 = index;
          break $l$block;
        }
        var tmp1 = index;
        index = tmp1 + 1 | 0;
      }
      tmp$ret$1 = -1;
    }
    var indexOfFutureSession = tmp$ret$1;
    $this.xk_1 = indexOfFutureSession - 1 | 0;
    return $this.uk_1.d9().g($this.xk_1);
  }
  function isCachedZoneValid($this, currentTime) {
    if ($this.xk_1 === -1) {
      return false;
    }
    var tradingSessionData = $this.uk_1.d9().g($this.xk_1);
    var nextZone = $this.uk_1.d9().g($this.xk_1 + 1 | 0);
    return (tradingSessionData.getTo() >= currentTime.a7() ? tradingSessionData.getFrom() >= currentTime.a7() : false) ? true : nextZone.getFrom() > $this.xk_1;
  }
  function getPrice($this, session) {
    var tmp0_subject = $this.vk_1;
    var tmp0 = tmp0_subject.s6_1;
    var tmp;
    switch (tmp0) {
      case 1:
        var tmp1_safe_receiver = session;
        var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.getHigh();
        var tmp_0;
        if (tmp2_elvis_lhs == null) {
          DoubleCompanionObject_getInstance();
          tmp_0 = NaN;
        } else {
          tmp_0 = tmp2_elvis_lhs;
        }

        tmp = tmp_0;
        break;
      case 2:
        var tmp3_safe_receiver = session;
        var tmp4_elvis_lhs = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.getLow();
        var tmp_1;
        if (tmp4_elvis_lhs == null) {
          DoubleCompanionObject_getInstance();
          tmp_1 = NaN;
        } else {
          tmp_1 = tmp4_elvis_lhs;
        }

        tmp = tmp_1;
        break;
      default:
        DoubleCompanionObject_getInstance();
        tmp = NaN;
        break;
    }
    return tmp;
  }
  function getSessionForTimestamp_0($this, timestamp, excludeLast) {
    var tmp = $this.uk_1.d9();
    var index = binarySearch_0(tmp, VOID, VOID, ETHPriceSourceFunction$getSessionForTimestamp$lambda($this, timestamp));
    if (index >= 0) {
      var tradingSessionData = $this.uk_1.d9().g(index);
      if (excludeLast) {
        var lastETHSession = getLastETH($this);
        if (!(lastETHSession == null) ? timestampInSessionCompare_0($this, timestamp, lastETHSession) === 0 : false) {
          return null;
        }
      }
      return tradingSessionData;
    }
    return null;
  }
  function timestampInSessionCompare_0($this, timestamp, session) {
    if (session.getFrom() <= timestamp ? timestamp < session.getTo() : false) {
      return 0;
    }
    if (timestamp < session.getFrom()) {
      return 1;
    }
    return -1;
  }
  function ETHPriceSourceFunction$getSessionForTimestamp$lambda(this$0, $timestamp) {
    return function (session) {
      return timestampInSessionCompare_0(this$0, $timestamp, session);
    };
  }
  function ETHPriceSourceFunction(dataItems, priceField, sessionSet, lastETHIndex) {
    lastETHIndex = lastETHIndex === VOID ? -1 : lastETHIndex;
    this.uk_1 = dataItems;
    this.vk_1 = priceField;
    this.wk_1 = sessionSet;
    this.xk_1 = lastETHIndex;
  }
  protoOf(ETHPriceSourceFunction).va = function () {
    return emptyList();
  };
  protoOf(ETHPriceSourceFunction).calculateAt = function (index) {
    return calculate(this, index);
  };
  protoOf(ETHPriceSourceFunction).wa = function () {
    return 0;
  };
  protoOf(ETHPriceSourceFunction).xa = function () {
    return 0;
  };
  protoOf(ETHPriceSourceFunction).d8 = function (changes) {
    var tmp$ret$0;
    // Inline function 'kotlin.comparisons.maxOf' call
    var tmp0_maxOf = this.uk_1.a8() - 1 | 0;
    tmp$ret$0 = Math.max(0, tmp0_maxOf);
    return tmp$ret$0;
  };
  protoOf(ETHPriceSourceFunction).dataChanged = function (changes) {
    return this.d8(changes);
  };
  defineProp(protoOf(ETHPriceSourceFunction), 'childFunctions', function () {
    return this.va();
  });
  defineProp(protoOf(ETHPriceSourceFunction), 'ownPastOffset', function () {
    return this.wa();
  });
  defineProp(protoOf(ETHPriceSourceFunction), 'prefetchSize', function () {
    return this.xa();
  });
  function Equals(source, equalsTo, ifEqualsResult, ifNotEqualsResult) {
    AbstractCachingFunction.call(this);
    this.zk_1 = source;
    this.al_1 = equalsTo;
    this.bl_1 = ifEqualsResult;
    this.cl_1 = ifNotEqualsResult;
  }
  protoOf(Equals).va = function () {
    return listOf([this.zk_1, this.al_1, this.bl_1, this.cl_1]);
  };
  protoOf(Equals).cj = function (index) {
    var equalsToValue = this.al_1.calculateAt(index);
    var sourceValue = this.zk_1.calculateAt(index);
    return compareTo(equalsToValue, sourceValue) === 0 ? this.bl_1.calculateAt(index) : this.cl_1.calculateAt(index);
  };
  defineProp(protoOf(Equals), 'childFunctions', function () {
    return this.va();
  });
  defineProp(protoOf(Equals), 'ownPastOffset', function () {
    return this.wa();
  });
  defineProp(protoOf(Equals), 'prefetchSize', function () {
    return this.xa();
  });
  function Floor(source) {
    AbstractCachingFunction.call(this);
    this.el_1 = source;
  }
  protoOf(Floor).va = function () {
    return setOf(this.el_1);
  };
  protoOf(Floor).cj = function (index) {
    var tmp$ret$0;
    // Inline function 'kotlin.math.floor' call
    var tmp0_floor = this.el_1.calculateAt(index);
    tmp$ret$0 = Math.floor(tmp0_floor);
    return tmp$ret$0;
  };
  defineProp(protoOf(Floor), 'childFunctions', function () {
    return this.va();
  });
  defineProp(protoOf(Floor), 'ownPastOffset', function () {
    return this.wa();
  });
  defineProp(protoOf(Floor), 'prefetchSize', function () {
    return this.xa();
  });
  function HighestAllFunction(srcFunc) {
    HighestFunction.call(this, srcFunc, 1);
    var tmp = this;
    DoubleCompanionObject_getInstance();
    tmp.kl_1 = NaN;
  }
  protoOf(HighestAllFunction).wa = function () {
    return 0;
  };
  protoOf(HighestAllFunction).ej = function (changes) {
    this.ql(changes.ra_1);
    var tmp = this;
    DoubleCompanionObject_getInstance();
    tmp.kl_1 = NaN;
    return 0;
  };
  protoOf(HighestAllFunction).cj = function (index) {
    if (isNaN_0(this.kl_1)) {
      this.kl_1 = protoOf(HighestFunction).cj.call(this, this.ol_1 - 1 | 0);
    }
    return this.kl_1;
  };
  defineProp(protoOf(HighestAllFunction), 'ownPastOffset', function () {
    return this.wa();
  });
  defineProp(protoOf(HighestAllFunction), 'childFunctions', function () {
    return this.va();
  });
  defineProp(protoOf(HighestAllFunction), 'prefetchSize', function () {
    return this.xa();
  });
  function HighestFunction(srcFunc, period) {
    BackRangeDependentFunction.call(this, srcFunc, period);
  }
  protoOf(HighestFunction).wl = function (srcLatestValues) {
    var max = srcLatestValues[0];
    var inductionVariable = 1;
    var last = this.ol_1 - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (srcLatestValues[i] > max)
          max = srcLatestValues[i];
      }
       while (!(i === last));
    return max;
  };
  defineProp(protoOf(HighestFunction), 'childFunctions', function () {
    return this.va();
  });
  defineProp(protoOf(HighestFunction), 'ownPastOffset', function () {
    return this.wa();
  });
  defineProp(protoOf(HighestFunction), 'prefetchSize', function () {
    return this.xa();
  });
  function HighestHighPeriod(srcFunc, length) {
    BackRangeDependentFunction.call(this, srcFunc, length);
  }
  protoOf(HighestHighPeriod).wl = function (srcLatestValues) {
    var priceSourceLength = srcLatestValues.length;
    var hhPosition = 0;
    var hh = srcLatestValues[0];
    var inductionVariable = 0;
    if (inductionVariable < priceSourceLength)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var currentValue = srcLatestValues[i];
        if (currentValue >= hh) {
          hh = currentValue;
          hhPosition = i;
        }
      }
       while (inductionVariable < priceSourceLength);
    return priceSourceLength - (hhPosition + 1 | 0) | 0;
  };
  defineProp(protoOf(HighestHighPeriod), 'childFunctions', function () {
    return this.va();
  });
  defineProp(protoOf(HighestHighPeriod), 'ownPastOffset', function () {
    return this.wa();
  });
  defineProp(protoOf(HighestHighPeriod), 'prefetchSize', function () {
    return this.xa();
  });
  function IfFunction(predicate, predicateFn, yesFn, noFn) {
    AbstractCachingFunction.call(this);
    this.dm_1 = predicate;
    this.em_1 = predicateFn;
    this.fm_1 = yesFn;
    this.gm_1 = noFn;
  }
  protoOf(IfFunction).va = function () {
    return listOf([this.em_1, this.fm_1, this.gm_1]);
  };
  protoOf(IfFunction).wa = function () {
    return 1;
  };
  protoOf(IfFunction).cj = function (index) {
    if (this.dm_1(this.em_1.calculateAt(index))) {
      return this.fm_1.calculateAt(index);
    } else {
      return this.gm_1.calculateAt(index);
    }
  };
  defineProp(protoOf(IfFunction), 'childFunctions', function () {
    return this.va();
  });
  defineProp(protoOf(IfFunction), 'ownPastOffset', function () {
    return this.wa();
  });
  defineProp(protoOf(IfFunction), 'prefetchSize', function () {
    return this.xa();
  });
  function IntradaySumFunction(srcFunc, length) {
    BackRangeDependentFunction.call(this, srcFunc, length, true);
  }
  protoOf(IntradaySumFunction).wl = function (srcLatestValues) {
    var ret = 0.0;
    var indexedObject = srcLatestValues;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var value = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (!isNaN_0(value) ? value > 0.0 : false) {
        ret = ret + value;
      }
    }
    return ret;
  };
  defineProp(protoOf(IntradaySumFunction), 'childFunctions', function () {
    return this.va();
  });
  defineProp(protoOf(IntradaySumFunction), 'ownPastOffset', function () {
    return this.wa();
  });
  defineProp(protoOf(IntradaySumFunction), 'prefetchSize', function () {
    return this.xa();
  });
  function LimitFunction(tradeDataHolder, srcFunction, limit) {
    this.mm_1 = tradeDataHolder;
    this.nm_1 = srcFunction;
    this.om_1 = limit;
  }
  protoOf(LimitFunction).va = function () {
    return listOf_0(this.nm_1);
  };
  protoOf(LimitFunction).wa = function () {
    return 0;
  };
  protoOf(LimitFunction).xa = function () {
    return 0;
  };
  protoOf(LimitFunction).calculateAt = function (index) {
    var tmp;
    if ((this.mm_1.a8() - index | 0) > this.om_1) {
      DoubleCompanionObject_getInstance();
      tmp = NaN;
    } else {
      tmp = this.nm_1.calculateAt(index);
    }
    return tmp;
  };
  protoOf(LimitFunction).d8 = function (changes) {
    var tmp$ret$0;
    // Inline function 'kotlin.comparisons.maxOf' call
    var tmp0_maxOf = this.mm_1.a8() - 1 | 0;
    tmp$ret$0 = Math.max(0, tmp0_maxOf);
    return tmp$ret$0;
  };
  protoOf(LimitFunction).dataChanged = function (changes) {
    return this.d8(changes);
  };
  defineProp(protoOf(LimitFunction), 'childFunctions', function () {
    return this.va();
  });
  defineProp(protoOf(LimitFunction), 'ownPastOffset', function () {
    return this.wa();
  });
  defineProp(protoOf(LimitFunction), 'prefetchSize', function () {
    return this.xa();
  });
  function LinearDeviationFunction(srcFunc, period) {
    BackRangeDependentFunction.call(this, srcFunc, period);
  }
  protoOf(LinearDeviationFunction).wl = function (srcLatestValues) {
    var i;
    var length = this.ol_1;
    var sum = srcLatestValues[0];
    i = 1;
    while (i < length) {
      sum = sum + srcLatestValues[i];
      var tmp0 = i;
      i = tmp0 + 1 | 0;
    }
    var avg = sum / length;
    var tmp$ret$0;
    // Inline function 'kotlin.math.abs' call
    var tmp0_abs = srcLatestValues[0] - avg;
    tmp$ret$0 = Math.abs(tmp0_abs);
    var sumDiff = tmp$ret$0;
    i = 1;
    while (i < length) {
      var tmp = sumDiff;
      var tmp$ret$1;
      // Inline function 'kotlin.math.abs' call
      var tmp1_abs = srcLatestValues[i] - avg;
      tmp$ret$1 = Math.abs(tmp1_abs);
      sumDiff = tmp + tmp$ret$1;
      var tmp1 = i;
      i = tmp1 + 1 | 0;
    }
    return sumDiff / length;
  };
  defineProp(protoOf(LinearDeviationFunction), 'childFunctions', function () {
    return this.va();
  });
  defineProp(protoOf(LinearDeviationFunction), 'ownPastOffset', function () {
    return this.wa();
  });
  defineProp(protoOf(LinearDeviationFunction), 'prefetchSize', function () {
    return this.xa();
  });
  function LinearRegressionCurveFunction(srcFunc, period) {
    BackRangeDependentFunction.call(this, srcFunc, period);
  }
  protoOf(LinearRegressionCurveFunction).wl = function (srcLatestValues) {
    var count = this.ol_1;
    if (count < 1) {
      DoubleCompanionObject_getInstance();
      return NaN;
    }
    if (count === 1)
      return srcLatestValues[0];
    var sumX = 0.0;
    var sumY = 0.0;
    var sumXX = 0.0;
    var sumXY = 0.0;
    var inductionVariable = 0;
    if (inductionVariable < count)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var index = i + 1 | 0;
        sumX = sumX + index;
        sumY = sumY + srcLatestValues[i];
        sumXX = sumXX + imul(index, index);
        sumXY = sumXY + index * srcLatestValues[i];
      }
       while (inductionVariable < count);
    var b = (count * sumXY - sumX * sumY) / (count * sumXX - sumX * sumX);
    var a = (sumY - b * sumX) / count;
    return b * count + a;
  };
  defineProp(protoOf(LinearRegressionCurveFunction), 'childFunctions', function () {
    return this.va();
  });
  defineProp(protoOf(LinearRegressionCurveFunction), 'ownPastOffset', function () {
    return this.wa();
  });
  defineProp(protoOf(LinearRegressionCurveFunction), 'prefetchSize', function () {
    return this.xa();
  });
  function LnDivPrevFunction(srcFunc) {
    AbstractCachingFunction.call(this);
    this.an_1 = srcFunc;
  }
  protoOf(LnDivPrevFunction).va = function () {
    return listOf_0(this.an_1);
  };
  protoOf(LnDivPrevFunction).wa = function () {
    return 1;
  };
  protoOf(LnDivPrevFunction).cj = function (index) {
    if (index === 0) {
      DoubleCompanionObject_getInstance();
      return NaN;
    }
    var last = this.an_1.calculateAt(index);
    var prev = this.an_1.calculateAt(index - 1 | 0);
    var tmp;
    if (!(compareTo(prev, 0.0) === 0)) {
      tmp = log(last / prev, get_E());
    } else {
      tmp = 0.0;
    }
    return tmp;
  };
  defineProp(protoOf(LnDivPrevFunction), 'childFunctions', function () {
    return this.va();
  });
  defineProp(protoOf(LnDivPrevFunction), 'ownPastOffset', function () {
    return this.wa();
  });
  defineProp(protoOf(LnDivPrevFunction), 'prefetchSize', function () {
    return this.xa();
  });
  function LogarithmFunction(src) {
    AbstractCachingFunction.call(this);
    this.cn_1 = src;
  }
  protoOf(LogarithmFunction).va = function () {
    return listOf_0(this.cn_1);
  };
  protoOf(LogarithmFunction).cj = function (index) {
    return log(this.cn_1.calculateAt(index), get_E());
  };
  defineProp(protoOf(LogarithmFunction), 'childFunctions', function () {
    return this.va();
  });
  defineProp(protoOf(LogarithmFunction), 'ownPastOffset', function () {
    return this.wa();
  });
  defineProp(protoOf(LogarithmFunction), 'prefetchSize', function () {
    return this.xa();
  });
  function LowestFunction(srcFunc, period) {
    BackRangeDependentFunction.call(this, srcFunc, period);
  }
  protoOf(LowestFunction).wl = function (srcLatestValues) {
    var min = srcLatestValues[0];
    var inductionVariable = 1;
    var last = this.ol_1 - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (srcLatestValues[i] < min)
          min = srcLatestValues[i];
      }
       while (!(i === last));
    return min;
  };
  defineProp(protoOf(LowestFunction), 'childFunctions', function () {
    return this.va();
  });
  defineProp(protoOf(LowestFunction), 'ownPastOffset', function () {
    return this.wa();
  });
  defineProp(protoOf(LowestFunction), 'prefetchSize', function () {
    return this.xa();
  });
  function LowestLowPeriod(srcFunc, length) {
    BackRangeDependentFunction.call(this, srcFunc, length);
  }
  protoOf(LowestLowPeriod).wl = function (srcLatestValues) {
    var priceSourceLength = srcLatestValues.length;
    var llPosition = 0;
    var ll = srcLatestValues[0];
    var inductionVariable = 0;
    var last = priceSourceLength - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var currentValue = srcLatestValues[i];
        if (currentValue <= ll) {
          ll = currentValue;
          llPosition = i;
        }
      }
       while (!(i === last));
    return priceSourceLength - (llPosition + 1 | 0) | 0;
  };
  defineProp(protoOf(LowestLowPeriod), 'childFunctions', function () {
    return this.va();
  });
  defineProp(protoOf(LowestLowPeriod), 'ownPastOffset', function () {
    return this.wa();
  });
  defineProp(protoOf(LowestLowPeriod), 'prefetchSize', function () {
    return this.xa();
  });
  function MapFunction(tradeDataHolder, src, mapFunction) {
    this.nn_1 = tradeDataHolder;
    this.on_1 = src;
    this.pn_1 = mapFunction;
  }
  protoOf(MapFunction).va = function () {
    return listOf_0(this.on_1);
  };
  protoOf(MapFunction).wa = function () {
    return 0;
  };
  protoOf(MapFunction).xa = function () {
    return 0;
  };
  protoOf(MapFunction).calculateAt = function (index) {
    return this.pn_1(this.on_1.calculateAt(index));
  };
  protoOf(MapFunction).d8 = function (changes) {
    var tmp$ret$0;
    // Inline function 'kotlin.comparisons.maxOf' call
    var tmp0_maxOf = this.nn_1.a8() - 1 | 0;
    tmp$ret$0 = Math.max(0, tmp0_maxOf);
    return tmp$ret$0;
  };
  protoOf(MapFunction).dataChanged = function (changes) {
    return this.d8(changes);
  };
  defineProp(protoOf(MapFunction), 'childFunctions', function () {
    return this.va();
  });
  defineProp(protoOf(MapFunction), 'ownPastOffset', function () {
    return this.wa();
  });
  defineProp(protoOf(MapFunction), 'prefetchSize', function () {
    return this.xa();
  });
  function MapToOneFunction(dataItems, series) {
    this.qn_1 = dataItems;
    this.rn_1 = series;
  }
  protoOf(MapToOneFunction).calculateAt = function (index) {
    var current = this.rn_1.calculateAt(index);
    var tmp;
    if (isFinite(current)) {
      tmp = 1.0;
    } else {
      DoubleCompanionObject_getInstance();
      tmp = NaN;
    }
    return tmp;
  };
  protoOf(MapToOneFunction).va = function () {
    return listOf_0(this.rn_1);
  };
  protoOf(MapToOneFunction).wa = function () {
    return 0;
  };
  protoOf(MapToOneFunction).xa = function () {
    return 0;
  };
  protoOf(MapToOneFunction).d8 = function (changes) {
    var tmp$ret$0;
    // Inline function 'kotlin.comparisons.maxOf' call
    var tmp0_maxOf = this.qn_1.a8() - 1 | 0;
    tmp$ret$0 = Math.max(0, tmp0_maxOf);
    return tmp$ret$0;
  };
  protoOf(MapToOneFunction).dataChanged = function (changes) {
    return this.d8(changes);
  };
  defineProp(protoOf(MapToOneFunction), 'childFunctions', function () {
    return this.va();
  });
  defineProp(protoOf(MapToOneFunction), 'ownPastOffset', function () {
    return this.wa();
  });
  defineProp(protoOf(MapToOneFunction), 'prefetchSize', function () {
    return this.xa();
  });
  function MaxValueFunction(functions) {
    AbstractCachingFunction.call(this);
    var tmp = this;
    tmp.tn_1 = isArray(functions) ? functions : THROW_CCE();
  }
  protoOf(MaxValueFunction).va = function () {
    return listOf(this.tn_1.slice());
  };
  protoOf(MaxValueFunction).cj = function (index) {
    var largest = this.tn_1[0].calculateAt(index);
    var indexedObject = this.tn_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    $l$loop: while (inductionVariable < last) {
      var func = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var currentFuncValue = func.calculateAt(index);
      if (isNaN_0(currentFuncValue)) {
        DoubleCompanionObject_getInstance();
        largest = NaN;
        break $l$loop;
      }
      if (currentFuncValue > largest) {
        largest = currentFuncValue;
      }
    }
    return largest;
  };
  defineProp(protoOf(MaxValueFunction), 'childFunctions', function () {
    return this.va();
  });
  defineProp(protoOf(MaxValueFunction), 'ownPastOffset', function () {
    return this.wa();
  });
  defineProp(protoOf(MaxValueFunction), 'prefetchSize', function () {
    return this.xa();
  });
  function MinValueFunction(functions) {
    AbstractCachingFunction.call(this);
    var tmp = this;
    tmp.vn_1 = isArray(functions) ? functions : THROW_CCE();
  }
  protoOf(MinValueFunction).va = function () {
    return listOf(this.vn_1.slice());
  };
  protoOf(MinValueFunction).cj = function (index) {
    var min = this.vn_1[0].calculateAt(index);
    var indexedObject = this.vn_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    $l$loop: while (inductionVariable < last) {
      var func = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var value = func.calculateAt(index);
      if (isNaN_0(value)) {
        DoubleCompanionObject_getInstance();
        min = NaN;
        break $l$loop;
      }
      if (value < min) {
        min = value;
      }
    }
    return min;
  };
  defineProp(protoOf(MinValueFunction), 'childFunctions', function () {
    return this.va();
  });
  defineProp(protoOf(MinValueFunction), 'ownPastOffset', function () {
    return this.wa();
  });
  defineProp(protoOf(MinValueFunction), 'prefetchSize', function () {
    return this.xa();
  });
  function moneyFlowValue($this, price, prevPrice, volume) {
    if ($this.zn_1) {
      if (price > prevPrice)
        return price * volume;
      else
        return 0.0;
    } else {
      return price * volume;
    }
  }
  function MoneyFlowFunction(priceFunc, volumeFunc, positive) {
    AbstractCachingFunction.call(this);
    this.xn_1 = priceFunc;
    this.yn_1 = volumeFunc;
    this.zn_1 = positive;
  }
  protoOf(MoneyFlowFunction).wa = function () {
    return 1;
  };
  protoOf(MoneyFlowFunction).va = function () {
    return listOf([this.xn_1, this.yn_1]);
  };
  protoOf(MoneyFlowFunction).cj = function (index) {
    if (index === 0) {
      DoubleCompanionObject_getInstance();
      return NaN;
    }
    var price = this.xn_1.calculateAt(index);
    var prevPrice = this.xn_1.calculateAt(index - 1 | 0);
    var volume = this.yn_1.calculateAt(index);
    return moneyFlowValue(this, price, prevPrice, volume);
  };
  defineProp(protoOf(MoneyFlowFunction), 'ownPastOffset', function () {
    return this.wa();
  });
  defineProp(protoOf(MoneyFlowFunction), 'childFunctions', function () {
    return this.va();
  });
  defineProp(protoOf(MoneyFlowFunction), 'prefetchSize', function () {
    return this.xa();
  });
  function MovingAverageExponential(srcFunc, period, startOffset) {
    startOffset = startOffset === VOID ? 0 : startOffset;
    AbstractCachingFunction.call(this);
    this.bo_1 = srcFunc;
    this.co_1 = period;
    this.do_1 = startOffset;
    this.eo_1 = 2.0 / (this.co_1 + 1 | 0);
  }
  protoOf(MovingAverageExponential).wa = function () {
    return this.co_1 - 1 | 0;
  };
  protoOf(MovingAverageExponential).va = function () {
    return listOf_0(this.bo_1);
  };
  protoOf(MovingAverageExponential).cj = function (index) {
    var tmp;
    if (index < ((this.co_1 - 1 | 0) + this.do_1 | 0)) {
      DoubleCompanionObject_getInstance();
      tmp = NaN;
    } else {
      var tmp_0;
      if (index === ((this.co_1 - 1 | 0) + this.do_1 | 0)) {
        var sum = this.bo_1.calculateAt(this.do_1);
        var inductionVariable = 1;
        var last = this.co_1;
        if (inductionVariable < last)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            sum = sum + this.bo_1.calculateAt(i + this.do_1 | 0);
          }
           while (inductionVariable < last);
        tmp_0 = sum / this.co_1;
      } else {
        var srcValue = this.bo_1.calculateAt(index);
        var prevEMA = this.calculateAt(index - 1 | 0);
        tmp_0 = prevEMA + this.eo_1 * (srcValue - prevEMA);
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(MovingAverageExponential).xa = function () {
    return imul(4, this.co_1) + this.do_1 | 0;
  };
  defineProp(protoOf(MovingAverageExponential), 'ownPastOffset', function () {
    return this.wa();
  });
  defineProp(protoOf(MovingAverageExponential), 'childFunctions', function () {
    return this.va();
  });
  defineProp(protoOf(MovingAverageExponential), 'prefetchSize', function () {
    return this.xa();
  });
  function MovingAverageSimple(srcFunc, period) {
    BackRangeDependentFunction.call(this, srcFunc, period);
  }
  protoOf(MovingAverageSimple).wl = function (srcLatestValues) {
    var length = this.ol_1;
    var sum = srcLatestValues[0];
    var inductionVariable = 1;
    var last = length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        sum = sum + srcLatestValues[i];
      }
       while (!(i === last));
    return sum / length;
  };
  defineProp(protoOf(MovingAverageSimple), 'childFunctions', function () {
    return this.va();
  });
  defineProp(protoOf(MovingAverageSimple), 'ownPastOffset', function () {
    return this.wa();
  });
  defineProp(protoOf(MovingAverageSimple), 'prefetchSize', function () {
    return this.xa();
  });
  function MovingAverageSmoothed(srcFunc, length, startOffset) {
    startOffset = startOffset === VOID ? 0 : startOffset;
    AbstractCachingFunction.call(this);
    this.lo_1 = srcFunc;
    this.mo_1 = length;
    this.no_1 = startOffset;
  }
  protoOf(MovingAverageSmoothed).va = function () {
    return listOf_0(this.lo_1);
  };
  protoOf(MovingAverageSmoothed).wa = function () {
    return this.mo_1 - 1 | 0;
  };
  protoOf(MovingAverageSmoothed).cj = function (index) {
    if (index < ((this.mo_1 - 1 | 0) + this.no_1 | 0)) {
      DoubleCompanionObject_getInstance();
      return NaN;
    }
    var tmp;
    if (index === ((this.mo_1 - 1 | 0) + this.no_1 | 0)) {
      var sum = this.lo_1.calculateAt(this.no_1);
      var inductionVariable = 1;
      var last = this.mo_1;
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          sum = sum + this.lo_1.calculateAt(i + this.no_1 | 0);
        }
         while (inductionVariable < last);
      tmp = sum / this.mo_1;
    } else {
      var src = this.lo_1.calculateAt(index);
      tmp = (this.calculateAt(index - 1 | 0) * (this.mo_1 - 1 | 0) + src) / this.mo_1;
    }
    return tmp;
  };
  defineProp(protoOf(MovingAverageSmoothed), 'childFunctions', function () {
    return this.va();
  });
  defineProp(protoOf(MovingAverageSmoothed), 'ownPastOffset', function () {
    return this.wa();
  });
  defineProp(protoOf(MovingAverageSmoothed), 'prefetchSize', function () {
    return this.xa();
  });
  function MovingAverageWeighted(srcFunc, length) {
    BackRangeDependentFunction.call(this, srcFunc, length);
  }
  protoOf(MovingAverageWeighted).wl = function (srcLatestValues) {
    var length = this.ol_1;
    var denominator = imul(length, length + 1 | 0) / 2 | 0;
    var total = 0.0;
    var inductionVariable = 0;
    var last = length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var weigth = i + 1 | 0;
        total = total + weigth * srcLatestValues[i];
      }
       while (!(i === last));
    return total / denominator;
  };
  defineProp(protoOf(MovingAverageWeighted), 'childFunctions', function () {
    return this.va();
  });
  defineProp(protoOf(MovingAverageWeighted), 'ownPastOffset', function () {
    return this.wa();
  });
  defineProp(protoOf(MovingAverageWeighted), 'prefetchSize', function () {
    return this.xa();
  });
  function isDivisionNeeded($this, volume, close, prevVolume, prevClose) {
    return ((!isNaN_0(volume) ? !isNaN_0(close) : false) ? volume < prevVolume : false) ? !(compareTo(prevClose, 0.0) === 0) : false;
  }
  function NegativeVolumeIndexFunction(volumeFunction, closeFunction) {
    AbstractCachingFunction.call(this);
    this.uo_1 = volumeFunction;
    this.vo_1 = closeFunction;
  }
  protoOf(NegativeVolumeIndexFunction).va = function () {
    return listOf([this.uo_1, this.vo_1]);
  };
  protoOf(NegativeVolumeIndexFunction).cj = function (index) {
    if (index === 0)
      return 100.0;
    var volume = this.uo_1.calculateAt(index);
    var close = this.vo_1.calculateAt(index);
    if (isNaN_0(volume) ? true : isNaN_0(close)) {
      DoubleCompanionObject_getInstance();
      return NaN;
    }
    var prevVolume = this.uo_1.calculateAt(index - 1 | 0);
    var prevClose = this.vo_1.calculateAt(index - 1 | 0);
    var prevNVI = this.calculateAt(index - 1 | 0);
    return prevNVI + (isDivisionNeeded(this, volume, close, prevVolume, prevClose) ? 100.0 * ((close - prevClose) / prevClose) : 0.0);
  };
  defineProp(protoOf(NegativeVolumeIndexFunction), 'childFunctions', function () {
    return this.va();
  });
  defineProp(protoOf(NegativeVolumeIndexFunction), 'ownPastOffset', function () {
    return this.wa();
  });
  defineProp(protoOf(NegativeVolumeIndexFunction), 'prefetchSize', function () {
    return this.xa();
  });
  function PredicateFunction(tradeDataHolder, guardFunction, srcFunction, predicate) {
    this.wo_1 = tradeDataHolder;
    this.xo_1 = guardFunction;
    this.yo_1 = srcFunction;
    this.zo_1 = predicate;
  }
  protoOf(PredicateFunction).va = function () {
    return listOf_0(this.yo_1);
  };
  protoOf(PredicateFunction).wa = function () {
    return 0;
  };
  protoOf(PredicateFunction).xa = function () {
    return 0;
  };
  protoOf(PredicateFunction).calculateAt = function (index) {
    var tmp;
    if (this.zo_1(this.xo_1.calculateAt(index))) {
      tmp = this.yo_1.calculateAt(index);
    } else {
      DoubleCompanionObject_getInstance();
      tmp = NaN;
    }
    return tmp;
  };
  protoOf(PredicateFunction).d8 = function (changes) {
    var tmp$ret$0;
    // Inline function 'kotlin.comparisons.maxOf' call
    var tmp0_maxOf = this.wo_1.a8() - 1 | 0;
    tmp$ret$0 = Math.max(0, tmp0_maxOf);
    return tmp$ret$0;
  };
  protoOf(PredicateFunction).dataChanged = function (changes) {
    return this.d8(changes);
  };
  defineProp(protoOf(PredicateFunction), 'childFunctions', function () {
    return this.va();
  });
  defineProp(protoOf(PredicateFunction), 'ownPastOffset', function () {
    return this.wa();
  });
  defineProp(protoOf(PredicateFunction), 'prefetchSize', function () {
    return this.xa();
  });
  function calculate_0($this, di) {
    var tmp0_subject = $this.cp_1;
    var tmp0 = tmp0_subject.s6_1;
    var tmp;
    switch (tmp0) {
      case 0:
        tmp = di.getOpen();
        break;
      case 3:
        tmp = di.getClose();
        break;
      case 1:
        tmp = di.getHigh();
        break;
      case 2:
        tmp = di.getLow();
        break;
      case 4:
        var tmp1_elvis_lhs = di.getImpVolatility();
        tmp = tmp1_elvis_lhs == null ? 0.0 : tmp1_elvis_lhs;
        break;
      case 5:
        tmp = (di.getHigh() + di.getLow()) / 2;
        break;
      case 6:
        var tmp2_elvis_lhs = di.getVwap();
        tmp = tmp2_elvis_lhs == null ? (di.getHigh() + di.getLow() + di.getClose()) / 3 : tmp2_elvis_lhs;
        break;
      case 7:
        tmp = (di.getOpen() + di.getHigh() + di.getLow() + di.getClose()) / 4;
        break;
      case 8:
        tmp = di.getVolume();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    var ret = tmp;
    return ret;
  }
  function PriceAggregatedSourceFunction(data, type, price, displace) {
    displace = displace === VOID ? 0 : displace;
    this.ap_1 = data;
    this.bp_1 = type;
    this.cp_1 = price;
    this.dp_1 = displace;
  }
  protoOf(PriceAggregatedSourceFunction).calculateAt = function (index) {
    var di = this.ap_1.getAggregatedTradeItem(index, this.bp_1, this.dp_1);
    if (!(di == null)) {
      return calculate_0(this, di);
    }
    DoubleCompanionObject_getInstance();
    return NaN;
  };
  protoOf(PriceAggregatedSourceFunction).xa = function () {
    return -this.dp_1 | 0;
  };
  protoOf(PriceAggregatedSourceFunction).va = function () {
    return emptyList();
  };
  protoOf(PriceAggregatedSourceFunction).wa = function () {
    return 0;
  };
  protoOf(PriceAggregatedSourceFunction).d8 = function (changes) {
    var tmp$ret$0;
    // Inline function 'kotlin.comparisons.maxOf' call
    var tmp0_maxOf = this.ap_1.a8() - 1 | 0;
    tmp$ret$0 = Math.max(0, tmp0_maxOf);
    return tmp$ret$0;
  };
  protoOf(PriceAggregatedSourceFunction).dataChanged = function (changes) {
    return this.d8(changes);
  };
  defineProp(protoOf(PriceAggregatedSourceFunction), 'prefetchSize', function () {
    return this.xa();
  });
  defineProp(protoOf(PriceAggregatedSourceFunction), 'childFunctions', function () {
    return this.va();
  });
  defineProp(protoOf(PriceAggregatedSourceFunction), 'ownPastOffset', function () {
    return this.wa();
  });
  function calculate_1($this, index) {
    var di = $this.ep_1.getTradeItem(index);
    if (!(di == null)) {
      return getPrice_0($this, di);
    } else {
      DoubleCompanionObject_getInstance();
      return NaN;
    }
  }
  function getPrice_0($this, di) {
    var tmp0_subject = $this.fp_1;
    var tmp0 = tmp0_subject.s6_1;
    var tmp;
    switch (tmp0) {
      case 0:
        tmp = di.getOpen();
        break;
      case 1:
        tmp = di.getHigh();
        break;
      case 2:
        tmp = di.getLow();
        break;
      case 3:
        tmp = di.getClose();
        break;
      case 4:
        var tmp1_elvis_lhs = di.getImpVolatility();
        tmp = tmp1_elvis_lhs == null ? 0.0 : tmp1_elvis_lhs;
        break;
      case 5:
        tmp = (di.getHigh() + di.getLow()) / 2;
        break;
      case 6:
        var tmp2_elvis_lhs = di.getVwap();
        tmp = tmp2_elvis_lhs == null ? (di.getHigh() + di.getLow() + di.getClose()) / 3 : tmp2_elvis_lhs;
        break;
      case 7:
        tmp = (di.getOpen() + di.getHigh() + di.getLow() + di.getClose()) / 4;
        break;
      case 8:
        tmp = di.getVolume();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function PriceSourceFunction(dataItems, priceField) {
    this.ep_1 = dataItems;
    this.fp_1 = priceField;
  }
  protoOf(PriceSourceFunction).va = function () {
    return emptyList();
  };
  protoOf(PriceSourceFunction).calculateAt = function (index) {
    return calculate_1(this, index);
  };
  protoOf(PriceSourceFunction).a8 = function () {
    return this.ep_1.a8();
  };
  protoOf(PriceSourceFunction).wa = function () {
    return 0;
  };
  protoOf(PriceSourceFunction).xa = function () {
    return 0;
  };
  protoOf(PriceSourceFunction).d8 = function (changes) {
    var tmp$ret$0;
    // Inline function 'kotlin.comparisons.maxOf' call
    var tmp0_maxOf = this.ep_1.a8() - 1 | 0;
    tmp$ret$0 = Math.max(0, tmp0_maxOf);
    return tmp$ret$0;
  };
  protoOf(PriceSourceFunction).dataChanged = function (changes) {
    return this.d8(changes);
  };
  defineProp(protoOf(PriceSourceFunction), 'childFunctions', function () {
    return this.va();
  });
  defineProp(protoOf(PriceSourceFunction), 'ownPastOffset', function () {
    return this.wa();
  });
  defineProp(protoOf(PriceSourceFunction), 'prefetchSize', function () {
    return this.xa();
  });
  function constructUpAvg($this, price, length) {
    var deviationFunction = new StandardDeviationFunction(price, Companion_getInstance_59().pk_1);
    var trendUp = new DorseyTrendFunction(price, deviationFunction, Trend_UP_getInstance());
    return new WildersAverage(trendUp, length);
  }
  function constructDownAvg($this, price, length) {
    var deviationFunction = new StandardDeviationFunction(price, Companion_getInstance_59().pk_1);
    var trendDown = new DorseyTrendFunction(price, deviationFunction, Trend_DOWN_getInstance());
    return new WildersAverage(trendDown, length);
  }
  function Companion_60() {
    Companion_instance_60 = this;
    this.gp_1 = new ConstantFunction(100.0);
    this.hp_1 = new ConstantFunction(1.0);
  }
  var Companion_instance_60;
  function Companion_getInstance_60() {
    if (Companion_instance_60 == null)
      new Companion_60();
    return Companion_instance_60;
  }
  function RelativeVolatilityFunction(price, length) {
    Companion_getInstance_60();
    AbstractCachingFunction.call(this);
    var upAvg = constructUpAvg(Companion_getInstance_60(), price, length);
    var downAvg = constructDownAvg(Companion_getInstance_60(), price, length);
    var upPlusDown = new ArithmeticFunction(upAvg, downAvg, ArithmeticOperation_PLUS_getInstance());
    var ifUpPlusDownEqualsZero = new ConstantFunction(50.0);
    var ifUpPlusDownNotEqualsZero = new ArithmeticFunction(new ArithmeticFunction(Companion_getInstance_60().gp_1, upAvg, ArithmeticOperation_MULT_getInstance()), upPlusDown, ArithmeticOperation_DIV_getInstance());
    this.jp_1 = new Equals(upPlusDown, new ZeroFunction(), ifUpPlusDownEqualsZero, ifUpPlusDownNotEqualsZero);
  }
  protoOf(RelativeVolatilityFunction).va = function () {
    return listOf_0(this.jp_1);
  };
  protoOf(RelativeVolatilityFunction).cj = function (index) {
    return this.jp_1.calculateAt(index);
  };
  defineProp(protoOf(RelativeVolatilityFunction), 'childFunctions', function () {
    return this.va();
  });
  defineProp(protoOf(RelativeVolatilityFunction), 'ownPastOffset', function () {
    return this.wa();
  });
  defineProp(protoOf(RelativeVolatilityFunction), 'prefetchSize', function () {
    return this.xa();
  });
  function SeriesCrossingPoints(dataItems, firstSeries, secondSeries, revert, offset) {
    this.kp_1 = dataItems;
    this.lp_1 = firstSeries;
    this.mp_1 = secondSeries;
    this.np_1 = revert;
    this.op_1 = offset;
  }
  protoOf(SeriesCrossingPoints).calculateAt = function (index) {
    if (index < this.op_1) {
      DoubleCompanionObject_getInstance();
      return NaN;
    }
    var currentFirstSeries = this.lp_1.calculateAt(index);
    var prevFirstSeries = this.lp_1.calculateAt(index - 1 | 0);
    var currentSecondSeries = this.mp_1.calculateAt(index);
    var prevSecondSeries = this.mp_1.calculateAt(index - 1 | 0);
    if (this.np_1) {
      if (currentSecondSeries > currentFirstSeries ? prevSecondSeries < prevFirstSeries : false) {
        return currentSecondSeries;
      } else {
        DoubleCompanionObject_getInstance();
        return NaN;
      }
    } else {
      if (currentFirstSeries > currentSecondSeries ? prevFirstSeries < prevSecondSeries : false) {
        return currentFirstSeries;
      } else {
        DoubleCompanionObject_getInstance();
        return NaN;
      }
    }
  };
  protoOf(SeriesCrossingPoints).va = function () {
    return listOf([this.lp_1, this.mp_1]);
  };
  protoOf(SeriesCrossingPoints).wa = function () {
    return 0;
  };
  protoOf(SeriesCrossingPoints).xa = function () {
    return 0;
  };
  protoOf(SeriesCrossingPoints).d8 = function (changes) {
    var tmp$ret$0;
    // Inline function 'kotlin.comparisons.maxOf' call
    var tmp0_maxOf = this.kp_1.a8() - 1 | 0;
    tmp$ret$0 = Math.max(0, tmp0_maxOf);
    return tmp$ret$0;
  };
  protoOf(SeriesCrossingPoints).dataChanged = function (changes) {
    return this.d8(changes);
  };
  defineProp(protoOf(SeriesCrossingPoints), 'childFunctions', function () {
    return this.va();
  });
  defineProp(protoOf(SeriesCrossingPoints), 'ownPastOffset', function () {
    return this.wa();
  });
  defineProp(protoOf(SeriesCrossingPoints), 'prefetchSize', function () {
    return this.xa();
  });
  var SessionSet_WITHOUT_LAST_instance;
  var SessionSet_ONLY_LAST_instance;
  var SessionSet_ONLY_LAST_FOR_ALL_CANDLES_instance;
  var SessionSet_entriesInitialized;
  function SessionSet_initEntries() {
    if (SessionSet_entriesInitialized)
      return Unit_getInstance();
    SessionSet_entriesInitialized = true;
    SessionSet_WITHOUT_LAST_instance = new SessionSet('WITHOUT_LAST', 0);
    SessionSet_ONLY_LAST_instance = new SessionSet('ONLY_LAST', 1);
    SessionSet_ONLY_LAST_FOR_ALL_CANDLES_instance = new SessionSet('ONLY_LAST_FOR_ALL_CANDLES', 2);
  }
  function SessionSet(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function SessionSet_WITHOUT_LAST_getInstance() {
    SessionSet_initEntries();
    return SessionSet_WITHOUT_LAST_instance;
  }
  function SessionSet_ONLY_LAST_getInstance() {
    SessionSet_initEntries();
    return SessionSet_ONLY_LAST_instance;
  }
  function SessionSet_ONLY_LAST_FOR_ALL_CANDLES_getInstance() {
    SessionSet_initEntries();
    return SessionSet_ONLY_LAST_FOR_ALL_CANDLES_instance;
  }
  function signValue($this, value) {
    return value < 0.0 ? -1.0 : value > 0.0 ? 1.0 : 0.0;
  }
  function SignFunction(srcFunc) {
    AbstractCachingFunction.call(this);
    this.qp_1 = srcFunc;
  }
  protoOf(SignFunction).va = function () {
    return listOf_0(this.qp_1);
  };
  protoOf(SignFunction).cj = function (index) {
    return signValue(this, this.qp_1.calculateAt(index));
  };
  defineProp(protoOf(SignFunction), 'childFunctions', function () {
    return this.va();
  });
  defineProp(protoOf(SignFunction), 'ownPastOffset', function () {
    return this.wa();
  });
  defineProp(protoOf(SignFunction), 'prefetchSize', function () {
    return this.xa();
  });
  function SimpleWeightedSumFunction(srcFunc, period) {
    BackRangeDependentFunction.call(this, srcFunc, period);
  }
  protoOf(SimpleWeightedSumFunction).wl = function (srcLatestValues) {
    var sum = 0.0;
    var weight = this.ol_1;
    var inductionVariable = 0;
    var last = this.ol_1 - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        sum = sum + weight * srcLatestValues[i];
        weight = weight - 1 | 0;
      }
       while (!(i === last));
    return sum;
  };
  defineProp(protoOf(SimpleWeightedSumFunction), 'childFunctions', function () {
    return this.va();
  });
  defineProp(protoOf(SimpleWeightedSumFunction), 'ownPastOffset', function () {
    return this.wa();
  });
  defineProp(protoOf(SimpleWeightedSumFunction), 'prefetchSize', function () {
    return this.xa();
  });
  function StandardDeviationFunction(srcFunc, period) {
    BackRangeDependentFunction.call(this, srcFunc, period);
  }
  protoOf(StandardDeviationFunction).wl = function (srcLatestValues) {
    var length = this.ol_1;
    var average = srcLatestValues[0];
    var inductionVariable = 1;
    if (inductionVariable < length)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        average = average + srcLatestValues[i];
      }
       while (inductionVariable < length);
    average = average / length;
    var stdDev = 0.0;
    var inductionVariable_0 = 0;
    if (inductionVariable_0 < length)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var diff = srcLatestValues[i_0] - average;
        stdDev = stdDev + diff * diff;
      }
       while (inductionVariable_0 < length);
    var tmp$ret$0;
    // Inline function 'kotlin.math.sqrt' call
    var tmp0_sqrt = stdDev / length;
    tmp$ret$0 = Math.sqrt(tmp0_sqrt);
    return tmp$ret$0;
  };
  defineProp(protoOf(StandardDeviationFunction), 'childFunctions', function () {
    return this.va();
  });
  defineProp(protoOf(StandardDeviationFunction), 'ownPastOffset', function () {
    return this.wa();
  });
  defineProp(protoOf(StandardDeviationFunction), 'prefetchSize', function () {
    return this.xa();
  });
  function StandardErrorOfEstimationFunction(srcFunc, period) {
    BackRangeDependentFunction.call(this, srcFunc, period);
  }
  protoOf(StandardErrorOfEstimationFunction).wl = function (srcLatestValues) {
    var length = this.ol_1;
    var result = 0.0;
    if (length <= 2) {
      return result;
    }
    var avgX = length * (length - 1 | 0) * 0.5 / length;
    var avgY = srcLatestValues[0];
    var inductionVariable = 1;
    var last = length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        avgY = avgY + srcLatestValues[i];
      }
       while (!(i === last));
    avgY = avgY / length;
    var sumDxSqr = 0.0;
    var sumDySqr = 0.0;
    var sumDxDy = 0.0;
    var inductionVariable_0 = 0;
    var last_0 = length - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var v = srcLatestValues[i_0];
        var dx = i_0 - avgX;
        var dy = v - avgY;
        sumDxSqr = sumDxSqr + dx * dx;
        sumDySqr = sumDySqr + dy * dy;
        sumDxDy = sumDxDy + dx * dy;
      }
       while (!(i_0 === last_0));
    result = (sumDySqr - sumDxDy * sumDxDy / sumDxSqr) / (length - 2 | 0);
    if (result > 0.0) {
      var tmp$ret$0;
      // Inline function 'kotlin.math.sqrt' call
      var tmp0_sqrt = result;
      tmp$ret$0 = Math.sqrt(tmp0_sqrt);
      return tmp$ret$0;
    }
    return result;
  };
  defineProp(protoOf(StandardErrorOfEstimationFunction), 'childFunctions', function () {
    return this.va();
  });
  defineProp(protoOf(StandardErrorOfEstimationFunction), 'ownPastOffset', function () {
    return this.wa();
  });
  defineProp(protoOf(StandardErrorOfEstimationFunction), 'prefetchSize', function () {
    return this.xa();
  });
  function SumFunction(srcFunc, period) {
    BackRangeDependentFunction.call(this, srcFunc, period);
  }
  protoOf(SumFunction).wl = function (srcLatestValues) {
    var sum = srcLatestValues[0];
    var inductionVariable = 1;
    var last = this.ol_1 - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        sum = sum + srcLatestValues[i];
      }
       while (!(i === last));
    return sum;
  };
  defineProp(protoOf(SumFunction), 'childFunctions', function () {
    return this.va();
  });
  defineProp(protoOf(SumFunction), 'ownPastOffset', function () {
    return this.wa();
  });
  defineProp(protoOf(SumFunction), 'prefetchSize', function () {
    return this.xa();
  });
  function getTrueRangeValue($this, low, high, prevClose) {
    var tmp$ret$4;
    // Inline function 'kotlin.comparisons.maxOf' call
    var tmp$ret$0;
    // Inline function 'kotlin.math.abs' call
    var tmp0_abs = high - low;
    tmp$ret$0 = Math.abs(tmp0_abs);
    var tmp5_maxOf = tmp$ret$0;
    var tmp$ret$3;
    // Inline function 'kotlin.comparisons.maxOf' call
    var tmp$ret$1;
    // Inline function 'kotlin.math.abs' call
    var tmp1_abs = high - prevClose;
    tmp$ret$1 = Math.abs(tmp1_abs);
    var tmp3_maxOf = tmp$ret$1;
    var tmp$ret$2;
    // Inline function 'kotlin.math.abs' call
    var tmp2_abs = prevClose - low;
    tmp$ret$2 = Math.abs(tmp2_abs);
    var tmp4_maxOf = tmp$ret$2;
    tmp$ret$3 = Math.max(tmp3_maxOf, tmp4_maxOf);
    var tmp6_maxOf = tmp$ret$3;
    tmp$ret$4 = Math.max(tmp5_maxOf, tmp6_maxOf);
    return tmp$ret$4;
  }
  function TrueRangeFunction(low, close, high) {
    AbstractCachingFunction.call(this);
    this.mq_1 = low;
    this.nq_1 = close;
    this.oq_1 = high;
  }
  protoOf(TrueRangeFunction).va = function () {
    return listOf([this.mq_1, this.nq_1, this.oq_1]);
  };
  protoOf(TrueRangeFunction).cj = function (index) {
    var thisLow = this.mq_1.calculateAt(index);
    var thisHigh = this.oq_1.calculateAt(index);
    var tmp;
    if (index === 0) {
      var tmp$ret$0;
      // Inline function 'kotlin.math.abs' call
      var tmp0_abs = thisHigh - thisLow;
      tmp$ret$0 = Math.abs(tmp0_abs);
      tmp = tmp$ret$0;
    } else {
      var prevClose = this.nq_1.calculateAt(index - 1 | 0);
      tmp = getTrueRangeValue(this, thisLow, thisHigh, prevClose);
    }
    return tmp;
  };
  defineProp(protoOf(TrueRangeFunction), 'childFunctions', function () {
    return this.va();
  });
  defineProp(protoOf(TrueRangeFunction), 'ownPastOffset', function () {
    return this.wa();
  });
  defineProp(protoOf(TrueRangeFunction), 'prefetchSize', function () {
    return this.xa();
  });
  function WildersAverage(srcFunc, length) {
    AbstractCachingFunction.call(this);
    this.qq_1 = srcFunc;
    this.rq_1 = length;
  }
  protoOf(WildersAverage).va = function () {
    return listOf_0(this.qq_1);
  };
  protoOf(WildersAverage).cj = function (index) {
    var v = this.qq_1.calculateAt(index);
    if (index === 0) {
      return v;
    } else {
      var prev = this.calculateAt(index - 1 | 0);
      if (isNaN_0(prev) ? isNaN_0(v) : false) {
        DoubleCompanionObject_getInstance();
        return NaN;
      } else if (isNaN_0(prev) ? !isNaN_0(v) : false) {
        return v;
      } else if (!isNaN_0(prev) ? isNaN_0(v) : false) {
        DoubleCompanionObject_getInstance();
        return NaN;
      } else {
        return (v + (this.rq_1 - 1 | 0) * prev) / this.rq_1;
      }
    }
  };
  protoOf(WildersAverage).xa = function () {
    return imul(7, this.rq_1);
  };
  defineProp(protoOf(WildersAverage), 'childFunctions', function () {
    return this.va();
  });
  defineProp(protoOf(WildersAverage), 'prefetchSize', function () {
    return this.xa();
  });
  defineProp(protoOf(WildersAverage), 'ownPastOffset', function () {
    return this.wa();
  });
  function WindowFunction_init_$Init$(srcFunction, endIndex, relativeToDataEnd, $this) {
    WindowFunction.call($this);
    if (!relativeToDataEnd ? endIndex <= 0 : false) {
      throw IllegalArgumentException_init_$Create$('negative end index ' + endIndex);
    }
    $this.wq_1 = relativeToDataEnd;
    if ($this.wq_1)
      $this.vq_1 = endIndex;
    else
      $this.uq_1 = endIndex;
    $this.sq_1 = srcFunction;
    return $this;
  }
  function WindowFunction_init_$Create$(srcFunction, endIndex, relativeToDataEnd) {
    return WindowFunction_init_$Init$(srcFunction, endIndex, relativeToDataEnd, objectCreate(protoOf(WindowFunction)));
  }
  protoOf(WindowFunction).calculateAt = function (index) {
    var tmp;
    if (index >= this.tq_1 ? index < this.uq_1 : false) {
      tmp = this.sq_1.calculateAt(index);
    } else {
      DoubleCompanionObject_getInstance();
      tmp = NaN;
    }
    return tmp;
  };
  protoOf(WindowFunction).wa = function () {
    return this.sq_1.ownPastOffset;
  };
  protoOf(WindowFunction).va = function () {
    return this.sq_1.childFunctions;
  };
  protoOf(WindowFunction).xa = function () {
    return this.sq_1.prefetchSize;
  };
  protoOf(WindowFunction).d8 = function (changes) {
    if (this.wq_1)
      this.uq_1 = changes.ra_1 + this.vq_1 | 0;
    return this.sq_1.dataChanged(changes);
  };
  protoOf(WindowFunction).dataChanged = function (changes) {
    return this.d8(changes);
  };
  function WindowFunction() {
    this.tq_1 = 0;
    this.uq_1 = IntCompanionObject_getInstance().MAX_VALUE;
    this.vq_1 = 0;
    this.wq_1 = false;
  }
  defineProp(protoOf(WindowFunction), 'ownPastOffset', function () {
    return this.wa();
  });
  defineProp(protoOf(WindowFunction), 'childFunctions', function () {
    return this.va();
  });
  defineProp(protoOf(WindowFunction), 'prefetchSize', function () {
    return this.xa();
  });
  function ZeroFunction() {
    ConstantFunction.call(this, 0.0);
  }
  defineProp(protoOf(ZeroFunction), 'ownPastOffset', function () {
    return this.wa();
  });
  defineProp(protoOf(ZeroFunction), 'prefetchSize', function () {
    return this.xa();
  });
  defineProp(protoOf(ZeroFunction), 'childFunctions', function () {
    return this.va();
  });
  function AbstractCachingFunction() {
    this.dj_1 = ArrayList_init_$Create$_0(1000);
  }
  protoOf(AbstractCachingFunction).calculateAt = function (index) {
    if (index < 0) {
      DoubleCompanionObject_getInstance();
      return NaN;
    }
    var lastCalculatedIndex = this.dj_1.f() - 1 | 0;
    while (lastCalculatedIndex < index) {
      var tmp0 = lastCalculatedIndex;
      lastCalculatedIndex = tmp0 + 1 | 0;
      this.dj_1.a(this.cj(lastCalculatedIndex));
    }
    return this.dj_1.g(index);
  };
  protoOf(AbstractCachingFunction).d8 = function (changes) {
    var tmp$ret$0;
    // Inline function 'kotlin.comparisons.minOf' call
    var tmp0_minOf = changes.qa_1;
    var tmp1_minOf = this.ej(changes);
    tmp$ret$0 = Math.min(tmp0_minOf, tmp1_minOf);
    var recalcStartIndex = tmp$ret$0;
    var tmp0_iterator = this.va().c();
    while (tmp0_iterator.d()) {
      var f = tmp0_iterator.e();
      var childRecalcStartIndex = f.dataChanged(changes);
      if (childRecalcStartIndex < recalcStartIndex) {
        recalcStartIndex = childRecalcStartIndex;
      }
    }
    var removedFromLeft = changes.pa_1;
    if (removedFromLeft > 0) {
      if (this.dj_1.f() > removedFromLeft) {
        this.dj_1.j3(0, removedFromLeft).h3();
      } else {
        this.dj_1.h3();
      }
    }
    var tmp$ret$1;
    // Inline function 'kotlin.comparisons.maxOf' call
    var tmp2_maxOf = recalcStartIndex;
    tmp$ret$1 = Math.max(0, tmp2_maxOf);
    recalcStartIndex = tmp$ret$1;
    if (this.dj_1.f() > recalcStartIndex) {
      this.dj_1.j3(recalcStartIndex, this.dj_1.f()).h3();
    }
    return recalcStartIndex;
  };
  protoOf(AbstractCachingFunction).dataChanged = function (changes) {
    return this.d8(changes);
  };
  protoOf(AbstractCachingFunction).ej = function (changes) {
    return changes.qa_1;
  };
  protoOf(AbstractCachingFunction).wa = function () {
    return 0;
  };
  protoOf(AbstractCachingFunction).xa = function () {
    return 0;
  };
  defineProp(protoOf(AbstractCachingFunction), 'ownPastOffset', function () {
    return this.wa();
  });
  defineProp(protoOf(AbstractCachingFunction), 'prefetchSize', function () {
    return this.xa();
  });
  defineProp(protoOf(AbstractCachingFunction), 'childFunctions', function () {
    return this.va();
  });
  function BackRangeDependentFunction(srcFunc, length, considerPartlyNaNArrays) {
    considerPartlyNaNArrays = considerPartlyNaNArrays === VOID ? false : considerPartlyNaNArrays;
    AbstractCachingFunction.call(this);
    this.ml_1 = srcFunc;
    this.nl_1 = considerPartlyNaNArrays;
    this.ol_1 = 0;
    this.pl_1 = null;
    this.ql(length);
  }
  protoOf(BackRangeDependentFunction).ql = function (length) {
    if (length <= 0) {
      throw IllegalArgumentException_init_$Create$('Illegal back range length (' + length + '). Should be non-zero positive.');
    }
    this.ol_1 = length;
  };
  protoOf(BackRangeDependentFunction).va = function () {
    return listOf_0(this.ml_1);
  };
  protoOf(BackRangeDependentFunction).wa = function () {
    return this.ol_1 - 1 | 0;
  };
  protoOf(BackRangeDependentFunction).cj = function (index) {
    if (index < (this.ol_1 - 1 | 0)) {
      DoubleCompanionObject_getInstance();
      return NaN;
    }
    if (this.pl_1 == null ? true : !(ensureNotNull(this.pl_1).length === this.ol_1)) {
      this.pl_1 = new Float64Array(this.ol_1);
    }
    var inductionVariable = 0;
    var last = this.ol_1 - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var v = this.ml_1.calculateAt(((index + 1 | 0) - this.ol_1 | 0) + i | 0);
        if (!this.nl_1 ? isNaN_0(v) : false) {
          DoubleCompanionObject_getInstance();
          return NaN;
        }
        ensureNotNull(this.pl_1)[i] = v;
      }
       while (!(i === last));
    return this.wl(ensureNotNull(this.pl_1));
  };
  defineProp(protoOf(BackRangeDependentFunction), 'childFunctions', function () {
    return this.va();
  });
  defineProp(protoOf(BackRangeDependentFunction), 'ownPastOffset', function () {
    return this.wa();
  });
  defineProp(protoOf(BackRangeDependentFunction), 'prefetchSize', function () {
    return this.xa();
  });
  function DynamicMomentumIndexFunction(priceSourceFunction, dynamicLength, lowerLimit, upperLimit, averageType) {
    AbstractCachingFunction.call(this);
    this.zq_1 = priceSourceFunction;
    this.ar_1 = dynamicLength;
    this.br_1 = lowerLimit;
    this.cr_1 = upperLimit;
    this.dr_1 = averageType;
    this.er_1 = HashMap_init_$Create$_0(abs(this.cr_1 - this.br_1 | 0));
  }
  protoOf(DynamicMomentumIndexFunction).va = function () {
    var children = ArrayList_init_$Create$_0(this.er_1.f() + 2 | 0);
    children.r2(this.er_1.f4());
    children.a(this.zq_1);
    children.a(this.ar_1);
    return children;
  };
  protoOf(DynamicMomentumIndexFunction).cj = function (index) {
    var length = numberToInt(this.ar_1.calculateAt(index));
    if (length < this.br_1) {
      length = this.br_1;
    } else if (length > this.cr_1) {
      length = this.cr_1;
    }
    var rsi = this.er_1.d1(length);
    if (rsi == null) {
      rsi = CommonFunctions_getInstance().zg(this.zq_1, length, this.dr_1);
      // Inline function 'kotlin.collections.set' call
      var tmp0_set = this.er_1;
      var tmp1_set = length;
      var tmp2_set = rsi;
      tmp0_set.e4(tmp1_set, tmp2_set);
    }
    return rsi.calculateAt(index);
  };
  defineProp(protoOf(DynamicMomentumIndexFunction), 'childFunctions', function () {
    return this.va();
  });
  defineProp(protoOf(DynamicMomentumIndexFunction), 'ownPastOffset', function () {
    return this.wa();
  });
  defineProp(protoOf(DynamicMomentumIndexFunction), 'prefetchSize', function () {
    return this.xa();
  });
  var FractalOperation_UP_instance;
  var FractalOperation_DOWN_instance;
  var FractalOperation_entriesInitialized;
  function FractalOperation_initEntries() {
    if (FractalOperation_entriesInitialized)
      return Unit_getInstance();
    FractalOperation_entriesInitialized = true;
    FractalOperation_UP_instance = new FractalOperation('UP', 0);
    FractalOperation_DOWN_instance = new FractalOperation('DOWN', 1);
  }
  function FractalOperation(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function FractalOperation_UP_getInstance() {
    FractalOperation_initEntries();
    return FractalOperation_UP_instance;
  }
  function FractalOperation_DOWN_getInstance() {
    FractalOperation_initEntries();
    return FractalOperation_DOWN_instance;
  }
  function KaufmanNamaFunction(nsmooth, xPrice) {
    AbstractCachingFunction.call(this);
    this.gr_1 = nsmooth;
    this.hr_1 = xPrice;
  }
  protoOf(KaufmanNamaFunction).va = function () {
    return listOf([this.gr_1, this.hr_1]);
  };
  protoOf(KaufmanNamaFunction).cj = function (index) {
    var prev = this.calculateAt(index - 1 | 0);
    if (isNaN_0(prev) ? true : !(compareTo(prev, 0.0) === 1)) {
      prev = 0.0;
    }
    return prev + this.gr_1.calculateAt(index) * (this.hr_1.calculateAt(index) - prev);
  };
  defineProp(protoOf(KaufmanNamaFunction), 'childFunctions', function () {
    return this.va();
  });
  defineProp(protoOf(KaufmanNamaFunction), 'ownPastOffset', function () {
    return this.wa();
  });
  defineProp(protoOf(KaufmanNamaFunction), 'prefetchSize', function () {
    return this.xa();
  });
  function calculateCoefficients($this) {
    var n = $this.jr_1.a8();
    var sumX = 0.0;
    var sumY = 0.0;
    var sumXY = 0.0;
    var sumXX = 0.0;
    var inductionVariable = 0;
    var last = $this.jr_1.a8() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var price = $this.jr_1.calculateAt(i);
        sumX = sumX + i;
        sumY = sumY + price;
        sumXY = sumXY + i * price;
        sumXX = sumXX + imul(i, i);
      }
       while (!(i === last));
    $this.kr_1 = (n * sumXY - sumX * sumY) / (n * sumXX - sumX * sumX);
    $this.lr_1 = (sumY - $this.kr_1 * sumX) / n;
  }
  function LinearRegressionFunction(srcFunc) {
    AbstractCachingFunction.call(this);
    this.jr_1 = srcFunc;
    this.kr_1 = 0.0;
    this.lr_1 = 0.0;
  }
  protoOf(LinearRegressionFunction).va = function () {
    return listOf_0(this.jr_1);
  };
  protoOf(LinearRegressionFunction).ej = function (changes) {
    var tmp = this;
    DoubleCompanionObject_getInstance();
    tmp.lr_1 = NaN;
    var tmp_0 = this;
    DoubleCompanionObject_getInstance();
    tmp_0.kr_1 = NaN;
    return 0;
  };
  protoOf(LinearRegressionFunction).cj = function (index) {
    if (isNaN_0(this.lr_1) ? true : isNaN_0(this.kr_1)) {
      calculateCoefficients(this);
    }
    return this.lr_1 + this.kr_1 * index;
  };
  defineProp(protoOf(LinearRegressionFunction), 'childFunctions', function () {
    return this.va();
  });
  defineProp(protoOf(LinearRegressionFunction), 'ownPastOffset', function () {
    return this.wa();
  });
  defineProp(protoOf(LinearRegressionFunction), 'prefetchSize', function () {
    return this.xa();
  });
  function Extremum(index, value, isMaximum) {
    this.mr_1 = index;
    this.nr_1 = value;
    this.or_1 = isMaximum;
  }
  function ParabolicSarFunction(highFunc, lowFunc, factorInc, maxFactor) {
    AbstractCachingFunction.call(this);
    this.qr_1 = highFunc;
    this.rr_1 = lowFunc;
    this.sr_1 = factorInc;
    this.tr_1 = maxFactor;
    this.ur_1 = ArrayList_init_$Create$();
    this.vr_1 = 0.0;
    this.wr_1 = 0.0;
    this.wr_1 = this.sr_1;
  }
  protoOf(ParabolicSarFunction).va = function () {
    return listOf([this.qr_1, this.rr_1]);
  };
  protoOf(ParabolicSarFunction).wa = function () {
    return 1;
  };
  protoOf(ParabolicSarFunction).ej = function (changes) {
    var removed = changes.pa_1;
    var firstChangedIndex = changes.qa_1;
    if (removed > 0 ? !this.ur_1.h() : false) {
      var it = this.ur_1.c();
      while (it.d()) {
        var ex = it.e();
        if (ex.mr_1 < removed) {
          it.q1();
        } else {
          var tmp0_this = ex;
          tmp0_this.mr_1 = tmp0_this.mr_1 - removed | 0;
        }
      }
    }
    var it_0 = this.ur_1.i3(this.ur_1.f());
    $l$loop: while (it_0.a3()) {
      var ex_0 = it_0.b3();
      if (ex_0.mr_1 >= firstChangedIndex) {
        it_0.q1();
      } else {
        break $l$loop;
      }
    }
    var recalculateIndex = 0;
    if (!this.ur_1.h()) {
      var ex_1 = this.ur_1.g(this.ur_1.f() - 1 | 0);
      recalculateIndex = ex_1.mr_1 + 1 | 0;
      this.vr_1 = ex_1.nr_1;
      this.wr_1 = this.sr_1;
    }
    return recalculateIndex;
  };
  protoOf(ParabolicSarFunction).cj = function (index) {
    if (index === 0) {
      this.vr_1 = this.qr_1.calculateAt(0);
      this.ur_1.h3();
      this.ur_1.a(new Extremum(0, this.rr_1.calculateAt(0), false));
      return this.rr_1.calculateAt(0);
    }
    var ex = this.ur_1.g(this.ur_1.f() - 1 | 0);
    var downtrend = ex.or_1;
    var v = this.calculateAt(index - 1 | 0);
    var previousSAR = isNaN_0(v) ? ex.nr_1 : v;
    var currentHigh = this.qr_1.calculateAt(index);
    var currentLow = this.rr_1.calculateAt(index);
    if (isNaN_0(currentHigh) ? true : isNaN_0(currentLow)) {
      DoubleCompanionObject_getInstance();
      return NaN;
    }
    var currentSAR;
    if (downtrend) {
      if (previousSAR < currentHigh) {
        downtrend = false;
        currentSAR = this.vr_1;
        this.ur_1.a(new Extremum(index, this.vr_1, downtrend));
        this.vr_1 = currentHigh;
        this.wr_1 = this.sr_1;
      } else {
        if (currentLow < this.vr_1) {
          this.vr_1 = currentLow;
          var tmp = this;
          var tmp$ret$0;
          // Inline function 'kotlin.comparisons.minOf' call
          var tmp0_minOf = this.wr_1 + this.sr_1;
          var tmp1_minOf = this.tr_1;
          tmp$ret$0 = Math.min(tmp0_minOf, tmp1_minOf);
          tmp.wr_1 = tmp$ret$0;
        }
        var tmp$ret$1;
        // Inline function 'kotlin.comparisons.maxOf' call
        var tmp2_maxOf = previousSAR + this.wr_1 * (this.vr_1 - previousSAR);
        tmp$ret$1 = Math.max(currentHigh, tmp2_maxOf);
        currentSAR = tmp$ret$1;
      }
    } else {
      if (previousSAR > currentLow) {
        downtrend = true;
        currentSAR = this.vr_1;
        this.ur_1.a(new Extremum(index, this.vr_1, downtrend));
        this.vr_1 = currentLow;
        this.wr_1 = this.sr_1;
      } else {
        if (currentHigh > this.vr_1) {
          this.vr_1 = currentHigh;
          var tmp_0 = this;
          var tmp$ret$2;
          // Inline function 'kotlin.comparisons.minOf' call
          var tmp3_minOf = this.wr_1 + this.sr_1;
          var tmp4_minOf = this.tr_1;
          tmp$ret$2 = Math.min(tmp3_minOf, tmp4_minOf);
          tmp_0.wr_1 = tmp$ret$2;
        }
        var tmp$ret$3;
        // Inline function 'kotlin.comparisons.minOf' call
        var tmp5_minOf = previousSAR + this.wr_1 * (this.vr_1 - previousSAR);
        tmp$ret$3 = Math.min(currentLow, tmp5_minOf);
        currentSAR = tmp$ret$3;
      }
    }
    return currentSAR;
  };
  defineProp(protoOf(ParabolicSarFunction), 'childFunctions', function () {
    return this.va();
  });
  defineProp(protoOf(ParabolicSarFunction), 'ownPastOffset', function () {
    return this.wa();
  });
  defineProp(protoOf(ParabolicSarFunction), 'prefetchSize', function () {
    return this.xa();
  });
  function SchaffTrendFrac(range, fastK, offset) {
    AbstractCachingFunction.call(this);
    this.yr_1 = range;
    this.zr_1 = fastK;
    this.as_1 = offset;
  }
  protoOf(SchaffTrendFrac).va = function () {
    return listOf([this.yr_1, this.zr_1]);
  };
  protoOf(SchaffTrendFrac).cj = function (index) {
    if (this.yr_1.calculateAt(index) > 0.0) {
      return this.zr_1.calculateAt(index);
    } else if (index > this.as_1) {
      return this.calculateAt(index - 1 | 0);
    } else if (index === this.as_1 ? index >= 0 : false) {
      return 0.0;
    }
    DoubleCompanionObject_getInstance();
    return NaN;
  };
  defineProp(protoOf(SchaffTrendFrac), 'childFunctions', function () {
    return this.va();
  });
  defineProp(protoOf(SchaffTrendFrac), 'ownPastOffset', function () {
    return this.wa();
  });
  defineProp(protoOf(SchaffTrendFrac), 'prefetchSize', function () {
    return this.xa();
  });
  function getRank($this, values, length, i) {
    var rank = 0;
    var inductionVariable = 0;
    if (inductionVariable < length)
      do {
        var j = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (getOffset($this, values, i, length - 1 | 0) > getOffset$default($this, values, (length - j | 0) - 1 | 0) ? true : compareTo(getOffset$default($this, values, i), getOffset$default($this, values, (length - j | 0) - 1 | 0)) === 0 ? i <= ((length - j | 0) - 1 | 0) : false) {
          var tmp1 = rank;
          rank = tmp1 + 1 | 0;
        }
      }
       while (inductionVariable < length);
    return rank;
  }
  function getOffset($this, values, offset, max) {
    var offset_0 = offset;
    if (max > values.length) {
      throw IllegalArgumentException_init_$Create$("max can't be greater then length of values");
    }
    if (offset_0 > max) {
      offset_0 = max;
    }
    return values[(values.length - offset_0 | 0) - 1 | 0];
  }
  function getOffset$default($this, values, offset, max, $super) {
    max = max === VOID ? values.length : max;
    return getOffset($this, values, offset, max);
  }
  function SpearmansRho(srcFunc, length) {
    BackRangeDependentFunction.call(this, srcFunc, length);
  }
  protoOf(SpearmansRho).wl = function (srcLatestValues) {
    var length = this.ol_1;
    var sum = 0.0;
    var inductionVariable = 0;
    if (inductionVariable < length)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = sum;
        var tmp$ret$0;
        // Inline function 'kotlin.math.pow' call
        var tmp0_pow = length - i - getRank(this, srcLatestValues, length, i);
        tmp$ret$0 = Math.pow(tmp0_pow, 2.0);
        sum = tmp + tmp$ret$0;
      }
       while (inductionVariable < length);
    var sumMultBy6 = sum * 6;
    var tmp$ret$1;
    // Inline function 'kotlin.math.pow' call
    var tmp1_pow = length;
    tmp$ret$1 = Math.pow(tmp1_pow, 2.0);
    var denominator = length * (tmp$ret$1 - 1);
    var div = sumMultBy6 / denominator;
    return 1 - div;
  };
  defineProp(protoOf(SpearmansRho), 'childFunctions', function () {
    return this.va();
  });
  defineProp(protoOf(SpearmansRho), 'ownPastOffset', function () {
    return this.wa();
  });
  defineProp(protoOf(SpearmansRho), 'prefetchSize', function () {
    return this.xa();
  });
  function SwingIndexRatio(dataItems) {
    AbstractCachingFunction.call(this);
    this.hs_1 = dataItems;
  }
  protoOf(SwingIndexRatio).va = function () {
    return emptyList();
  };
  protoOf(SwingIndexRatio).cj = function (index) {
    DoubleCompanionObject_getInstance();
    var result = NaN;
    if (index < 1) {
      return result;
    }
    var today = this.hs_1.getTradeItem(index);
    var yDay = this.hs_1.getTradeItem(index - 1 | 0);
    if (today == null ? true : yDay == null) {
      DoubleCompanionObject_getInstance();
      return NaN;
    }
    var tmp$ret$0;
    // Inline function 'kotlin.math.abs' call
    var tmp0_abs = today.getHigh() - yDay.getClose();
    tmp$ret$0 = Math.abs(tmp0_abs);
    var highMinusYClose = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.math.abs' call
    var tmp1_abs = today.getLow() - yDay.getClose();
    tmp$ret$1 = Math.abs(tmp1_abs);
    var lowMinusYClose = tmp$ret$1;
    var tmp$ret$2;
    // Inline function 'kotlin.math.abs' call
    var tmp2_abs = yDay.getClose() - yDay.getOpen();
    tmp$ret$2 = Math.abs(tmp2_abs);
    var constPart = tmp$ret$2 / 4;
    var tmp$ret$3;
    // Inline function 'kotlin.math.abs' call
    var tmp3_abs = today.getHigh() - today.getLow();
    tmp$ret$3 = Math.abs(tmp3_abs);
    var highMinusLow = tmp$ret$3;
    if (highMinusYClose > lowMinusYClose ? highMinusYClose > highMinusLow : false) {
      result = constPart + highMinusYClose - lowMinusYClose / 2;
    } else if (lowMinusYClose > highMinusYClose ? lowMinusYClose > highMinusLow : false) {
      result = constPart + lowMinusYClose - highMinusYClose / 2;
    } else {
      result = constPart + highMinusLow;
    }
    return result;
  };
  defineProp(protoOf(SwingIndexRatio), 'childFunctions', function () {
    return this.va();
  });
  defineProp(protoOf(SwingIndexRatio), 'ownPastOffset', function () {
    return this.wa();
  });
  defineProp(protoOf(SwingIndexRatio), 'prefetchSize', function () {
    return this.xa();
  });
  function getYesterday($this, index) {
    var yesterdayValue = $this.calculateAt(index - 1 | 0);
    return isNaN_0(yesterdayValue) ? 0.0 : yesterdayValue;
  }
  function calculateToday($this, index) {
    if (index <= 0) {
      return 0.0;
    }
    var today = $this.js_1.getTradeItem(index);
    var yesterdayDay = $this.js_1.getTradeItem(index - 1 | 0);
    if (today == null ? true : yesterdayDay == null) {
      DoubleCompanionObject_getInstance();
      return NaN;
    }
    var todayClose = today.getClose();
    var todayLow = today.getLow();
    var todayHigh = today.getHigh();
    var yesterdayClose = yesterdayDay.getClose();
    var result;
    if (todayClose > yesterdayClose) {
      var tmp$ret$0;
      // Inline function 'kotlin.comparisons.minOf' call
      tmp$ret$0 = Math.min(yesterdayClose, todayLow);
      result = todayClose - tmp$ret$0;
    } else if (todayClose < yesterdayClose) {
      var tmp$ret$1;
      // Inline function 'kotlin.comparisons.maxOf' call
      tmp$ret$1 = Math.max(yesterdayClose, todayHigh);
      result = todayClose - tmp$ret$1;
    } else {
      result = 0.0;
    }
    return result;
  }
  function WilliamsADFunction(dataItems) {
    AbstractCachingFunction.call(this);
    this.js_1 = dataItems;
  }
  protoOf(WilliamsADFunction).va = function () {
    return emptyList();
  };
  protoOf(WilliamsADFunction).cj = function (index) {
    if (index === 0) {
      DoubleCompanionObject_getInstance();
      return NaN;
    }
    return calculateToday(this, index) + getYesterday(this, index);
  };
  defineProp(protoOf(WilliamsADFunction), 'childFunctions', function () {
    return this.va();
  });
  defineProp(protoOf(WilliamsADFunction), 'ownPastOffset', function () {
    return this.wa();
  });
  defineProp(protoOf(WilliamsADFunction), 'prefetchSize', function () {
    return this.xa();
  });
  function WilliamsFractalFilter(priceSource, sequenceCount, operation) {
    AbstractCachingFunction.call(this);
    this.ls_1 = priceSource;
    this.ms_1 = sequenceCount;
    this.ns_1 = operation;
  }
  protoOf(WilliamsFractalFilter).va = function () {
    return listOf_0(this.ls_1);
  };
  protoOf(WilliamsFractalFilter).cj = function (index) {
    var isFractal = (index - this.ms_1 | 0) >= 0 ? (index + this.ms_1 | 0) < this.ls_1.a8() : false;
    var tmp0_subject = this.ns_1;
    var tmp0 = tmp0_subject.s6_1;
    if (tmp0 === 0)
      isFractal = isFractal ? WilliamsFractalUtils_getInstance().qs(index, this.ls_1, WilliamsFractalUtils_getInstance().os_1, this.ms_1) : false;
    else if (tmp0 === 1)
      isFractal = isFractal ? WilliamsFractalUtils_getInstance().qs(index, this.ls_1, WilliamsFractalUtils_getInstance().ps_1, this.ms_1) : false;
    var tmp;
    if (isFractal) {
      tmp = this.ls_1.calculateAt(index);
    } else {
      DoubleCompanionObject_getInstance();
      tmp = NaN;
    }
    return tmp;
  };
  protoOf(WilliamsFractalFilter).ej = function (changes) {
    var tmp$ret$0;
    // Inline function 'kotlin.comparisons.maxOf' call
    var tmp0_maxOf = changes.qa_1 - this.ms_1 | 0;
    tmp$ret$0 = Math.max(0, tmp0_maxOf);
    return tmp$ret$0;
  };
  defineProp(protoOf(WilliamsFractalFilter), 'childFunctions', function () {
    return this.va();
  });
  defineProp(protoOf(WilliamsFractalFilter), 'ownPastOffset', function () {
    return this.wa();
  });
  defineProp(protoOf(WilliamsFractalFilter), 'prefetchSize', function () {
    return this.xa();
  });
  function removeUnneededExtrema($this, firstChangedIndex) {
    while (!$this.zs_1.g($this.zs_1.f() - 1 | 0).us_1) {
      $this.zs_1.p1($this.zs_1.f() - 1 | 0);
    }
    if ($this.zs_1.g($this.zs_1.f() - 1 | 0).rs_1 >= firstChangedIndex) {
      while (!$this.zs_1.h() ? $this.zs_1.g($this.zs_1.f() - 1 | 0).rs_1 >= firstChangedIndex : false) {
        $this.zs_1.p1($this.zs_1.f() - 1 | 0);
      }
    }
    if (compareTo($this.xs_1, 0.0) === 0 ? !$this.zs_1.h() : false) {
      $this.zs_1.p1($this.zs_1.f() - 1 | 0);
    }
  }
  function removeInvisibleExtrema($this, removed) {
    var v = getValue($this, removed);
    if (!isNaN_0(v)) {
      var it = $this.zs_1.c();
      while (it.d()) {
        var ex = it.e();
        if (ex.rs_1 < removed) {
          it.q1();
        } else {
          var tmp0_this = ex;
          tmp0_this.rs_1 = tmp0_this.rs_1 - removed | 0;
        }
      }
      if ($this.zs_1.f() > 1) {
        var ex_0 = $this.zs_1.g(0);
        if (!(ex_0.rs_1 === 0)) {
          $this.zs_1.g3(0, new Extremum_0(0, v, !ex_0.ts_1, false));
        }
      } else {
        $this.zs_1.h3();
      }
    } else {
      $this.zs_1.h3();
    }
  }
  function getValue($this, index) {
    var inductionVariable = 1;
    var last = $this.zs_1.f();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var extremum1 = $this.zs_1.g(i - 1 | 0);
        var extremum2 = $this.zs_1.g(i);
        if (index >= extremum1.rs_1 ? index <= extremum2.rs_1 : false) {
          var dividend = (index - extremum1.rs_1 | 0) * (extremum2.ss_1 - extremum1.ss_1);
          var divisor = extremum2.rs_1 - extremum1.rs_1 | 0;
          return dividend / divisor + extremum1.ss_1;
        }
      }
       while (inductionVariable < last);
    DoubleCompanionObject_getInstance();
    return NaN;
  }
  function initiallyFill($this) {
    var initialValue;
    initialValue = $this.ws_1.calculateAt(0);
    var v = initialValue;
    var highestHigh = v;
    var lowestLow = v;
    var lowestIndex = 0;
    var highestIndex = 0;
    var currentIndex = 1;
    var found = false;
    $l$loop_0: while (currentIndex < $this.ys_1) {
      v = $this.ws_1.calculateAt(currentIndex);
      if (v > highestHigh) {
        highestHigh = v;
        highestIndex = currentIndex;
        if (highestHigh / lowestLow > 1 + $this.xs_1) {
          if (!(lowestIndex === 0)) {
            $this.zs_1.a(new Extremum_0(0, initialValue, true, false));
          }
          $this.zs_1.a(new Extremum_0(lowestIndex, lowestLow, false, true));
          found = true;
          break $l$loop_0;
        }
      }
      if (v < lowestLow) {
        lowestLow = v;
        lowestIndex = currentIndex;
        if (highestHigh / lowestLow > 1 + $this.xs_1) {
          if (!(highestIndex === 0)) {
            $this.zs_1.a(new Extremum_0(0, initialValue, false, false));
          }
          $this.zs_1.a(new Extremum_0(highestIndex, highestHigh, true, true));
          found = true;
          break $l$loop_0;
        }
      }
      var tmp0 = currentIndex;
      currentIndex = tmp0 + 1 | 0;
    }
    if (!found) {
      $this.zs_1.a(new Extremum_0(0, initialValue, v < initialValue, false));
      $this.zs_1.a(new Extremum_0(currentIndex - 1 | 0, v, v >= initialValue, false));
      return true;
    } else {
      return false;
    }
  }
  function fillExtremaUp($this) {
    var extremum = $this.zs_1.g($this.zs_1.f() - 1 | 0);
    var lastExtremum = extremum.ss_1;
    var lastExtremumIndex = extremum.rs_1;
    var uptrend = !extremum.ts_1;
    var currentIndex = lastExtremumIndex + 1 | 0;
    var v = 0.0;
    while (currentIndex < $this.ys_1) {
      v = $this.ws_1.calculateAt(currentIndex);
      if (uptrend) {
        if (v > lastExtremum) {
          lastExtremum = v;
          lastExtremumIndex = currentIndex;
        } else if (v / lastExtremum < 1 - $this.xs_1) {
          $this.zs_1.a(new Extremum_0(lastExtremumIndex, lastExtremum, uptrend, true));
          lastExtremum = v;
          lastExtremumIndex = currentIndex;
          uptrend = false;
        }
      } else {
        if (v < lastExtremum) {
          lastExtremum = v;
          lastExtremumIndex = currentIndex;
        } else if (v / lastExtremum > 1 + $this.xs_1) {
          $this.zs_1.a(new Extremum_0(lastExtremumIndex, lastExtremum, uptrend, true));
          lastExtremum = v;
          lastExtremumIndex = currentIndex;
          uptrend = true;
        }
      }
      var tmp0 = currentIndex;
      currentIndex = tmp0 + 1 | 0;
    }
    if (!(compareTo(v, lastExtremum) === 0)) {
      $this.zs_1.a(new Extremum_0(lastExtremumIndex, lastExtremum, uptrend, false));
      uptrend = !uptrend;
    }
    $this.zs_1.a(new Extremum_0(currentIndex - 1 | 0, v, uptrend, false));
  }
  function Extremum_0(index, value, isMaximum, realExtremum) {
    this.rs_1 = index;
    this.ss_1 = value;
    this.ts_1 = isMaximum;
    this.us_1 = realExtremum;
  }
  protoOf(Extremum_0).toString = function () {
    return (this.us_1 ? 'true ' : 'false ') + (this.ts_1 ? 'maximum ' : 'minimum ') + this.ss_1 + ' at ' + this.rs_1;
  };
  function ZigZagFunction(src, threshold) {
    AbstractCachingFunction.call(this);
    this.ws_1 = src;
    this.xs_1 = threshold;
    this.ys_1 = 0;
    this.zs_1 = ArrayList_init_$Create$();
  }
  protoOf(ZigZagFunction).ej = function (changes) {
    this.ys_1 = changes.ra_1;
    var removed = changes.pa_1;
    var firstChangedIndex = changes.qa_1;
    if (this.zs_1.f() > 2) {
      if (!(removed === 0)) {
        removeInvisibleExtrema(this, removed);
      }
      if (!this.zs_1.h()) {
        removeUnneededExtrema(this, firstChangedIndex);
      }
    } else {
      this.zs_1.h3();
    }
    if (this.zs_1.h()) {
      return 0;
    } else {
      var lastExtrema = this.zs_1.g(this.zs_1.f() - 1 | 0);
      return lastExtrema.rs_1 + 1 | 0;
    }
  };
  protoOf(ZigZagFunction).va = function () {
    return listOf_0(this.ws_1);
  };
  protoOf(ZigZagFunction).cj = function (index) {
    if (this.zs_1.h() ? !initiallyFill(this) : false) {
      fillExtremaUp(this);
    }
    if (this.zs_1.g(this.zs_1.f() - 1 | 0).rs_1 < index ? index < this.ys_1 : false) {
      fillExtremaUp(this);
    }
    return getValue(this, index);
  };
  defineProp(protoOf(ZigZagFunction), 'childFunctions', function () {
    return this.va();
  });
  defineProp(protoOf(ZigZagFunction), 'ownPastOffset', function () {
    return this.wa();
  });
  defineProp(protoOf(ZigZagFunction), 'prefetchSize', function () {
    return this.xa();
  });
  function calculateSetupSize($this, setupEndIndex) {
    DoubleCompanionObject_getInstance();
    var low = 1.7976931348623157E308;
    DoubleCompanionObject_getInstance();
    var high = 4.9E-324;
    var inductionVariable = setupEndIndex - numberToInt($this.ft_1) | 0;
    var last = setupEndIndex + 1 | 0;
    if (inductionVariable <= last)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp1_elvis_lhs = $this.bt_1.getTradeItem(i);
        var tmp;
        if (tmp1_elvis_lhs == null) {
          continue $l$loop;
        } else {
          tmp = tmp1_elvis_lhs;
        }
        var item = tmp;
        if (item.getHigh() > high) {
          high = item.getHigh();
        }
        if (item.getLow() < low) {
          low = item.getLow();
        }
      }
       while (!(i === last));
    return high - low;
  }
  function CountdownFunction(dataItems, setup, oppositeSetup, countdown, setupBarLength, countdownBarLength) {
    AbstractCachingFunction.call(this);
    this.bt_1 = dataItems;
    this.ct_1 = setup;
    this.dt_1 = oppositeSetup;
    this.et_1 = countdown;
    this.ft_1 = setupBarLength;
    this.gt_1 = countdownBarLength;
  }
  protoOf(CountdownFunction).va = function () {
    return listOf_0(this.ct_1);
  };
  protoOf(CountdownFunction).cj = function (index) {
    if (index < 2) {
      DoubleCompanionObject_getInstance();
      return NaN;
    }
    var currentCandle = this.bt_1.getTradeItem(index);
    var twoCandlesAgo = this.bt_1.getTradeItem(index - 2 | 0);
    if (currentCandle == null ? true : twoCandlesAgo == null) {
      DoubleCompanionObject_getInstance();
      return NaN;
    }
    var tmp0_subject = this.et_1;
    var tmp0 = tmp0_subject.s6_1;
    var tmp;
    switch (tmp0) {
      case 0:
        tmp = currentCandle.getClose() <= twoCandlesAgo.getLow();
        break;
      case 1:
        tmp = currentCandle.getClose() >= twoCandlesAgo.getHigh();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    var isCounting = tmp;
    var setupValue = this.ct_1.calculateAt(index);
    var prevValue = this.calculateAt(index - 1 | 0);
    if ((isFinite(setupValue) ? setupValue === this.ft_1 : false) ? isFinite(prevValue) : false) {
      var i = index - numberToInt(this.ft_1) | 0;
      while (!(this.ct_1.calculateAt(i) === this.ft_1)) {
        var tmp1 = i;
        i = tmp1 - 1 | 0;
      }
      var prevSetupSize = calculateSetupSize(this, i);
      var currentSetupSize = calculateSetupSize(this, index);
      if (prevSetupSize <= currentSetupSize ? currentSetupSize < 1.618 * prevSetupSize : false) {
        return isCounting ? 1.0 : -1.0;
      }
    } else if (isFinite(setupValue) ? setupValue === this.ft_1 : false) {
      return isCounting ? 1.0 : -1.0;
    }
    if (this.dt_1.calculateAt(index) === this.ft_1) {
      DoubleCompanionObject_getInstance();
      return NaN;
    }
    if (isFinite(prevValue) ? prevValue < this.gt_1 : false) {
      var tmp_0;
      if (prevValue > 0.0) {
        var tmp_1;
        if (isCounting) {
          tmp_1 = prevValue + 1.0;
        } else {
          tmp_1 = -prevValue;
        }
        tmp_0 = tmp_1;
      } else {
        var tmp_2;
        if (isCounting) {
          tmp_2 = -prevValue + 1.0;
        } else {
          tmp_2 = prevValue;
        }
        tmp_0 = tmp_2;
      }
      return tmp_0;
    }
    DoubleCompanionObject_getInstance();
    return NaN;
  };
  defineProp(protoOf(CountdownFunction), 'childFunctions', function () {
    return this.va();
  });
  defineProp(protoOf(CountdownFunction), 'ownPastOffset', function () {
    return this.wa();
  });
  defineProp(protoOf(CountdownFunction), 'prefetchSize', function () {
    return this.xa();
  });
  function PerfectCountdownFunction(dataItems, countdownFunction, countdownType, setupBarLength, countdownBarLength) {
    AbstractCachingFunction.call(this);
    this.it_1 = dataItems;
    this.jt_1 = countdownFunction;
    this.kt_1 = countdownType;
    this.lt_1 = setupBarLength;
    this.mt_1 = countdownBarLength;
  }
  protoOf(PerfectCountdownFunction).va = function () {
    return listOf_0(this.jt_1);
  };
  protoOf(PerfectCountdownFunction).cj = function (index) {
    var currentCountdown = this.jt_1.calculateAt(index);
    if (isFinite(currentCountdown) ? currentCountdown === this.mt_1 : false) {
      var i = index - 1 | 0;
      var temp = this.jt_1.calculateAt(i);
      while (!(temp === this.lt_1 - 1)) {
        var tmp0 = i;
        i = tmp0 - 1 | 0;
        temp = this.jt_1.calculateAt(i);
      }
      var currentCandle = ensureNotNull(this.it_1.getTradeItem(index));
      var countdownEightCandle = ensureNotNull(this.it_1.getTradeItem(i));
      var tmp1_subject = this.kt_1;
      var tmp0_0 = tmp1_subject.s6_1;
      var tmp;
      switch (tmp0_0) {
        case 0:
          tmp = currentCandle.getLow() >= countdownEightCandle.getClose();
          break;
        case 1:
          tmp = currentCandle.getHigh() <= countdownEightCandle.getClose();
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      var isPerfect = tmp;
      if (isPerfect)
        return 1.0;
    }
    DoubleCompanionObject_getInstance();
    return NaN;
  };
  defineProp(protoOf(PerfectCountdownFunction), 'childFunctions', function () {
    return this.va();
  });
  defineProp(protoOf(PerfectCountdownFunction), 'ownPastOffset', function () {
    return this.wa();
  });
  defineProp(protoOf(PerfectCountdownFunction), 'prefetchSize', function () {
    return this.xa();
  });
  function PerfectSetupFunction(data, setupFunction, setup, setupBarLength) {
    this.nt_1 = data;
    this.ot_1 = setupFunction;
    this.pt_1 = setup;
    this.qt_1 = setupBarLength;
  }
  protoOf(PerfectSetupFunction).calculateAt = function (index) {
    if (index < 2) {
      DoubleCompanionObject_getInstance();
      return NaN;
    }
    var currentBuySetup = this.ot_1.calculateAt(index);
    if (currentBuySetup === this.qt_1) {
      var currentCandle = this.nt_1.getTradeItem(index);
      var prevCandle = this.nt_1.getTradeItem(index - 1 | 0);
      var twoCandlesAgo = this.nt_1.getTradeItem(index - 2 | 0);
      var threeCandlesAgo = this.nt_1.getTradeItem(index - 3 | 0);
      if (((currentCandle == null ? true : twoCandlesAgo == null) ? true : prevCandle == null) ? true : threeCandlesAgo == null) {
        DoubleCompanionObject_getInstance();
        return NaN;
      }
      var tmp0_subject = this.pt_1;
      var tmp0 = tmp0_subject.s6_1;
      var tmp;
      switch (tmp0) {
        case 0:
          var tmp_0;
          if (currentCandle.getLow() <= twoCandlesAgo.getLow() ? true : prevCandle.getLow() <= threeCandlesAgo.getLow()) {
            tmp_0 = 1.0;
          } else {
            DoubleCompanionObject_getInstance();
            tmp_0 = NaN;
          }

          tmp = tmp_0;
          break;
        case 1:
          var tmp_1;
          if (currentCandle.getHigh() >= twoCandlesAgo.getHigh() ? true : prevCandle.getHigh() >= threeCandlesAgo.getHigh()) {
            tmp_1 = 1.0;
          } else {
            DoubleCompanionObject_getInstance();
            tmp_1 = NaN;
          }

          tmp = tmp_1;
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      return tmp;
    }
    DoubleCompanionObject_getInstance();
    return NaN;
  };
  protoOf(PerfectSetupFunction).va = function () {
    return listOf_0(this.ot_1);
  };
  protoOf(PerfectSetupFunction).wa = function () {
    return 0;
  };
  protoOf(PerfectSetupFunction).xa = function () {
    return 0;
  };
  protoOf(PerfectSetupFunction).d8 = function (changes) {
    var tmp$ret$0;
    // Inline function 'kotlin.comparisons.maxOf' call
    var tmp0_maxOf = this.nt_1.a8() - 1 | 0;
    tmp$ret$0 = Math.max(0, tmp0_maxOf);
    return tmp$ret$0;
  };
  protoOf(PerfectSetupFunction).dataChanged = function (changes) {
    return this.d8(changes);
  };
  defineProp(protoOf(PerfectSetupFunction), 'childFunctions', function () {
    return this.va();
  });
  defineProp(protoOf(PerfectSetupFunction), 'ownPastOffset', function () {
    return this.wa();
  });
  defineProp(protoOf(PerfectSetupFunction), 'prefetchSize', function () {
    return this.xa();
  });
  var TDBuySell_BUY_instance;
  var TDBuySell_SELL_instance;
  var TDBuySell_entriesInitialized;
  function TDBuySell_initEntries() {
    if (TDBuySell_entriesInitialized)
      return Unit_getInstance();
    TDBuySell_entriesInitialized = true;
    TDBuySell_BUY_instance = new TDBuySell('BUY', 0);
    TDBuySell_SELL_instance = new TDBuySell('SELL', 1);
  }
  function TDBuySell(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function calculate_2($this, index) {
    var di = $this.rt_1.getTradeItem(index);
    if (!(di == null) ? index > 4 : false) {
      var first = $this.rt_1.getTradeItem(index - 5 | 0);
      var second = $this.rt_1.getTradeItem(index - 4 | 0);
      var lastButOne = $this.rt_1.getTradeItem(index - 1 | 0);
      if ((first == null ? true : second == null) ? true : lastButOne === null) {
        DoubleCompanionObject_getInstance();
        return NaN;
      }
      var tmp0_subject = $this.st_1;
      var tmp0 = tmp0_subject.s6_1;
      var tmp;
      switch (tmp0) {
        case 0:
          var tmp_0;
          if (di.getClose() > second.getClose() ? lastButOne.getClose() < first.getClose() : false) {
            tmp_0 = 1.0;
          } else {
            DoubleCompanionObject_getInstance();
            tmp_0 = NaN;
          }

          tmp = tmp_0;
          break;
        case 1:
          var tmp_1;
          if (di.getClose() < second.getClose() ? lastButOne.getClose() > first.getClose() : false) {
            tmp_1 = 1.0;
          } else {
            DoubleCompanionObject_getInstance();
            tmp_1 = NaN;
          }

          tmp = tmp_1;
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      return tmp;
    }
    DoubleCompanionObject_getInstance();
    return NaN;
  }
  function PriceFlipFunction(dataItems, flip) {
    this.rt_1 = dataItems;
    this.st_1 = flip;
  }
  protoOf(PriceFlipFunction).va = function () {
    return emptyList();
  };
  protoOf(PriceFlipFunction).calculateAt = function (index) {
    return calculate_2(this, index);
  };
  protoOf(PriceFlipFunction).wa = function () {
    return 0;
  };
  protoOf(PriceFlipFunction).xa = function () {
    return 0;
  };
  protoOf(PriceFlipFunction).d8 = function (changes) {
    var tmp$ret$0;
    // Inline function 'kotlin.comparisons.maxOf' call
    var tmp0_maxOf = this.rt_1.a8() - 1 | 0;
    tmp$ret$0 = Math.max(0, tmp0_maxOf);
    return tmp$ret$0;
  };
  protoOf(PriceFlipFunction).dataChanged = function (changes) {
    return this.d8(changes);
  };
  defineProp(protoOf(PriceFlipFunction), 'childFunctions', function () {
    return this.va();
  });
  defineProp(protoOf(PriceFlipFunction), 'ownPastOffset', function () {
    return this.wa();
  });
  defineProp(protoOf(PriceFlipFunction), 'prefetchSize', function () {
    return this.xa();
  });
  function TDBuySell_BUY_getInstance() {
    TDBuySell_initEntries();
    return TDBuySell_BUY_instance;
  }
  function TDBuySell_SELL_getInstance() {
    TDBuySell_initEntries();
    return TDBuySell_SELL_instance;
  }
  function SetupFunction(dataItems, flipFunction, setup, setupBarLength) {
    AbstractCachingFunction.call(this);
    this.ut_1 = dataItems;
    this.vt_1 = flipFunction;
    this.wt_1 = setup;
    this.xt_1 = setupBarLength;
  }
  protoOf(SetupFunction).va = function () {
    return listOf_0(this.vt_1);
  };
  protoOf(SetupFunction).cj = function (index) {
    if (index < 4) {
      DoubleCompanionObject_getInstance();
      return NaN;
    }
    var currentCandle = this.ut_1.getTradeItem(index);
    var fourCandlesAgo = this.ut_1.getTradeItem(index - 4 | 0);
    if (currentCandle == null ? true : fourCandlesAgo == null) {
      DoubleCompanionObject_getInstance();
      return NaN;
    }
    var prevValue = this.calculateAt(index - 1 | 0);
    if (isFinite(prevValue) ? prevValue < this.xt_1 : false) {
      var tmp0_subject = this.wt_1;
      var tmp0 = tmp0_subject.s6_1;
      var tmp;
      switch (tmp0) {
        case 0:
          var tmp_0;
          if (currentCandle.getClose() < fourCandlesAgo.getClose()) {
            tmp_0 = prevValue + 1.0;
          } else {
            DoubleCompanionObject_getInstance();
            tmp_0 = NaN;
          }

          tmp = tmp_0;
          break;
        case 1:
          var tmp_1;
          if (currentCandle.getClose() > fourCandlesAgo.getClose()) {
            tmp_1 = prevValue + 1.0;
          } else {
            DoubleCompanionObject_getInstance();
            tmp_1 = NaN;
          }

          tmp = tmp_1;
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      var currentValue = tmp;
      if (isFinite(currentValue)) {
        return currentValue;
      }
    }
    if (isFinite(this.vt_1.calculateAt(index))) {
      return 1.0;
    }
    DoubleCompanionObject_getInstance();
    return NaN;
  };
  defineProp(protoOf(SetupFunction), 'childFunctions', function () {
    return this.va();
  });
  defineProp(protoOf(SetupFunction), 'ownPastOffset', function () {
    return this.wa();
  });
  defineProp(protoOf(SetupFunction), 'prefetchSize', function () {
    return this.xa();
  });
  var TDSupportResistance_Support_instance;
  var TDSupportResistance_Resistance_instance;
  var TDSupportResistance_entriesInitialized;
  function TDSupportResistance_initEntries() {
    if (TDSupportResistance_entriesInitialized)
      return Unit_getInstance();
    TDSupportResistance_entriesInitialized = true;
    TDSupportResistance_Support_instance = new TDSupportResistance('Support', 0);
    TDSupportResistance_Resistance_instance = new TDSupportResistance('Resistance', 1);
  }
  function TDSupportResistance(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function SupportResistanceFunction(dataItems, setup, tdst, setupBarLength) {
    AbstractCachingFunction.call(this);
    this.zt_1 = dataItems;
    this.au_1 = setup;
    this.bu_1 = tdst;
    this.cu_1 = setupBarLength;
  }
  protoOf(SupportResistanceFunction).va = function () {
    return listOf_0(this.au_1);
  };
  protoOf(SupportResistanceFunction).cj = function (index) {
    var tmp0_elvis_lhs = this.zt_1.getTradeItem(index);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      DoubleCompanionObject_getInstance();
      return NaN;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var currentCandle = tmp;
    if (this.au_1.calculateAt(index) === this.cu_1) {
      var tmp1_subject = this.bu_1;
      var tmp0 = tmp1_subject.s6_1;
      var tmp_0;
      switch (tmp0) {
        case 0:
          tmp_0 = currentCandle.getHigh();
          break;
        case 1:
          tmp_0 = currentCandle.getLow();
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      return tmp_0;
    }
    var prevValue = this.calculateAt(index - 1 | 0);
    if (isFinite(prevValue)) {
      return prevValue;
    }
    DoubleCompanionObject_getInstance();
    return NaN;
  };
  defineProp(protoOf(SupportResistanceFunction), 'childFunctions', function () {
    return this.va();
  });
  defineProp(protoOf(SupportResistanceFunction), 'ownPastOffset', function () {
    return this.wa();
  });
  defineProp(protoOf(SupportResistanceFunction), 'prefetchSize', function () {
    return this.xa();
  });
  function TDSupportResistance_Support_getInstance() {
    TDSupportResistance_initEntries();
    return TDSupportResistance_Support_instance;
  }
  function TDSupportResistance_Resistance_getInstance() {
    TDSupportResistance_initEntries();
    return TDSupportResistance_Resistance_instance;
  }
  function sam$kotlin_Comparator$0_1(function_0) {
    this.du_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0_1).h8 = function (a, b) {
    return this.du_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_1).compare = function (a, b) {
    return this.h8(a, b);
  };
  function sam$kotlin_Comparator$0_2(function_0) {
    this.eu_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0_2).h8 = function (a, b) {
    return this.eu_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_2).compare = function (a, b) {
    return this.h8(a, b);
  };
  function WilliamsFractalUtils$FRACTAL_UP_COMPARATOR$lambda(o1, o2) {
    return compareTo(o1, o2);
  }
  function WilliamsFractalUtils$FRACTAL_DOWN_COMPARATOR$lambda(o1, o2) {
    return -compareTo(o1, o2) | 0;
  }
  function WilliamsFractalUtils() {
    WilliamsFractalUtils_instance = this;
    var tmp = this;
    var tmp_0 = WilliamsFractalUtils$FRACTAL_UP_COMPARATOR$lambda;
    tmp.os_1 = new sam$kotlin_Comparator$0_1(tmp_0);
    var tmp_1 = this;
    var tmp_2 = WilliamsFractalUtils$FRACTAL_DOWN_COMPARATOR$lambda;
    tmp_1.ps_1 = new sam$kotlin_Comparator$0_2(tmp_2);
  }
  protoOf(WilliamsFractalUtils).fu = function (index, source, comparator) {
    var indexValue = source.calculateAt(index);
    if (isNaN_0(indexValue))
      return -1;
    if (index > 0) {
      var inductionVariable = index;
      if (1 <= inductionVariable)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + -1 | 0;
          var previousValue = source.calculateAt(i - 1 | 0);
          if (isNaN_0(previousValue)) {
            return -1;
          }
          var comparison = comparator.compare(previousValue, indexValue);
          if (comparison < 0) {
            return i;
          } else if (comparison > 0) {
            return -1;
          }
        }
         while (1 <= inductionVariable);
    }
    return 0;
  };
  protoOf(WilliamsFractalUtils).gu = function (index, source, comparator) {
    var indexValue = source.calculateAt(index);
    if (isNaN_0(indexValue))
      return -1;
    var i = index;
    while (true) {
      if ((i + 1 | 0) >= source.a8()) {
        return -1;
      }
      var nextValue = source.calculateAt(i + 1 | 0);
      if (isNaN_0(nextValue)) {
        return -1;
      }
      var comparison = comparator.compare(nextValue, indexValue);
      if (comparison < 0) {
        return i;
      } else if (comparison > 0) {
        return -1;
      }
      var tmp0 = i;
      i = tmp0 + 1 | 0;
    }
  };
  protoOf(WilliamsFractalUtils).hu = function (index, source, comparator, sequenceCount) {
    var indexValue = source.calculateAt(index);
    if (isNaN_0(indexValue)) {
      return -1;
    }
    var currentTipSegmentEnd = this.gu(index, source, comparator);
    if (currentTipSegmentEnd < 0) {
      return -1;
    }
    var inductionVariable = currentTipSegmentEnd;
    var last = (currentTipSegmentEnd + sequenceCount | 0) - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if ((i + 1 | 0) >= source.a8()) {
          return -1;
        }
        var nextValue = source.calculateAt(i + 1 | 0);
        if (isNaN_0(nextValue)) {
          return -1;
        }
        var comparison = comparator.compare(nextValue, indexValue);
        if (comparison === 0) {
          return i + 1 | 0;
        } else if (comparison > 0) {
          return -1;
        }
      }
       while (!(i === last));
    return -1;
  };
  protoOf(WilliamsFractalUtils).iu = function (index, source, comparator, sequenceCount) {
    var indexValue = source.calculateAt(index);
    if (isNaN_0(indexValue)) {
      return -1;
    }
    var currentTipSegmentStart = this.fu(index, source, comparator);
    if (currentTipSegmentStart < 0) {
      return -1;
    }
    var inductionVariable = currentTipSegmentStart;
    var last = (currentTipSegmentStart - sequenceCount | 0) + 1 | 0;
    if (last <= inductionVariable)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        if (i < 1)
          return -1;
        var previousValue = source.calculateAt(i - 1 | 0);
        if (isNaN_0(previousValue)) {
          return -1;
        }
        var comparison = comparator.compare(previousValue, indexValue);
        if (comparison === 0) {
          return i - 1 | 0;
        } else if (comparison > 0) {
          return -1;
        }
      }
       while (!(i === last));
    return -1;
  };
  protoOf(WilliamsFractalUtils).ju = function (index, source, comparator, sequenceCount) {
    if (index < sequenceCount) {
      return false;
    }
    var indexValue = source.calculateAt(index);
    if (isNaN_0(indexValue)) {
      return false;
    }
    var inductionVariable = index;
    var last = (index - sequenceCount | 0) + 1 | 0;
    if (last <= inductionVariable)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var previousValue = source.calculateAt(i - 1 | 0);
        if (isNaN_0(previousValue)) {
          return false;
        }
        var comparison = comparator.compare(previousValue, indexValue);
        if (comparison >= 0) {
          return false;
        }
      }
       while (!(i === last));
    return true;
  };
  protoOf(WilliamsFractalUtils).ku = function (index, source, comparator, sequenceCount) {
    var indexValue = source.calculateAt(index);
    if (isNaN_0(indexValue)) {
      return false;
    }
    var inductionVariable = index;
    var last = (index + sequenceCount | 0) - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if ((i + 1 | 0) >= source.a8()) {
          return false;
        }
        var nextValue = source.calculateAt(i + 1 | 0);
        if (isNaN_0(nextValue)) {
          return false;
        }
        var comparison = comparator.compare(nextValue, indexValue);
        if (comparison >= 0) {
          return false;
        }
      }
       while (!(i === last));
    return true;
  };
  protoOf(WilliamsFractalUtils).qs = function (index, source, comparator, sequenceCount) {
    if (index < 0)
      return false;
    var segmentEndIndex = this.gu(index, source, comparator);
    if (!(segmentEndIndex === index))
      return false;
    var segmentStart = this.fu(index, source, comparator);
    if (segmentStart < 0)
      return false;
    var firstSegmentEndIndex = index;
    var previousSegmentEndIndex = this.iu(firstSegmentEndIndex, source, comparator, sequenceCount);
    while (previousSegmentEndIndex >= 0) {
      firstSegmentEndIndex = previousSegmentEndIndex;
      previousSegmentEndIndex = this.iu(firstSegmentEndIndex, source, comparator, sequenceCount);
    }
    if (!(firstSegmentEndIndex === segmentEndIndex))
      return false;
    var firstSegmentStartIndex = this.fu(firstSegmentEndIndex, source, comparator);
    if (firstSegmentStartIndex < 0 ? true : !this.ju(firstSegmentStartIndex, source, comparator, sequenceCount))
      return false;
    var lastSegmentStartIndex = index;
    var nextSegmentStartIndex = this.hu(lastSegmentStartIndex, source, comparator, sequenceCount);
    while (nextSegmentStartIndex >= 0) {
      lastSegmentStartIndex = nextSegmentStartIndex;
      nextSegmentStartIndex = this.hu(lastSegmentStartIndex, source, comparator, sequenceCount);
    }
    var lastSegmentEndIndex = this.gu(lastSegmentStartIndex, source, comparator);
    return lastSegmentEndIndex >= 0 ? this.ku(lastSegmentEndIndex, source, comparator, sequenceCount) : false;
  };
  var WilliamsFractalUtils_instance;
  function WilliamsFractalUtils_getInstance() {
    if (WilliamsFractalUtils_instance == null)
      new WilliamsFractalUtils();
    return WilliamsFractalUtils_instance;
  }
  function epochMillis() {
    return numberToLong(Date.now());
  }
  //region block: exports
  function $jsExportAll$(_) {
    var $com = _.com || (_.com = {});
    var $com$devexperts = $com.devexperts || ($com.devexperts = {});
    var $com$devexperts$dxst = $com$devexperts.dxst || ($com$devexperts.dxst = {});
    $com$devexperts$dxst.DxStudies = DxStudies;
    var $com = _.com || (_.com = {});
    var $com$devexperts = $com.devexperts || ($com.devexperts = {});
    var $com$devexperts$dxst = $com$devexperts.dxst || ($com$devexperts.dxst = {});
    var $com$devexperts$dxst$api = $com$devexperts$dxst.api || ($com$devexperts$dxst.api = {});
    var $com = _.com || (_.com = {});
    var $com$devexperts = $com.devexperts || ($com.devexperts = {});
    var $com$devexperts$dxst = $com$devexperts.dxst || ($com$devexperts.dxst = {});
    var $com$devexperts$dxst$api = $com$devexperts$dxst.api || ($com$devexperts$dxst.api = {});
    var $com = _.com || (_.com = {});
    var $com$devexperts = $com.devexperts || ($com.devexperts = {});
    var $com$devexperts$dxst = $com$devexperts.dxst || ($com$devexperts.dxst = {});
    var $com$devexperts$dxst$api = $com$devexperts$dxst.api || ($com$devexperts$dxst.api = {});
    $com$devexperts$dxst$api.Study = Study;
    defineProp($com$devexperts$dxst$api.Study, 'Companion', Companion_getInstance_4);
    var $com = _.com || (_.com = {});
    var $com$devexperts = $com.devexperts || ($com.devexperts = {});
    var $com$devexperts$dxst = $com$devexperts.dxst || ($com$devexperts.dxst = {});
    var $com$devexperts$dxst$api = $com$devexperts$dxst.api || ($com$devexperts$dxst.api = {});
    $com$devexperts$dxst$api.StudyParam = StudyParam;
    defineProp($com$devexperts$dxst$api.StudyParam, 'Companion', Companion_getInstance_6);
    var $com = _.com || (_.com = {});
    var $com$devexperts = $com.devexperts || ($com.devexperts = {});
    var $com$devexperts$dxst = $com$devexperts.dxst || ($com$devexperts.dxst = {});
    var $com$devexperts$dxst$api = $com$devexperts$dxst.api || ($com$devexperts$dxst.api = {});
    var $com = _.com || (_.com = {});
    var $com$devexperts = $com.devexperts || ($com.devexperts = {});
    var $com$devexperts$dxst = $com$devexperts.dxst || ($com$devexperts.dxst = {});
    var $com$devexperts$dxst$api = $com$devexperts$dxst.api || ($com$devexperts$dxst.api = {});
  }
  $jsExportAll$(_);
  //endregion
  return _;
}));

//# sourceMappingURL=dxstudies.js.map
