(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'dxstudies'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'dxstudies'.");
    }
    root.dxstudies = factory(typeof dxstudies === 'undefined' ? {} : dxstudies, kotlin);
  }
}(this, function (_, Kotlin) {
  'use strict';
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var toMutableList = Kotlin.kotlin.collections.toMutableList_us0mfu$;
  var contains = Kotlin.kotlin.text.contains_li3zpu$;
  var equals = Kotlin.equals;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var sortedWith = Kotlin.kotlin.collections.sortedWith_eknfly$;
  var get_indices = Kotlin.kotlin.collections.get_indices_gzk92b$;
  var reversed = Kotlin.kotlin.ranges.reversed_zf1xzc$;
  var rangeTo = Kotlin.kotlin.ranges.rangeTo_38ydlf$;
  var kotlin_js_internal_DoubleCompanionObject = Kotlin.kotlin.js.internal.DoubleCompanionObject;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var toMutableList_0 = Kotlin.kotlin.collections.toMutableList_4c7yge$;
  var LinkedHashSet_init = Kotlin.kotlin.collections.LinkedHashSet_init_287e2$;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var Comparator = Kotlin.kotlin.Comparator;
  var equals_0 = Kotlin.kotlin.text.equals_igcy3c$;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var throwCCE = Kotlin.throwCCE;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var ensureNotNull = Kotlin.ensureNotNull;
  var toMutableSet = Kotlin.kotlin.collections.toMutableSet_7wnvza$;
  var binarySearch = Kotlin.kotlin.collections.binarySearch_vikexg$;
  var removeAll = Kotlin.kotlin.collections.removeAll_qafx1e$;
  var toSet = Kotlin.kotlin.collections.toSet_7wnvza$;
  var first = Kotlin.kotlin.collections.first_7wnvza$;
  var toString = Kotlin.toString;
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var Math_0 = Math;
  var toDoubleArray = Kotlin.kotlin.collections.toDoubleArray_tcduak$;
  var NullPointerException = Kotlin.kotlin.NullPointerException;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var listOf_0 = Kotlin.kotlin.collections.listOf_mh5how$;
  var Exception_init = Kotlin.kotlin.Exception_init_pdl1vj$;
  var mutableListOf = Kotlin.kotlin.collections.mutableListOf_i5x0yv$;
  var MutableList = Kotlin.kotlin.collections.MutableList;
  var HashMap_init = Kotlin.kotlin.collections.HashMap_init_q3lmfv$;
  var isFinite = Kotlin.kotlin.isFinite_yrwdxr$;
  var round = Kotlin.kotlin.math.round_14dthe$;
  var numberToInt = Kotlin.numberToInt;
  var isNaN_0 = Kotlin.kotlin.isNaN_yrwdxr$;
  var binarySearch_0 = Kotlin.kotlin.collections.binarySearch_sr7qim$;
  var setOf = Kotlin.kotlin.collections.setOf_mh5how$;
  var math = Kotlin.kotlin.math;
  var log = Kotlin.kotlin.math.log_lu1900$;
  var abs = Kotlin.kotlin.math.abs_za3lpa$;
  var HashMap_init_0 = Kotlin.kotlin.collections.HashMap_init_bwtc7$;
  AggregationTypeEnum.prototype = Object.create(Enum.prototype);
  AggregationTypeEnum.prototype.constructor = AggregationTypeEnum;
  AverageTypeEnum.prototype = Object.create(Enum.prototype);
  AverageTypeEnum.prototype.constructor = AverageTypeEnum;
  CandleTradeDataHolder.prototype = Object.create(AbstractCandleTradeDataHolder.prototype);
  CandleTradeDataHolder.prototype.constructor = CandleTradeDataHolder;
  CandleDataStore.prototype = Object.create(CandleTradeDataHolder.prototype);
  CandleDataStore.prototype.constructor = CandleDataStore;
  PriceFieldEnum.prototype = Object.create(Enum.prototype);
  PriceFieldEnum.prototype.constructor = PriceFieldEnum;
  ADX.prototype = Object.create(StudyBuilder.prototype);
  ADX.prototype.constructor = ADX;
  ADXR.prototype = Object.create(StudyBuilder.prototype);
  ADXR.prototype.constructor = ADXR;
  AccelerationDeceleration.prototype = Object.create(StudyBuilder.prototype);
  AccelerationDeceleration.prototype.constructor = AccelerationDeceleration;
  AccumulationDistribution.prototype = Object.create(StudyBuilder.prototype);
  AccumulationDistribution.prototype.constructor = AccumulationDistribution;
  Aroon.prototype = Object.create(StudyBuilder.prototype);
  Aroon.prototype.constructor = Aroon;
  AroonOscillator.prototype = Object.create(StudyBuilder.prototype);
  AroonOscillator.prototype.constructor = AroonOscillator;
  AverageTrueRange.prototype = Object.create(StudyBuilder.prototype);
  AverageTrueRange.prototype.constructor = AverageTrueRange;
  AwesomeOscillator.prototype = Object.create(StudyBuilder.prototype);
  AwesomeOscillator.prototype.constructor = AwesomeOscillator;
  BollingerBands.prototype = Object.create(StudyBuilder.prototype);
  BollingerBands.prototype.constructor = BollingerBands;
  CCI.prototype = Object.create(StudyBuilder.prototype);
  CCI.prototype.constructor = CCI;
  CenterOfGravityOscillator.prototype = Object.create(StudyBuilder.prototype);
  CenterOfGravityOscillator.prototype.constructor = CenterOfGravityOscillator;
  ChaikinOscillator.prototype = Object.create(StudyBuilder.prototype);
  ChaikinOscillator.prototype.constructor = ChaikinOscillator;
  ChaikinVolatility.prototype = Object.create(StudyBuilder.prototype);
  ChaikinVolatility.prototype.constructor = ChaikinVolatility;
  ChandeMomentumOscillator.prototype = Object.create(StudyBuilder.prototype);
  ChandeMomentumOscillator.prototype.constructor = ChandeMomentumOscillator;
  CommoditySelection.prototype = Object.create(StudyBuilder.prototype);
  CommoditySelection.prototype.constructor = CommoditySelection;
  Comparative.prototype = Object.create(StudyBuilder.prototype);
  Comparative.prototype.constructor = Comparative;
  DEMA.prototype = Object.create(StudyBuilder.prototype);
  DEMA.prototype.constructor = DEMA;
  DMI.prototype = Object.create(StudyBuilder.prototype);
  DMI.prototype.constructor = DMI;
  DayOpenClose.prototype = Object.create(StudyBuilder.prototype);
  DayOpenClose.prototype.constructor = DayOpenClose;
  DeMarker.prototype = Object.create(StudyBuilder.prototype);
  DeMarker.prototype.constructor = DeMarker;
  DetrendedPriceOsc.prototype = Object.create(StudyBuilder.prototype);
  DetrendedPriceOsc.prototype.constructor = DetrendedPriceOsc;
  DynamicMomentumIndex.prototype = Object.create(StudyBuilder.prototype);
  DynamicMomentumIndex.prototype.constructor = DynamicMomentumIndex;
  EMA.prototype = Object.create(StudyBuilder.prototype);
  EMA.prototype.constructor = EMA;
  Elder.prototype = Object.create(StudyBuilder.prototype);
  Elder.prototype.constructor = Elder;
  EnvelopeCommon.prototype = Object.create(StudyBuilder.prototype);
  EnvelopeCommon.prototype.constructor = EnvelopeCommon;
  EnvelopeEMA.prototype = Object.create(EnvelopeCommon.prototype);
  EnvelopeEMA.prototype.constructor = EnvelopeEMA;
  EnvelopeSMA.prototype = Object.create(EnvelopeCommon.prototype);
  EnvelopeSMA.prototype.constructor = EnvelopeSMA;
  EnvelopeSMMA.prototype = Object.create(EnvelopeCommon.prototype);
  EnvelopeSMMA.prototype.constructor = EnvelopeSMMA;
  EnvelopeWMA.prototype = Object.create(EnvelopeCommon.prototype);
  EnvelopeWMA.prototype.constructor = EnvelopeWMA;
  FastStochastic.prototype = Object.create(StudyBuilder.prototype);
  FastStochastic.prototype.constructor = FastStochastic;
  FibonacciBollingerBands.prototype = Object.create(StudyBuilder.prototype);
  FibonacciBollingerBands.prototype.constructor = FibonacciBollingerBands;
  ForceIndex.prototype = Object.create(StudyBuilder.prototype);
  ForceIndex.prototype.constructor = ForceIndex;
  ForecastOscillator.prototype = Object.create(StudyBuilder.prototype);
  ForecastOscillator.prototype.constructor = ForecastOscillator;
  FullStochastic.prototype = Object.create(StudyBuilder.prototype);
  FullStochastic.prototype.constructor = FullStochastic;
  GTRAP.prototype = Object.create(StudyBuilder.prototype);
  GTRAP.prototype.constructor = GTRAP;
  WilliamsAlligator.prototype = Object.create(StudyBuilder.prototype);
  WilliamsAlligator.prototype.constructor = WilliamsAlligator;
  GatorOscillator.prototype = Object.create(WilliamsAlligator.prototype);
  GatorOscillator.prototype.constructor = GatorOscillator;
  HLVolatility.prototype = Object.create(StudyBuilder.prototype);
  HLVolatility.prototype.constructor = HLVolatility;
  Ichimoku.prototype = Object.create(StudyBuilder.prototype);
  Ichimoku.prototype.constructor = Ichimoku;
  ImpliedVolatility.prototype = Object.create(StudyBuilder.prototype);
  ImpliedVolatility.prototype.constructor = ImpliedVolatility;
  ImpliedVolatilityGauge.prototype = Object.create(StudyBuilder.prototype);
  ImpliedVolatilityGauge.prototype.constructor = ImpliedVolatilityGauge;
  Inertia.prototype = Object.create(StudyBuilder.prototype);
  Inertia.prototype.constructor = Inertia;
  IntradayMomentumIndex.prototype = Object.create(StudyBuilder.prototype);
  IntradayMomentumIndex.prototype.constructor = IntradayMomentumIndex;
  KRI.prototype = Object.create(StudyBuilder.prototype);
  KRI.prototype.constructor = KRI;
  KaufmanMovingAverage.prototype = Object.create(StudyBuilder.prototype);
  KaufmanMovingAverage.prototype.constructor = KaufmanMovingAverage;
  KeltnerChannels.prototype = Object.create(StudyBuilder.prototype);
  KeltnerChannels.prototype.constructor = KeltnerChannels;
  LinearRegression.prototype = Object.create(StudyBuilder.prototype);
  LinearRegression.prototype.constructor = LinearRegression;
  LinearRegressionChannel.prototype = Object.create(StudyBuilder.prototype);
  LinearRegressionChannel.prototype.constructor = LinearRegressionChannel;
  LinearRegressionSlope.prototype = Object.create(StudyBuilder.prototype);
  LinearRegressionSlope.prototype.constructor = LinearRegressionSlope;
  MACD.prototype = Object.create(StudyBuilder.prototype);
  MACD.prototype.constructor = MACD;
  MarketFacilitationIndex.prototype = Object.create(StudyBuilder.prototype);
  MarketFacilitationIndex.prototype.constructor = MarketFacilitationIndex;
  MassIndex.prototype = Object.create(StudyBuilder.prototype);
  MassIndex.prototype.constructor = MassIndex;
  MedianPrice.prototype = Object.create(StudyBuilder.prototype);
  MedianPrice.prototype.constructor = MedianPrice;
  Momentum.prototype = Object.create(StudyBuilder.prototype);
  Momentum.prototype.constructor = Momentum;
  MoneyFlowIndex.prototype = Object.create(StudyBuilder.prototype);
  MoneyFlowIndex.prototype.constructor = MoneyFlowIndex;
  NegativeVolumeIndex.prototype = Object.create(StudyBuilder.prototype);
  NegativeVolumeIndex.prototype.constructor = NegativeVolumeIndex;
  OnBalanceVolume.prototype = Object.create(StudyBuilder.prototype);
  OnBalanceVolume.prototype.constructor = OnBalanceVolume;
  Oscillator.prototype = Object.create(StudyBuilder.prototype);
  Oscillator.prototype.constructor = Oscillator;
  ParabolicSAR.prototype = Object.create(StudyBuilder.prototype);
  ParabolicSAR.prototype.constructor = ParabolicSAR;
  PercentChange.prototype = Object.create(StudyBuilder.prototype);
  PercentChange.prototype.constructor = PercentChange;
  PercentOfResistance.prototype = Object.create(StudyBuilder.prototype);
  PercentOfResistance.prototype.constructor = PercentOfResistance;
  PercentagePriceOscillator.prototype = Object.create(StudyBuilder.prototype);
  PercentagePriceOscillator.prototype.constructor = PercentagePriceOscillator;
  PivotPoints.prototype = Object.create(StudyBuilder.prototype);
  PivotPoints.prototype.constructor = PivotPoints;
  PriceChannel.prototype = Object.create(StudyBuilder.prototype);
  PriceChannel.prototype.constructor = PriceChannel;
  PriceOscillator.prototype = Object.create(StudyBuilder.prototype);
  PriceOscillator.prototype.constructor = PriceOscillator;
  PriceVolumeTrend.prototype = Object.create(StudyBuilder.prototype);
  PriceVolumeTrend.prototype.constructor = PriceVolumeTrend;
  ROC.prototype = Object.create(StudyBuilder.prototype);
  ROC.prototype.constructor = ROC;
  RankCorrelationIndex.prototype = Object.create(StudyBuilder.prototype);
  RankCorrelationIndex.prototype.constructor = RankCorrelationIndex;
  RelativeStrengthIndex.prototype = Object.create(StudyBuilder.prototype);
  RelativeStrengthIndex.prototype.constructor = RelativeStrengthIndex;
  RelativeVigorIndex.prototype = Object.create(StudyBuilder.prototype);
  RelativeVigorIndex.prototype.constructor = RelativeVigorIndex;
  RelativeVigorIndexSMA.prototype = Object.create(StudyBuilder.prototype);
  RelativeVigorIndexSMA.prototype.constructor = RelativeVigorIndexSMA;
  RelativeVolatilityIndex.prototype = Object.create(StudyBuilder.prototype);
  RelativeVolatilityIndex.prototype.constructor = RelativeVolatilityIndex;
  SMA.prototype = Object.create(StudyBuilder.prototype);
  SMA.prototype.constructor = SMA;
  SMMA.prototype = Object.create(StudyBuilder.prototype);
  SMMA.prototype.constructor = SMMA;
  SROC.prototype = Object.create(StudyBuilder.prototype);
  SROC.prototype.constructor = SROC;
  STARCBands.prototype = Object.create(StudyBuilder.prototype);
  STARCBands.prototype.constructor = STARCBands;
  SchaffTrendCycle.prototype = Object.create(StudyBuilder.prototype);
  SchaffTrendCycle.prototype.constructor = SchaffTrendCycle;
  SlowStochastic.prototype = Object.create(StudyBuilder.prototype);
  SlowStochastic.prototype.constructor = SlowStochastic;
  StandardDeviation.prototype = Object.create(StudyBuilder.prototype);
  StandardDeviation.prototype.constructor = StandardDeviation;
  StandardDeviationChannel.prototype = Object.create(StudyBuilder.prototype);
  StandardDeviationChannel.prototype.constructor = StandardDeviationChannel;
  StandardErrorBands.prototype = Object.create(StudyBuilder.prototype);
  StandardErrorBands.prototype.constructor = StandardErrorBands;
  StdDevVolatility.prototype = Object.create(StudyBuilder.prototype);
  StdDevVolatility.prototype.constructor = StdDevVolatility;
  StudyBuilderFactory.prototype = Object.create(Enum.prototype);
  StudyBuilderFactory.prototype.constructor = StudyBuilderFactory;
  SwingAccumulation.prototype = Object.create(StudyBuilder.prototype);
  SwingAccumulation.prototype.constructor = SwingAccumulation;
  SwingIndex$PriceValue.prototype = Object.create(Enum.prototype);
  SwingIndex$PriceValue.prototype.constructor = SwingIndex$PriceValue;
  SwingIndex.prototype = Object.create(StudyBuilder.prototype);
  SwingIndex.prototype.constructor = SwingIndex;
  TDSequential.prototype = Object.create(StudyBuilder.prototype);
  TDSequential.prototype.constructor = TDSequential;
  TEMA.prototype = Object.create(StudyBuilder.prototype);
  TEMA.prototype.constructor = TEMA;
  TMA.prototype = Object.create(StudyBuilder.prototype);
  TMA.prototype.constructor = TMA;
  TimeSeriesForecast.prototype = Object.create(StudyBuilder.prototype);
  TimeSeriesForecast.prototype.constructor = TimeSeriesForecast;
  TripleEMA.prototype = Object.create(StudyBuilder.prototype);
  TripleEMA.prototype.constructor = TripleEMA;
  TrueStrengthIndex.prototype = Object.create(StudyBuilder.prototype);
  TrueStrengthIndex.prototype.constructor = TrueStrengthIndex;
  TypicalPrice.prototype = Object.create(StudyBuilder.prototype);
  TypicalPrice.prototype.constructor = TypicalPrice;
  UltimateOscillator.prototype = Object.create(StudyBuilder.prototype);
  UltimateOscillator.prototype.constructor = UltimateOscillator;
  VWAP.prototype = Object.create(StudyBuilder.prototype);
  VWAP.prototype.constructor = VWAP;
  VerticalHorizontalFilter.prototype = Object.create(StudyBuilder.prototype);
  VerticalHorizontalFilter.prototype.constructor = VerticalHorizontalFilter;
  WMA.prototype = Object.create(StudyBuilder.prototype);
  WMA.prototype.constructor = WMA;
  WaveTrend.prototype = Object.create(StudyBuilder.prototype);
  WaveTrend.prototype.constructor = WaveTrend;
  WaveTrendWithCrosses.prototype = Object.create(StudyBuilder.prototype);
  WaveTrendWithCrosses.prototype.constructor = WaveTrendWithCrosses;
  WeightedClose.prototype = Object.create(StudyBuilder.prototype);
  WeightedClose.prototype.constructor = WeightedClose;
  WildersSmoothing.prototype = Object.create(StudyBuilder.prototype);
  WildersSmoothing.prototype.constructor = WildersSmoothing;
  WilliamsAD.prototype = Object.create(StudyBuilder.prototype);
  WilliamsAD.prototype.constructor = WilliamsAD;
  WilliamsFractal.prototype = Object.create(StudyBuilder.prototype);
  WilliamsFractal.prototype.constructor = WilliamsFractal;
  WilliamsPercentRange.prototype = Object.create(StudyBuilder.prototype);
  WilliamsPercentRange.prototype.constructor = WilliamsPercentRange;
  ZigZag.prototype = Object.create(StudyBuilder.prototype);
  ZigZag.prototype.constructor = ZigZag;
  AbsFunctionStudy.prototype = Object.create(StudyBuilder.prototype);
  AbsFunctionStudy.prototype.constructor = AbsFunctionStudy;
  ArithmeticFunctionStudy.prototype = Object.create(StudyBuilder.prototype);
  ArithmeticFunctionStudy.prototype.constructor = ArithmeticFunctionStudy;
  BuyingPressureStudy.prototype = Object.create(StudyBuilder.prototype);
  BuyingPressureStudy.prototype.constructor = BuyingPressureStudy;
  CloseLocationValueFunctionStudy.prototype = Object.create(StudyBuilder.prototype);
  CloseLocationValueFunctionStudy.prototype.constructor = CloseLocationValueFunctionStudy;
  CumulativeSumFunctionStudy.prototype = Object.create(StudyBuilder.prototype);
  CumulativeSumFunctionStudy.prototype.constructor = CumulativeSumFunctionStudy;
  DiffDivPrevFunctionStudy.prototype = Object.create(StudyBuilder.prototype);
  DiffDivPrevFunctionStudy.prototype.constructor = DiffDivPrevFunctionStudy;
  DiffPrevFunctionStudy.prototype = Object.create(StudyBuilder.prototype);
  DiffPrevFunctionStudy.prototype.constructor = DiffPrevFunctionStudy;
  DirectionalIndexFunctionStudy.prototype = Object.create(StudyBuilder.prototype);
  DirectionalIndexFunctionStudy.prototype.constructor = DirectionalIndexFunctionStudy;
  DirectionalMovementFunctionStudy.prototype = Object.create(StudyBuilder.prototype);
  DirectionalMovementFunctionStudy.prototype.constructor = DirectionalMovementFunctionStudy;
  DisplacementFunctionStudy.prototype = Object.create(StudyBuilder.prototype);
  DisplacementFunctionStudy.prototype.constructor = DisplacementFunctionStudy;
  DorseyTrendFunctionStudy.prototype = Object.create(StudyBuilder.prototype);
  DorseyTrendFunctionStudy.prototype.constructor = DorseyTrendFunctionStudy;
  DynamicMomentumIndexDynamicLength$DynamicMomentumIndexDynamicLengthFunction.prototype = Object.create(AbstractCachingFunction.prototype);
  DynamicMomentumIndexDynamicLength$DynamicMomentumIndexDynamicLengthFunction.prototype.constructor = DynamicMomentumIndexDynamicLength$DynamicMomentumIndexDynamicLengthFunction;
  DynamicMomentumIndexDynamicLength.prototype = Object.create(StudyBuilder.prototype);
  DynamicMomentumIndexDynamicLength.prototype.constructor = DynamicMomentumIndexDynamicLength;
  FullRangeStandardDeviationFunctionStudy.prototype = Object.create(StudyBuilder.prototype);
  FullRangeStandardDeviationFunctionStudy.prototype.constructor = FullRangeStandardDeviationFunctionStudy;
  HighestAllFunctionStudy.prototype = Object.create(StudyBuilder.prototype);
  HighestAllFunctionStudy.prototype.constructor = HighestAllFunctionStudy;
  HighestFunctionStudy.prototype = Object.create(StudyBuilder.prototype);
  HighestFunctionStudy.prototype.constructor = HighestFunctionStudy;
  HighestHighPeriodStudy.prototype = Object.create(StudyBuilder.prototype);
  HighestHighPeriodStudy.prototype.constructor = HighestHighPeriodStudy;
  IntradaySumFunctionStudy.prototype = Object.create(StudyBuilder.prototype);
  IntradaySumFunctionStudy.prototype.constructor = IntradaySumFunctionStudy;
  LinearDeviationFunctionStudy.prototype = Object.create(StudyBuilder.prototype);
  LinearDeviationFunctionStudy.prototype.constructor = LinearDeviationFunctionStudy;
  LinearRegressionCurveFunctionStudy.prototype = Object.create(StudyBuilder.prototype);
  LinearRegressionCurveFunctionStudy.prototype.constructor = LinearRegressionCurveFunctionStudy;
  LnDivPrevFunctionStudy.prototype = Object.create(StudyBuilder.prototype);
  LnDivPrevFunctionStudy.prototype.constructor = LnDivPrevFunctionStudy;
  LogarithmFunctionStudy.prototype = Object.create(StudyBuilder.prototype);
  LogarithmFunctionStudy.prototype.constructor = LogarithmFunctionStudy;
  LowestFunctionStudy.prototype = Object.create(StudyBuilder.prototype);
  LowestFunctionStudy.prototype.constructor = LowestFunctionStudy;
  LowestLowPeriodStudy.prototype = Object.create(StudyBuilder.prototype);
  LowestLowPeriodStudy.prototype.constructor = LowestLowPeriodStudy;
  MaxValueFunctionStudy.prototype = Object.create(StudyBuilder.prototype);
  MaxValueFunctionStudy.prototype.constructor = MaxValueFunctionStudy;
  MinValueFunctionStudy.prototype = Object.create(StudyBuilder.prototype);
  MinValueFunctionStudy.prototype.constructor = MinValueFunctionStudy;
  MoneyFlowFunctionStudy.prototype = Object.create(StudyBuilder.prototype);
  MoneyFlowFunctionStudy.prototype.constructor = MoneyFlowFunctionStudy;
  MovingAverageExponentialStudy.prototype = Object.create(StudyBuilder.prototype);
  MovingAverageExponentialStudy.prototype.constructor = MovingAverageExponentialStudy;
  MovingAverageSimpleStudy.prototype = Object.create(StudyBuilder.prototype);
  MovingAverageSimpleStudy.prototype.constructor = MovingAverageSimpleStudy;
  MovingAverageSmoothedStudy.prototype = Object.create(StudyBuilder.prototype);
  MovingAverageSmoothedStudy.prototype.constructor = MovingAverageSmoothedStudy;
  MovingAverageWeightedStudy.prototype = Object.create(StudyBuilder.prototype);
  MovingAverageWeightedStudy.prototype.constructor = MovingAverageWeightedStudy;
  NegativeVolumeIndexFunctionStudy.prototype = Object.create(StudyBuilder.prototype);
  NegativeVolumeIndexFunctionStudy.prototype.constructor = NegativeVolumeIndexFunctionStudy;
  PriceAggregationSourceFunctionStudy.prototype = Object.create(StudyBuilder.prototype);
  PriceAggregationSourceFunctionStudy.prototype.constructor = PriceAggregationSourceFunctionStudy;
  PriceSourceFunctionStudy.prototype = Object.create(StudyBuilder.prototype);
  PriceSourceFunctionStudy.prototype.constructor = PriceSourceFunctionStudy;
  RelativeVolatilityFunctionStudy.prototype = Object.create(StudyBuilder.prototype);
  RelativeVolatilityFunctionStudy.prototype.constructor = RelativeVolatilityFunctionStudy;
  SignFunctionStudy.prototype = Object.create(StudyBuilder.prototype);
  SignFunctionStudy.prototype.constructor = SignFunctionStudy;
  SimpleWeightedSumFunctionStudy.prototype = Object.create(StudyBuilder.prototype);
  SimpleWeightedSumFunctionStudy.prototype.constructor = SimpleWeightedSumFunctionStudy;
  StandardDeviationFunctionStudy.prototype = Object.create(StudyBuilder.prototype);
  StandardDeviationFunctionStudy.prototype.constructor = StandardDeviationFunctionStudy;
  StandardErrorOfEstimationFunctionStudy.prototype = Object.create(StudyBuilder.prototype);
  StandardErrorOfEstimationFunctionStudy.prototype.constructor = StandardErrorOfEstimationFunctionStudy;
  SumFunctionStudy.prototype = Object.create(StudyBuilder.prototype);
  SumFunctionStudy.prototype.constructor = SumFunctionStudy;
  TrueRangeFunctionStudy.prototype = Object.create(StudyBuilder.prototype);
  TrueRangeFunctionStudy.prototype.constructor = TrueRangeFunctionStudy;
  WildersAverageStudy.prototype = Object.create(StudyBuilder.prototype);
  WildersAverageStudy.prototype.constructor = WildersAverageStudy;
  WindowFunctionStudy.prototype = Object.create(StudyBuilder.prototype);
  WindowFunctionStudy.prototype.constructor = WindowFunctionStudy;
  LinearRegressionFunctionStudy.prototype = Object.create(StudyBuilder.prototype);
  LinearRegressionFunctionStudy.prototype.constructor = LinearRegressionFunctionStudy;
  ParabolicSarFunctionStudy.prototype = Object.create(StudyBuilder.prototype);
  ParabolicSarFunctionStudy.prototype.constructor = ParabolicSarFunctionStudy;
  SpearmansRhoStudy.prototype = Object.create(StudyBuilder.prototype);
  SpearmansRhoStudy.prototype.constructor = SpearmansRhoStudy;
  SwingIndexRatioStudy.prototype = Object.create(StudyBuilder.prototype);
  SwingIndexRatioStudy.prototype.constructor = SwingIndexRatioStudy;
  ZigZagFunctionStudy.prototype = Object.create(StudyBuilder.prototype);
  ZigZagFunctionStudy.prototype.constructor = ZigZagFunctionStudy;
  AbsFunction.prototype = Object.create(AbstractCachingFunction.prototype);
  AbsFunction.prototype.constructor = AbsFunction;
  ArithmeticOperation.prototype = Object.create(Enum.prototype);
  ArithmeticOperation.prototype.constructor = ArithmeticOperation;
  BuyingPressure.prototype = Object.create(AbstractCachingFunction.prototype);
  BuyingPressure.prototype.constructor = BuyingPressure;
  CloseLocationValueFunction.prototype = Object.create(AbstractCachingFunction.prototype);
  CloseLocationValueFunction.prototype.constructor = CloseLocationValueFunction;
  CumulativeSumFunction.prototype = Object.create(AbstractCachingFunction.prototype);
  CumulativeSumFunction.prototype.constructor = CumulativeSumFunction;
  CumulativeSumWithinSessionFunction.prototype = Object.create(AbstractCachingFunction.prototype);
  CumulativeSumWithinSessionFunction.prototype.constructor = CumulativeSumWithinSessionFunction;
  DiffDivPrevFunction.prototype = Object.create(AbstractCachingFunction.prototype);
  DiffDivPrevFunction.prototype.constructor = DiffDivPrevFunction;
  DiffPrevFunction.prototype = Object.create(AbstractCachingFunction.prototype);
  DiffPrevFunction.prototype.constructor = DiffPrevFunction;
  DirectionalIndexFunction.prototype = Object.create(AbstractCachingFunction.prototype);
  DirectionalIndexFunction.prototype.constructor = DirectionalIndexFunction;
  DirectionalMovementFunction.prototype = Object.create(AbstractCachingFunction.prototype);
  DirectionalMovementFunction.prototype.constructor = DirectionalMovementFunction;
  DorseyTrendFunction$Trend.prototype = Object.create(Enum.prototype);
  DorseyTrendFunction$Trend.prototype.constructor = DorseyTrendFunction$Trend;
  DorseyTrendFunction.prototype = Object.create(AbstractCachingFunction.prototype);
  DorseyTrendFunction.prototype.constructor = DorseyTrendFunction;
  Equals.prototype = Object.create(AbstractCachingFunction.prototype);
  Equals.prototype.constructor = Equals;
  Floor.prototype = Object.create(AbstractCachingFunction.prototype);
  Floor.prototype.constructor = Floor;
  BackRangeDependentFunction.prototype = Object.create(AbstractCachingFunction.prototype);
  BackRangeDependentFunction.prototype.constructor = BackRangeDependentFunction;
  StandardDeviationFunction.prototype = Object.create(BackRangeDependentFunction.prototype);
  StandardDeviationFunction.prototype.constructor = StandardDeviationFunction;
  FullRangeStandardDeviationFunction.prototype = Object.create(StandardDeviationFunction.prototype);
  FullRangeStandardDeviationFunction.prototype.constructor = FullRangeStandardDeviationFunction;
  HighestFunction.prototype = Object.create(BackRangeDependentFunction.prototype);
  HighestFunction.prototype.constructor = HighestFunction;
  HighestAllFunction.prototype = Object.create(HighestFunction.prototype);
  HighestAllFunction.prototype.constructor = HighestAllFunction;
  HighestHighPeriod.prototype = Object.create(BackRangeDependentFunction.prototype);
  HighestHighPeriod.prototype.constructor = HighestHighPeriod;
  IfFunction.prototype = Object.create(AbstractCachingFunction.prototype);
  IfFunction.prototype.constructor = IfFunction;
  IntradaySumFunction.prototype = Object.create(BackRangeDependentFunction.prototype);
  IntradaySumFunction.prototype.constructor = IntradaySumFunction;
  LinearDeviationFunction.prototype = Object.create(BackRangeDependentFunction.prototype);
  LinearDeviationFunction.prototype.constructor = LinearDeviationFunction;
  LinearRegressionCurveFunction.prototype = Object.create(BackRangeDependentFunction.prototype);
  LinearRegressionCurveFunction.prototype.constructor = LinearRegressionCurveFunction;
  LnDivPrevFunction.prototype = Object.create(AbstractCachingFunction.prototype);
  LnDivPrevFunction.prototype.constructor = LnDivPrevFunction;
  LogarithmFunction.prototype = Object.create(AbstractCachingFunction.prototype);
  LogarithmFunction.prototype.constructor = LogarithmFunction;
  LowestFunction.prototype = Object.create(BackRangeDependentFunction.prototype);
  LowestFunction.prototype.constructor = LowestFunction;
  LowestLowPeriod.prototype = Object.create(BackRangeDependentFunction.prototype);
  LowestLowPeriod.prototype.constructor = LowestLowPeriod;
  MaxValueFunction.prototype = Object.create(AbstractCachingFunction.prototype);
  MaxValueFunction.prototype.constructor = MaxValueFunction;
  MinValueFunction.prototype = Object.create(AbstractCachingFunction.prototype);
  MinValueFunction.prototype.constructor = MinValueFunction;
  MoneyFlowFunction.prototype = Object.create(AbstractCachingFunction.prototype);
  MoneyFlowFunction.prototype.constructor = MoneyFlowFunction;
  MovingAverageExponential.prototype = Object.create(AbstractCachingFunction.prototype);
  MovingAverageExponential.prototype.constructor = MovingAverageExponential;
  MovingAverageSimple.prototype = Object.create(BackRangeDependentFunction.prototype);
  MovingAverageSimple.prototype.constructor = MovingAverageSimple;
  MovingAverageSmoothed.prototype = Object.create(AbstractCachingFunction.prototype);
  MovingAverageSmoothed.prototype.constructor = MovingAverageSmoothed;
  MovingAverageWeighted.prototype = Object.create(BackRangeDependentFunction.prototype);
  MovingAverageWeighted.prototype.constructor = MovingAverageWeighted;
  NegativeVolumeIndexFunction.prototype = Object.create(AbstractCachingFunction.prototype);
  NegativeVolumeIndexFunction.prototype.constructor = NegativeVolumeIndexFunction;
  NotZero.prototype = Object.create(AbstractCachingFunction.prototype);
  NotZero.prototype.constructor = NotZero;
  RelativeVolatilityFunction.prototype = Object.create(AbstractCachingFunction.prototype);
  RelativeVolatilityFunction.prototype.constructor = RelativeVolatilityFunction;
  SessionSet.prototype = Object.create(Enum.prototype);
  SessionSet.prototype.constructor = SessionSet;
  SignFunction.prototype = Object.create(AbstractCachingFunction.prototype);
  SignFunction.prototype.constructor = SignFunction;
  SimpleWeightedSumFunction.prototype = Object.create(BackRangeDependentFunction.prototype);
  SimpleWeightedSumFunction.prototype.constructor = SimpleWeightedSumFunction;
  StandardErrorOfEstimationFunction.prototype = Object.create(BackRangeDependentFunction.prototype);
  StandardErrorOfEstimationFunction.prototype.constructor = StandardErrorOfEstimationFunction;
  SumFunction.prototype = Object.create(BackRangeDependentFunction.prototype);
  SumFunction.prototype.constructor = SumFunction;
  TrueRangeFunction.prototype = Object.create(AbstractCachingFunction.prototype);
  TrueRangeFunction.prototype.constructor = TrueRangeFunction;
  WildersAverage.prototype = Object.create(AbstractCachingFunction.prototype);
  WildersAverage.prototype.constructor = WildersAverage;
  ZeroFunction.prototype = Object.create(ConstantFunction.prototype);
  ZeroFunction.prototype.constructor = ZeroFunction;
  DynamicMomentumIndexFunction.prototype = Object.create(AbstractCachingFunction.prototype);
  DynamicMomentumIndexFunction.prototype.constructor = DynamicMomentumIndexFunction;
  FractalOperation.prototype = Object.create(Enum.prototype);
  FractalOperation.prototype.constructor = FractalOperation;
  KaufmanNamaFunction.prototype = Object.create(AbstractCachingFunction.prototype);
  KaufmanNamaFunction.prototype.constructor = KaufmanNamaFunction;
  LinearRegressionFunction.prototype = Object.create(AbstractCachingFunction.prototype);
  LinearRegressionFunction.prototype.constructor = LinearRegressionFunction;
  ParabolicSarFunction.prototype = Object.create(AbstractCachingFunction.prototype);
  ParabolicSarFunction.prototype.constructor = ParabolicSarFunction;
  SchaffTrendFrac.prototype = Object.create(AbstractCachingFunction.prototype);
  SchaffTrendFrac.prototype.constructor = SchaffTrendFrac;
  SpearmansRho.prototype = Object.create(BackRangeDependentFunction.prototype);
  SpearmansRho.prototype.constructor = SpearmansRho;
  SwingIndexRatio.prototype = Object.create(AbstractCachingFunction.prototype);
  SwingIndexRatio.prototype.constructor = SwingIndexRatio;
  WilliamsADFunction.prototype = Object.create(AbstractCachingFunction.prototype);
  WilliamsADFunction.prototype.constructor = WilliamsADFunction;
  WilliamsFractalFilter.prototype = Object.create(AbstractCachingFunction.prototype);
  WilliamsFractalFilter.prototype.constructor = WilliamsFractalFilter;
  ZigZagFunction.prototype = Object.create(AbstractCachingFunction.prototype);
  ZigZagFunction.prototype.constructor = ZigZagFunction;
  CountdownFunction.prototype = Object.create(AbstractCachingFunction.prototype);
  CountdownFunction.prototype.constructor = CountdownFunction;
  PerfectCountdownFunction.prototype = Object.create(AbstractCachingFunction.prototype);
  PerfectCountdownFunction.prototype.constructor = PerfectCountdownFunction;
  TDBuySell.prototype = Object.create(Enum.prototype);
  TDBuySell.prototype.constructor = TDBuySell;
  SetupFunction.prototype = Object.create(AbstractCachingFunction.prototype);
  SetupFunction.prototype.constructor = SetupFunction;
  TDSupportResistance.prototype = Object.create(Enum.prototype);
  TDSupportResistance.prototype.constructor = TDSupportResistance;
  SupportResistanceFunction.prototype = Object.create(AbstractCachingFunction.prototype);
  SupportResistanceFunction.prototype.constructor = SupportResistanceFunction;
  function DxStudies(maxElements, candles) {
    this.dataHolder = null;
    var timeCandles = this.mutableList_0(candles.slice());
    this.dataHolder = new CandleDataStore(maxElements, timeCandles);
  }
  DxStudies.prototype.createStudy = function (id, params) {
    this.updateStudyParams_0(params);
    var create = Study$Companion_getInstance().create(id, this.dataHolder, params);
    this.dataHolder.addChangeListener(create);
    if (this.dataHolder.dataLength !== 0) {
      create.dataChanged(new Changes(0, 0, this.dataHolder.dataLength));
    }
    return create;
  };
  DxStudies.prototype.addCandleItem = function (item) {
    this.dataHolder.mergeCandles(this.mutableList_0([item]));
  };
  DxStudies.prototype.addCandleItems = function (items) {
    this.dataHolder.mergeCandles(this.mutableList_0(items.slice()));
  };
  DxStudies.prototype.setTradingSessions = function (sessions) {
    this.dataHolder.sessions = listOf(sessions.slice());
  };
  DxStudies.prototype.setETHSessions = function (sessions) {
    this.dataHolder.ethSessions = listOf(sessions.slice());
  };
  DxStudies.prototype.mutableList_0 = function (items) {
    return toMutableList(items);
  };
  DxStudies.prototype.updateStudyParams_0 = function (params) {
    var tmp$;
    for (tmp$ = 0; tmp$ !== params.length; ++tmp$) {
      var element = params[tmp$];
      var key = element.key;
      if (contains(key, 'average') && !equals(key, 'averageLength')) {
        element.value = AverageTypeEnum$Companion_getInstance().fromTitle(element.value.toString());
      }
      if (contains(key, 'price') || equals(key, 'high') || equals(key, 'low')) {
        element.value = PriceFieldEnum$Companion_getInstance().fromTitle_61zpoe$(element.value.toString());
      }
      if (contains(key, 'aggregation')) {
        element.value = AggregationTypeEnum$Companion_getInstance().fromTitle_61zpoe$(element.value.toString());
      }
    }
  };
  DxStudies.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DxStudies',
    interfaces: []
  };
  function Comparator$ObjectLiteral(closure$comparison) {
    this.closure$comparison = closure$comparison;
  }
  Comparator$ObjectLiteral.prototype.compare = function (a, b) {
    return this.closure$comparison(a, b);
  };
  Comparator$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [Comparator]};
  function AbstractCandleTradeDataHolder(candles) {
    AbstractCandleTradeDataHolder$Companion_getInstance();
    this.candles = toMutableList_0(candles);
    this.onlyLastAggregatedPeriod_f6macx$_0 = false;
    this.fVIndex = -1;
    this.lVIndex = -1;
    this.changeListeners = LinkedHashSet_init();
    this.sessions_zdejeu$_0 = emptyList();
    this.ethSessions_2j8cxz$_0 = emptyList();
  }
  Object.defineProperty(AbstractCandleTradeDataHolder.prototype, 'sessions', {
    get: function () {
      return this.sessions_zdejeu$_0;
    },
    set: function (value) {
      this.sessions_zdejeu$_0 = sortedWith(value, AbstractCandleTradeDataHolder$Companion_getInstance().SESSION_START_0);
    }
  });
  Object.defineProperty(AbstractCandleTradeDataHolder.prototype, 'ethSessions', {
    get: function () {
      return this.ethSessions_2j8cxz$_0;
    },
    set: function (value) {
      this.ethSessions_2j8cxz$_0 = sortedWith(value, AbstractCandleTradeDataHolder$Companion_getInstance().SESSION_START_0);
    }
  });
  Object.defineProperty(AbstractCandleTradeDataHolder.prototype, 'dataLength', {
    get: function () {
      var tmp$;
      var lastIndex = this.getLastVisibleIndex();
      if (lastIndex < 0) {
        tmp$ = 0;
      }
       else
        tmp$ = lastIndex - this.firstVisibleIndex() + 1 | 0;
      return tmp$;
    }
  });
  AbstractCandleTradeDataHolder.prototype.addChangeListener = function (changeListener) {
    this.changeListeners.add_11rb$(changeListener);
  };
  AbstractCandleTradeDataHolder.prototype.removeChangeListener = function (changeListener) {
    this.changeListeners.remove_11rb$(changeListener);
  };
  AbstractCandleTradeDataHolder.prototype.getTradeItem = function (index) {
    return this.candles.get_za3lpa$(index);
  };
  AbstractCandleTradeDataHolder.prototype.firstVisibleIndex = function () {
    var tmp$;
    if (this.fVIndex < 0) {
      tmp$ = this.candles;
      for (var i = 0; i !== tmp$.size; ++i) {
        if (this.candles.get_za3lpa$(i).getIsVisible()) {
          this.fVIndex = i;
          break;
        }
      }
    }
    return this.fVIndex;
  };
  AbstractCandleTradeDataHolder.prototype.getLastVisibleIndex = function () {
    var tmp$;
    if (this.lVIndex < 0) {
      tmp$ = reversed(get_indices(this.candles)).iterator();
      while (tmp$.hasNext()) {
        var i = tmp$.next();
        if (this.candles.get_za3lpa$(i).getIsVisible()) {
          this.lVIndex = i;
          break;
        }
      }
    }
    return this.lVIndex;
  };
  AbstractCandleTradeDataHolder.prototype.size = function () {
    return this.candles.size;
  };
  AbstractCandleTradeDataHolder.prototype.getAggregatedTradeItem = function (index, type, displace) {
    var candle = this.candles.get_za3lpa$(index);
    var fromDateTime = this.getAggregationStamp(candle.getTime(), type, displace);
    var toDateTime = this.getAggregationStamp(candle.getTime(), type, displace + 1 | 0);
    if (this.onlyLastAggregatedPeriod_f6macx$_0 && !this.candles.isEmpty()) {
      var lastCandle = this.candles.get_za3lpa$(this.candles.size - 1 | 0);
      var lastFromDateTime = this.getAggregationStamp(lastCandle.getTime(), type, displace);
      if (fromDateTime !== lastFromDateTime) {
        return new AbstractCandleTradeDataHolder$CandleImpl();
      }
    }
    return this.getAggregatedCandle_z87wl$_0(fromDateTime, toDateTime);
  };
  AbstractCandleTradeDataHolder.prototype.getAggregatedCandle_z87wl$_0 = function (fromDateTime, toDateTime) {
    var tmp$;
    var open = null;
    var high = null;
    var low = null;
    var close = null;
    tmp$ = this.candles.iterator();
    while (tmp$.hasNext()) {
      var c = tmp$.next();
      if (rangeTo(fromDateTime, toDateTime - 1).contains_mef7kx$(c.getTime())) {
        if (open == null || open.getTime() > c.getTime()) {
          open = c;
        }
        if (high == null || high.getHigh() < c.getHigh()) {
          high = c;
        }
        if (low == null || low.getLow() > c.getLow()) {
          low = c;
        }
        if (close == null || close.getTime() < c.getTime()) {
          close = c;
        }
      }
    }
    var openValue = kotlin_js_internal_DoubleCompanionObject.NaN;
    var highValue = kotlin_js_internal_DoubleCompanionObject.NaN;
    var lowValue = kotlin_js_internal_DoubleCompanionObject.NaN;
    var closeValue = kotlin_js_internal_DoubleCompanionObject.NaN;
    if (open != null)
      openValue = open.getOpen();
    if (high != null)
      highValue = high.getHigh();
    if (low != null)
      lowValue = low.getLow();
    if (close != null)
      closeValue = close.getClose();
    return new AbstractCandleTradeDataHolder$CandleImpl(openValue, highValue, lowValue, closeValue, kotlin_js_internal_DoubleCompanionObject.NaN, 0.0, 0.0, fromDateTime, true);
  };
  AbstractCandleTradeDataHolder.prototype.setOnlyLastAggregatedPeriod_6taknv$ = function (onlyLastAggregatedPeriod) {
    this.onlyLastAggregatedPeriod_f6macx$_0 = onlyLastAggregatedPeriod;
  };
  AbstractCandleTradeDataHolder.prototype.notifyAll_4an1kt$ = function (changes) {
    var tmp$;
    tmp$ = this.changeListeners.iterator();
    while (tmp$.hasNext()) {
      var changeListener = tmp$.next();
      changeListener.dataChanged(changes);
    }
  };
  function AbstractCandleTradeDataHolder$CandleImpl(_open, _high, _low, _close, _impVolatility, _volume, _vwap, _time, _isVisible) {
    if (_open === void 0)
      _open = kotlin_js_internal_DoubleCompanionObject.NaN;
    if (_high === void 0)
      _high = kotlin_js_internal_DoubleCompanionObject.NaN;
    if (_low === void 0)
      _low = kotlin_js_internal_DoubleCompanionObject.NaN;
    if (_close === void 0)
      _close = kotlin_js_internal_DoubleCompanionObject.NaN;
    if (_impVolatility === void 0)
      _impVolatility = kotlin_js_internal_DoubleCompanionObject.NaN;
    if (_volume === void 0)
      _volume = kotlin_js_internal_DoubleCompanionObject.NaN;
    if (_vwap === void 0)
      _vwap = kotlin_js_internal_DoubleCompanionObject.NaN;
    if (_time === void 0)
      _time = 0.0;
    if (_isVisible === void 0)
      _isVisible = true;
    this.open_ua6e9a$_0 = _open;
    this.high_ue5dza$_0 = _high;
    this.low_xe3bb8$_0 = _low;
    this.close_l3lork$_0 = _close;
    this.impVolatility_ztraf$_0 = _impVolatility;
    this.volume_ip1p8e$_0 = _volume;
    this.vwap_u67g44$_0 = _vwap;
    this.time_u7jqhd$_0 = _time;
    this.isVisible_qtdawg$_0 = _isVisible;
  }
  AbstractCandleTradeDataHolder$CandleImpl.prototype.getOpen = function () {
    return this.open_ua6e9a$_0;
  };
  AbstractCandleTradeDataHolder$CandleImpl.prototype.getHigh = function () {
    return this.high_ue5dza$_0;
  };
  AbstractCandleTradeDataHolder$CandleImpl.prototype.getLow = function () {
    return this.low_xe3bb8$_0;
  };
  AbstractCandleTradeDataHolder$CandleImpl.prototype.getClose = function () {
    return this.close_l3lork$_0;
  };
  AbstractCandleTradeDataHolder$CandleImpl.prototype.getImpVolatility = function () {
    return this.impVolatility_ztraf$_0;
  };
  AbstractCandleTradeDataHolder$CandleImpl.prototype.getVolume = function () {
    return this.volume_ip1p8e$_0;
  };
  AbstractCandleTradeDataHolder$CandleImpl.prototype.getVwap = function () {
    return this.vwap_u67g44$_0;
  };
  AbstractCandleTradeDataHolder$CandleImpl.prototype.getTime = function () {
    return this.time_u7jqhd$_0;
  };
  AbstractCandleTradeDataHolder$CandleImpl.prototype.setTime = function (time) {
    this.time_u7jqhd$_0 = time;
  };
  AbstractCandleTradeDataHolder$CandleImpl.prototype.getIsVisible = function () {
    return this.isVisible_qtdawg$_0;
  };
  AbstractCandleTradeDataHolder$CandleImpl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CandleImpl',
    interfaces: [CandleDataItem]
  };
  function AbstractCandleTradeDataHolder$Companion() {
    AbstractCandleTradeDataHolder$Companion_instance = this;
    this.SESSION_START_0 = new Comparator$ObjectLiteral(AbstractCandleTradeDataHolder$Companion$SESSION_START$lambda);
  }
  function AbstractCandleTradeDataHolder$Companion$SESSION_START$lambda(s1, s2) {
    return s1.getFrom() < s2.getFrom() ? -1 : s1.getFrom() > s2.getFrom() ? 1 : 0;
  }
  AbstractCandleTradeDataHolder$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var AbstractCandleTradeDataHolder$Companion_instance = null;
  function AbstractCandleTradeDataHolder$Companion_getInstance() {
    if (AbstractCandleTradeDataHolder$Companion_instance === null) {
      new AbstractCandleTradeDataHolder$Companion();
    }
    return AbstractCandleTradeDataHolder$Companion_instance;
  }
  AbstractCandleTradeDataHolder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AbstractCandleTradeDataHolder',
    interfaces: [TradeDataHolder]
  };
  function AggregationTypeEnum(name, ordinal, title) {
    Enum.call(this);
    this.title_pwz2mr$_0 = title;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function AggregationTypeEnum_initFields() {
    AggregationTypeEnum_initFields = function () {
    };
    AggregationTypeEnum$DEFAULT_instance = new AggregationTypeEnum('DEFAULT', 0, 'DEFAULT');
    AggregationTypeEnum$DAY_instance = new AggregationTypeEnum('DAY', 1, 'DAY');
    AggregationTypeEnum$WEEK_instance = new AggregationTypeEnum('WEEK', 2, 'WEEK');
    AggregationTypeEnum$MONTH_instance = new AggregationTypeEnum('MONTH', 3, 'MONTH');
    AggregationTypeEnum$Companion_getInstance();
  }
  var AggregationTypeEnum$DEFAULT_instance;
  function AggregationTypeEnum$DEFAULT_getInstance() {
    AggregationTypeEnum_initFields();
    return AggregationTypeEnum$DEFAULT_instance;
  }
  var AggregationTypeEnum$DAY_instance;
  function AggregationTypeEnum$DAY_getInstance() {
    AggregationTypeEnum_initFields();
    return AggregationTypeEnum$DAY_instance;
  }
  var AggregationTypeEnum$WEEK_instance;
  function AggregationTypeEnum$WEEK_getInstance() {
    AggregationTypeEnum_initFields();
    return AggregationTypeEnum$WEEK_instance;
  }
  var AggregationTypeEnum$MONTH_instance;
  function AggregationTypeEnum$MONTH_getInstance() {
    AggregationTypeEnum_initFields();
    return AggregationTypeEnum$MONTH_instance;
  }
  AggregationTypeEnum.prototype.toString = function () {
    return this.title_pwz2mr$_0;
  };
  function AggregationTypeEnum$Companion() {
    AggregationTypeEnum$Companion_instance = this;
  }
  AggregationTypeEnum$Companion.prototype.fromTitle_61zpoe$ = function (title) {
    var tmp$, tmp$_0;
    tmp$ = AggregationTypeEnum$values();
    for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
      var type = tmp$[tmp$_0];
      if (equals_0(type.title_pwz2mr$_0, title, true)) {
        return type;
      }
    }
    throw IllegalStateException_init('Unknown average type: ' + title);
  };
  AggregationTypeEnum$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var AggregationTypeEnum$Companion_instance = null;
  function AggregationTypeEnum$Companion_getInstance() {
    AggregationTypeEnum_initFields();
    if (AggregationTypeEnum$Companion_instance === null) {
      new AggregationTypeEnum$Companion();
    }
    return AggregationTypeEnum$Companion_instance;
  }
  AggregationTypeEnum.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AggregationTypeEnum',
    interfaces: [Enum]
  };
  function AggregationTypeEnum$values() {
    return [AggregationTypeEnum$DEFAULT_getInstance(), AggregationTypeEnum$DAY_getInstance(), AggregationTypeEnum$WEEK_getInstance(), AggregationTypeEnum$MONTH_getInstance()];
  }
  AggregationTypeEnum.values = AggregationTypeEnum$values;
  function AggregationTypeEnum$valueOf(name) {
    switch (name) {
      case 'DEFAULT':
        return AggregationTypeEnum$DEFAULT_getInstance();
      case 'DAY':
        return AggregationTypeEnum$DAY_getInstance();
      case 'WEEK':
        return AggregationTypeEnum$WEEK_getInstance();
      case 'MONTH':
        return AggregationTypeEnum$MONTH_getInstance();
      default:throwISE('No enum constant com.devexperts.dxst.api.AggregationTypeEnum.' + name);
    }
  }
  AggregationTypeEnum.valueOf_61zpoe$ = AggregationTypeEnum$valueOf;
  function AverageTypeEnum(name, ordinal, title) {
    Enum.call(this);
    this.title_4e5xu0$_0 = title;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function AverageTypeEnum_initFields() {
    AverageTypeEnum_initFields = function () {
    };
    AverageTypeEnum$SIMPLE_instance = new AverageTypeEnum('SIMPLE', 0, 'SIMPLE');
    AverageTypeEnum$WILDERS_instance = new AverageTypeEnum('WILDERS', 1, 'WILDERS');
    AverageTypeEnum$WEIGHTED_instance = new AverageTypeEnum('WEIGHTED', 2, 'WEIGHTED');
    AverageTypeEnum$EXPONENTIAL_instance = new AverageTypeEnum('EXPONENTIAL', 3, 'EXPONENTIAL');
    AverageTypeEnum$Companion_getInstance();
  }
  var AverageTypeEnum$SIMPLE_instance;
  function AverageTypeEnum$SIMPLE_getInstance() {
    AverageTypeEnum_initFields();
    return AverageTypeEnum$SIMPLE_instance;
  }
  var AverageTypeEnum$WILDERS_instance;
  function AverageTypeEnum$WILDERS_getInstance() {
    AverageTypeEnum_initFields();
    return AverageTypeEnum$WILDERS_instance;
  }
  var AverageTypeEnum$WEIGHTED_instance;
  function AverageTypeEnum$WEIGHTED_getInstance() {
    AverageTypeEnum_initFields();
    return AverageTypeEnum$WEIGHTED_instance;
  }
  var AverageTypeEnum$EXPONENTIAL_instance;
  function AverageTypeEnum$EXPONENTIAL_getInstance() {
    AverageTypeEnum_initFields();
    return AverageTypeEnum$EXPONENTIAL_instance;
  }
  AverageTypeEnum.prototype.toString = function () {
    return this.title_4e5xu0$_0;
  };
  function AverageTypeEnum$Companion() {
    AverageTypeEnum$Companion_instance = this;
  }
  AverageTypeEnum$Companion.prototype.fromTitle = function (title) {
    var tmp$, tmp$_0;
    tmp$ = AverageTypeEnum$values();
    for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
      var averageType = tmp$[tmp$_0];
      if (equals_0(averageType.title_4e5xu0$_0, title, true)) {
        return averageType;
      }
    }
    throw IllegalStateException_init('Unknown average type: ' + title);
  };
  AverageTypeEnum$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var AverageTypeEnum$Companion_instance = null;
  function AverageTypeEnum$Companion_getInstance() {
    AverageTypeEnum_initFields();
    if (AverageTypeEnum$Companion_instance === null) {
      new AverageTypeEnum$Companion();
    }
    return AverageTypeEnum$Companion_instance;
  }
  AverageTypeEnum.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AverageTypeEnum',
    interfaces: [Enum]
  };
  function AverageTypeEnum$values() {
    return [AverageTypeEnum$SIMPLE_getInstance(), AverageTypeEnum$WILDERS_getInstance(), AverageTypeEnum$WEIGHTED_getInstance(), AverageTypeEnum$EXPONENTIAL_getInstance()];
  }
  AverageTypeEnum.values = AverageTypeEnum$values;
  function AverageTypeEnum$valueOf(name) {
    switch (name) {
      case 'SIMPLE':
        return AverageTypeEnum$SIMPLE_getInstance();
      case 'WILDERS':
        return AverageTypeEnum$WILDERS_getInstance();
      case 'WEIGHTED':
        return AverageTypeEnum$WEIGHTED_getInstance();
      case 'EXPONENTIAL':
        return AverageTypeEnum$EXPONENTIAL_getInstance();
      default:throwISE('No enum constant com.devexperts.dxst.api.AverageTypeEnum.' + name);
    }
  }
  AverageTypeEnum.valueOf_61zpoe$ = AverageTypeEnum$valueOf;
  function CandleDataExpander(aggregationPeriod, studyCalculators, candleClone, tradeDataHolder) {
    this.aggregationPeriod_0 = aggregationPeriod;
    this.studyCalculators_0 = studyCalculators;
    this.candleClone_0 = candleClone;
    this.tradeDataHolder_0 = tradeDataHolder;
    this.maxExpansionSize_0 = 0;
    this.numberOfLines_0 = 0;
    this.maxExpansionSize_0 = this.getMaxExpansionSize_0(this.studyCalculators_0);
    this.numberOfLines_0 = this.getNumberOfLines_0(this.studyCalculators_0);
  }
  CandleDataExpander.prototype.build = function (lastCandle) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    var candleTime = lastCandle.getTime();
    var expansionCandles = ArrayList_init();
    tmp$ = this.maxExpansionSize_0;
    for (var i = 0; i < tmp$; i++) {
      candleTime += this.aggregationPeriod_0;
      var clone = this.candleClone_0.clone(lastCandle, candleTime);
      for (var j = this.numberOfLines_0 - 1 | 0; j >= 0; j--) {
        clone.setStudyValue(j, kotlin_js_internal_DoubleCompanionObject.NaN);
      }
      expansionCandles.add_11rb$(clone);
    }
    var studyLineOffset = 0;
    var dataSize = this.tradeDataHolder_0.size();
    tmp$_0 = this.studyCalculators_0;
    for (tmp$_1 = 0; tmp$_1 !== tmp$_0.length; ++tmp$_1) {
      var studyCalculator = tmp$_0[tmp$_1];
      var study = studyCalculator.study;
      tmp$_2 = study.expansionSize;
      for (var expansionIndex = 0; expansionIndex < tmp$_2; expansionIndex++) {
        tmp$_3 = study.linesNumber;
        for (var lineIndex = 0; lineIndex < tmp$_3; lineIndex++) {
          var value = study.getLine(lineIndex).calculateAt(dataSize + expansionIndex | 0);
          expansionCandles.get_za3lpa$(expansionIndex).setStudyValue(studyLineOffset + lineIndex | 0, value);
        }
      }
      studyLineOffset = studyLineOffset + study.linesNumber | 0;
    }
    return this.toUntypedArray_0(expansionCandles);
  };
  CandleDataExpander.prototype.toUntypedArray_0 = function ($receiver) {
    var tmp$;
    var arr = Kotlin.isArray(tmp$ = Kotlin.newArray($receiver.size, null)) ? tmp$ : throwCCE();
    for (var i = 0; i !== arr.length; ++i) {
      arr[i] = $receiver.get_za3lpa$(i);
    }
    return arr;
  };
  CandleDataExpander.prototype.getMaxExpansionSize_0 = function (studyCalculators) {
    var tmp$;
    var maxExpansionSize = 0;
    for (tmp$ = 0; tmp$ !== studyCalculators.length; ++tmp$) {
      var studyCalculator = studyCalculators[tmp$];
      var study = studyCalculator.study;
      if (study.expansionSize > maxExpansionSize) {
        maxExpansionSize = study.expansionSize;
      }
    }
    return maxExpansionSize;
  };
  CandleDataExpander.prototype.getNumberOfLines_0 = function (studyCalculators) {
    var tmp$;
    var sum = 0;
    for (tmp$ = 0; tmp$ !== studyCalculators.length; ++tmp$) {
      var studyCalculator = studyCalculators[tmp$];
      var study = studyCalculator.study;
      sum = sum + study.linesNumber | 0;
    }
    return sum;
  };
  function CandleDataExpander$CandleDataItemClone() {
  }
  CandleDataExpander$CandleDataItemClone.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'CandleDataItemClone',
    interfaces: []
  };
  CandleDataExpander.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CandleDataExpander',
    interfaces: []
  };
  function CandleDataItem() {
  }
  CandleDataItem.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'CandleDataItem',
    interfaces: [TradeDataItem]
  };
  function Comparator$ObjectLiteral_0(closure$comparison) {
    this.closure$comparison = closure$comparison;
  }
  Comparator$ObjectLiteral_0.prototype.compare = function (a, b) {
    return this.closure$comparison(a, b);
  };
  Comparator$ObjectLiteral_0.$metadata$ = {kind: Kind_CLASS, interfaces: [Comparator]};
  function CandleDataStore(maxElements, candles) {
    CandleDataStore$Companion_getInstance();
    CandleTradeDataHolder.call(this, candles);
    this.maxElements_n3a6d9$_0 = maxElements;
    this.sortCandles_f3dsg7$_0(this.candles);
    this.trimLeftCandles_twz1c7$_0(this.candles);
  }
  Object.defineProperty(CandleDataStore.prototype, 'maxElements', {
    get: function () {
      return this.maxElements_n3a6d9$_0;
    },
    set: function (maxElements) {
      this.maxElements_n3a6d9$_0 = maxElements;
    }
  });
  CandleDataStore.prototype.mergeCandles = function (update) {
    var result = this.mergeCandlesSilent_w8m2u5$(update);
    if (!result.isEmpty) {
      this.notifyAll_4an1kt$(ensureNotNull(result.changes));
    }
    return result;
  };
  function CandleDataStore$mergeCandlesSilent$lambda(this$CandleDataStore) {
    return function (candle) {
      return CandleDataStore$Companion_getInstance().CANDLE_DATE_0.compare(candle, this$CandleDataStore.candles.get_za3lpa$(0)) < 0;
    };
  }
  function CandleDataStore$mergeCandlesSilent$lambda_0(this$CandleDataStore) {
    return function (candle) {
      return CandleDataStore$Companion_getInstance().CANDLE_DATE_0.compare(candle, this$CandleDataStore.candles.get_za3lpa$(0)) < 0;
    };
  }
  CandleDataStore.prototype.mergeCandlesSilent_w8m2u5$ = function (update) {
    this.resetCachedIndexes_6srax3$_0();
    var candlesToMerge = ArrayList_init();
    candlesToMerge.addAll_brywnq$(update);
    while (candlesToMerge.size > this.maxElements) {
      candlesToMerge.removeAt_za3lpa$(0);
    }
    if (this.candles.isEmpty()) {
      this.candles = toMutableList_0(candlesToMerge);
      var changes = new Changes(0, 0, this.dataLength);
      return CandleDataStore$CandleDataStore$MergeResult_init_0(this, changes, toMutableSet(candlesToMerge));
    }
    var candlesToMergeIterator = candlesToMerge.iterator();
    var updatedCandles = ArrayList_init();
    while (candlesToMergeIterator.hasNext()) {
      var mergeCandle = candlesToMergeIterator.next();
      var index = binarySearch(this.candles, mergeCandle, CandleDataStore$Companion_getInstance().CANDLE_DATE_0);
      if (index >= 0) {
        var currentCandle = this.candles.get_za3lpa$(index);
        if (!this.isCandleEquals_ey7v91$_0(mergeCandle, currentCandle)) {
          this.candles.set_wxm5ur$(index, mergeCandle);
          updatedCandles.add_11rb$(mergeCandle);
        }
        candlesToMergeIterator.remove();
      }
    }
    this.candles.addAll_brywnq$(candlesToMerge);
    this.sortCandles_f3dsg7$_0(this.candles);
    var removedFromLeft = this.trimLeftCandles_twz1c7$_0(this.candles);
    var notInsertedCandles = toMutableList_0(candlesToMerge);
    removeAll(notInsertedCandles, CandleDataStore$mergeCandlesSilent$lambda(this));
    removedFromLeft = removedFromLeft - notInsertedCandles.size | 0;
    notInsertedCandles.clear();
    removeAll(updatedCandles, CandleDataStore$mergeCandlesSilent$lambda_0(this));
    if (candlesToMerge.isEmpty() && updatedCandles.isEmpty()) {
      return CandleDataStore$CandleDataStore$MergeResult_init(this);
    }
    var firstUpdatedIndex = this.getFirstUpdatedIndex_5o4vie$_0(toSet(updatedCandles), toSet(candlesToMerge));
    var changes_0 = new Changes(removedFromLeft, firstUpdatedIndex, this.dataLength);
    return CandleDataStore$CandleDataStore$MergeResult_init_0(this, changes_0, toSet(candlesToMerge));
  };
  CandleDataStore.prototype.getFirstUpdatedIndex_5o4vie$_0 = function (updatedCandles, insertedCandles) {
    var firstUpdatedElement;
    if (!insertedCandles.isEmpty() && !updatedCandles.isEmpty()) {
      firstUpdatedElement = CandleDataStore$Companion_getInstance().CANDLE_DATE_0.compare(first(insertedCandles), first(updatedCandles)) < 0 ? first(insertedCandles) : first(updatedCandles);
    }
     else {
      firstUpdatedElement = !insertedCandles.isEmpty() ? first(insertedCandles) : first(updatedCandles);
    }
    return binarySearch(this.candles, firstUpdatedElement, CandleDataStore$Companion_getInstance().CANDLE_DATE_0);
  };
  CandleDataStore.prototype.trimLeftCandles_twz1c7$_0 = function (candles) {
    if (candles.size > this.maxElements) {
      var trimLeft = candles.size - this.maxElements | 0;
      candles.subList_vux9f0$(0, trimLeft).clear();
      return trimLeft;
    }
    return 0;
  };
  CandleDataStore.prototype.sortCandles_f3dsg7$_0 = function (candles) {
    sortedWith(candles, CandleDataStore$Companion_getInstance().CANDLE_DATE_0);
  };
  CandleDataStore.prototype.resetCachedIndexes_6srax3$_0 = function () {
    this.fVIndex = -1;
    this.lVIndex = -1;
  };
  CandleDataStore.prototype.isCandleEquals_ey7v91$_0 = function (candle1, candle2) {
    return candle1.getLow() === candle2.getLow() && candle1.getHigh() === candle2.getHigh() && candle1.getOpen() === candle2.getOpen() && candle1.getClose() === candle2.getClose() && candle1.getTime() === candle2.getTime() && candle1.getIsVisible() === candle2.getIsVisible();
  };
  function CandleDataStore$MergeResult($outer) {
    this.$outer = $outer;
    this.changes = null;
    this.inserted = null;
    this.isEmpty = false;
  }
  CandleDataStore$MergeResult.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MergeResult',
    interfaces: []
  };
  function CandleDataStore$CandleDataStore$MergeResult_init($outer, $this) {
    $this = $this || Object.create(CandleDataStore$MergeResult.prototype);
    CandleDataStore$MergeResult.call($this, $outer);
    $this.changes = null;
    $this.inserted = null;
    $this.isEmpty = true;
    return $this;
  }
  function CandleDataStore$CandleDataStore$MergeResult_init_0($outer, changes, inserted, $this) {
    $this = $this || Object.create(CandleDataStore$MergeResult.prototype);
    CandleDataStore$MergeResult.call($this, $outer);
    $this.changes = changes;
    $this.inserted = inserted;
    $this.isEmpty = false;
    return $this;
  }
  function CandleDataStore$Companion() {
    CandleDataStore$Companion_instance = this;
    this.CANDLE_DATE_0 = new Comparator$ObjectLiteral_0(CandleDataStore$Companion$CANDLE_DATE$lambda);
  }
  function CandleDataStore$Companion$CANDLE_DATE$lambda(o1, o2) {
    return o1.getTime() < o2.getTime() ? -1 : o1.getTime() > o2.getTime() ? 1 : 0;
  }
  CandleDataStore$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var CandleDataStore$Companion_instance = null;
  function CandleDataStore$Companion_getInstance() {
    if (CandleDataStore$Companion_instance === null) {
      new CandleDataStore$Companion();
    }
    return CandleDataStore$Companion_instance;
  }
  CandleDataStore.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CandleDataStore',
    interfaces: [CandleTradeDataHolder]
  };
  function CandleTradeDataHolder(candles) {
    AbstractCandleTradeDataHolder.call(this, candles);
  }
  CandleTradeDataHolder.prototype.getAggregationStamp = function (timestamp, type, displace) {
    var millisInHour = 3600000;
    var timestampWithoutTime = timestamp - timestamp % (millisInHour * 24 | 0);
    var calculatedTime = 0.0;
    switch (type.name) {
      case 'DAY':
        calculatedTime = timestampWithoutTime + (Kotlin.imul(displace, millisInHour) * 24 | 0);
        break;
      case 'WEEK':
        var timestampOnWeekStart = timestampWithoutTime - timestampWithoutTime % ((millisInHour * 24 | 0) * 7 | 0);
        calculatedTime = timestampOnWeekStart + ((Kotlin.imul(displace, millisInHour) * 24 | 0) * 7 | 0);
        break;
      case 'MONTH':
        calculatedTime = timestampWithoutTime + ((Kotlin.imul(displace, millisInHour) * 24 | 0) * 30 | 0);
        break;
    }
    return calculatedTime;
  };
  CandleTradeDataHolder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CandleTradeDataHolder',
    interfaces: [AbstractCandleTradeDataHolder]
  };
  function ChangeListener() {
  }
  ChangeListener.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'ChangeListener',
    interfaces: []
  };
  function Changes(removedFromLeft, firstIndexChanged, newDataLength) {
    this.removedFromLeft = removedFromLeft;
    this.firstIndexChanged = firstIndexChanged;
    this.newDataLength = newDataLength;
  }
  Changes.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Changes',
    interfaces: []
  };
  function DataItemsView(originalTradeData) {
    this.originalTradeData = originalTradeData;
    this.offset_0 = 0;
  }
  Object.defineProperty(DataItemsView.prototype, 'sessions', {
    get: function () {
      return this.originalTradeData.sessions;
    },
    set: function (value) {
      this.originalTradeData.sessions = value;
    }
  });
  Object.defineProperty(DataItemsView.prototype, 'ethSessions', {
    get: function () {
      return this.originalTradeData.ethSessions;
    },
    set: function (value) {
      this.originalTradeData.ethSessions = value;
    }
  });
  DataItemsView.prototype.addChangeListener = function (changeListener) {
    this.originalTradeData.addChangeListener(changeListener);
  };
  DataItemsView.prototype.removeChangeListener = function (changeListener) {
    this.originalTradeData.removeChangeListener(changeListener);
  };
  DataItemsView.prototype.getTradeItem = function (index) {
    if (index < 0 || index > (this.originalTradeData.size() - this.offset_0 | 0)) {
      throw IllegalArgumentException_init('index out of range: ' + toString(index) + '. size: ' + toString(this.size()));
    }
    return this.originalTradeData.getTradeItem(index + this.offset_0 | 0);
  };
  DataItemsView.prototype.getAggregatedTradeItem = function (index, type, displace) {
    if (index < 0 || index > (this.originalTradeData.size() - this.offset_0 | 0)) {
      throw IllegalArgumentException_init('index out of range: ' + toString(index) + '. size: ' + toString(this.size()));
    }
    return this.originalTradeData.getAggregatedTradeItem(index + this.offset_0 | 0, type, displace);
  };
  DataItemsView.prototype.firstVisibleIndex = function () {
    return this.originalTradeData.firstVisibleIndex() - this.offset_0 | 0;
  };
  Object.defineProperty(DataItemsView.prototype, 'dataLength', {
    get: function () {
      return this.originalTradeData.dataLength - this.offset_0 | 0;
    }
  });
  DataItemsView.prototype.size = function () {
    return this.originalTradeData.size() - this.offset_0 | 0;
  };
  DataItemsView.prototype.setOffset_za3lpa$ = function (offset) {
    if (offset < 0) {
      throw IllegalArgumentException_init('offset should not be negative: ' + toString(offset));
    }
    this.offset_0 = offset;
  };
  DataItemsView.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DataItemsView',
    interfaces: [TradeDataHolder]
  };
  function IFunction() {
  }
  IFunction.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'IFunction',
    interfaces: [ChangeListener]
  };
  function PriceFieldEnum(name, ordinal, title) {
    Enum.call(this);
    this.title_uuvwfy$_0 = title;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function PriceFieldEnum_initFields() {
    PriceFieldEnum_initFields = function () {
    };
    PriceFieldEnum$OPEN_instance = new PriceFieldEnum('OPEN', 0, 'open');
    PriceFieldEnum$HIGH_instance = new PriceFieldEnum('HIGH', 1, 'high');
    PriceFieldEnum$LOW_instance = new PriceFieldEnum('LOW', 2, 'low');
    PriceFieldEnum$CLOSE_instance = new PriceFieldEnum('CLOSE', 3, 'close');
    PriceFieldEnum$IMP_VOLATILITY_instance = new PriceFieldEnum('IMP_VOLATILITY', 4, 'impVolatility');
    PriceFieldEnum$MEDIAN_instance = new PriceFieldEnum('MEDIAN', 5, 'median');
    PriceFieldEnum$TYPICAL_instance = new PriceFieldEnum('TYPICAL', 6, 'hlc_av');
    PriceFieldEnum$OHLC_AVERAGE_instance = new PriceFieldEnum('OHLC_AVERAGE', 7, 'ohlc_av');
    PriceFieldEnum$VOLUME_instance = new PriceFieldEnum('VOLUME', 8, 'volume');
    PriceFieldEnum$Companion_getInstance();
  }
  var PriceFieldEnum$OPEN_instance;
  function PriceFieldEnum$OPEN_getInstance() {
    PriceFieldEnum_initFields();
    return PriceFieldEnum$OPEN_instance;
  }
  var PriceFieldEnum$HIGH_instance;
  function PriceFieldEnum$HIGH_getInstance() {
    PriceFieldEnum_initFields();
    return PriceFieldEnum$HIGH_instance;
  }
  var PriceFieldEnum$LOW_instance;
  function PriceFieldEnum$LOW_getInstance() {
    PriceFieldEnum_initFields();
    return PriceFieldEnum$LOW_instance;
  }
  var PriceFieldEnum$CLOSE_instance;
  function PriceFieldEnum$CLOSE_getInstance() {
    PriceFieldEnum_initFields();
    return PriceFieldEnum$CLOSE_instance;
  }
  var PriceFieldEnum$IMP_VOLATILITY_instance;
  function PriceFieldEnum$IMP_VOLATILITY_getInstance() {
    PriceFieldEnum_initFields();
    return PriceFieldEnum$IMP_VOLATILITY_instance;
  }
  var PriceFieldEnum$MEDIAN_instance;
  function PriceFieldEnum$MEDIAN_getInstance() {
    PriceFieldEnum_initFields();
    return PriceFieldEnum$MEDIAN_instance;
  }
  var PriceFieldEnum$TYPICAL_instance;
  function PriceFieldEnum$TYPICAL_getInstance() {
    PriceFieldEnum_initFields();
    return PriceFieldEnum$TYPICAL_instance;
  }
  var PriceFieldEnum$OHLC_AVERAGE_instance;
  function PriceFieldEnum$OHLC_AVERAGE_getInstance() {
    PriceFieldEnum_initFields();
    return PriceFieldEnum$OHLC_AVERAGE_instance;
  }
  var PriceFieldEnum$VOLUME_instance;
  function PriceFieldEnum$VOLUME_getInstance() {
    PriceFieldEnum_initFields();
    return PriceFieldEnum$VOLUME_instance;
  }
  PriceFieldEnum.prototype.toString = function () {
    return this.title_uuvwfy$_0;
  };
  function PriceFieldEnum$Companion() {
    PriceFieldEnum$Companion_instance = this;
  }
  PriceFieldEnum$Companion.prototype.fromTitle_61zpoe$ = function (title) {
    var tmp$, tmp$_0;
    tmp$ = PriceFieldEnum$values();
    for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
      var pfe = tmp$[tmp$_0];
      if (equals_0(pfe.name, title, true)) {
        return pfe;
      }
    }
    throw IllegalStateException_init('Unknown price field: ' + title);
  };
  PriceFieldEnum$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var PriceFieldEnum$Companion_instance = null;
  function PriceFieldEnum$Companion_getInstance() {
    PriceFieldEnum_initFields();
    if (PriceFieldEnum$Companion_instance === null) {
      new PriceFieldEnum$Companion();
    }
    return PriceFieldEnum$Companion_instance;
  }
  PriceFieldEnum.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PriceFieldEnum',
    interfaces: [Enum]
  };
  function PriceFieldEnum$values() {
    return [PriceFieldEnum$OPEN_getInstance(), PriceFieldEnum$HIGH_getInstance(), PriceFieldEnum$LOW_getInstance(), PriceFieldEnum$CLOSE_getInstance(), PriceFieldEnum$IMP_VOLATILITY_getInstance(), PriceFieldEnum$MEDIAN_getInstance(), PriceFieldEnum$TYPICAL_getInstance(), PriceFieldEnum$OHLC_AVERAGE_getInstance(), PriceFieldEnum$VOLUME_getInstance()];
  }
  PriceFieldEnum.values = PriceFieldEnum$values;
  function PriceFieldEnum$valueOf(name) {
    switch (name) {
      case 'OPEN':
        return PriceFieldEnum$OPEN_getInstance();
      case 'HIGH':
        return PriceFieldEnum$HIGH_getInstance();
      case 'LOW':
        return PriceFieldEnum$LOW_getInstance();
      case 'CLOSE':
        return PriceFieldEnum$CLOSE_getInstance();
      case 'IMP_VOLATILITY':
        return PriceFieldEnum$IMP_VOLATILITY_getInstance();
      case 'MEDIAN':
        return PriceFieldEnum$MEDIAN_getInstance();
      case 'TYPICAL':
        return PriceFieldEnum$TYPICAL_getInstance();
      case 'OHLC_AVERAGE':
        return PriceFieldEnum$OHLC_AVERAGE_getInstance();
      case 'VOLUME':
        return PriceFieldEnum$VOLUME_getInstance();
      default:throwISE('No enum constant com.devexperts.dxst.api.PriceFieldEnum.' + name);
    }
  }
  PriceFieldEnum.valueOf_61zpoe$ = PriceFieldEnum$valueOf;
  function StudiesSet(studies, dataHolder) {
    this.dataHolder_0 = dataHolder;
    this.pastOffset_0 = 0;
    this.calculators_0 = LinkedHashMap_init();
    var tmp$, tmp$_0;
    if (studies.length === 0) {
      throw IllegalArgumentException_init('Studies collection is empty');
    }
    for (tmp$ = 0; tmp$ !== studies.length; ++tmp$) {
      var calculator = studies[tmp$];
      this.calculators_0.put_xwzc9p$(calculator, 0);
    }
    var maxOffset = 0;
    for (tmp$_0 = 0; tmp$_0 !== studies.length; ++tmp$_0) {
      var calculator_0 = studies[tmp$_0];
      if (maxOffset < calculator_0.study.pastOffset) {
        maxOffset = calculator_0.study.pastOffset;
      }
    }
    this.pastOffset_0 = maxOffset;
  }
  StudiesSet.prototype.dataChanged = function (changes) {
    var tmp$, tmp$_0, tmp$_1;
    if (changes.firstIndexChanged === 0) {
      tmp$ = this.calculators_0.keys.iterator();
      while (tmp$.hasNext()) {
        var sc = tmp$.next();
        var offset = this.dataHolder_0.firstVisibleIndex() - sc.study.pastOffset | 0;
        if (offset > 0) {
          sc.setCalculationOffset_za3lpa$(offset);
          this.calculators_0.put_xwzc9p$(sc, offset);
        }
      }
    }
    tmp$_0 = this.calculators_0.entries.iterator();
    while (tmp$_0.hasNext()) {
      var tmp$_2 = tmp$_0.next();
      var key = tmp$_2.key;
      var offset_0 = tmp$_2.value;
      if (offset_0 > 0) {
        var tmp$_3 = changes.removedFromLeft;
        var b = changes.firstIndexChanged - offset_0 | 0;
        var tmp$_4 = Math_0.max(0, b);
        var b_0 = changes.newDataLength - offset_0 | 0;
        tmp$_1 = new Changes(tmp$_3, tmp$_4, Math_0.max(0, b_0));
      }
       else {
        tmp$_1 = changes;
      }
      var ch = tmp$_1;
      key.dataChanged(ch);
    }
    return 0;
  };
  StudiesSet.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StudiesSet',
    interfaces: [ChangeListener]
  };
  function Study(lineFunctions, dataItems, pastOffset, expansionSize, prefetchSize, aggregationType, isOnlyLastAggregatedPeriod) {
    Study$Companion_getInstance();
    this.lineFunctions_0 = lineFunctions;
    this.dataItems_0 = dataItems;
    this.pastOffset = pastOffset;
    this.expansionSize = expansionSize;
    this.prefetchSize = prefetchSize;
    this.aggregationType = aggregationType;
    this.isOnlyLastAggregatedPeriod = isOnlyLastAggregatedPeriod;
  }
  Object.defineProperty(Study.prototype, 'linesNumber', {
    get: function () {
      return this.lineFunctions_0.size;
    }
  });
  Study.prototype.dataChanged = function (changes) {
    var tmp$;
    tmp$ = this.lineFunctions_0.iterator();
    while (tmp$.hasNext()) {
      var lineFunction = tmp$.next();
      lineFunction.dataChanged(changes);
    }
    return 0;
  };
  Study.prototype.getLine = function (index) {
    return this.lineFunctions_0.get_za3lpa$(index);
  };
  Study.prototype.calculateAll = function () {
    var tmp$;
    var lines = Kotlin.newArray(this.dataItems_0.size(), null);
    tmp$ = this.dataItems_0.size() - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      var $receiver = this.lineFunctions_0;
      var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
      var tmp$_0;
      tmp$_0 = $receiver.iterator();
      while (tmp$_0.hasNext()) {
        var item = tmp$_0.next();
        destination.add_11rb$(item.calculateAt(i));
      }
      lines[i] = toDoubleArray(destination);
    }
    return lines;
  };
  Study.prototype.calculateAt = function (index) {
    var $receiver = this.lineFunctions_0;
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(item.calculateAt(index));
    }
    return toDoubleArray(destination);
  };
  Study.prototype.setCalculationOffset_za3lpa$ = function (offset) {
    this.dataItems_0.setOffset_za3lpa$(offset);
  };
  Study.prototype.dispose = function () {
    this.dataItems_0.removeChangeListener(this);
  };
  function Study$Companion() {
    Study$Companion_instance = this;
  }
  Study$Companion.prototype.create = function (id, dataItems, params) {
    var paramMap = LinkedHashMap_init();
    var $receiver = Kotlin.arrayIterator(params);
    while ($receiver.hasNext()) {
      var element = $receiver.next();
      paramMap.put_xwzc9p$(element.key, element.value);
    }
    var builderFactory = StudyBuilderFactory$Companion_getInstance().findBuilderFactory_61zpoe$(id);
    var builder = builderFactory.create();
    var dataItemsView = new DataItemsView(dataItems);
    var functions = builder.buildStudy_c6yk66$(dataItemsView, paramMap);
    var aggregationType = builder.getAggregationType_x7u0o8$(paramMap);
    return this.create_5fd49z$(functions, dataItemsView, builder.getExpansionSize_x7u0o8$(paramMap), this.getOverallPrefetch_0(functions), aggregationType, builder.isOnlyLastAggregatedPeriod_x7u0o8$(paramMap));
  };
  function Study$Companion$create$ObjectLiteral() {
  }
  Study$Companion$create$ObjectLiteral.prototype.apply_11rb$ = function (input) {
    return Study$Companion_getInstance().getOverallPastOffset_lp5kpr$(input);
  };
  Study$Companion$create$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [Function]
  };
  Study$Companion.prototype.create_5fd49z$ = function (lineFunctions, dataItems, expansionSize, prefetchSize, aggregationType, onlyLastAggregatedPeriod) {
    if (lineFunctions.isEmpty()) {
      throw IllegalArgumentException_init('Collection of functions is empty!');
    }
    if (dataItems == null) {
      throw new NullPointerException('null data items');
    }
    var pastOffset = this.maxValue_9rs6el$(lineFunctions, new Study$Companion$create$ObjectLiteral());
    return new Study(lineFunctions, dataItems, pastOffset, Math_0.max(0, expansionSize), prefetchSize, aggregationType, onlyLastAggregatedPeriod);
  };
  Study$Companion.prototype.maxValue_9rs6el$ = function (functions, calculator) {
    var tmp$;
    var max = -2147483648;
    tmp$ = functions.iterator();
    while (tmp$.hasNext()) {
      var f = tmp$.next();
      var value = calculator.apply_11rb$(f);
      if (max < value) {
        max = value;
      }
    }
    return max;
  };
  Study$Companion.prototype.getOverallPastOffset_lp5kpr$ = function (function_0) {
    var tmp$;
    var ownPastOffset = function_0.ownPastOffset;
    var maxChildPastOffset = 0;
    tmp$ = function_0.childFunctions.iterator();
    while (tmp$.hasNext()) {
      var func = tmp$.next();
      var srcPastOffset = this.getOverallPastOffset_lp5kpr$(func);
      if (maxChildPastOffset < srcPastOffset) {
        maxChildPastOffset = srcPastOffset;
      }
    }
    return ownPastOffset + maxChildPastOffset | 0;
  };
  Study$Companion.prototype.getOverallPrefetch_0 = function (functions) {
    var tmp$;
    var prefetch = 0;
    tmp$ = functions.iterator();
    while (tmp$.hasNext()) {
      var function_0 = tmp$.next();
      var tmp$_0 = this.getOverallPrefetch_0(function_0.childFunctions);
      var a = function_0.prefetchSize;
      var b = prefetch;
      var b_0 = Math_0.max(a, b);
      prefetch = Math_0.max(tmp$_0, b_0);
    }
    return prefetch;
  };
  Study$Companion.prototype.create_u2imrc$ = function (builder, dataItems, params) {
    var dataItemsView = new DataItemsView(dataItems);
    var functions = builder.buildStudy_c6yk66$(dataItemsView, params);
    var aggregationType = builder.getAggregationType_x7u0o8$(params);
    return this.create_5fd49z$(functions, dataItemsView, builder.getExpansionSize_x7u0o8$(params), this.getOverallPrefetch_0(functions), aggregationType, builder.isOnlyLastAggregatedPeriod_x7u0o8$(params));
  };
  Study$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Study$Companion_instance = null;
  function Study$Companion_getInstance() {
    if (Study$Companion_instance === null) {
      new Study$Companion();
    }
    return Study$Companion_instance;
  }
  Study.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Study',
    interfaces: [ChangeListener]
  };
  function StudyBuilder() {
    StudyBuilder$Companion_getInstance();
  }
  StudyBuilder.prototype.buildStudy_c6yk66$ = function (data, params) {
    this.validateParameters_x7u0o8$(params);
    return this.constructFunctionsArray_c6yk66$(data, params);
  };
  StudyBuilder.prototype.validateParameters_x7u0o8$ = function (params) {
  };
  StudyBuilder.prototype.getExpansionSize_x7u0o8$ = function (params) {
    return 0;
  };
  StudyBuilder.prototype.getAggregationType_x7u0o8$ = function (params) {
    return AggregationTypeEnum$DEFAULT_getInstance();
  };
  StudyBuilder.prototype.isOnlyLastAggregatedPeriod_x7u0o8$ = function (params) {
    return false;
  };
  function StudyBuilder$Companion() {
    StudyBuilder$Companion_instance = this;
    this.LENGTH_PARAMETER = 'length';
    this.DISPLACE_PARAMETER = 'displace';
    this.PRICE_PARAMETER = 'price';
    this.AVERAGE_PARAMETER = 'average';
  }
  StudyBuilder$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var StudyBuilder$Companion_instance = null;
  function StudyBuilder$Companion_getInstance() {
    if (StudyBuilder$Companion_instance === null) {
      new StudyBuilder$Companion();
    }
    return StudyBuilder$Companion_instance;
  }
  StudyBuilder.prototype.validateDisplace_x7u0o8$ = function (params) {
    this.validateInteger_ez016i$(params, StudyBuilder$Companion_getInstance().DISPLACE_PARAMETER);
  };
  StudyBuilder.prototype.validateLength_x7u0o8$ = function (params) {
    this.validateInteger_ez016i$(params, StudyBuilder$Companion_getInstance().LENGTH_PARAMETER);
  };
  StudyBuilder.prototype.validatePriceField_x7u0o8$ = function (params) {
    this.validateParameter_ez016i$(params, StudyBuilder$Companion_getInstance().PRICE_PARAMETER);
  };
  StudyBuilder.prototype.validateAverageField_x7u0o8$ = function (params) {
    this.validateParameter_ez016i$(params, StudyBuilder$Companion_getInstance().AVERAGE_PARAMETER);
  };
  StudyBuilder.prototype.validatePriceField_ez016i$ = function (params, name) {
    this.validateParameter_ez016i$(params, name);
  };
  StudyBuilder.prototype.validateBoolean_ez016i$ = function (params, name) {
    this.validateParameter_ez016i$(params, name);
  };
  StudyBuilder.prototype.validateInteger_ez016i$ = function (params, name) {
    this.validateParameter_ez016i$(params, name);
  };
  StudyBuilder.prototype.validateDouble_ez016i$ = function (params, name) {
    this.validateParameter_ez016i$(params, name);
  };
  StudyBuilder.prototype.validateAverage_ez016i$ = function (params, name) {
    this.validateParameter_ez016i$(params, name);
  };
  StudyBuilder.prototype.validateAggregation_ez016i$ = function (params, name) {
    this.validateParameter_ez016i$(params, name);
  };
  StudyBuilder.prototype.validateParameter_ez016i$ = function (params, name) {
    if (params.get_11rb$(name) == null)
      throw IllegalArgumentException_init("Couldn't find parameter '" + name);
  };
  function StudyBuilder$create$ObjectLiteral() {
  }
  StudyBuilder$create$ObjectLiteral.prototype.apply_11rb$ = function (input) {
    return Study$Companion_getInstance().getOverallPastOffset_lp5kpr$(input);
  };
  StudyBuilder$create$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [Function]
  };
  StudyBuilder.prototype.create_5fd49z$ = function (lineFunctions, dataItems, expansionSize, prefetchSize, aggregationType, onlyLastAggregatedPeriod) {
    if (lineFunctions.isEmpty()) {
      throw IllegalArgumentException_init('Collection of functions is empty!');
    }
    if (dataItems == null) {
      throw new NullPointerException('null data items');
    }
    var pastOffset = Study$Companion_getInstance().maxValue_9rs6el$(lineFunctions, new StudyBuilder$create$ObjectLiteral());
    return new Study(lineFunctions, dataItems, pastOffset, Math_0.max(0, expansionSize), prefetchSize, aggregationType, onlyLastAggregatedPeriod);
  };
  StudyBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StudyBuilder',
    interfaces: []
  };
  function StudyCalculator(study, lineIndexOffset, studyHolder, name) {
    this.study = study;
    this.lineIndexOffset_0 = lineIndexOffset;
    this.studyHolder_0 = studyHolder;
    this.name = name;
    this.calculationOffset_0 = 0;
  }
  StudyCalculator.prototype.setCalculationOffset_za3lpa$ = function (offset) {
    this.study.setCalculationOffset_za3lpa$(offset);
    this.calculationOffset_0 = offset;
  };
  StudyCalculator.prototype.dataChanged = function (changes) {
    var tmp$, tmp$_0, tmp$_1;
    tmp$ = this.study.linesNumber - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      this.study.getLine(i).dataChanged(changes);
    }
    tmp$_0 = this.study.linesNumber - 1 | 0;
    for (var lineIndex = 0; lineIndex <= tmp$_0; lineIndex++) {
      tmp$_1 = this.studyHolder_0.size() - this.calculationOffset_0 - 1 | 0;
      for (var i_0 = 0; i_0 <= tmp$_1; i_0++) {
        var dataItem = this.studyHolder_0.getStudyItem(i_0 + this.calculationOffset_0 | 0);
        dataItem.setStudyValue(this.lineIndexOffset_0 + lineIndex | 0, this.study.getLine(lineIndex).calculateAt(i_0));
      }
    }
    return 0;
  };
  StudyCalculator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StudyCalculator',
    interfaces: [ChangeListener]
  };
  function StudyDataHolder() {
  }
  StudyDataHolder.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'StudyDataHolder',
    interfaces: []
  };
  function StudyDataItem() {
  }
  StudyDataItem.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'StudyDataItem',
    interfaces: []
  };
  function StudyParam(key, value) {
    StudyParam$Companion_getInstance();
    this.key = key;
    this.value = value;
  }
  function StudyParam$Companion() {
    StudyParam$Companion_instance = this;
  }
  StudyParam$Companion.prototype.of = function (key, value) {
    return new StudyParam(key, value);
  };
  StudyParam$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var StudyParam$Companion_instance = null;
  function StudyParam$Companion_getInstance() {
    if (StudyParam$Companion_instance === null) {
      new StudyParam$Companion();
    }
    return StudyParam$Companion_instance;
  }
  StudyParam.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StudyParam',
    interfaces: []
  };
  function TradeDataHolder() {
  }
  TradeDataHolder.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'TradeDataHolder',
    interfaces: []
  };
  function TradeDataItem() {
  }
  TradeDataItem.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'TradeDataItem',
    interfaces: []
  };
  function TradingSessionData() {
  }
  TradingSessionData.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'TradingSessionData',
    interfaces: []
  };
  function ADX() {
    StudyBuilder.call(this);
  }
  ADX.prototype.validateParameters_x7u0o8$ = function (params) {
    StudyBuilder.prototype.validateLength_x7u0o8$.call(this, params);
    StudyBuilder.prototype.validateAverageField_x7u0o8$.call(this, params);
  };
  ADX.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    var tmp$, tmp$_0;
    var length = typeof (tmp$ = params.get_11rb$(StudyBuilder$Companion_getInstance().LENGTH_PARAMETER)) === 'number' ? tmp$ : throwCCE();
    var averageType = Kotlin.isType(tmp$_0 = params.get_11rb$(StudyBuilder$Companion_getInstance().AVERAGE_PARAMETER), AverageTypeEnum) ? tmp$_0 : throwCCE();
    return listOf_0(CommonFunctions_getInstance().constructADX_3dj0x8$(data, length, averageType));
  };
  ADX.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ADX',
    interfaces: [StudyBuilder]
  };
  function ADXR() {
    ADXR$Companion_getInstance();
    StudyBuilder.call(this);
  }
  ADXR.prototype.validateParameters_x7u0o8$ = function (params) {
    StudyBuilder.prototype.validateLength_x7u0o8$.call(this, params);
    StudyBuilder.prototype.validateAverageField_x7u0o8$.call(this, params);
  };
  ADXR.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    var tmp$, tmp$_0;
    var length = typeof (tmp$ = params.get_11rb$(StudyBuilder$Companion_getInstance().LENGTH_PARAMETER)) === 'number' ? tmp$ : throwCCE();
    var averageType = Kotlin.isType(tmp$_0 = params.get_11rb$(StudyBuilder$Companion_getInstance().AVERAGE_PARAMETER), AverageTypeEnum) ? tmp$_0 : throwCCE();
    return listOf([CommonFunctions_getInstance().constructADX_3dj0x8$(data, length, averageType), ADXR$Companion_getInstance().constructADXR_3dj0x8$(data, length, averageType)]);
  };
  function ADXR$Companion() {
    ADXR$Companion_instance = this;
  }
  ADXR$Companion.prototype.constructADXR_3dj0x8$ = function (data, length, averageType) {
    var displace = this.negateExact_0(length - 1 | 0);
    var todayADX = CommonFunctions_getInstance().constructADX_3dj0x8$(data, length, averageType);
    var periodADX = new DisplacementFunction(CommonFunctions_getInstance().constructADX_3dj0x8$(data, length, averageType), displace);
    return new ArithmeticFunction(todayADX, periodADX, ArithmeticOperation$MIDPOINT_getInstance());
  };
  ADXR$Companion.prototype.negateExact_0 = function (a) {
    if (a === -2147483648) {
      throw Exception_init('Integer overflow');
    }
    return -a | 0;
  };
  ADXR$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ADXR$Companion_instance = null;
  function ADXR$Companion_getInstance() {
    if (ADXR$Companion_instance === null) {
      new ADXR$Companion();
    }
    return ADXR$Companion_instance;
  }
  ADXR.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ADXR',
    interfaces: [StudyBuilder]
  };
  function AccelerationDeceleration() {
    StudyBuilder.call(this);
  }
  AccelerationDeceleration.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    var awesome = CommonFunctions_getInstance().constructAwesomeOscillatorFunc_t0cfja$(data);
    var avgAwesome = new MovingAverageSimple(CommonFunctions_getInstance().constructAwesomeOscillatorFunc_t0cfja$(data), 5);
    var accDec = new ArithmeticFunction(awesome, avgAwesome, ArithmeticOperation$MINUS_getInstance());
    var zero = new ZeroFunction();
    return listOf([accDec, zero]);
  };
  AccelerationDeceleration.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AccelerationDeceleration',
    interfaces: [StudyBuilder]
  };
  function AccumulationDistribution() {
    StudyBuilder.call(this);
  }
  AccumulationDistribution.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    var accDist = WindowFunction_init_0(CommonFunctions_getInstance().constructAccumulationDistributionFunc_t0cfja$(data), 0, true);
    var zero = new ZeroFunction();
    return listOf([accDist, zero]);
  };
  AccumulationDistribution.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AccumulationDistribution',
    interfaces: [StudyBuilder]
  };
  function Aroon() {
    Aroon$Companion_getInstance();
    StudyBuilder.call(this);
  }
  Aroon.prototype.validateParameters_x7u0o8$ = function (params) {
    StudyBuilder.prototype.validateInteger_ez016i$.call(this, params, StudyBuilder$Companion_getInstance().LENGTH_PARAMETER);
    StudyBuilder.prototype.validateInteger_ez016i$.call(this, params, Aroon$Companion_getInstance().OVERBOUGHT_PARAMETER);
    StudyBuilder.prototype.validateInteger_ez016i$.call(this, params, Aroon$Companion_getInstance().OVERSOLD_PARAMETER);
  };
  Aroon.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    var tmp$, tmp$_0, tmp$_1;
    var length = typeof (tmp$ = params.get_11rb$(StudyBuilder$Companion_getInstance().LENGTH_PARAMETER)) === 'number' ? tmp$ : throwCCE();
    var overbought = typeof (tmp$_0 = params.get_11rb$(Aroon$Companion_getInstance().OVERBOUGHT_PARAMETER)) === 'number' ? tmp$_0 : throwCCE();
    var oversold = typeof (tmp$_1 = params.get_11rb$(Aroon$Companion_getInstance().OVERSOLD_PARAMETER)) === 'number' ? tmp$_1 : throwCCE();
    var aroonUp = Aroon$Companion_getInstance().constructAroonUp_sbo9ig$(data, length);
    var aroonDown = Aroon$Companion_getInstance().constructAroonDown_sbo9ig$(data, length);
    var oversoldFunction = new ConstantFunction(oversold);
    var overboughtFunction = new ConstantFunction(overbought);
    return listOf([aroonUp, aroonDown, overboughtFunction, oversoldFunction]);
  };
  function Aroon$Companion() {
    Aroon$Companion_instance = this;
    this.OVERBOUGHT_PARAMETER = 'overbought';
    this.OVERSOLD_PARAMETER = 'oversold';
  }
  Aroon$Companion.prototype.constructAroonUp_sbo9ig$ = function (data, length) {
    return this.constructAroonFunction_0(length, new HighestHighPeriod(new PriceSourceFunction(data, PriceFieldEnum$HIGH_getInstance()), length));
  };
  Aroon$Companion.prototype.constructAroonDown_sbo9ig$ = function (data, length) {
    return this.constructAroonFunction_0(length, new LowestLowPeriod(new PriceSourceFunction(data, PriceFieldEnum$LOW_getInstance()), length));
  };
  Aroon$Companion.prototype.constructAroonFunction_0 = function (length, daysSince) {
    var arg1 = new ArithmeticFunction(new ArithmeticFunction(new ConstantFunction(length - 1 | 0), daysSince, ArithmeticOperation$MINUS_getInstance()), new ConstantFunction(length - 1 | 0), ArithmeticOperation$DIV_ZERO_getInstance());
    return new ArithmeticFunction(new ConstantFunction(100.0), arg1, ArithmeticOperation$MULT_getInstance());
  };
  Aroon$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Aroon$Companion_instance = null;
  function Aroon$Companion_getInstance() {
    if (Aroon$Companion_instance === null) {
      new Aroon$Companion();
    }
    return Aroon$Companion_instance;
  }
  Aroon.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Aroon',
    interfaces: [StudyBuilder]
  };
  function AroonOscillator() {
    AroonOscillator$Companion_getInstance();
    StudyBuilder.call(this);
  }
  AroonOscillator.prototype.validateParameters_x7u0o8$ = function (params) {
    StudyBuilder.prototype.validateLength_x7u0o8$.call(this, params);
    StudyBuilder.prototype.validateInteger_ez016i$.call(this, params, AroonOscillator$Companion_getInstance().OVERBOUGHT_PARAMETER);
    StudyBuilder.prototype.validateInteger_ez016i$.call(this, params, AroonOscillator$Companion_getInstance().OVERSOLD_PARAMETER);
  };
  AroonOscillator.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    var tmp$, tmp$_0, tmp$_1;
    var length = typeof (tmp$ = params.get_11rb$(StudyBuilder$Companion_getInstance().LENGTH_PARAMETER)) === 'number' ? tmp$ : throwCCE();
    var overbought = typeof (tmp$_0 = params.get_11rb$(AroonOscillator$Companion_getInstance().OVERBOUGHT_PARAMETER)) === 'number' ? tmp$_0 : throwCCE();
    var oversold = typeof (tmp$_1 = params.get_11rb$(AroonOscillator$Companion_getInstance().OVERSOLD_PARAMETER)) === 'number' ? tmp$_1 : throwCCE();
    var aroonUp = Aroon$Companion_getInstance().constructAroonUp_sbo9ig$(data, length);
    var aroonDown = Aroon$Companion_getInstance().constructAroonDown_sbo9ig$(data, length);
    var aroonOscillator = new ArithmeticFunction(aroonUp, aroonDown, ArithmeticOperation$MINUS_getInstance());
    var overboughtFunction = new ConstantFunction(overbought);
    var midLine = new ZeroFunction();
    var oversoldFunction = new ConstantFunction(oversold);
    return listOf([overboughtFunction, midLine, oversoldFunction, aroonOscillator]);
  };
  function AroonOscillator$Companion() {
    AroonOscillator$Companion_instance = this;
    this.OVERBOUGHT_PARAMETER = 'overbought';
    this.OVERSOLD_PARAMETER = 'oversold';
  }
  AroonOscillator$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var AroonOscillator$Companion_instance = null;
  function AroonOscillator$Companion_getInstance() {
    if (AroonOscillator$Companion_instance === null) {
      new AroonOscillator$Companion();
    }
    return AroonOscillator$Companion_instance;
  }
  AroonOscillator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AroonOscillator',
    interfaces: [StudyBuilder]
  };
  function AverageTrueRange() {
    StudyBuilder.call(this);
  }
  AverageTrueRange.prototype.validateParameters_x7u0o8$ = function (params) {
    StudyBuilder.prototype.validateLength_x7u0o8$.call(this, params);
    StudyBuilder.prototype.validateAverageField_x7u0o8$.call(this, params);
  };
  AverageTrueRange.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    var tmp$, tmp$_0;
    var length = typeof (tmp$ = params.get_11rb$(StudyBuilder$Companion_getInstance().LENGTH_PARAMETER)) === 'number' ? tmp$ : throwCCE();
    var averageType = Kotlin.isType(tmp$_0 = params.get_11rb$(StudyBuilder$Companion_getInstance().AVERAGE_PARAMETER), AverageTypeEnum) ? tmp$_0 : throwCCE();
    var tr = CommonFunctions_getInstance().constructTrueRange_t0cfja$(data);
    var atr = CommonFunctions_getInstance().constructAverage_dtut4e$(averageType, tr, length);
    return listOf_0(atr);
  };
  AverageTrueRange.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AverageTrueRange',
    interfaces: [StudyBuilder]
  };
  function AwesomeOscillator() {
    StudyBuilder.call(this);
  }
  AwesomeOscillator.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    var awesome = CommonFunctions_getInstance().constructAwesomeOscillatorFunc_t0cfja$(data);
    var zero = new ZeroFunction();
    return listOf([awesome, zero]);
  };
  AwesomeOscillator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AwesomeOscillator',
    interfaces: [StudyBuilder]
  };
  function BollingerBands() {
    StudyBuilder.call(this);
    this.NUM_DEV_UP_PARAMETER_0 = 'numDevUp';
    this.NUM_DEV_DOWN_PARAMETER_0 = 'numDevDown';
  }
  BollingerBands.prototype.validateParameters_x7u0o8$ = function (params) {
    StudyBuilder.prototype.validateLength_x7u0o8$.call(this, params);
    StudyBuilder.prototype.validatePriceField_x7u0o8$.call(this, params);
    StudyBuilder.prototype.validateDisplace_x7u0o8$.call(this, params);
    StudyBuilder.prototype.validateDouble_ez016i$.call(this, params, this.NUM_DEV_UP_PARAMETER_0);
    StudyBuilder.prototype.validateDouble_ez016i$.call(this, params, this.NUM_DEV_DOWN_PARAMETER_0);
    StudyBuilder.prototype.validateAverageField_x7u0o8$.call(this, params);
  };
  BollingerBands.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
    var priceField = Kotlin.isType(tmp$ = params.get_11rb$(StudyBuilder$Companion_getInstance().PRICE_PARAMETER), PriceFieldEnum) ? tmp$ : throwCCE();
    var length = typeof (tmp$_0 = params.get_11rb$(StudyBuilder$Companion_getInstance().LENGTH_PARAMETER)) === 'number' ? tmp$_0 : throwCCE();
    var displace = typeof (tmp$_1 = params.get_11rb$(StudyBuilder$Companion_getInstance().DISPLACE_PARAMETER)) === 'number' ? tmp$_1 : throwCCE();
    var averageType = Kotlin.isType(tmp$_2 = params.get_11rb$(StudyBuilder$Companion_getInstance().AVERAGE_PARAMETER), AverageTypeEnum) ? tmp$_2 : throwCCE();
    var price = new PriceSourceFunction(data, priceField);
    var average = CommonFunctions_getInstance().constructAverage_dtut4e$(averageType, price, length);
    var displacedEma = new DisplacementFunction(average, displace);
    var numDevUp = typeof (tmp$_3 = params.get_11rb$(this.NUM_DEV_UP_PARAMETER_0)) === 'number' ? tmp$_3 : throwCCE();
    var upBand = this.constructBandFunction_0(price, params, numDevUp, averageType);
    var numDevDown = typeof (tmp$_4 = params.get_11rb$(this.NUM_DEV_DOWN_PARAMETER_0)) === 'number' ? tmp$_4 : throwCCE();
    var lowBand = this.constructBandFunction_0(price, params, numDevDown, averageType);
    return listOf([lowBand, displacedEma, upBand]);
  };
  BollingerBands.prototype.getExpansionSize_x7u0o8$ = function (params) {
    var tmp$;
    var displace = typeof (tmp$ = params.get_11rb$(StudyBuilder$Companion_getInstance().DISPLACE_PARAMETER)) === 'number' ? tmp$ : throwCCE();
    return -displace | 0;
  };
  BollingerBands.prototype.constructBandFunction_0 = function (price, params, numDev, averageType) {
    var tmp$, tmp$_0;
    var length = typeof (tmp$ = params.get_11rb$(StudyBuilder$Companion_getInstance().LENGTH_PARAMETER)) === 'number' ? tmp$ : throwCCE();
    var displace = typeof (tmp$_0 = params.get_11rb$(StudyBuilder$Companion_getInstance().DISPLACE_PARAMETER)) === 'number' ? tmp$_0 : throwCCE();
    var deviation = new StandardDeviationFunction(price, length);
    var displacedDeviation = new DisplacementFunction(deviation, displace);
    var average = CommonFunctions_getInstance().constructAverage_dtut4e$(averageType, price, length);
    var displacedEma = new DisplacementFunction(average, displace);
    return new ArithmeticFunction(displacedEma, new ArithmeticFunction(displacedDeviation, new ConstantFunction(numDev), ArithmeticOperation$MULT_getInstance()), ArithmeticOperation$PLUS_getInstance());
  };
  BollingerBands.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BollingerBands',
    interfaces: [StudyBuilder]
  };
  function CCI() {
    CCI$Companion_getInstance();
    StudyBuilder.call(this);
  }
  CCI.prototype.validateParameters_x7u0o8$ = function (params) {
    StudyBuilder.prototype.validateLength_x7u0o8$.call(this, params);
    StudyBuilder.prototype.validateInteger_ez016i$.call(this, params, CCI$Companion_getInstance().OVERBOUGHT_PARAMETER_0);
    StudyBuilder.prototype.validateInteger_ez016i$.call(this, params, CCI$Companion_getInstance().OVERSOLD_PARAMETER);
  };
  CCI.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    var tmp$, tmp$_0, tmp$_1;
    var length = typeof (tmp$ = params.get_11rb$(StudyBuilder$Companion_getInstance().LENGTH_PARAMETER)) === 'number' ? tmp$ : throwCCE();
    var overbought = typeof (tmp$_0 = params.get_11rb$(CCI$Companion_getInstance().OVERBOUGHT_PARAMETER_0)) === 'number' ? tmp$_0 : throwCCE();
    var oversold = typeof (tmp$_1 = params.get_11rb$(CCI$Companion_getInstance().OVERSOLD_PARAMETER)) === 'number' ? tmp$_1 : throwCCE();
    var price = CommonFunctions_getInstance().constructHighLowCloseSum_t0cfja$(data);
    var avg = new MovingAverageSimple(price, length);
    var linDev = new LinearDeviationFunction(price, length);
    var c0015 = new ConstantFunction(0.015);
    var cci = new ArithmeticFunction(new ArithmeticFunction(new ArithmeticFunction(price, avg, ArithmeticOperation$MINUS_getInstance()), linDev, ArithmeticOperation$DIV_ZERO_getInstance()), c0015, ArithmeticOperation$DIV_getInstance());
    var zero = new ZeroFunction();
    var overboughtF = new ConstantFunction(overbought);
    var oversoldF = new ConstantFunction(oversold);
    return listOf([cci, overboughtF, zero, oversoldF]);
  };
  function CCI$Companion() {
    CCI$Companion_instance = this;
    this.OVERSOLD_PARAMETER = 'oversold';
    this.OVERBOUGHT_PARAMETER_0 = 'overbought';
  }
  CCI$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var CCI$Companion_instance = null;
  function CCI$Companion_getInstance() {
    if (CCI$Companion_instance === null) {
      new CCI$Companion();
    }
    return CCI$Companion_instance;
  }
  CCI.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CCI',
    interfaces: [StudyBuilder]
  };
  function CenterOfGravityOscillator() {
    CenterOfGravityOscillator$Companion_getInstance();
    StudyBuilder.call(this);
  }
  CenterOfGravityOscillator.prototype.validateParameters_x7u0o8$ = function (params) {
    StudyBuilder.prototype.validatePriceField_x7u0o8$.call(this, params);
    StudyBuilder.prototype.validateInteger_ez016i$.call(this, params, CenterOfGravityOscillator$Companion_getInstance().PERIOD_PARAMETER);
  };
  CenterOfGravityOscillator.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    var tmp$, tmp$_0;
    var priceField = Kotlin.isType(tmp$ = params.get_11rb$(StudyBuilder$Companion_getInstance().PRICE_PARAMETER), PriceFieldEnum) ? tmp$ : throwCCE();
    var period = typeof (tmp$_0 = params.get_11rb$(CenterOfGravityOscillator$Companion_getInstance().PERIOD_PARAMETER)) === 'number' ? tmp$_0 : throwCCE();
    var price = new PriceSourceFunction(data, priceField);
    var weightedSum = new SimpleWeightedSumFunction(price, period);
    var sum = new SumFunction(price, period);
    var minuFactor = new ConstantFunction(-1.0);
    var cog = new ArithmeticFunction(new ArithmeticFunction(weightedSum, sum, ArithmeticOperation$DIV_getInstance()), minuFactor, ArithmeticOperation$MULT_getInstance());
    return listOf_0(cog);
  };
  function CenterOfGravityOscillator$Companion() {
    CenterOfGravityOscillator$Companion_instance = this;
    this.PERIOD_PARAMETER = 'period';
  }
  CenterOfGravityOscillator$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var CenterOfGravityOscillator$Companion_instance = null;
  function CenterOfGravityOscillator$Companion_getInstance() {
    if (CenterOfGravityOscillator$Companion_instance === null) {
      new CenterOfGravityOscillator$Companion();
    }
    return CenterOfGravityOscillator$Companion_instance;
  }
  CenterOfGravityOscillator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CenterOfGravityOscillator',
    interfaces: [StudyBuilder]
  };
  function ChaikinOscillator() {
    ChaikinOscillator$Companion_getInstance();
    StudyBuilder.call(this);
  }
  ChaikinOscillator.prototype.validateParameters_x7u0o8$ = function (params) {
    StudyBuilder.prototype.validateInteger_ez016i$.call(this, params, ChaikinOscillator$Companion_getInstance().SHORT_LENGTH_PARAMETER_0);
    StudyBuilder.prototype.validateInteger_ez016i$.call(this, params, ChaikinOscillator$Companion_getInstance().LONG_LENGTH_PARAMETER_0);
  };
  ChaikinOscillator.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    var tmp$, tmp$_0;
    var shortLength = typeof (tmp$ = params.get_11rb$(ChaikinOscillator$Companion_getInstance().SHORT_LENGTH_PARAMETER_0)) === 'number' ? tmp$ : throwCCE();
    var longLength = typeof (tmp$_0 = params.get_11rb$(ChaikinOscillator$Companion_getInstance().LONG_LENGTH_PARAMETER_0)) === 'number' ? tmp$_0 : throwCCE();
    var emaShort = ChaikinOscillator$Companion_getInstance().constructEmaDistributionFunction_0(CommonFunctions_getInstance().constructAccumulationDistributionFunc_t0cfja$(data), shortLength);
    var emaLong = ChaikinOscillator$Companion_getInstance().constructEmaDistributionFunction_0(CommonFunctions_getInstance().constructAccumulationDistributionFunc_t0cfja$(data), longLength);
    var chaikinOsc = WindowFunction_init_0(new ArithmeticFunction(emaShort, emaLong, ArithmeticOperation$MINUS_getInstance()), 0, true);
    var zero = new ZeroFunction();
    return listOf([chaikinOsc, zero]);
  };
  function ChaikinOscillator$Companion() {
    ChaikinOscillator$Companion_instance = this;
    this.SHORT_LENGTH_PARAMETER_0 = 'shortLength';
    this.LONG_LENGTH_PARAMETER_0 = 'longLength';
  }
  ChaikinOscillator$Companion.prototype.constructEmaDistributionFunction_0 = function (accDist, length) {
    return new MovingAverageExponential(accDist, length);
  };
  ChaikinOscillator$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ChaikinOscillator$Companion_instance = null;
  function ChaikinOscillator$Companion_getInstance() {
    if (ChaikinOscillator$Companion_instance === null) {
      new ChaikinOscillator$Companion();
    }
    return ChaikinOscillator$Companion_instance;
  }
  ChaikinOscillator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ChaikinOscillator',
    interfaces: [StudyBuilder]
  };
  function ChaikinVolatility() {
    ChaikinVolatility$Companion_getInstance();
    StudyBuilder.call(this);
  }
  ChaikinVolatility.prototype.validateParameters_x7u0o8$ = function (params) {
    StudyBuilder.prototype.validateLength_x7u0o8$.call(this, params);
    StudyBuilder.prototype.validateInteger_ez016i$.call(this, params, ChaikinVolatility$Companion_getInstance().SHIFT_LENGTH_PARAMETER);
  };
  ChaikinVolatility.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    var tmp$, tmp$_0;
    var length = typeof (tmp$ = params.get_11rb$(StudyBuilder$Companion_getInstance().LENGTH_PARAMETER)) === 'number' ? tmp$ : throwCCE();
    var shiftLength = typeof (tmp$_0 = params.get_11rb$(ChaikinVolatility$Companion_getInstance().SHIFT_LENGTH_PARAMETER)) === 'number' ? tmp$_0 : throwCCE();
    var smaDelayed = new DisplacementFunction(ChaikinVolatility$Companion_getInstance().constructSmaHighLowDiffFunction_0(data, length), -shiftLength | 0);
    var chvFract = new ArithmeticFunction(ChaikinVolatility$Companion_getInstance().constructSmaHighLowDiffFunction_0(data, length), smaDelayed, ArithmeticOperation$DIFF_DIV_RIGHT_getInstance());
    var chv = new ArithmeticFunction(chvFract, new ConstantFunction(100.0), ArithmeticOperation$MULT_getInstance());
    var zero = new ZeroFunction();
    return listOf([chv, zero]);
  };
  function ChaikinVolatility$Companion() {
    ChaikinVolatility$Companion_instance = this;
    this.SHIFT_LENGTH_PARAMETER = 'shiftLength';
  }
  ChaikinVolatility$Companion.prototype.constructSmaHighLowDiffFunction_0 = function (data, length) {
    var diffPrice = CommonFunctions_getInstance().constructHighLowDiff_t0cfja$(data);
    return new MovingAverageSimple(diffPrice, length);
  };
  ChaikinVolatility$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ChaikinVolatility$Companion_instance = null;
  function ChaikinVolatility$Companion_getInstance() {
    if (ChaikinVolatility$Companion_instance === null) {
      new ChaikinVolatility$Companion();
    }
    return ChaikinVolatility$Companion_instance;
  }
  ChaikinVolatility.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ChaikinVolatility',
    interfaces: [StudyBuilder]
  };
  function ChandeMomentumOscillator() {
    StudyBuilder.call(this);
  }
  ChandeMomentumOscillator.prototype.constructInOrDecrementFunction_0 = function (closeDiffFactor, factor) {
    var closeDiff = new ArithmeticFunction(closeDiffFactor, new ConstantFunction(factor), ArithmeticOperation$MULT_getInstance());
    return new ArithmeticFunction(closeDiff, new ConstantFunction(0.0), ArithmeticOperation$MAX_getInstance());
  };
  ChandeMomentumOscillator.prototype.validateParameters_x7u0o8$ = function (params) {
    StudyBuilder.prototype.validateLength_x7u0o8$.call(this, params);
  };
  ChandeMomentumOscillator.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    var tmp$;
    var length = typeof (tmp$ = params.get_11rb$(StudyBuilder$Companion_getInstance().LENGTH_PARAMETER)) === 'number' ? tmp$ : throwCCE();
    var price = new PriceSourceFunction(data, PriceFieldEnum$CLOSE_getInstance());
    var increment = this.constructInOrDecrementFunction_0(new DiffPrevFunction(price), 1);
    var sumIncrement = new SumFunction(increment, length);
    var decrement = this.constructInOrDecrementFunction_0(new DiffPrevFunction(price), -1);
    var sumDecrement = new SumFunction(decrement, length);
    var cmoFract = new ArithmeticFunction(sumIncrement, sumDecrement, ArithmeticOperation$DIFF_DIV_SUM_ZERO_getInstance());
    var cmo = WindowFunction_init_0(new ArithmeticFunction(cmoFract, new ConstantFunction(100.0), ArithmeticOperation$MULT_getInstance()), 0, true);
    var upper = new ConstantFunction(50.0);
    var lower = new ConstantFunction(-50.0);
    var zero = new ZeroFunction();
    return listOf([cmo, upper, lower, zero]);
  };
  ChandeMomentumOscillator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ChandeMomentumOscillator',
    interfaces: [StudyBuilder]
  };
  function CommoditySelection() {
    StudyBuilder.call(this);
    this.BIG_POINT_VALUE = 'bigPointValue';
    this.MY_COMMISSION = 'myCommission';
    this.MY_MARGIN = 'myMargin';
  }
  CommoditySelection.prototype.validateParameters_x7u0o8$ = function (params) {
    StudyBuilder.prototype.validateDouble_ez016i$.call(this, params, this.BIG_POINT_VALUE);
    StudyBuilder.prototype.validateLength_x7u0o8$.call(this, params);
    StudyBuilder.prototype.validateDouble_ez016i$.call(this, params, this.MY_COMMISSION);
    StudyBuilder.prototype.validateDouble_ez016i$.call(this, params, this.MY_MARGIN);
    StudyBuilder.prototype.validateAverageField_x7u0o8$.call(this, params);
  };
  CommoditySelection.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    var si = this.constructCommoditySelection_0(data, params);
    return listOf_0(si);
  };
  CommoditySelection.prototype.constructCommoditySelection_0 = function (data, params) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    var bigPointValue = typeof (tmp$ = params.get_11rb$(this.BIG_POINT_VALUE)) === 'number' ? tmp$ : throwCCE();
    var myCommission = typeof (tmp$_0 = params.get_11rb$(this.MY_COMMISSION)) === 'number' ? tmp$_0 : throwCCE();
    var myMargin = typeof (tmp$_1 = params.get_11rb$(this.MY_MARGIN)) === 'number' ? tmp$_1 : throwCCE();
    var length = typeof (tmp$_2 = params.get_11rb$(StudyBuilder$Companion_getInstance().LENGTH_PARAMETER)) === 'number' ? tmp$_2 : throwCCE();
    var averageType = Kotlin.isType(tmp$_3 = params.get_11rb$(StudyBuilder$Companion_getInstance().AVERAGE_PARAMETER), AverageTypeEnum) ? tmp$_3 : throwCCE();
    var coefficient = this.constructCoefficient_0(bigPointValue, myCommission, myMargin);
    var adxr = ADXR$Companion_getInstance().constructADXR_3dj0x8$(data, length, averageType);
    var movingAverage = CommonFunctions_getInstance().constructAverage_dtut4e$(averageType, CommonFunctions_getInstance().constructTrueRange_t0cfja$(data), length);
    var coefficientMultByMovingAverage = new ArithmeticFunction(coefficient, movingAverage, ArithmeticOperation$MULT_getInstance());
    return new ArithmeticFunction(coefficientMultByMovingAverage, adxr, ArithmeticOperation$MULT_getInstance());
  };
  CommoditySelection.prototype.constructCoefficient_0 = function (bigPointValue, myCommission, myMargin) {
    var c100 = new ConstantFunction(100.0);
    var x = new ArithmeticFunction(new ConstantFunction(bigPointValue), new ConstantFunction(Math_0.sqrt(myMargin)), ArithmeticOperation$DIV_getInstance());
    var y = new ConstantFunction(150 + myCommission);
    var z = new ArithmeticFunction(x, y, ArithmeticOperation$DIV_getInstance());
    return new ArithmeticFunction(c100, z, ArithmeticOperation$MULT_getInstance());
  };
  CommoditySelection.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CommoditySelection',
    interfaces: [StudyBuilder]
  };
  function Comparative() {
    StudyBuilder.call(this);
  }
  Comparative.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    var function_0 = new PriceSourceFunction(data, PriceFieldEnum$CLOSE_getInstance());
    return listOf_0(function_0);
  };
  Comparative.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Comparative',
    interfaces: [StudyBuilder]
  };
  function DEMA() {
    StudyBuilder.call(this);
  }
  DEMA.prototype.validateParameters_x7u0o8$ = function (params) {
    StudyBuilder.prototype.validateLength_x7u0o8$.call(this, params);
    StudyBuilder.prototype.validatePriceField_x7u0o8$.call(this, params);
    StudyBuilder.prototype.validateDisplace_x7u0o8$.call(this, params);
  };
  DEMA.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    var tmp$, tmp$_0, tmp$_1;
    var length = typeof (tmp$ = params.get_11rb$(StudyBuilder$Companion_getInstance().LENGTH_PARAMETER)) === 'number' ? tmp$ : throwCCE();
    var displace = typeof (tmp$_0 = params.get_11rb$(StudyBuilder$Companion_getInstance().DISPLACE_PARAMETER)) === 'number' ? tmp$_0 : throwCCE();
    var priceField = Kotlin.isType(tmp$_1 = params.get_11rb$(StudyBuilder$Companion_getInstance().PRICE_PARAMETER), PriceFieldEnum) ? tmp$_1 : throwCCE();
    var term1 = new ArithmeticFunction(new ConstantFunction(2.0), new MovingAverageExponential(new PriceSourceFunction(data, priceField), length), ArithmeticOperation$MULT_getInstance());
    var term2 = new MovingAverageExponential(new MovingAverageExponential(new PriceSourceFunction(data, priceField), length), length, length);
    var dema = new ArithmeticFunction(term1, term2, ArithmeticOperation$MINUS_getInstance());
    return listOf_0(new DisplacementFunction(dema, displace));
  };
  DEMA.prototype.getExpansionSize_x7u0o8$ = function (params) {
    var tmp$;
    var displace = typeof (tmp$ = params.get_11rb$(StudyBuilder$Companion_getInstance().DISPLACE_PARAMETER)) === 'number' ? tmp$ : throwCCE();
    return -displace | 0;
  };
  DEMA.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DEMA',
    interfaces: [StudyBuilder]
  };
  function DMI() {
    StudyBuilder.call(this);
  }
  DMI.prototype.validateParameters_x7u0o8$ = function (params) {
    StudyBuilder.prototype.validateLength_x7u0o8$.call(this, params);
    StudyBuilder.prototype.validateAverageField_x7u0o8$.call(this, params);
  };
  DMI.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    var tmp$, tmp$_0;
    var length = typeof (tmp$ = params.get_11rb$(StudyBuilder$Companion_getInstance().LENGTH_PARAMETER)) === 'number' ? tmp$ : throwCCE();
    var averageType = Kotlin.isType(tmp$_0 = params.get_11rb$(StudyBuilder$Companion_getInstance().AVERAGE_PARAMETER), AverageTypeEnum) ? tmp$_0 : throwCCE();
    var diPlus = CommonFunctions_getInstance().constructDirectionalIndex_ixau0l$(data, length, true, averageType);
    var diMinus = CommonFunctions_getInstance().constructDirectionalIndex_ixau0l$(data, length, false, averageType);
    var aDx = CommonFunctions_getInstance().constructADX_3dj0x8$(data, length, averageType);
    return listOf([WindowFunction_init_0(diMinus, 0, true), WindowFunction_init_0(diPlus, 0, true), aDx]);
  };
  DMI.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DMI',
    interfaces: [StudyBuilder]
  };
  function DayOpenClose() {
    DayOpenClose$Companion_getInstance();
    StudyBuilder.call(this);
  }
  DayOpenClose.prototype.validateParameters_x7u0o8$ = function (params) {
    StudyBuilder.prototype.validateAggregation_ez016i$.call(this, params, DayOpenClose$Companion_getInstance().AGGREGATION_PARAMETER);
    StudyBuilder.prototype.validateBoolean_ez016i$.call(this, params, DayOpenClose$Companion_getInstance().SHOW_ONLY_LAST_PARAMETER);
    StudyBuilder.prototype.validateInteger_ez016i$.call(this, params, DayOpenClose$Companion_getInstance().RIGHT_EXPANSION_0);
  };
  DayOpenClose.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    var tmp$;
    var aggregation = Kotlin.isType(tmp$ = params.get_11rb$(DayOpenClose$Companion_getInstance().AGGREGATION_PARAMETER), AggregationTypeEnum) ? tmp$ : throwCCE();
    var open = new PriceAggregatedSourceFunction(data, aggregation, PriceFieldEnum$OPEN_getInstance());
    var close = new PriceAggregatedSourceFunction(data, aggregation, PriceFieldEnum$CLOSE_getInstance());
    return listOf([open, close]);
  };
  DayOpenClose.prototype.getExpansionSize_x7u0o8$ = function (params) {
    var tmp$;
    return typeof (tmp$ = params.get_11rb$(DayOpenClose$Companion_getInstance().RIGHT_EXPANSION_0)) === 'number' ? tmp$ : throwCCE();
  };
  DayOpenClose.prototype.getAggregationType_x7u0o8$ = function (params) {
    var tmp$;
    return Kotlin.isType(tmp$ = params.get_11rb$(DayOpenClose$Companion_getInstance().AGGREGATION_PARAMETER), AggregationTypeEnum) ? tmp$ : throwCCE();
  };
  DayOpenClose.prototype.isOnlyLastAggregatedPeriod_x7u0o8$ = function (params) {
    var tmp$;
    return typeof (tmp$ = params.get_11rb$(DayOpenClose$Companion_getInstance().SHOW_ONLY_LAST_PARAMETER)) === 'boolean' ? tmp$ : throwCCE();
  };
  function DayOpenClose$Companion() {
    DayOpenClose$Companion_instance = this;
    this.AGGREGATION_PARAMETER = 'aggregation';
    this.SHOW_ONLY_LAST_PARAMETER = 'showOnlyLast';
    this.RIGHT_EXPANSION_0 = 'rightexpansion';
  }
  DayOpenClose$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var DayOpenClose$Companion_instance = null;
  function DayOpenClose$Companion_getInstance() {
    if (DayOpenClose$Companion_instance === null) {
      new DayOpenClose$Companion();
    }
    return DayOpenClose$Companion_instance;
  }
  DayOpenClose.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DayOpenClose',
    interfaces: [StudyBuilder]
  };
  function DeMarker() {
    StudyBuilder.call(this);
  }
  DeMarker.prototype.constructHighAverageFunction_0 = function (data) {
    var highDiff = new DiffPrevFunction(new PriceSourceFunction(data, PriceFieldEnum$HIGH_getInstance()));
    var highDiffPos = new ArithmeticFunction(new ZeroFunction(), highDiff, ArithmeticOperation$MAX_getInstance());
    return new MovingAverageSimple(highDiffPos, 8);
  };
  DeMarker.prototype.constructLowAverageFunction_0 = function (data) {
    var lowDiff = new DiffPrevFunction(new PriceSourceFunction(data, PriceFieldEnum$LOW_getInstance()));
    var negLowDiff = new ArithmeticFunction(new ZeroFunction(), lowDiff, ArithmeticOperation$MINUS_getInstance());
    var lowDiffPos = new ArithmeticFunction(new ZeroFunction(), negLowDiff, ArithmeticOperation$MAX_getInstance());
    return new MovingAverageSimple(lowDiffPos, 8);
  };
  DeMarker.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    var c100 = new ConstantFunction(100.0);
    var function_0 = new ArithmeticFunction(this.constructHighAverageFunction_0(data), this.constructLowAverageFunction_0(data), ArithmeticOperation$PLUS_getInstance());
    var dm = WindowFunction_init_0(new ArithmeticFunction(new ArithmeticFunction(this.constructHighAverageFunction_0(data), function_0, ArithmeticOperation$DIV_ZERO_getInstance()), c100, ArithmeticOperation$MULT_getInstance()), 0, true);
    return listOf_0(dm);
  };
  DeMarker.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DeMarker',
    interfaces: [StudyBuilder]
  };
  function DetrendedPriceOsc() {
    StudyBuilder.call(this);
  }
  DetrendedPriceOsc.prototype.validateParameters_x7u0o8$ = function (params) {
    StudyBuilder.prototype.validateLength_x7u0o8$.call(this, params);
    StudyBuilder.prototype.validatePriceField_x7u0o8$.call(this, params);
  };
  DetrendedPriceOsc.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    var tmp$, tmp$_0;
    var priceField = Kotlin.isType(tmp$ = params.get_11rb$(StudyBuilder$Companion_getInstance().PRICE_PARAMETER), PriceFieldEnum) ? tmp$ : throwCCE();
    var length = typeof (tmp$_0 = params.get_11rb$(StudyBuilder$Companion_getInstance().LENGTH_PARAMETER)) === 'number' ? tmp$_0 : throwCCE();
    var disp = (length / 2 | 0) + 1 | 0;
    var price = new PriceSourceFunction(data, priceField);
    var dispPriceAv = new DisplacementFunction(price, -disp | 0);
    var sma = new MovingAverageSimple(dispPriceAv, length);
    var dpo = new ArithmeticFunction(price, sma, ArithmeticOperation$MINUS_getInstance());
    var zero = new ZeroFunction();
    return listOf([dpo, zero]);
  };
  DetrendedPriceOsc.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DetrendedPriceOsc',
    interfaces: [StudyBuilder]
  };
  function DynamicMomentumIndex() {
    DynamicMomentumIndex$Companion_getInstance();
    StudyBuilder.call(this);
  }
  DynamicMomentumIndex.prototype.validateParameters_x7u0o8$ = function (params) {
    StudyBuilder.prototype.validateInteger_ez016i$.call(this, params, DynamicMomentumIndex$Companion_getInstance().UPPER_LIMIT_0);
    StudyBuilder.prototype.validateInteger_ez016i$.call(this, params, DynamicMomentumIndex$Companion_getInstance().LOWER_LIMIT_0);
    StudyBuilder.prototype.validateInteger_ez016i$.call(this, params, DynamicMomentumIndex$Companion_getInstance().STDEV_LENGTH_0);
    StudyBuilder.prototype.validateInteger_ez016i$.call(this, params, DynamicMomentumIndex$Companion_getInstance().AVG_OF_STDEV_LENGTH_0);
    StudyBuilder.prototype.validateInteger_ez016i$.call(this, params, DynamicMomentumIndex$Companion_getInstance().DYMI_LENGTH_0);
  };
  DynamicMomentumIndex.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6;
    var stdevLength = typeof (tmp$ = params.get_11rb$(DynamicMomentumIndex$Companion_getInstance().STDEV_LENGTH_0)) === 'number' ? tmp$ : throwCCE();
    var avgOfStdevLength = typeof (tmp$_0 = params.get_11rb$(DynamicMomentumIndex$Companion_getInstance().AVG_OF_STDEV_LENGTH_0)) === 'number' ? tmp$_0 : throwCCE();
    var dymiLength = typeof (tmp$_1 = params.get_11rb$(DynamicMomentumIndex$Companion_getInstance().DYMI_LENGTH_0)) === 'number' ? tmp$_1 : throwCCE();
    var upperLimit = typeof (tmp$_2 = params.get_11rb$(DynamicMomentumIndex$Companion_getInstance().UPPER_LIMIT_0)) === 'number' ? tmp$_2 : throwCCE();
    var lowerLimit = typeof (tmp$_3 = params.get_11rb$(DynamicMomentumIndex$Companion_getInstance().LOWER_LIMIT_0)) === 'number' ? tmp$_3 : throwCCE();
    var oversold = typeof (tmp$_4 = params.get_11rb$(DynamicMomentumIndex$Companion_getInstance().OVERSOLD_0)) === 'number' ? tmp$_4 : throwCCE();
    var overbought = typeof (tmp$_5 = params.get_11rb$(DynamicMomentumIndex$Companion_getInstance().OVERBOUGHT_0)) === 'number' ? tmp$_5 : throwCCE();
    var priceFieldEnum = Kotlin.isType(tmp$_6 = params.get_11rb$(StudyBuilder$Companion_getInstance().PRICE_PARAMETER), PriceFieldEnum) ? tmp$_6 : throwCCE();
    var priceSource = new PriceSourceFunction(data, priceFieldEnum);
    var dmi = DynamicMomentumIndex$Companion_getInstance().constructDynamicMomentumIndex_bfq7bx$(priceSource, stdevLength, avgOfStdevLength, dymiLength, lowerLimit, upperLimit, AverageTypeEnum$WILDERS_getInstance());
    return listOf([dmi, new ConstantFunction(overbought), new ConstantFunction(oversold)]);
  };
  function DynamicMomentumIndex$Companion() {
    DynamicMomentumIndex$Companion_instance = this;
    this.UPPER_LIMIT_0 = 'maxDynamicLength';
    this.LOWER_LIMIT_0 = 'minDynamicLength';
    this.STDEV_LENGTH_0 = 'stDevLength';
    this.AVG_OF_STDEV_LENGTH_0 = 'stDevAverageLength';
    this.DYMI_LENGTH_0 = 'dynamicLength';
    this.OVERSOLD_0 = 'oversold';
    this.OVERBOUGHT_0 = 'overbought';
  }
  DynamicMomentumIndex$Companion.prototype.constructRatio_0 = function (priceSource, stdevLength, avgOfStdevLength) {
    var std = new StandardDeviationFunction(priceSource, stdevLength);
    var stdAverage = new MovingAverageSimple(std, avgOfStdevLength);
    return new ArithmeticFunction(std, stdAverage, ArithmeticOperation$DIV_getInstance());
  };
  DynamicMomentumIndex$Companion.prototype.constructDynamicLength_0 = function (ratio, dymiLength) {
    return new Floor(new ArithmeticFunction(new ConstantFunction(dymiLength), ratio, ArithmeticOperation$DIV_getInstance()));
  };
  DynamicMomentumIndex$Companion.prototype.constructDynamicMomentumIndex_bfq7bx$ = function (priceSource, stdevLength, avgOfStdevLength, dymiLength, lowerLimit, upperLimit, averageType) {
    var ratio = this.constructRatio_0(priceSource, stdevLength, avgOfStdevLength);
    var dynamicLength = this.constructDynamicLength_0(ratio, dymiLength);
    return new DynamicMomentumIndexFunction(priceSource, dynamicLength, lowerLimit, upperLimit, averageType);
  };
  DynamicMomentumIndex$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var DynamicMomentumIndex$Companion_instance = null;
  function DynamicMomentumIndex$Companion_getInstance() {
    if (DynamicMomentumIndex$Companion_instance === null) {
      new DynamicMomentumIndex$Companion();
    }
    return DynamicMomentumIndex$Companion_instance;
  }
  DynamicMomentumIndex.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DynamicMomentumIndex',
    interfaces: [StudyBuilder]
  };
  function EMA() {
    StudyBuilder.call(this);
  }
  EMA.prototype.validateParameters_x7u0o8$ = function (params) {
    StudyBuilder.prototype.validateLength_x7u0o8$.call(this, params);
    StudyBuilder.prototype.validatePriceField_x7u0o8$.call(this, params);
    StudyBuilder.prototype.validateDisplace_x7u0o8$.call(this, params);
  };
  EMA.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    var tmp$, tmp$_0, tmp$_1;
    var length = typeof (tmp$ = params.get_11rb$(StudyBuilder$Companion_getInstance().LENGTH_PARAMETER)) === 'number' ? tmp$ : throwCCE();
    var displace = typeof (tmp$_0 = params.get_11rb$(StudyBuilder$Companion_getInstance().DISPLACE_PARAMETER)) === 'number' ? tmp$_0 : throwCCE();
    var priceField = Kotlin.isType(tmp$_1 = params.get_11rb$(StudyBuilder$Companion_getInstance().PRICE_PARAMETER), PriceFieldEnum) ? tmp$_1 : throwCCE();
    var priceFunc = new PriceSourceFunction(data, priceField);
    var emaFunc = new MovingAverageExponential(priceFunc, length);
    return listOf_0(displace === 0 ? emaFunc : new DisplacementFunction(emaFunc, displace));
  };
  EMA.prototype.getExpansionSize_x7u0o8$ = function (params) {
    var tmp$;
    var displace = typeof (tmp$ = params.get_11rb$(StudyBuilder$Companion_getInstance().DISPLACE_PARAMETER)) === 'number' ? tmp$ : throwCCE();
    return -displace | 0;
  };
  EMA.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EMA',
    interfaces: [StudyBuilder]
  };
  function Elder() {
    StudyBuilder.call(this);
  }
  Elder.prototype.validateParameters_x7u0o8$ = function (params) {
    StudyBuilder.prototype.validateLength_x7u0o8$.call(this, params);
  };
  Elder.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    var tmp$;
    var length = typeof (tmp$ = params.get_11rb$(StudyBuilder$Companion_getInstance().LENGTH_PARAMETER)) === 'number' ? tmp$ : throwCCE();
    var closePriceSource = new PriceSourceFunction(data, PriceFieldEnum$CLOSE_getInstance());
    var avgBull = new MovingAverageExponential(closePriceSource, length);
    var avgBear = new MovingAverageExponential(closePriceSource, length);
    var high = new PriceSourceFunction(data, PriceFieldEnum$HIGH_getInstance());
    var low = new PriceSourceFunction(data, PriceFieldEnum$LOW_getInstance());
    var bull = new ArithmeticFunction(high, avgBull, ArithmeticOperation$MINUS_getInstance());
    var bear = new ArithmeticFunction(low, avgBear, ArithmeticOperation$MINUS_getInstance());
    var zero = new ZeroFunction();
    return listOf([bull, bear, zero]);
  };
  Elder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Elder',
    interfaces: [StudyBuilder]
  };
  function EnvelopeCommon() {
    EnvelopeCommon$Companion_getInstance();
    StudyBuilder.call(this);
  }
  EnvelopeCommon.prototype.constructPercentFunction_po9lx$ = function (data, params, isAbove) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
    var length = typeof (tmp$ = params.get_11rb$(StudyBuilder$Companion_getInstance().LENGTH_PARAMETER)) === 'number' ? tmp$ : throwCCE();
    var displace = typeof (tmp$_0 = params.get_11rb$(StudyBuilder$Companion_getInstance().DISPLACE_PARAMETER)) === 'number' ? tmp$_0 : throwCCE();
    var priceField;
    var percent;
    if (isAbove) {
      priceField = Kotlin.isType(tmp$_1 = params.get_11rb$(EnvelopeCommon$Companion_getInstance().PRICE_ABOVE_PARAMETER), PriceFieldEnum) ? tmp$_1 : throwCCE();
      percent = 1 + (typeof (tmp$_2 = params.get_11rb$(EnvelopeCommon$Companion_getInstance().PERCENT_ABOVE_PARAMETER)) === 'number' ? tmp$_2 : throwCCE()) / 100;
    }
     else {
      priceField = Kotlin.isType(tmp$_3 = params.get_11rb$(EnvelopeCommon$Companion_getInstance().PRICE_BELOW_PARAMETER), PriceFieldEnum) ? tmp$_3 : throwCCE();
      percent = 1 - (typeof (tmp$_4 = params.get_11rb$(EnvelopeCommon$Companion_getInstance().PERCENT_BELOW_PARAMETER)) === 'number' ? tmp$_4 : throwCCE()) / 100;
    }
    var price = new PriceSourceFunction(data, priceField);
    var average = this.getMovingAverage_mpl4nj$(price, length);
    var displacement = new DisplacementFunction(average, displace);
    return new ArithmeticFunction(displacement, new ConstantFunction(percent), ArithmeticOperation$MULT_getInstance());
  };
  EnvelopeCommon.prototype.validateParameters_x7u0o8$ = function (params) {
    StudyBuilder.prototype.validateLength_x7u0o8$.call(this, params);
    StudyBuilder.prototype.validateDisplace_x7u0o8$.call(this, params);
    StudyBuilder.prototype.validateParameter_ez016i$.call(this, params, EnvelopeCommon$Companion_getInstance().PRICE_ABOVE_PARAMETER);
    StudyBuilder.prototype.validateDouble_ez016i$.call(this, params, EnvelopeCommon$Companion_getInstance().PERCENT_ABOVE_PARAMETER);
    StudyBuilder.prototype.validateParameter_ez016i$.call(this, params, EnvelopeCommon$Companion_getInstance().PRICE_BELOW_PARAMETER);
    StudyBuilder.prototype.validateDouble_ez016i$.call(this, params, EnvelopeCommon$Companion_getInstance().PERCENT_BELOW_PARAMETER);
  };
  EnvelopeCommon.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    var above = this.constructPercentFunction_po9lx$(data, params, true);
    var below = this.constructPercentFunction_po9lx$(data, params, false);
    return listOf([above, below]);
  };
  EnvelopeCommon.prototype.getExpansionSize_x7u0o8$ = function (params) {
    var tmp$;
    var displace = typeof (tmp$ = params.get_11rb$(StudyBuilder$Companion_getInstance().DISPLACE_PARAMETER)) === 'number' ? tmp$ : throwCCE();
    return -displace | 0;
  };
  function EnvelopeCommon$Companion() {
    EnvelopeCommon$Companion_instance = this;
    this.PRICE_ABOVE_PARAMETER = 'priceAbove';
    this.PERCENT_ABOVE_PARAMETER = 'percentAbove';
    this.PRICE_BELOW_PARAMETER = 'priceBelow';
    this.PERCENT_BELOW_PARAMETER = 'percentBelow';
  }
  EnvelopeCommon$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var EnvelopeCommon$Companion_instance = null;
  function EnvelopeCommon$Companion_getInstance() {
    if (EnvelopeCommon$Companion_instance === null) {
      new EnvelopeCommon$Companion();
    }
    return EnvelopeCommon$Companion_instance;
  }
  EnvelopeCommon.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EnvelopeCommon',
    interfaces: [StudyBuilder]
  };
  function EnvelopeEMA() {
    EnvelopeCommon.call(this);
  }
  EnvelopeEMA.prototype.getMovingAverage_mpl4nj$ = function (price, length) {
    return new MovingAverageExponential(price, length);
  };
  EnvelopeEMA.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EnvelopeEMA',
    interfaces: [EnvelopeCommon]
  };
  function EnvelopeSMA() {
    EnvelopeCommon.call(this);
  }
  EnvelopeSMA.prototype.getMovingAverage_mpl4nj$ = function (price, length) {
    return new MovingAverageSimple(price, length);
  };
  EnvelopeSMA.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EnvelopeSMA',
    interfaces: [EnvelopeCommon]
  };
  function EnvelopeSMMA() {
    EnvelopeCommon.call(this);
  }
  EnvelopeSMMA.prototype.getMovingAverage_mpl4nj$ = function (price, length) {
    return new MovingAverageSmoothed(price, length);
  };
  EnvelopeSMMA.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EnvelopeSMMA',
    interfaces: [EnvelopeCommon]
  };
  function EnvelopeWMA() {
    EnvelopeCommon.call(this);
  }
  EnvelopeWMA.prototype.getMovingAverage_mpl4nj$ = function (price, length) {
    return new MovingAverageWeighted(price, length);
  };
  EnvelopeWMA.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EnvelopeWMA',
    interfaces: [EnvelopeCommon]
  };
  function FastStochastic() {
    FastStochastic$Companion_getInstance();
    StudyBuilder.call(this);
  }
  FastStochastic.prototype.validateParameters_x7u0o8$ = function (params) {
    StudyBuilder.prototype.validateInteger_ez016i$.call(this, params, FastStochastic$Companion_getInstance().KPERIOD_PARAMETER);
    StudyBuilder.prototype.validateInteger_ez016i$.call(this, params, FastStochastic$Companion_getInstance().DPERIOD_PARAMETER);
    StudyBuilder.prototype.validateInteger_ez016i$.call(this, params, FastStochastic$Companion_getInstance().OVERBOUGHT_PARAMETER);
    StudyBuilder.prototype.validateInteger_ez016i$.call(this, params, FastStochastic$Companion_getInstance().OVERSOLD_PARAMETER);
    StudyBuilder.prototype.validateAverageField_x7u0o8$.call(this, params);
  };
  FastStochastic.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    var kperiod = typeof (tmp$ = params.get_11rb$(FastStochastic$Companion_getInstance().KPERIOD_PARAMETER)) === 'number' ? tmp$ : throwCCE();
    var dperiod = typeof (tmp$_0 = params.get_11rb$(FastStochastic$Companion_getInstance().DPERIOD_PARAMETER)) === 'number' ? tmp$_0 : throwCCE();
    var overbought = typeof (tmp$_1 = params.get_11rb$(FastStochastic$Companion_getInstance().OVERBOUGHT_PARAMETER)) === 'number' ? tmp$_1 : throwCCE();
    var oversold = typeof (tmp$_2 = params.get_11rb$(FastStochastic$Companion_getInstance().OVERSOLD_PARAMETER)) === 'number' ? tmp$_2 : throwCCE();
    var averageType = Kotlin.isType(tmp$_3 = params.get_11rb$(StudyBuilder$Companion_getInstance().AVERAGE_PARAMETER), AverageTypeEnum) ? tmp$_3 : throwCCE();
    return CommonFunctions_getInstance().constructStochastic_qdi6fo$(data, dperiod, overbought, oversold, kperiod, 1, averageType);
  };
  function FastStochastic$Companion() {
    FastStochastic$Companion_instance = this;
    this.KPERIOD_PARAMETER = 'kPeriod';
    this.DPERIOD_PARAMETER = 'dPeriod';
    this.OVERBOUGHT_PARAMETER = 'overbought';
    this.OVERSOLD_PARAMETER = 'oversold';
  }
  FastStochastic$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var FastStochastic$Companion_instance = null;
  function FastStochastic$Companion_getInstance() {
    if (FastStochastic$Companion_instance === null) {
      new FastStochastic$Companion();
    }
    return FastStochastic$Companion_instance;
  }
  FastStochastic.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FastStochastic',
    interfaces: [StudyBuilder]
  };
  function FibonacciBollingerBands() {
    FibonacciBollingerBands$Companion_getInstance();
    StudyBuilder.call(this);
  }
  FibonacciBollingerBands.prototype.validateParameters_x7u0o8$ = function (params) {
    StudyBuilder.prototype.validateLength_x7u0o8$.call(this, params);
    StudyBuilder.prototype.validatePriceField_x7u0o8$.call(this, params);
    StudyBuilder.prototype.validateInteger_ez016i$.call(this, params, FibonacciBollingerBands$Companion_getInstance().MULTIPLIER_PARAMETER_0);
  };
  FibonacciBollingerBands.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    var tmp$, tmp$_0, tmp$_1;
    var length = typeof (tmp$ = params.get_11rb$(StudyBuilder$Companion_getInstance().LENGTH_PARAMETER)) === 'number' ? tmp$ : throwCCE();
    var priceField = Kotlin.isType(tmp$_0 = params.get_11rb$(StudyBuilder$Companion_getInstance().PRICE_PARAMETER), PriceFieldEnum) ? tmp$_0 : throwCCE();
    var mult = typeof (tmp$_1 = params.get_11rb$(FibonacciBollingerBands$Companion_getInstance().MULTIPLIER_PARAMETER_0)) === 'number' ? tmp$_1 : throwCCE();
    var volume = new PriceSourceFunction(data, PriceFieldEnum$VOLUME_getInstance());
    var src = new PriceSourceFunction(data, priceField);
    var sma1 = new MovingAverageSimple(new ArithmeticFunction(volume, src, ArithmeticOperation$MULT_getInstance()), length);
    var sma2 = new MovingAverageSimple(volume, length);
    var basis = new ArithmeticFunction(sma1, sma2, ArithmeticOperation$DIV_getInstance());
    var dev = new ArithmeticFunction(new ConstantFunction(mult), new StandardDeviationFunction(src, length), ArithmeticOperation$MULT_getInstance());
    var const1 = new ArithmeticFunction(new ConstantFunction(0.236), dev, ArithmeticOperation$MULT_getInstance());
    var const2 = new ArithmeticFunction(new ConstantFunction(0.382), dev, ArithmeticOperation$MULT_getInstance());
    var const3 = new ArithmeticFunction(new ConstantFunction(0.5), dev, ArithmeticOperation$MULT_getInstance());
    var const4 = new ArithmeticFunction(new ConstantFunction(0.618), dev, ArithmeticOperation$MULT_getInstance());
    var const5 = new ArithmeticFunction(new ConstantFunction(0.764), dev, ArithmeticOperation$MULT_getInstance());
    var const6 = new ArithmeticFunction(new ConstantFunction(1.0), dev, ArithmeticOperation$MULT_getInstance());
    var upper_1 = new ArithmeticFunction(basis, const1, ArithmeticOperation$PLUS_getInstance());
    var upper_2 = new ArithmeticFunction(basis, const2, ArithmeticOperation$PLUS_getInstance());
    var upper_3 = new ArithmeticFunction(basis, const3, ArithmeticOperation$PLUS_getInstance());
    var upper_4 = new ArithmeticFunction(basis, const4, ArithmeticOperation$PLUS_getInstance());
    var upper_5 = new ArithmeticFunction(basis, const5, ArithmeticOperation$PLUS_getInstance());
    var upper_6 = new ArithmeticFunction(basis, const6, ArithmeticOperation$PLUS_getInstance());
    var lower_1 = new ArithmeticFunction(basis, const1, ArithmeticOperation$MINUS_getInstance());
    var lower_2 = new ArithmeticFunction(basis, const2, ArithmeticOperation$MINUS_getInstance());
    var lower_3 = new ArithmeticFunction(basis, const3, ArithmeticOperation$MINUS_getInstance());
    var lower_4 = new ArithmeticFunction(basis, const4, ArithmeticOperation$MINUS_getInstance());
    var lower_5 = new ArithmeticFunction(basis, const5, ArithmeticOperation$MINUS_getInstance());
    var lower_6 = new ArithmeticFunction(basis, const6, ArithmeticOperation$MINUS_getInstance());
    return listOf([basis, upper_1, upper_2, upper_3, upper_4, upper_5, upper_6, lower_1, lower_2, lower_3, lower_4, lower_5, lower_6]);
  };
  function FibonacciBollingerBands$Companion() {
    FibonacciBollingerBands$Companion_instance = this;
    this.MULTIPLIER_PARAMETER_0 = 'multiplier';
  }
  FibonacciBollingerBands$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var FibonacciBollingerBands$Companion_instance = null;
  function FibonacciBollingerBands$Companion_getInstance() {
    if (FibonacciBollingerBands$Companion_instance === null) {
      new FibonacciBollingerBands$Companion();
    }
    return FibonacciBollingerBands$Companion_instance;
  }
  FibonacciBollingerBands.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FibonacciBollingerBands',
    interfaces: [StudyBuilder]
  };
  function ForceIndex() {
    StudyBuilder.call(this);
  }
  ForceIndex.prototype.validateParameters_x7u0o8$ = function (params) {
    StudyBuilder.prototype.validateLength_x7u0o8$.call(this, params);
  };
  ForceIndex.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    var tmp$;
    var length = typeof (tmp$ = params.get_11rb$(StudyBuilder$Companion_getInstance().LENGTH_PARAMETER)) === 'number' ? tmp$ : throwCCE();
    var closeDiff = new DiffPrevFunction(new PriceSourceFunction(data, PriceFieldEnum$CLOSE_getInstance()));
    var cv = new ArithmeticFunction(closeDiff, new PriceSourceFunction(data, PriceFieldEnum$VOLUME_getInstance()), ArithmeticOperation$MULT_getInstance());
    var fi = new MovingAverageExponential(cv, length, 1);
    var zero = new ZeroFunction();
    return listOf([fi, zero]);
  };
  ForceIndex.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ForceIndex',
    interfaces: [StudyBuilder]
  };
  function ForecastOscillator() {
    ForecastOscillator$Companion_getInstance();
    StudyBuilder.call(this);
  }
  ForecastOscillator.prototype.validateParameters_x7u0o8$ = function (params) {
    StudyBuilder.prototype.validateLength_x7u0o8$.call(this, params);
    StudyBuilder.prototype.validateInteger_ez016i$.call(this, params, ForecastOscillator$Companion_getInstance().SM_LENGTH);
  };
  ForecastOscillator.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    var tmp$;
    var smLength = typeof (tmp$ = params.get_11rb$(ForecastOscillator$Companion_getInstance().SM_LENGTH)) === 'number' ? tmp$ : throwCCE();
    var fosc = this.constructFosc_0(data, params);
    var zero = new ZeroFunction();
    var sma = new MovingAverageSimple(fosc, smLength);
    return listOf([fosc, sma, zero]);
  };
  ForecastOscillator.prototype.constructFosc_0 = function (data, params) {
    var priceClose = new PriceSourceFunction(data, PriceFieldEnum$CLOSE_getInstance());
    var yForecast = new DisplacementFunction(this.constructForecast_0(data, params), -1);
    var priceCloseMinusForecast = new ArithmeticFunction(priceClose, yForecast, ArithmeticOperation$MINUS_getInstance());
    var divPriceClose = new ArithmeticFunction(priceCloseMinusForecast, priceClose, ArithmeticOperation$DIV_getInstance());
    return new ArithmeticFunction(divPriceClose, new ConstantFunction(100.0), ArithmeticOperation$MULT_getInstance());
  };
  ForecastOscillator.prototype.constructForecast_0 = function (data, params) {
    var tmp$;
    var length = typeof (tmp$ = params.get_11rb$(StudyBuilder$Companion_getInstance().LENGTH_PARAMETER)) === 'number' ? tmp$ : throwCCE();
    var priceClose = new PriceSourceFunction(data, PriceFieldEnum$CLOSE_getInstance());
    var linearRegressionCurve = new LinearRegressionCurveFunction(priceClose, length);
    var linearRegressionSlope = LinearRegressionSlope$Companion_getInstance().constructLinearRegressionSlope_wmug5y$(data, length, PriceFieldEnum$CLOSE_getInstance());
    return new ArithmeticFunction(linearRegressionCurve, linearRegressionSlope, ArithmeticOperation$PLUS_getInstance());
  };
  function ForecastOscillator$Companion() {
    ForecastOscillator$Companion_instance = this;
    this.SM_LENGTH = 'smLength';
  }
  ForecastOscillator$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ForecastOscillator$Companion_instance = null;
  function ForecastOscillator$Companion_getInstance() {
    if (ForecastOscillator$Companion_instance === null) {
      new ForecastOscillator$Companion();
    }
    return ForecastOscillator$Companion_instance;
  }
  ForecastOscillator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ForecastOscillator',
    interfaces: [StudyBuilder]
  };
  function FullStochastic() {
    FullStochastic$Companion_getInstance();
    StudyBuilder.call(this);
  }
  FullStochastic.prototype.validateParameters_x7u0o8$ = function (params) {
    StudyBuilder.prototype.validateInteger_ez016i$.call(this, params, FullStochastic$Companion_getInstance().KPERIOD_PARAMETER);
    StudyBuilder.prototype.validateInteger_ez016i$.call(this, params, FullStochastic$Companion_getInstance().KSLOWING_PARAMETER);
    StudyBuilder.prototype.validateInteger_ez016i$.call(this, params, FullStochastic$Companion_getInstance().DPERIOD_PARAMETER);
    StudyBuilder.prototype.validateInteger_ez016i$.call(this, params, FullStochastic$Companion_getInstance().OVERBOUGHT_PARAMETER);
    StudyBuilder.prototype.validateInteger_ez016i$.call(this, params, FullStochastic$Companion_getInstance().OVERSOLD_PARAMETER);
    StudyBuilder.prototype.validateAverageField_x7u0o8$.call(this, params);
  };
  FullStochastic.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
    var kperiod = typeof (tmp$ = params.get_11rb$(FullStochastic$Companion_getInstance().KPERIOD_PARAMETER)) === 'number' ? tmp$ : throwCCE();
    var kslowing = typeof (tmp$_0 = params.get_11rb$(FullStochastic$Companion_getInstance().KSLOWING_PARAMETER)) === 'number' ? tmp$_0 : throwCCE();
    var dperiod = typeof (tmp$_1 = params.get_11rb$(FullStochastic$Companion_getInstance().DPERIOD_PARAMETER)) === 'number' ? tmp$_1 : throwCCE();
    var overbought = typeof (tmp$_2 = params.get_11rb$(FullStochastic$Companion_getInstance().OVERBOUGHT_PARAMETER)) === 'number' ? tmp$_2 : throwCCE();
    var oversold = typeof (tmp$_3 = params.get_11rb$(FullStochastic$Companion_getInstance().OVERSOLD_PARAMETER)) === 'number' ? tmp$_3 : throwCCE();
    var averageType = Kotlin.isType(tmp$_4 = params.get_11rb$(StudyBuilder$Companion_getInstance().AVERAGE_PARAMETER), AverageTypeEnum) ? tmp$_4 : throwCCE();
    return CommonFunctions_getInstance().constructStochastic_qdi6fo$(data, dperiod, overbought, oversold, kperiod, kslowing, averageType);
  };
  function FullStochastic$Companion() {
    FullStochastic$Companion_instance = this;
    this.KPERIOD_PARAMETER = 'kPeriod';
    this.KSLOWING_PARAMETER = 'kSlowing';
    this.DPERIOD_PARAMETER = 'dPeriod';
    this.OVERBOUGHT_PARAMETER = 'overbought';
    this.OVERSOLD_PARAMETER = 'oversold';
  }
  FullStochastic$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var FullStochastic$Companion_instance = null;
  function FullStochastic$Companion_getInstance() {
    if (FullStochastic$Companion_instance === null) {
      new FullStochastic$Companion();
    }
    return FullStochastic$Companion_instance;
  }
  FullStochastic.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FullStochastic',
    interfaces: [StudyBuilder]
  };
  function GTRAP() {
    GTRAP$Companion_getInstance();
    StudyBuilder.call(this);
  }
  GTRAP.prototype.validateParameters_x7u0o8$ = function (params) {
    StudyBuilder.prototype.validateBoolean_ez016i$.call(this, params, GTRAP$Companion_getInstance().SHOW_PRICE_LINES);
  };
  GTRAP.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    var tmp$;
    var showPriceLines = typeof (tmp$ = params.get_11rb$(GTRAP$Companion_getInstance().SHOW_PRICE_LINES)) === 'boolean' ? tmp$ : throwCCE();
    var highPriceLast = new ETHPriceSourceFunction(data, PriceFieldEnum$HIGH_getInstance(), SessionSet$ONLY_LAST_getInstance());
    var lowPriceLast = new ETHPriceSourceFunction(data, PriceFieldEnum$LOW_getInstance(), SessionSet$ONLY_LAST_getInstance());
    var highPrice = new ETHPriceSourceFunction(data, PriceFieldEnum$HIGH_getInstance(), SessionSet$WITHOUT_LAST_getInstance());
    var lowPrice = new ETHPriceSourceFunction(data, PriceFieldEnum$LOW_getInstance(), SessionSet$WITHOUT_LAST_getInstance());
    var lastHighForAllCandles = new ETHPriceSourceFunction(data, PriceFieldEnum$HIGH_getInstance(), SessionSet$ONLY_LAST_FOR_ALL_CANDLES_getInstance());
    var lastLowForAllCandles = new ETHPriceSourceFunction(data, PriceFieldEnum$LOW_getInstance(), SessionSet$ONLY_LAST_FOR_ALL_CANDLES_getInstance());
    var lines = mutableListOf([highPrice, lowPrice, highPriceLast, lowPriceLast]);
    if (showPriceLines) {
      lines.addAll_brywnq$(listOf([lastHighForAllCandles, lastLowForAllCandles]));
    }
     else {
      lines.addAll_brywnq$(listOf([new ConstantFunction(kotlin_js_internal_DoubleCompanionObject.NaN), new ConstantFunction(kotlin_js_internal_DoubleCompanionObject.NaN)]));
    }
    return lines;
  };
  function GTRAP$Companion() {
    GTRAP$Companion_instance = this;
    this.SHOW_PRICE_LINES = 'showPriceLines';
  }
  GTRAP$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var GTRAP$Companion_instance = null;
  function GTRAP$Companion_getInstance() {
    if (GTRAP$Companion_instance === null) {
      new GTRAP$Companion();
    }
    return GTRAP$Companion_instance;
  }
  GTRAP.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GTRAP',
    interfaces: [StudyBuilder]
  };
  function GatorOscillator() {
    WilliamsAlligator.call(this);
  }
  GatorOscillator.prototype.validateParameters_x7u0o8$ = function (params) {
    this.validateParameter_ez016i$(params, WilliamsAlligator$Companion_getInstance().PRICE_HIGH_PARAMETER);
    this.validateParameter_ez016i$(params, WilliamsAlligator$Companion_getInstance().PRICE_LOW_PARAMETER);
    this.validateInteger_ez016i$(params, WilliamsAlligator$Companion_getInstance().JAW_LENGTH_PARAMETER);
    this.validateInteger_ez016i$(params, WilliamsAlligator$Companion_getInstance().JAW_DISPLACE_PARAMETER);
    this.validateInteger_ez016i$(params, WilliamsAlligator$Companion_getInstance().TEETH_LENGTH_PARAMETER);
    this.validateInteger_ez016i$(params, WilliamsAlligator$Companion_getInstance().TEETH_DISPLACE_PARAMETER);
    this.validateInteger_ez016i$(params, WilliamsAlligator$Companion_getInstance().LIPS_LENGTH_PARAMETER);
    this.validateInteger_ez016i$(params, WilliamsAlligator$Companion_getInstance().LIPS_DISPLACE_PARAMETER);
    this.validateAverageField_x7u0o8$(params);
  };
  GatorOscillator.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7;
    var priceHigh = Kotlin.isType(tmp$ = params.get_11rb$(WilliamsAlligator$Companion_getInstance().PRICE_HIGH_PARAMETER), PriceFieldEnum) ? tmp$ : throwCCE();
    var priceLow = Kotlin.isType(tmp$_0 = params.get_11rb$(WilliamsAlligator$Companion_getInstance().PRICE_LOW_PARAMETER), PriceFieldEnum) ? tmp$_0 : throwCCE();
    var jawLength = typeof (tmp$_1 = params.get_11rb$(WilliamsAlligator$Companion_getInstance().JAW_LENGTH_PARAMETER)) === 'number' ? tmp$_1 : throwCCE();
    var jawDisplace = typeof (tmp$_2 = params.get_11rb$(WilliamsAlligator$Companion_getInstance().JAW_DISPLACE_PARAMETER)) === 'number' ? tmp$_2 : throwCCE();
    var teethLength = typeof (tmp$_3 = params.get_11rb$(WilliamsAlligator$Companion_getInstance().TEETH_LENGTH_PARAMETER)) === 'number' ? tmp$_3 : throwCCE();
    var teethDisplace = typeof (tmp$_4 = params.get_11rb$(WilliamsAlligator$Companion_getInstance().TEETH_DISPLACE_PARAMETER)) === 'number' ? tmp$_4 : throwCCE();
    var lipsLength = typeof (tmp$_5 = params.get_11rb$(WilliamsAlligator$Companion_getInstance().LIPS_LENGTH_PARAMETER)) === 'number' ? tmp$_5 : throwCCE();
    var lipsDisplace = typeof (tmp$_6 = params.get_11rb$(WilliamsAlligator$Companion_getInstance().LIPS_DISPLACE_PARAMETER)) === 'number' ? tmp$_6 : throwCCE();
    var averageType = Kotlin.isType(tmp$_7 = params.get_11rb$(StudyBuilder$Companion_getInstance().AVERAGE_PARAMETER), AverageTypeEnum) ? tmp$_7 : throwCCE();
    var medianPrice = WilliamsAlligator$Companion_getInstance().constructMedianPrice_e6pwgq$(data, priceHigh, priceLow);
    var jawFunction = WilliamsAlligator$Companion_getInstance().constructAlligatorFunction_z9v3e8$(medianPrice, jawLength, -jawDisplace | 0, averageType);
    var teeth1Function = WilliamsAlligator$Companion_getInstance().constructAlligatorFunction_z9v3e8$(medianPrice, teethLength, -teethDisplace | 0, averageType);
    var teeth2Function = WilliamsAlligator$Companion_getInstance().constructAlligatorFunction_z9v3e8$(medianPrice, teethLength, -teethDisplace | 0, averageType);
    var lipsFunction = WilliamsAlligator$Companion_getInstance().constructAlligatorFunction_z9v3e8$(medianPrice, lipsLength, -lipsDisplace | 0, averageType);
    var histogram1 = new AbsFunction(new ArithmeticFunction(jawFunction, teeth1Function, ArithmeticOperation$MINUS_getInstance()));
    var histogram2 = new ArithmeticFunction(new AbsFunction(new ArithmeticFunction(teeth2Function, lipsFunction, ArithmeticOperation$MINUS_getInstance())), new ConstantFunction(-1.0), ArithmeticOperation$MULT_getInstance());
    var zero = new ZeroFunction();
    return listOf([histogram1, histogram2, zero]);
  };
  GatorOscillator.prototype.getExpansionSize_x7u0o8$ = function (params) {
    var tmp$, tmp$_0, tmp$_1;
    var jawDisplace = typeof (tmp$ = params.get_11rb$(WilliamsAlligator$Companion_getInstance().JAW_DISPLACE_PARAMETER)) === 'number' ? tmp$ : throwCCE();
    var teethDisplace = typeof (tmp$_0 = params.get_11rb$(WilliamsAlligator$Companion_getInstance().TEETH_DISPLACE_PARAMETER)) === 'number' ? tmp$_0 : throwCCE();
    var lipsDisplace = typeof (tmp$_1 = params.get_11rb$(WilliamsAlligator$Companion_getInstance().LIPS_DISPLACE_PARAMETER)) === 'number' ? tmp$_1 : throwCCE();
    return MathUtils_getInstance().max_pmhfmb$(new Int32Array([jawDisplace, teethDisplace, lipsDisplace]));
  };
  GatorOscillator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GatorOscillator',
    interfaces: [WilliamsAlligator]
  };
  function HLVolatility() {
    StudyBuilder.call(this);
  }
  HLVolatility.prototype.validateParameters_x7u0o8$ = function (params) {
    StudyBuilder.prototype.validateLength_x7u0o8$.call(this, params);
  };
  HLVolatility.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    var tmp$;
    var length = typeof (tmp$ = params.get_11rb$(StudyBuilder$Companion_getInstance().LENGTH_PARAMETER)) === 'number' ? tmp$ : throwCCE();
    var highPrice = new PriceSourceFunction(data, PriceFieldEnum$HIGH_getInstance());
    var highest = new HighestFunction(highPrice, length);
    var lowPrice = new PriceSourceFunction(data, PriceFieldEnum$LOW_getInstance());
    var lowest = new LowestFunction(lowPrice, length);
    var numerator = new ArithmeticFunction(highest, lowest, ArithmeticOperation$MINUS_getInstance());
    var emaNumerator = new MovingAverageExponential(numerator, length, length);
    var closePrice = new PriceSourceFunction(data, PriceFieldEnum$CLOSE_getInstance());
    var emaClose = new MovingAverageExponential(closePrice, length);
    var hlvFactor = new ArithmeticFunction(emaNumerator, emaClose, ArithmeticOperation$DIV_ZERO_getInstance());
    var hlv = new ArithmeticFunction(hlvFactor, new ConstantFunction(100.0), ArithmeticOperation$MULT_getInstance());
    var zero = new ZeroFunction();
    return listOf([hlv, zero]);
  };
  HLVolatility.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HLVolatility',
    interfaces: [StudyBuilder]
  };
  function Ichimoku() {
    Ichimoku$Companion_getInstance();
    StudyBuilder.call(this);
  }
  Ichimoku.prototype.validateParameters_x7u0o8$ = function (params) {
    StudyBuilder.prototype.validateInteger_ez016i$.call(this, params, Ichimoku$Companion_getInstance().TENKAN_PERIOD_PARAMETER);
    StudyBuilder.prototype.validateInteger_ez016i$.call(this, params, Ichimoku$Companion_getInstance().KIJUN_PERIOD_PARAMETER);
  };
  Ichimoku.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    var tmp$, tmp$_0;
    var tenkanPeriod = typeof (tmp$ = params.get_11rb$(Ichimoku$Companion_getInstance().TENKAN_PERIOD_PARAMETER)) === 'number' ? tmp$ : throwCCE();
    var kijunPeriod = typeof (tmp$_0 = params.get_11rb$(Ichimoku$Companion_getInstance().KIJUN_PERIOD_PARAMETER)) === 'number' ? tmp$_0 : throwCCE();
    var periods = kijunPeriod * 2 | 0;
    var close = new PriceSourceFunction(data, PriceFieldEnum$CLOSE_getInstance());
    var highPrice = new PriceSourceFunction(data, PriceFieldEnum$HIGH_getInstance());
    var lowPrice = new PriceSourceFunction(data, PriceFieldEnum$LOW_getInstance());
    var tenkanSenShow = WindowFunction_init_0(Ichimoku$Companion_getInstance().createIchimokuSen_0(highPrice, lowPrice, tenkanPeriod), 0, true);
    var tenkanSen = WindowFunction_init_0(Ichimoku$Companion_getInstance().createIchimokuSen_0(highPrice, lowPrice, tenkanPeriod), 0, true);
    var kijunSenShow = WindowFunction_init_0(Ichimoku$Companion_getInstance().createIchimokuSen_0(highPrice, lowPrice, kijunPeriod), 0, true);
    var kijunSen = WindowFunction_init_0(Ichimoku$Companion_getInstance().createIchimokuSen_0(highPrice, lowPrice, kijunPeriod), 0, true);
    var chikouSpan = WindowFunction_init_0(new DisplacementFunction(close, kijunPeriod), -kijunPeriod | 0, true);
    var senkouSpanA = WindowFunction_init_0(Ichimoku$Companion_getInstance().createIchimokuSenkouSpanA_0(tenkanSen, kijunSen, kijunPeriod), kijunPeriod, true);
    var senkouSpanB = WindowFunction_init_0(new DisplacementFunction(Ichimoku$Companion_getInstance().createIchimokuSen_0(highPrice, lowPrice, periods), -kijunPeriod | 0), kijunPeriod, true);
    return listOf([tenkanSenShow, kijunSenShow, chikouSpan, senkouSpanA, senkouSpanB]);
  };
  Ichimoku.prototype.getExpansionSize_x7u0o8$ = function (params) {
    var tmp$;
    return typeof (tmp$ = params.get_11rb$(Ichimoku$Companion_getInstance().KIJUN_PERIOD_PARAMETER)) === 'number' ? tmp$ : throwCCE();
  };
  function Ichimoku$Companion() {
    Ichimoku$Companion_instance = this;
    this.TENKAN_PERIOD_PARAMETER = 'tenkanPeriod';
    this.KIJUN_PERIOD_PARAMETER = 'kijunPeriod';
  }
  Ichimoku$Companion.prototype.createIchimokuSen_0 = function (highPrice, lowPrice, length) {
    var maxPrice = new HighestFunction(highPrice, length);
    var minPrice = new LowestFunction(lowPrice, length);
    var maxPlusMin = new ArithmeticFunction(maxPrice, minPrice, ArithmeticOperation$PLUS_getInstance());
    return new ArithmeticFunction(maxPlusMin, new ConstantFunction(2.0), ArithmeticOperation$DIV_getInstance());
  };
  Ichimoku$Companion.prototype.createIchimokuSenkouSpanA_0 = function (tenkanSen, kijunSen, displace) {
    var sum = new ArithmeticFunction(tenkanSen, kijunSen, ArithmeticOperation$PLUS_getInstance());
    var sumDiv2 = new ArithmeticFunction(sum, new ConstantFunction(2.0), ArithmeticOperation$DIV_getInstance());
    return new DisplacementFunction(sumDiv2, -displace | 0);
  };
  Ichimoku$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Ichimoku$Companion_instance = null;
  function Ichimoku$Companion_getInstance() {
    if (Ichimoku$Companion_instance === null) {
      new Ichimoku$Companion();
    }
    return Ichimoku$Companion_instance;
  }
  Ichimoku.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Ichimoku',
    interfaces: [StudyBuilder]
  };
  function ImpliedVolatility() {
    StudyBuilder.call(this);
  }
  ImpliedVolatility.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    return listOf_0(new PriceSourceFunction(data, PriceFieldEnum$IMP_VOLATILITY_getInstance()));
  };
  ImpliedVolatility.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ImpliedVolatility',
    interfaces: [StudyBuilder]
  };
  function ImpliedVolatilityGauge() {
    ImpliedVolatilityGauge$Companion_getInstance();
    StudyBuilder.call(this);
  }
  function ImpliedVolatilityGauge$Companion() {
    ImpliedVolatilityGauge$Companion_instance = this;
    this.SHOW_HISTORICAL_VOLATILITY_PARAMETER = 'showHistoricalVolatility';
    this.N_0 = 30;
    this.Y_0 = 252;
    this.SEGREGATION_COUNT_0 = 5;
  }
  ImpliedVolatilityGauge$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ImpliedVolatilityGauge$Companion_instance = null;
  function ImpliedVolatilityGauge$Companion_getInstance() {
    if (ImpliedVolatilityGauge$Companion_instance === null) {
      new ImpliedVolatilityGauge$Companion();
    }
    return ImpliedVolatilityGauge$Companion_instance;
  }
  ImpliedVolatilityGauge.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    var tmp$;
    var lines = ArrayList_init_0(2 + ImpliedVolatilityGauge$Companion_getInstance().SEGREGATION_COUNT_0 + 1 | 0);
    var impVolatility = this.getImpVolatilityFunction_0(data);
    var historicalVolatility = this.getHistoricalVolatilityFunction_0(data);
    var yearHigh = new HighestFunction(historicalVolatility, ImpliedVolatilityGauge$Companion_getInstance().Y_0);
    lines.add_11rb$(this.limit_0(data, yearHigh));
    var yearLow = new LowestFunction(historicalVolatility, ImpliedVolatilityGauge$Companion_getInstance().Y_0);
    lines.addAll_brywnq$(this.getVolatilitySegregationFunctions_0(data, yearHigh, yearLow));
    lines.add_11rb$(this.limit_0(data, yearLow));
    lines.add_11rb$(this.limit_0(data, impVolatility));
    var showHistoricalVolatility = typeof (tmp$ = params.get_11rb$(ImpliedVolatilityGauge$Companion_getInstance().SHOW_HISTORICAL_VOLATILITY_PARAMETER)) === 'boolean' ? tmp$ : throwCCE();
    if (showHistoricalVolatility) {
      lines.add_11rb$(this.limit_0(data, historicalVolatility));
    }
     else {
      lines.add_11rb$(new ConstantFunction(kotlin_js_internal_DoubleCompanionObject.NaN));
    }
    return lines;
  };
  ImpliedVolatilityGauge.prototype.getVolatilitySegregationFunctions_0 = function (data, yearHigh, yearLow) {
    var lines = ArrayList_init_0(ImpliedVolatilityGauge$Companion_getInstance().SEGREGATION_COUNT_0 - 1 | 0);
    var distanceHistoricalVolatility = new ArithmeticFunction(new ArithmeticFunction(yearHigh, yearLow, ArithmeticOperation$MINUS_getInstance()), new ConstantFunction(ImpliedVolatilityGauge$Companion_getInstance().SEGREGATION_COUNT_0), ArithmeticOperation$DIV_getInstance());
    for (var i = ImpliedVolatilityGauge$Companion_getInstance().SEGREGATION_COUNT_0 - 1 | 0; i >= 1; i--) {
      lines.add_11rb$(this.limit_0(data, new ArithmeticFunction(yearLow, new ArithmeticFunction(new ConstantFunction(i), distanceHistoricalVolatility, ArithmeticOperation$MULT_getInstance()), ArithmeticOperation$PLUS_getInstance())));
    }
    return lines;
  };
  ImpliedVolatilityGauge.prototype.getHistoricalVolatilityFunction_0 = function (data) {
    var continuouslyCompoundedReturn = new LnDivPrevFunction(new PriceSourceFunction(data, PriceFieldEnum$CLOSE_getInstance()));
    var x = 1.0 * ImpliedVolatilityGauge$Companion_getInstance().N_0 * ImpliedVolatilityGauge$Companion_getInstance().Y_0 / (ImpliedVolatilityGauge$Companion_getInstance().N_0 - 1 | 0);
    var annualizingFactor = Math_0.sqrt(x);
    return new ArithmeticFunction(new StandardDeviationFunction(continuouslyCompoundedReturn, ImpliedVolatilityGauge$Companion_getInstance().N_0), new ConstantFunction(annualizingFactor), ArithmeticOperation$MULT_getInstance());
  };
  ImpliedVolatilityGauge.prototype.getImpVolatilityFunction_0 = function (data) {
    return new PriceSourceFunction(data, PriceFieldEnum$IMP_VOLATILITY_getInstance());
  };
  ImpliedVolatilityGauge.prototype.validateParameters_x7u0o8$ = function (params) {
    this.validateBoolean_ez016i$(params, ImpliedVolatilityGauge$Companion_getInstance().SHOW_HISTORICAL_VOLATILITY_PARAMETER);
  };
  ImpliedVolatilityGauge.prototype.limit_0 = function (tradeDataHolder, srcFunction) {
    return new LimitFunction(tradeDataHolder, srcFunction, ImpliedVolatilityGauge$Companion_getInstance().Y_0);
  };
  ImpliedVolatilityGauge.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ImpliedVolatilityGauge',
    interfaces: [StudyBuilder]
  };
  function Inertia() {
    Inertia$Companion_getInstance();
    StudyBuilder.call(this);
  }
  Inertia.prototype.validateParameters_x7u0o8$ = function (params) {
    StudyBuilder.prototype.validateInteger_ez016i$.call(this, params, Inertia$Companion_getInstance().RVI_LENGTH_0);
    StudyBuilder.prototype.validateInteger_ez016i$.call(this, params, Inertia$Companion_getInstance().REGRESSION_LENGTH_0);
  };
  Inertia.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    var tmp$, tmp$_0;
    var regressionLength = typeof (tmp$ = params.get_11rb$(Inertia$Companion_getInstance().REGRESSION_LENGTH_0)) === 'number' ? tmp$ : throwCCE();
    var rviLength = typeof (tmp$_0 = params.get_11rb$(Inertia$Companion_getInstance().RVI_LENGTH_0)) === 'number' ? tmp$_0 : throwCCE();
    var inertia = this.constructInertia_0(data, regressionLength, rviLength);
    return listOf([inertia, Inertia$Companion_getInstance().C_50_0]);
  };
  Inertia.prototype.constructInertia_0 = function (data, regressionLength, rviLength) {
    var rvi = RelativeVolatilityIndex$Companion_getInstance().constructRVI_sbo9ig$(data, rviLength);
    return new LinearRegressionCurveFunction(rvi, regressionLength);
  };
  function Inertia$Companion() {
    Inertia$Companion_instance = this;
    this.RVI_LENGTH_0 = 'rviLength';
    this.REGRESSION_LENGTH_0 = 'regressionLength';
    this.C_50_0 = new ConstantFunction(50.0);
  }
  Inertia$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Inertia$Companion_instance = null;
  function Inertia$Companion_getInstance() {
    if (Inertia$Companion_instance === null) {
      new Inertia$Companion();
    }
    return Inertia$Companion_instance;
  }
  Inertia.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Inertia',
    interfaces: [StudyBuilder]
  };
  function IntradayMomentumIndex() {
    IntradayMomentumIndex$Companion_getInstance();
    StudyBuilder.call(this);
  }
  IntradayMomentumIndex.prototype.validateParameters_x7u0o8$ = function (params) {
    StudyBuilder.prototype.validateLength_x7u0o8$.call(this, params);
    StudyBuilder.prototype.validateInteger_ez016i$.call(this, params, IntradayMomentumIndex$Companion_getInstance().OVERBOUGHT_PARAMETER);
    StudyBuilder.prototype.validateInteger_ez016i$.call(this, params, IntradayMomentumIndex$Companion_getInstance().OVERSOLD_PARAMETER);
  };
  IntradayMomentumIndex.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    var tmp$, tmp$_0, tmp$_1;
    var length = typeof (tmp$ = params.get_11rb$(StudyBuilder$Companion_getInstance().LENGTH_PARAMETER)) === 'number' ? tmp$ : throwCCE();
    var overbought = typeof (tmp$_0 = params.get_11rb$(IntradayMomentumIndex$Companion_getInstance().OVERBOUGHT_PARAMETER)) === 'number' ? tmp$_0 : throwCCE();
    var oversold = typeof (tmp$_1 = params.get_11rb$(IntradayMomentumIndex$Companion_getInstance().OVERSOLD_PARAMETER)) === 'number' ? tmp$_1 : throwCCE();
    var openPriceSourceFunction = new PriceSourceFunction(data, PriceFieldEnum$OPEN_getInstance());
    var closePriceSourceFunction = new PriceSourceFunction(data, PriceFieldEnum$CLOSE_getInstance());
    var siUp = new IntradaySumFunction(new ArithmeticFunction(closePriceSourceFunction, openPriceSourceFunction, ArithmeticOperation$MINUS_getInstance()), length);
    var siDown = new IntradaySumFunction(new ArithmeticFunction(openPriceSourceFunction, closePriceSourceFunction, ArithmeticOperation$MINUS_getInstance()), length);
    var imi = new ArithmeticFunction(new ArithmeticFunction(siUp, new ArithmeticFunction(siUp, siDown, ArithmeticOperation$PLUS_getInstance()), ArithmeticOperation$DIV_ZERO_getInstance()), new ConstantFunction(100.0), ArithmeticOperation$MULT_getInstance());
    var overboughtF = new ConstantFunction(overbought);
    var oversoldF = new ConstantFunction(oversold);
    return listOf([imi, overboughtF, oversoldF]);
  };
  function IntradayMomentumIndex$Companion() {
    IntradayMomentumIndex$Companion_instance = this;
    this.OVERBOUGHT_PARAMETER = 'overbought';
    this.OVERSOLD_PARAMETER = 'oversold';
  }
  IntradayMomentumIndex$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var IntradayMomentumIndex$Companion_instance = null;
  function IntradayMomentumIndex$Companion_getInstance() {
    if (IntradayMomentumIndex$Companion_instance === null) {
      new IntradayMomentumIndex$Companion();
    }
    return IntradayMomentumIndex$Companion_instance;
  }
  IntradayMomentumIndex.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'IntradayMomentumIndex',
    interfaces: [StudyBuilder]
  };
  function KRI() {
    StudyBuilder.call(this);
  }
  KRI.prototype.validateParameters_x7u0o8$ = function (params) {
    StudyBuilder.prototype.validateLength_x7u0o8$.call(this, params);
    StudyBuilder.prototype.validatePriceField_x7u0o8$.call(this, params);
  };
  KRI.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    return listOf([this.constructKRI_0(data, params), new ZeroFunction()]);
  };
  KRI.prototype.constructKRI_0 = function (data, params) {
    var tmp$, tmp$_0;
    var length = typeof (tmp$ = params.get_11rb$(StudyBuilder$Companion_getInstance().LENGTH_PARAMETER)) === 'number' ? tmp$ : throwCCE();
    var priceField = Kotlin.isType(tmp$_0 = params.get_11rb$(StudyBuilder$Companion_getInstance().PRICE_PARAMETER), PriceFieldEnum) ? tmp$_0 : throwCCE();
    var smaAverage = new MovingAverageSimple(new PriceSourceFunction(data, priceField), length);
    var smaAverage2 = new MovingAverageSimple(new PriceSourceFunction(data, priceField), length);
    var priceMinusSmaAverage = new ArithmeticFunction(new PriceSourceFunction(data, priceField), smaAverage, ArithmeticOperation$MINUS_getInstance());
    var priceMinusSmaAverageDivSmaAverage = new ArithmeticFunction(priceMinusSmaAverage, smaAverage2, ArithmeticOperation$DIV_getInstance());
    return new ArithmeticFunction(priceMinusSmaAverageDivSmaAverage, new ConstantFunction(100.0), ArithmeticOperation$MULT_getInstance());
  };
  KRI.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KRI',
    interfaces: [StudyBuilder]
  };
  var nfastend;
  var nslowend;
  function notZero$lambda(x) {
    return Kotlin.compareTo(x, 0.0) !== 0;
  }
  var notZero;
  function KaufmanMovingAverage() {
    StudyBuilder.call(this);
  }
  KaufmanMovingAverage.prototype.validateParameters_x7u0o8$ = function (params) {
    StudyBuilder.prototype.validateLength_x7u0o8$.call(this, params);
  };
  KaufmanMovingAverage.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    var tmp$;
    var Length = typeof (tmp$ = params.get_11rb$(StudyBuilder$Companion_getInstance().LENGTH_PARAMETER)) === 'number' ? tmp$ : throwCCE();
    var xPrice = new PriceSourceFunction(data, PriceFieldEnum$CLOSE_getInstance());
    var xvnoise = new AbsFunction(new DiffPrevFunction(xPrice));
    var nsignal = new AbsFunction(new DiffPrevFunction(xPrice, Length));
    var nnoise = new SumFunction(xvnoise, Length);
    var nefratio = new IfFunction(notZero, nnoise, new ArithmeticFunction(nsignal, nnoise, ArithmeticOperation$DIV_getInstance()), new ZeroFunction());
    var nsmooth = new ArithmeticFunction(new ArithmeticFunction(new ArithmeticFunction(nefratio, new ConstantFunction(nfastend - nslowend), ArithmeticOperation$MULT_getInstance()), new ConstantFunction(nslowend), ArithmeticOperation$PLUS_getInstance()), new ConstantFunction(2.0), ArithmeticOperation$POW_getInstance());
    var nAMA = new KaufmanNamaFunction(nsmooth, xPrice);
    return listOf_0(nAMA);
  };
  KaufmanMovingAverage.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KaufmanMovingAverage',
    interfaces: [StudyBuilder]
  };
  function KeltnerChannels() {
    KeltnerChannels$Companion_getInstance();
    StudyBuilder.call(this);
  }
  KeltnerChannels.prototype.validateParameters_x7u0o8$ = function (params) {
    StudyBuilder.prototype.validateLength_x7u0o8$.call(this, params);
    StudyBuilder.prototype.validateDouble_ez016i$.call(this, params, KeltnerChannels$Companion_getInstance().FACTOR_PARAMETER_0);
    StudyBuilder.prototype.validateAverageField_x7u0o8$.call(this, params);
  };
  KeltnerChannels.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var length = typeof (tmp$ = params.get_11rb$(StudyBuilder$Companion_getInstance().LENGTH_PARAMETER)) === 'number' ? tmp$ : throwCCE();
    var factor = typeof (tmp$_0 = params.get_11rb$(KeltnerChannels$Companion_getInstance().FACTOR_PARAMETER_0)) === 'number' ? tmp$_0 : throwCCE();
    var priceField = Kotlin.isType(tmp$_1 = params.get_11rb$(StudyBuilder$Companion_getInstance().PRICE_PARAMETER), PriceFieldEnum) ? tmp$_1 : throwCCE();
    var averageType = Kotlin.isType(tmp$_2 = params.get_11rb$(StudyBuilder$Companion_getInstance().AVERAGE_PARAMETER), AverageTypeEnum) ? tmp$_2 : throwCCE();
    var price = new PriceSourceFunction(data, priceField);
    var midLine = CommonFunctions_getInstance().constructAverage_dtut4e$(averageType, price, length);
    var ucEma = CommonFunctions_getInstance().constructAverage_dtut4e$(averageType, price, length);
    var lcEma = CommonFunctions_getInstance().constructAverage_dtut4e$(averageType, price, length);
    var ucAtr = new MovingAverageSimple(CommonFunctions_getInstance().constructTrueRange_t0cfja$(data), length);
    var lcAtr = new MovingAverageSimple(CommonFunctions_getInstance().constructTrueRange_t0cfja$(data), length);
    var upperBand = new ArithmeticFunction(ucEma, new ArithmeticFunction(new ConstantFunction(factor), ucAtr, ArithmeticOperation$MULT_getInstance()), ArithmeticOperation$PLUS_getInstance());
    var lowerBand = new ArithmeticFunction(lcEma, new ArithmeticFunction(new ConstantFunction(factor), lcAtr, ArithmeticOperation$MULT_getInstance()), ArithmeticOperation$MINUS_getInstance());
    return listOf([lowerBand, midLine, upperBand]);
  };
  function KeltnerChannels$Companion() {
    KeltnerChannels$Companion_instance = this;
    this.FACTOR_PARAMETER_0 = 'factor';
  }
  KeltnerChannels$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var KeltnerChannels$Companion_instance = null;
  function KeltnerChannels$Companion_getInstance() {
    if (KeltnerChannels$Companion_instance === null) {
      new KeltnerChannels$Companion();
    }
    return KeltnerChannels$Companion_instance;
  }
  KeltnerChannels.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KeltnerChannels',
    interfaces: [StudyBuilder]
  };
  function LinearRegression() {
    StudyBuilder.call(this);
  }
  LinearRegression.prototype.validateParameters_x7u0o8$ = function (params) {
    StudyBuilder.prototype.validateLength_x7u0o8$.call(this, params);
    StudyBuilder.prototype.validateDisplace_x7u0o8$.call(this, params);
    StudyBuilder.prototype.validatePriceField_x7u0o8$.call(this, params);
  };
  LinearRegression.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    var tmp$;
    var displace = typeof (tmp$ = params.get_11rb$(StudyBuilder$Companion_getInstance().DISPLACE_PARAMETER)) === 'number' ? tmp$ : throwCCE();
    var linearRegressionCurve = this.constructLinearRegressionCurve_0(data, params);
    return listOf_0(new DisplacementFunction(linearRegressionCurve, displace));
  };
  LinearRegression.prototype.constructLinearRegressionCurve_0 = function (data, params) {
    var tmp$, tmp$_0;
    var length = typeof (tmp$ = params.get_11rb$(StudyBuilder$Companion_getInstance().LENGTH_PARAMETER)) === 'number' ? tmp$ : throwCCE();
    var priceField = Kotlin.isType(tmp$_0 = params.get_11rb$(StudyBuilder$Companion_getInstance().PRICE_PARAMETER), PriceFieldEnum) ? tmp$_0 : throwCCE();
    var priceSource = new PriceSourceFunction(data, priceField);
    return new LinearRegressionCurveFunction(priceSource, length);
  };
  LinearRegression.prototype.getExpansionSize_x7u0o8$ = function (params) {
    var tmp$;
    var displace = typeof (tmp$ = params.get_11rb$(StudyBuilder$Companion_getInstance().DISPLACE_PARAMETER)) === 'number' ? tmp$ : throwCCE();
    return -displace | 0;
  };
  LinearRegression.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LinearRegression',
    interfaces: [StudyBuilder]
  };
  function LinearRegressionChannel() {
    LinearRegressionChannel$Companion_getInstance();
    StudyBuilder.call(this);
  }
  LinearRegressionChannel.prototype.validateParameters_x7u0o8$ = function (params) {
    StudyBuilder.prototype.validatePriceField_x7u0o8$.call(this, params);
    StudyBuilder.prototype.validateDouble_ez016i$.call(this, params, LinearRegressionChannel$Companion_getInstance().WIDTH_PARAMETER_0);
  };
  LinearRegressionChannel.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    var tmp$, tmp$_0;
    var width = typeof (tmp$ = params.get_11rb$(LinearRegressionChannel$Companion_getInstance().WIDTH_PARAMETER_0)) === 'number' ? tmp$ : throwCCE();
    var priceField = Kotlin.isType(tmp$_0 = params.get_11rb$(StudyBuilder$Companion_getInstance().PRICE_PARAMETER), PriceFieldEnum) ? tmp$_0 : throwCCE();
    var priceSource = new PriceSourceFunction(data, priceField);
    var upperChannel = this.constructLRChannel_0(priceSource, ArithmeticOperation$PLUS_getInstance(), width);
    var lowerChannel = this.constructLRChannel_0(priceSource, ArithmeticOperation$MINUS_getInstance(), width);
    return listOf([lowerChannel, new LinearRegressionFunction(new PriceSourceFunction(data, priceField)), upperChannel]);
  };
  LinearRegressionChannel.prototype.constructLRChannel_0 = function (priceSource, operation, width) {
    var linearRegression = new LinearRegressionFunction(priceSource);
    var linearRegressionMinusPriceAbs = new AbsFunction(new ArithmeticFunction(linearRegression, priceSource, ArithmeticOperation$MINUS_getInstance()));
    var highest = new HighestAllFunction(linearRegressionMinusPriceAbs);
    var channel = new ArithmeticFunction(highest, new ConstantFunction(width / 100.0), ArithmeticOperation$MULT_getInstance());
    return new ArithmeticFunction(new LinearRegressionFunction(priceSource), channel, operation);
  };
  function LinearRegressionChannel$Companion() {
    LinearRegressionChannel$Companion_instance = this;
    this.WIDTH_PARAMETER_0 = 'width';
  }
  LinearRegressionChannel$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var LinearRegressionChannel$Companion_instance = null;
  function LinearRegressionChannel$Companion_getInstance() {
    if (LinearRegressionChannel$Companion_instance === null) {
      new LinearRegressionChannel$Companion();
    }
    return LinearRegressionChannel$Companion_instance;
  }
  LinearRegressionChannel.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LinearRegressionChannel',
    interfaces: [StudyBuilder]
  };
  function LinearRegressionSlope() {
    LinearRegressionSlope$Companion_getInstance();
    StudyBuilder.call(this);
  }
  LinearRegressionSlope.prototype.validateParameters_x7u0o8$ = function (params) {
    StudyBuilder.prototype.validateLength_x7u0o8$.call(this, params);
    StudyBuilder.prototype.validatePriceField_x7u0o8$.call(this, params);
  };
  LinearRegressionSlope.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    var tmp$, tmp$_0;
    var length = typeof (tmp$ = params.get_11rb$(StudyBuilder$Companion_getInstance().LENGTH_PARAMETER)) === 'number' ? tmp$ : throwCCE();
    var priceField = Kotlin.isType(tmp$_0 = params.get_11rb$(StudyBuilder$Companion_getInstance().PRICE_PARAMETER), PriceFieldEnum) ? tmp$_0 : throwCCE();
    return listOf_0(LinearRegressionSlope$Companion_getInstance().constructLinearRegressionSlope_wmug5y$(data, length, priceField));
  };
  function LinearRegressionSlope$Companion() {
    LinearRegressionSlope$Companion_instance = this;
  }
  LinearRegressionSlope$Companion.prototype.constructLinearRegressionSlope_wmug5y$ = function (data, length, priceField) {
    var c6 = new ConstantFunction(6.0);
    var priceSource = new PriceSourceFunction(data, priceField);
    var priceWma = new MovingAverageWeighted(priceSource, length);
    var priceSma = new MovingAverageSimple(priceSource, length);
    var lengthMinusOne = new ConstantFunction(length - 1 | 0);
    var priceWmaMinusPriceSma = new ArithmeticFunction(priceWma, priceSma, ArithmeticOperation$MINUS_getInstance());
    var priceWmaMinusPriceSmaMultBy6 = new ArithmeticFunction(priceWmaMinusPriceSma, c6, ArithmeticOperation$MULT_getInstance());
    return new ArithmeticFunction(priceWmaMinusPriceSmaMultBy6, lengthMinusOne, ArithmeticOperation$DIV_getInstance());
  };
  LinearRegressionSlope$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var LinearRegressionSlope$Companion_instance = null;
  function LinearRegressionSlope$Companion_getInstance() {
    if (LinearRegressionSlope$Companion_instance === null) {
      new LinearRegressionSlope$Companion();
    }
    return LinearRegressionSlope$Companion_instance;
  }
  LinearRegressionSlope.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LinearRegressionSlope',
    interfaces: [StudyBuilder]
  };
  function MACD() {
    MACD$Companion_getInstance();
    StudyBuilder.call(this);
  }
  MACD.prototype.validateParameters_x7u0o8$ = function (params) {
    StudyBuilder.prototype.validateInteger_ez016i$.call(this, params, MACD$Companion_getInstance().FAST_LENGTH_PARAMETER);
    StudyBuilder.prototype.validateInteger_ez016i$.call(this, params, MACD$Companion_getInstance().SLOW_LENGTH_PARAMETER);
    StudyBuilder.prototype.validateInteger_ez016i$.call(this, params, MACD$Companion_getInstance().MACD_LENGTH_PARAMETER);
    StudyBuilder.prototype.validateAverageField_x7u0o8$.call(this, params);
  };
  MACD.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    var valueForAvg1 = MACD$Companion_getInstance().constructMACDValue_0(data, params);
    var valueForAvg2 = MACD$Companion_getInstance().constructMACDValue_0(data, params);
    var valueForDiff = MACD$Companion_getInstance().constructMACDValue_0(data, params);
    var valueShow = MACD$Companion_getInstance().constructMACDValue_0(data, params);
    var avg = MACD$Companion_getInstance().constructMACDAverage_0(valueForAvg1, params);
    var avgForDiff = MACD$Companion_getInstance().constructMACDAverage_0(valueForAvg2, params);
    var diff = MACD$Companion_getInstance().constructMACDDiff_0(valueForDiff, avgForDiff);
    return listOf([valueShow, avg, diff]);
  };
  function MACD$Companion() {
    MACD$Companion_instance = this;
    this.FAST_LENGTH_PARAMETER = 'fastLength';
    this.SLOW_LENGTH_PARAMETER = 'slowLength';
    this.MACD_LENGTH_PARAMETER = 'macdLength';
  }
  MACD$Companion.prototype.constructMACDValue_0 = function (data, params) {
    var tmp$, tmp$_0, tmp$_1;
    var fastLength = typeof (tmp$ = params.get_11rb$(this.FAST_LENGTH_PARAMETER)) === 'number' ? tmp$ : throwCCE();
    var slowLength = typeof (tmp$_0 = params.get_11rb$(this.SLOW_LENGTH_PARAMETER)) === 'number' ? tmp$_0 : throwCCE();
    var averageType = Kotlin.isType(tmp$_1 = params.get_11rb$(StudyBuilder$Companion_getInstance().AVERAGE_PARAMETER), AverageTypeEnum) ? tmp$_1 : throwCCE();
    var price = new PriceSourceFunction(data, PriceFieldEnum$CLOSE_getInstance());
    return this.getMACDValue_hzlyfh$(fastLength, slowLength, averageType, price);
  };
  MACD$Companion.prototype.getMACDValue_hzlyfh$ = function (fastLength, slowLength, averageType, price) {
    var emaFast = CommonFunctions_getInstance().constructAverage_dtut4e$(averageType, price, fastLength);
    var emaSlow = CommonFunctions_getInstance().constructAverage_dtut4e$(averageType, price, slowLength);
    return new ArithmeticFunction(emaFast, emaSlow, ArithmeticOperation$MINUS_getInstance());
  };
  MACD$Companion.prototype.constructMACDAverage_0 = function (macd, params) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var fastLength = typeof (tmp$ = params.get_11rb$(this.FAST_LENGTH_PARAMETER)) === 'number' ? tmp$ : throwCCE();
    var slowLength = typeof (tmp$_0 = params.get_11rb$(this.SLOW_LENGTH_PARAMETER)) === 'number' ? tmp$_0 : throwCCE();
    var macdLength = typeof (tmp$_1 = params.get_11rb$(this.MACD_LENGTH_PARAMETER)) === 'number' ? tmp$_1 : throwCCE();
    var averageType = Kotlin.isType(tmp$_2 = params.get_11rb$(StudyBuilder$Companion_getInstance().AVERAGE_PARAMETER), AverageTypeEnum) ? tmp$_2 : throwCCE();
    return CommonFunctions_getInstance().constructAverage_dtut4e$(averageType, macd, macdLength, Math_0.max(slowLength, fastLength));
  };
  MACD$Companion.prototype.constructMACDDiff_0 = function (macd, macdAverage) {
    return new ArithmeticFunction(macd, macdAverage, ArithmeticOperation$MINUS_getInstance());
  };
  MACD$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var MACD$Companion_instance = null;
  function MACD$Companion_getInstance() {
    if (MACD$Companion_instance === null) {
      new MACD$Companion();
    }
    return MACD$Companion_instance;
  }
  MACD.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MACD',
    interfaces: [StudyBuilder]
  };
  function MarketFacilitationIndex() {
    StudyBuilder.call(this);
  }
  MarketFacilitationIndex.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    var highPrice = new PriceSourceFunction(data, PriceFieldEnum$HIGH_getInstance());
    var lowPrice = new PriceSourceFunction(data, PriceFieldEnum$LOW_getInstance());
    var volume = new PriceSourceFunction(data, PriceFieldEnum$VOLUME_getInstance());
    var c100 = new ConstantFunction(100.0);
    var mfi = new ArithmeticFunction(new ArithmeticFunction(new ArithmeticFunction(highPrice, lowPrice, ArithmeticOperation$MINUS_getInstance()), volume, ArithmeticOperation$DIV_ZERO_getInstance()), c100, ArithmeticOperation$MULT_getInstance());
    return listOf_0(mfi);
  };
  MarketFacilitationIndex.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MarketFacilitationIndex',
    interfaces: [StudyBuilder]
  };
  function MassIndex() {
    MassIndex$Companion_getInstance();
    StudyBuilder.call(this);
  }
  MassIndex.prototype.validateParameters_x7u0o8$ = function (params) {
    StudyBuilder.prototype.validateLength_x7u0o8$.call(this, params);
    StudyBuilder.prototype.validateInteger_ez016i$.call(this, params, MassIndex$Companion_getInstance().SUM_LENGTH_PARAMETER);
    StudyBuilder.prototype.validateDouble_ez016i$.call(this, params, MassIndex$Companion_getInstance().SETUP_PARAMETER);
    StudyBuilder.prototype.validateDouble_ez016i$.call(this, params, MassIndex$Companion_getInstance().TRIGGER_PARAMETER);
  };
  MassIndex.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var length = typeof (tmp$ = params.get_11rb$(StudyBuilder$Companion_getInstance().LENGTH_PARAMETER)) === 'number' ? tmp$ : throwCCE();
    var sumLength = typeof (tmp$_0 = params.get_11rb$(MassIndex$Companion_getInstance().SUM_LENGTH_PARAMETER)) === 'number' ? tmp$_0 : throwCCE();
    var setupLevel = typeof (tmp$_1 = params.get_11rb$(MassIndex$Companion_getInstance().SETUP_PARAMETER)) === 'number' ? tmp$_1 : throwCCE();
    var triggerLevel = typeof (tmp$_2 = params.get_11rb$(MassIndex$Companion_getInstance().TRIGGER_PARAMETER)) === 'number' ? tmp$_2 : throwCCE();
    var emaDiff1 = MassIndex$Companion_getInstance().constructEmaHighLowDiffFunction_0(data, length);
    var emaDiff2 = MassIndex$Companion_getInstance().constructEmaHighLowDiffFunction_0(data, length);
    var emaEmaDiff = new MovingAverageExponential(emaDiff1, length, length);
    var miFract = new ArithmeticFunction(emaDiff2, emaEmaDiff, ArithmeticOperation$DIV_ZERO_getInstance());
    var mi = new SumFunction(miFract, sumLength);
    var setup = new ConstantFunction(setupLevel);
    var trigger = new ConstantFunction(triggerLevel);
    return listOf([mi, trigger, setup]);
  };
  function MassIndex$Companion() {
    MassIndex$Companion_instance = this;
    this.SUM_LENGTH_PARAMETER = 'sumLength';
    this.SETUP_PARAMETER = 'setup';
    this.TRIGGER_PARAMETER = 'trigger';
  }
  MassIndex$Companion.prototype.constructEmaHighLowDiffFunction_0 = function (data, length) {
    var diffPrice = CommonFunctions_getInstance().constructHighLowDiff_t0cfja$(data);
    return new MovingAverageExponential(diffPrice, length);
  };
  MassIndex$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var MassIndex$Companion_instance = null;
  function MassIndex$Companion_getInstance() {
    if (MassIndex$Companion_instance === null) {
      new MassIndex$Companion();
    }
    return MassIndex$Companion_instance;
  }
  MassIndex.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MassIndex',
    interfaces: [StudyBuilder]
  };
  function MedianPrice() {
    StudyBuilder.call(this);
  }
  MedianPrice.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    var medianPrice = new PriceSourceFunction(data, PriceFieldEnum$MEDIAN_getInstance());
    return listOf_0(medianPrice);
  };
  MedianPrice.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MedianPrice',
    interfaces: [StudyBuilder]
  };
  function Momentum() {
    StudyBuilder.call(this);
  }
  Momentum.prototype.validateParameters_x7u0o8$ = function (params) {
    StudyBuilder.prototype.validateLength_x7u0o8$.call(this, params);
    StudyBuilder.prototype.validatePriceField_x7u0o8$.call(this, params);
  };
  Momentum.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    var tmp$, tmp$_0;
    var length = typeof (tmp$ = params.get_11rb$(StudyBuilder$Companion_getInstance().LENGTH_PARAMETER)) === 'number' ? tmp$ : throwCCE();
    var priceField = Kotlin.isType(tmp$_0 = params.get_11rb$(StudyBuilder$Companion_getInstance().PRICE_PARAMETER), PriceFieldEnum) ? tmp$_0 : throwCCE();
    var price = new PriceSourceFunction(data, priceField);
    var pDelayed = new DisplacementFunction(price, -length | 0);
    var momentum = new ArithmeticFunction(price, pDelayed, ArithmeticOperation$MINUS_getInstance());
    var zero = new ZeroFunction();
    return listOf([momentum, zero]);
  };
  Momentum.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Momentum',
    interfaces: [StudyBuilder]
  };
  function MoneyFlowIndex() {
    MoneyFlowIndex$Companion_getInstance();
    StudyBuilder.call(this);
  }
  MoneyFlowIndex.prototype.validateParameters_x7u0o8$ = function (params) {
    StudyBuilder.prototype.validateLength_x7u0o8$.call(this, params);
    StudyBuilder.prototype.validateInteger_ez016i$.call(this, params, MoneyFlowIndex$Companion_getInstance().OVERBOUGHT_PARAMETER);
    StudyBuilder.prototype.validateInteger_ez016i$.call(this, params, MoneyFlowIndex$Companion_getInstance().OVERSOLD_PARAMETER);
  };
  MoneyFlowIndex.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    var tmp$, tmp$_0, tmp$_1;
    var length = typeof (tmp$ = params.get_11rb$(StudyBuilder$Companion_getInstance().LENGTH_PARAMETER)) === 'number' ? tmp$ : throwCCE();
    var overbought = typeof (tmp$_0 = params.get_11rb$(MoneyFlowIndex$Companion_getInstance().OVERBOUGHT_PARAMETER)) === 'number' ? tmp$_0 : throwCCE();
    var oversold = typeof (tmp$_1 = params.get_11rb$(MoneyFlowIndex$Companion_getInstance().OVERSOLD_PARAMETER)) === 'number' ? tmp$_1 : throwCCE();
    var overboughtF = new ConstantFunction(overbought);
    var oversoldF = new ConstantFunction(oversold);
    var mfi = MoneyFlowIndex$Companion_getInstance().constructMFI_0(data, length);
    return listOf([mfi, overboughtF, oversoldF]);
  };
  function MoneyFlowIndex$Companion() {
    MoneyFlowIndex$Companion_instance = this;
    this.OVERBOUGHT_PARAMETER = 'overbought';
    this.OVERSOLD_PARAMETER = 'oversold';
  }
  MoneyFlowIndex$Companion.prototype.constructMFI_0 = function (data, length) {
    var sumPrice = CommonFunctions_getInstance().constructHighLowCloseSum_t0cfja$(data);
    var volume = new PriceSourceFunction(data, PriceFieldEnum$VOLUME_getInstance());
    var moneyFlowPositive = new MoneyFlowFunction(sumPrice, volume, true);
    var posAvgMF = new MovingAverageSimple(moneyFlowPositive, length);
    var moneyFlowNegative = new MoneyFlowFunction(sumPrice, volume, false);
    var totalAvgMF = new MovingAverageSimple(moneyFlowNegative, length);
    var c100 = new ConstantFunction(100.0);
    return new ArithmeticFunction(new ArithmeticFunction(posAvgMF, totalAvgMF, ArithmeticOperation$DIV_ZERO_getInstance()), c100, ArithmeticOperation$MULT_getInstance());
  };
  MoneyFlowIndex$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var MoneyFlowIndex$Companion_instance = null;
  function MoneyFlowIndex$Companion_getInstance() {
    if (MoneyFlowIndex$Companion_instance === null) {
      new MoneyFlowIndex$Companion();
    }
    return MoneyFlowIndex$Companion_instance;
  }
  MoneyFlowIndex.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MoneyFlowIndex',
    interfaces: [StudyBuilder]
  };
  function NegativeVolumeIndex() {
    StudyBuilder.call(this);
  }
  NegativeVolumeIndex.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    var volume = new PriceSourceFunction(data, PriceFieldEnum$VOLUME_getInstance());
    var close = new PriceSourceFunction(data, PriceFieldEnum$CLOSE_getInstance());
    var nvi = new NegativeVolumeIndexFunction(volume, close);
    return listOf_0(nvi);
  };
  NegativeVolumeIndex.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NegativeVolumeIndex',
    interfaces: [StudyBuilder]
  };
  function OnBalanceVolume() {
    StudyBuilder.call(this);
  }
  OnBalanceVolume.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    var close = new PriceSourceFunction(data, PriceFieldEnum$CLOSE_getInstance());
    var volume = new PriceSourceFunction(data, PriceFieldEnum$VOLUME_getInstance());
    var diffPrev = new DiffPrevFunction(close);
    var sign = new SignFunction(diffPrev);
    var bv = new ArithmeticFunction(sign, volume, ArithmeticOperation$MULT_getInstance());
    var obv = WindowFunction_init_0(new CumulativeSumFunction(bv), 0, true);
    return listOf_0(obv);
  };
  OnBalanceVolume.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'OnBalanceVolume',
    interfaces: [StudyBuilder]
  };
  function Oscillator() {
    Oscillator$Companion_getInstance();
    StudyBuilder.call(this);
  }
  Oscillator.prototype.validateParameters_x7u0o8$ = function (params) {
    StudyBuilder.prototype.validatePriceField_x7u0o8$.call(this, params);
    StudyBuilder.prototype.validateInteger_ez016i$.call(this, params, Oscillator$Companion_getInstance().FAST_LENGTH_PARAMETER);
    StudyBuilder.prototype.validateInteger_ez016i$.call(this, params, Oscillator$Companion_getInstance().SLOW_LENGTH_PARAMETER);
  };
  Oscillator.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    var tmp$, tmp$_0, tmp$_1;
    var priceField = Kotlin.isType(tmp$ = params.get_11rb$(StudyBuilder$Companion_getInstance().PRICE_PARAMETER), PriceFieldEnum) ? tmp$ : throwCCE();
    var fastLength = typeof (tmp$_0 = params.get_11rb$(Oscillator$Companion_getInstance().FAST_LENGTH_PARAMETER)) === 'number' ? tmp$_0 : throwCCE();
    var slowLength = typeof (tmp$_1 = params.get_11rb$(Oscillator$Companion_getInstance().SLOW_LENGTH_PARAMETER)) === 'number' ? tmp$_1 : throwCCE();
    var price = new PriceSourceFunction(data, priceField);
    var smaFast = new MovingAverageSimple(price, fastLength);
    var smaSlow = new MovingAverageSimple(price, slowLength);
    var oscFactor = new ArithmeticFunction(smaFast, smaSlow, ArithmeticOperation$DIFF_DIV_RIGHT_getInstance());
    var osc = new ArithmeticFunction(oscFactor, new ConstantFunction(100.0), ArithmeticOperation$MULT_getInstance());
    var zero = new ZeroFunction();
    return listOf([osc, zero]);
  };
  function Oscillator$Companion() {
    Oscillator$Companion_instance = this;
    this.FAST_LENGTH_PARAMETER = 'fastLength';
    this.SLOW_LENGTH_PARAMETER = 'slowLength';
  }
  Oscillator$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Oscillator$Companion_instance = null;
  function Oscillator$Companion_getInstance() {
    if (Oscillator$Companion_instance === null) {
      new Oscillator$Companion();
    }
    return Oscillator$Companion_instance;
  }
  Oscillator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Oscillator',
    interfaces: [StudyBuilder]
  };
  function ParabolicSAR() {
    ParabolicSAR$Companion_getInstance();
    StudyBuilder.call(this);
  }
  ParabolicSAR.prototype.validateParameters_x7u0o8$ = function (params) {
    StudyBuilder.prototype.validateParameter_ez016i$.call(this, params, ParabolicSAR$Companion_getInstance().HIGH_PARAMETER);
    StudyBuilder.prototype.validateParameter_ez016i$.call(this, params, ParabolicSAR$Companion_getInstance().LOW_PARAMETER);
  };
  ParabolicSAR.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    var tmp$, tmp$_0;
    var highField = Kotlin.isType(tmp$ = params.get_11rb$(ParabolicSAR$Companion_getInstance().HIGH_PARAMETER), PriceFieldEnum) ? tmp$ : throwCCE();
    var lowField = Kotlin.isType(tmp$_0 = params.get_11rb$(ParabolicSAR$Companion_getInstance().LOW_PARAMETER), PriceFieldEnum) ? tmp$_0 : throwCCE();
    var accFactor = 0.02;
    var accLimit = 0.2;
    var highPrice = new PriceSourceFunction(data, highField);
    var lowPrice = new PriceSourceFunction(data, lowField);
    var sar = WindowFunction_init_0(new ParabolicSarFunction(highPrice, lowPrice, accFactor, accLimit), 0, true);
    return listOf_0(sar);
  };
  function ParabolicSAR$Companion() {
    ParabolicSAR$Companion_instance = this;
    this.HIGH_PARAMETER = 'high';
    this.LOW_PARAMETER = 'low';
  }
  ParabolicSAR$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ParabolicSAR$Companion_instance = null;
  function ParabolicSAR$Companion_getInstance() {
    if (ParabolicSAR$Companion_instance === null) {
      new ParabolicSAR$Companion();
    }
    return ParabolicSAR$Companion_instance;
  }
  ParabolicSAR.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ParabolicSAR',
    interfaces: [StudyBuilder]
  };
  function PercentChange() {
    StudyBuilder.call(this);
  }
  PercentChange.prototype.constructPercentChange_0 = function (data, priceField) {
    var price = new PriceSourceFunction(data, priceField);
    var priceDisplace = new DisplacementFunction(price, -1);
    var priceMinusDisplaced = new ArithmeticFunction(price, priceDisplace, ArithmeticOperation$MINUS_getInstance());
    var priceMinusDisplacedMultBy100 = new ArithmeticFunction(new ConstantFunction(100.0), priceMinusDisplaced, ArithmeticOperation$MULT_getInstance());
    return new ArithmeticFunction(priceMinusDisplacedMultBy100, priceDisplace, ArithmeticOperation$DIV_getInstance());
  };
  PercentChange.prototype.validateParameters_x7u0o8$ = function (params) {
    StudyBuilder.prototype.validatePriceField_x7u0o8$.call(this, params);
  };
  PercentChange.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    var tmp$;
    var priceField = Kotlin.isType(tmp$ = params.get_11rb$(StudyBuilder$Companion_getInstance().PRICE_PARAMETER), PriceFieldEnum) ? tmp$ : throwCCE();
    var percentChange = this.constructPercentChange_0(data, priceField);
    return listOf([percentChange, new ZeroFunction()]);
  };
  PercentChange.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PercentChange',
    interfaces: [StudyBuilder]
  };
  function PercentOfResistance() {
    PercentOfResistance$Companion_getInstance();
    StudyBuilder.call(this);
  }
  PercentOfResistance.prototype.validateParameters_x7u0o8$ = function (params) {
    StudyBuilder.prototype.validateInteger_ez016i$.call(this, params, StudyBuilder$Companion_getInstance().LENGTH_PARAMETER);
    StudyBuilder.prototype.validateInteger_ez016i$.call(this, params, PercentOfResistance$Companion_getInstance().OVERBOUGHT_PARAMETER);
    StudyBuilder.prototype.validateInteger_ez016i$.call(this, params, PercentOfResistance$Companion_getInstance().OVERSOLD_PARAMETER);
  };
  PercentOfResistance.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    var tmp$, tmp$_0, tmp$_1;
    var length = typeof (tmp$ = params.get_11rb$(StudyBuilder$Companion_getInstance().LENGTH_PARAMETER)) === 'number' ? tmp$ : throwCCE();
    var overbought = typeof (tmp$_0 = params.get_11rb$(PercentOfResistance$Companion_getInstance().OVERBOUGHT_PARAMETER)) === 'number' ? tmp$_0 : throwCCE();
    var oversold = typeof (tmp$_1 = params.get_11rb$(PercentOfResistance$Companion_getInstance().OVERSOLD_PARAMETER)) === 'number' ? tmp$_1 : throwCCE();
    var lowPrice = new PriceSourceFunction(data, PriceFieldEnum$LOW_getInstance());
    var low = new LowestFunction(lowPrice, length);
    var highPrice = new PriceSourceFunction(data, PriceFieldEnum$HIGH_getInstance());
    var high = new HighestFunction(highPrice, length);
    var high2 = new HighestFunction(highPrice, length);
    var close = new PriceSourceFunction(data, PriceFieldEnum$CLOSE_getInstance());
    var cMinus100 = new ConstantFunction(-100.0);
    var numerator = new ArithmeticFunction(high, close, ArithmeticOperation$MINUS_getInstance());
    var denominator = new ArithmeticFunction(high2, low, ArithmeticOperation$MINUS_getInstance());
    var divResult = new ArithmeticFunction(numerator, denominator, ArithmeticOperation$DIV_getInstance());
    var multBycMinus100 = new ArithmeticFunction(divResult, cMinus100, ArithmeticOperation$MULT_getInstance());
    var pcrF = new ArithmeticFunction(multBycMinus100, cMinus100, ArithmeticOperation$MINUS_getInstance());
    var overboughtF = new ConstantFunction(overbought);
    var oversoldF = new ConstantFunction(oversold);
    return listOf([pcrF, overboughtF, oversoldF]);
  };
  function PercentOfResistance$Companion() {
    PercentOfResistance$Companion_instance = this;
    this.OVERBOUGHT_PARAMETER = 'overbought';
    this.OVERSOLD_PARAMETER = 'oversold';
  }
  PercentOfResistance$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var PercentOfResistance$Companion_instance = null;
  function PercentOfResistance$Companion_getInstance() {
    if (PercentOfResistance$Companion_instance === null) {
      new PercentOfResistance$Companion();
    }
    return PercentOfResistance$Companion_instance;
  }
  PercentOfResistance.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PercentOfResistance',
    interfaces: [StudyBuilder]
  };
  function PercentagePriceOscillator() {
    PercentagePriceOscillator$Companion_getInstance();
    StudyBuilder.call(this);
  }
  PercentagePriceOscillator.prototype.validateParameters_x7u0o8$ = function (params) {
    StudyBuilder.prototype.validateInteger_ez016i$.call(this, params, PercentagePriceOscillator$Companion_getInstance().FAST_LENGTH_0);
    StudyBuilder.prototype.validateInteger_ez016i$.call(this, params, PercentagePriceOscillator$Companion_getInstance().SLOW_LENGTH_0);
    StudyBuilder.prototype.validatePriceField_x7u0o8$.call(this, params);
    StudyBuilder.prototype.validateAverageField_x7u0o8$.call(this, params);
  };
  PercentagePriceOscillator.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var priceField = Kotlin.isType(tmp$ = params.get_11rb$(StudyBuilder$Companion_getInstance().PRICE_PARAMETER), PriceFieldEnum) ? tmp$ : throwCCE();
    var fastLength = typeof (tmp$_0 = params.get_11rb$(PercentagePriceOscillator$Companion_getInstance().FAST_LENGTH_0)) === 'number' ? tmp$_0 : throwCCE();
    var slowLength = typeof (tmp$_1 = params.get_11rb$(PercentagePriceOscillator$Companion_getInstance().SLOW_LENGTH_0)) === 'number' ? tmp$_1 : throwCCE();
    var averageType = Kotlin.isType(tmp$_2 = params.get_11rb$(StudyBuilder$Companion_getInstance().AVERAGE_PARAMETER), AverageTypeEnum) ? tmp$_2 : throwCCE();
    var priceOscillator = PercentagePriceOscillator$Companion_getInstance().constructPercentagePriceOscillator_0(data, fastLength, slowLength, priceField, averageType);
    return listOf([priceOscillator, new ZeroFunction()]);
  };
  function PercentagePriceOscillator$Companion() {
    PercentagePriceOscillator$Companion_instance = this;
    this.FAST_LENGTH_0 = 'fastLength';
    this.SLOW_LENGTH_0 = 'slowLength';
  }
  PercentagePriceOscillator$Companion.prototype.constructPercentagePriceOscillator_0 = function (data, fastLength, slowLength, priceField, averageType) {
    var priceSource = new PriceSourceFunction(data, priceField);
    var priceOscillator = PriceOscillator$Companion_getInstance().constructPriceOscillator_hq7ku4$(data, fastLength, slowLength, priceField, averageType);
    var priceOscillatorMultBy100 = new ArithmeticFunction(priceOscillator, new ConstantFunction(100.0), ArithmeticOperation$MULT_getInstance());
    return new ArithmeticFunction(priceOscillatorMultBy100, new MovingAverageExponential(priceSource, slowLength), ArithmeticOperation$DIV_getInstance());
  };
  PercentagePriceOscillator$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var PercentagePriceOscillator$Companion_instance = null;
  function PercentagePriceOscillator$Companion_getInstance() {
    if (PercentagePriceOscillator$Companion_instance === null) {
      new PercentagePriceOscillator$Companion();
    }
    return PercentagePriceOscillator$Companion_instance;
  }
  PercentagePriceOscillator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PercentagePriceOscillator',
    interfaces: [StudyBuilder]
  };
  function PivotPoints() {
    PivotPoints$Companion_getInstance();
    StudyBuilder.call(this);
  }
  PivotPoints.prototype.validateParameters_x7u0o8$ = function (params) {
    StudyBuilder.prototype.validateAggregation_ez016i$.call(this, params, PivotPoints$Companion_getInstance().AGGREGATION_PARAMETER_0);
    StudyBuilder.prototype.validateBoolean_ez016i$.call(this, params, PivotPoints$Companion_getInstance().SHOW_ONLY_LAST_PARAMETER_0);
  };
  PivotPoints.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    var tmp$;
    var aggregation = Kotlin.isType(tmp$ = params.get_11rb$(PivotPoints$Companion_getInstance().AGGREGATION_PARAMETER_0), AggregationTypeEnum) ? tmp$ : throwCCE();
    return PivotPoints$Companion_getInstance().constructPivot_0(data, aggregation);
  };
  PivotPoints.prototype.getAggregationType_x7u0o8$ = function (params) {
    var tmp$;
    return Kotlin.isType(tmp$ = params.get_11rb$(PivotPoints$Companion_getInstance().AGGREGATION_PARAMETER_0), AggregationTypeEnum) ? tmp$ : throwCCE();
  };
  PivotPoints.prototype.isOnlyLastAggregatedPeriod_x7u0o8$ = function (params) {
    var tmp$;
    return typeof (tmp$ = params.get_11rb$(PivotPoints$Companion_getInstance().SHOW_ONLY_LAST_PARAMETER_0)) === 'boolean' ? tmp$ : throwCCE();
  };
  function PivotPoints$Companion() {
    PivotPoints$Companion_instance = this;
    this.AGGREGATION_PARAMETER_0 = 'aggregation';
    this.SHOW_ONLY_LAST_PARAMETER_0 = 'showOnlyLast';
    this.PIVOT_DISPLACE_0 = -1;
  }
  PivotPoints$Companion.prototype.constructPivot_0 = function (data, type) {
    var close = new PriceAggregatedSourceFunction(data, type, PriceFieldEnum$CLOSE_getInstance(), this.PIVOT_DISPLACE_0);
    var hi = new PriceAggregatedSourceFunction(data, type, PriceFieldEnum$HIGH_getInstance(), this.PIVOT_DISPLACE_0);
    var low = new PriceAggregatedSourceFunction(data, type, PriceFieldEnum$LOW_getInstance(), this.PIVOT_DISPLACE_0);
    var pivot = new ArithmeticFunction(new ArithmeticFunction(new ArithmeticFunction(hi, low, ArithmeticOperation$PLUS_getInstance()), close, ArithmeticOperation$PLUS_getInstance()), new ConstantFunction(3.0), ArithmeticOperation$DIV_getInstance());
    var doublePivot = new ArithmeticFunction(pivot, new ConstantFunction(2.0), ArithmeticOperation$MULT_getInstance());
    var r1 = new ArithmeticFunction(doublePivot, low, ArithmeticOperation$MINUS_getInstance());
    var s1 = new ArithmeticFunction(doublePivot, hi, ArithmeticOperation$MINUS_getInstance());
    var hml = new ArithmeticFunction(hi, low, ArithmeticOperation$MINUS_getInstance());
    var r2 = new ArithmeticFunction(pivot, hml, ArithmeticOperation$PLUS_getInstance());
    var r3 = new ArithmeticFunction(r2, hml, ArithmeticOperation$PLUS_getInstance());
    var lmh = new ArithmeticFunction(low, hi, ArithmeticOperation$MINUS_getInstance());
    var s2 = new ArithmeticFunction(pivot, lmh, ArithmeticOperation$PLUS_getInstance());
    var s3 = new ArithmeticFunction(s2, lmh, ArithmeticOperation$PLUS_getInstance());
    return listOf([r3, r2, r1, pivot, s1, s2, s3]);
  };
  PivotPoints$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var PivotPoints$Companion_instance = null;
  function PivotPoints$Companion_getInstance() {
    if (PivotPoints$Companion_instance === null) {
      new PivotPoints$Companion();
    }
    return PivotPoints$Companion_instance;
  }
  PivotPoints.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PivotPoints',
    interfaces: [StudyBuilder]
  };
  function PriceChannel() {
    PriceChannel$Companion_getInstance();
    StudyBuilder.call(this);
  }
  PriceChannel.prototype.validateParameters_x7u0o8$ = function (params) {
    StudyBuilder.prototype.validateLength_x7u0o8$.call(this, params);
    StudyBuilder.prototype.validateInteger_ez016i$.call(this, params, PriceChannel$Companion_getInstance().SHIFT_LENGTH_PARAMETER);
  };
  PriceChannel.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    var tmp$, tmp$_0;
    var length = typeof (tmp$ = params.get_11rb$(StudyBuilder$Companion_getInstance().LENGTH_PARAMETER)) === 'number' ? tmp$ : throwCCE();
    var shiftLength = typeof (tmp$_0 = params.get_11rb$(PriceChannel$Companion_getInstance().SHIFT_LENGTH_PARAMETER)) === 'number' ? tmp$_0 : throwCCE();
    var highPrice = new PriceSourceFunction(data, PriceFieldEnum$HIGH_getInstance());
    var highest = new HighestFunction(highPrice, length);
    var highestDisplaced = new DisplacementFunction(highest, shiftLength - 1 | 0);
    var lowPrice = new PriceSourceFunction(data, PriceFieldEnum$LOW_getInstance());
    var lowest = new LowestFunction(lowPrice, length);
    var lowestDisplaced = new DisplacementFunction(lowest, shiftLength - 1 | 0);
    return listOf([highestDisplaced, lowestDisplaced]);
  };
  PriceChannel.prototype.getExpansionSize_x7u0o8$ = function (params) {
    var tmp$;
    var shiftLength = typeof (tmp$ = params.get_11rb$(PriceChannel$Companion_getInstance().SHIFT_LENGTH_PARAMETER)) === 'number' ? tmp$ : throwCCE();
    return -shiftLength | 0;
  };
  function PriceChannel$Companion() {
    PriceChannel$Companion_instance = this;
    this.SHIFT_LENGTH_PARAMETER = 'shiftLength';
  }
  PriceChannel$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var PriceChannel$Companion_instance = null;
  function PriceChannel$Companion_getInstance() {
    if (PriceChannel$Companion_instance === null) {
      new PriceChannel$Companion();
    }
    return PriceChannel$Companion_instance;
  }
  PriceChannel.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PriceChannel',
    interfaces: [StudyBuilder]
  };
  function PriceOscillator() {
    PriceOscillator$Companion_getInstance();
    StudyBuilder.call(this);
  }
  PriceOscillator.prototype.validateParameters_x7u0o8$ = function (params) {
    StudyBuilder.prototype.validateInteger_ez016i$.call(this, params, PriceOscillator$Companion_getInstance().FAST_LENGTH_0);
    StudyBuilder.prototype.validateInteger_ez016i$.call(this, params, PriceOscillator$Companion_getInstance().SLOW_LENGTH_0);
    StudyBuilder.prototype.validatePriceField_x7u0o8$.call(this, params);
    StudyBuilder.prototype.validateAverageField_x7u0o8$.call(this, params);
  };
  PriceOscillator.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var priceField = Kotlin.isType(tmp$ = params.get_11rb$(StudyBuilder$Companion_getInstance().PRICE_PARAMETER), PriceFieldEnum) ? tmp$ : throwCCE();
    var fastLength = typeof (tmp$_0 = params.get_11rb$(PriceOscillator$Companion_getInstance().FAST_LENGTH_0)) === 'number' ? tmp$_0 : throwCCE();
    var slowLength = typeof (tmp$_1 = params.get_11rb$(PriceOscillator$Companion_getInstance().SLOW_LENGTH_0)) === 'number' ? tmp$_1 : throwCCE();
    var averageType = Kotlin.isType(tmp$_2 = params.get_11rb$(StudyBuilder$Companion_getInstance().AVERAGE_PARAMETER), AverageTypeEnum) ? tmp$_2 : throwCCE();
    var priceOscillator = PriceOscillator$Companion_getInstance().constructPriceOscillator_hq7ku4$(data, fastLength, slowLength, priceField, averageType);
    return listOf([priceOscillator, new ZeroFunction()]);
  };
  function PriceOscillator$Companion() {
    PriceOscillator$Companion_instance = this;
    this.FAST_LENGTH_0 = 'fastLength';
    this.SLOW_LENGTH_0 = 'slowLength';
  }
  PriceOscillator$Companion.prototype.constructPriceOscillator_hq7ku4$ = function (data, fastLength, slowLength, priceField, averageType) {
    var priceSource = new PriceSourceFunction(data, priceField);
    var firstMovingAverage = CommonFunctions_getInstance().constructAverage_dtut4e$(averageType, priceSource, fastLength);
    var secondMovingAverage = CommonFunctions_getInstance().constructAverage_dtut4e$(averageType, priceSource, slowLength);
    return new ArithmeticFunction(firstMovingAverage, secondMovingAverage, ArithmeticOperation$MINUS_getInstance());
  };
  PriceOscillator$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var PriceOscillator$Companion_instance = null;
  function PriceOscillator$Companion_getInstance() {
    if (PriceOscillator$Companion_instance === null) {
      new PriceOscillator$Companion();
    }
    return PriceOscillator$Companion_instance;
  }
  PriceOscillator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PriceOscillator',
    interfaces: [StudyBuilder]
  };
  function PriceVolumeTrend() {
    StudyBuilder.call(this);
  }
  PriceVolumeTrend.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    var close = new PriceSourceFunction(data, PriceFieldEnum$CLOSE_getInstance());
    var volume = new PriceSourceFunction(data, PriceFieldEnum$VOLUME_getInstance());
    var diffDivPrev = new DiffDivPrevFunction(close);
    var pv = new ArithmeticFunction(diffDivPrev, volume, ArithmeticOperation$MULT_getInstance());
    var pvt = WindowFunction_init_0(new CumulativeSumFunction(pv), 0, true);
    return listOf_0(pvt);
  };
  PriceVolumeTrend.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PriceVolumeTrend',
    interfaces: [StudyBuilder]
  };
  function ROC() {
    StudyBuilder.call(this);
  }
  ROC.prototype.validateParameters_x7u0o8$ = function (params) {
    StudyBuilder.prototype.validateLength_x7u0o8$.call(this, params);
    StudyBuilder.prototype.validatePriceField_x7u0o8$.call(this, params);
  };
  ROC.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    var tmp$, tmp$_0;
    var length = typeof (tmp$ = params.get_11rb$(StudyBuilder$Companion_getInstance().LENGTH_PARAMETER)) === 'number' ? tmp$ : throwCCE();
    var priceField = Kotlin.isType(tmp$_0 = params.get_11rb$(StudyBuilder$Companion_getInstance().PRICE_PARAMETER), PriceFieldEnum) ? tmp$_0 : throwCCE();
    var price = new PriceSourceFunction(data, priceField);
    var pDelayed = new DisplacementFunction(price, -length | 0);
    var rocFract = new ArithmeticFunction(price, pDelayed, ArithmeticOperation$DIFF_DIV_RIGHT_getInstance());
    var roc = new ArithmeticFunction(rocFract, new ConstantFunction(100.0), ArithmeticOperation$MULT_getInstance());
    var zero = new ZeroFunction();
    return listOf([roc, zero]);
  };
  ROC.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ROC',
    interfaces: [StudyBuilder]
  };
  function RankCorrelationIndex() {
    StudyBuilder.call(this);
    this.OVERBOUGHT_PARAMETER = 'overbought';
    this.OVERSOLD_PARAMETER = 'oversold';
    this.AVERAGE_LENGTH = 'averageLength';
  }
  RankCorrelationIndex.prototype.validateParameters_x7u0o8$ = function (params) {
    StudyBuilder.prototype.validatePriceField_x7u0o8$.call(this, params);
    StudyBuilder.prototype.validateLength_x7u0o8$.call(this, params);
    StudyBuilder.prototype.validateInteger_ez016i$.call(this, params, this.OVERBOUGHT_PARAMETER);
    StudyBuilder.prototype.validateInteger_ez016i$.call(this, params, this.OVERSOLD_PARAMETER);
    StudyBuilder.prototype.validateInteger_ez016i$.call(this, params, this.AVERAGE_LENGTH);
  };
  RankCorrelationIndex.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    var tmp$, tmp$_0, tmp$_1;
    var overbought = typeof (tmp$ = params.get_11rb$(this.OVERBOUGHT_PARAMETER)) === 'number' ? tmp$ : throwCCE();
    var oversold = typeof (tmp$_0 = params.get_11rb$(this.OVERSOLD_PARAMETER)) === 'number' ? tmp$_0 : throwCCE();
    var averageLength = typeof (tmp$_1 = params.get_11rb$(this.AVERAGE_LENGTH)) === 'number' ? tmp$_1 : throwCCE();
    var zero = new ZeroFunction();
    var rci = this.createRCI_0(data, params);
    var rciAverage = new MovingAverageSimple(this.createRCI_0(data, params), averageLength);
    return listOf([rci, rciAverage, new ConstantFunction(overbought), zero, new ConstantFunction(oversold)]);
  };
  RankCorrelationIndex.prototype.createRCI_0 = function (data, params) {
    var tmp$, tmp$_0;
    var length = typeof (tmp$ = params.get_11rb$(StudyBuilder$Companion_getInstance().LENGTH_PARAMETER)) === 'number' ? tmp$ : throwCCE();
    var priceField = Kotlin.isType(tmp$_0 = params.get_11rb$(StudyBuilder$Companion_getInstance().PRICE_PARAMETER), PriceFieldEnum) ? tmp$_0 : throwCCE();
    var priceSource = new PriceSourceFunction(data, priceField);
    var sumOfSquareRanks = new SpearmansRho(priceSource, length);
    return new ArithmeticFunction(sumOfSquareRanks, new ConstantFunction(100.0), ArithmeticOperation$MULT_getInstance());
  };
  RankCorrelationIndex.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RankCorrelationIndex',
    interfaces: [StudyBuilder]
  };
  function RelativeStrengthIndex() {
    RelativeStrengthIndex$Companion_getInstance();
    StudyBuilder.call(this);
  }
  RelativeStrengthIndex.prototype.validateParameters_x7u0o8$ = function (params) {
    StudyBuilder.prototype.validatePriceField_x7u0o8$.call(this, params);
    StudyBuilder.prototype.validateLength_x7u0o8$.call(this, params);
    StudyBuilder.prototype.validateInteger_ez016i$.call(this, params, RelativeStrengthIndex$Companion_getInstance().OVERBOUGHT_PARAMETER);
    StudyBuilder.prototype.validateInteger_ez016i$.call(this, params, RelativeStrengthIndex$Companion_getInstance().OVERSOLD_PARAMETER);
    StudyBuilder.prototype.validateAverageField_x7u0o8$.call(this, params);
  };
  RelativeStrengthIndex.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    var priceField = Kotlin.isType(tmp$ = params.get_11rb$(StudyBuilder$Companion_getInstance().PRICE_PARAMETER), PriceFieldEnum) ? tmp$ : throwCCE();
    var length = typeof (tmp$_0 = params.get_11rb$(StudyBuilder$Companion_getInstance().LENGTH_PARAMETER)) === 'number' ? tmp$_0 : throwCCE();
    var overbought = typeof (tmp$_1 = params.get_11rb$(RelativeStrengthIndex$Companion_getInstance().OVERBOUGHT_PARAMETER)) === 'number' ? tmp$_1 : throwCCE();
    var oversold = typeof (tmp$_2 = params.get_11rb$(RelativeStrengthIndex$Companion_getInstance().OVERSOLD_PARAMETER)) === 'number' ? tmp$_2 : throwCCE();
    var averageType = Kotlin.isType(tmp$_3 = params.get_11rb$(StudyBuilder$Companion_getInstance().AVERAGE_PARAMETER), AverageTypeEnum) ? tmp$_3 : throwCCE();
    var priceSourceFunction = new PriceSourceFunction(data, priceField);
    var overboughtF = new ConstantFunction(overbought);
    var oversoldF = new ConstantFunction(oversold);
    var rsi = CommonFunctions_getInstance().constructRSI_fo9dvd$(priceSourceFunction, length, averageType);
    return listOf([rsi, overboughtF, oversoldF]);
  };
  function RelativeStrengthIndex$Companion() {
    RelativeStrengthIndex$Companion_instance = this;
    this.OVERBOUGHT_PARAMETER = 'overbought';
    this.OVERSOLD_PARAMETER = 'oversold';
  }
  RelativeStrengthIndex$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var RelativeStrengthIndex$Companion_instance = null;
  function RelativeStrengthIndex$Companion_getInstance() {
    if (RelativeStrengthIndex$Companion_instance === null) {
      new RelativeStrengthIndex$Companion();
    }
    return RelativeStrengthIndex$Companion_instance;
  }
  RelativeStrengthIndex.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RelativeStrengthIndex',
    interfaces: [StudyBuilder]
  };
  function RelativeVigorIndex() {
    StudyBuilder.call(this);
  }
  RelativeVigorIndex.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    var rvi = CommonFunctions_getInstance().constructRVI_t0cfja$(data);
    return listOf_0(rvi);
  };
  RelativeVigorIndex.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RelativeVigorIndex',
    interfaces: [StudyBuilder]
  };
  function RelativeVigorIndexSMA() {
    StudyBuilder.call(this);
  }
  RelativeVigorIndexSMA.prototype.validateParameters_x7u0o8$ = function (params) {
    StudyBuilder.prototype.validateLength_x7u0o8$.call(this, params);
  };
  RelativeVigorIndexSMA.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    var tmp$;
    var length = typeof (tmp$ = params.get_11rb$(StudyBuilder$Companion_getInstance().LENGTH_PARAMETER)) === 'number' ? tmp$ : throwCCE();
    var smaRvi = new MovingAverageSimple(CommonFunctions_getInstance().constructRVI_t0cfja$(data), length);
    return listOf_0(smaRvi);
  };
  RelativeVigorIndexSMA.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RelativeVigorIndexSMA',
    interfaces: [StudyBuilder]
  };
  function RelativeVolatilityIndex() {
    RelativeVolatilityIndex$Companion_getInstance();
    StudyBuilder.call(this);
  }
  RelativeVolatilityIndex.prototype.validateParameters_x7u0o8$ = function (params) {
    StudyBuilder.prototype.validateLength_x7u0o8$.call(this, params);
    StudyBuilder.prototype.validateInteger_ez016i$.call(this, params, RelativeVolatilityIndex$Companion_getInstance().OVERBOUGHT_PARAMETER);
    StudyBuilder.prototype.validateInteger_ez016i$.call(this, params, RelativeVolatilityIndex$Companion_getInstance().OVERSOLD_PARAMETER);
  };
  RelativeVolatilityIndex.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    var tmp$, tmp$_0, tmp$_1;
    var length = typeof (tmp$ = params.get_11rb$(StudyBuilder$Companion_getInstance().LENGTH_PARAMETER)) === 'number' ? tmp$ : throwCCE();
    var overbought = typeof (tmp$_0 = params.get_11rb$(RelativeVolatilityIndex$Companion_getInstance().OVERBOUGHT_PARAMETER)) === 'number' ? tmp$_0 : throwCCE();
    var oversold = typeof (tmp$_1 = params.get_11rb$(RelativeVolatilityIndex$Companion_getInstance().OVERSOLD_PARAMETER)) === 'number' ? tmp$_1 : throwCCE();
    var rvi = RelativeVolatilityIndex$Companion_getInstance().constructRVI_sbo9ig$(data, length);
    return listOf([rvi, new ConstantFunction(overbought), new ConstantFunction(oversold)]);
  };
  function RelativeVolatilityIndex$Companion() {
    RelativeVolatilityIndex$Companion_instance = this;
    this.OVERBOUGHT_PARAMETER = 'overbought';
    this.OVERSOLD_PARAMETER = 'oversold';
  }
  RelativeVolatilityIndex$Companion.prototype.constructRVI_sbo9ig$ = function (data, length) {
    var hiPrice = new PriceSourceFunction(data, PriceFieldEnum$HIGH_getInstance());
    var loPrice = new PriceSourceFunction(data, PriceFieldEnum$LOW_getInstance());
    var highRVI = new RelativeVolatilityFunction(hiPrice, length);
    var lowRVI = new RelativeVolatilityFunction(loPrice, length);
    return new ArithmeticFunction(new ArithmeticFunction(highRVI, lowRVI, ArithmeticOperation$PLUS_getInstance()), new ConstantFunction(2.0), ArithmeticOperation$DIV_getInstance());
  };
  RelativeVolatilityIndex$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var RelativeVolatilityIndex$Companion_instance = null;
  function RelativeVolatilityIndex$Companion_getInstance() {
    if (RelativeVolatilityIndex$Companion_instance === null) {
      new RelativeVolatilityIndex$Companion();
    }
    return RelativeVolatilityIndex$Companion_instance;
  }
  RelativeVolatilityIndex.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RelativeVolatilityIndex',
    interfaces: [StudyBuilder]
  };
  function SMA() {
    StudyBuilder.call(this);
  }
  SMA.prototype.validateParameters_x7u0o8$ = function (params) {
    StudyBuilder.prototype.validateLength_x7u0o8$.call(this, params);
    StudyBuilder.prototype.validatePriceField_x7u0o8$.call(this, params);
    StudyBuilder.prototype.validateDisplace_x7u0o8$.call(this, params);
  };
  SMA.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    var tmp$, tmp$_0, tmp$_1;
    var length = typeof (tmp$ = params.get_11rb$(StudyBuilder$Companion_getInstance().LENGTH_PARAMETER)) === 'number' ? tmp$ : throwCCE();
    var displace = typeof (tmp$_0 = params.get_11rb$(StudyBuilder$Companion_getInstance().DISPLACE_PARAMETER)) === 'number' ? tmp$_0 : throwCCE();
    var priceField = Kotlin.isType(tmp$_1 = params.get_11rb$(StudyBuilder$Companion_getInstance().PRICE_PARAMETER), PriceFieldEnum) ? tmp$_1 : throwCCE();
    var priceFunc = new PriceSourceFunction(data, priceField);
    var smaFunc = new MovingAverageSimple(priceFunc, length);
    var displacedSmaFunc = new DisplacementFunction(smaFunc, displace);
    return listOf_0(displacedSmaFunc);
  };
  SMA.prototype.getExpansionSize_x7u0o8$ = function (params) {
    var tmp$;
    var displace = typeof (tmp$ = params.get_11rb$(StudyBuilder$Companion_getInstance().DISPLACE_PARAMETER)) === 'number' ? tmp$ : throwCCE();
    return -displace | 0;
  };
  SMA.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SMA',
    interfaces: [StudyBuilder]
  };
  function SMMA() {
    StudyBuilder.call(this);
  }
  SMMA.prototype.validateParameters_x7u0o8$ = function (params) {
    StudyBuilder.prototype.validateLength_x7u0o8$.call(this, params);
    StudyBuilder.prototype.validatePriceField_x7u0o8$.call(this, params);
    StudyBuilder.prototype.validateDisplace_x7u0o8$.call(this, params);
  };
  SMMA.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    var tmp$, tmp$_0, tmp$_1;
    var length = typeof (tmp$ = params.get_11rb$(StudyBuilder$Companion_getInstance().LENGTH_PARAMETER)) === 'number' ? tmp$ : throwCCE();
    var displace = typeof (tmp$_0 = params.get_11rb$(StudyBuilder$Companion_getInstance().DISPLACE_PARAMETER)) === 'number' ? tmp$_0 : throwCCE();
    var priceField = Kotlin.isType(tmp$_1 = params.get_11rb$(StudyBuilder$Companion_getInstance().PRICE_PARAMETER), PriceFieldEnum) ? tmp$_1 : throwCCE();
    var priceFunc = new PriceSourceFunction(data, priceField);
    var smaFunc = new MovingAverageSmoothed(priceFunc, length);
    var displacedSmaFunc = new DisplacementFunction(smaFunc, displace);
    return listOf_0(displacedSmaFunc);
  };
  SMMA.prototype.getExpansionSize_x7u0o8$ = function (params) {
    var tmp$;
    var displace = typeof (tmp$ = params.get_11rb$(StudyBuilder$Companion_getInstance().DISPLACE_PARAMETER)) === 'number' ? tmp$ : throwCCE();
    return -displace | 0;
  };
  SMMA.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SMMA',
    interfaces: [StudyBuilder]
  };
  function SROC() {
    SROC$Companion_getInstance();
    StudyBuilder.call(this);
  }
  SROC.prototype.validateParameters_x7u0o8$ = function (params) {
    StudyBuilder.prototype.validateLength_x7u0o8$.call(this, params);
    StudyBuilder.prototype.validatePriceField_x7u0o8$.call(this, params);
    StudyBuilder.prototype.validateInteger_ez016i$.call(this, params, SROC$Companion_getInstance().SHIFT_LENGTH_PARAMETER);
  };
  SROC.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    var tmp$, tmp$_0, tmp$_1;
    var length = typeof (tmp$ = params.get_11rb$(StudyBuilder$Companion_getInstance().LENGTH_PARAMETER)) === 'number' ? tmp$ : throwCCE();
    var shiftLength = typeof (tmp$_0 = params.get_11rb$(SROC$Companion_getInstance().SHIFT_LENGTH_PARAMETER)) === 'number' ? tmp$_0 : throwCCE();
    var priceField = Kotlin.isType(tmp$_1 = params.get_11rb$(StudyBuilder$Companion_getInstance().PRICE_PARAMETER), PriceFieldEnum) ? tmp$_1 : throwCCE();
    var price = new PriceSourceFunction(data, priceField);
    var emaPrice = new MovingAverageExponential(price, length);
    var emaPriceForDelay = new MovingAverageExponential(price, length);
    var emaPriceDelayed = new DisplacementFunction(emaPriceForDelay, -shiftLength | 0);
    var srocFract = new ArithmeticFunction(emaPrice, emaPriceDelayed, ArithmeticOperation$DIFF_DIV_RIGHT_getInstance());
    var sroc = new ArithmeticFunction(srocFract, new ConstantFunction(100.0), ArithmeticOperation$MULT_getInstance());
    var zero = new ZeroFunction();
    return listOf([sroc, zero]);
  };
  function SROC$Companion() {
    SROC$Companion_instance = this;
    this.SHIFT_LENGTH_PARAMETER = 'shiftLength';
  }
  SROC$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var SROC$Companion_instance = null;
  function SROC$Companion_getInstance() {
    if (SROC$Companion_instance === null) {
      new SROC$Companion();
    }
    return SROC$Companion_instance;
  }
  SROC.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SROC',
    interfaces: [StudyBuilder]
  };
  function STARCBands() {
    STARCBands$Companion_getInstance();
    StudyBuilder.call(this);
  }
  STARCBands.prototype.validateParameters_x7u0o8$ = function (params) {
    StudyBuilder.prototype.validatePriceField_x7u0o8$.call(this, params);
    StudyBuilder.prototype.validateDouble_ez016i$.call(this, params, STARCBands$Companion_getInstance().MULTIPLIER_FACTOR);
    StudyBuilder.prototype.validateInteger_ez016i$.call(this, params, STARCBands$Companion_getInstance().ATR_LENGTH);
    StudyBuilder.prototype.validateInteger_ez016i$.call(this, params, STARCBands$Companion_getInstance().SMA_LENGTH);
    StudyBuilder.prototype.validateInteger_ez016i$.call(this, params, StudyBuilder$Companion_getInstance().DISPLACE_PARAMETER);
  };
  STARCBands.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    var multiplierFactor = typeof (tmp$ = params.get_11rb$(STARCBands$Companion_getInstance().MULTIPLIER_FACTOR)) === 'number' ? tmp$ : throwCCE();
    var atrLength = typeof (tmp$_0 = params.get_11rb$(STARCBands$Companion_getInstance().ATR_LENGTH)) === 'number' ? tmp$_0 : throwCCE();
    var smaLength = typeof (tmp$_1 = params.get_11rb$(STARCBands$Companion_getInstance().SMA_LENGTH)) === 'number' ? tmp$_1 : throwCCE();
    var displace = typeof (tmp$_2 = params.get_11rb$(StudyBuilder$Companion_getInstance().DISPLACE_PARAMETER)) === 'number' ? tmp$_2 : throwCCE();
    var priceField = Kotlin.isType(tmp$_3 = params.get_11rb$(StudyBuilder$Companion_getInstance().PRICE_PARAMETER), PriceFieldEnum) ? tmp$_3 : throwCCE();
    var upper = new ArithmeticFunction(STARCBands$Companion_getInstance().priceSma_0(data, priceField, smaLength), new ArithmeticFunction(new ConstantFunction(multiplierFactor), CommonFunctions_getInstance().constructATR_sbo9ig$(data, atrLength), ArithmeticOperation$MULT_getInstance()), ArithmeticOperation$PLUS_getInstance());
    var upperDisplace = new DisplacementFunction(upper, displace);
    var lower = new ArithmeticFunction(STARCBands$Companion_getInstance().priceSma_0(data, priceField, smaLength), new ArithmeticFunction(new ConstantFunction(multiplierFactor), CommonFunctions_getInstance().constructATR_sbo9ig$(data, atrLength), ArithmeticOperation$MULT_getInstance()), ArithmeticOperation$MINUS_getInstance());
    var lowerDisplace = new DisplacementFunction(lower, displace);
    var sma = STARCBands$Companion_getInstance().priceSma_0(data, priceField, smaLength);
    var smaDisplace = new DisplacementFunction(sma, displace);
    return listOf([lowerDisplace, smaDisplace, upperDisplace]);
  };
  STARCBands.prototype.getExpansionSize_x7u0o8$ = function (params) {
    var tmp$;
    var displace = typeof (tmp$ = params.get_11rb$(StudyBuilder$Companion_getInstance().DISPLACE_PARAMETER)) === 'number' ? tmp$ : throwCCE();
    return -displace | 0;
  };
  function STARCBands$Companion() {
    STARCBands$Companion_instance = this;
    this.MULTIPLIER_FACTOR = 'multiplierFactor';
    this.ATR_LENGTH = 'atrLength';
    this.SMA_LENGTH = 'smaLength';
  }
  STARCBands$Companion.prototype.priceSma_0 = function (data, priceField, smaLength) {
    return new MovingAverageSimple(new PriceSourceFunction(data, priceField), smaLength);
  };
  STARCBands$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var STARCBands$Companion_instance = null;
  function STARCBands$Companion_getInstance() {
    if (STARCBands$Companion_instance === null) {
      new STARCBands$Companion();
    }
    return STARCBands$Companion_instance;
  }
  STARCBands.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'STARCBands',
    interfaces: [StudyBuilder]
  };
  function SchaffTrendCycle() {
    SchaffTrendCycle$Companion_getInstance();
    StudyBuilder.call(this);
  }
  SchaffTrendCycle.prototype.validateParameters_x7u0o8$ = function (params) {
    StudyBuilder.prototype.validateInteger_ez016i$.call(this, params, SchaffTrendCycle$Companion_getInstance().K_PERIOD_0);
    StudyBuilder.prototype.validateInteger_ez016i$.call(this, params, SchaffTrendCycle$Companion_getInstance().FAST_LENGTH_0);
    StudyBuilder.prototype.validateInteger_ez016i$.call(this, params, SchaffTrendCycle$Companion_getInstance().SLOW_LENGTH_0);
    StudyBuilder.prototype.validateInteger_ez016i$.call(this, params, SchaffTrendCycle$Companion_getInstance().K_SLOWING_0);
  };
  SchaffTrendCycle.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var kPeriod = typeof (tmp$ = params.get_11rb$(SchaffTrendCycle$Companion_getInstance().K_PERIOD_0)) === 'number' ? tmp$ : throwCCE();
    var fastLength = typeof (tmp$_0 = params.get_11rb$(SchaffTrendCycle$Companion_getInstance().FAST_LENGTH_0)) === 'number' ? tmp$_0 : throwCCE();
    var slowLength = typeof (tmp$_1 = params.get_11rb$(SchaffTrendCycle$Companion_getInstance().SLOW_LENGTH_0)) === 'number' ? tmp$_1 : throwCCE();
    var slowing = typeof (tmp$_2 = params.get_11rb$(SchaffTrendCycle$Companion_getInstance().K_SLOWING_0)) === 'number' ? tmp$_2 : throwCCE();
    var price = new PriceSourceFunction(data, PriceFieldEnum$CLOSE_getInstance());
    var macd = MACD$Companion_getInstance().getMACDValue_hzlyfh$(fastLength, slowLength, AverageTypeEnum$EXPONENTIAL_getInstance(), price);
    var pfOffset = Math_0.max(fastLength, slowLength) - 1 | 0;
    var pf = this.buildSchaffPF_0(kPeriod, macd, slowing, pfOffset);
    var pffOffset = pfOffset + (kPeriod - 1) + (slowing - 1) | 0;
    var pff = this.buildSchaffPF_0(kPeriod, pf, slowing, pffOffset);
    return listOf([pff, SchaffTrendCycle$Companion_getInstance().OVERBOUGHT_0, SchaffTrendCycle$Companion_getInstance().OVERSOLD_0]);
  };
  SchaffTrendCycle.prototype.buildSchaffPF_0 = function (length, func, slowing, offset) {
    var lowest = new LowestFunction(func, length);
    var range = new ArithmeticFunction(new HighestFunction(func, length), lowest, ArithmeticOperation$MINUS_getInstance());
    var fastK = CommonFunctions_getInstance().getStochasticFastK_65i00b$(func, lowest, range);
    var scaffFracOffset = offset + (length - 1) | 0;
    var schaffFrac = new SchaffTrendFrac(range, fastK, scaffFracOffset);
    return new MovingAverageExponential(schaffFrac, slowing, scaffFracOffset);
  };
  function SchaffTrendCycle$Companion() {
    SchaffTrendCycle$Companion_instance = this;
    this.FAST_LENGTH_0 = 'fastLength';
    this.SLOW_LENGTH_0 = 'slowLength';
    this.K_PERIOD_0 = 'kPeriod';
    this.K_SLOWING_0 = 'kSlowing';
    this.OVERSOLD_0 = new ConstantFunction(20.0);
    this.OVERBOUGHT_0 = new ConstantFunction(80.0);
  }
  SchaffTrendCycle$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var SchaffTrendCycle$Companion_instance = null;
  function SchaffTrendCycle$Companion_getInstance() {
    if (SchaffTrendCycle$Companion_instance === null) {
      new SchaffTrendCycle$Companion();
    }
    return SchaffTrendCycle$Companion_instance;
  }
  SchaffTrendCycle.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SchaffTrendCycle',
    interfaces: [StudyBuilder]
  };
  function SlowStochastic() {
    SlowStochastic$Companion_getInstance();
    StudyBuilder.call(this);
  }
  SlowStochastic.prototype.validateParameters_x7u0o8$ = function (params) {
    StudyBuilder.prototype.validateInteger_ez016i$.call(this, params, SlowStochastic$Companion_getInstance().KPERIOD_PARAMETER);
    StudyBuilder.prototype.validateInteger_ez016i$.call(this, params, SlowStochastic$Companion_getInstance().DPERIOD_PARAMETER);
    StudyBuilder.prototype.validateInteger_ez016i$.call(this, params, SlowStochastic$Companion_getInstance().OVERBOUGHT_PARAMETER);
    StudyBuilder.prototype.validateInteger_ez016i$.call(this, params, SlowStochastic$Companion_getInstance().OVERSOLD_PARAMETER);
    StudyBuilder.prototype.validateAverageField_x7u0o8$.call(this, params);
  };
  SlowStochastic.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    var kperiod = typeof (tmp$ = params.get_11rb$(SlowStochastic$Companion_getInstance().KPERIOD_PARAMETER)) === 'number' ? tmp$ : throwCCE();
    var dperiod = typeof (tmp$_0 = params.get_11rb$(SlowStochastic$Companion_getInstance().DPERIOD_PARAMETER)) === 'number' ? tmp$_0 : throwCCE();
    var overbought = typeof (tmp$_1 = params.get_11rb$(SlowStochastic$Companion_getInstance().OVERBOUGHT_PARAMETER)) === 'number' ? tmp$_1 : throwCCE();
    var oversold = typeof (tmp$_2 = params.get_11rb$(SlowStochastic$Companion_getInstance().OVERSOLD_PARAMETER)) === 'number' ? tmp$_2 : throwCCE();
    var averageType = Kotlin.isType(tmp$_3 = params.get_11rb$(StudyBuilder$Companion_getInstance().AVERAGE_PARAMETER), AverageTypeEnum) ? tmp$_3 : throwCCE();
    return CommonFunctions_getInstance().constructStochastic_qdi6fo$(data, dperiod, overbought, oversold, kperiod, 3, averageType);
  };
  function SlowStochastic$Companion() {
    SlowStochastic$Companion_instance = this;
    this.KPERIOD_PARAMETER = 'kPeriod';
    this.DPERIOD_PARAMETER = 'dPeriod';
    this.OVERBOUGHT_PARAMETER = 'overbought';
    this.OVERSOLD_PARAMETER = 'oversold';
  }
  SlowStochastic$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var SlowStochastic$Companion_instance = null;
  function SlowStochastic$Companion_getInstance() {
    if (SlowStochastic$Companion_instance === null) {
      new SlowStochastic$Companion();
    }
    return SlowStochastic$Companion_instance;
  }
  SlowStochastic.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SlowStochastic',
    interfaces: [StudyBuilder]
  };
  function StandardDeviation() {
    StudyBuilder.call(this);
  }
  StandardDeviation.prototype.validateParameters_x7u0o8$ = function (params) {
    StudyBuilder.prototype.validatePriceField_x7u0o8$.call(this, params);
    StudyBuilder.prototype.validateLength_x7u0o8$.call(this, params);
  };
  StandardDeviation.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    var tmp$, tmp$_0;
    var priceField = Kotlin.isType(tmp$ = params.get_11rb$(StudyBuilder$Companion_getInstance().PRICE_PARAMETER), PriceFieldEnum) ? tmp$ : throwCCE();
    var length = typeof (tmp$_0 = params.get_11rb$(StudyBuilder$Companion_getInstance().LENGTH_PARAMETER)) === 'number' ? tmp$_0 : throwCCE();
    var price = new PriceSourceFunction(data, priceField);
    var stdDev = new StandardDeviationFunction(price, length);
    return listOf_0(stdDev);
  };
  StandardDeviation.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StandardDeviation',
    interfaces: [StudyBuilder]
  };
  function StandardDeviationChannel() {
    StandardDeviationChannel$Companion_getInstance();
    StudyBuilder.call(this);
  }
  StandardDeviationChannel.prototype.validateParameters_x7u0o8$ = function (params) {
    StudyBuilder.prototype.validateLength_x7u0o8$.call(this, params);
    StudyBuilder.prototype.validatePriceField_x7u0o8$.call(this, params);
    StudyBuilder.prototype.validateDouble_ez016i$.call(this, params, StandardDeviationChannel$Companion_getInstance().DEVIATIONS_PARAMETER);
  };
  StandardDeviationChannel.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
    var length = typeof (tmp$ = params.get_11rb$(StudyBuilder$Companion_getInstance().LENGTH_PARAMETER)) === 'number' ? tmp$ : throwCCE();
    var priceField = Kotlin.isType(tmp$_0 = params.get_11rb$(StudyBuilder$Companion_getInstance().PRICE_PARAMETER), PriceFieldEnum) ? tmp$_0 : throwCCE();
    var deviations = typeof (tmp$_1 = params.get_11rb$(StandardDeviationChannel$Companion_getInstance().DEVIATIONS_PARAMETER)) === 'number' ? tmp$_1 : throwCCE();
    var dataObj = Kotlin.isType(tmp$_2 = data, DataItemsView) ? tmp$_2 : throwCCE();
    var candlesDataHolder = Kotlin.isType(tmp$_3 = dataObj.originalTradeData, CandleTradeDataHolder) ? tmp$_3 : throwCCE();
    var targetCandles = Kotlin.isType(tmp$_4 = candlesDataHolder.candles.subList_vux9f0$(data.dataLength - length | 0, data.dataLength), MutableList) ? tmp$_4 : throwCCE();
    var newCandlesDataHolder = new CandleTradeDataHolder(targetCandles);
    var price = new PriceSourceFunction(newCandlesDataHolder, priceField);
    var lrcForHigh = WindowFunction_init_0(new LinearRegressionFunction(price), 0, true);
    var lrcForLow = WindowFunction_init_0(new LinearRegressionFunction(price), 0, true);
    var lrcShow = WindowFunction_init_0(new LinearRegressionFunction(price), 0, true);
    var stdhMultHigh = new ArithmeticFunction(lrcForHigh, new ConstantFunction(deviations / 10), ArithmeticOperation$MULT_getInstance());
    var stdhMultLow = new ArithmeticFunction(lrcForLow, new ConstantFunction(deviations / 10), ArithmeticOperation$MULT_getInstance());
    var highLineAr = new ArithmeticFunction(lrcForHigh, stdhMultHigh, ArithmeticOperation$PLUS_getInstance());
    var lowLineAr = new ArithmeticFunction(lrcForLow, stdhMultLow, ArithmeticOperation$MINUS_getInstance());
    var highLine = new DisplacementFunction(highLineAr, (-data.dataLength | 0) + length | 0);
    var midLine = new DisplacementFunction(lrcShow, (-data.dataLength | 0) + length | 0);
    var lowLine = new DisplacementFunction(lowLineAr, (-data.dataLength | 0) + length | 0);
    return listOf([midLine, highLine, lowLine]);
  };
  function StandardDeviationChannel$Companion() {
    StandardDeviationChannel$Companion_instance = this;
    this.DEVIATIONS_PARAMETER = 'deviations';
  }
  StandardDeviationChannel$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var StandardDeviationChannel$Companion_instance = null;
  function StandardDeviationChannel$Companion_getInstance() {
    if (StandardDeviationChannel$Companion_instance === null) {
      new StandardDeviationChannel$Companion();
    }
    return StandardDeviationChannel$Companion_instance;
  }
  StandardDeviationChannel.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StandardDeviationChannel',
    interfaces: [StudyBuilder]
  };
  function StandardErrorBands() {
    StandardErrorBands$Companion_getInstance();
    StudyBuilder.call(this);
  }
  StandardErrorBands.prototype.validateParameters_x7u0o8$ = function (params) {
    StudyBuilder.prototype.validatePriceField_x7u0o8$.call(this, params);
    StudyBuilder.prototype.validateInteger_ez016i$.call(this, params, StandardErrorBands$Companion_getInstance().LIN_REG_PARAMETER_0);
    StudyBuilder.prototype.validateInteger_ez016i$.call(this, params, StandardErrorBands$Companion_getInstance().SM_LENGTH_PARAMETER_0);
    StudyBuilder.prototype.validateDisplace_x7u0o8$.call(this, params);
    StudyBuilder.prototype.validateDouble_ez016i$.call(this, params, StandardErrorBands$Companion_getInstance().NUM_DEV_UP_PARAMETER_0);
    StudyBuilder.prototype.validateDouble_ez016i$.call(this, params, StandardErrorBands$Companion_getInstance().NUM_DEV_DOWN_PARAMETER_0);
  };
  StandardErrorBands.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
    var priceField = Kotlin.isType(tmp$ = params.get_11rb$(StudyBuilder$Companion_getInstance().PRICE_PARAMETER), PriceFieldEnum) ? tmp$ : throwCCE();
    var linRegLength = typeof (tmp$_0 = params.get_11rb$(StandardErrorBands$Companion_getInstance().LIN_REG_PARAMETER_0)) === 'number' ? tmp$_0 : throwCCE();
    var smLength = typeof (tmp$_1 = params.get_11rb$(StandardErrorBands$Companion_getInstance().SM_LENGTH_PARAMETER_0)) === 'number' ? tmp$_1 : throwCCE();
    var displace = typeof (tmp$_2 = params.get_11rb$(StudyBuilder$Companion_getInstance().DISPLACE_PARAMETER)) === 'number' ? tmp$_2 : throwCCE();
    var numDevUp = typeof (tmp$_3 = params.get_11rb$(StandardErrorBands$Companion_getInstance().NUM_DEV_UP_PARAMETER_0)) === 'number' ? tmp$_3 : throwCCE();
    var numDevDown = typeof (tmp$_4 = params.get_11rb$(StandardErrorBands$Companion_getInstance().NUM_DEV_DOWN_PARAMETER_0)) === 'number' ? tmp$_4 : throwCCE();
    return listOf([new DisplacementFunction(StandardErrorBands$Companion_getInstance().constructBandFunction_0(data, priceField, smLength, linRegLength, numDevDown), displace), new DisplacementFunction(StandardErrorBands$Companion_getInstance().constructMainFunction_0(data, priceField, smLength, linRegLength), displace), new DisplacementFunction(StandardErrorBands$Companion_getInstance().constructBandFunction_0(data, priceField, smLength, linRegLength, numDevUp), displace)]);
  };
  StandardErrorBands.prototype.getExpansionSize_x7u0o8$ = function (params) {
    var tmp$;
    var displace = typeof (tmp$ = params.get_11rb$(StudyBuilder$Companion_getInstance().DISPLACE_PARAMETER)) === 'number' ? tmp$ : throwCCE();
    return -displace | 0;
  };
  function StandardErrorBands$Companion() {
    StandardErrorBands$Companion_instance = this;
    this.LIN_REG_PARAMETER_0 = 'linRegLength';
    this.SM_LENGTH_PARAMETER_0 = 'smLength';
    this.NUM_DEV_UP_PARAMETER_0 = 'numDevUp';
    this.NUM_DEV_DOWN_PARAMETER_0 = 'numDevDown';
  }
  StandardErrorBands$Companion.prototype.constructMainFunction_0 = function (data, priceField, smLength, linRegLength) {
    var lrc = new LinearRegressionCurveFunction(new PriceSourceFunction(data, priceField), linRegLength);
    return new MovingAverageSimple(lrc, smLength);
  };
  StandardErrorBands$Companion.prototype.constructBandFunction_0 = function (data, priceField, smLength, linRegLength, numDev) {
    var mainFunction = this.constructMainFunction_0(data, priceField, smLength, linRegLength);
    var see = new MovingAverageSimple(new StandardErrorOfEstimationFunction(new PriceSourceFunction(data, priceField), linRegLength), smLength);
    return new ArithmeticFunction(new ArithmeticFunction(see, new ConstantFunction(numDev), ArithmeticOperation$MULT_getInstance()), mainFunction, ArithmeticOperation$PLUS_getInstance());
  };
  StandardErrorBands$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var StandardErrorBands$Companion_instance = null;
  function StandardErrorBands$Companion_getInstance() {
    if (StandardErrorBands$Companion_instance === null) {
      new StandardErrorBands$Companion();
    }
    return StandardErrorBands$Companion_instance;
  }
  StandardErrorBands.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StandardErrorBands',
    interfaces: [StudyBuilder]
  };
  function StdDevVolatility() {
    StudyBuilder.call(this);
  }
  StdDevVolatility.prototype.validateParameters_x7u0o8$ = function (params) {
    StudyBuilder.prototype.validateLength_x7u0o8$.call(this, params);
    StudyBuilder.prototype.validatePriceField_x7u0o8$.call(this, params);
  };
  StdDevVolatility.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    var tmp$, tmp$_0;
    var length = typeof (tmp$ = params.get_11rb$(StudyBuilder$Companion_getInstance().LENGTH_PARAMETER)) === 'number' ? tmp$ : throwCCE();
    var priceField = Kotlin.isType(tmp$_0 = params.get_11rb$(StudyBuilder$Companion_getInstance().PRICE_PARAMETER), PriceFieldEnum) ? tmp$_0 : throwCCE();
    var priceFunction = new PriceSourceFunction(data, priceField);
    var lnDivPrevious = new LnDivPrevFunction(priceFunction);
    var sigma = new StandardDeviationFunction(lnDivPrevious, length);
    return listOf_0(sigma);
  };
  StdDevVolatility.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StdDevVolatility',
    interfaces: [StudyBuilder]
  };
  function StudyBuilderFactory(name, ordinal, id, factory) {
    Enum.call(this);
    this.id = id;
    this.factory_520jjk$_0 = factory;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function StudyBuilderFactory_initFields() {
    StudyBuilderFactory_initFields = function () {
    };
    StudyBuilderFactory$WILLIAMS_FRACTAL_instance = new StudyBuilderFactory('WILLIAMS_FRACTAL', 0, 'WilliamsFractal', new StudyBuilderFactory$StudyBuilderFactory$WILLIAMS_FRACTAL_init$ObjectLiteral());
    StudyBuilderFactory$PERCENTAGE_PRICE_OSCILLATOR_instance = new StudyBuilderFactory('PERCENTAGE_PRICE_OSCILLATOR', 1, 'PercentagePriceOscillator', new StudyBuilderFactory$StudyBuilderFactory$PERCENTAGE_PRICE_OSCILLATOR_init$ObjectLiteral());
    StudyBuilderFactory$DYNAMIC_MOMENTUM_INDEX_instance = new StudyBuilderFactory('DYNAMIC_MOMENTUM_INDEX', 2, 'DynamicMomentumIndex', new StudyBuilderFactory$StudyBuilderFactory$DYNAMIC_MOMENTUM_INDEX_init$ObjectLiteral());
    StudyBuilderFactory$WILLIAMS_AD_instance = new StudyBuilderFactory('WILLIAMS_AD', 3, 'WilliamsAD', new StudyBuilderFactory$StudyBuilderFactory$WILLIAMS_AD_init$ObjectLiteral());
    StudyBuilderFactory$PRICE_OSCILLATOR_instance = new StudyBuilderFactory('PRICE_OSCILLATOR', 4, 'PriceOscillator', new StudyBuilderFactory$StudyBuilderFactory$PRICE_OSCILLATOR_init$ObjectLiteral());
    StudyBuilderFactory$PERCENT_CHANGE_instance = new StudyBuilderFactory('PERCENT_CHANGE', 5, 'PercentChange', new StudyBuilderFactory$StudyBuilderFactory$PERCENT_CHANGE_init$ObjectLiteral());
    StudyBuilderFactory$LINEAR_REGRESSION_SLOPE_instance = new StudyBuilderFactory('LINEAR_REGRESSION_SLOPE', 6, 'LinearRegressionSlope', new StudyBuilderFactory$StudyBuilderFactory$LINEAR_REGRESSION_SLOPE_init$ObjectLiteral());
    StudyBuilderFactory$LINEAR_REGRESSION_CHANNEL_instance = new StudyBuilderFactory('LINEAR_REGRESSION_CHANNEL', 7, 'LinearRegressionChannel', new StudyBuilderFactory$StudyBuilderFactory$LINEAR_REGRESSION_CHANNEL_init$ObjectLiteral());
    StudyBuilderFactory$COMMODITY_SELECTION_instance = new StudyBuilderFactory('COMMODITY_SELECTION', 8, 'CommoditySelection', new StudyBuilderFactory$StudyBuilderFactory$COMMODITY_SELECTION_init$ObjectLiteral());
    StudyBuilderFactory$LINEAR_REGRESSION_instance = new StudyBuilderFactory('LINEAR_REGRESSION', 9, 'LinearRegression', new StudyBuilderFactory$StudyBuilderFactory$LINEAR_REGRESSION_init$ObjectLiteral());
    StudyBuilderFactory$INERTIA_instance = new StudyBuilderFactory('INERTIA', 10, 'Inertia', new StudyBuilderFactory$StudyBuilderFactory$INERTIA_init$ObjectLiteral());
    StudyBuilderFactory$KRI_instance = new StudyBuilderFactory('KRI', 11, 'KRI', new StudyBuilderFactory$StudyBuilderFactory$KRI_init$ObjectLiteral());
    StudyBuilderFactory$RANK_CORRELATION_INDEX_instance = new StudyBuilderFactory('RANK_CORRELATION_INDEX', 12, 'RankCorrelationIndex', new StudyBuilderFactory$StudyBuilderFactory$RANK_CORRELATION_INDEX_init$ObjectLiteral());
    StudyBuilderFactory$SWING_ACCUMULATION_instance = new StudyBuilderFactory('SWING_ACCUMULATION', 13, 'SwingAccumulation', new StudyBuilderFactory$StudyBuilderFactory$SWING_ACCUMULATION_init$ObjectLiteral());
    StudyBuilderFactory$AROON_OSCILLATOR_instance = new StudyBuilderFactory('AROON_OSCILLATOR', 14, 'AroonOscillator', new StudyBuilderFactory$StudyBuilderFactory$AROON_OSCILLATOR_init$ObjectLiteral());
    StudyBuilderFactory$AROON_instance = new StudyBuilderFactory('AROON', 15, 'Aroon', new StudyBuilderFactory$StudyBuilderFactory$AROON_init$ObjectLiteral());
    StudyBuilderFactory$SWING_INDEX_instance = new StudyBuilderFactory('SWING_INDEX', 16, 'SwingIndex', new StudyBuilderFactory$StudyBuilderFactory$SWING_INDEX_init$ObjectLiteral());
    StudyBuilderFactory$STARCBANDS_instance = new StudyBuilderFactory('STARCBANDS', 17, 'STARCBands', new StudyBuilderFactory$StudyBuilderFactory$STARCBANDS_init$ObjectLiteral());
    StudyBuilderFactory$FORECAST_OSCILLATOR_instance = new StudyBuilderFactory('FORECAST_OSCILLATOR', 18, 'ForecastOscillator', new StudyBuilderFactory$StudyBuilderFactory$FORECAST_OSCILLATOR_init$ObjectLiteral());
    StudyBuilderFactory$KELTNER_CHANNELS_instance = new StudyBuilderFactory('KELTNER_CHANNELS', 19, 'KeltnerChannels', new StudyBuilderFactory$StudyBuilderFactory$KELTNER_CHANNELS_init$ObjectLiteral());
    StudyBuilderFactory$TEMA_instance = new StudyBuilderFactory('TEMA', 20, 'TEMA', new StudyBuilderFactory$StudyBuilderFactory$TEMA_init$ObjectLiteral());
    StudyBuilderFactory$TYPICAL_PRICE_instance = new StudyBuilderFactory('TYPICAL_PRICE', 21, 'TypicalPrice', new StudyBuilderFactory$StudyBuilderFactory$TYPICAL_PRICE_init$ObjectLiteral());
    StudyBuilderFactory$DEMA_instance = new StudyBuilderFactory('DEMA', 22, 'DEMA', new StudyBuilderFactory$StudyBuilderFactory$DEMA_init$ObjectLiteral());
    StudyBuilderFactory$MEDIAN_PRICE_instance = new StudyBuilderFactory('MEDIAN_PRICE', 23, 'MedianPrice', new StudyBuilderFactory$StudyBuilderFactory$MEDIAN_PRICE_init$ObjectLiteral());
    StudyBuilderFactory$FULL_STOCHASTIC_instance = new StudyBuilderFactory('FULL_STOCHASTIC', 24, 'FullStochastic', new StudyBuilderFactory$StudyBuilderFactory$FULL_STOCHASTIC_init$ObjectLiteral());
    StudyBuilderFactory$STANDARD_ERROR_BANDS_instance = new StudyBuilderFactory('STANDARD_ERROR_BANDS', 25, 'StandardErrorBands', new StudyBuilderFactory$StudyBuilderFactory$STANDARD_ERROR_BANDS_init$ObjectLiteral());
    StudyBuilderFactory$PERCENT_OF_RESISTANCE_instance = new StudyBuilderFactory('PERCENT_OF_RESISTANCE', 26, 'PercentOfResistance', new StudyBuilderFactory$StudyBuilderFactory$PERCENT_OF_RESISTANCE_init$ObjectLiteral());
    StudyBuilderFactory$CENTER_OF_GRAVITY_OSCILLATOR_instance = new StudyBuilderFactory('CENTER_OF_GRAVITY_OSCILLATOR', 27, 'CenterOfGravityOscillator', new StudyBuilderFactory$StudyBuilderFactory$CENTER_OF_GRAVITY_OSCILLATOR_init$ObjectLiteral());
    StudyBuilderFactory$ACCELERATION_DECELERATION_instance = new StudyBuilderFactory('ACCELERATION_DECELERATION', 28, 'AccelerationDeceleration', new StudyBuilderFactory$StudyBuilderFactory$ACCELERATION_DECELERATION_init$ObjectLiteral());
    StudyBuilderFactory$ACCUMULATION_DISTRIBUTION_instance = new StudyBuilderFactory('ACCUMULATION_DISTRIBUTION', 29, 'AccumulationDistribution', new StudyBuilderFactory$StudyBuilderFactory$ACCUMULATION_DISTRIBUTION_init$ObjectLiteral());
    StudyBuilderFactory$ADX_instance = new StudyBuilderFactory('ADX', 30, 'ADX', new StudyBuilderFactory$StudyBuilderFactory$ADX_init$ObjectLiteral());
    StudyBuilderFactory$ADXR_instance = new StudyBuilderFactory('ADXR', 31, 'ADXR', new StudyBuilderFactory$StudyBuilderFactory$ADXR_init$ObjectLiteral());
    StudyBuilderFactory$AVERAGE_TRUE_RANGE_instance = new StudyBuilderFactory('AVERAGE_TRUE_RANGE', 32, 'AverageTrueRange', new StudyBuilderFactory$StudyBuilderFactory$AVERAGE_TRUE_RANGE_init$ObjectLiteral());
    StudyBuilderFactory$AWESOME_OSCILLATOR_instance = new StudyBuilderFactory('AWESOME_OSCILLATOR', 33, 'AwesomeOscillator', new StudyBuilderFactory$StudyBuilderFactory$AWESOME_OSCILLATOR_init$ObjectLiteral());
    StudyBuilderFactory$BOLLINGER_BANDS_instance = new StudyBuilderFactory('BOLLINGER_BANDS', 34, 'BollingerBands', new StudyBuilderFactory$StudyBuilderFactory$BOLLINGER_BANDS_init$ObjectLiteral());
    StudyBuilderFactory$CCI_instance = new StudyBuilderFactory('CCI', 35, 'CCI', new StudyBuilderFactory$StudyBuilderFactory$CCI_init$ObjectLiteral());
    StudyBuilderFactory$CHAIKIN_OSCILLATOR_instance = new StudyBuilderFactory('CHAIKIN_OSCILLATOR', 36, 'ChaikinOscillator', new StudyBuilderFactory$StudyBuilderFactory$CHAIKIN_OSCILLATOR_init$ObjectLiteral());
    StudyBuilderFactory$CHAIKIN_VOLATILITY_instance = new StudyBuilderFactory('CHAIKIN_VOLATILITY', 37, 'ChaikinVolatility', new StudyBuilderFactory$StudyBuilderFactory$CHAIKIN_VOLATILITY_init$ObjectLiteral());
    StudyBuilderFactory$CHANDE_MOMENTUM_OSCILLATOR_instance = new StudyBuilderFactory('CHANDE_MOMENTUM_OSCILLATOR', 38, 'ChandeMomentumOscillator', new StudyBuilderFactory$StudyBuilderFactory$CHANDE_MOMENTUM_OSCILLATOR_init$ObjectLiteral());
    StudyBuilderFactory$DE_MARKER_instance = new StudyBuilderFactory('DE_MARKER', 39, 'DeMarker', new StudyBuilderFactory$StudyBuilderFactory$DE_MARKER_init$ObjectLiteral());
    StudyBuilderFactory$DETRENDED_PRICE_OSC_instance = new StudyBuilderFactory('DETRENDED_PRICE_OSC', 40, 'DetrendedPriceOsc', new StudyBuilderFactory$StudyBuilderFactory$DETRENDED_PRICE_OSC_init$ObjectLiteral());
    StudyBuilderFactory$DMI_instance = new StudyBuilderFactory('DMI', 41, 'DMI', new StudyBuilderFactory$StudyBuilderFactory$DMI_init$ObjectLiteral());
    StudyBuilderFactory$ELDER_instance = new StudyBuilderFactory('ELDER', 42, 'Elder', new StudyBuilderFactory$StudyBuilderFactory$ELDER_init$ObjectLiteral());
    StudyBuilderFactory$EMA_instance = new StudyBuilderFactory('EMA', 43, 'EMA', new StudyBuilderFactory$StudyBuilderFactory$EMA_init$ObjectLiteral());
    StudyBuilderFactory$ENVELOPE_EMA_instance = new StudyBuilderFactory('ENVELOPE_EMA', 44, 'EnvelopeEMA', new StudyBuilderFactory$StudyBuilderFactory$ENVELOPE_EMA_init$ObjectLiteral());
    StudyBuilderFactory$ENVELOPE_SMA_instance = new StudyBuilderFactory('ENVELOPE_SMA', 45, 'EnvelopeSMA', new StudyBuilderFactory$StudyBuilderFactory$ENVELOPE_SMA_init$ObjectLiteral());
    StudyBuilderFactory$ENVELOPE_SMMA_instance = new StudyBuilderFactory('ENVELOPE_SMMA', 46, 'EnvelopeSMMA', new StudyBuilderFactory$StudyBuilderFactory$ENVELOPE_SMMA_init$ObjectLiteral());
    StudyBuilderFactory$ENVELOPE_WMA_instance = new StudyBuilderFactory('ENVELOPE_WMA', 47, 'EnvelopeWMA', new StudyBuilderFactory$StudyBuilderFactory$ENVELOPE_WMA_init$ObjectLiteral());
    StudyBuilderFactory$FAST_STOCHASTIC_instance = new StudyBuilderFactory('FAST_STOCHASTIC', 48, 'FastStochastic', new StudyBuilderFactory$StudyBuilderFactory$FAST_STOCHASTIC_init$ObjectLiteral());
    StudyBuilderFactory$FORCE_INDEX_instance = new StudyBuilderFactory('FORCE_INDEX', 49, 'ForceIndex', new StudyBuilderFactory$StudyBuilderFactory$FORCE_INDEX_init$ObjectLiteral());
    StudyBuilderFactory$GATOR_OSCILLATOR_instance = new StudyBuilderFactory('GATOR_OSCILLATOR', 50, 'GatorOscillator', new StudyBuilderFactory$StudyBuilderFactory$GATOR_OSCILLATOR_init$ObjectLiteral());
    StudyBuilderFactory$HLVOLATILITY_instance = new StudyBuilderFactory('HLVOLATILITY', 51, 'HLVolatility', new StudyBuilderFactory$StudyBuilderFactory$HLVOLATILITY_init$ObjectLiteral());
    StudyBuilderFactory$ICHIMOKU_instance = new StudyBuilderFactory('ICHIMOKU', 52, 'Ichimoku', new StudyBuilderFactory$StudyBuilderFactory$ICHIMOKU_init$ObjectLiteral());
    StudyBuilderFactory$INTRADAY_MOMENTUM_INDEX_instance = new StudyBuilderFactory('INTRADAY_MOMENTUM_INDEX', 53, 'IntradayMomentumIndex', new StudyBuilderFactory$StudyBuilderFactory$INTRADAY_MOMENTUM_INDEX_init$ObjectLiteral());
    StudyBuilderFactory$MACD_instance = new StudyBuilderFactory('MACD', 54, 'MACD', new StudyBuilderFactory$StudyBuilderFactory$MACD_init$ObjectLiteral());
    StudyBuilderFactory$MARKET_FACILITATION_INDEX_instance = new StudyBuilderFactory('MARKET_FACILITATION_INDEX', 55, 'MarketFacilitationIndex', new StudyBuilderFactory$StudyBuilderFactory$MARKET_FACILITATION_INDEX_init$ObjectLiteral());
    StudyBuilderFactory$MASS_INDEX_instance = new StudyBuilderFactory('MASS_INDEX', 56, 'MassIndex', new StudyBuilderFactory$StudyBuilderFactory$MASS_INDEX_init$ObjectLiteral());
    StudyBuilderFactory$MOMENTUM_instance = new StudyBuilderFactory('MOMENTUM', 57, 'Momentum', new StudyBuilderFactory$StudyBuilderFactory$MOMENTUM_init$ObjectLiteral());
    StudyBuilderFactory$MONEY_FLOW_INDEX_instance = new StudyBuilderFactory('MONEY_FLOW_INDEX', 58, 'MoneyFlowIndex', new StudyBuilderFactory$StudyBuilderFactory$MONEY_FLOW_INDEX_init$ObjectLiteral());
    StudyBuilderFactory$NEGATIVE_VOLUME_INDEX_instance = new StudyBuilderFactory('NEGATIVE_VOLUME_INDEX', 59, 'NegativeVolumeIndex', new StudyBuilderFactory$StudyBuilderFactory$NEGATIVE_VOLUME_INDEX_init$ObjectLiteral());
    StudyBuilderFactory$ON_BALANCE_VOLUME_instance = new StudyBuilderFactory('ON_BALANCE_VOLUME', 60, 'OnBalanceVolume', new StudyBuilderFactory$StudyBuilderFactory$ON_BALANCE_VOLUME_init$ObjectLiteral());
    StudyBuilderFactory$DAY_OPEN_CLOSE_instance = new StudyBuilderFactory('DAY_OPEN_CLOSE', 61, 'DayOpenClose', new StudyBuilderFactory$StudyBuilderFactory$DAY_OPEN_CLOSE_init$ObjectLiteral());
    StudyBuilderFactory$OSCILLATOR_instance = new StudyBuilderFactory('OSCILLATOR', 62, 'Oscillator', new StudyBuilderFactory$StudyBuilderFactory$OSCILLATOR_init$ObjectLiteral());
    StudyBuilderFactory$PARABOLIC_SAR_instance = new StudyBuilderFactory('PARABOLIC_SAR', 63, 'ParabolicSAR', new StudyBuilderFactory$StudyBuilderFactory$PARABOLIC_SAR_init$ObjectLiteral());
    StudyBuilderFactory$PIVOT_POINTS_instance = new StudyBuilderFactory('PIVOT_POINTS', 64, 'PivotPoints', new StudyBuilderFactory$StudyBuilderFactory$PIVOT_POINTS_init$ObjectLiteral());
    StudyBuilderFactory$PRICE_CHANNEL_instance = new StudyBuilderFactory('PRICE_CHANNEL', 65, 'PriceChannel', new StudyBuilderFactory$StudyBuilderFactory$PRICE_CHANNEL_init$ObjectLiteral());
    StudyBuilderFactory$PRICE_VOLUME_TREND_instance = new StudyBuilderFactory('PRICE_VOLUME_TREND', 66, 'PriceVolumeTrend', new StudyBuilderFactory$StudyBuilderFactory$PRICE_VOLUME_TREND_init$ObjectLiteral());
    StudyBuilderFactory$RELATIVE_STRENGTH_INDEX_instance = new StudyBuilderFactory('RELATIVE_STRENGTH_INDEX', 67, 'RelativeStrengthIndex', new StudyBuilderFactory$StudyBuilderFactory$RELATIVE_STRENGTH_INDEX_init$ObjectLiteral());
    StudyBuilderFactory$RELATIVE_VIGOR_INDEX_instance = new StudyBuilderFactory('RELATIVE_VIGOR_INDEX', 68, 'RelativeVigorIndex', new StudyBuilderFactory$StudyBuilderFactory$RELATIVE_VIGOR_INDEX_init$ObjectLiteral());
    StudyBuilderFactory$RELATIVE_VIGOR_INDEX_SMA_instance = new StudyBuilderFactory('RELATIVE_VIGOR_INDEX_SMA', 69, 'RelativeVigorIndexSMA', new StudyBuilderFactory$StudyBuilderFactory$RELATIVE_VIGOR_INDEX_SMA_init$ObjectLiteral());
    StudyBuilderFactory$RELATIVE_VOLATILITY_INDEX_instance = new StudyBuilderFactory('RELATIVE_VOLATILITY_INDEX', 70, 'RelativeVolatilityIndex', new StudyBuilderFactory$StudyBuilderFactory$RELATIVE_VOLATILITY_INDEX_init$ObjectLiteral());
    StudyBuilderFactory$ROC_instance = new StudyBuilderFactory('ROC', 71, 'ROC', new StudyBuilderFactory$StudyBuilderFactory$ROC_init$ObjectLiteral());
    StudyBuilderFactory$SLOW_STOCHASTIC_instance = new StudyBuilderFactory('SLOW_STOCHASTIC', 72, 'SlowStochastic', new StudyBuilderFactory$StudyBuilderFactory$SLOW_STOCHASTIC_init$ObjectLiteral());
    StudyBuilderFactory$SMA_instance = new StudyBuilderFactory('SMA', 73, 'SMA', new StudyBuilderFactory$StudyBuilderFactory$SMA_init$ObjectLiteral());
    StudyBuilderFactory$SMMA_instance = new StudyBuilderFactory('SMMA', 74, 'SMMA', new StudyBuilderFactory$StudyBuilderFactory$SMMA_init$ObjectLiteral());
    StudyBuilderFactory$SROC_instance = new StudyBuilderFactory('SROC', 75, 'SROC', new StudyBuilderFactory$StudyBuilderFactory$SROC_init$ObjectLiteral());
    StudyBuilderFactory$SCHAFF_TREND_CYCLE_instance = new StudyBuilderFactory('SCHAFF_TREND_CYCLE', 76, 'SchaffTrendCycle', new StudyBuilderFactory$StudyBuilderFactory$SCHAFF_TREND_CYCLE_init$ObjectLiteral());
    StudyBuilderFactory$STANDARD_DEVIATION_CHANNEL_instance = new StudyBuilderFactory('STANDARD_DEVIATION_CHANNEL', 77, 'StandardDeviationChannel', new StudyBuilderFactory$StudyBuilderFactory$STANDARD_DEVIATION_CHANNEL_init$ObjectLiteral());
    StudyBuilderFactory$STANDARD_DEVIATION_instance = new StudyBuilderFactory('STANDARD_DEVIATION', 78, 'StandardDeviation', new StudyBuilderFactory$StudyBuilderFactory$STANDARD_DEVIATION_init$ObjectLiteral());
    StudyBuilderFactory$STD_DEV_VOLATILITY_instance = new StudyBuilderFactory('STD_DEV_VOLATILITY', 79, 'StdDevVolatility', new StudyBuilderFactory$StudyBuilderFactory$STD_DEV_VOLATILITY_init$ObjectLiteral());
    StudyBuilderFactory$TIME_SERIES_FORECAST_instance = new StudyBuilderFactory('TIME_SERIES_FORECAST', 80, 'TimeSeriesForecast', new StudyBuilderFactory$StudyBuilderFactory$TIME_SERIES_FORECAST_init$ObjectLiteral());
    StudyBuilderFactory$TMA_instance = new StudyBuilderFactory('TMA', 81, 'TMA', new StudyBuilderFactory$StudyBuilderFactory$TMA_init$ObjectLiteral());
    StudyBuilderFactory$TRIPLE_EMA_instance = new StudyBuilderFactory('TRIPLE_EMA', 82, 'TripleEMA', new StudyBuilderFactory$StudyBuilderFactory$TRIPLE_EMA_init$ObjectLiteral());
    StudyBuilderFactory$TRUE_STRENGTH_INDEX_instance = new StudyBuilderFactory('TRUE_STRENGTH_INDEX', 83, 'TrueStrengthIndex', new StudyBuilderFactory$StudyBuilderFactory$TRUE_STRENGTH_INDEX_init$ObjectLiteral());
    StudyBuilderFactory$ULTIMATE_OSCILLATOR_instance = new StudyBuilderFactory('ULTIMATE_OSCILLATOR', 84, 'UltimateOscillator', new StudyBuilderFactory$StudyBuilderFactory$ULTIMATE_OSCILLATOR_init$ObjectLiteral());
    StudyBuilderFactory$VERTICAL_HORIZONTAL_FILTER_instance = new StudyBuilderFactory('VERTICAL_HORIZONTAL_FILTER', 85, 'VerticalHorizontalFilter', new StudyBuilderFactory$StudyBuilderFactory$VERTICAL_HORIZONTAL_FILTER_init$ObjectLiteral());
    StudyBuilderFactory$VWAP_instance = new StudyBuilderFactory('VWAP', 86, 'VWAP', new StudyBuilderFactory$StudyBuilderFactory$VWAP_init$ObjectLiteral());
    StudyBuilderFactory$WEIGHTED_CLOSE_instance = new StudyBuilderFactory('WEIGHTED_CLOSE', 87, 'WeightedClose', new StudyBuilderFactory$StudyBuilderFactory$WEIGHTED_CLOSE_init$ObjectLiteral());
    StudyBuilderFactory$WILDERS_SMOOTHING_instance = new StudyBuilderFactory('WILDERS_SMOOTHING', 88, 'WildersSmoothing', new StudyBuilderFactory$StudyBuilderFactory$WILDERS_SMOOTHING_init$ObjectLiteral());
    StudyBuilderFactory$WILLIAMS_ALLIGATOR_instance = new StudyBuilderFactory('WILLIAMS_ALLIGATOR', 89, 'WilliamsAlligator', new StudyBuilderFactory$StudyBuilderFactory$WILLIAMS_ALLIGATOR_init$ObjectLiteral());
    StudyBuilderFactory$WILLIAMS_PERCENT_RANGE_instance = new StudyBuilderFactory('WILLIAMS_PERCENT_RANGE', 90, 'WilliamsPercentRange', new StudyBuilderFactory$StudyBuilderFactory$WILLIAMS_PERCENT_RANGE_init$ObjectLiteral());
    StudyBuilderFactory$WMA_instance = new StudyBuilderFactory('WMA', 91, 'WMA', new StudyBuilderFactory$StudyBuilderFactory$WMA_init$ObjectLiteral());
    StudyBuilderFactory$ZIG_ZAG_instance = new StudyBuilderFactory('ZIG_ZAG', 92, 'ZigZag', new StudyBuilderFactory$StudyBuilderFactory$ZIG_ZAG_init$ObjectLiteral());
    StudyBuilderFactory$COMPARATIVE_instance = new StudyBuilderFactory('COMPARATIVE', 93, 'COMPARATIVE', new StudyBuilderFactory$StudyBuilderFactory$COMPARATIVE_init$ObjectLiteral());
    StudyBuilderFactory$IMPLIED_VOLATILITY_instance = new StudyBuilderFactory('IMPLIED_VOLATILITY', 94, 'ImpliedVolatility', new StudyBuilderFactory$StudyBuilderFactory$IMPLIED_VOLATILITY_init$ObjectLiteral());
    StudyBuilderFactory$IMPLIED_VOLATILITY_GAUGE_instance = new StudyBuilderFactory('IMPLIED_VOLATILITY_GAUGE', 95, 'ImpliedVolatilityGauge', new StudyBuilderFactory$StudyBuilderFactory$IMPLIED_VOLATILITY_GAUGE_init$ObjectLiteral());
    StudyBuilderFactory$TD_SEQUENTIAL_instance = new StudyBuilderFactory('TD_SEQUENTIAL', 96, 'TDSequential', new StudyBuilderFactory$StudyBuilderFactory$TD_SEQUENTIAL_init$ObjectLiteral());
    StudyBuilderFactory$GTRAP_instance = new StudyBuilderFactory('GTRAP', 97, 'GTRAP', new StudyBuilderFactory$StudyBuilderFactory$GTRAP_init$ObjectLiteral());
    StudyBuilderFactory$KAUFMAN_MOVING_AVERAGE_instance = new StudyBuilderFactory('KAUFMAN_MOVING_AVERAGE', 98, 'KAMA', new StudyBuilderFactory$StudyBuilderFactory$KAUFMAN_MOVING_AVERAGE_init$ObjectLiteral());
    StudyBuilderFactory$WAVE_TREND_WITH_CROSSES_instance = new StudyBuilderFactory('WAVE_TREND_WITH_CROSSES', 99, 'WaveTrendWithCrosses', new StudyBuilderFactory$StudyBuilderFactory$WAVE_TREND_WITH_CROSSES_init$ObjectLiteral());
    StudyBuilderFactory$FIBONACCI_BOLLINGER_BANDS_instance = new StudyBuilderFactory('FIBONACCI_BOLLINGER_BANDS', 100, 'FibonacciBollingerBands', new StudyBuilderFactory$StudyBuilderFactory$FIBONACCI_BOLLINGER_BANDS_init$ObjectLiteral());
    StudyBuilderFactory$WAVE_TREND_instance = new StudyBuilderFactory('WAVE_TREND', 101, 'WaveTrend', new StudyBuilderFactory$StudyBuilderFactory$WAVE_TREND_init$ObjectLiteral());
    StudyBuilderFactory$Companion_getInstance();
  }
  function StudyBuilderFactory$StudyBuilderFactory$WILLIAMS_FRACTAL_init$ObjectLiteral() {
  }
  StudyBuilderFactory$StudyBuilderFactory$WILLIAMS_FRACTAL_init$ObjectLiteral.prototype.create = function () {
    return new WilliamsFractal();
  };
  StudyBuilderFactory$StudyBuilderFactory$WILLIAMS_FRACTAL_init$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [StudyBuilderFactory$Factory]
  };
  var StudyBuilderFactory$WILLIAMS_FRACTAL_instance;
  function StudyBuilderFactory$WILLIAMS_FRACTAL_getInstance() {
    StudyBuilderFactory_initFields();
    return StudyBuilderFactory$WILLIAMS_FRACTAL_instance;
  }
  function StudyBuilderFactory$StudyBuilderFactory$PERCENTAGE_PRICE_OSCILLATOR_init$ObjectLiteral() {
  }
  StudyBuilderFactory$StudyBuilderFactory$PERCENTAGE_PRICE_OSCILLATOR_init$ObjectLiteral.prototype.create = function () {
    return new PercentagePriceOscillator();
  };
  StudyBuilderFactory$StudyBuilderFactory$PERCENTAGE_PRICE_OSCILLATOR_init$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [StudyBuilderFactory$Factory]
  };
  var StudyBuilderFactory$PERCENTAGE_PRICE_OSCILLATOR_instance;
  function StudyBuilderFactory$PERCENTAGE_PRICE_OSCILLATOR_getInstance() {
    StudyBuilderFactory_initFields();
    return StudyBuilderFactory$PERCENTAGE_PRICE_OSCILLATOR_instance;
  }
  function StudyBuilderFactory$StudyBuilderFactory$DYNAMIC_MOMENTUM_INDEX_init$ObjectLiteral() {
  }
  StudyBuilderFactory$StudyBuilderFactory$DYNAMIC_MOMENTUM_INDEX_init$ObjectLiteral.prototype.create = function () {
    return new DynamicMomentumIndex();
  };
  StudyBuilderFactory$StudyBuilderFactory$DYNAMIC_MOMENTUM_INDEX_init$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [StudyBuilderFactory$Factory]
  };
  var StudyBuilderFactory$DYNAMIC_MOMENTUM_INDEX_instance;
  function StudyBuilderFactory$DYNAMIC_MOMENTUM_INDEX_getInstance() {
    StudyBuilderFactory_initFields();
    return StudyBuilderFactory$DYNAMIC_MOMENTUM_INDEX_instance;
  }
  function StudyBuilderFactory$StudyBuilderFactory$WILLIAMS_AD_init$ObjectLiteral() {
  }
  StudyBuilderFactory$StudyBuilderFactory$WILLIAMS_AD_init$ObjectLiteral.prototype.create = function () {
    return new WilliamsAD();
  };
  StudyBuilderFactory$StudyBuilderFactory$WILLIAMS_AD_init$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [StudyBuilderFactory$Factory]
  };
  var StudyBuilderFactory$WILLIAMS_AD_instance;
  function StudyBuilderFactory$WILLIAMS_AD_getInstance() {
    StudyBuilderFactory_initFields();
    return StudyBuilderFactory$WILLIAMS_AD_instance;
  }
  function StudyBuilderFactory$StudyBuilderFactory$PRICE_OSCILLATOR_init$ObjectLiteral() {
  }
  StudyBuilderFactory$StudyBuilderFactory$PRICE_OSCILLATOR_init$ObjectLiteral.prototype.create = function () {
    return new PriceOscillator();
  };
  StudyBuilderFactory$StudyBuilderFactory$PRICE_OSCILLATOR_init$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [StudyBuilderFactory$Factory]
  };
  var StudyBuilderFactory$PRICE_OSCILLATOR_instance;
  function StudyBuilderFactory$PRICE_OSCILLATOR_getInstance() {
    StudyBuilderFactory_initFields();
    return StudyBuilderFactory$PRICE_OSCILLATOR_instance;
  }
  function StudyBuilderFactory$StudyBuilderFactory$PERCENT_CHANGE_init$ObjectLiteral() {
  }
  StudyBuilderFactory$StudyBuilderFactory$PERCENT_CHANGE_init$ObjectLiteral.prototype.create = function () {
    return new PercentChange();
  };
  StudyBuilderFactory$StudyBuilderFactory$PERCENT_CHANGE_init$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [StudyBuilderFactory$Factory]
  };
  var StudyBuilderFactory$PERCENT_CHANGE_instance;
  function StudyBuilderFactory$PERCENT_CHANGE_getInstance() {
    StudyBuilderFactory_initFields();
    return StudyBuilderFactory$PERCENT_CHANGE_instance;
  }
  function StudyBuilderFactory$StudyBuilderFactory$LINEAR_REGRESSION_SLOPE_init$ObjectLiteral() {
  }
  StudyBuilderFactory$StudyBuilderFactory$LINEAR_REGRESSION_SLOPE_init$ObjectLiteral.prototype.create = function () {
    return new LinearRegressionSlope();
  };
  StudyBuilderFactory$StudyBuilderFactory$LINEAR_REGRESSION_SLOPE_init$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [StudyBuilderFactory$Factory]
  };
  var StudyBuilderFactory$LINEAR_REGRESSION_SLOPE_instance;
  function StudyBuilderFactory$LINEAR_REGRESSION_SLOPE_getInstance() {
    StudyBuilderFactory_initFields();
    return StudyBuilderFactory$LINEAR_REGRESSION_SLOPE_instance;
  }
  function StudyBuilderFactory$StudyBuilderFactory$LINEAR_REGRESSION_CHANNEL_init$ObjectLiteral() {
  }
  StudyBuilderFactory$StudyBuilderFactory$LINEAR_REGRESSION_CHANNEL_init$ObjectLiteral.prototype.create = function () {
    return new LinearRegressionChannel();
  };
  StudyBuilderFactory$StudyBuilderFactory$LINEAR_REGRESSION_CHANNEL_init$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [StudyBuilderFactory$Factory]
  };
  var StudyBuilderFactory$LINEAR_REGRESSION_CHANNEL_instance;
  function StudyBuilderFactory$LINEAR_REGRESSION_CHANNEL_getInstance() {
    StudyBuilderFactory_initFields();
    return StudyBuilderFactory$LINEAR_REGRESSION_CHANNEL_instance;
  }
  function StudyBuilderFactory$StudyBuilderFactory$COMMODITY_SELECTION_init$ObjectLiteral() {
  }
  StudyBuilderFactory$StudyBuilderFactory$COMMODITY_SELECTION_init$ObjectLiteral.prototype.create = function () {
    return new CommoditySelection();
  };
  StudyBuilderFactory$StudyBuilderFactory$COMMODITY_SELECTION_init$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [StudyBuilderFactory$Factory]
  };
  var StudyBuilderFactory$COMMODITY_SELECTION_instance;
  function StudyBuilderFactory$COMMODITY_SELECTION_getInstance() {
    StudyBuilderFactory_initFields();
    return StudyBuilderFactory$COMMODITY_SELECTION_instance;
  }
  function StudyBuilderFactory$StudyBuilderFactory$LINEAR_REGRESSION_init$ObjectLiteral() {
  }
  StudyBuilderFactory$StudyBuilderFactory$LINEAR_REGRESSION_init$ObjectLiteral.prototype.create = function () {
    return new LinearRegression();
  };
  StudyBuilderFactory$StudyBuilderFactory$LINEAR_REGRESSION_init$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [StudyBuilderFactory$Factory]
  };
  var StudyBuilderFactory$LINEAR_REGRESSION_instance;
  function StudyBuilderFactory$LINEAR_REGRESSION_getInstance() {
    StudyBuilderFactory_initFields();
    return StudyBuilderFactory$LINEAR_REGRESSION_instance;
  }
  function StudyBuilderFactory$StudyBuilderFactory$INERTIA_init$ObjectLiteral() {
  }
  StudyBuilderFactory$StudyBuilderFactory$INERTIA_init$ObjectLiteral.prototype.create = function () {
    return new Inertia();
  };
  StudyBuilderFactory$StudyBuilderFactory$INERTIA_init$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [StudyBuilderFactory$Factory]
  };
  var StudyBuilderFactory$INERTIA_instance;
  function StudyBuilderFactory$INERTIA_getInstance() {
    StudyBuilderFactory_initFields();
    return StudyBuilderFactory$INERTIA_instance;
  }
  function StudyBuilderFactory$StudyBuilderFactory$KRI_init$ObjectLiteral() {
  }
  StudyBuilderFactory$StudyBuilderFactory$KRI_init$ObjectLiteral.prototype.create = function () {
    return new KRI();
  };
  StudyBuilderFactory$StudyBuilderFactory$KRI_init$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [StudyBuilderFactory$Factory]
  };
  var StudyBuilderFactory$KRI_instance;
  function StudyBuilderFactory$KRI_getInstance() {
    StudyBuilderFactory_initFields();
    return StudyBuilderFactory$KRI_instance;
  }
  function StudyBuilderFactory$StudyBuilderFactory$RANK_CORRELATION_INDEX_init$ObjectLiteral() {
  }
  StudyBuilderFactory$StudyBuilderFactory$RANK_CORRELATION_INDEX_init$ObjectLiteral.prototype.create = function () {
    return new RankCorrelationIndex();
  };
  StudyBuilderFactory$StudyBuilderFactory$RANK_CORRELATION_INDEX_init$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [StudyBuilderFactory$Factory]
  };
  var StudyBuilderFactory$RANK_CORRELATION_INDEX_instance;
  function StudyBuilderFactory$RANK_CORRELATION_INDEX_getInstance() {
    StudyBuilderFactory_initFields();
    return StudyBuilderFactory$RANK_CORRELATION_INDEX_instance;
  }
  function StudyBuilderFactory$StudyBuilderFactory$SWING_ACCUMULATION_init$ObjectLiteral() {
  }
  StudyBuilderFactory$StudyBuilderFactory$SWING_ACCUMULATION_init$ObjectLiteral.prototype.create = function () {
    return new SwingAccumulation();
  };
  StudyBuilderFactory$StudyBuilderFactory$SWING_ACCUMULATION_init$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [StudyBuilderFactory$Factory]
  };
  var StudyBuilderFactory$SWING_ACCUMULATION_instance;
  function StudyBuilderFactory$SWING_ACCUMULATION_getInstance() {
    StudyBuilderFactory_initFields();
    return StudyBuilderFactory$SWING_ACCUMULATION_instance;
  }
  function StudyBuilderFactory$StudyBuilderFactory$AROON_OSCILLATOR_init$ObjectLiteral() {
  }
  StudyBuilderFactory$StudyBuilderFactory$AROON_OSCILLATOR_init$ObjectLiteral.prototype.create = function () {
    return new AroonOscillator();
  };
  StudyBuilderFactory$StudyBuilderFactory$AROON_OSCILLATOR_init$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [StudyBuilderFactory$Factory]
  };
  var StudyBuilderFactory$AROON_OSCILLATOR_instance;
  function StudyBuilderFactory$AROON_OSCILLATOR_getInstance() {
    StudyBuilderFactory_initFields();
    return StudyBuilderFactory$AROON_OSCILLATOR_instance;
  }
  function StudyBuilderFactory$StudyBuilderFactory$AROON_init$ObjectLiteral() {
  }
  StudyBuilderFactory$StudyBuilderFactory$AROON_init$ObjectLiteral.prototype.create = function () {
    return new Aroon();
  };
  StudyBuilderFactory$StudyBuilderFactory$AROON_init$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [StudyBuilderFactory$Factory]
  };
  var StudyBuilderFactory$AROON_instance;
  function StudyBuilderFactory$AROON_getInstance() {
    StudyBuilderFactory_initFields();
    return StudyBuilderFactory$AROON_instance;
  }
  function StudyBuilderFactory$StudyBuilderFactory$SWING_INDEX_init$ObjectLiteral() {
  }
  StudyBuilderFactory$StudyBuilderFactory$SWING_INDEX_init$ObjectLiteral.prototype.create = function () {
    return new SwingIndex();
  };
  StudyBuilderFactory$StudyBuilderFactory$SWING_INDEX_init$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [StudyBuilderFactory$Factory]
  };
  var StudyBuilderFactory$SWING_INDEX_instance;
  function StudyBuilderFactory$SWING_INDEX_getInstance() {
    StudyBuilderFactory_initFields();
    return StudyBuilderFactory$SWING_INDEX_instance;
  }
  function StudyBuilderFactory$StudyBuilderFactory$STARCBANDS_init$ObjectLiteral() {
  }
  StudyBuilderFactory$StudyBuilderFactory$STARCBANDS_init$ObjectLiteral.prototype.create = function () {
    return new STARCBands();
  };
  StudyBuilderFactory$StudyBuilderFactory$STARCBANDS_init$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [StudyBuilderFactory$Factory]
  };
  var StudyBuilderFactory$STARCBANDS_instance;
  function StudyBuilderFactory$STARCBANDS_getInstance() {
    StudyBuilderFactory_initFields();
    return StudyBuilderFactory$STARCBANDS_instance;
  }
  function StudyBuilderFactory$StudyBuilderFactory$FORECAST_OSCILLATOR_init$ObjectLiteral() {
  }
  StudyBuilderFactory$StudyBuilderFactory$FORECAST_OSCILLATOR_init$ObjectLiteral.prototype.create = function () {
    return new ForecastOscillator();
  };
  StudyBuilderFactory$StudyBuilderFactory$FORECAST_OSCILLATOR_init$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [StudyBuilderFactory$Factory]
  };
  var StudyBuilderFactory$FORECAST_OSCILLATOR_instance;
  function StudyBuilderFactory$FORECAST_OSCILLATOR_getInstance() {
    StudyBuilderFactory_initFields();
    return StudyBuilderFactory$FORECAST_OSCILLATOR_instance;
  }
  function StudyBuilderFactory$StudyBuilderFactory$KELTNER_CHANNELS_init$ObjectLiteral() {
  }
  StudyBuilderFactory$StudyBuilderFactory$KELTNER_CHANNELS_init$ObjectLiteral.prototype.create = function () {
    return new KeltnerChannels();
  };
  StudyBuilderFactory$StudyBuilderFactory$KELTNER_CHANNELS_init$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [StudyBuilderFactory$Factory]
  };
  var StudyBuilderFactory$KELTNER_CHANNELS_instance;
  function StudyBuilderFactory$KELTNER_CHANNELS_getInstance() {
    StudyBuilderFactory_initFields();
    return StudyBuilderFactory$KELTNER_CHANNELS_instance;
  }
  function StudyBuilderFactory$StudyBuilderFactory$TEMA_init$ObjectLiteral() {
  }
  StudyBuilderFactory$StudyBuilderFactory$TEMA_init$ObjectLiteral.prototype.create = function () {
    return new TEMA();
  };
  StudyBuilderFactory$StudyBuilderFactory$TEMA_init$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [StudyBuilderFactory$Factory]
  };
  var StudyBuilderFactory$TEMA_instance;
  function StudyBuilderFactory$TEMA_getInstance() {
    StudyBuilderFactory_initFields();
    return StudyBuilderFactory$TEMA_instance;
  }
  function StudyBuilderFactory$StudyBuilderFactory$TYPICAL_PRICE_init$ObjectLiteral() {
  }
  StudyBuilderFactory$StudyBuilderFactory$TYPICAL_PRICE_init$ObjectLiteral.prototype.create = function () {
    return new TypicalPrice();
  };
  StudyBuilderFactory$StudyBuilderFactory$TYPICAL_PRICE_init$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [StudyBuilderFactory$Factory]
  };
  var StudyBuilderFactory$TYPICAL_PRICE_instance;
  function StudyBuilderFactory$TYPICAL_PRICE_getInstance() {
    StudyBuilderFactory_initFields();
    return StudyBuilderFactory$TYPICAL_PRICE_instance;
  }
  function StudyBuilderFactory$StudyBuilderFactory$DEMA_init$ObjectLiteral() {
  }
  StudyBuilderFactory$StudyBuilderFactory$DEMA_init$ObjectLiteral.prototype.create = function () {
    return new DEMA();
  };
  StudyBuilderFactory$StudyBuilderFactory$DEMA_init$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [StudyBuilderFactory$Factory]
  };
  var StudyBuilderFactory$DEMA_instance;
  function StudyBuilderFactory$DEMA_getInstance() {
    StudyBuilderFactory_initFields();
    return StudyBuilderFactory$DEMA_instance;
  }
  function StudyBuilderFactory$StudyBuilderFactory$MEDIAN_PRICE_init$ObjectLiteral() {
  }
  StudyBuilderFactory$StudyBuilderFactory$MEDIAN_PRICE_init$ObjectLiteral.prototype.create = function () {
    return new MedianPrice();
  };
  StudyBuilderFactory$StudyBuilderFactory$MEDIAN_PRICE_init$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [StudyBuilderFactory$Factory]
  };
  var StudyBuilderFactory$MEDIAN_PRICE_instance;
  function StudyBuilderFactory$MEDIAN_PRICE_getInstance() {
    StudyBuilderFactory_initFields();
    return StudyBuilderFactory$MEDIAN_PRICE_instance;
  }
  function StudyBuilderFactory$StudyBuilderFactory$FULL_STOCHASTIC_init$ObjectLiteral() {
  }
  StudyBuilderFactory$StudyBuilderFactory$FULL_STOCHASTIC_init$ObjectLiteral.prototype.create = function () {
    return new FullStochastic();
  };
  StudyBuilderFactory$StudyBuilderFactory$FULL_STOCHASTIC_init$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [StudyBuilderFactory$Factory]
  };
  var StudyBuilderFactory$FULL_STOCHASTIC_instance;
  function StudyBuilderFactory$FULL_STOCHASTIC_getInstance() {
    StudyBuilderFactory_initFields();
    return StudyBuilderFactory$FULL_STOCHASTIC_instance;
  }
  function StudyBuilderFactory$StudyBuilderFactory$STANDARD_ERROR_BANDS_init$ObjectLiteral() {
  }
  StudyBuilderFactory$StudyBuilderFactory$STANDARD_ERROR_BANDS_init$ObjectLiteral.prototype.create = function () {
    return new StandardErrorBands();
  };
  StudyBuilderFactory$StudyBuilderFactory$STANDARD_ERROR_BANDS_init$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [StudyBuilderFactory$Factory]
  };
  var StudyBuilderFactory$STANDARD_ERROR_BANDS_instance;
  function StudyBuilderFactory$STANDARD_ERROR_BANDS_getInstance() {
    StudyBuilderFactory_initFields();
    return StudyBuilderFactory$STANDARD_ERROR_BANDS_instance;
  }
  function StudyBuilderFactory$StudyBuilderFactory$PERCENT_OF_RESISTANCE_init$ObjectLiteral() {
  }
  StudyBuilderFactory$StudyBuilderFactory$PERCENT_OF_RESISTANCE_init$ObjectLiteral.prototype.create = function () {
    return new PercentOfResistance();
  };
  StudyBuilderFactory$StudyBuilderFactory$PERCENT_OF_RESISTANCE_init$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [StudyBuilderFactory$Factory]
  };
  var StudyBuilderFactory$PERCENT_OF_RESISTANCE_instance;
  function StudyBuilderFactory$PERCENT_OF_RESISTANCE_getInstance() {
    StudyBuilderFactory_initFields();
    return StudyBuilderFactory$PERCENT_OF_RESISTANCE_instance;
  }
  function StudyBuilderFactory$StudyBuilderFactory$CENTER_OF_GRAVITY_OSCILLATOR_init$ObjectLiteral() {
  }
  StudyBuilderFactory$StudyBuilderFactory$CENTER_OF_GRAVITY_OSCILLATOR_init$ObjectLiteral.prototype.create = function () {
    return new CenterOfGravityOscillator();
  };
  StudyBuilderFactory$StudyBuilderFactory$CENTER_OF_GRAVITY_OSCILLATOR_init$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [StudyBuilderFactory$Factory]
  };
  var StudyBuilderFactory$CENTER_OF_GRAVITY_OSCILLATOR_instance;
  function StudyBuilderFactory$CENTER_OF_GRAVITY_OSCILLATOR_getInstance() {
    StudyBuilderFactory_initFields();
    return StudyBuilderFactory$CENTER_OF_GRAVITY_OSCILLATOR_instance;
  }
  function StudyBuilderFactory$StudyBuilderFactory$ACCELERATION_DECELERATION_init$ObjectLiteral() {
  }
  StudyBuilderFactory$StudyBuilderFactory$ACCELERATION_DECELERATION_init$ObjectLiteral.prototype.create = function () {
    return new AccelerationDeceleration();
  };
  StudyBuilderFactory$StudyBuilderFactory$ACCELERATION_DECELERATION_init$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [StudyBuilderFactory$Factory]
  };
  var StudyBuilderFactory$ACCELERATION_DECELERATION_instance;
  function StudyBuilderFactory$ACCELERATION_DECELERATION_getInstance() {
    StudyBuilderFactory_initFields();
    return StudyBuilderFactory$ACCELERATION_DECELERATION_instance;
  }
  function StudyBuilderFactory$StudyBuilderFactory$ACCUMULATION_DISTRIBUTION_init$ObjectLiteral() {
  }
  StudyBuilderFactory$StudyBuilderFactory$ACCUMULATION_DISTRIBUTION_init$ObjectLiteral.prototype.create = function () {
    return new AccumulationDistribution();
  };
  StudyBuilderFactory$StudyBuilderFactory$ACCUMULATION_DISTRIBUTION_init$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [StudyBuilderFactory$Factory]
  };
  var StudyBuilderFactory$ACCUMULATION_DISTRIBUTION_instance;
  function StudyBuilderFactory$ACCUMULATION_DISTRIBUTION_getInstance() {
    StudyBuilderFactory_initFields();
    return StudyBuilderFactory$ACCUMULATION_DISTRIBUTION_instance;
  }
  function StudyBuilderFactory$StudyBuilderFactory$ADX_init$ObjectLiteral() {
  }
  StudyBuilderFactory$StudyBuilderFactory$ADX_init$ObjectLiteral.prototype.create = function () {
    return new ADX();
  };
  StudyBuilderFactory$StudyBuilderFactory$ADX_init$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [StudyBuilderFactory$Factory]
  };
  var StudyBuilderFactory$ADX_instance;
  function StudyBuilderFactory$ADX_getInstance() {
    StudyBuilderFactory_initFields();
    return StudyBuilderFactory$ADX_instance;
  }
  function StudyBuilderFactory$StudyBuilderFactory$ADXR_init$ObjectLiteral() {
  }
  StudyBuilderFactory$StudyBuilderFactory$ADXR_init$ObjectLiteral.prototype.create = function () {
    return new ADXR();
  };
  StudyBuilderFactory$StudyBuilderFactory$ADXR_init$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [StudyBuilderFactory$Factory]
  };
  var StudyBuilderFactory$ADXR_instance;
  function StudyBuilderFactory$ADXR_getInstance() {
    StudyBuilderFactory_initFields();
    return StudyBuilderFactory$ADXR_instance;
  }
  function StudyBuilderFactory$StudyBuilderFactory$AVERAGE_TRUE_RANGE_init$ObjectLiteral() {
  }
  StudyBuilderFactory$StudyBuilderFactory$AVERAGE_TRUE_RANGE_init$ObjectLiteral.prototype.create = function () {
    return new AverageTrueRange();
  };
  StudyBuilderFactory$StudyBuilderFactory$AVERAGE_TRUE_RANGE_init$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [StudyBuilderFactory$Factory]
  };
  var StudyBuilderFactory$AVERAGE_TRUE_RANGE_instance;
  function StudyBuilderFactory$AVERAGE_TRUE_RANGE_getInstance() {
    StudyBuilderFactory_initFields();
    return StudyBuilderFactory$AVERAGE_TRUE_RANGE_instance;
  }
  function StudyBuilderFactory$StudyBuilderFactory$AWESOME_OSCILLATOR_init$ObjectLiteral() {
  }
  StudyBuilderFactory$StudyBuilderFactory$AWESOME_OSCILLATOR_init$ObjectLiteral.prototype.create = function () {
    return new AwesomeOscillator();
  };
  StudyBuilderFactory$StudyBuilderFactory$AWESOME_OSCILLATOR_init$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [StudyBuilderFactory$Factory]
  };
  var StudyBuilderFactory$AWESOME_OSCILLATOR_instance;
  function StudyBuilderFactory$AWESOME_OSCILLATOR_getInstance() {
    StudyBuilderFactory_initFields();
    return StudyBuilderFactory$AWESOME_OSCILLATOR_instance;
  }
  function StudyBuilderFactory$StudyBuilderFactory$BOLLINGER_BANDS_init$ObjectLiteral() {
  }
  StudyBuilderFactory$StudyBuilderFactory$BOLLINGER_BANDS_init$ObjectLiteral.prototype.create = function () {
    return new BollingerBands();
  };
  StudyBuilderFactory$StudyBuilderFactory$BOLLINGER_BANDS_init$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [StudyBuilderFactory$Factory]
  };
  var StudyBuilderFactory$BOLLINGER_BANDS_instance;
  function StudyBuilderFactory$BOLLINGER_BANDS_getInstance() {
    StudyBuilderFactory_initFields();
    return StudyBuilderFactory$BOLLINGER_BANDS_instance;
  }
  function StudyBuilderFactory$StudyBuilderFactory$CCI_init$ObjectLiteral() {
  }
  StudyBuilderFactory$StudyBuilderFactory$CCI_init$ObjectLiteral.prototype.create = function () {
    return new CCI();
  };
  StudyBuilderFactory$StudyBuilderFactory$CCI_init$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [StudyBuilderFactory$Factory]
  };
  var StudyBuilderFactory$CCI_instance;
  function StudyBuilderFactory$CCI_getInstance() {
    StudyBuilderFactory_initFields();
    return StudyBuilderFactory$CCI_instance;
  }
  function StudyBuilderFactory$StudyBuilderFactory$CHAIKIN_OSCILLATOR_init$ObjectLiteral() {
  }
  StudyBuilderFactory$StudyBuilderFactory$CHAIKIN_OSCILLATOR_init$ObjectLiteral.prototype.create = function () {
    return new ChaikinOscillator();
  };
  StudyBuilderFactory$StudyBuilderFactory$CHAIKIN_OSCILLATOR_init$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [StudyBuilderFactory$Factory]
  };
  var StudyBuilderFactory$CHAIKIN_OSCILLATOR_instance;
  function StudyBuilderFactory$CHAIKIN_OSCILLATOR_getInstance() {
    StudyBuilderFactory_initFields();
    return StudyBuilderFactory$CHAIKIN_OSCILLATOR_instance;
  }
  function StudyBuilderFactory$StudyBuilderFactory$CHAIKIN_VOLATILITY_init$ObjectLiteral() {
  }
  StudyBuilderFactory$StudyBuilderFactory$CHAIKIN_VOLATILITY_init$ObjectLiteral.prototype.create = function () {
    return new ChaikinVolatility();
  };
  StudyBuilderFactory$StudyBuilderFactory$CHAIKIN_VOLATILITY_init$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [StudyBuilderFactory$Factory]
  };
  var StudyBuilderFactory$CHAIKIN_VOLATILITY_instance;
  function StudyBuilderFactory$CHAIKIN_VOLATILITY_getInstance() {
    StudyBuilderFactory_initFields();
    return StudyBuilderFactory$CHAIKIN_VOLATILITY_instance;
  }
  function StudyBuilderFactory$StudyBuilderFactory$CHANDE_MOMENTUM_OSCILLATOR_init$ObjectLiteral() {
  }
  StudyBuilderFactory$StudyBuilderFactory$CHANDE_MOMENTUM_OSCILLATOR_init$ObjectLiteral.prototype.create = function () {
    return new ChandeMomentumOscillator();
  };
  StudyBuilderFactory$StudyBuilderFactory$CHANDE_MOMENTUM_OSCILLATOR_init$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [StudyBuilderFactory$Factory]
  };
  var StudyBuilderFactory$CHANDE_MOMENTUM_OSCILLATOR_instance;
  function StudyBuilderFactory$CHANDE_MOMENTUM_OSCILLATOR_getInstance() {
    StudyBuilderFactory_initFields();
    return StudyBuilderFactory$CHANDE_MOMENTUM_OSCILLATOR_instance;
  }
  function StudyBuilderFactory$StudyBuilderFactory$DE_MARKER_init$ObjectLiteral() {
  }
  StudyBuilderFactory$StudyBuilderFactory$DE_MARKER_init$ObjectLiteral.prototype.create = function () {
    return new DeMarker();
  };
  StudyBuilderFactory$StudyBuilderFactory$DE_MARKER_init$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [StudyBuilderFactory$Factory]
  };
  var StudyBuilderFactory$DE_MARKER_instance;
  function StudyBuilderFactory$DE_MARKER_getInstance() {
    StudyBuilderFactory_initFields();
    return StudyBuilderFactory$DE_MARKER_instance;
  }
  function StudyBuilderFactory$StudyBuilderFactory$DETRENDED_PRICE_OSC_init$ObjectLiteral() {
  }
  StudyBuilderFactory$StudyBuilderFactory$DETRENDED_PRICE_OSC_init$ObjectLiteral.prototype.create = function () {
    return new DetrendedPriceOsc();
  };
  StudyBuilderFactory$StudyBuilderFactory$DETRENDED_PRICE_OSC_init$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [StudyBuilderFactory$Factory]
  };
  var StudyBuilderFactory$DETRENDED_PRICE_OSC_instance;
  function StudyBuilderFactory$DETRENDED_PRICE_OSC_getInstance() {
    StudyBuilderFactory_initFields();
    return StudyBuilderFactory$DETRENDED_PRICE_OSC_instance;
  }
  function StudyBuilderFactory$StudyBuilderFactory$DMI_init$ObjectLiteral() {
  }
  StudyBuilderFactory$StudyBuilderFactory$DMI_init$ObjectLiteral.prototype.create = function () {
    return new DMI();
  };
  StudyBuilderFactory$StudyBuilderFactory$DMI_init$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [StudyBuilderFactory$Factory]
  };
  var StudyBuilderFactory$DMI_instance;
  function StudyBuilderFactory$DMI_getInstance() {
    StudyBuilderFactory_initFields();
    return StudyBuilderFactory$DMI_instance;
  }
  function StudyBuilderFactory$StudyBuilderFactory$ELDER_init$ObjectLiteral() {
  }
  StudyBuilderFactory$StudyBuilderFactory$ELDER_init$ObjectLiteral.prototype.create = function () {
    return new Elder();
  };
  StudyBuilderFactory$StudyBuilderFactory$ELDER_init$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [StudyBuilderFactory$Factory]
  };
  var StudyBuilderFactory$ELDER_instance;
  function StudyBuilderFactory$ELDER_getInstance() {
    StudyBuilderFactory_initFields();
    return StudyBuilderFactory$ELDER_instance;
  }
  function StudyBuilderFactory$StudyBuilderFactory$EMA_init$ObjectLiteral() {
  }
  StudyBuilderFactory$StudyBuilderFactory$EMA_init$ObjectLiteral.prototype.create = function () {
    return new EMA();
  };
  StudyBuilderFactory$StudyBuilderFactory$EMA_init$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [StudyBuilderFactory$Factory]
  };
  var StudyBuilderFactory$EMA_instance;
  function StudyBuilderFactory$EMA_getInstance() {
    StudyBuilderFactory_initFields();
    return StudyBuilderFactory$EMA_instance;
  }
  function StudyBuilderFactory$StudyBuilderFactory$ENVELOPE_EMA_init$ObjectLiteral() {
  }
  StudyBuilderFactory$StudyBuilderFactory$ENVELOPE_EMA_init$ObjectLiteral.prototype.create = function () {
    return new EnvelopeEMA();
  };
  StudyBuilderFactory$StudyBuilderFactory$ENVELOPE_EMA_init$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [StudyBuilderFactory$Factory]
  };
  var StudyBuilderFactory$ENVELOPE_EMA_instance;
  function StudyBuilderFactory$ENVELOPE_EMA_getInstance() {
    StudyBuilderFactory_initFields();
    return StudyBuilderFactory$ENVELOPE_EMA_instance;
  }
  function StudyBuilderFactory$StudyBuilderFactory$ENVELOPE_SMA_init$ObjectLiteral() {
  }
  StudyBuilderFactory$StudyBuilderFactory$ENVELOPE_SMA_init$ObjectLiteral.prototype.create = function () {
    return new EnvelopeSMA();
  };
  StudyBuilderFactory$StudyBuilderFactory$ENVELOPE_SMA_init$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [StudyBuilderFactory$Factory]
  };
  var StudyBuilderFactory$ENVELOPE_SMA_instance;
  function StudyBuilderFactory$ENVELOPE_SMA_getInstance() {
    StudyBuilderFactory_initFields();
    return StudyBuilderFactory$ENVELOPE_SMA_instance;
  }
  function StudyBuilderFactory$StudyBuilderFactory$ENVELOPE_SMMA_init$ObjectLiteral() {
  }
  StudyBuilderFactory$StudyBuilderFactory$ENVELOPE_SMMA_init$ObjectLiteral.prototype.create = function () {
    return new EnvelopeSMMA();
  };
  StudyBuilderFactory$StudyBuilderFactory$ENVELOPE_SMMA_init$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [StudyBuilderFactory$Factory]
  };
  var StudyBuilderFactory$ENVELOPE_SMMA_instance;
  function StudyBuilderFactory$ENVELOPE_SMMA_getInstance() {
    StudyBuilderFactory_initFields();
    return StudyBuilderFactory$ENVELOPE_SMMA_instance;
  }
  function StudyBuilderFactory$StudyBuilderFactory$ENVELOPE_WMA_init$ObjectLiteral() {
  }
  StudyBuilderFactory$StudyBuilderFactory$ENVELOPE_WMA_init$ObjectLiteral.prototype.create = function () {
    return new EnvelopeWMA();
  };
  StudyBuilderFactory$StudyBuilderFactory$ENVELOPE_WMA_init$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [StudyBuilderFactory$Factory]
  };
  var StudyBuilderFactory$ENVELOPE_WMA_instance;
  function StudyBuilderFactory$ENVELOPE_WMA_getInstance() {
    StudyBuilderFactory_initFields();
    return StudyBuilderFactory$ENVELOPE_WMA_instance;
  }
  function StudyBuilderFactory$StudyBuilderFactory$FAST_STOCHASTIC_init$ObjectLiteral() {
  }
  StudyBuilderFactory$StudyBuilderFactory$FAST_STOCHASTIC_init$ObjectLiteral.prototype.create = function () {
    return new FastStochastic();
  };
  StudyBuilderFactory$StudyBuilderFactory$FAST_STOCHASTIC_init$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [StudyBuilderFactory$Factory]
  };
  var StudyBuilderFactory$FAST_STOCHASTIC_instance;
  function StudyBuilderFactory$FAST_STOCHASTIC_getInstance() {
    StudyBuilderFactory_initFields();
    return StudyBuilderFactory$FAST_STOCHASTIC_instance;
  }
  function StudyBuilderFactory$StudyBuilderFactory$FORCE_INDEX_init$ObjectLiteral() {
  }
  StudyBuilderFactory$StudyBuilderFactory$FORCE_INDEX_init$ObjectLiteral.prototype.create = function () {
    return new ForceIndex();
  };
  StudyBuilderFactory$StudyBuilderFactory$FORCE_INDEX_init$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [StudyBuilderFactory$Factory]
  };
  var StudyBuilderFactory$FORCE_INDEX_instance;
  function StudyBuilderFactory$FORCE_INDEX_getInstance() {
    StudyBuilderFactory_initFields();
    return StudyBuilderFactory$FORCE_INDEX_instance;
  }
  function StudyBuilderFactory$StudyBuilderFactory$GATOR_OSCILLATOR_init$ObjectLiteral() {
  }
  StudyBuilderFactory$StudyBuilderFactory$GATOR_OSCILLATOR_init$ObjectLiteral.prototype.create = function () {
    return new GatorOscillator();
  };
  StudyBuilderFactory$StudyBuilderFactory$GATOR_OSCILLATOR_init$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [StudyBuilderFactory$Factory]
  };
  var StudyBuilderFactory$GATOR_OSCILLATOR_instance;
  function StudyBuilderFactory$GATOR_OSCILLATOR_getInstance() {
    StudyBuilderFactory_initFields();
    return StudyBuilderFactory$GATOR_OSCILLATOR_instance;
  }
  function StudyBuilderFactory$StudyBuilderFactory$HLVOLATILITY_init$ObjectLiteral() {
  }
  StudyBuilderFactory$StudyBuilderFactory$HLVOLATILITY_init$ObjectLiteral.prototype.create = function () {
    return new HLVolatility();
  };
  StudyBuilderFactory$StudyBuilderFactory$HLVOLATILITY_init$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [StudyBuilderFactory$Factory]
  };
  var StudyBuilderFactory$HLVOLATILITY_instance;
  function StudyBuilderFactory$HLVOLATILITY_getInstance() {
    StudyBuilderFactory_initFields();
    return StudyBuilderFactory$HLVOLATILITY_instance;
  }
  function StudyBuilderFactory$StudyBuilderFactory$ICHIMOKU_init$ObjectLiteral() {
  }
  StudyBuilderFactory$StudyBuilderFactory$ICHIMOKU_init$ObjectLiteral.prototype.create = function () {
    return new Ichimoku();
  };
  StudyBuilderFactory$StudyBuilderFactory$ICHIMOKU_init$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [StudyBuilderFactory$Factory]
  };
  var StudyBuilderFactory$ICHIMOKU_instance;
  function StudyBuilderFactory$ICHIMOKU_getInstance() {
    StudyBuilderFactory_initFields();
    return StudyBuilderFactory$ICHIMOKU_instance;
  }
  function StudyBuilderFactory$StudyBuilderFactory$INTRADAY_MOMENTUM_INDEX_init$ObjectLiteral() {
  }
  StudyBuilderFactory$StudyBuilderFactory$INTRADAY_MOMENTUM_INDEX_init$ObjectLiteral.prototype.create = function () {
    return new IntradayMomentumIndex();
  };
  StudyBuilderFactory$StudyBuilderFactory$INTRADAY_MOMENTUM_INDEX_init$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [StudyBuilderFactory$Factory]
  };
  var StudyBuilderFactory$INTRADAY_MOMENTUM_INDEX_instance;
  function StudyBuilderFactory$INTRADAY_MOMENTUM_INDEX_getInstance() {
    StudyBuilderFactory_initFields();
    return StudyBuilderFactory$INTRADAY_MOMENTUM_INDEX_instance;
  }
  function StudyBuilderFactory$StudyBuilderFactory$MACD_init$ObjectLiteral() {
  }
  StudyBuilderFactory$StudyBuilderFactory$MACD_init$ObjectLiteral.prototype.create = function () {
    return new MACD();
  };
  StudyBuilderFactory$StudyBuilderFactory$MACD_init$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [StudyBuilderFactory$Factory]
  };
  var StudyBuilderFactory$MACD_instance;
  function StudyBuilderFactory$MACD_getInstance() {
    StudyBuilderFactory_initFields();
    return StudyBuilderFactory$MACD_instance;
  }
  function StudyBuilderFactory$StudyBuilderFactory$MARKET_FACILITATION_INDEX_init$ObjectLiteral() {
  }
  StudyBuilderFactory$StudyBuilderFactory$MARKET_FACILITATION_INDEX_init$ObjectLiteral.prototype.create = function () {
    return new MarketFacilitationIndex();
  };
  StudyBuilderFactory$StudyBuilderFactory$MARKET_FACILITATION_INDEX_init$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [StudyBuilderFactory$Factory]
  };
  var StudyBuilderFactory$MARKET_FACILITATION_INDEX_instance;
  function StudyBuilderFactory$MARKET_FACILITATION_INDEX_getInstance() {
    StudyBuilderFactory_initFields();
    return StudyBuilderFactory$MARKET_FACILITATION_INDEX_instance;
  }
  function StudyBuilderFactory$StudyBuilderFactory$MASS_INDEX_init$ObjectLiteral() {
  }
  StudyBuilderFactory$StudyBuilderFactory$MASS_INDEX_init$ObjectLiteral.prototype.create = function () {
    return new MassIndex();
  };
  StudyBuilderFactory$StudyBuilderFactory$MASS_INDEX_init$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [StudyBuilderFactory$Factory]
  };
  var StudyBuilderFactory$MASS_INDEX_instance;
  function StudyBuilderFactory$MASS_INDEX_getInstance() {
    StudyBuilderFactory_initFields();
    return StudyBuilderFactory$MASS_INDEX_instance;
  }
  function StudyBuilderFactory$StudyBuilderFactory$MOMENTUM_init$ObjectLiteral() {
  }
  StudyBuilderFactory$StudyBuilderFactory$MOMENTUM_init$ObjectLiteral.prototype.create = function () {
    return new Momentum();
  };
  StudyBuilderFactory$StudyBuilderFactory$MOMENTUM_init$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [StudyBuilderFactory$Factory]
  };
  var StudyBuilderFactory$MOMENTUM_instance;
  function StudyBuilderFactory$MOMENTUM_getInstance() {
    StudyBuilderFactory_initFields();
    return StudyBuilderFactory$MOMENTUM_instance;
  }
  function StudyBuilderFactory$StudyBuilderFactory$MONEY_FLOW_INDEX_init$ObjectLiteral() {
  }
  StudyBuilderFactory$StudyBuilderFactory$MONEY_FLOW_INDEX_init$ObjectLiteral.prototype.create = function () {
    return new MoneyFlowIndex();
  };
  StudyBuilderFactory$StudyBuilderFactory$MONEY_FLOW_INDEX_init$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [StudyBuilderFactory$Factory]
  };
  var StudyBuilderFactory$MONEY_FLOW_INDEX_instance;
  function StudyBuilderFactory$MONEY_FLOW_INDEX_getInstance() {
    StudyBuilderFactory_initFields();
    return StudyBuilderFactory$MONEY_FLOW_INDEX_instance;
  }
  function StudyBuilderFactory$StudyBuilderFactory$NEGATIVE_VOLUME_INDEX_init$ObjectLiteral() {
  }
  StudyBuilderFactory$StudyBuilderFactory$NEGATIVE_VOLUME_INDEX_init$ObjectLiteral.prototype.create = function () {
    return new NegativeVolumeIndex();
  };
  StudyBuilderFactory$StudyBuilderFactory$NEGATIVE_VOLUME_INDEX_init$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [StudyBuilderFactory$Factory]
  };
  var StudyBuilderFactory$NEGATIVE_VOLUME_INDEX_instance;
  function StudyBuilderFactory$NEGATIVE_VOLUME_INDEX_getInstance() {
    StudyBuilderFactory_initFields();
    return StudyBuilderFactory$NEGATIVE_VOLUME_INDEX_instance;
  }
  function StudyBuilderFactory$StudyBuilderFactory$ON_BALANCE_VOLUME_init$ObjectLiteral() {
  }
  StudyBuilderFactory$StudyBuilderFactory$ON_BALANCE_VOLUME_init$ObjectLiteral.prototype.create = function () {
    return new OnBalanceVolume();
  };
  StudyBuilderFactory$StudyBuilderFactory$ON_BALANCE_VOLUME_init$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [StudyBuilderFactory$Factory]
  };
  var StudyBuilderFactory$ON_BALANCE_VOLUME_instance;
  function StudyBuilderFactory$ON_BALANCE_VOLUME_getInstance() {
    StudyBuilderFactory_initFields();
    return StudyBuilderFactory$ON_BALANCE_VOLUME_instance;
  }
  function StudyBuilderFactory$StudyBuilderFactory$DAY_OPEN_CLOSE_init$ObjectLiteral() {
  }
  StudyBuilderFactory$StudyBuilderFactory$DAY_OPEN_CLOSE_init$ObjectLiteral.prototype.create = function () {
    return new DayOpenClose();
  };
  StudyBuilderFactory$StudyBuilderFactory$DAY_OPEN_CLOSE_init$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [StudyBuilderFactory$Factory]
  };
  var StudyBuilderFactory$DAY_OPEN_CLOSE_instance;
  function StudyBuilderFactory$DAY_OPEN_CLOSE_getInstance() {
    StudyBuilderFactory_initFields();
    return StudyBuilderFactory$DAY_OPEN_CLOSE_instance;
  }
  function StudyBuilderFactory$StudyBuilderFactory$OSCILLATOR_init$ObjectLiteral() {
  }
  StudyBuilderFactory$StudyBuilderFactory$OSCILLATOR_init$ObjectLiteral.prototype.create = function () {
    return new Oscillator();
  };
  StudyBuilderFactory$StudyBuilderFactory$OSCILLATOR_init$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [StudyBuilderFactory$Factory]
  };
  var StudyBuilderFactory$OSCILLATOR_instance;
  function StudyBuilderFactory$OSCILLATOR_getInstance() {
    StudyBuilderFactory_initFields();
    return StudyBuilderFactory$OSCILLATOR_instance;
  }
  function StudyBuilderFactory$StudyBuilderFactory$PARABOLIC_SAR_init$ObjectLiteral() {
  }
  StudyBuilderFactory$StudyBuilderFactory$PARABOLIC_SAR_init$ObjectLiteral.prototype.create = function () {
    return new ParabolicSAR();
  };
  StudyBuilderFactory$StudyBuilderFactory$PARABOLIC_SAR_init$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [StudyBuilderFactory$Factory]
  };
  var StudyBuilderFactory$PARABOLIC_SAR_instance;
  function StudyBuilderFactory$PARABOLIC_SAR_getInstance() {
    StudyBuilderFactory_initFields();
    return StudyBuilderFactory$PARABOLIC_SAR_instance;
  }
  function StudyBuilderFactory$StudyBuilderFactory$PIVOT_POINTS_init$ObjectLiteral() {
  }
  StudyBuilderFactory$StudyBuilderFactory$PIVOT_POINTS_init$ObjectLiteral.prototype.create = function () {
    return new PivotPoints();
  };
  StudyBuilderFactory$StudyBuilderFactory$PIVOT_POINTS_init$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [StudyBuilderFactory$Factory]
  };
  var StudyBuilderFactory$PIVOT_POINTS_instance;
  function StudyBuilderFactory$PIVOT_POINTS_getInstance() {
    StudyBuilderFactory_initFields();
    return StudyBuilderFactory$PIVOT_POINTS_instance;
  }
  function StudyBuilderFactory$StudyBuilderFactory$PRICE_CHANNEL_init$ObjectLiteral() {
  }
  StudyBuilderFactory$StudyBuilderFactory$PRICE_CHANNEL_init$ObjectLiteral.prototype.create = function () {
    return new PriceChannel();
  };
  StudyBuilderFactory$StudyBuilderFactory$PRICE_CHANNEL_init$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [StudyBuilderFactory$Factory]
  };
  var StudyBuilderFactory$PRICE_CHANNEL_instance;
  function StudyBuilderFactory$PRICE_CHANNEL_getInstance() {
    StudyBuilderFactory_initFields();
    return StudyBuilderFactory$PRICE_CHANNEL_instance;
  }
  function StudyBuilderFactory$StudyBuilderFactory$PRICE_VOLUME_TREND_init$ObjectLiteral() {
  }
  StudyBuilderFactory$StudyBuilderFactory$PRICE_VOLUME_TREND_init$ObjectLiteral.prototype.create = function () {
    return new PriceVolumeTrend();
  };
  StudyBuilderFactory$StudyBuilderFactory$PRICE_VOLUME_TREND_init$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [StudyBuilderFactory$Factory]
  };
  var StudyBuilderFactory$PRICE_VOLUME_TREND_instance;
  function StudyBuilderFactory$PRICE_VOLUME_TREND_getInstance() {
    StudyBuilderFactory_initFields();
    return StudyBuilderFactory$PRICE_VOLUME_TREND_instance;
  }
  function StudyBuilderFactory$StudyBuilderFactory$RELATIVE_STRENGTH_INDEX_init$ObjectLiteral() {
  }
  StudyBuilderFactory$StudyBuilderFactory$RELATIVE_STRENGTH_INDEX_init$ObjectLiteral.prototype.create = function () {
    return new RelativeStrengthIndex();
  };
  StudyBuilderFactory$StudyBuilderFactory$RELATIVE_STRENGTH_INDEX_init$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [StudyBuilderFactory$Factory]
  };
  var StudyBuilderFactory$RELATIVE_STRENGTH_INDEX_instance;
  function StudyBuilderFactory$RELATIVE_STRENGTH_INDEX_getInstance() {
    StudyBuilderFactory_initFields();
    return StudyBuilderFactory$RELATIVE_STRENGTH_INDEX_instance;
  }
  function StudyBuilderFactory$StudyBuilderFactory$RELATIVE_VIGOR_INDEX_init$ObjectLiteral() {
  }
  StudyBuilderFactory$StudyBuilderFactory$RELATIVE_VIGOR_INDEX_init$ObjectLiteral.prototype.create = function () {
    return new RelativeVigorIndex();
  };
  StudyBuilderFactory$StudyBuilderFactory$RELATIVE_VIGOR_INDEX_init$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [StudyBuilderFactory$Factory]
  };
  var StudyBuilderFactory$RELATIVE_VIGOR_INDEX_instance;
  function StudyBuilderFactory$RELATIVE_VIGOR_INDEX_getInstance() {
    StudyBuilderFactory_initFields();
    return StudyBuilderFactory$RELATIVE_VIGOR_INDEX_instance;
  }
  function StudyBuilderFactory$StudyBuilderFactory$RELATIVE_VIGOR_INDEX_SMA_init$ObjectLiteral() {
  }
  StudyBuilderFactory$StudyBuilderFactory$RELATIVE_VIGOR_INDEX_SMA_init$ObjectLiteral.prototype.create = function () {
    return new RelativeVigorIndexSMA();
  };
  StudyBuilderFactory$StudyBuilderFactory$RELATIVE_VIGOR_INDEX_SMA_init$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [StudyBuilderFactory$Factory]
  };
  var StudyBuilderFactory$RELATIVE_VIGOR_INDEX_SMA_instance;
  function StudyBuilderFactory$RELATIVE_VIGOR_INDEX_SMA_getInstance() {
    StudyBuilderFactory_initFields();
    return StudyBuilderFactory$RELATIVE_VIGOR_INDEX_SMA_instance;
  }
  function StudyBuilderFactory$StudyBuilderFactory$RELATIVE_VOLATILITY_INDEX_init$ObjectLiteral() {
  }
  StudyBuilderFactory$StudyBuilderFactory$RELATIVE_VOLATILITY_INDEX_init$ObjectLiteral.prototype.create = function () {
    return new RelativeVolatilityIndex();
  };
  StudyBuilderFactory$StudyBuilderFactory$RELATIVE_VOLATILITY_INDEX_init$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [StudyBuilderFactory$Factory]
  };
  var StudyBuilderFactory$RELATIVE_VOLATILITY_INDEX_instance;
  function StudyBuilderFactory$RELATIVE_VOLATILITY_INDEX_getInstance() {
    StudyBuilderFactory_initFields();
    return StudyBuilderFactory$RELATIVE_VOLATILITY_INDEX_instance;
  }
  function StudyBuilderFactory$StudyBuilderFactory$ROC_init$ObjectLiteral() {
  }
  StudyBuilderFactory$StudyBuilderFactory$ROC_init$ObjectLiteral.prototype.create = function () {
    return new ROC();
  };
  StudyBuilderFactory$StudyBuilderFactory$ROC_init$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [StudyBuilderFactory$Factory]
  };
  var StudyBuilderFactory$ROC_instance;
  function StudyBuilderFactory$ROC_getInstance() {
    StudyBuilderFactory_initFields();
    return StudyBuilderFactory$ROC_instance;
  }
  function StudyBuilderFactory$StudyBuilderFactory$SLOW_STOCHASTIC_init$ObjectLiteral() {
  }
  StudyBuilderFactory$StudyBuilderFactory$SLOW_STOCHASTIC_init$ObjectLiteral.prototype.create = function () {
    return new SlowStochastic();
  };
  StudyBuilderFactory$StudyBuilderFactory$SLOW_STOCHASTIC_init$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [StudyBuilderFactory$Factory]
  };
  var StudyBuilderFactory$SLOW_STOCHASTIC_instance;
  function StudyBuilderFactory$SLOW_STOCHASTIC_getInstance() {
    StudyBuilderFactory_initFields();
    return StudyBuilderFactory$SLOW_STOCHASTIC_instance;
  }
  function StudyBuilderFactory$StudyBuilderFactory$SMA_init$ObjectLiteral() {
  }
  StudyBuilderFactory$StudyBuilderFactory$SMA_init$ObjectLiteral.prototype.create = function () {
    return new SMA();
  };
  StudyBuilderFactory$StudyBuilderFactory$SMA_init$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [StudyBuilderFactory$Factory]
  };
  var StudyBuilderFactory$SMA_instance;
  function StudyBuilderFactory$SMA_getInstance() {
    StudyBuilderFactory_initFields();
    return StudyBuilderFactory$SMA_instance;
  }
  function StudyBuilderFactory$StudyBuilderFactory$SMMA_init$ObjectLiteral() {
  }
  StudyBuilderFactory$StudyBuilderFactory$SMMA_init$ObjectLiteral.prototype.create = function () {
    return new SMMA();
  };
  StudyBuilderFactory$StudyBuilderFactory$SMMA_init$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [StudyBuilderFactory$Factory]
  };
  var StudyBuilderFactory$SMMA_instance;
  function StudyBuilderFactory$SMMA_getInstance() {
    StudyBuilderFactory_initFields();
    return StudyBuilderFactory$SMMA_instance;
  }
  function StudyBuilderFactory$StudyBuilderFactory$SROC_init$ObjectLiteral() {
  }
  StudyBuilderFactory$StudyBuilderFactory$SROC_init$ObjectLiteral.prototype.create = function () {
    return new SROC();
  };
  StudyBuilderFactory$StudyBuilderFactory$SROC_init$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [StudyBuilderFactory$Factory]
  };
  var StudyBuilderFactory$SROC_instance;
  function StudyBuilderFactory$SROC_getInstance() {
    StudyBuilderFactory_initFields();
    return StudyBuilderFactory$SROC_instance;
  }
  function StudyBuilderFactory$StudyBuilderFactory$SCHAFF_TREND_CYCLE_init$ObjectLiteral() {
  }
  StudyBuilderFactory$StudyBuilderFactory$SCHAFF_TREND_CYCLE_init$ObjectLiteral.prototype.create = function () {
    return new SchaffTrendCycle();
  };
  StudyBuilderFactory$StudyBuilderFactory$SCHAFF_TREND_CYCLE_init$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [StudyBuilderFactory$Factory]
  };
  var StudyBuilderFactory$SCHAFF_TREND_CYCLE_instance;
  function StudyBuilderFactory$SCHAFF_TREND_CYCLE_getInstance() {
    StudyBuilderFactory_initFields();
    return StudyBuilderFactory$SCHAFF_TREND_CYCLE_instance;
  }
  function StudyBuilderFactory$StudyBuilderFactory$STANDARD_DEVIATION_CHANNEL_init$ObjectLiteral() {
  }
  StudyBuilderFactory$StudyBuilderFactory$STANDARD_DEVIATION_CHANNEL_init$ObjectLiteral.prototype.create = function () {
    return new StandardDeviationChannel();
  };
  StudyBuilderFactory$StudyBuilderFactory$STANDARD_DEVIATION_CHANNEL_init$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [StudyBuilderFactory$Factory]
  };
  var StudyBuilderFactory$STANDARD_DEVIATION_CHANNEL_instance;
  function StudyBuilderFactory$STANDARD_DEVIATION_CHANNEL_getInstance() {
    StudyBuilderFactory_initFields();
    return StudyBuilderFactory$STANDARD_DEVIATION_CHANNEL_instance;
  }
  function StudyBuilderFactory$StudyBuilderFactory$STANDARD_DEVIATION_init$ObjectLiteral() {
  }
  StudyBuilderFactory$StudyBuilderFactory$STANDARD_DEVIATION_init$ObjectLiteral.prototype.create = function () {
    return new StandardDeviation();
  };
  StudyBuilderFactory$StudyBuilderFactory$STANDARD_DEVIATION_init$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [StudyBuilderFactory$Factory]
  };
  var StudyBuilderFactory$STANDARD_DEVIATION_instance;
  function StudyBuilderFactory$STANDARD_DEVIATION_getInstance() {
    StudyBuilderFactory_initFields();
    return StudyBuilderFactory$STANDARD_DEVIATION_instance;
  }
  function StudyBuilderFactory$StudyBuilderFactory$STD_DEV_VOLATILITY_init$ObjectLiteral() {
  }
  StudyBuilderFactory$StudyBuilderFactory$STD_DEV_VOLATILITY_init$ObjectLiteral.prototype.create = function () {
    return new StdDevVolatility();
  };
  StudyBuilderFactory$StudyBuilderFactory$STD_DEV_VOLATILITY_init$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [StudyBuilderFactory$Factory]
  };
  var StudyBuilderFactory$STD_DEV_VOLATILITY_instance;
  function StudyBuilderFactory$STD_DEV_VOLATILITY_getInstance() {
    StudyBuilderFactory_initFields();
    return StudyBuilderFactory$STD_DEV_VOLATILITY_instance;
  }
  function StudyBuilderFactory$StudyBuilderFactory$TIME_SERIES_FORECAST_init$ObjectLiteral() {
  }
  StudyBuilderFactory$StudyBuilderFactory$TIME_SERIES_FORECAST_init$ObjectLiteral.prototype.create = function () {
    return new TimeSeriesForecast();
  };
  StudyBuilderFactory$StudyBuilderFactory$TIME_SERIES_FORECAST_init$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [StudyBuilderFactory$Factory]
  };
  var StudyBuilderFactory$TIME_SERIES_FORECAST_instance;
  function StudyBuilderFactory$TIME_SERIES_FORECAST_getInstance() {
    StudyBuilderFactory_initFields();
    return StudyBuilderFactory$TIME_SERIES_FORECAST_instance;
  }
  function StudyBuilderFactory$StudyBuilderFactory$TMA_init$ObjectLiteral() {
  }
  StudyBuilderFactory$StudyBuilderFactory$TMA_init$ObjectLiteral.prototype.create = function () {
    return new TMA();
  };
  StudyBuilderFactory$StudyBuilderFactory$TMA_init$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [StudyBuilderFactory$Factory]
  };
  var StudyBuilderFactory$TMA_instance;
  function StudyBuilderFactory$TMA_getInstance() {
    StudyBuilderFactory_initFields();
    return StudyBuilderFactory$TMA_instance;
  }
  function StudyBuilderFactory$StudyBuilderFactory$TRIPLE_EMA_init$ObjectLiteral() {
  }
  StudyBuilderFactory$StudyBuilderFactory$TRIPLE_EMA_init$ObjectLiteral.prototype.create = function () {
    return new TripleEMA();
  };
  StudyBuilderFactory$StudyBuilderFactory$TRIPLE_EMA_init$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [StudyBuilderFactory$Factory]
  };
  var StudyBuilderFactory$TRIPLE_EMA_instance;
  function StudyBuilderFactory$TRIPLE_EMA_getInstance() {
    StudyBuilderFactory_initFields();
    return StudyBuilderFactory$TRIPLE_EMA_instance;
  }
  function StudyBuilderFactory$StudyBuilderFactory$TRUE_STRENGTH_INDEX_init$ObjectLiteral() {
  }
  StudyBuilderFactory$StudyBuilderFactory$TRUE_STRENGTH_INDEX_init$ObjectLiteral.prototype.create = function () {
    return new TrueStrengthIndex();
  };
  StudyBuilderFactory$StudyBuilderFactory$TRUE_STRENGTH_INDEX_init$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [StudyBuilderFactory$Factory]
  };
  var StudyBuilderFactory$TRUE_STRENGTH_INDEX_instance;
  function StudyBuilderFactory$TRUE_STRENGTH_INDEX_getInstance() {
    StudyBuilderFactory_initFields();
    return StudyBuilderFactory$TRUE_STRENGTH_INDEX_instance;
  }
  function StudyBuilderFactory$StudyBuilderFactory$ULTIMATE_OSCILLATOR_init$ObjectLiteral() {
  }
  StudyBuilderFactory$StudyBuilderFactory$ULTIMATE_OSCILLATOR_init$ObjectLiteral.prototype.create = function () {
    return new UltimateOscillator();
  };
  StudyBuilderFactory$StudyBuilderFactory$ULTIMATE_OSCILLATOR_init$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [StudyBuilderFactory$Factory]
  };
  var StudyBuilderFactory$ULTIMATE_OSCILLATOR_instance;
  function StudyBuilderFactory$ULTIMATE_OSCILLATOR_getInstance() {
    StudyBuilderFactory_initFields();
    return StudyBuilderFactory$ULTIMATE_OSCILLATOR_instance;
  }
  function StudyBuilderFactory$StudyBuilderFactory$VERTICAL_HORIZONTAL_FILTER_init$ObjectLiteral() {
  }
  StudyBuilderFactory$StudyBuilderFactory$VERTICAL_HORIZONTAL_FILTER_init$ObjectLiteral.prototype.create = function () {
    return new VerticalHorizontalFilter();
  };
  StudyBuilderFactory$StudyBuilderFactory$VERTICAL_HORIZONTAL_FILTER_init$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [StudyBuilderFactory$Factory]
  };
  var StudyBuilderFactory$VERTICAL_HORIZONTAL_FILTER_instance;
  function StudyBuilderFactory$VERTICAL_HORIZONTAL_FILTER_getInstance() {
    StudyBuilderFactory_initFields();
    return StudyBuilderFactory$VERTICAL_HORIZONTAL_FILTER_instance;
  }
  function StudyBuilderFactory$StudyBuilderFactory$VWAP_init$ObjectLiteral() {
  }
  StudyBuilderFactory$StudyBuilderFactory$VWAP_init$ObjectLiteral.prototype.create = function () {
    return new VWAP();
  };
  StudyBuilderFactory$StudyBuilderFactory$VWAP_init$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [StudyBuilderFactory$Factory]
  };
  var StudyBuilderFactory$VWAP_instance;
  function StudyBuilderFactory$VWAP_getInstance() {
    StudyBuilderFactory_initFields();
    return StudyBuilderFactory$VWAP_instance;
  }
  function StudyBuilderFactory$StudyBuilderFactory$WEIGHTED_CLOSE_init$ObjectLiteral() {
  }
  StudyBuilderFactory$StudyBuilderFactory$WEIGHTED_CLOSE_init$ObjectLiteral.prototype.create = function () {
    return new WeightedClose();
  };
  StudyBuilderFactory$StudyBuilderFactory$WEIGHTED_CLOSE_init$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [StudyBuilderFactory$Factory]
  };
  var StudyBuilderFactory$WEIGHTED_CLOSE_instance;
  function StudyBuilderFactory$WEIGHTED_CLOSE_getInstance() {
    StudyBuilderFactory_initFields();
    return StudyBuilderFactory$WEIGHTED_CLOSE_instance;
  }
  function StudyBuilderFactory$StudyBuilderFactory$WILDERS_SMOOTHING_init$ObjectLiteral() {
  }
  StudyBuilderFactory$StudyBuilderFactory$WILDERS_SMOOTHING_init$ObjectLiteral.prototype.create = function () {
    return new WildersSmoothing();
  };
  StudyBuilderFactory$StudyBuilderFactory$WILDERS_SMOOTHING_init$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [StudyBuilderFactory$Factory]
  };
  var StudyBuilderFactory$WILDERS_SMOOTHING_instance;
  function StudyBuilderFactory$WILDERS_SMOOTHING_getInstance() {
    StudyBuilderFactory_initFields();
    return StudyBuilderFactory$WILDERS_SMOOTHING_instance;
  }
  function StudyBuilderFactory$StudyBuilderFactory$WILLIAMS_ALLIGATOR_init$ObjectLiteral() {
  }
  StudyBuilderFactory$StudyBuilderFactory$WILLIAMS_ALLIGATOR_init$ObjectLiteral.prototype.create = function () {
    return new WilliamsAlligator();
  };
  StudyBuilderFactory$StudyBuilderFactory$WILLIAMS_ALLIGATOR_init$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [StudyBuilderFactory$Factory]
  };
  var StudyBuilderFactory$WILLIAMS_ALLIGATOR_instance;
  function StudyBuilderFactory$WILLIAMS_ALLIGATOR_getInstance() {
    StudyBuilderFactory_initFields();
    return StudyBuilderFactory$WILLIAMS_ALLIGATOR_instance;
  }
  function StudyBuilderFactory$StudyBuilderFactory$WILLIAMS_PERCENT_RANGE_init$ObjectLiteral() {
  }
  StudyBuilderFactory$StudyBuilderFactory$WILLIAMS_PERCENT_RANGE_init$ObjectLiteral.prototype.create = function () {
    return new WilliamsPercentRange();
  };
  StudyBuilderFactory$StudyBuilderFactory$WILLIAMS_PERCENT_RANGE_init$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [StudyBuilderFactory$Factory]
  };
  var StudyBuilderFactory$WILLIAMS_PERCENT_RANGE_instance;
  function StudyBuilderFactory$WILLIAMS_PERCENT_RANGE_getInstance() {
    StudyBuilderFactory_initFields();
    return StudyBuilderFactory$WILLIAMS_PERCENT_RANGE_instance;
  }
  function StudyBuilderFactory$StudyBuilderFactory$WMA_init$ObjectLiteral() {
  }
  StudyBuilderFactory$StudyBuilderFactory$WMA_init$ObjectLiteral.prototype.create = function () {
    return new WMA();
  };
  StudyBuilderFactory$StudyBuilderFactory$WMA_init$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [StudyBuilderFactory$Factory]
  };
  var StudyBuilderFactory$WMA_instance;
  function StudyBuilderFactory$WMA_getInstance() {
    StudyBuilderFactory_initFields();
    return StudyBuilderFactory$WMA_instance;
  }
  function StudyBuilderFactory$StudyBuilderFactory$ZIG_ZAG_init$ObjectLiteral() {
  }
  StudyBuilderFactory$StudyBuilderFactory$ZIG_ZAG_init$ObjectLiteral.prototype.create = function () {
    return new ZigZag();
  };
  StudyBuilderFactory$StudyBuilderFactory$ZIG_ZAG_init$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [StudyBuilderFactory$Factory]
  };
  var StudyBuilderFactory$ZIG_ZAG_instance;
  function StudyBuilderFactory$ZIG_ZAG_getInstance() {
    StudyBuilderFactory_initFields();
    return StudyBuilderFactory$ZIG_ZAG_instance;
  }
  function StudyBuilderFactory$StudyBuilderFactory$COMPARATIVE_init$ObjectLiteral() {
  }
  StudyBuilderFactory$StudyBuilderFactory$COMPARATIVE_init$ObjectLiteral.prototype.create = function () {
    return new Comparative();
  };
  StudyBuilderFactory$StudyBuilderFactory$COMPARATIVE_init$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [StudyBuilderFactory$Factory]
  };
  var StudyBuilderFactory$COMPARATIVE_instance;
  function StudyBuilderFactory$COMPARATIVE_getInstance() {
    StudyBuilderFactory_initFields();
    return StudyBuilderFactory$COMPARATIVE_instance;
  }
  function StudyBuilderFactory$StudyBuilderFactory$IMPLIED_VOLATILITY_init$ObjectLiteral() {
  }
  StudyBuilderFactory$StudyBuilderFactory$IMPLIED_VOLATILITY_init$ObjectLiteral.prototype.create = function () {
    return new ImpliedVolatility();
  };
  StudyBuilderFactory$StudyBuilderFactory$IMPLIED_VOLATILITY_init$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [StudyBuilderFactory$Factory]
  };
  var StudyBuilderFactory$IMPLIED_VOLATILITY_instance;
  function StudyBuilderFactory$IMPLIED_VOLATILITY_getInstance() {
    StudyBuilderFactory_initFields();
    return StudyBuilderFactory$IMPLIED_VOLATILITY_instance;
  }
  function StudyBuilderFactory$StudyBuilderFactory$IMPLIED_VOLATILITY_GAUGE_init$ObjectLiteral() {
  }
  StudyBuilderFactory$StudyBuilderFactory$IMPLIED_VOLATILITY_GAUGE_init$ObjectLiteral.prototype.create = function () {
    return new ImpliedVolatilityGauge();
  };
  StudyBuilderFactory$StudyBuilderFactory$IMPLIED_VOLATILITY_GAUGE_init$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [StudyBuilderFactory$Factory]
  };
  var StudyBuilderFactory$IMPLIED_VOLATILITY_GAUGE_instance;
  function StudyBuilderFactory$IMPLIED_VOLATILITY_GAUGE_getInstance() {
    StudyBuilderFactory_initFields();
    return StudyBuilderFactory$IMPLIED_VOLATILITY_GAUGE_instance;
  }
  function StudyBuilderFactory$StudyBuilderFactory$TD_SEQUENTIAL_init$ObjectLiteral() {
  }
  StudyBuilderFactory$StudyBuilderFactory$TD_SEQUENTIAL_init$ObjectLiteral.prototype.create = function () {
    return new TDSequential();
  };
  StudyBuilderFactory$StudyBuilderFactory$TD_SEQUENTIAL_init$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [StudyBuilderFactory$Factory]
  };
  var StudyBuilderFactory$TD_SEQUENTIAL_instance;
  function StudyBuilderFactory$TD_SEQUENTIAL_getInstance() {
    StudyBuilderFactory_initFields();
    return StudyBuilderFactory$TD_SEQUENTIAL_instance;
  }
  function StudyBuilderFactory$StudyBuilderFactory$GTRAP_init$ObjectLiteral() {
  }
  StudyBuilderFactory$StudyBuilderFactory$GTRAP_init$ObjectLiteral.prototype.create = function () {
    return new GTRAP();
  };
  StudyBuilderFactory$StudyBuilderFactory$GTRAP_init$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [StudyBuilderFactory$Factory]
  };
  var StudyBuilderFactory$GTRAP_instance;
  function StudyBuilderFactory$GTRAP_getInstance() {
    StudyBuilderFactory_initFields();
    return StudyBuilderFactory$GTRAP_instance;
  }
  function StudyBuilderFactory$StudyBuilderFactory$KAUFMAN_MOVING_AVERAGE_init$ObjectLiteral() {
  }
  StudyBuilderFactory$StudyBuilderFactory$KAUFMAN_MOVING_AVERAGE_init$ObjectLiteral.prototype.create = function () {
    return new KaufmanMovingAverage();
  };
  StudyBuilderFactory$StudyBuilderFactory$KAUFMAN_MOVING_AVERAGE_init$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [StudyBuilderFactory$Factory]
  };
  var StudyBuilderFactory$KAUFMAN_MOVING_AVERAGE_instance;
  function StudyBuilderFactory$KAUFMAN_MOVING_AVERAGE_getInstance() {
    StudyBuilderFactory_initFields();
    return StudyBuilderFactory$KAUFMAN_MOVING_AVERAGE_instance;
  }
  function StudyBuilderFactory$StudyBuilderFactory$WAVE_TREND_WITH_CROSSES_init$ObjectLiteral() {
  }
  StudyBuilderFactory$StudyBuilderFactory$WAVE_TREND_WITH_CROSSES_init$ObjectLiteral.prototype.create = function () {
    return new WaveTrendWithCrosses();
  };
  StudyBuilderFactory$StudyBuilderFactory$WAVE_TREND_WITH_CROSSES_init$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [StudyBuilderFactory$Factory]
  };
  var StudyBuilderFactory$WAVE_TREND_WITH_CROSSES_instance;
  function StudyBuilderFactory$WAVE_TREND_WITH_CROSSES_getInstance() {
    StudyBuilderFactory_initFields();
    return StudyBuilderFactory$WAVE_TREND_WITH_CROSSES_instance;
  }
  function StudyBuilderFactory$StudyBuilderFactory$FIBONACCI_BOLLINGER_BANDS_init$ObjectLiteral() {
  }
  StudyBuilderFactory$StudyBuilderFactory$FIBONACCI_BOLLINGER_BANDS_init$ObjectLiteral.prototype.create = function () {
    return new FibonacciBollingerBands();
  };
  StudyBuilderFactory$StudyBuilderFactory$FIBONACCI_BOLLINGER_BANDS_init$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [StudyBuilderFactory$Factory]
  };
  var StudyBuilderFactory$FIBONACCI_BOLLINGER_BANDS_instance;
  function StudyBuilderFactory$FIBONACCI_BOLLINGER_BANDS_getInstance() {
    StudyBuilderFactory_initFields();
    return StudyBuilderFactory$FIBONACCI_BOLLINGER_BANDS_instance;
  }
  function StudyBuilderFactory$StudyBuilderFactory$WAVE_TREND_init$ObjectLiteral() {
  }
  StudyBuilderFactory$StudyBuilderFactory$WAVE_TREND_init$ObjectLiteral.prototype.create = function () {
    return new WaveTrend();
  };
  StudyBuilderFactory$StudyBuilderFactory$WAVE_TREND_init$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [StudyBuilderFactory$Factory]
  };
  var StudyBuilderFactory$WAVE_TREND_instance;
  function StudyBuilderFactory$WAVE_TREND_getInstance() {
    StudyBuilderFactory_initFields();
    return StudyBuilderFactory$WAVE_TREND_instance;
  }
  StudyBuilderFactory.prototype.create = function () {
    return this.factory_520jjk$_0.create();
  };
  function StudyBuilderFactory$Factory() {
  }
  StudyBuilderFactory$Factory.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Factory',
    interfaces: []
  };
  function StudyBuilderFactory$Companion() {
    StudyBuilderFactory$Companion_instance = this;
    this.factoryMap_0 = HashMap_init();
    var tmp$, tmp$_0;
    tmp$ = StudyBuilderFactory$values();
    for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
      var studyBuilderFactory = tmp$[tmp$_0];
      var tmp$_1 = this.factoryMap_0;
      var key = studyBuilderFactory.id.toUpperCase();
      tmp$_1.put_xwzc9p$(key, studyBuilderFactory);
    }
  }
  StudyBuilderFactory$Companion.prototype.findBuilderFactory_61zpoe$ = function (id) {
    return ensureNotNull(this.factoryMap_0.get_11rb$(id.toUpperCase()));
  };
  StudyBuilderFactory$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var StudyBuilderFactory$Companion_instance = null;
  function StudyBuilderFactory$Companion_getInstance() {
    StudyBuilderFactory_initFields();
    if (StudyBuilderFactory$Companion_instance === null) {
      new StudyBuilderFactory$Companion();
    }
    return StudyBuilderFactory$Companion_instance;
  }
  StudyBuilderFactory.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StudyBuilderFactory',
    interfaces: [Enum]
  };
  function StudyBuilderFactory$values() {
    return [StudyBuilderFactory$WILLIAMS_FRACTAL_getInstance(), StudyBuilderFactory$PERCENTAGE_PRICE_OSCILLATOR_getInstance(), StudyBuilderFactory$DYNAMIC_MOMENTUM_INDEX_getInstance(), StudyBuilderFactory$WILLIAMS_AD_getInstance(), StudyBuilderFactory$PRICE_OSCILLATOR_getInstance(), StudyBuilderFactory$PERCENT_CHANGE_getInstance(), StudyBuilderFactory$LINEAR_REGRESSION_SLOPE_getInstance(), StudyBuilderFactory$LINEAR_REGRESSION_CHANNEL_getInstance(), StudyBuilderFactory$COMMODITY_SELECTION_getInstance(), StudyBuilderFactory$LINEAR_REGRESSION_getInstance(), StudyBuilderFactory$INERTIA_getInstance(), StudyBuilderFactory$KRI_getInstance(), StudyBuilderFactory$RANK_CORRELATION_INDEX_getInstance(), StudyBuilderFactory$SWING_ACCUMULATION_getInstance(), StudyBuilderFactory$AROON_OSCILLATOR_getInstance(), StudyBuilderFactory$AROON_getInstance(), StudyBuilderFactory$SWING_INDEX_getInstance(), StudyBuilderFactory$STARCBANDS_getInstance(), StudyBuilderFactory$FORECAST_OSCILLATOR_getInstance(), StudyBuilderFactory$KELTNER_CHANNELS_getInstance(), StudyBuilderFactory$TEMA_getInstance(), StudyBuilderFactory$TYPICAL_PRICE_getInstance(), StudyBuilderFactory$DEMA_getInstance(), StudyBuilderFactory$MEDIAN_PRICE_getInstance(), StudyBuilderFactory$FULL_STOCHASTIC_getInstance(), StudyBuilderFactory$STANDARD_ERROR_BANDS_getInstance(), StudyBuilderFactory$PERCENT_OF_RESISTANCE_getInstance(), StudyBuilderFactory$CENTER_OF_GRAVITY_OSCILLATOR_getInstance(), StudyBuilderFactory$ACCELERATION_DECELERATION_getInstance(), StudyBuilderFactory$ACCUMULATION_DISTRIBUTION_getInstance(), StudyBuilderFactory$ADX_getInstance(), StudyBuilderFactory$ADXR_getInstance(), StudyBuilderFactory$AVERAGE_TRUE_RANGE_getInstance(), StudyBuilderFactory$AWESOME_OSCILLATOR_getInstance(), StudyBuilderFactory$BOLLINGER_BANDS_getInstance(), StudyBuilderFactory$CCI_getInstance(), StudyBuilderFactory$CHAIKIN_OSCILLATOR_getInstance(), StudyBuilderFactory$CHAIKIN_VOLATILITY_getInstance(), StudyBuilderFactory$CHANDE_MOMENTUM_OSCILLATOR_getInstance(), StudyBuilderFactory$DE_MARKER_getInstance(), StudyBuilderFactory$DETRENDED_PRICE_OSC_getInstance(), StudyBuilderFactory$DMI_getInstance(), StudyBuilderFactory$ELDER_getInstance(), StudyBuilderFactory$EMA_getInstance(), StudyBuilderFactory$ENVELOPE_EMA_getInstance(), StudyBuilderFactory$ENVELOPE_SMA_getInstance(), StudyBuilderFactory$ENVELOPE_SMMA_getInstance(), StudyBuilderFactory$ENVELOPE_WMA_getInstance(), StudyBuilderFactory$FAST_STOCHASTIC_getInstance(), StudyBuilderFactory$FORCE_INDEX_getInstance(), StudyBuilderFactory$GATOR_OSCILLATOR_getInstance(), StudyBuilderFactory$HLVOLATILITY_getInstance(), StudyBuilderFactory$ICHIMOKU_getInstance(), StudyBuilderFactory$INTRADAY_MOMENTUM_INDEX_getInstance(), StudyBuilderFactory$MACD_getInstance(), StudyBuilderFactory$MARKET_FACILITATION_INDEX_getInstance(), StudyBuilderFactory$MASS_INDEX_getInstance(), StudyBuilderFactory$MOMENTUM_getInstance(), StudyBuilderFactory$MONEY_FLOW_INDEX_getInstance(), StudyBuilderFactory$NEGATIVE_VOLUME_INDEX_getInstance(), StudyBuilderFactory$ON_BALANCE_VOLUME_getInstance(), StudyBuilderFactory$DAY_OPEN_CLOSE_getInstance(), StudyBuilderFactory$OSCILLATOR_getInstance(), StudyBuilderFactory$PARABOLIC_SAR_getInstance(), StudyBuilderFactory$PIVOT_POINTS_getInstance(), StudyBuilderFactory$PRICE_CHANNEL_getInstance(), StudyBuilderFactory$PRICE_VOLUME_TREND_getInstance(), StudyBuilderFactory$RELATIVE_STRENGTH_INDEX_getInstance(), StudyBuilderFactory$RELATIVE_VIGOR_INDEX_getInstance(), StudyBuilderFactory$RELATIVE_VIGOR_INDEX_SMA_getInstance(), StudyBuilderFactory$RELATIVE_VOLATILITY_INDEX_getInstance(), StudyBuilderFactory$ROC_getInstance(), StudyBuilderFactory$SLOW_STOCHASTIC_getInstance(), StudyBuilderFactory$SMA_getInstance(), StudyBuilderFactory$SMMA_getInstance(), StudyBuilderFactory$SROC_getInstance(), StudyBuilderFactory$SCHAFF_TREND_CYCLE_getInstance(), StudyBuilderFactory$STANDARD_DEVIATION_CHANNEL_getInstance(), StudyBuilderFactory$STANDARD_DEVIATION_getInstance(), StudyBuilderFactory$STD_DEV_VOLATILITY_getInstance(), StudyBuilderFactory$TIME_SERIES_FORECAST_getInstance(), StudyBuilderFactory$TMA_getInstance(), StudyBuilderFactory$TRIPLE_EMA_getInstance(), StudyBuilderFactory$TRUE_STRENGTH_INDEX_getInstance(), StudyBuilderFactory$ULTIMATE_OSCILLATOR_getInstance(), StudyBuilderFactory$VERTICAL_HORIZONTAL_FILTER_getInstance(), StudyBuilderFactory$VWAP_getInstance(), StudyBuilderFactory$WEIGHTED_CLOSE_getInstance(), StudyBuilderFactory$WILDERS_SMOOTHING_getInstance(), StudyBuilderFactory$WILLIAMS_ALLIGATOR_getInstance(), StudyBuilderFactory$WILLIAMS_PERCENT_RANGE_getInstance(), StudyBuilderFactory$WMA_getInstance(), StudyBuilderFactory$ZIG_ZAG_getInstance(), StudyBuilderFactory$COMPARATIVE_getInstance(), StudyBuilderFactory$IMPLIED_VOLATILITY_getInstance(), StudyBuilderFactory$IMPLIED_VOLATILITY_GAUGE_getInstance(), StudyBuilderFactory$TD_SEQUENTIAL_getInstance(), StudyBuilderFactory$GTRAP_getInstance(), StudyBuilderFactory$KAUFMAN_MOVING_AVERAGE_getInstance(), StudyBuilderFactory$WAVE_TREND_WITH_CROSSES_getInstance(), StudyBuilderFactory$FIBONACCI_BOLLINGER_BANDS_getInstance(), StudyBuilderFactory$WAVE_TREND_getInstance()];
  }
  StudyBuilderFactory.values = StudyBuilderFactory$values;
  function StudyBuilderFactory$valueOf(name) {
    switch (name) {
      case 'WILLIAMS_FRACTAL':
        return StudyBuilderFactory$WILLIAMS_FRACTAL_getInstance();
      case 'PERCENTAGE_PRICE_OSCILLATOR':
        return StudyBuilderFactory$PERCENTAGE_PRICE_OSCILLATOR_getInstance();
      case 'DYNAMIC_MOMENTUM_INDEX':
        return StudyBuilderFactory$DYNAMIC_MOMENTUM_INDEX_getInstance();
      case 'WILLIAMS_AD':
        return StudyBuilderFactory$WILLIAMS_AD_getInstance();
      case 'PRICE_OSCILLATOR':
        return StudyBuilderFactory$PRICE_OSCILLATOR_getInstance();
      case 'PERCENT_CHANGE':
        return StudyBuilderFactory$PERCENT_CHANGE_getInstance();
      case 'LINEAR_REGRESSION_SLOPE':
        return StudyBuilderFactory$LINEAR_REGRESSION_SLOPE_getInstance();
      case 'LINEAR_REGRESSION_CHANNEL':
        return StudyBuilderFactory$LINEAR_REGRESSION_CHANNEL_getInstance();
      case 'COMMODITY_SELECTION':
        return StudyBuilderFactory$COMMODITY_SELECTION_getInstance();
      case 'LINEAR_REGRESSION':
        return StudyBuilderFactory$LINEAR_REGRESSION_getInstance();
      case 'INERTIA':
        return StudyBuilderFactory$INERTIA_getInstance();
      case 'KRI':
        return StudyBuilderFactory$KRI_getInstance();
      case 'RANK_CORRELATION_INDEX':
        return StudyBuilderFactory$RANK_CORRELATION_INDEX_getInstance();
      case 'SWING_ACCUMULATION':
        return StudyBuilderFactory$SWING_ACCUMULATION_getInstance();
      case 'AROON_OSCILLATOR':
        return StudyBuilderFactory$AROON_OSCILLATOR_getInstance();
      case 'AROON':
        return StudyBuilderFactory$AROON_getInstance();
      case 'SWING_INDEX':
        return StudyBuilderFactory$SWING_INDEX_getInstance();
      case 'STARCBANDS':
        return StudyBuilderFactory$STARCBANDS_getInstance();
      case 'FORECAST_OSCILLATOR':
        return StudyBuilderFactory$FORECAST_OSCILLATOR_getInstance();
      case 'KELTNER_CHANNELS':
        return StudyBuilderFactory$KELTNER_CHANNELS_getInstance();
      case 'TEMA':
        return StudyBuilderFactory$TEMA_getInstance();
      case 'TYPICAL_PRICE':
        return StudyBuilderFactory$TYPICAL_PRICE_getInstance();
      case 'DEMA':
        return StudyBuilderFactory$DEMA_getInstance();
      case 'MEDIAN_PRICE':
        return StudyBuilderFactory$MEDIAN_PRICE_getInstance();
      case 'FULL_STOCHASTIC':
        return StudyBuilderFactory$FULL_STOCHASTIC_getInstance();
      case 'STANDARD_ERROR_BANDS':
        return StudyBuilderFactory$STANDARD_ERROR_BANDS_getInstance();
      case 'PERCENT_OF_RESISTANCE':
        return StudyBuilderFactory$PERCENT_OF_RESISTANCE_getInstance();
      case 'CENTER_OF_GRAVITY_OSCILLATOR':
        return StudyBuilderFactory$CENTER_OF_GRAVITY_OSCILLATOR_getInstance();
      case 'ACCELERATION_DECELERATION':
        return StudyBuilderFactory$ACCELERATION_DECELERATION_getInstance();
      case 'ACCUMULATION_DISTRIBUTION':
        return StudyBuilderFactory$ACCUMULATION_DISTRIBUTION_getInstance();
      case 'ADX':
        return StudyBuilderFactory$ADX_getInstance();
      case 'ADXR':
        return StudyBuilderFactory$ADXR_getInstance();
      case 'AVERAGE_TRUE_RANGE':
        return StudyBuilderFactory$AVERAGE_TRUE_RANGE_getInstance();
      case 'AWESOME_OSCILLATOR':
        return StudyBuilderFactory$AWESOME_OSCILLATOR_getInstance();
      case 'BOLLINGER_BANDS':
        return StudyBuilderFactory$BOLLINGER_BANDS_getInstance();
      case 'CCI':
        return StudyBuilderFactory$CCI_getInstance();
      case 'CHAIKIN_OSCILLATOR':
        return StudyBuilderFactory$CHAIKIN_OSCILLATOR_getInstance();
      case 'CHAIKIN_VOLATILITY':
        return StudyBuilderFactory$CHAIKIN_VOLATILITY_getInstance();
      case 'CHANDE_MOMENTUM_OSCILLATOR':
        return StudyBuilderFactory$CHANDE_MOMENTUM_OSCILLATOR_getInstance();
      case 'DE_MARKER':
        return StudyBuilderFactory$DE_MARKER_getInstance();
      case 'DETRENDED_PRICE_OSC':
        return StudyBuilderFactory$DETRENDED_PRICE_OSC_getInstance();
      case 'DMI':
        return StudyBuilderFactory$DMI_getInstance();
      case 'ELDER':
        return StudyBuilderFactory$ELDER_getInstance();
      case 'EMA':
        return StudyBuilderFactory$EMA_getInstance();
      case 'ENVELOPE_EMA':
        return StudyBuilderFactory$ENVELOPE_EMA_getInstance();
      case 'ENVELOPE_SMA':
        return StudyBuilderFactory$ENVELOPE_SMA_getInstance();
      case 'ENVELOPE_SMMA':
        return StudyBuilderFactory$ENVELOPE_SMMA_getInstance();
      case 'ENVELOPE_WMA':
        return StudyBuilderFactory$ENVELOPE_WMA_getInstance();
      case 'FAST_STOCHASTIC':
        return StudyBuilderFactory$FAST_STOCHASTIC_getInstance();
      case 'FORCE_INDEX':
        return StudyBuilderFactory$FORCE_INDEX_getInstance();
      case 'GATOR_OSCILLATOR':
        return StudyBuilderFactory$GATOR_OSCILLATOR_getInstance();
      case 'HLVOLATILITY':
        return StudyBuilderFactory$HLVOLATILITY_getInstance();
      case 'ICHIMOKU':
        return StudyBuilderFactory$ICHIMOKU_getInstance();
      case 'INTRADAY_MOMENTUM_INDEX':
        return StudyBuilderFactory$INTRADAY_MOMENTUM_INDEX_getInstance();
      case 'MACD':
        return StudyBuilderFactory$MACD_getInstance();
      case 'MARKET_FACILITATION_INDEX':
        return StudyBuilderFactory$MARKET_FACILITATION_INDEX_getInstance();
      case 'MASS_INDEX':
        return StudyBuilderFactory$MASS_INDEX_getInstance();
      case 'MOMENTUM':
        return StudyBuilderFactory$MOMENTUM_getInstance();
      case 'MONEY_FLOW_INDEX':
        return StudyBuilderFactory$MONEY_FLOW_INDEX_getInstance();
      case 'NEGATIVE_VOLUME_INDEX':
        return StudyBuilderFactory$NEGATIVE_VOLUME_INDEX_getInstance();
      case 'ON_BALANCE_VOLUME':
        return StudyBuilderFactory$ON_BALANCE_VOLUME_getInstance();
      case 'DAY_OPEN_CLOSE':
        return StudyBuilderFactory$DAY_OPEN_CLOSE_getInstance();
      case 'OSCILLATOR':
        return StudyBuilderFactory$OSCILLATOR_getInstance();
      case 'PARABOLIC_SAR':
        return StudyBuilderFactory$PARABOLIC_SAR_getInstance();
      case 'PIVOT_POINTS':
        return StudyBuilderFactory$PIVOT_POINTS_getInstance();
      case 'PRICE_CHANNEL':
        return StudyBuilderFactory$PRICE_CHANNEL_getInstance();
      case 'PRICE_VOLUME_TREND':
        return StudyBuilderFactory$PRICE_VOLUME_TREND_getInstance();
      case 'RELATIVE_STRENGTH_INDEX':
        return StudyBuilderFactory$RELATIVE_STRENGTH_INDEX_getInstance();
      case 'RELATIVE_VIGOR_INDEX':
        return StudyBuilderFactory$RELATIVE_VIGOR_INDEX_getInstance();
      case 'RELATIVE_VIGOR_INDEX_SMA':
        return StudyBuilderFactory$RELATIVE_VIGOR_INDEX_SMA_getInstance();
      case 'RELATIVE_VOLATILITY_INDEX':
        return StudyBuilderFactory$RELATIVE_VOLATILITY_INDEX_getInstance();
      case 'ROC':
        return StudyBuilderFactory$ROC_getInstance();
      case 'SLOW_STOCHASTIC':
        return StudyBuilderFactory$SLOW_STOCHASTIC_getInstance();
      case 'SMA':
        return StudyBuilderFactory$SMA_getInstance();
      case 'SMMA':
        return StudyBuilderFactory$SMMA_getInstance();
      case 'SROC':
        return StudyBuilderFactory$SROC_getInstance();
      case 'SCHAFF_TREND_CYCLE':
        return StudyBuilderFactory$SCHAFF_TREND_CYCLE_getInstance();
      case 'STANDARD_DEVIATION_CHANNEL':
        return StudyBuilderFactory$STANDARD_DEVIATION_CHANNEL_getInstance();
      case 'STANDARD_DEVIATION':
        return StudyBuilderFactory$STANDARD_DEVIATION_getInstance();
      case 'STD_DEV_VOLATILITY':
        return StudyBuilderFactory$STD_DEV_VOLATILITY_getInstance();
      case 'TIME_SERIES_FORECAST':
        return StudyBuilderFactory$TIME_SERIES_FORECAST_getInstance();
      case 'TMA':
        return StudyBuilderFactory$TMA_getInstance();
      case 'TRIPLE_EMA':
        return StudyBuilderFactory$TRIPLE_EMA_getInstance();
      case 'TRUE_STRENGTH_INDEX':
        return StudyBuilderFactory$TRUE_STRENGTH_INDEX_getInstance();
      case 'ULTIMATE_OSCILLATOR':
        return StudyBuilderFactory$ULTIMATE_OSCILLATOR_getInstance();
      case 'VERTICAL_HORIZONTAL_FILTER':
        return StudyBuilderFactory$VERTICAL_HORIZONTAL_FILTER_getInstance();
      case 'VWAP':
        return StudyBuilderFactory$VWAP_getInstance();
      case 'WEIGHTED_CLOSE':
        return StudyBuilderFactory$WEIGHTED_CLOSE_getInstance();
      case 'WILDERS_SMOOTHING':
        return StudyBuilderFactory$WILDERS_SMOOTHING_getInstance();
      case 'WILLIAMS_ALLIGATOR':
        return StudyBuilderFactory$WILLIAMS_ALLIGATOR_getInstance();
      case 'WILLIAMS_PERCENT_RANGE':
        return StudyBuilderFactory$WILLIAMS_PERCENT_RANGE_getInstance();
      case 'WMA':
        return StudyBuilderFactory$WMA_getInstance();
      case 'ZIG_ZAG':
        return StudyBuilderFactory$ZIG_ZAG_getInstance();
      case 'COMPARATIVE':
        return StudyBuilderFactory$COMPARATIVE_getInstance();
      case 'IMPLIED_VOLATILITY':
        return StudyBuilderFactory$IMPLIED_VOLATILITY_getInstance();
      case 'IMPLIED_VOLATILITY_GAUGE':
        return StudyBuilderFactory$IMPLIED_VOLATILITY_GAUGE_getInstance();
      case 'TD_SEQUENTIAL':
        return StudyBuilderFactory$TD_SEQUENTIAL_getInstance();
      case 'GTRAP':
        return StudyBuilderFactory$GTRAP_getInstance();
      case 'KAUFMAN_MOVING_AVERAGE':
        return StudyBuilderFactory$KAUFMAN_MOVING_AVERAGE_getInstance();
      case 'WAVE_TREND_WITH_CROSSES':
        return StudyBuilderFactory$WAVE_TREND_WITH_CROSSES_getInstance();
      case 'FIBONACCI_BOLLINGER_BANDS':
        return StudyBuilderFactory$FIBONACCI_BOLLINGER_BANDS_getInstance();
      case 'WAVE_TREND':
        return StudyBuilderFactory$WAVE_TREND_getInstance();
      default:throwISE('No enum constant com.devexperts.dxst.builders.StudyBuilderFactory.' + name);
    }
  }
  StudyBuilderFactory.valueOf_61zpoe$ = StudyBuilderFactory$valueOf;
  function SwingAccumulation() {
    SwingAccumulation$Companion_getInstance();
    StudyBuilder.call(this);
  }
  SwingAccumulation.prototype.validateParameters_x7u0o8$ = function (params) {
    StudyBuilder.prototype.validateDouble_ez016i$.call(this, params, SwingAccumulation$Companion_getInstance().LIMIT);
  };
  SwingAccumulation.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    var si = SwingIndex$Companion_getInstance().constructSwingIndex_c6yk66$(data, params);
    return listOf([new CumulativeSumFunction(si), new ZeroFunction()]);
  };
  function SwingAccumulation$Companion() {
    SwingAccumulation$Companion_instance = this;
    this.LIMIT = 'limit';
  }
  SwingAccumulation$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var SwingAccumulation$Companion_instance = null;
  function SwingAccumulation$Companion_getInstance() {
    if (SwingAccumulation$Companion_instance === null) {
      new SwingAccumulation$Companion();
    }
    return SwingAccumulation$Companion_instance;
  }
  SwingAccumulation.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SwingAccumulation',
    interfaces: [StudyBuilder]
  };
  function SwingIndex() {
    SwingIndex$Companion_getInstance();
    StudyBuilder.call(this);
  }
  SwingIndex.prototype.validateParameters_x7u0o8$ = function (params) {
    StudyBuilder.prototype.validateDouble_ez016i$.call(this, params, SwingIndex$Companion_getInstance().LIMIT);
  };
  SwingIndex.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    var si = SwingIndex$Companion_getInstance().constructSwingIndex_c6yk66$(data, params);
    return listOf([si, new ZeroFunction()]);
  };
  function SwingIndex$PriceValue(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function SwingIndex$PriceValue_initFields() {
    SwingIndex$PriceValue_initFields = function () {
    };
    SwingIndex$PriceValue$TODAY_CLOSE_instance = new SwingIndex$PriceValue('TODAY_CLOSE', 0);
    SwingIndex$PriceValue$TODAY_OPEN_instance = new SwingIndex$PriceValue('TODAY_OPEN', 1);
    SwingIndex$PriceValue$TODAY_HIGH_instance = new SwingIndex$PriceValue('TODAY_HIGH', 2);
    SwingIndex$PriceValue$TODAY_LOW_instance = new SwingIndex$PriceValue('TODAY_LOW', 3);
    SwingIndex$PriceValue$YESTERDAY_OPEN_instance = new SwingIndex$PriceValue('YESTERDAY_OPEN', 4);
    SwingIndex$PriceValue$YESTERDAY_CLOSE_instance = new SwingIndex$PriceValue('YESTERDAY_CLOSE', 5);
    SwingIndex$PriceValue$YESTERDAY_HIGH_instance = new SwingIndex$PriceValue('YESTERDAY_HIGH', 6);
    SwingIndex$PriceValue$YESTERDAY_LOW_instance = new SwingIndex$PriceValue('YESTERDAY_LOW', 7);
  }
  var SwingIndex$PriceValue$TODAY_CLOSE_instance;
  function SwingIndex$PriceValue$TODAY_CLOSE_getInstance() {
    SwingIndex$PriceValue_initFields();
    return SwingIndex$PriceValue$TODAY_CLOSE_instance;
  }
  var SwingIndex$PriceValue$TODAY_OPEN_instance;
  function SwingIndex$PriceValue$TODAY_OPEN_getInstance() {
    SwingIndex$PriceValue_initFields();
    return SwingIndex$PriceValue$TODAY_OPEN_instance;
  }
  var SwingIndex$PriceValue$TODAY_HIGH_instance;
  function SwingIndex$PriceValue$TODAY_HIGH_getInstance() {
    SwingIndex$PriceValue_initFields();
    return SwingIndex$PriceValue$TODAY_HIGH_instance;
  }
  var SwingIndex$PriceValue$TODAY_LOW_instance;
  function SwingIndex$PriceValue$TODAY_LOW_getInstance() {
    SwingIndex$PriceValue_initFields();
    return SwingIndex$PriceValue$TODAY_LOW_instance;
  }
  var SwingIndex$PriceValue$YESTERDAY_OPEN_instance;
  function SwingIndex$PriceValue$YESTERDAY_OPEN_getInstance() {
    SwingIndex$PriceValue_initFields();
    return SwingIndex$PriceValue$YESTERDAY_OPEN_instance;
  }
  var SwingIndex$PriceValue$YESTERDAY_CLOSE_instance;
  function SwingIndex$PriceValue$YESTERDAY_CLOSE_getInstance() {
    SwingIndex$PriceValue_initFields();
    return SwingIndex$PriceValue$YESTERDAY_CLOSE_instance;
  }
  var SwingIndex$PriceValue$YESTERDAY_HIGH_instance;
  function SwingIndex$PriceValue$YESTERDAY_HIGH_getInstance() {
    SwingIndex$PriceValue_initFields();
    return SwingIndex$PriceValue$YESTERDAY_HIGH_instance;
  }
  var SwingIndex$PriceValue$YESTERDAY_LOW_instance;
  function SwingIndex$PriceValue$YESTERDAY_LOW_getInstance() {
    SwingIndex$PriceValue_initFields();
    return SwingIndex$PriceValue$YESTERDAY_LOW_instance;
  }
  SwingIndex$PriceValue.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PriceValue',
    interfaces: [Enum]
  };
  function SwingIndex$PriceValue$values() {
    return [SwingIndex$PriceValue$TODAY_CLOSE_getInstance(), SwingIndex$PriceValue$TODAY_OPEN_getInstance(), SwingIndex$PriceValue$TODAY_HIGH_getInstance(), SwingIndex$PriceValue$TODAY_LOW_getInstance(), SwingIndex$PriceValue$YESTERDAY_OPEN_getInstance(), SwingIndex$PriceValue$YESTERDAY_CLOSE_getInstance(), SwingIndex$PriceValue$YESTERDAY_HIGH_getInstance(), SwingIndex$PriceValue$YESTERDAY_LOW_getInstance()];
  }
  SwingIndex$PriceValue.values = SwingIndex$PriceValue$values;
  function SwingIndex$PriceValue$valueOf(name) {
    switch (name) {
      case 'TODAY_CLOSE':
        return SwingIndex$PriceValue$TODAY_CLOSE_getInstance();
      case 'TODAY_OPEN':
        return SwingIndex$PriceValue$TODAY_OPEN_getInstance();
      case 'TODAY_HIGH':
        return SwingIndex$PriceValue$TODAY_HIGH_getInstance();
      case 'TODAY_LOW':
        return SwingIndex$PriceValue$TODAY_LOW_getInstance();
      case 'YESTERDAY_OPEN':
        return SwingIndex$PriceValue$YESTERDAY_OPEN_getInstance();
      case 'YESTERDAY_CLOSE':
        return SwingIndex$PriceValue$YESTERDAY_CLOSE_getInstance();
      case 'YESTERDAY_HIGH':
        return SwingIndex$PriceValue$YESTERDAY_HIGH_getInstance();
      case 'YESTERDAY_LOW':
        return SwingIndex$PriceValue$YESTERDAY_LOW_getInstance();
      default:throwISE('No enum constant com.devexperts.dxst.builders.SwingIndex.PriceValue.' + name);
    }
  }
  SwingIndex$PriceValue.valueOf_61zpoe$ = SwingIndex$PriceValue$valueOf;
  function SwingIndex$Companion() {
    SwingIndex$Companion_instance = this;
    this.LIMIT = 'limit';
  }
  SwingIndex$Companion.prototype.constructSwingIndex_c6yk66$ = function (data, params) {
    var tmp$;
    var limit = typeof (tmp$ = params.get_11rb$(this.LIMIT)) === 'number' ? tmp$ : throwCCE();
    var hcprev = new AbsFunction(this.getArithmeticPriceFunction_0(SwingIndex$PriceValue$TODAY_HIGH_getInstance(), SwingIndex$PriceValue$YESTERDAY_CLOSE_getInstance(), ArithmeticOperation$MINUS_getInstance(), data));
    var lcprev = new AbsFunction(this.getArithmeticPriceFunction_0(SwingIndex$PriceValue$TODAY_LOW_getInstance(), SwingIndex$PriceValue$YESTERDAY_CLOSE_getInstance(), ArithmeticOperation$MINUS_getInstance(), data));
    var upper = new MaxValueFunction([new AbsFunction(hcprev), new AbsFunction(lcprev)]);
    var formula = this.getFormula_0(data);
    var ratio = new SwingIndexRatio(data);
    var c50 = new ConstantFunction(50.0);
    var formulaDivRatio = new ArithmeticFunction(formula, ratio, ArithmeticOperation$DIV_ZERO_getInstance());
    var upperDivLimit = new ArithmeticFunction(upper, new ConstantFunction(limit), ArithmeticOperation$DIV_ZERO_getInstance());
    var formulaDivRatioMultUpperDivLimit = new ArithmeticFunction(formulaDivRatio, upperDivLimit, ArithmeticOperation$MULT_getInstance());
    var min = new MinValueFunction([new ConstantFunction(100.0), new ArithmeticFunction(c50, formulaDivRatioMultUpperDivLimit, ArithmeticOperation$MULT_getInstance())]);
    return new MaxValueFunction([new ConstantFunction(-100.0), min]);
  };
  SwingIndex$Companion.prototype.getFormula_0 = function (data) {
    var close = this.getPriceFunction_0(SwingIndex$PriceValue$TODAY_CLOSE_getInstance(), data);
    var closeY = this.getPriceFunction_0(SwingIndex$PriceValue$YESTERDAY_CLOSE_getInstance(), data);
    var open = this.getPriceFunction_0(SwingIndex$PriceValue$TODAY_OPEN_getInstance(), data);
    var openY = this.getPriceFunction_0(SwingIndex$PriceValue$YESTERDAY_OPEN_getInstance(), data);
    var c4 = new ConstantFunction(4.0);
    var c2 = new ConstantFunction(2.0);
    var closeMinusOpen = new ArithmeticFunction(close, open, ArithmeticOperation$MINUS_getInstance());
    var closeMinusOpenDiv2 = new ArithmeticFunction(closeMinusOpen, c2, ArithmeticOperation$DIV_getInstance());
    var yCloseMinusYOpen = new ArithmeticFunction(closeY, openY, ArithmeticOperation$MINUS_getInstance());
    var yCloseMinusYOpenDiv4 = new ArithmeticFunction(yCloseMinusYOpen, c4, ArithmeticOperation$DIV_getInstance());
    var closeMinusYClose = new ArithmeticFunction(close, closeY, ArithmeticOperation$MINUS_getInstance());
    var plus = new ArithmeticFunction(closeMinusYClose, closeMinusOpenDiv2, ArithmeticOperation$PLUS_getInstance());
    return new ArithmeticFunction(plus, yCloseMinusYOpenDiv4, ArithmeticOperation$PLUS_getInstance());
  };
  SwingIndex$Companion.prototype.getArithmeticPriceFunction_0 = function (first, second, operation, data) {
    var firstFunc = this.getPriceFunction_0(first, data);
    var secondFunc = this.getPriceFunction_0(second, data);
    return new ArithmeticFunction(firstFunc, secondFunc, operation);
  };
  SwingIndex$Companion.prototype.getPriceFunction_0 = function (value, data) {
    var result;
    switch (value.name) {
      case 'TODAY_CLOSE':
        result = new PriceSourceFunction(data, PriceFieldEnum$CLOSE_getInstance());
        break;
      case 'TODAY_OPEN':
        result = new PriceSourceFunction(data, PriceFieldEnum$OPEN_getInstance());
        break;
      case 'TODAY_HIGH':
        result = new PriceSourceFunction(data, PriceFieldEnum$HIGH_getInstance());
        break;
      case 'TODAY_LOW':
        result = new PriceSourceFunction(data, PriceFieldEnum$LOW_getInstance());
        break;
      case 'YESTERDAY_OPEN':
        result = new DisplacementFunction(new PriceSourceFunction(data, PriceFieldEnum$OPEN_getInstance()), -1);
        break;
      case 'YESTERDAY_CLOSE':
        result = new DisplacementFunction(new PriceSourceFunction(data, PriceFieldEnum$CLOSE_getInstance()), -1);
        break;
      case 'YESTERDAY_HIGH':
        result = new DisplacementFunction(new PriceSourceFunction(data, PriceFieldEnum$HIGH_getInstance()), -1);
        break;
      case 'YESTERDAY_LOW':
        result = new DisplacementFunction(new PriceSourceFunction(data, PriceFieldEnum$LOW_getInstance()), -1);
        break;
      default:Kotlin.noWhenBranchMatched();
        break;
    }
    return result;
  };
  SwingIndex$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var SwingIndex$Companion_instance = null;
  function SwingIndex$Companion_getInstance() {
    if (SwingIndex$Companion_instance === null) {
      new SwingIndex$Companion();
    }
    return SwingIndex$Companion_instance;
  }
  SwingIndex.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SwingIndex',
    interfaces: [StudyBuilder]
  };
  function TDSequential() {
    StudyBuilder.call(this);
    this.SETUP_BAR_LENGTH_0 = 'setupBarLength';
    this.COUNTDOWN_BAR_LENGTH_0 = 'countdownBarLength';
    this.COUNTDOWN_START_FROM_INDEX_0 = 'countdownStartFromIndex';
  }
  TDSequential.prototype.validateParameters_x7u0o8$ = function (params) {
    StudyBuilder.prototype.validateDouble_ez016i$.call(this, params, this.SETUP_BAR_LENGTH_0);
    StudyBuilder.prototype.validateDouble_ez016i$.call(this, params, this.COUNTDOWN_BAR_LENGTH_0);
    StudyBuilder.prototype.validateDouble_ez016i$.call(this, params, this.COUNTDOWN_START_FROM_INDEX_0);
  };
  function TDSequential$constructFunctionsArray$lambda(x, y) {
    return isFinite(x) ? 1.0 : isFinite(y) ? -1.0 : kotlin_js_internal_DoubleCompanionObject.NaN;
  }
  function TDSequential$constructFunctionsArray$lambda_0(closure$countdownStartFromIndex) {
    return function (x) {
      return isFinite(x) && x >= closure$countdownStartFromIndex;
    };
  }
  function TDSequential$constructFunctionsArray$lambda_1(closure$countdownBarLength) {
    return function (x) {
      return isFinite(x) && x === -(closure$countdownBarLength - 1.0) ? 1.0 : kotlin_js_internal_DoubleCompanionObject.NaN;
    };
  }
  function TDSequential$constructFunctionsArray$lambda_2(closure$countdownBarLength) {
    return function (y) {
      return isFinite(y) && y === -(closure$countdownBarLength - 1.0) ? 1.0 : kotlin_js_internal_DoubleCompanionObject.NaN;
    };
  }
  function TDSequential$constructFunctionsArray$lambda_3(x) {
    return isFinite(x) ? -x : kotlin_js_internal_DoubleCompanionObject.NaN;
  }
  TDSequential.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    var tmp$, tmp$_0, tmp$_1;
    var setupBarLength = typeof (tmp$ = params.get_11rb$(this.SETUP_BAR_LENGTH_0)) === 'number' ? tmp$ : throwCCE();
    var countdownBarLength = typeof (tmp$_0 = params.get_11rb$(this.COUNTDOWN_BAR_LENGTH_0)) === 'number' ? tmp$_0 : throwCCE();
    var countdownStartFromIndex = typeof (tmp$_1 = params.get_11rb$(this.COUNTDOWN_START_FROM_INDEX_0)) === 'number' ? tmp$_1 : throwCCE();
    var sellFlip = new PriceFlipFunction(data, TDBuySell$SELL_getInstance());
    var buyFlip = new PriceFlipFunction(data, TDBuySell$BUY_getInstance());
    var buySetup = new SetupFunction(data, sellFlip, TDBuySell$BUY_getInstance(), setupBarLength);
    var sellSetup = new SetupFunction(data, buyFlip, TDBuySell$SELL_getInstance(), setupBarLength);
    var setupSignum = new CombineFunction(data, sellSetup, buySetup, TDSequential$constructFunctionsArray$lambda);
    var countdownBuy = new CountdownFunction(data, buySetup, sellSetup, TDBuySell$BUY_getInstance(), setupBarLength, countdownBarLength);
    var countdownSell = new CountdownFunction(data, sellSetup, buySetup, TDBuySell$SELL_getInstance(), setupBarLength, countdownBarLength);
    var countdownShow = TDSequential$constructFunctionsArray$lambda_0(countdownStartFromIndex);
    var countdownBuyShow = new PredicateFunction(data, countdownBuy, countdownBuy, countdownShow);
    var countdownSellShow = new PredicateFunction(data, countdownSell, countdownSell, countdownShow);
    var countdownBuyExtra = new MapFunction(data, countdownBuy, TDSequential$constructFunctionsArray$lambda_1(countdownBarLength));
    var countdownSellExtra = new MapFunction(data, countdownSell, TDSequential$constructFunctionsArray$lambda_2(countdownBarLength));
    var perfectBuyCountdown = new PerfectCountdownFunction(data, countdownBuy, TDBuySell$BUY_getInstance(), setupBarLength, countdownBarLength);
    var perfectSellCountdown = new PerfectCountdownFunction(data, countdownSell, TDBuySell$SELL_getInstance(), setupBarLength, countdownBarLength);
    var perfectBuySetup = new PerfectSetupFunction(data, buySetup, TDBuySell$BUY_getInstance(), setupBarLength);
    var perfectSellSetup = new PerfectSetupFunction(data, sellSetup, TDBuySell$SELL_getInstance(), setupBarLength);
    var buySetupArrow = perfectBuySetup;
    var sellSetupArrow = new MapFunction(data, perfectSellSetup, TDSequential$constructFunctionsArray$lambda_3);
    var resistance = new SupportResistanceFunction(data, buySetup, TDSupportResistance$Resistance_getInstance(), setupBarLength);
    var support = new SupportResistanceFunction(data, sellSetup, TDSupportResistance$Support_getInstance(), setupBarLength);
    return listOf([buySetup, sellSetup, countdownBuyShow, countdownSellShow, perfectBuySetup, perfectSellSetup, support, resistance, countdownBuyExtra, countdownSellExtra, setupSignum, perfectBuyCountdown, perfectSellCountdown, buySetupArrow, sellSetupArrow]);
  };
  TDSequential.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TDSequential',
    interfaces: [StudyBuilder]
  };
  function TEMA() {
    StudyBuilder.call(this);
  }
  TEMA.prototype.validateParameters_x7u0o8$ = function (params) {
    StudyBuilder.prototype.validateLength_x7u0o8$.call(this, params);
    StudyBuilder.prototype.validatePriceField_x7u0o8$.call(this, params);
    StudyBuilder.prototype.validateDisplace_x7u0o8$.call(this, params);
  };
  TEMA.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    var tmp$, tmp$_0, tmp$_1;
    var length = typeof (tmp$ = params.get_11rb$(StudyBuilder$Companion_getInstance().LENGTH_PARAMETER)) === 'number' ? tmp$ : throwCCE();
    var displace = typeof (tmp$_0 = params.get_11rb$(StudyBuilder$Companion_getInstance().DISPLACE_PARAMETER)) === 'number' ? tmp$_0 : throwCCE();
    var priceField = Kotlin.isType(tmp$_1 = params.get_11rb$(StudyBuilder$Companion_getInstance().PRICE_PARAMETER), PriceFieldEnum) ? tmp$_1 : throwCCE();
    var term1 = new ArithmeticFunction(new ConstantFunction(3.0), new MovingAverageExponential(new PriceSourceFunction(data, priceField), length), ArithmeticOperation$MULT_getInstance());
    var term2 = new ArithmeticFunction(new ConstantFunction(3.0), new MovingAverageExponential(new MovingAverageExponential(new PriceSourceFunction(data, priceField), length), length, length), ArithmeticOperation$MULT_getInstance());
    var term3 = new MovingAverageExponential(new MovingAverageExponential(new MovingAverageExponential(new PriceSourceFunction(data, priceField), length), length, length), length, 2 * length | 0);
    var tema = new ArithmeticFunction(new ArithmeticFunction(term1, term2, ArithmeticOperation$MINUS_getInstance()), term3, ArithmeticOperation$PLUS_getInstance());
    return listOf_0(new DisplacementFunction(tema, displace));
  };
  TEMA.prototype.getExpansionSize_x7u0o8$ = function (params) {
    var tmp$;
    var displace = typeof (tmp$ = params.get_11rb$(StudyBuilder$Companion_getInstance().DISPLACE_PARAMETER)) === 'number' ? tmp$ : throwCCE();
    return -displace | 0;
  };
  TEMA.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TEMA',
    interfaces: [StudyBuilder]
  };
  function TMA() {
    StudyBuilder.call(this);
  }
  TMA.prototype.validateParameters_x7u0o8$ = function (params) {
    StudyBuilder.prototype.validateLength_x7u0o8$.call(this, params);
    StudyBuilder.prototype.validatePriceField_x7u0o8$.call(this, params);
    StudyBuilder.prototype.validateDisplace_x7u0o8$.call(this, params);
  };
  TMA.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    var tmp$, tmp$_0, tmp$_1;
    var length = typeof (tmp$ = params.get_11rb$(StudyBuilder$Companion_getInstance().LENGTH_PARAMETER)) === 'number' ? tmp$ : throwCCE();
    var displace = typeof (tmp$_0 = params.get_11rb$(StudyBuilder$Companion_getInstance().DISPLACE_PARAMETER)) === 'number' ? tmp$_0 : throwCCE();
    var priceField = Kotlin.isType(tmp$_1 = params.get_11rb$(StudyBuilder$Companion_getInstance().PRICE_PARAMETER), PriceFieldEnum) ? tmp$_1 : throwCCE();
    var effectiveLength = numberToInt(round((length + 1 | 0) / 2.0));
    var priceFunc = new PriceSourceFunction(data, priceField);
    var smaFunc = new MovingAverageSimple(priceFunc, effectiveLength);
    var tmaFunc = new MovingAverageSimple(smaFunc, effectiveLength);
    var displacedTmaFunc = new DisplacementFunction(tmaFunc, displace);
    return listOf_0(displacedTmaFunc);
  };
  TMA.prototype.getExpansionSize_x7u0o8$ = function (params) {
    var tmp$;
    var displace = typeof (tmp$ = params.get_11rb$(StudyBuilder$Companion_getInstance().DISPLACE_PARAMETER)) === 'number' ? tmp$ : throwCCE();
    return -displace | 0;
  };
  TMA.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TMA',
    interfaces: [StudyBuilder]
  };
  function TimeSeriesForecast() {
    TimeSeriesForecast$Companion_getInstance();
    StudyBuilder.call(this);
  }
  TimeSeriesForecast.prototype.validateParameters_x7u0o8$ = function (params) {
    StudyBuilder.prototype.validatePriceField_x7u0o8$.call(this, params);
    StudyBuilder.prototype.validateInteger_ez016i$.call(this, params, TimeSeriesForecast$Companion_getInstance().FORECAST_LENGTH);
    StudyBuilder.prototype.validateInteger_ez016i$.call(this, params, TimeSeriesForecast$Companion_getInstance().REGRESSION_LENGTH);
  };
  TimeSeriesForecast.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    var tmp$, tmp$_0, tmp$_1;
    var regressionLength = typeof (tmp$ = params.get_11rb$(TimeSeriesForecast$Companion_getInstance().REGRESSION_LENGTH)) === 'number' ? tmp$ : throwCCE();
    var forecastLength = typeof (tmp$_0 = params.get_11rb$(TimeSeriesForecast$Companion_getInstance().FORECAST_LENGTH)) === 'number' ? tmp$_0 : throwCCE();
    var priceField = Kotlin.isType(tmp$_1 = params.get_11rb$(StudyBuilder$Companion_getInstance().PRICE_PARAMETER), PriceFieldEnum) ? tmp$_1 : throwCCE();
    var price = new PriceSourceFunction(data, priceField);
    var inertia = new LinearRegressionCurveFunction(price, regressionLength);
    var cPeriod = new ConstantFunction(forecastLength);
    var linRegSl = LinearRegressionSlope$Companion_getInstance().constructLinearRegressionSlope_wmug5y$(data, regressionLength, priceField);
    var lrs = new ArithmeticFunction(cPeriod, linRegSl, ArithmeticOperation$MULT_getInstance());
    return listOf_0(new ArithmeticFunction(inertia, lrs, ArithmeticOperation$PLUS_getInstance()));
  };
  function TimeSeriesForecast$Companion() {
    TimeSeriesForecast$Companion_instance = this;
    this.REGRESSION_LENGTH = 'regressionLength';
    this.FORECAST_LENGTH = 'forecastLength';
  }
  TimeSeriesForecast$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TimeSeriesForecast$Companion_instance = null;
  function TimeSeriesForecast$Companion_getInstance() {
    if (TimeSeriesForecast$Companion_instance === null) {
      new TimeSeriesForecast$Companion();
    }
    return TimeSeriesForecast$Companion_instance;
  }
  TimeSeriesForecast.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TimeSeriesForecast',
    interfaces: [StudyBuilder]
  };
  function TripleEMA() {
    StudyBuilder.call(this);
  }
  TripleEMA.prototype.validateParameters_x7u0o8$ = function (params) {
    StudyBuilder.prototype.validateLength_x7u0o8$.call(this, params);
    StudyBuilder.prototype.validatePriceField_x7u0o8$.call(this, params);
  };
  TripleEMA.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    var tmp$, tmp$_0;
    var length = typeof (tmp$ = params.get_11rb$(StudyBuilder$Companion_getInstance().LENGTH_PARAMETER)) === 'number' ? tmp$ : throwCCE();
    var shiftLength = 1;
    var priceField = Kotlin.isType(tmp$_0 = params.get_11rb$(StudyBuilder$Companion_getInstance().PRICE_PARAMETER), PriceFieldEnum) ? tmp$_0 : throwCCE();
    var logPriceFunctionForTriple = new LogarithmFunction(new PriceSourceFunction(data, priceField));
    var logPriceFunctionForPrev = new LogarithmFunction(new PriceSourceFunction(data, priceField));
    var triple = new MovingAverageExponential(new MovingAverageExponential(new MovingAverageExponential(logPriceFunctionForTriple, length), length, length), length, 2 * length | 0);
    var pricePrevious = new DisplacementFunction(logPriceFunctionForPrev, -shiftLength | 0);
    var triplePrevious = new MovingAverageExponential(new MovingAverageExponential(new MovingAverageExponential(pricePrevious, length, shiftLength), length, length + shiftLength | 0), length, (2 * length | 0) + shiftLength | 0);
    var trixFactor = new ArithmeticFunction(triple, triplePrevious, ArithmeticOperation$MINUS_getInstance());
    var trix = new ArithmeticFunction(trixFactor, new ConstantFunction(10000.0), ArithmeticOperation$MULT_getInstance());
    var zero = new ZeroFunction();
    return listOf([trix, zero]);
  };
  TripleEMA.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TripleEMA',
    interfaces: [StudyBuilder]
  };
  function TrueStrengthIndex() {
    TrueStrengthIndex$Companion_getInstance();
    StudyBuilder.call(this);
  }
  TrueStrengthIndex.prototype.validateParameters_x7u0o8$ = function (params) {
    StudyBuilder.prototype.validateInteger_ez016i$.call(this, params, TrueStrengthIndex$Companion_getInstance().LONG_LENGTH);
    StudyBuilder.prototype.validateInteger_ez016i$.call(this, params, TrueStrengthIndex$Companion_getInstance().SHORT_LENGTH);
    StudyBuilder.prototype.validateInteger_ez016i$.call(this, params, TrueStrengthIndex$Companion_getInstance().SIGNAL_LENGTH);
    StudyBuilder.prototype.validatePriceField_x7u0o8$.call(this, params);
    StudyBuilder.prototype.validateAverageField_x7u0o8$.call(this, params);
  };
  TrueStrengthIndex.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    var longLength = typeof (tmp$ = params.get_11rb$(TrueStrengthIndex$Companion_getInstance().LONG_LENGTH)) === 'number' ? tmp$ : throwCCE();
    var shortLength = typeof (tmp$_0 = params.get_11rb$(TrueStrengthIndex$Companion_getInstance().SHORT_LENGTH)) === 'number' ? tmp$_0 : throwCCE();
    var signalLength = typeof (tmp$_1 = params.get_11rb$(TrueStrengthIndex$Companion_getInstance().SIGNAL_LENGTH)) === 'number' ? tmp$_1 : throwCCE();
    var priceField = Kotlin.isType(tmp$_2 = params.get_11rb$(StudyBuilder$Companion_getInstance().PRICE_PARAMETER), PriceFieldEnum) ? tmp$_2 : throwCCE();
    var averageType = Kotlin.isType(tmp$_3 = params.get_11rb$(StudyBuilder$Companion_getInstance().AVERAGE_PARAMETER), AverageTypeEnum) ? tmp$_3 : throwCCE();
    var price = new PriceSourceFunction(data, priceField);
    var tsi = this.getTSI_0(price, longLength, shortLength, averageType);
    var signalTsi = CommonFunctions_getInstance().constructAverage_dtut4e$(averageType, tsi, signalLength, shortLength + longLength - 1 | 0);
    return listOf([tsi, signalTsi, new ZeroFunction()]);
  };
  TrueStrengthIndex.prototype.getTSI_0 = function (price, longLength, shortLength, averageType) {
    var priceDelayed = new DisplacementFunction(price, -1);
    var momentum = new ArithmeticFunction(price, priceDelayed, ArithmeticOperation$MINUS_getInstance());
    var averageOfAverage = this.getAverageOfAverage_0(momentum, longLength, shortLength, averageType);
    var absMomentum = new AbsFunction(momentum);
    var absEmaEma = this.getAverageOfAverage_0(absMomentum, longLength, shortLength, averageType);
    var div = new ArithmeticFunction(averageOfAverage, absEmaEma, ArithmeticOperation$DIV_ZERO_getInstance());
    var c100 = new ConstantFunction(100.0);
    return new ArithmeticFunction(div, c100, ArithmeticOperation$MULT_getInstance());
  };
  TrueStrengthIndex.prototype.getAverageOfAverage_0 = function (function_0, longLength, shortLength, averageType) {
    return CommonFunctions_getInstance().constructAverage_dtut4e$(averageType, CommonFunctions_getInstance().constructAverage_dtut4e$(averageType, function_0, longLength, 1), shortLength, longLength);
  };
  function TrueStrengthIndex$Companion() {
    TrueStrengthIndex$Companion_instance = this;
    this.LONG_LENGTH = 'longLength';
    this.SHORT_LENGTH = 'shortLength';
    this.SIGNAL_LENGTH = 'signalLength';
  }
  TrueStrengthIndex$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TrueStrengthIndex$Companion_instance = null;
  function TrueStrengthIndex$Companion_getInstance() {
    if (TrueStrengthIndex$Companion_instance === null) {
      new TrueStrengthIndex$Companion();
    }
    return TrueStrengthIndex$Companion_instance;
  }
  TrueStrengthIndex.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TrueStrengthIndex',
    interfaces: [StudyBuilder]
  };
  function TypicalPrice() {
    StudyBuilder.call(this);
  }
  TypicalPrice.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    var typicalPrice = new PriceSourceFunction(data, PriceFieldEnum$TYPICAL_getInstance());
    return listOf_0(typicalPrice);
  };
  TypicalPrice.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TypicalPrice',
    interfaces: [StudyBuilder]
  };
  function UltimateOscillator() {
    UltimateOscillator$Companion_getInstance();
    StudyBuilder.call(this);
  }
  UltimateOscillator.prototype.validateParameters_x7u0o8$ = function (params) {
    StudyBuilder.prototype.validateInteger_ez016i$.call(this, params, UltimateOscillator$Companion_getInstance().FAST_LENGTH_PARAMETER);
    StudyBuilder.prototype.validateInteger_ez016i$.call(this, params, UltimateOscillator$Companion_getInstance().MEDIUM_LENGTH_PARAMETER);
    StudyBuilder.prototype.validateInteger_ez016i$.call(this, params, UltimateOscillator$Companion_getInstance().SLOW_LENGTH_PARAMETER);
  };
  UltimateOscillator.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    var tmp$, tmp$_0, tmp$_1;
    var fastLength = typeof (tmp$ = params.get_11rb$(UltimateOscillator$Companion_getInstance().FAST_LENGTH_PARAMETER)) === 'number' ? tmp$ : throwCCE();
    var mediumLength = typeof (tmp$_0 = params.get_11rb$(UltimateOscillator$Companion_getInstance().MEDIUM_LENGTH_PARAMETER)) === 'number' ? tmp$_0 : throwCCE();
    var slowLength = typeof (tmp$_1 = params.get_11rb$(UltimateOscillator$Companion_getInstance().SLOW_LENGTH_PARAMETER)) === 'number' ? tmp$_1 : throwCCE();
    var trRngFast = new SumFunction(CommonFunctions_getInstance().constructTrueRange_t0cfja$(data), fastLength);
    var trRngMed = new SumFunction(CommonFunctions_getInstance().constructTrueRange_t0cfja$(data), mediumLength);
    var trRngSlow = new SumFunction(CommonFunctions_getInstance().constructTrueRange_t0cfja$(data), slowLength);
    var diffFast = new SumFunction(UltimateOscillator$Companion_getInstance().constructBuyingPressure_0(data), fastLength);
    var diffMed = new SumFunction(UltimateOscillator$Companion_getInstance().constructBuyingPressure_0(data), mediumLength);
    var diffSlow = new SumFunction(UltimateOscillator$Companion_getInstance().constructBuyingPressure_0(data), slowLength);
    var factorFast = slowLength / fastLength;
    var factorMed = slowLength / mediumLength;
    var valFast = UltimateOscillator$Companion_getInstance().constructValueFunction_0(diffFast, trRngFast, factorFast);
    var valMed = UltimateOscillator$Companion_getInstance().constructValueFunction_0(diffMed, trRngMed, factorMed);
    var valFastMed = new ArithmeticFunction(valFast, valMed, ArithmeticOperation$PLUS_getInstance());
    var valSlow = new ArithmeticFunction(diffSlow, trRngSlow, ArithmeticOperation$DIV_ZERO_getInstance());
    var val = new ArithmeticFunction(valFastMed, valSlow, ArithmeticOperation$PLUS_getInstance());
    var ultOsc = UltimateOscillator$Companion_getInstance().constructValueFunction_0(val, new ConstantFunction(factorFast + factorMed + 1.0), 100.0);
    return listOf_0(ultOsc);
  };
  function UltimateOscillator$Companion() {
    UltimateOscillator$Companion_instance = this;
    this.FAST_LENGTH_PARAMETER = 'fastLength';
    this.MEDIUM_LENGTH_PARAMETER = 'mediumLength';
    this.SLOW_LENGTH_PARAMETER = 'slowLength';
  }
  UltimateOscillator$Companion.prototype.constructBuyingPressure_0 = function (data) {
    var low = new PriceSourceFunction(data, PriceFieldEnum$LOW_getInstance());
    var close = new PriceSourceFunction(data, PriceFieldEnum$CLOSE_getInstance());
    return new BuyingPressure(low, close);
  };
  UltimateOscillator$Companion.prototype.constructValueFunction_0 = function (diff, trRng, factor) {
    var valFactor = new ArithmeticFunction(diff, trRng, ArithmeticOperation$DIV_ZERO_getInstance());
    return new ArithmeticFunction(valFactor, new ConstantFunction(factor), ArithmeticOperation$MULT_getInstance());
  };
  UltimateOscillator$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var UltimateOscillator$Companion_instance = null;
  function UltimateOscillator$Companion_getInstance() {
    if (UltimateOscillator$Companion_instance === null) {
      new UltimateOscillator$Companion();
    }
    return UltimateOscillator$Companion_instance;
  }
  UltimateOscillator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'UltimateOscillator',
    interfaces: [StudyBuilder]
  };
  function VWAP() {
    StudyBuilder.call(this);
  }
  VWAP.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    var volume = new PriceSourceFunction(data, PriceFieldEnum$VOLUME_getInstance());
    var typicalPrice = new PriceSourceFunction(data, PriceFieldEnum$TYPICAL_getInstance());
    var vp = new ArithmeticFunction(typicalPrice, volume, ArithmeticOperation$MULT_getInstance());
    var totalVP = new CumulativeSumWithinSessionFunction(data, vp);
    var totalVolume = new CumulativeSumWithinSessionFunction(data, volume);
    var vwap = WindowFunction_init_0(new ArithmeticFunction(totalVP, totalVolume, ArithmeticOperation$DIV_ZERO_getInstance()), 0, true);
    return listOf_0(vwap);
  };
  VWAP.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'VWAP',
    interfaces: [StudyBuilder]
  };
  function VerticalHorizontalFilter() {
    StudyBuilder.call(this);
  }
  VerticalHorizontalFilter.prototype.validateParameters_x7u0o8$ = function (params) {
    StudyBuilder.prototype.validateLength_x7u0o8$.call(this, params);
  };
  VerticalHorizontalFilter.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    var tmp$;
    var length = typeof (tmp$ = params.get_11rb$(StudyBuilder$Companion_getInstance().LENGTH_PARAMETER)) === 'number' ? tmp$ : throwCCE();
    var highPrice = new PriceSourceFunction(data, PriceFieldEnum$HIGH_getInstance());
    var highest = new HighestFunction(highPrice, length);
    var lowPrice = new PriceSourceFunction(data, PriceFieldEnum$LOW_getInstance());
    var lowest = new LowestFunction(lowPrice, length);
    var numerator = new AbsFunction(new ArithmeticFunction(highest, lowest, ArithmeticOperation$MINUS_getInstance()));
    var closePrice = new PriceSourceFunction(data, PriceFieldEnum$CLOSE_getInstance());
    var closeDiff = new DiffPrevFunction(closePrice);
    var absCloseDiff = new AbsFunction(closeDiff);
    var denominator = new SumFunction(absCloseDiff, length);
    var vhf = WindowFunction_init_0(new ArithmeticFunction(numerator, denominator, ArithmeticOperation$DIV_ZERO_getInstance()), 0, true);
    return listOf_0(vhf);
  };
  VerticalHorizontalFilter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'VerticalHorizontalFilter',
    interfaces: [StudyBuilder]
  };
  function WMA() {
    StudyBuilder.call(this);
  }
  WMA.prototype.validateParameters_x7u0o8$ = function (params) {
    StudyBuilder.prototype.validateLength_x7u0o8$.call(this, params);
    StudyBuilder.prototype.validatePriceField_x7u0o8$.call(this, params);
    StudyBuilder.prototype.validateDisplace_x7u0o8$.call(this, params);
  };
  WMA.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    var tmp$, tmp$_0, tmp$_1;
    var length = typeof (tmp$ = params.get_11rb$(StudyBuilder$Companion_getInstance().LENGTH_PARAMETER)) === 'number' ? tmp$ : throwCCE();
    var displace = typeof (tmp$_0 = params.get_11rb$(StudyBuilder$Companion_getInstance().DISPLACE_PARAMETER)) === 'number' ? tmp$_0 : throwCCE();
    var priceField = Kotlin.isType(tmp$_1 = params.get_11rb$(StudyBuilder$Companion_getInstance().PRICE_PARAMETER), PriceFieldEnum) ? tmp$_1 : throwCCE();
    var priceFunc = new PriceSourceFunction(data, priceField);
    var wmaFunc = new MovingAverageWeighted(priceFunc, length);
    var displacedSmaFunc = new DisplacementFunction(wmaFunc, displace);
    return listOf_0(displacedSmaFunc);
  };
  WMA.prototype.getExpansionSize_x7u0o8$ = function (params) {
    var tmp$;
    var displace = typeof (tmp$ = params.get_11rb$(StudyBuilder$Companion_getInstance().DISPLACE_PARAMETER)) === 'number' ? tmp$ : throwCCE();
    return -displace | 0;
  };
  WMA.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'WMA',
    interfaces: [StudyBuilder]
  };
  function WaveTrend() {
    WaveTrend$Companion_getInstance();
    StudyBuilder.call(this);
  }
  WaveTrend.prototype.validateParameters_x7u0o8$ = function (params) {
    StudyBuilder.prototype.validateInteger_ez016i$.call(this, params, WaveTrend$Companion_getInstance().CHANNEL_LENGTH_PARAMETER);
    StudyBuilder.prototype.validateInteger_ez016i$.call(this, params, WaveTrend$Companion_getInstance().AVERAGE_LENGTH_PARAMETER);
    StudyBuilder.prototype.validateInteger_ez016i$.call(this, params, WaveTrend$Companion_getInstance().OVER_BOUGNT_LEVEL1_PARAMETER);
    StudyBuilder.prototype.validateInteger_ez016i$.call(this, params, WaveTrend$Companion_getInstance().OVER_BOUGNT_LEVEL2_PARAMETER);
    StudyBuilder.prototype.validateInteger_ez016i$.call(this, params, WaveTrend$Companion_getInstance().OVER_SOLD_LEVEL1_PARAMETER);
    StudyBuilder.prototype.validateInteger_ez016i$.call(this, params, WaveTrend$Companion_getInstance().OVER_SOLD_LEVEL2_PARAMETER);
  };
  WaveTrend.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
    var channelLen = typeof (tmp$ = params.get_11rb$(WaveTrend$Companion_getInstance().CHANNEL_LENGTH_PARAMETER)) === 'number' ? tmp$ : throwCCE();
    var averageLen = typeof (tmp$_0 = params.get_11rb$(WaveTrend$Companion_getInstance().AVERAGE_LENGTH_PARAMETER)) === 'number' ? tmp$_0 : throwCCE();
    var obLevel1 = new ConstantFunction(typeof (tmp$_1 = params.get_11rb$(WaveTrend$Companion_getInstance().OVER_BOUGNT_LEVEL1_PARAMETER)) === 'number' ? tmp$_1 : throwCCE());
    var obLevel2 = new ConstantFunction(typeof (tmp$_2 = params.get_11rb$(WaveTrend$Companion_getInstance().OVER_BOUGNT_LEVEL2_PARAMETER)) === 'number' ? tmp$_2 : throwCCE());
    var osLevel1 = new ConstantFunction(typeof (tmp$_3 = params.get_11rb$(WaveTrend$Companion_getInstance().OVER_SOLD_LEVEL1_PARAMETER)) === 'number' ? tmp$_3 : throwCCE());
    var osLevel2 = new ConstantFunction(typeof (tmp$_4 = params.get_11rb$(WaveTrend$Companion_getInstance().OVER_SOLD_LEVEL2_PARAMETER)) === 'number' ? tmp$_4 : throwCCE());
    var averagePrice = new PriceSourceFunction(data, PriceFieldEnum$TYPICAL_getInstance());
    var esa = new MovingAverageExponential(averagePrice, channelLen);
    var af = new ArithmeticFunction(averagePrice, esa, ArithmeticOperation$MINUS_getInstance());
    var abs = new AbsFunction(af);
    var d = new MovingAverageExponential(abs, channelLen, channelLen);
    var ci = new ArithmeticFunction(new ArithmeticFunction(averagePrice, esa, ArithmeticOperation$MINUS_getInstance()), new ArithmeticFunction(new ConstantFunction(0.015), d, ArithmeticOperation$MULT_getInstance()), ArithmeticOperation$DIV_getInstance());
    var wt1 = new MovingAverageExponential(ci, averageLen, channelLen + averageLen | 0);
    var wt2 = new MovingAverageSimple(wt1, 4);
    var zero = new ZeroFunction();
    var wtdiff = new ArithmeticFunction(wt1, wt2, ArithmeticOperation$MINUS_getInstance());
    return listOf([zero, obLevel1, obLevel2, osLevel1, osLevel2, wt1, wt2, wtdiff]);
  };
  function WaveTrend$Companion() {
    WaveTrend$Companion_instance = this;
    this.CHANNEL_LENGTH_PARAMETER = 'channelLength';
    this.AVERAGE_LENGTH_PARAMETER = 'averageLength';
    this.OVER_BOUGNT_LEVEL1_PARAMETER = 'overBoughtLevel1';
    this.OVER_BOUGNT_LEVEL2_PARAMETER = 'overBoughtLevel2';
    this.OVER_SOLD_LEVEL1_PARAMETER = 'overSoldLevel1';
    this.OVER_SOLD_LEVEL2_PARAMETER = 'overSoldLevel2';
  }
  WaveTrend$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var WaveTrend$Companion_instance = null;
  function WaveTrend$Companion_getInstance() {
    if (WaveTrend$Companion_instance === null) {
      new WaveTrend$Companion();
    }
    return WaveTrend$Companion_instance;
  }
  WaveTrend.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'WaveTrend',
    interfaces: [StudyBuilder]
  };
  function WaveTrendWithCrosses() {
    WaveTrendWithCrosses$Companion_getInstance();
    StudyBuilder.call(this);
  }
  WaveTrendWithCrosses.prototype.validateParameters_x7u0o8$ = function (params) {
    StudyBuilder.prototype.validateInteger_ez016i$.call(this, params, WaveTrendWithCrosses$Companion_getInstance().CHANNEL_LENGTH_PARAMETER);
    StudyBuilder.prototype.validateInteger_ez016i$.call(this, params, WaveTrendWithCrosses$Companion_getInstance().AVERAGE_LENGTH_PARAMETER);
    StudyBuilder.prototype.validateInteger_ez016i$.call(this, params, WaveTrendWithCrosses$Companion_getInstance().OVER_BOUGNT_LEVEL1_PARAMETER);
    StudyBuilder.prototype.validateInteger_ez016i$.call(this, params, WaveTrendWithCrosses$Companion_getInstance().OVER_BOUGNT_LEVEL2_PARAMETER);
    StudyBuilder.prototype.validateInteger_ez016i$.call(this, params, WaveTrendWithCrosses$Companion_getInstance().OVER_SOLD_LEVEL1_PARAMETER);
    StudyBuilder.prototype.validateInteger_ez016i$.call(this, params, WaveTrendWithCrosses$Companion_getInstance().OVER_SOLD_LEVEL2_PARAMETER);
  };
  WaveTrendWithCrosses.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
    var channelLen = typeof (tmp$ = params.get_11rb$(WaveTrendWithCrosses$Companion_getInstance().CHANNEL_LENGTH_PARAMETER)) === 'number' ? tmp$ : throwCCE();
    var averageLen = typeof (tmp$_0 = params.get_11rb$(WaveTrendWithCrosses$Companion_getInstance().AVERAGE_LENGTH_PARAMETER)) === 'number' ? tmp$_0 : throwCCE();
    var obLevel1 = new ConstantFunction(typeof (tmp$_1 = params.get_11rb$(WaveTrendWithCrosses$Companion_getInstance().OVER_BOUGNT_LEVEL1_PARAMETER)) === 'number' ? tmp$_1 : throwCCE());
    var obLevel2 = new ConstantFunction(typeof (tmp$_2 = params.get_11rb$(WaveTrendWithCrosses$Companion_getInstance().OVER_BOUGNT_LEVEL2_PARAMETER)) === 'number' ? tmp$_2 : throwCCE());
    var osLevel1 = new ConstantFunction(typeof (tmp$_3 = params.get_11rb$(WaveTrendWithCrosses$Companion_getInstance().OVER_SOLD_LEVEL1_PARAMETER)) === 'number' ? tmp$_3 : throwCCE());
    var osLevel2 = new ConstantFunction(typeof (tmp$_4 = params.get_11rb$(WaveTrendWithCrosses$Companion_getInstance().OVER_SOLD_LEVEL2_PARAMETER)) === 'number' ? tmp$_4 : throwCCE());
    var averagePrice = new PriceSourceFunction(data, PriceFieldEnum$TYPICAL_getInstance());
    var esa = new MovingAverageExponential(averagePrice, channelLen);
    var af = new ArithmeticFunction(averagePrice, esa, ArithmeticOperation$MINUS_getInstance());
    var abs = new AbsFunction(af);
    var d = new MovingAverageExponential(abs, channelLen, channelLen);
    var ci = new ArithmeticFunction(new ArithmeticFunction(averagePrice, esa, ArithmeticOperation$MINUS_getInstance()), new ArithmeticFunction(new ConstantFunction(0.015), d, ArithmeticOperation$MULT_getInstance()), ArithmeticOperation$DIV_getInstance());
    var wt1 = new MovingAverageExponential(ci, averageLen, channelLen + averageLen | 0);
    var wt2 = new MovingAverageSimple(wt1, 4);
    var zero = new ZeroFunction();
    var wtdiff = new ArithmeticFunction(wt1, wt2, ArithmeticOperation$MINUS_getInstance());
    var crosses1 = new SeriesCrossingPoints(data, wt1, wt2, false, channelLen + averageLen | 0);
    var crosses2 = new SeriesCrossingPoints(data, wt1, wt2, true, channelLen + averageLen | 0);
    var candle1 = new MapToOneFunction(data, crosses1);
    var candle2 = new MapToOneFunction(data, crosses2);
    return listOf([zero, obLevel1, obLevel2, osLevel1, osLevel2, wt1, wt2, wtdiff, crosses1, crosses2, candle1, candle2]);
  };
  function WaveTrendWithCrosses$Companion() {
    WaveTrendWithCrosses$Companion_instance = this;
    this.CHANNEL_LENGTH_PARAMETER = 'channelLength';
    this.AVERAGE_LENGTH_PARAMETER = 'averageLength';
    this.OVER_BOUGNT_LEVEL1_PARAMETER = 'overBoughtLevel1';
    this.OVER_BOUGNT_LEVEL2_PARAMETER = 'overBoughtLevel2';
    this.OVER_SOLD_LEVEL1_PARAMETER = 'overSoldLevel1';
    this.OVER_SOLD_LEVEL2_PARAMETER = 'overSoldLevel2';
  }
  WaveTrendWithCrosses$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var WaveTrendWithCrosses$Companion_instance = null;
  function WaveTrendWithCrosses$Companion_getInstance() {
    if (WaveTrendWithCrosses$Companion_instance === null) {
      new WaveTrendWithCrosses$Companion();
    }
    return WaveTrendWithCrosses$Companion_instance;
  }
  WaveTrendWithCrosses.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'WaveTrendWithCrosses',
    interfaces: [StudyBuilder]
  };
  function WeightedClose() {
    StudyBuilder.call(this);
  }
  WeightedClose.prototype.validateParameters_x7u0o8$ = function (params) {
    StudyBuilder.prototype.validateLength_x7u0o8$.call(this, params);
  };
  WeightedClose.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    var tmp$;
    var length = typeof (tmp$ = params.get_11rb$(StudyBuilder$Companion_getInstance().LENGTH_PARAMETER)) === 'number' ? tmp$ : throwCCE();
    var close = new PriceSourceFunction(data, PriceFieldEnum$CLOSE_getInstance());
    var high = new PriceSourceFunction(data, PriceFieldEnum$HIGH_getInstance());
    var low = new PriceSourceFunction(data, PriceFieldEnum$LOW_getInstance());
    var c2 = new ConstantFunction(2.0);
    var c4 = new ConstantFunction(4.0);
    var sumPrices = new ArithmeticFunction(new ArithmeticFunction(c2, close, ArithmeticOperation$MULT_getInstance()), new ArithmeticFunction(high, low, ArithmeticOperation$PLUS_getInstance()), ArithmeticOperation$PLUS_getInstance());
    var wtdClose = new ArithmeticFunction(sumPrices, c4, ArithmeticOperation$DIV_getInstance());
    var avg = new MovingAverageSimple(wtdClose, length);
    return listOf([wtdClose, avg]);
  };
  WeightedClose.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'WeightedClose',
    interfaces: [StudyBuilder]
  };
  function WildersSmoothing() {
    StudyBuilder.call(this);
  }
  WildersSmoothing.prototype.validateParameters_x7u0o8$ = function (params) {
    StudyBuilder.prototype.validateLength_x7u0o8$.call(this, params);
    StudyBuilder.prototype.validatePriceField_x7u0o8$.call(this, params);
    StudyBuilder.prototype.validateDisplace_x7u0o8$.call(this, params);
  };
  WildersSmoothing.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    var tmp$, tmp$_0, tmp$_1;
    var length = typeof (tmp$ = params.get_11rb$(StudyBuilder$Companion_getInstance().LENGTH_PARAMETER)) === 'number' ? tmp$ : throwCCE();
    var displace = typeof (tmp$_0 = params.get_11rb$(StudyBuilder$Companion_getInstance().DISPLACE_PARAMETER)) === 'number' ? tmp$_0 : throwCCE();
    var priceField = Kotlin.isType(tmp$_1 = params.get_11rb$(StudyBuilder$Companion_getInstance().PRICE_PARAMETER), PriceFieldEnum) ? tmp$_1 : throwCCE();
    var priceFunc = new PriceSourceFunction(data, priceField);
    var wildersFunc = new WildersAverage(priceFunc, length);
    var displacedFunc = new DisplacementFunction(wildersFunc, displace);
    return listOf_0(displacedFunc);
  };
  WildersSmoothing.prototype.getExpansionSize_x7u0o8$ = function (params) {
    var tmp$;
    var displace = typeof (tmp$ = params.get_11rb$(StudyBuilder$Companion_getInstance().DISPLACE_PARAMETER)) === 'number' ? tmp$ : throwCCE();
    return -displace | 0;
  };
  WildersSmoothing.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'WildersSmoothing',
    interfaces: [StudyBuilder]
  };
  function WilliamsAD() {
    StudyBuilder.call(this);
  }
  WilliamsAD.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    var williamsAD = new WilliamsADFunction(data);
    return listOf([williamsAD, new ZeroFunction()]);
  };
  WilliamsAD.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'WilliamsAD',
    interfaces: [StudyBuilder]
  };
  function WilliamsAlligator() {
    WilliamsAlligator$Companion_getInstance();
    StudyBuilder.call(this);
  }
  WilliamsAlligator.prototype.validateParameters_x7u0o8$ = function (params) {
    StudyBuilder.prototype.validateParameter_ez016i$.call(this, params, WilliamsAlligator$Companion_getInstance().PRICE_HIGH_PARAMETER);
    StudyBuilder.prototype.validateParameter_ez016i$.call(this, params, WilliamsAlligator$Companion_getInstance().PRICE_LOW_PARAMETER);
    StudyBuilder.prototype.validateInteger_ez016i$.call(this, params, WilliamsAlligator$Companion_getInstance().JAW_LENGTH_PARAMETER);
    StudyBuilder.prototype.validateInteger_ez016i$.call(this, params, WilliamsAlligator$Companion_getInstance().JAW_DISPLACE_PARAMETER);
    StudyBuilder.prototype.validateInteger_ez016i$.call(this, params, WilliamsAlligator$Companion_getInstance().TEETH_LENGTH_PARAMETER);
    StudyBuilder.prototype.validateInteger_ez016i$.call(this, params, WilliamsAlligator$Companion_getInstance().TEETH_DISPLACE_PARAMETER);
    StudyBuilder.prototype.validateInteger_ez016i$.call(this, params, WilliamsAlligator$Companion_getInstance().LIPS_LENGTH_PARAMETER);
    StudyBuilder.prototype.validateInteger_ez016i$.call(this, params, WilliamsAlligator$Companion_getInstance().LIPS_DISPLACE_PARAMETER);
    StudyBuilder.prototype.validateAverageField_x7u0o8$.call(this, params);
  };
  WilliamsAlligator.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7;
    var priceHigh = Kotlin.isType(tmp$ = params.get_11rb$(WilliamsAlligator$Companion_getInstance().PRICE_HIGH_PARAMETER), PriceFieldEnum) ? tmp$ : throwCCE();
    var priceLow = Kotlin.isType(tmp$_0 = params.get_11rb$(WilliamsAlligator$Companion_getInstance().PRICE_LOW_PARAMETER), PriceFieldEnum) ? tmp$_0 : throwCCE();
    var jawLength = typeof (tmp$_1 = params.get_11rb$(WilliamsAlligator$Companion_getInstance().JAW_LENGTH_PARAMETER)) === 'number' ? tmp$_1 : throwCCE();
    var jawDisplace = typeof (tmp$_2 = params.get_11rb$(WilliamsAlligator$Companion_getInstance().JAW_DISPLACE_PARAMETER)) === 'number' ? tmp$_2 : throwCCE();
    var teethLength = typeof (tmp$_3 = params.get_11rb$(WilliamsAlligator$Companion_getInstance().TEETH_LENGTH_PARAMETER)) === 'number' ? tmp$_3 : throwCCE();
    var teethDisplace = typeof (tmp$_4 = params.get_11rb$(WilliamsAlligator$Companion_getInstance().TEETH_DISPLACE_PARAMETER)) === 'number' ? tmp$_4 : throwCCE();
    var lipsLength = typeof (tmp$_5 = params.get_11rb$(WilliamsAlligator$Companion_getInstance().LIPS_LENGTH_PARAMETER)) === 'number' ? tmp$_5 : throwCCE();
    var lipsDisplace = typeof (tmp$_6 = params.get_11rb$(WilliamsAlligator$Companion_getInstance().LIPS_DISPLACE_PARAMETER)) === 'number' ? tmp$_6 : throwCCE();
    var averageType = Kotlin.isType(tmp$_7 = params.get_11rb$(StudyBuilder$Companion_getInstance().AVERAGE_PARAMETER), AverageTypeEnum) ? tmp$_7 : throwCCE();
    var medianPrice = WilliamsAlligator$Companion_getInstance().constructMedianPrice_e6pwgq$(data, priceHigh, priceLow);
    var jawFunction = WilliamsAlligator$Companion_getInstance().constructAlligatorFunction_z9v3e8$(medianPrice, jawLength, -jawDisplace | 0, averageType);
    var teethFunction = WilliamsAlligator$Companion_getInstance().constructAlligatorFunction_z9v3e8$(medianPrice, teethLength, -teethDisplace | 0, averageType);
    var lipsFunction = WilliamsAlligator$Companion_getInstance().constructAlligatorFunction_z9v3e8$(medianPrice, lipsLength, -lipsDisplace | 0, averageType);
    return listOf([jawFunction, teethFunction, lipsFunction]);
  };
  WilliamsAlligator.prototype.getExpansionSize_x7u0o8$ = function (params) {
    var tmp$, tmp$_0, tmp$_1;
    var teethDisplace = typeof (tmp$ = params.get_11rb$(WilliamsAlligator$Companion_getInstance().TEETH_DISPLACE_PARAMETER)) === 'number' ? tmp$ : throwCCE();
    var jawDisplace = typeof (tmp$_0 = params.get_11rb$(WilliamsAlligator$Companion_getInstance().JAW_DISPLACE_PARAMETER)) === 'number' ? tmp$_0 : throwCCE();
    var lipsDisplace = typeof (tmp$_1 = params.get_11rb$(WilliamsAlligator$Companion_getInstance().LIPS_DISPLACE_PARAMETER)) === 'number' ? tmp$_1 : throwCCE();
    return MathUtils_getInstance().max_pmhfmb$(new Int32Array([teethDisplace, lipsDisplace, jawDisplace]));
  };
  function WilliamsAlligator$Companion() {
    WilliamsAlligator$Companion_instance = this;
    this.JAW_LENGTH_PARAMETER = 'jawLength';
    this.JAW_DISPLACE_PARAMETER = 'jawDisplace';
    this.TEETH_LENGTH_PARAMETER = 'teethLength';
    this.TEETH_DISPLACE_PARAMETER = 'teethDisplace';
    this.LIPS_LENGTH_PARAMETER = 'lipsLength';
    this.LIPS_DISPLACE_PARAMETER = 'lipsDisplace';
    this.PRICE_HIGH_PARAMETER = 'priceHigh';
    this.PRICE_LOW_PARAMETER = 'priceLow';
  }
  WilliamsAlligator$Companion.prototype.constructMedianPrice_e6pwgq$ = function (data, priceHigh, priceLow) {
    var highPrice = new PriceSourceFunction(data, priceHigh);
    var lowPrice = new PriceSourceFunction(data, priceLow);
    return new ArithmeticFunction(highPrice, lowPrice, ArithmeticOperation$MIDPOINT_getInstance());
  };
  WilliamsAlligator$Companion.prototype.constructAlligatorFunction_z9v3e8$ = function (medianPrice, averageLength, displacementLength, averageType) {
    var averageFunction = CommonFunctions_getInstance().constructAverage_dtut4e$(averageType, medianPrice, averageLength);
    return new DisplacementFunction(averageFunction, displacementLength);
  };
  WilliamsAlligator$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var WilliamsAlligator$Companion_instance = null;
  function WilliamsAlligator$Companion_getInstance() {
    if (WilliamsAlligator$Companion_instance === null) {
      new WilliamsAlligator$Companion();
    }
    return WilliamsAlligator$Companion_instance;
  }
  WilliamsAlligator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'WilliamsAlligator',
    interfaces: [StudyBuilder]
  };
  function WilliamsFractal() {
    WilliamsFractal$Companion_getInstance();
    StudyBuilder.call(this);
  }
  WilliamsFractal.prototype.validateParameters_x7u0o8$ = function (params) {
    StudyBuilder.prototype.validateInteger_ez016i$.call(this, params, WilliamsFractal$Companion_getInstance().OFFSET_PARAMETER_0);
  };
  WilliamsFractal.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    var tmp$;
    var offset = typeof (tmp$ = params.get_11rb$(WilliamsFractal$Companion_getInstance().OFFSET_PARAMETER_0)) === 'number' ? tmp$ : throwCCE();
    var priceHigh = new PriceSourceFunction(data, PriceFieldEnum$HIGH_getInstance());
    var priceLow = new PriceSourceFunction(data, PriceFieldEnum$LOW_getInstance());
    var upFractal = new WilliamsFractalFilter(priceHigh, offset, FractalOperation$UP_getInstance());
    var downFractal = new WilliamsFractalFilter(priceLow, offset, FractalOperation$DOWN_getInstance());
    return listOf([upFractal, downFractal]);
  };
  function WilliamsFractal$Companion() {
    WilliamsFractal$Companion_instance = this;
    this.OFFSET_PARAMETER_0 = 'offset';
  }
  WilliamsFractal$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var WilliamsFractal$Companion_instance = null;
  function WilliamsFractal$Companion_getInstance() {
    if (WilliamsFractal$Companion_instance === null) {
      new WilliamsFractal$Companion();
    }
    return WilliamsFractal$Companion_instance;
  }
  WilliamsFractal.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'WilliamsFractal',
    interfaces: [StudyBuilder]
  };
  function WilliamsPercentRange() {
    WilliamsPercentRange$Companion_getInstance();
    StudyBuilder.call(this);
  }
  WilliamsPercentRange.prototype.validateParameters_x7u0o8$ = function (params) {
    StudyBuilder.prototype.validateLength_x7u0o8$.call(this, params);
    StudyBuilder.prototype.validateInteger_ez016i$.call(this, params, WilliamsPercentRange$Companion_getInstance().OVERBOUGHT_PARAMETER);
    StudyBuilder.prototype.validateInteger_ez016i$.call(this, params, WilliamsPercentRange$Companion_getInstance().OVERSOLD_PARAMETER);
  };
  WilliamsPercentRange.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    var tmp$, tmp$_0, tmp$_1;
    var length = typeof (tmp$ = params.get_11rb$(StudyBuilder$Companion_getInstance().LENGTH_PARAMETER)) === 'number' ? tmp$ : throwCCE();
    var overbought = typeof (tmp$_0 = params.get_11rb$(WilliamsPercentRange$Companion_getInstance().OVERBOUGHT_PARAMETER)) === 'number' ? tmp$_0 : throwCCE();
    var oversold = typeof (tmp$_1 = params.get_11rb$(WilliamsPercentRange$Companion_getInstance().OVERSOLD_PARAMETER)) === 'number' ? tmp$_1 : throwCCE();
    var highPrice = new PriceSourceFunction(data, PriceFieldEnum$HIGH_getInstance());
    var hh = new HighestFunction(highPrice, length);
    var hh2 = new HighestFunction(highPrice, length);
    var lowPrice = new PriceSourceFunction(data, PriceFieldEnum$LOW_getInstance());
    var ll = new LowestFunction(lowPrice, length);
    var close = new PriceSourceFunction(data, PriceFieldEnum$CLOSE_getInstance());
    var c100 = new ConstantFunction(-100.0);
    var wpr = WindowFunction_init_0(new ArithmeticFunction(new ArithmeticFunction(new ArithmeticFunction(hh, close, ArithmeticOperation$MINUS_getInstance()), new ArithmeticFunction(hh2, ll, ArithmeticOperation$MINUS_getInstance()), ArithmeticOperation$DIV_ZERO_getInstance()), c100, ArithmeticOperation$MULT_getInstance()), 0, true);
    var overboughtF = new ConstantFunction(overbought);
    var oversoldF = new ConstantFunction(oversold);
    return listOf([wpr, oversoldF, overboughtF]);
  };
  function WilliamsPercentRange$Companion() {
    WilliamsPercentRange$Companion_instance = this;
    this.OVERBOUGHT_PARAMETER = 'overbought';
    this.OVERSOLD_PARAMETER = 'oversold';
  }
  WilliamsPercentRange$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var WilliamsPercentRange$Companion_instance = null;
  function WilliamsPercentRange$Companion_getInstance() {
    if (WilliamsPercentRange$Companion_instance === null) {
      new WilliamsPercentRange$Companion();
    }
    return WilliamsPercentRange$Companion_instance;
  }
  WilliamsPercentRange.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'WilliamsPercentRange',
    interfaces: [StudyBuilder]
  };
  function ZigZag() {
    ZigZag$Companion_getInstance();
    StudyBuilder.call(this);
  }
  ZigZag.prototype.validateParameters_x7u0o8$ = function (params) {
    StudyBuilder.prototype.validatePriceField_x7u0o8$.call(this, params);
    StudyBuilder.prototype.validateInteger_ez016i$.call(this, params, ZigZag$Companion_getInstance().DEVIATION_PARAMETER);
  };
  ZigZag.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    var tmp$, tmp$_0;
    var priceField = Kotlin.isType(tmp$ = params.get_11rb$(StudyBuilder$Companion_getInstance().PRICE_PARAMETER), PriceFieldEnum) ? tmp$ : throwCCE();
    var priceSource = new PriceSourceFunction(data, priceField);
    var deviation = typeof (tmp$_0 = params.get_11rb$(ZigZag$Companion_getInstance().DEVIATION_PARAMETER)) === 'number' ? tmp$_0 : throwCCE();
    var zigzag = WindowFunction_init_0(new ZigZagFunction(priceSource, deviation / 10000.0), 0, true);
    return listOf_0(zigzag);
  };
  function ZigZag$Companion() {
    ZigZag$Companion_instance = this;
    this.DEVIATION_PARAMETER = 'deviation';
  }
  ZigZag$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ZigZag$Companion_instance = null;
  function ZigZag$Companion_getInstance() {
    if (ZigZag$Companion_instance === null) {
      new ZigZag$Companion();
    }
    return ZigZag$Companion_instance;
  }
  ZigZag.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ZigZag',
    interfaces: [StudyBuilder]
  };
  function AbsFunctionStudy() {
    StudyBuilder.call(this);
  }
  AbsFunctionStudy.prototype.validateParameters_x7u0o8$ = function (params) {
    StudyBuilder.prototype.validatePriceField_x7u0o8$.call(this, params);
  };
  AbsFunctionStudy.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    var tmp$;
    var field = Kotlin.isType(tmp$ = params.get_11rb$(StudyBuilder$Companion_getInstance().PRICE_PARAMETER), PriceFieldEnum) ? tmp$ : throwCCE();
    var priceSourceFunction = new PriceSourceFunction(data, field);
    var prSource = new AbsFunction(priceSourceFunction);
    return listOf_0(prSource);
  };
  AbsFunctionStudy.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AbsFunctionStudy',
    interfaces: [StudyBuilder]
  };
  function ArithmeticFunctionStudy() {
    ArithmeticFunctionStudy$Companion_getInstance();
    StudyBuilder.call(this);
  }
  ArithmeticFunctionStudy.prototype.validateParameters_x7u0o8$ = function (params) {
    StudyBuilder.prototype.validatePriceField_ez016i$.call(this, params, ArithmeticFunctionStudy$Companion_getInstance().LEFT_PRICE_PARAMETER_0);
    StudyBuilder.prototype.validatePriceField_ez016i$.call(this, params, ArithmeticFunctionStudy$Companion_getInstance().RIGHT_PRICE_PARAMETER_0);
  };
  ArithmeticFunctionStudy.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    return listOf([ArithmeticFunctionStudy$Companion_getInstance().constructArithmeticFunction_0(data, params, ArithmeticOperation$PLUS_getInstance()), ArithmeticFunctionStudy$Companion_getInstance().constructArithmeticFunction_0(data, params, ArithmeticOperation$MINUS_getInstance()), ArithmeticFunctionStudy$Companion_getInstance().constructArithmeticFunction_0(data, params, ArithmeticOperation$MULT_getInstance()), ArithmeticFunctionStudy$Companion_getInstance().constructArithmeticFunction_0(data, params, ArithmeticOperation$DIV_getInstance()), ArithmeticFunctionStudy$Companion_getInstance().constructArithmeticFunction_0(data, params, ArithmeticOperation$DIV_ZERO_getInstance()), ArithmeticFunctionStudy$Companion_getInstance().constructArithmeticFunction_0(data, params, ArithmeticOperation$MIDPOINT_getInstance()), ArithmeticFunctionStudy$Companion_getInstance().constructArithmeticFunction_0(data, params, ArithmeticOperation$MAX_getInstance()), ArithmeticFunctionStudy$Companion_getInstance().constructArithmeticFunction_0(data, params, ArithmeticOperation$DIFF_DIV_SUM_ZERO_getInstance()), ArithmeticFunctionStudy$Companion_getInstance().constructArithmeticFunction_0(data, params, ArithmeticOperation$ABSDIFF_DIV_SUM_getInstance()), ArithmeticFunctionStudy$Companion_getInstance().constructArithmeticFunction_0(data, params, ArithmeticOperation$DIFF_DIV_RIGHT_getInstance()), ArithmeticFunctionStudy$Companion_getInstance().constructArithmeticFunction_0(data, params, ArithmeticOperation$DIFF_DIV_LEFT_getInstance())]);
  };
  function ArithmeticFunctionStudy$Companion() {
    ArithmeticFunctionStudy$Companion_instance = this;
    this.LEFT_PRICE_PARAMETER_0 = 'leftPriceParameter';
    this.RIGHT_PRICE_PARAMETER_0 = 'rightPriceParameter';
  }
  ArithmeticFunctionStudy$Companion.prototype.constructArithmeticFunction_0 = function (data, params, operation) {
    var tmp$, tmp$_0;
    var leftPrice = new PriceSourceFunction(data, Kotlin.isType(tmp$ = params.get_11rb$(this.LEFT_PRICE_PARAMETER_0), PriceFieldEnum) ? tmp$ : throwCCE());
    var rightPrice = new PriceSourceFunction(data, Kotlin.isType(tmp$_0 = params.get_11rb$(this.RIGHT_PRICE_PARAMETER_0), PriceFieldEnum) ? tmp$_0 : throwCCE());
    return new ArithmeticFunction(leftPrice, rightPrice, operation);
  };
  ArithmeticFunctionStudy$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ArithmeticFunctionStudy$Companion_instance = null;
  function ArithmeticFunctionStudy$Companion_getInstance() {
    if (ArithmeticFunctionStudy$Companion_instance === null) {
      new ArithmeticFunctionStudy$Companion();
    }
    return ArithmeticFunctionStudy$Companion_instance;
  }
  ArithmeticFunctionStudy.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ArithmeticFunctionStudy',
    interfaces: [StudyBuilder]
  };
  function BuyingPressureStudy() {
    BuyingPressureStudy$Companion_getInstance();
    StudyBuilder.call(this);
  }
  BuyingPressureStudy.prototype.validateParameters_x7u0o8$ = function (params) {
    StudyBuilder.prototype.validatePriceField_ez016i$.call(this, params, BuyingPressureStudy$Companion_getInstance().LOW_PRICE_PARAMETER_0);
    StudyBuilder.prototype.validatePriceField_ez016i$.call(this, params, BuyingPressureStudy$Companion_getInstance().CLOSE_PRICE_PARAMETER_0);
  };
  BuyingPressureStudy.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    var tmp$, tmp$_0;
    var lowPrice = new PriceSourceFunction(data, Kotlin.isType(tmp$ = params.get_11rb$(BuyingPressureStudy$Companion_getInstance().LOW_PRICE_PARAMETER_0), PriceFieldEnum) ? tmp$ : throwCCE());
    var closePrice = new PriceSourceFunction(data, Kotlin.isType(tmp$_0 = params.get_11rb$(BuyingPressureStudy$Companion_getInstance().CLOSE_PRICE_PARAMETER_0), PriceFieldEnum) ? tmp$_0 : throwCCE());
    return listOf_0(new BuyingPressure(lowPrice, closePrice));
  };
  function BuyingPressureStudy$Companion() {
    BuyingPressureStudy$Companion_instance = this;
    this.LOW_PRICE_PARAMETER_0 = 'lowPriceParameter';
    this.CLOSE_PRICE_PARAMETER_0 = 'closePriceParameter';
  }
  BuyingPressureStudy$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var BuyingPressureStudy$Companion_instance = null;
  function BuyingPressureStudy$Companion_getInstance() {
    if (BuyingPressureStudy$Companion_instance === null) {
      new BuyingPressureStudy$Companion();
    }
    return BuyingPressureStudy$Companion_instance;
  }
  BuyingPressureStudy.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BuyingPressureStudy',
    interfaces: [StudyBuilder]
  };
  function CloseLocationValueFunctionStudy() {
    CloseLocationValueFunctionStudy$Companion_getInstance();
    StudyBuilder.call(this);
  }
  CloseLocationValueFunctionStudy.prototype.validateParameters_x7u0o8$ = function (params) {
    StudyBuilder.prototype.validatePriceField_ez016i$.call(this, params, CloseLocationValueFunctionStudy$Companion_getInstance().LOW_PRICE_PARAMETER_0);
    StudyBuilder.prototype.validatePriceField_ez016i$.call(this, params, CloseLocationValueFunctionStudy$Companion_getInstance().CLOSE_PRICE_PARAMETER_0);
    StudyBuilder.prototype.validatePriceField_ez016i$.call(this, params, CloseLocationValueFunctionStudy$Companion_getInstance().HIGH_PRICE_PARAMETER_0);
  };
  CloseLocationValueFunctionStudy.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    var tmp$, tmp$_0, tmp$_1;
    var lowPrice = new PriceSourceFunction(data, Kotlin.isType(tmp$ = params.get_11rb$(CloseLocationValueFunctionStudy$Companion_getInstance().LOW_PRICE_PARAMETER_0), PriceFieldEnum) ? tmp$ : throwCCE());
    var closePrice = new PriceSourceFunction(data, Kotlin.isType(tmp$_0 = params.get_11rb$(CloseLocationValueFunctionStudy$Companion_getInstance().CLOSE_PRICE_PARAMETER_0), PriceFieldEnum) ? tmp$_0 : throwCCE());
    var highPrice = new PriceSourceFunction(data, Kotlin.isType(tmp$_1 = params.get_11rb$(CloseLocationValueFunctionStudy$Companion_getInstance().HIGH_PRICE_PARAMETER_0), PriceFieldEnum) ? tmp$_1 : throwCCE());
    var result = new CloseLocationValueFunction(lowPrice, closePrice, highPrice);
    return listOf_0(result);
  };
  function CloseLocationValueFunctionStudy$Companion() {
    CloseLocationValueFunctionStudy$Companion_instance = this;
    this.LOW_PRICE_PARAMETER_0 = 'lowPriceParameter';
    this.CLOSE_PRICE_PARAMETER_0 = 'closePriceParameter';
    this.HIGH_PRICE_PARAMETER_0 = 'highPriceParameter';
  }
  CloseLocationValueFunctionStudy$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var CloseLocationValueFunctionStudy$Companion_instance = null;
  function CloseLocationValueFunctionStudy$Companion_getInstance() {
    if (CloseLocationValueFunctionStudy$Companion_instance === null) {
      new CloseLocationValueFunctionStudy$Companion();
    }
    return CloseLocationValueFunctionStudy$Companion_instance;
  }
  CloseLocationValueFunctionStudy.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CloseLocationValueFunctionStudy',
    interfaces: [StudyBuilder]
  };
  function CumulativeSumFunctionStudy() {
    StudyBuilder.call(this);
  }
  CumulativeSumFunctionStudy.prototype.validateParameters_x7u0o8$ = function (params) {
    StudyBuilder.prototype.validatePriceField_x7u0o8$.call(this, params);
  };
  CumulativeSumFunctionStudy.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    var tmp$;
    var price = new PriceSourceFunction(data, Kotlin.isType(tmp$ = params.get_11rb$(StudyBuilder$Companion_getInstance().PRICE_PARAMETER), PriceFieldEnum) ? tmp$ : throwCCE());
    var function_0 = new CumulativeSumFunction(price);
    return listOf_0(function_0);
  };
  CumulativeSumFunctionStudy.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CumulativeSumFunctionStudy',
    interfaces: [StudyBuilder]
  };
  function DiffDivPrevFunctionStudy() {
    StudyBuilder.call(this);
  }
  DiffDivPrevFunctionStudy.prototype.validateParameters_x7u0o8$ = function (params) {
    StudyBuilder.prototype.validatePriceField_x7u0o8$.call(this, params);
  };
  DiffDivPrevFunctionStudy.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    var tmp$;
    var price = new PriceSourceFunction(data, Kotlin.isType(tmp$ = params.get_11rb$(StudyBuilder$Companion_getInstance().PRICE_PARAMETER), PriceFieldEnum) ? tmp$ : throwCCE());
    var buyingPressure = new DiffDivPrevFunction(price);
    return listOf_0(buyingPressure);
  };
  DiffDivPrevFunctionStudy.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DiffDivPrevFunctionStudy',
    interfaces: [StudyBuilder]
  };
  function DiffPrevFunctionStudy() {
    StudyBuilder.call(this);
  }
  DiffPrevFunctionStudy.prototype.validateParameters_x7u0o8$ = function (params) {
    StudyBuilder.prototype.validatePriceField_x7u0o8$.call(this, params);
  };
  DiffPrevFunctionStudy.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    var tmp$;
    var price = new PriceSourceFunction(data, Kotlin.isType(tmp$ = params.get_11rb$(StudyBuilder$Companion_getInstance().PRICE_PARAMETER), PriceFieldEnum) ? tmp$ : throwCCE());
    var buyingPressure = new DiffPrevFunction(price);
    return listOf_0(buyingPressure);
  };
  DiffPrevFunctionStudy.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DiffPrevFunctionStudy',
    interfaces: [StudyBuilder]
  };
  function DirectionalIndexFunctionStudy() {
    DirectionalIndexFunctionStudy$Companion_getInstance();
    StudyBuilder.call(this);
  }
  DirectionalIndexFunctionStudy.prototype.validateParameters_x7u0o8$ = function (params) {
    StudyBuilder.prototype.validatePriceField_ez016i$.call(this, params, DirectionalIndexFunctionStudy$Companion_getInstance().DI_MINUS_0);
    StudyBuilder.prototype.validatePriceField_ez016i$.call(this, params, DirectionalIndexFunctionStudy$Companion_getInstance().DI_PLUS_0);
  };
  DirectionalIndexFunctionStudy.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    var tmp$, tmp$_0;
    var diPlus = new PriceSourceFunction(data, Kotlin.isType(tmp$ = params.get_11rb$(DirectionalIndexFunctionStudy$Companion_getInstance().DI_PLUS_0), PriceFieldEnum) ? tmp$ : throwCCE());
    var diMinus = new PriceSourceFunction(data, Kotlin.isType(tmp$_0 = params.get_11rb$(DirectionalIndexFunctionStudy$Companion_getInstance().DI_MINUS_0), PriceFieldEnum) ? tmp$_0 : throwCCE());
    return listOf_0(new DirectionalIndexFunction(diPlus, diMinus));
  };
  function DirectionalIndexFunctionStudy$Companion() {
    DirectionalIndexFunctionStudy$Companion_instance = this;
    this.DI_PLUS_0 = 'diPlus';
    this.DI_MINUS_0 = 'diMinus';
  }
  DirectionalIndexFunctionStudy$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var DirectionalIndexFunctionStudy$Companion_instance = null;
  function DirectionalIndexFunctionStudy$Companion_getInstance() {
    if (DirectionalIndexFunctionStudy$Companion_instance === null) {
      new DirectionalIndexFunctionStudy$Companion();
    }
    return DirectionalIndexFunctionStudy$Companion_instance;
  }
  DirectionalIndexFunctionStudy.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DirectionalIndexFunctionStudy',
    interfaces: [StudyBuilder]
  };
  function DirectionalMovementFunctionStudy() {
    DirectionalMovementFunctionStudy$Companion_getInstance();
    StudyBuilder.call(this);
  }
  DirectionalMovementFunctionStudy.prototype.validateParameters_x7u0o8$ = function (params) {
    StudyBuilder.prototype.validatePriceField_ez016i$.call(this, params, DirectionalMovementFunctionStudy$Companion_getInstance().MAIN_DIFF_0);
    StudyBuilder.prototype.validatePriceField_ez016i$.call(this, params, DirectionalMovementFunctionStudy$Companion_getInstance().AUX_DIFF_0);
  };
  DirectionalMovementFunctionStudy.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    var tmp$, tmp$_0;
    var mainDiff = new PriceSourceFunction(data, Kotlin.isType(tmp$ = params.get_11rb$(DirectionalMovementFunctionStudy$Companion_getInstance().MAIN_DIFF_0), PriceFieldEnum) ? tmp$ : throwCCE());
    var auxDiff = new PriceSourceFunction(data, Kotlin.isType(tmp$_0 = params.get_11rb$(DirectionalMovementFunctionStudy$Companion_getInstance().AUX_DIFF_0), PriceFieldEnum) ? tmp$_0 : throwCCE());
    return listOf_0(new DirectionalMovementFunction(mainDiff, auxDiff));
  };
  function DirectionalMovementFunctionStudy$Companion() {
    DirectionalMovementFunctionStudy$Companion_instance = this;
    this.MAIN_DIFF_0 = 'mainDiff';
    this.AUX_DIFF_0 = 'auxDiff';
  }
  DirectionalMovementFunctionStudy$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var DirectionalMovementFunctionStudy$Companion_instance = null;
  function DirectionalMovementFunctionStudy$Companion_getInstance() {
    if (DirectionalMovementFunctionStudy$Companion_instance === null) {
      new DirectionalMovementFunctionStudy$Companion();
    }
    return DirectionalMovementFunctionStudy$Companion_instance;
  }
  DirectionalMovementFunctionStudy.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DirectionalMovementFunctionStudy',
    interfaces: [StudyBuilder]
  };
  function DisplacementFunctionStudy() {
    StudyBuilder.call(this);
  }
  DisplacementFunctionStudy.prototype.validateParameters_x7u0o8$ = function (params) {
    StudyBuilder.prototype.validateDisplace_x7u0o8$.call(this, params);
  };
  DisplacementFunctionStudy.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    var tmp$, tmp$_0;
    var price = new PriceSourceFunction(data, Kotlin.isType(tmp$ = params.get_11rb$(StudyBuilder$Companion_getInstance().PRICE_PARAMETER), PriceFieldEnum) ? tmp$ : throwCCE());
    var displace = typeof (tmp$_0 = params.get_11rb$(StudyBuilder$Companion_getInstance().DISPLACE_PARAMETER)) === 'number' ? tmp$_0 : throwCCE();
    return listOf_0(new DisplacementFunction(price, displace));
  };
  DisplacementFunctionStudy.prototype.getExpansionSize_x7u0o8$ = function (params) {
    var tmp$;
    var displace = typeof (tmp$ = params.get_11rb$(StudyBuilder$Companion_getInstance().DISPLACE_PARAMETER)) === 'number' ? tmp$ : throwCCE();
    return -displace | 0;
  };
  DisplacementFunctionStudy.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DisplacementFunctionStudy',
    interfaces: [StudyBuilder]
  };
  function DorseyTrendFunctionStudy() {
    DorseyTrendFunctionStudy$Companion_getInstance();
    StudyBuilder.call(this);
  }
  DorseyTrendFunctionStudy.prototype.validateParameters_x7u0o8$ = function (params) {
    StudyBuilder.prototype.validatePriceField_x7u0o8$.call(this, params);
    StudyBuilder.prototype.validateInteger_ez016i$.call(this, params, DorseyTrendFunctionStudy$Companion_getInstance().DEVIATION_PERIOD_PARAMETER_0);
  };
  DorseyTrendFunctionStudy.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    var tmp$, tmp$_0;
    var priceSourceFunction = new PriceSourceFunction(data, Kotlin.isType(tmp$ = params.get_11rb$(StudyBuilder$Companion_getInstance().PRICE_PARAMETER), PriceFieldEnum) ? tmp$ : throwCCE());
    var deviationPeriod = typeof (tmp$_0 = params.get_11rb$(DorseyTrendFunctionStudy$Companion_getInstance().DEVIATION_PERIOD_PARAMETER_0)) === 'number' ? tmp$_0 : throwCCE();
    var upTrend = new DorseyTrendFunction(priceSourceFunction, new StandardDeviationFunction(priceSourceFunction, deviationPeriod), DorseyTrendFunction$Trend$UP_getInstance());
    var downTrend = new DorseyTrendFunction(priceSourceFunction, new StandardDeviationFunction(priceSourceFunction, deviationPeriod), DorseyTrendFunction$Trend$DOWN_getInstance());
    return listOf([upTrend, downTrend]);
  };
  function DorseyTrendFunctionStudy$Companion() {
    DorseyTrendFunctionStudy$Companion_instance = this;
    this.DEVIATION_PERIOD_PARAMETER_0 = 'deviationPeriod';
  }
  DorseyTrendFunctionStudy$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var DorseyTrendFunctionStudy$Companion_instance = null;
  function DorseyTrendFunctionStudy$Companion_getInstance() {
    if (DorseyTrendFunctionStudy$Companion_instance === null) {
      new DorseyTrendFunctionStudy$Companion();
    }
    return DorseyTrendFunctionStudy$Companion_instance;
  }
  DorseyTrendFunctionStudy.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DorseyTrendFunctionStudy',
    interfaces: [StudyBuilder]
  };
  function DynamicMomentumIndexDynamicLength() {
    DynamicMomentumIndexDynamicLength$Companion_getInstance();
    StudyBuilder.call(this);
  }
  DynamicMomentumIndexDynamicLength.prototype.validateParameters_x7u0o8$ = function (params) {
    StudyBuilder.prototype.validateInteger_ez016i$.call(this, params, DynamicMomentumIndexDynamicLength$Companion_getInstance().UPPER_LIMIT_0);
    StudyBuilder.prototype.validateInteger_ez016i$.call(this, params, DynamicMomentumIndexDynamicLength$Companion_getInstance().LOWER_LIMIT_0);
    StudyBuilder.prototype.validateInteger_ez016i$.call(this, params, DynamicMomentumIndexDynamicLength$Companion_getInstance().STDEV_LENGTH_0);
    StudyBuilder.prototype.validateInteger_ez016i$.call(this, params, DynamicMomentumIndexDynamicLength$Companion_getInstance().AVG_OF_STDEV_LENGTH_0);
    StudyBuilder.prototype.validateInteger_ez016i$.call(this, params, DynamicMomentumIndexDynamicLength$Companion_getInstance().DYMI_LENGTH_0);
  };
  DynamicMomentumIndexDynamicLength.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
    var stdevLength = typeof (tmp$ = params.get_11rb$(DynamicMomentumIndexDynamicLength$Companion_getInstance().STDEV_LENGTH_0)) === 'number' ? tmp$ : throwCCE();
    var avgOfStdevLength = typeof (tmp$_0 = params.get_11rb$(DynamicMomentumIndexDynamicLength$Companion_getInstance().AVG_OF_STDEV_LENGTH_0)) === 'number' ? tmp$_0 : throwCCE();
    var dymiLength = typeof (tmp$_1 = params.get_11rb$(DynamicMomentumIndexDynamicLength$Companion_getInstance().DYMI_LENGTH_0)) === 'number' ? tmp$_1 : throwCCE();
    var upperLimit = typeof (tmp$_2 = params.get_11rb$(DynamicMomentumIndexDynamicLength$Companion_getInstance().UPPER_LIMIT_0)) === 'number' ? tmp$_2 : throwCCE();
    var lowerLimit = typeof (tmp$_3 = params.get_11rb$(DynamicMomentumIndexDynamicLength$Companion_getInstance().LOWER_LIMIT_0)) === 'number' ? tmp$_3 : throwCCE();
    var priceFieldEnum = Kotlin.isType(tmp$_4 = params.get_11rb$(StudyBuilder$Companion_getInstance().PRICE_PARAMETER), PriceFieldEnum) ? tmp$_4 : throwCCE();
    var priceSource = new PriceSourceFunction(data, priceFieldEnum);
    var dmiFloor = DynamicMomentumIndexDynamicLength$Companion_getInstance().constructDynamicMomentumIndex_apunom$(priceSource, stdevLength, avgOfStdevLength, dymiLength, lowerLimit, upperLimit, true);
    var dmi = DynamicMomentumIndexDynamicLength$Companion_getInstance().constructDynamicMomentumIndex_apunom$(priceSource, stdevLength, avgOfStdevLength, dymiLength, lowerLimit, upperLimit, false);
    return listOf([dmiFloor, dmi, new ConstantFunction(upperLimit), new ConstantFunction(lowerLimit)]);
  };
  function DynamicMomentumIndexDynamicLength$DynamicMomentumIndexDynamicLengthFunction(priceSourceFunction, dynamicLength, lowerLimit, upperLimit) {
    AbstractCachingFunction.call(this);
    this.priceSourceFunction_0 = priceSourceFunction;
    this.dynamicLength_0 = dynamicLength;
    this.lowerLimit_0 = lowerLimit;
    this.upperLimit_0 = upperLimit;
  }
  Object.defineProperty(DynamicMomentumIndexDynamicLength$DynamicMomentumIndexDynamicLengthFunction.prototype, 'childFunctions', {
    get: function () {
      return listOf([this.priceSourceFunction_0, this.dynamicLength_0]);
    }
  });
  DynamicMomentumIndexDynamicLength$DynamicMomentumIndexDynamicLengthFunction.prototype.getValueInternal_za3lpa$ = function (index) {
    var length = this.dynamicLength_0.calculateAt(index);
    if (length < this.lowerLimit_0) {
      length = this.lowerLimit_0;
    }
     else if (length > this.upperLimit_0) {
      length = this.upperLimit_0;
    }
    return length;
  };
  DynamicMomentumIndexDynamicLength$DynamicMomentumIndexDynamicLengthFunction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DynamicMomentumIndexDynamicLengthFunction',
    interfaces: [AbstractCachingFunction]
  };
  function DynamicMomentumIndexDynamicLength$Companion() {
    DynamicMomentumIndexDynamicLength$Companion_instance = this;
    this.UPPER_LIMIT_0 = 'maxDynamicLength';
    this.LOWER_LIMIT_0 = 'minDynamicLength';
    this.STDEV_LENGTH_0 = 'stDevLength';
    this.AVG_OF_STDEV_LENGTH_0 = 'stDevAverageLength';
    this.DYMI_LENGTH_0 = 'dynamicLength';
  }
  DynamicMomentumIndexDynamicLength$Companion.prototype.constructRatio_0 = function (priceSource, stdevLength, avgOfStdevLength) {
    var std = new StandardDeviationFunction(priceSource, stdevLength);
    var std2 = new StandardDeviationFunction(priceSource, stdevLength);
    var stdAverage = new MovingAverageSimple(std2, avgOfStdevLength);
    return new ArithmeticFunction(std, stdAverage, ArithmeticOperation$DIV_getInstance());
  };
  DynamicMomentumIndexDynamicLength$Companion.prototype.constructDynamicLengthWithFloor_0 = function (ratio, dymiLength) {
    return new Floor(new ArithmeticFunction(new ConstantFunction(dymiLength), ratio, ArithmeticOperation$DIV_getInstance()));
  };
  DynamicMomentumIndexDynamicLength$Companion.prototype.constructDynamicLength_0 = function (ratio, dymiLength) {
    return new ArithmeticFunction(new ConstantFunction(dymiLength), ratio, ArithmeticOperation$DIV_getInstance());
  };
  DynamicMomentumIndexDynamicLength$Companion.prototype.constructDynamicMomentumIndex_apunom$ = function (priceSource, stdevLength, avgOfStdevLength, dymiLength, lowerLimit, upperLimit, floor) {
    var tmp$, tmp$_0;
    var ratio = this.constructRatio_0(priceSource, stdevLength, avgOfStdevLength);
    if (floor) {
      var dynamicLengthFloor = this.constructDynamicLengthWithFloor_0(ratio, dymiLength);
      return new DynamicMomentumIndexDynamicLength$DynamicMomentumIndexDynamicLengthFunction(Kotlin.isType(tmp$ = priceSource, PriceSourceFunction) ? tmp$ : throwCCE(), dynamicLengthFloor, lowerLimit, upperLimit);
    }
     else {
      var dynamicLength = this.constructDynamicLength_0(ratio, dymiLength);
      return new DynamicMomentumIndexDynamicLength$DynamicMomentumIndexDynamicLengthFunction(Kotlin.isType(tmp$_0 = priceSource, PriceSourceFunction) ? tmp$_0 : throwCCE(), dynamicLength, lowerLimit, upperLimit);
    }
  };
  DynamicMomentumIndexDynamicLength$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var DynamicMomentumIndexDynamicLength$Companion_instance = null;
  function DynamicMomentumIndexDynamicLength$Companion_getInstance() {
    if (DynamicMomentumIndexDynamicLength$Companion_instance === null) {
      new DynamicMomentumIndexDynamicLength$Companion();
    }
    return DynamicMomentumIndexDynamicLength$Companion_instance;
  }
  DynamicMomentumIndexDynamicLength.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DynamicMomentumIndexDynamicLength',
    interfaces: [StudyBuilder]
  };
  function FullRangeStandardDeviationFunctionStudy() {
    StudyBuilder.call(this);
  }
  FullRangeStandardDeviationFunctionStudy.prototype.validateParameters_x7u0o8$ = function (params) {
    StudyBuilder.prototype.validatePriceField_x7u0o8$.call(this, params);
  };
  FullRangeStandardDeviationFunctionStudy.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    var tmp$;
    var price = new PriceSourceFunction(data, Kotlin.isType(tmp$ = params.get_11rb$(StudyBuilder$Companion_getInstance().PRICE_PARAMETER), PriceFieldEnum) ? tmp$ : throwCCE());
    return listOf_0(new FullRangeStandardDeviationFunction(price, 1));
  };
  FullRangeStandardDeviationFunctionStudy.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FullRangeStandardDeviationFunctionStudy',
    interfaces: [StudyBuilder]
  };
  function HighestAllFunctionStudy() {
    StudyBuilder.call(this);
  }
  HighestAllFunctionStudy.prototype.validateParameters_x7u0o8$ = function (params) {
    StudyBuilder.prototype.validatePriceField_x7u0o8$.call(this, params);
  };
  HighestAllFunctionStudy.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    var tmp$;
    var price = new PriceSourceFunction(data, Kotlin.isType(tmp$ = params.get_11rb$(StudyBuilder$Companion_getInstance().PRICE_PARAMETER), PriceFieldEnum) ? tmp$ : throwCCE());
    return listOf_0(new HighestAllFunction(price));
  };
  HighestAllFunctionStudy.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HighestAllFunctionStudy',
    interfaces: [StudyBuilder]
  };
  function HighestFunctionStudy() {
    StudyBuilder.call(this);
  }
  HighestFunctionStudy.prototype.validateParameters_x7u0o8$ = function (params) {
    StudyBuilder.prototype.validatePriceField_x7u0o8$.call(this, params);
    StudyBuilder.prototype.validateLength_x7u0o8$.call(this, params);
  };
  HighestFunctionStudy.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    var tmp$, tmp$_0;
    var price = new PriceSourceFunction(data, Kotlin.isType(tmp$ = params.get_11rb$(StudyBuilder$Companion_getInstance().PRICE_PARAMETER), PriceFieldEnum) ? tmp$ : throwCCE());
    var length = typeof (tmp$_0 = params.get_11rb$(StudyBuilder$Companion_getInstance().LENGTH_PARAMETER)) === 'number' ? tmp$_0 : throwCCE();
    return listOf_0(new HighestFunction(price, length));
  };
  HighestFunctionStudy.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HighestFunctionStudy',
    interfaces: [StudyBuilder]
  };
  function HighestHighPeriodStudy() {
    StudyBuilder.call(this);
  }
  HighestHighPeriodStudy.prototype.validateParameters_x7u0o8$ = function (params) {
    StudyBuilder.prototype.validatePriceField_x7u0o8$.call(this, params);
    StudyBuilder.prototype.validateLength_x7u0o8$.call(this, params);
  };
  HighestHighPeriodStudy.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    var tmp$, tmp$_0;
    var price = new PriceSourceFunction(data, Kotlin.isType(tmp$ = params.get_11rb$(StudyBuilder$Companion_getInstance().PRICE_PARAMETER), PriceFieldEnum) ? tmp$ : throwCCE());
    var length = typeof (tmp$_0 = params.get_11rb$(StudyBuilder$Companion_getInstance().LENGTH_PARAMETER)) === 'number' ? tmp$_0 : throwCCE();
    return listOf_0(new HighestHighPeriod(price, length));
  };
  HighestHighPeriodStudy.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HighestHighPeriodStudy',
    interfaces: [StudyBuilder]
  };
  function IntradaySumFunctionStudy() {
    StudyBuilder.call(this);
  }
  IntradaySumFunctionStudy.prototype.validateParameters_x7u0o8$ = function (params) {
    StudyBuilder.prototype.validatePriceField_x7u0o8$.call(this, params);
    StudyBuilder.prototype.validateLength_x7u0o8$.call(this, params);
  };
  IntradaySumFunctionStudy.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    var tmp$, tmp$_0;
    var price = new PriceSourceFunction(data, Kotlin.isType(tmp$ = params.get_11rb$(StudyBuilder$Companion_getInstance().PRICE_PARAMETER), PriceFieldEnum) ? tmp$ : throwCCE());
    var length = typeof (tmp$_0 = params.get_11rb$(StudyBuilder$Companion_getInstance().LENGTH_PARAMETER)) === 'number' ? tmp$_0 : throwCCE();
    return listOf_0(new IntradaySumFunction(price, length));
  };
  IntradaySumFunctionStudy.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'IntradaySumFunctionStudy',
    interfaces: [StudyBuilder]
  };
  function LinearDeviationFunctionStudy() {
    StudyBuilder.call(this);
  }
  LinearDeviationFunctionStudy.prototype.validateParameters_x7u0o8$ = function (params) {
    StudyBuilder.prototype.validatePriceField_x7u0o8$.call(this, params);
    StudyBuilder.prototype.validateLength_x7u0o8$.call(this, params);
  };
  LinearDeviationFunctionStudy.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    var tmp$, tmp$_0;
    var price = new PriceSourceFunction(data, Kotlin.isType(tmp$ = params.get_11rb$(StudyBuilder$Companion_getInstance().PRICE_PARAMETER), PriceFieldEnum) ? tmp$ : throwCCE());
    var length = typeof (tmp$_0 = params.get_11rb$(StudyBuilder$Companion_getInstance().LENGTH_PARAMETER)) === 'number' ? tmp$_0 : throwCCE();
    return listOf_0(new LinearDeviationFunction(price, length));
  };
  LinearDeviationFunctionStudy.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LinearDeviationFunctionStudy',
    interfaces: [StudyBuilder]
  };
  function LinearRegressionCurveFunctionStudy() {
    StudyBuilder.call(this);
  }
  LinearRegressionCurveFunctionStudy.prototype.validateParameters_x7u0o8$ = function (params) {
    StudyBuilder.prototype.validatePriceField_x7u0o8$.call(this, params);
    StudyBuilder.prototype.validateLength_x7u0o8$.call(this, params);
  };
  LinearRegressionCurveFunctionStudy.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    var tmp$, tmp$_0;
    var price = new PriceSourceFunction(data, Kotlin.isType(tmp$ = params.get_11rb$(StudyBuilder$Companion_getInstance().PRICE_PARAMETER), PriceFieldEnum) ? tmp$ : throwCCE());
    var length = typeof (tmp$_0 = params.get_11rb$(StudyBuilder$Companion_getInstance().LENGTH_PARAMETER)) === 'number' ? tmp$_0 : throwCCE();
    return listOf_0(new LinearRegressionCurveFunction(price, length));
  };
  LinearRegressionCurveFunctionStudy.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LinearRegressionCurveFunctionStudy',
    interfaces: [StudyBuilder]
  };
  function LnDivPrevFunctionStudy() {
    StudyBuilder.call(this);
  }
  LnDivPrevFunctionStudy.prototype.validateParameters_x7u0o8$ = function (params) {
    StudyBuilder.prototype.validatePriceField_x7u0o8$.call(this, params);
  };
  LnDivPrevFunctionStudy.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    var tmp$;
    var price = new PriceSourceFunction(data, Kotlin.isType(tmp$ = params.get_11rb$(StudyBuilder$Companion_getInstance().PRICE_PARAMETER), PriceFieldEnum) ? tmp$ : throwCCE());
    return listOf_0(new LnDivPrevFunction(price));
  };
  LnDivPrevFunctionStudy.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LnDivPrevFunctionStudy',
    interfaces: [StudyBuilder]
  };
  function LogarithmFunctionStudy() {
    StudyBuilder.call(this);
  }
  LogarithmFunctionStudy.prototype.validateParameters_x7u0o8$ = function (params) {
    StudyBuilder.prototype.validatePriceField_x7u0o8$.call(this, params);
  };
  LogarithmFunctionStudy.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    var tmp$;
    var price = new PriceSourceFunction(data, Kotlin.isType(tmp$ = params.get_11rb$(StudyBuilder$Companion_getInstance().PRICE_PARAMETER), PriceFieldEnum) ? tmp$ : throwCCE());
    return listOf_0(new LogarithmFunction(price));
  };
  LogarithmFunctionStudy.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LogarithmFunctionStudy',
    interfaces: [StudyBuilder]
  };
  function LowestFunctionStudy() {
    StudyBuilder.call(this);
  }
  LowestFunctionStudy.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    var tmp$, tmp$_0;
    var price = new PriceSourceFunction(data, Kotlin.isType(tmp$ = params.get_11rb$(StudyBuilder$Companion_getInstance().PRICE_PARAMETER), PriceFieldEnum) ? tmp$ : throwCCE());
    var length = typeof (tmp$_0 = params.get_11rb$(StudyBuilder$Companion_getInstance().LENGTH_PARAMETER)) === 'number' ? tmp$_0 : throwCCE();
    return listOf_0(new LowestFunction(price, length));
  };
  LowestFunctionStudy.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LowestFunctionStudy',
    interfaces: [StudyBuilder]
  };
  function LowestLowPeriodStudy() {
    StudyBuilder.call(this);
  }
  LowestLowPeriodStudy.prototype.validateParameters_x7u0o8$ = function (params) {
    StudyBuilder.prototype.validatePriceField_x7u0o8$.call(this, params);
    StudyBuilder.prototype.validateLength_x7u0o8$.call(this, params);
  };
  LowestLowPeriodStudy.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    var tmp$, tmp$_0;
    var price = new PriceSourceFunction(data, Kotlin.isType(tmp$ = params.get_11rb$(StudyBuilder$Companion_getInstance().PRICE_PARAMETER), PriceFieldEnum) ? tmp$ : throwCCE());
    var length = typeof (tmp$_0 = params.get_11rb$(StudyBuilder$Companion_getInstance().LENGTH_PARAMETER)) === 'number' ? tmp$_0 : throwCCE();
    return listOf_0(new LowestLowPeriod(price, length));
  };
  LowestLowPeriodStudy.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LowestLowPeriodStudy',
    interfaces: [StudyBuilder]
  };
  function MaxValueFunctionStudy() {
    MaxValueFunctionStudy$Companion_getInstance();
    StudyBuilder.call(this);
  }
  MaxValueFunctionStudy.prototype.validateParameters_x7u0o8$ = function (params) {
    StudyBuilder.prototype.validatePriceField_ez016i$.call(this, params, MaxValueFunctionStudy$Companion_getInstance().FIRST_PRICE_PARAMETER_0);
    StudyBuilder.prototype.validatePriceField_ez016i$.call(this, params, MaxValueFunctionStudy$Companion_getInstance().SECOND_PRICE_PARAMETER_0);
  };
  MaxValueFunctionStudy.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    var tmp$, tmp$_0;
    var firstPrice = new PriceSourceFunction(data, Kotlin.isType(tmp$ = params.get_11rb$(MaxValueFunctionStudy$Companion_getInstance().FIRST_PRICE_PARAMETER_0), PriceFieldEnum) ? tmp$ : throwCCE());
    var secondPrice = new PriceSourceFunction(data, Kotlin.isType(tmp$_0 = params.get_11rb$(MaxValueFunctionStudy$Companion_getInstance().SECOND_PRICE_PARAMETER_0), PriceFieldEnum) ? tmp$_0 : throwCCE());
    return listOf_0(new MaxValueFunction([firstPrice, secondPrice]));
  };
  function MaxValueFunctionStudy$Companion() {
    MaxValueFunctionStudy$Companion_instance = this;
    this.FIRST_PRICE_PARAMETER_0 = 'firstPrice';
    this.SECOND_PRICE_PARAMETER_0 = 'secondPrice';
  }
  MaxValueFunctionStudy$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var MaxValueFunctionStudy$Companion_instance = null;
  function MaxValueFunctionStudy$Companion_getInstance() {
    if (MaxValueFunctionStudy$Companion_instance === null) {
      new MaxValueFunctionStudy$Companion();
    }
    return MaxValueFunctionStudy$Companion_instance;
  }
  MaxValueFunctionStudy.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MaxValueFunctionStudy',
    interfaces: [StudyBuilder]
  };
  function MinValueFunctionStudy() {
    MinValueFunctionStudy$Companion_getInstance();
    StudyBuilder.call(this);
  }
  MinValueFunctionStudy.prototype.validateParameters_x7u0o8$ = function (params) {
    StudyBuilder.prototype.validatePriceField_ez016i$.call(this, params, MinValueFunctionStudy$Companion_getInstance().FIRST_PRICE_PARAMETER_0);
    StudyBuilder.prototype.validatePriceField_ez016i$.call(this, params, MinValueFunctionStudy$Companion_getInstance().SECOND_PRICE_PARAMETER_0);
  };
  MinValueFunctionStudy.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    var tmp$, tmp$_0;
    var firstPrice = new PriceSourceFunction(data, Kotlin.isType(tmp$ = params.get_11rb$(MinValueFunctionStudy$Companion_getInstance().FIRST_PRICE_PARAMETER_0), PriceFieldEnum) ? tmp$ : throwCCE());
    var secondPrice = new PriceSourceFunction(data, Kotlin.isType(tmp$_0 = params.get_11rb$(MinValueFunctionStudy$Companion_getInstance().SECOND_PRICE_PARAMETER_0), PriceFieldEnum) ? tmp$_0 : throwCCE());
    return listOf_0(new MinValueFunction([firstPrice, secondPrice]));
  };
  function MinValueFunctionStudy$Companion() {
    MinValueFunctionStudy$Companion_instance = this;
    this.FIRST_PRICE_PARAMETER_0 = 'firstPrice';
    this.SECOND_PRICE_PARAMETER_0 = 'secondPrice';
  }
  MinValueFunctionStudy$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var MinValueFunctionStudy$Companion_instance = null;
  function MinValueFunctionStudy$Companion_getInstance() {
    if (MinValueFunctionStudy$Companion_instance === null) {
      new MinValueFunctionStudy$Companion();
    }
    return MinValueFunctionStudy$Companion_instance;
  }
  MinValueFunctionStudy.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MinValueFunctionStudy',
    interfaces: [StudyBuilder]
  };
  function MoneyFlowFunctionStudy() {
    MoneyFlowFunctionStudy$Companion_getInstance();
    StudyBuilder.call(this);
  }
  MoneyFlowFunctionStudy.prototype.validateParameters_x7u0o8$ = function (params) {
    StudyBuilder.prototype.validatePriceField_x7u0o8$.call(this, params);
    StudyBuilder.prototype.validatePriceField_ez016i$.call(this, params, MoneyFlowFunctionStudy$Companion_getInstance().VOLUME_PARAMETER_0);
  };
  MoneyFlowFunctionStudy.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    var tmp$, tmp$_0;
    var priceFunc = new PriceSourceFunction(data, Kotlin.isType(tmp$ = params.get_11rb$(StudyBuilder$Companion_getInstance().PRICE_PARAMETER), PriceFieldEnum) ? tmp$ : throwCCE());
    var volumeFunc = new PriceSourceFunction(data, Kotlin.isType(tmp$_0 = params.get_11rb$(MoneyFlowFunctionStudy$Companion_getInstance().VOLUME_PARAMETER_0), PriceFieldEnum) ? tmp$_0 : throwCCE());
    return listOf([new MoneyFlowFunction(priceFunc, volumeFunc, true), new MoneyFlowFunction(priceFunc, volumeFunc, false)]);
  };
  function MoneyFlowFunctionStudy$Companion() {
    MoneyFlowFunctionStudy$Companion_instance = this;
    this.VOLUME_PARAMETER_0 = 'volume';
  }
  MoneyFlowFunctionStudy$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var MoneyFlowFunctionStudy$Companion_instance = null;
  function MoneyFlowFunctionStudy$Companion_getInstance() {
    if (MoneyFlowFunctionStudy$Companion_instance === null) {
      new MoneyFlowFunctionStudy$Companion();
    }
    return MoneyFlowFunctionStudy$Companion_instance;
  }
  MoneyFlowFunctionStudy.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MoneyFlowFunctionStudy',
    interfaces: [StudyBuilder]
  };
  function MovingAverageExponentialStudy() {
    StudyBuilder.call(this);
  }
  MovingAverageExponentialStudy.prototype.validateParameters_x7u0o8$ = function (params) {
    StudyBuilder.prototype.validatePriceField_x7u0o8$.call(this, params);
    StudyBuilder.prototype.validateLength_x7u0o8$.call(this, params);
  };
  MovingAverageExponentialStudy.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    var tmp$, tmp$_0;
    var price = new PriceSourceFunction(data, Kotlin.isType(tmp$ = params.get_11rb$(StudyBuilder$Companion_getInstance().PRICE_PARAMETER), PriceFieldEnum) ? tmp$ : throwCCE());
    var length = typeof (tmp$_0 = params.get_11rb$(StudyBuilder$Companion_getInstance().LENGTH_PARAMETER)) === 'number' ? tmp$_0 : throwCCE();
    return listOf_0(new MovingAverageExponential(price, length));
  };
  MovingAverageExponentialStudy.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MovingAverageExponentialStudy',
    interfaces: [StudyBuilder]
  };
  function MovingAverageSimpleStudy() {
    StudyBuilder.call(this);
  }
  MovingAverageSimpleStudy.prototype.validateParameters_x7u0o8$ = function (params) {
    StudyBuilder.prototype.validatePriceField_x7u0o8$.call(this, params);
    StudyBuilder.prototype.validateLength_x7u0o8$.call(this, params);
  };
  MovingAverageSimpleStudy.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    var tmp$, tmp$_0;
    var price = new PriceSourceFunction(data, Kotlin.isType(tmp$ = params.get_11rb$(StudyBuilder$Companion_getInstance().PRICE_PARAMETER), PriceFieldEnum) ? tmp$ : throwCCE());
    var length = typeof (tmp$_0 = params.get_11rb$(StudyBuilder$Companion_getInstance().LENGTH_PARAMETER)) === 'number' ? tmp$_0 : throwCCE();
    return listOf_0(new MovingAverageSimple(price, length));
  };
  MovingAverageSimpleStudy.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MovingAverageSimpleStudy',
    interfaces: [StudyBuilder]
  };
  function MovingAverageSmoothedStudy() {
    MovingAverageSmoothedStudy$Companion_getInstance();
    StudyBuilder.call(this);
  }
  MovingAverageSmoothedStudy.prototype.validateParameters_x7u0o8$ = function (params) {
    StudyBuilder.prototype.validatePriceField_x7u0o8$.call(this, params);
    StudyBuilder.prototype.validateLength_x7u0o8$.call(this, params);
    StudyBuilder.prototype.validateInteger_ez016i$.call(this, params, MovingAverageSmoothedStudy$Companion_getInstance().START_OFFSET_0);
  };
  MovingAverageSmoothedStudy.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    var tmp$, tmp$_0, tmp$_1;
    var price = new PriceSourceFunction(data, Kotlin.isType(tmp$ = params.get_11rb$(StudyBuilder$Companion_getInstance().PRICE_PARAMETER), PriceFieldEnum) ? tmp$ : throwCCE());
    var length = typeof (tmp$_0 = params.get_11rb$(StudyBuilder$Companion_getInstance().LENGTH_PARAMETER)) === 'number' ? tmp$_0 : throwCCE();
    var startOffset = typeof (tmp$_1 = params.get_11rb$(MovingAverageSmoothedStudy$Companion_getInstance().START_OFFSET_0)) === 'number' ? tmp$_1 : throwCCE();
    return listOf_0(new MovingAverageSmoothed(price, length, startOffset));
  };
  function MovingAverageSmoothedStudy$Companion() {
    MovingAverageSmoothedStudy$Companion_instance = this;
    this.START_OFFSET_0 = 'startOffset';
  }
  MovingAverageSmoothedStudy$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var MovingAverageSmoothedStudy$Companion_instance = null;
  function MovingAverageSmoothedStudy$Companion_getInstance() {
    if (MovingAverageSmoothedStudy$Companion_instance === null) {
      new MovingAverageSmoothedStudy$Companion();
    }
    return MovingAverageSmoothedStudy$Companion_instance;
  }
  MovingAverageSmoothedStudy.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MovingAverageSmoothedStudy',
    interfaces: [StudyBuilder]
  };
  function MovingAverageWeightedStudy() {
    StudyBuilder.call(this);
  }
  MovingAverageWeightedStudy.prototype.validateParameters_x7u0o8$ = function (params) {
    StudyBuilder.prototype.validatePriceField_x7u0o8$.call(this, params);
    StudyBuilder.prototype.validateLength_x7u0o8$.call(this, params);
  };
  MovingAverageWeightedStudy.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    var tmp$, tmp$_0;
    var price = new PriceSourceFunction(data, Kotlin.isType(tmp$ = params.get_11rb$(StudyBuilder$Companion_getInstance().PRICE_PARAMETER), PriceFieldEnum) ? tmp$ : throwCCE());
    var length = typeof (tmp$_0 = params.get_11rb$(StudyBuilder$Companion_getInstance().LENGTH_PARAMETER)) === 'number' ? tmp$_0 : throwCCE();
    return listOf_0(new MovingAverageWeighted(price, length));
  };
  MovingAverageWeightedStudy.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MovingAverageWeightedStudy',
    interfaces: [StudyBuilder]
  };
  function NegativeVolumeIndexFunctionStudy() {
    NegativeVolumeIndexFunctionStudy$Companion_getInstance();
    StudyBuilder.call(this);
  }
  NegativeVolumeIndexFunctionStudy.prototype.validateParameters_x7u0o8$ = function (params) {
    StudyBuilder.prototype.validatePriceField_ez016i$.call(this, params, NegativeVolumeIndexFunctionStudy$Companion_getInstance().VOLUME_PARAMETER_0);
    StudyBuilder.prototype.validatePriceField_ez016i$.call(this, params, NegativeVolumeIndexFunctionStudy$Companion_getInstance().CLOSE_PARAMETER_0);
  };
  NegativeVolumeIndexFunctionStudy.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    var tmp$, tmp$_0;
    var volume = new PriceSourceFunction(data, Kotlin.isType(tmp$ = params.get_11rb$(NegativeVolumeIndexFunctionStudy$Companion_getInstance().VOLUME_PARAMETER_0), PriceFieldEnum) ? tmp$ : throwCCE());
    var close = new PriceSourceFunction(data, Kotlin.isType(tmp$_0 = params.get_11rb$(NegativeVolumeIndexFunctionStudy$Companion_getInstance().CLOSE_PARAMETER_0), PriceFieldEnum) ? tmp$_0 : throwCCE());
    return listOf_0(new NegativeVolumeIndexFunction(volume, close));
  };
  function NegativeVolumeIndexFunctionStudy$Companion() {
    NegativeVolumeIndexFunctionStudy$Companion_instance = this;
    this.VOLUME_PARAMETER_0 = 'volume';
    this.CLOSE_PARAMETER_0 = 'close';
  }
  NegativeVolumeIndexFunctionStudy$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var NegativeVolumeIndexFunctionStudy$Companion_instance = null;
  function NegativeVolumeIndexFunctionStudy$Companion_getInstance() {
    if (NegativeVolumeIndexFunctionStudy$Companion_instance === null) {
      new NegativeVolumeIndexFunctionStudy$Companion();
    }
    return NegativeVolumeIndexFunctionStudy$Companion_instance;
  }
  NegativeVolumeIndexFunctionStudy.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NegativeVolumeIndexFunctionStudy',
    interfaces: [StudyBuilder]
  };
  function PriceAggregationSourceFunctionStudy() {
    PriceAggregationSourceFunctionStudy$Companion_getInstance();
    StudyBuilder.call(this);
  }
  PriceAggregationSourceFunctionStudy.prototype.validateParameters_x7u0o8$ = function (params) {
    StudyBuilder.prototype.validatePriceField_x7u0o8$.call(this, params);
    StudyBuilder.prototype.validateParameter_ez016i$.call(this, params, PriceAggregationSourceFunctionStudy$Companion_getInstance().AGGREGATE_0);
  };
  PriceAggregationSourceFunctionStudy.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    var tmp$, tmp$_0;
    var field = Kotlin.isType(tmp$ = params.get_11rb$(StudyBuilder$Companion_getInstance().PRICE_PARAMETER), PriceFieldEnum) ? tmp$ : throwCCE();
    var aggregate = typeof (tmp$_0 = params.get_11rb$(PriceAggregationSourceFunctionStudy$Companion_getInstance().AGGREGATE_0)) === 'string' ? tmp$_0 : throwCCE();
    var type = AggregationTypeEnum$valueOf(aggregate);
    return listOf_0(new PriceAggregatedSourceFunction(data, type, field));
  };
  function PriceAggregationSourceFunctionStudy$Companion() {
    PriceAggregationSourceFunctionStudy$Companion_instance = this;
    this.AGGREGATE_0 = 'aggregate';
  }
  PriceAggregationSourceFunctionStudy$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var PriceAggregationSourceFunctionStudy$Companion_instance = null;
  function PriceAggregationSourceFunctionStudy$Companion_getInstance() {
    if (PriceAggregationSourceFunctionStudy$Companion_instance === null) {
      new PriceAggregationSourceFunctionStudy$Companion();
    }
    return PriceAggregationSourceFunctionStudy$Companion_instance;
  }
  PriceAggregationSourceFunctionStudy.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PriceAggregationSourceFunctionStudy',
    interfaces: [StudyBuilder]
  };
  function PriceSourceFunctionStudy() {
    StudyBuilder.call(this);
  }
  PriceSourceFunctionStudy.prototype.validateParameters_x7u0o8$ = function (params) {
    StudyBuilder.prototype.validatePriceField_x7u0o8$.call(this, params);
  };
  PriceSourceFunctionStudy.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    var tmp$;
    var field = Kotlin.isType(tmp$ = params.get_11rb$(StudyBuilder$Companion_getInstance().PRICE_PARAMETER), PriceFieldEnum) ? tmp$ : throwCCE();
    return listOf_0(new PriceSourceFunction(data, field));
  };
  PriceSourceFunctionStudy.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PriceSourceFunctionStudy',
    interfaces: [StudyBuilder]
  };
  function RelativeVolatilityFunctionStudy() {
    StudyBuilder.call(this);
  }
  RelativeVolatilityFunctionStudy.prototype.validateParameters_x7u0o8$ = function (params) {
    StudyBuilder.prototype.validatePriceField_x7u0o8$.call(this, params);
    StudyBuilder.prototype.validateLength_x7u0o8$.call(this, params);
  };
  RelativeVolatilityFunctionStudy.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    var tmp$, tmp$_0;
    var price = new PriceSourceFunction(data, Kotlin.isType(tmp$ = params.get_11rb$(StudyBuilder$Companion_getInstance().PRICE_PARAMETER), PriceFieldEnum) ? tmp$ : throwCCE());
    var length = typeof (tmp$_0 = params.get_11rb$(StudyBuilder$Companion_getInstance().LENGTH_PARAMETER)) === 'number' ? tmp$_0 : throwCCE();
    return listOf_0(new RelativeVolatilityFunction(price, length));
  };
  RelativeVolatilityFunctionStudy.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RelativeVolatilityFunctionStudy',
    interfaces: [StudyBuilder]
  };
  function SignFunctionStudy() {
    StudyBuilder.call(this);
  }
  SignFunctionStudy.prototype.validateParameters_x7u0o8$ = function (params) {
    StudyBuilder.prototype.validatePriceField_x7u0o8$.call(this, params);
  };
  SignFunctionStudy.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    var tmp$;
    var price = new PriceSourceFunction(data, Kotlin.isType(tmp$ = params.get_11rb$(StudyBuilder$Companion_getInstance().PRICE_PARAMETER), PriceFieldEnum) ? tmp$ : throwCCE());
    return listOf_0(new SignFunction(price));
  };
  SignFunctionStudy.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SignFunctionStudy',
    interfaces: [StudyBuilder]
  };
  function SimpleWeightedSumFunctionStudy() {
    StudyBuilder.call(this);
  }
  SimpleWeightedSumFunctionStudy.prototype.validateParameters_x7u0o8$ = function (params) {
    StudyBuilder.prototype.validatePriceField_x7u0o8$.call(this, params);
    StudyBuilder.prototype.validateLength_x7u0o8$.call(this, params);
  };
  SimpleWeightedSumFunctionStudy.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    var tmp$, tmp$_0;
    var price = new PriceSourceFunction(data, Kotlin.isType(tmp$ = params.get_11rb$(StudyBuilder$Companion_getInstance().PRICE_PARAMETER), PriceFieldEnum) ? tmp$ : throwCCE());
    var length = typeof (tmp$_0 = params.get_11rb$(StudyBuilder$Companion_getInstance().LENGTH_PARAMETER)) === 'number' ? tmp$_0 : throwCCE();
    return listOf_0(new SimpleWeightedSumFunction(price, length));
  };
  SimpleWeightedSumFunctionStudy.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SimpleWeightedSumFunctionStudy',
    interfaces: [StudyBuilder]
  };
  function StandardDeviationFunctionStudy() {
    StudyBuilder.call(this);
  }
  StandardDeviationFunctionStudy.prototype.validateParameters_x7u0o8$ = function (params) {
    StudyBuilder.prototype.validatePriceField_x7u0o8$.call(this, params);
    StudyBuilder.prototype.validateLength_x7u0o8$.call(this, params);
  };
  StandardDeviationFunctionStudy.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    var tmp$, tmp$_0;
    var price = new PriceSourceFunction(data, Kotlin.isType(tmp$ = params.get_11rb$(StudyBuilder$Companion_getInstance().PRICE_PARAMETER), PriceFieldEnum) ? tmp$ : throwCCE());
    var length = typeof (tmp$_0 = params.get_11rb$(StudyBuilder$Companion_getInstance().LENGTH_PARAMETER)) === 'number' ? tmp$_0 : throwCCE();
    return listOf_0(new StandardDeviationFunction(price, length));
  };
  StandardDeviationFunctionStudy.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StandardDeviationFunctionStudy',
    interfaces: [StudyBuilder]
  };
  function StandardErrorOfEstimationFunctionStudy() {
    StudyBuilder.call(this);
  }
  StandardErrorOfEstimationFunctionStudy.prototype.validateParameters_x7u0o8$ = function (params) {
    StudyBuilder.prototype.validatePriceField_x7u0o8$.call(this, params);
    StudyBuilder.prototype.validateLength_x7u0o8$.call(this, params);
  };
  StandardErrorOfEstimationFunctionStudy.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    var tmp$, tmp$_0;
    var price = new PriceSourceFunction(data, Kotlin.isType(tmp$ = params.get_11rb$(StudyBuilder$Companion_getInstance().PRICE_PARAMETER), PriceFieldEnum) ? tmp$ : throwCCE());
    var length = typeof (tmp$_0 = params.get_11rb$(StudyBuilder$Companion_getInstance().LENGTH_PARAMETER)) === 'number' ? tmp$_0 : throwCCE();
    return listOf_0(new StandardErrorOfEstimationFunction(price, length));
  };
  StandardErrorOfEstimationFunctionStudy.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StandardErrorOfEstimationFunctionStudy',
    interfaces: [StudyBuilder]
  };
  function SumFunctionStudy() {
    StudyBuilder.call(this);
  }
  SumFunctionStudy.prototype.validateParameters_x7u0o8$ = function (params) {
    StudyBuilder.prototype.validatePriceField_x7u0o8$.call(this, params);
    StudyBuilder.prototype.validateLength_x7u0o8$.call(this, params);
  };
  SumFunctionStudy.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    var tmp$, tmp$_0;
    var price = new PriceSourceFunction(data, Kotlin.isType(tmp$ = params.get_11rb$(StudyBuilder$Companion_getInstance().PRICE_PARAMETER), PriceFieldEnum) ? tmp$ : throwCCE());
    var length = typeof (tmp$_0 = params.get_11rb$(StudyBuilder$Companion_getInstance().LENGTH_PARAMETER)) === 'number' ? tmp$_0 : throwCCE();
    return listOf_0(new SumFunction(price, length));
  };
  SumFunctionStudy.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SumFunctionStudy',
    interfaces: [StudyBuilder]
  };
  function TrueRangeFunctionStudy() {
    TrueRangeFunctionStudy$Companion_getInstance();
    StudyBuilder.call(this);
  }
  TrueRangeFunctionStudy.prototype.validateParameters_x7u0o8$ = function (params) {
    StudyBuilder.prototype.validatePriceField_ez016i$.call(this, params, TrueRangeFunctionStudy$Companion_getInstance().LOW_PRICE_PARAMETER_0);
    StudyBuilder.prototype.validatePriceField_ez016i$.call(this, params, TrueRangeFunctionStudy$Companion_getInstance().CLOSE_PRICE_PARAMETER_0);
    StudyBuilder.prototype.validatePriceField_ez016i$.call(this, params, TrueRangeFunctionStudy$Companion_getInstance().HIGH_PRICE_PARAMETER_0);
  };
  TrueRangeFunctionStudy.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    var tmp$, tmp$_0, tmp$_1;
    var low = new PriceSourceFunction(data, Kotlin.isType(tmp$ = params.get_11rb$(TrueRangeFunctionStudy$Companion_getInstance().LOW_PRICE_PARAMETER_0), PriceFieldEnum) ? tmp$ : throwCCE());
    var close = new PriceSourceFunction(data, Kotlin.isType(tmp$_0 = params.get_11rb$(TrueRangeFunctionStudy$Companion_getInstance().CLOSE_PRICE_PARAMETER_0), PriceFieldEnum) ? tmp$_0 : throwCCE());
    var high = new PriceSourceFunction(data, Kotlin.isType(tmp$_1 = params.get_11rb$(TrueRangeFunctionStudy$Companion_getInstance().HIGH_PRICE_PARAMETER_0), PriceFieldEnum) ? tmp$_1 : throwCCE());
    return listOf_0(new TrueRangeFunction(low, close, high));
  };
  function TrueRangeFunctionStudy$Companion() {
    TrueRangeFunctionStudy$Companion_instance = this;
    this.LOW_PRICE_PARAMETER_0 = 'low';
    this.CLOSE_PRICE_PARAMETER_0 = 'close';
    this.HIGH_PRICE_PARAMETER_0 = 'high';
  }
  TrueRangeFunctionStudy$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TrueRangeFunctionStudy$Companion_instance = null;
  function TrueRangeFunctionStudy$Companion_getInstance() {
    if (TrueRangeFunctionStudy$Companion_instance === null) {
      new TrueRangeFunctionStudy$Companion();
    }
    return TrueRangeFunctionStudy$Companion_instance;
  }
  TrueRangeFunctionStudy.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TrueRangeFunctionStudy',
    interfaces: [StudyBuilder]
  };
  function WildersAverageStudy() {
    StudyBuilder.call(this);
  }
  WildersAverageStudy.prototype.validateParameters_x7u0o8$ = function (params) {
    StudyBuilder.prototype.validatePriceField_x7u0o8$.call(this, params);
    StudyBuilder.prototype.validateLength_x7u0o8$.call(this, params);
  };
  WildersAverageStudy.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    var tmp$, tmp$_0;
    var price = new PriceSourceFunction(data, Kotlin.isType(tmp$ = params.get_11rb$(StudyBuilder$Companion_getInstance().PRICE_PARAMETER), PriceFieldEnum) ? tmp$ : throwCCE());
    var length = typeof (tmp$_0 = params.get_11rb$(StudyBuilder$Companion_getInstance().LENGTH_PARAMETER)) === 'number' ? tmp$_0 : throwCCE();
    return listOf_0(new WildersAverage(price, length));
  };
  WildersAverageStudy.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'WildersAverageStudy',
    interfaces: [StudyBuilder]
  };
  function WindowFunctionStudy() {
    WindowFunctionStudy$Companion_getInstance();
    StudyBuilder.call(this);
  }
  WindowFunctionStudy.prototype.validateParameters_x7u0o8$ = function (params) {
    StudyBuilder.prototype.validatePriceField_x7u0o8$.call(this, params);
    StudyBuilder.prototype.validateInteger_ez016i$.call(this, params, WindowFunctionStudy$Companion_getInstance().BEGIN_INDEX_0);
    StudyBuilder.prototype.validateInteger_ez016i$.call(this, params, WindowFunctionStudy$Companion_getInstance().END_INDEX_0);
  };
  WindowFunctionStudy.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    var tmp$, tmp$_0, tmp$_1;
    var price = new PriceSourceFunction(data, Kotlin.isType(tmp$ = params.get_11rb$(StudyBuilder$Companion_getInstance().PRICE_PARAMETER), PriceFieldEnum) ? tmp$ : throwCCE());
    var beginIndex = typeof (tmp$_0 = params.get_11rb$(WindowFunctionStudy$Companion_getInstance().BEGIN_INDEX_0)) === 'number' ? tmp$_0 : throwCCE();
    var endIndex = typeof (tmp$_1 = params.get_11rb$(WindowFunctionStudy$Companion_getInstance().END_INDEX_0)) === 'number' ? tmp$_1 : throwCCE();
    return listOf([WindowFunction_init(price, beginIndex, endIndex), WindowFunction_init_0(price, endIndex, true), WindowFunction_init_0(price, endIndex, false)]);
  };
  function WindowFunctionStudy$Companion() {
    WindowFunctionStudy$Companion_instance = this;
    this.BEGIN_INDEX_0 = 'beginIndex';
    this.END_INDEX_0 = 'endIndex';
  }
  WindowFunctionStudy$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var WindowFunctionStudy$Companion_instance = null;
  function WindowFunctionStudy$Companion_getInstance() {
    if (WindowFunctionStudy$Companion_instance === null) {
      new WindowFunctionStudy$Companion();
    }
    return WindowFunctionStudy$Companion_instance;
  }
  WindowFunctionStudy.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'WindowFunctionStudy',
    interfaces: [StudyBuilder]
  };
  function LinearRegressionFunctionStudy() {
    StudyBuilder.call(this);
  }
  LinearRegressionFunctionStudy.prototype.validateParameters_x7u0o8$ = function (params) {
    StudyBuilder.prototype.validatePriceField_x7u0o8$.call(this, params);
  };
  LinearRegressionFunctionStudy.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    var tmp$;
    var priceSourceFunction = new PriceSourceFunction(data, Kotlin.isType(tmp$ = params.get_11rb$(StudyBuilder$Companion_getInstance().PRICE_PARAMETER), PriceFieldEnum) ? tmp$ : throwCCE());
    var function_0 = new LinearRegressionFunction(priceSourceFunction);
    return listOf_0(function_0);
  };
  LinearRegressionFunctionStudy.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LinearRegressionFunctionStudy',
    interfaces: [StudyBuilder]
  };
  function ParabolicSarFunctionStudy() {
    ParabolicSarFunctionStudy$Companion_getInstance();
    StudyBuilder.call(this);
  }
  ParabolicSarFunctionStudy.prototype.validateParameters_x7u0o8$ = function (params) {
    StudyBuilder.prototype.validatePriceField_ez016i$.call(this, params, ParabolicSarFunctionStudy$Companion_getInstance().HIGH_FUNCTION_PARAMETER);
    StudyBuilder.prototype.validatePriceField_ez016i$.call(this, params, ParabolicSarFunctionStudy$Companion_getInstance().LOW_FUNCTION_PARAMETER);
    StudyBuilder.prototype.validateDouble_ez016i$.call(this, params, ParabolicSarFunctionStudy$Companion_getInstance().STEP_PARAMETER);
    StudyBuilder.prototype.validateDouble_ez016i$.call(this, params, ParabolicSarFunctionStudy$Companion_getInstance().MAX_STEP_PARAMETER);
  };
  ParabolicSarFunctionStudy.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var highFunc = new PriceSourceFunction(data, Kotlin.isType(tmp$ = params.get_11rb$(ParabolicSarFunctionStudy$Companion_getInstance().HIGH_FUNCTION_PARAMETER), PriceFieldEnum) ? tmp$ : throwCCE());
    var lowFunc = new PriceSourceFunction(data, Kotlin.isType(tmp$_0 = params.get_11rb$(ParabolicSarFunctionStudy$Companion_getInstance().LOW_FUNCTION_PARAMETER), PriceFieldEnum) ? tmp$_0 : throwCCE());
    var step = typeof (tmp$_1 = params.get_11rb$(ParabolicSarFunctionStudy$Companion_getInstance().STEP_PARAMETER)) === 'number' ? tmp$_1 : throwCCE();
    var maxStep = typeof (tmp$_2 = params.get_11rb$(ParabolicSarFunctionStudy$Companion_getInstance().MAX_STEP_PARAMETER)) === 'number' ? tmp$_2 : throwCCE();
    var function_0 = new ParabolicSarFunction(highFunc, lowFunc, step, maxStep);
    return listOf_0(function_0);
  };
  function ParabolicSarFunctionStudy$Companion() {
    ParabolicSarFunctionStudy$Companion_instance = this;
    this.HIGH_FUNCTION_PARAMETER = 'highFunc';
    this.LOW_FUNCTION_PARAMETER = 'lowFunc';
    this.STEP_PARAMETER = 'step';
    this.MAX_STEP_PARAMETER = 'maxStep';
  }
  ParabolicSarFunctionStudy$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ParabolicSarFunctionStudy$Companion_instance = null;
  function ParabolicSarFunctionStudy$Companion_getInstance() {
    if (ParabolicSarFunctionStudy$Companion_instance === null) {
      new ParabolicSarFunctionStudy$Companion();
    }
    return ParabolicSarFunctionStudy$Companion_instance;
  }
  ParabolicSarFunctionStudy.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ParabolicSarFunctionStudy',
    interfaces: [StudyBuilder]
  };
  function SpearmansRhoStudy() {
    StudyBuilder.call(this);
  }
  SpearmansRhoStudy.prototype.validateParameters_x7u0o8$ = function (params) {
    StudyBuilder.prototype.validatePriceField_x7u0o8$.call(this, params);
    StudyBuilder.prototype.validateLength_x7u0o8$.call(this, params);
  };
  SpearmansRhoStudy.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    var tmp$, tmp$_0;
    var priceSourceFunction = new PriceSourceFunction(data, Kotlin.isType(tmp$ = params.get_11rb$(StudyBuilder$Companion_getInstance().PRICE_PARAMETER), PriceFieldEnum) ? tmp$ : throwCCE());
    var length = typeof (tmp$_0 = params.get_11rb$(StudyBuilder$Companion_getInstance().LENGTH_PARAMETER)) === 'number' ? tmp$_0 : throwCCE();
    var function_0 = new SpearmansRho(priceSourceFunction, length);
    return listOf_0(function_0);
  };
  SpearmansRhoStudy.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SpearmansRhoStudy',
    interfaces: [StudyBuilder]
  };
  function SwingIndexRatioStudy() {
    StudyBuilder.call(this);
  }
  SwingIndexRatioStudy.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    var function_0 = new SwingIndexRatio(data);
    return listOf_0(function_0);
  };
  SwingIndexRatioStudy.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SwingIndexRatioStudy',
    interfaces: [StudyBuilder]
  };
  function ZigZagFunctionStudy() {
    ZigZagFunctionStudy$Companion_getInstance();
    StudyBuilder.call(this);
  }
  ZigZagFunctionStudy.prototype.validateParameters_x7u0o8$ = function (params) {
    StudyBuilder.prototype.validatePriceField_x7u0o8$.call(this, params);
    StudyBuilder.prototype.validateDouble_ez016i$.call(this, params, ZigZagFunctionStudy$Companion_getInstance().DEVIATION_PARAMETER_0);
  };
  ZigZagFunctionStudy.prototype.constructFunctionsArray_c6yk66$ = function (data, params) {
    var tmp$, tmp$_0;
    var priceSourceFunction = new PriceSourceFunction(data, Kotlin.isType(tmp$ = params.get_11rb$(StudyBuilder$Companion_getInstance().PRICE_PARAMETER), PriceFieldEnum) ? tmp$ : throwCCE());
    var deviation = typeof (tmp$_0 = params.get_11rb$(ZigZagFunctionStudy$Companion_getInstance().DEVIATION_PARAMETER_0)) === 'number' ? tmp$_0 : throwCCE();
    var function_0 = new ZigZagFunction(priceSourceFunction, deviation);
    return listOf_0(function_0);
  };
  function ZigZagFunctionStudy$Companion() {
    ZigZagFunctionStudy$Companion_instance = this;
    this.DEVIATION_PARAMETER_0 = 'deviation';
  }
  ZigZagFunctionStudy$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ZigZagFunctionStudy$Companion_instance = null;
  function ZigZagFunctionStudy$Companion_getInstance() {
    if (ZigZagFunctionStudy$Companion_instance === null) {
      new ZigZagFunctionStudy$Companion();
    }
    return ZigZagFunctionStudy$Companion_instance;
  }
  ZigZagFunctionStudy.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ZigZagFunctionStudy',
    interfaces: [StudyBuilder]
  };
  function Function() {
  }
  Function.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Function',
    interfaces: []
  };
  function MathUtils() {
    MathUtils_instance = this;
  }
  MathUtils.prototype.max_pmhfmb$ = function (values) {
    var tmp$;
    var maximum = values[0];
    for (tmp$ = 0; tmp$ !== values.length; ++tmp$) {
      var value = values[tmp$];
      if (value > maximum) {
        maximum = value;
      }
    }
    return maximum;
  };
  MathUtils.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'MathUtils',
    interfaces: []
  };
  var MathUtils_instance = null;
  function MathUtils_getInstance() {
    if (MathUtils_instance === null) {
      new MathUtils();
    }
    return MathUtils_instance;
  }
  function AbsFunction(srcFunc) {
    AbstractCachingFunction.call(this);
    this.srcFunc_0 = srcFunc;
  }
  AbsFunction.prototype.getValueInternal_za3lpa$ = function (index) {
    var x = this.srcFunc_0.calculateAt(index);
    return Math_0.abs(x);
  };
  Object.defineProperty(AbsFunction.prototype, 'childFunctions', {
    get: function () {
      return listOf_0(this.srcFunc_0);
    }
  });
  AbsFunction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AbsFunction',
    interfaces: [AbstractCachingFunction]
  };
  function ArithmeticFunction(leftFunc, rightFunc, operation) {
    this.leftFunc_0 = leftFunc;
    this.rightFunc_0 = rightFunc;
    this.operation_0 = operation;
  }
  ArithmeticFunction.prototype.calculateAt = function (index) {
    return this.doArithmetic_0(this.leftFunc_0.calculateAt(index), this.rightFunc_0.calculateAt(index));
  };
  Object.defineProperty(ArithmeticFunction.prototype, 'ownPastOffset', {
    get: function () {
      return 0;
    }
  });
  Object.defineProperty(ArithmeticFunction.prototype, 'prefetchSize', {
    get: function () {
      return 0;
    }
  });
  Object.defineProperty(ArithmeticFunction.prototype, 'childFunctions', {
    get: function () {
      return listOf([this.leftFunc_0, this.rightFunc_0]);
    }
  });
  ArithmeticFunction.prototype.doArithmetic_0 = function (leftValue, rightValue) {
    var tmp$;
    var result = kotlin_js_internal_DoubleCompanionObject.NaN;
    switch (this.operation_0.name) {
      case 'PLUS':
        result = leftValue + rightValue;
        break;
      case 'MINUS':
        result = leftValue - rightValue;
        break;
      case 'MULT':
        result = leftValue * rightValue;
        break;
      case 'DIV':
        result = leftValue / rightValue;
        break;
      case 'DIV_ZERO':
        result = Kotlin.compareTo(rightValue, 0.0) !== 0 ? leftValue / rightValue : 0.0;
        break;
      case 'MIDPOINT':
        result = (leftValue + rightValue) / 2.0;
        break;
      case 'MAX':
        result = Math_0.max(leftValue, rightValue);
        break;
      case 'DIFF_DIV_SUM_ZERO':
        if (Kotlin.compareTo(rightValue + leftValue, 0.0) === 0) {
          tmp$ = 0.0;
        }
         else {
          tmp$ = (leftValue - rightValue) / (leftValue + rightValue);
        }

        result = tmp$;
        break;
      case 'ABSDIFF_DIV_SUM':
        var x = leftValue - rightValue;
        result = Math_0.abs(x) / (leftValue + rightValue);
        break;
      case 'DIFF_DIV_RIGHT':
        result = (leftValue - rightValue) / rightValue;
        break;
      case 'DIFF_DIV_LEFT':
        result = (leftValue - rightValue) / leftValue;
        break;
      case 'POW':
        result = Math_0.pow(leftValue, rightValue);
        break;
    }
    return result;
  };
  ArithmeticFunction.prototype.dataChanged = function (changes) {
    var a = this.leftFunc_0.dataChanged(changes);
    var b = this.rightFunc_0.dataChanged(changes);
    return Math_0.min(a, b);
  };
  ArithmeticFunction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ArithmeticFunction',
    interfaces: [IFunction]
  };
  function ArithmeticOperation(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function ArithmeticOperation_initFields() {
    ArithmeticOperation_initFields = function () {
    };
    ArithmeticOperation$PLUS_instance = new ArithmeticOperation('PLUS', 0);
    ArithmeticOperation$MINUS_instance = new ArithmeticOperation('MINUS', 1);
    ArithmeticOperation$MULT_instance = new ArithmeticOperation('MULT', 2);
    ArithmeticOperation$DIV_instance = new ArithmeticOperation('DIV', 3);
    ArithmeticOperation$DIV_ZERO_instance = new ArithmeticOperation('DIV_ZERO', 4);
    ArithmeticOperation$MIDPOINT_instance = new ArithmeticOperation('MIDPOINT', 5);
    ArithmeticOperation$MAX_instance = new ArithmeticOperation('MAX', 6);
    ArithmeticOperation$DIFF_DIV_SUM_ZERO_instance = new ArithmeticOperation('DIFF_DIV_SUM_ZERO', 7);
    ArithmeticOperation$ABSDIFF_DIV_SUM_instance = new ArithmeticOperation('ABSDIFF_DIV_SUM', 8);
    ArithmeticOperation$DIFF_DIV_RIGHT_instance = new ArithmeticOperation('DIFF_DIV_RIGHT', 9);
    ArithmeticOperation$DIFF_DIV_LEFT_instance = new ArithmeticOperation('DIFF_DIV_LEFT', 10);
    ArithmeticOperation$POW_instance = new ArithmeticOperation('POW', 11);
  }
  var ArithmeticOperation$PLUS_instance;
  function ArithmeticOperation$PLUS_getInstance() {
    ArithmeticOperation_initFields();
    return ArithmeticOperation$PLUS_instance;
  }
  var ArithmeticOperation$MINUS_instance;
  function ArithmeticOperation$MINUS_getInstance() {
    ArithmeticOperation_initFields();
    return ArithmeticOperation$MINUS_instance;
  }
  var ArithmeticOperation$MULT_instance;
  function ArithmeticOperation$MULT_getInstance() {
    ArithmeticOperation_initFields();
    return ArithmeticOperation$MULT_instance;
  }
  var ArithmeticOperation$DIV_instance;
  function ArithmeticOperation$DIV_getInstance() {
    ArithmeticOperation_initFields();
    return ArithmeticOperation$DIV_instance;
  }
  var ArithmeticOperation$DIV_ZERO_instance;
  function ArithmeticOperation$DIV_ZERO_getInstance() {
    ArithmeticOperation_initFields();
    return ArithmeticOperation$DIV_ZERO_instance;
  }
  var ArithmeticOperation$MIDPOINT_instance;
  function ArithmeticOperation$MIDPOINT_getInstance() {
    ArithmeticOperation_initFields();
    return ArithmeticOperation$MIDPOINT_instance;
  }
  var ArithmeticOperation$MAX_instance;
  function ArithmeticOperation$MAX_getInstance() {
    ArithmeticOperation_initFields();
    return ArithmeticOperation$MAX_instance;
  }
  var ArithmeticOperation$DIFF_DIV_SUM_ZERO_instance;
  function ArithmeticOperation$DIFF_DIV_SUM_ZERO_getInstance() {
    ArithmeticOperation_initFields();
    return ArithmeticOperation$DIFF_DIV_SUM_ZERO_instance;
  }
  var ArithmeticOperation$ABSDIFF_DIV_SUM_instance;
  function ArithmeticOperation$ABSDIFF_DIV_SUM_getInstance() {
    ArithmeticOperation_initFields();
    return ArithmeticOperation$ABSDIFF_DIV_SUM_instance;
  }
  var ArithmeticOperation$DIFF_DIV_RIGHT_instance;
  function ArithmeticOperation$DIFF_DIV_RIGHT_getInstance() {
    ArithmeticOperation_initFields();
    return ArithmeticOperation$DIFF_DIV_RIGHT_instance;
  }
  var ArithmeticOperation$DIFF_DIV_LEFT_instance;
  function ArithmeticOperation$DIFF_DIV_LEFT_getInstance() {
    ArithmeticOperation_initFields();
    return ArithmeticOperation$DIFF_DIV_LEFT_instance;
  }
  var ArithmeticOperation$POW_instance;
  function ArithmeticOperation$POW_getInstance() {
    ArithmeticOperation_initFields();
    return ArithmeticOperation$POW_instance;
  }
  ArithmeticOperation.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ArithmeticOperation',
    interfaces: [Enum]
  };
  function ArithmeticOperation$values() {
    return [ArithmeticOperation$PLUS_getInstance(), ArithmeticOperation$MINUS_getInstance(), ArithmeticOperation$MULT_getInstance(), ArithmeticOperation$DIV_getInstance(), ArithmeticOperation$DIV_ZERO_getInstance(), ArithmeticOperation$MIDPOINT_getInstance(), ArithmeticOperation$MAX_getInstance(), ArithmeticOperation$DIFF_DIV_SUM_ZERO_getInstance(), ArithmeticOperation$ABSDIFF_DIV_SUM_getInstance(), ArithmeticOperation$DIFF_DIV_RIGHT_getInstance(), ArithmeticOperation$DIFF_DIV_LEFT_getInstance(), ArithmeticOperation$POW_getInstance()];
  }
  ArithmeticOperation.values = ArithmeticOperation$values;
  function ArithmeticOperation$valueOf(name) {
    switch (name) {
      case 'PLUS':
        return ArithmeticOperation$PLUS_getInstance();
      case 'MINUS':
        return ArithmeticOperation$MINUS_getInstance();
      case 'MULT':
        return ArithmeticOperation$MULT_getInstance();
      case 'DIV':
        return ArithmeticOperation$DIV_getInstance();
      case 'DIV_ZERO':
        return ArithmeticOperation$DIV_ZERO_getInstance();
      case 'MIDPOINT':
        return ArithmeticOperation$MIDPOINT_getInstance();
      case 'MAX':
        return ArithmeticOperation$MAX_getInstance();
      case 'DIFF_DIV_SUM_ZERO':
        return ArithmeticOperation$DIFF_DIV_SUM_ZERO_getInstance();
      case 'ABSDIFF_DIV_SUM':
        return ArithmeticOperation$ABSDIFF_DIV_SUM_getInstance();
      case 'DIFF_DIV_RIGHT':
        return ArithmeticOperation$DIFF_DIV_RIGHT_getInstance();
      case 'DIFF_DIV_LEFT':
        return ArithmeticOperation$DIFF_DIV_LEFT_getInstance();
      case 'POW':
        return ArithmeticOperation$POW_getInstance();
      default:throwISE('No enum constant com.devexperts.dxst.functions.ArithmeticOperation.' + name);
    }
  }
  ArithmeticOperation.valueOf_61zpoe$ = ArithmeticOperation$valueOf;
  function BuyingPressure(low, close) {
    AbstractCachingFunction.call(this);
    this.low_0 = low;
    this.close_0 = close;
  }
  Object.defineProperty(BuyingPressure.prototype, 'ownPastOffset', {
    get: function () {
      return 1;
    }
  });
  Object.defineProperty(BuyingPressure.prototype, 'childFunctions', {
    get: function () {
      return listOf([this.low_0, this.close_0]);
    }
  });
  BuyingPressure.prototype.getValueInternal_za3lpa$ = function (index) {
    var trueLow = this.low_0.calculateAt(index);
    if (index > 0) {
      trueLow = this.getTrueLowValue_0(trueLow, this.close_0.calculateAt(index - 1 | 0));
    }
    var thisClose = this.close_0.calculateAt(index);
    return thisClose - trueLow;
  };
  BuyingPressure.prototype.getTrueLowValue_0 = function (low, prevClose) {
    if (isNaN_0(low) || isNaN_0(prevClose)) {
      return kotlin_js_internal_DoubleCompanionObject.NaN;
    }
    return Math_0.min(low, prevClose);
  };
  BuyingPressure.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BuyingPressure',
    interfaces: [AbstractCachingFunction]
  };
  function CloseLocationValueFunction(low, close, high) {
    AbstractCachingFunction.call(this);
    this.low_0 = low;
    this.close_0 = close;
    this.high_0 = high;
  }
  Object.defineProperty(CloseLocationValueFunction.prototype, 'childFunctions', {
    get: function () {
      return listOf([this.low_0, this.close_0, this.high_0]);
    }
  });
  CloseLocationValueFunction.prototype.getValueInternal_za3lpa$ = function (index) {
    var l = this.low_0.calculateAt(index);
    var h = this.high_0.calculateAt(index);
    var c = this.close_0.calculateAt(index);
    return this.getCloseLocationValue_0(l, c, h);
  };
  CloseLocationValueFunction.prototype.getCloseLocationValue_0 = function (low, close, high) {
    return Kotlin.compareTo(high, low) !== 0 ? (close - low - (high - close)) / (high - low) : 1.0;
  };
  CloseLocationValueFunction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CloseLocationValueFunction',
    interfaces: [AbstractCachingFunction]
  };
  function CombineFunction(tradeDataHolder, xFunction, yFunction, predicate) {
    this.tradeDataHolder_0 = tradeDataHolder;
    this.xFunction_0 = xFunction;
    this.yFunction_0 = yFunction;
    this.predicate_0 = predicate;
  }
  Object.defineProperty(CombineFunction.prototype, 'childFunctions', {
    get: function () {
      return listOf([this.xFunction_0, this.yFunction_0]);
    }
  });
  Object.defineProperty(CombineFunction.prototype, 'ownPastOffset', {
    get: function () {
      return 0;
    }
  });
  Object.defineProperty(CombineFunction.prototype, 'prefetchSize', {
    get: function () {
      return 0;
    }
  });
  CombineFunction.prototype.calculateAt = function (index) {
    return this.predicate_0(this.xFunction_0.calculateAt(index), this.yFunction_0.calculateAt(index));
  };
  CombineFunction.prototype.dataChanged = function (changes) {
    var b = this.tradeDataHolder_0.dataLength - 1 | 0;
    return Math_0.max(0, b);
  };
  CombineFunction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CombineFunction',
    interfaces: [IFunction]
  };
  function CommonFunctions() {
    CommonFunctions_instance = this;
    this.C_M1_0 = new ConstantFunction(-1.0);
    this.C_1_0 = new ConstantFunction(1.0);
    this.C_50_0 = new ConstantFunction(50.0);
    this.C_100_0 = new ConstantFunction(100.0);
  }
  CommonFunctions.prototype.constructTrueRange_t0cfja$ = function (data) {
    var low = new PriceSourceFunction(data, PriceFieldEnum$LOW_getInstance());
    var close = new PriceSourceFunction(data, PriceFieldEnum$CLOSE_getInstance());
    var high = new PriceSourceFunction(data, PriceFieldEnum$HIGH_getInstance());
    return new TrueRangeFunction(low, close, high);
  };
  CommonFunctions.prototype.constructStochastic_qdi6fo$ = function (data, dperiod, overbought, oversold, kperiod, slowing, averageTypeEnum) {
    var k = this.constructAverage_dtut4e$(averageTypeEnum, this.constructStochasticFastKbyData_sbo9ig$(data, kperiod), slowing, kperiod);
    var kd = this.constructAverage_dtut4e$(averageTypeEnum, this.constructStochasticFastKbyData_sbo9ig$(data, kperiod), slowing, kperiod);
    var d = this.constructAverage_dtut4e$(averageTypeEnum, kd, dperiod, slowing + kperiod | 0);
    var overboughtF = new ConstantFunction(overbought);
    var oversoldF = new ConstantFunction(oversold);
    return listOf([k, d, overboughtF, oversoldF]);
  };
  CommonFunctions.prototype.constructStochasticFastKbyData_sbo9ig$ = function (data, length) {
    var loPrice = new PriceSourceFunction(data, PriceFieldEnum$LOW_getInstance());
    var hiPrice = new PriceSourceFunction(data, PriceFieldEnum$HIGH_getInstance());
    var priceSource = new PriceSourceFunction(data, PriceFieldEnum$CLOSE_getInstance());
    var value1 = new LowestFunction(loPrice, length);
    var hiFunc = new HighestFunction(hiPrice, length);
    var value2 = new ArithmeticFunction(hiFunc, value1, ArithmeticOperation$MINUS_getInstance());
    return this.getStochasticFastK_65i00b$(priceSource, value1, value2);
  };
  CommonFunctions.prototype.getStochasticFastK_65i00b$ = function (price, value1, value2) {
    var nom = new ArithmeticFunction(price, value1, ArithmeticOperation$MINUS_getInstance());
    var div = new ArithmeticFunction(nom, value2, ArithmeticOperation$DIV_ZERO_getInstance());
    return new ArithmeticFunction(div, this.C_100_0, ArithmeticOperation$MULT_getInstance());
  };
  CommonFunctions.prototype.constructAwesomeOscillatorFunc_t0cfja$ = function (data) {
    var avgShort = new MovingAverageSimple(this.createMidpointFunction_0(data), 5);
    var avgLong = new MovingAverageSimple(this.createMidpointFunction_0(data), 34);
    return new ArithmeticFunction(avgShort, avgLong, ArithmeticOperation$MINUS_getInstance());
  };
  CommonFunctions.prototype.createMidpointFunction_0 = function (data) {
    return new ArithmeticFunction(new PriceSourceFunction(data, PriceFieldEnum$LOW_getInstance()), new PriceSourceFunction(data, PriceFieldEnum$HIGH_getInstance()), ArithmeticOperation$MIDPOINT_getInstance());
  };
  CommonFunctions.prototype.constructAccumulationDistributionFunc_t0cfja$ = function (data) {
    var clv = new CloseLocationValueFunction(new PriceSourceFunction(data, PriceFieldEnum$LOW_getInstance()), new PriceSourceFunction(data, PriceFieldEnum$CLOSE_getInstance()), new PriceSourceFunction(data, PriceFieldEnum$HIGH_getInstance()));
    return new CumulativeSumFunction(new ArithmeticFunction(new PriceSourceFunction(data, PriceFieldEnum$VOLUME_getInstance()), clv, ArithmeticOperation$MULT_getInstance()));
  };
  CommonFunctions.prototype.constructHighLowDiff_t0cfja$ = function (data) {
    var highPrice = new PriceSourceFunction(data, PriceFieldEnum$HIGH_getInstance());
    var lowPrice = new PriceSourceFunction(data, PriceFieldEnum$LOW_getInstance());
    return new ArithmeticFunction(highPrice, lowPrice, ArithmeticOperation$MINUS_getInstance());
  };
  CommonFunctions.prototype.constructHighLowCloseSum_t0cfja$ = function (data) {
    var lowPrice = new PriceSourceFunction(data, PriceFieldEnum$LOW_getInstance());
    var closePrice = new PriceSourceFunction(data, PriceFieldEnum$CLOSE_getInstance());
    var highPrice = new PriceSourceFunction(data, PriceFieldEnum$HIGH_getInstance());
    var sumlLowClose = new ArithmeticFunction(lowPrice, closePrice, ArithmeticOperation$PLUS_getInstance());
    return new ArithmeticFunction(sumlLowClose, highPrice, ArithmeticOperation$PLUS_getInstance());
  };
  CommonFunctions.prototype.constructRVI_t0cfja$ = function (data) {
    var openPrice = new PriceSourceFunction(data, PriceFieldEnum$OPEN_getInstance());
    var highPrice = new PriceSourceFunction(data, PriceFieldEnum$HIGH_getInstance());
    var lowPrice = new PriceSourceFunction(data, PriceFieldEnum$LOW_getInstance());
    var closePrice = new PriceSourceFunction(data, PriceFieldEnum$CLOSE_getInstance());
    return new ArithmeticFunction(new ArithmeticFunction(closePrice, openPrice, ArithmeticOperation$MINUS_getInstance()), new ArithmeticFunction(highPrice, lowPrice, ArithmeticOperation$MINUS_getInstance()), ArithmeticOperation$DIV_ZERO_getInstance());
  };
  CommonFunctions.prototype.constructATR_sbo9ig$ = function (data, length) {
    return new MovingAverageSimple(this.constructTrueRange_t0cfja$(data), length);
  };
  CommonFunctions.prototype.constructDirectionalIndex_ixau0l$ = function (data, length, isPlus, averageType) {
    var priceLow = new PriceSourceFunction(data, PriceFieldEnum$LOW_getInstance());
    var lowDiff = new ArithmeticFunction(new DiffPrevFunction(priceLow), this.C_M1_0, ArithmeticOperation$MULT_getInstance());
    var priceHigh = new PriceSourceFunction(data, PriceFieldEnum$HIGH_getInstance());
    var hiDiff = new DiffPrevFunction(priceHigh);
    var dm = isPlus ? new DirectionalMovementFunction(hiDiff, lowDiff) : new DirectionalMovementFunction(lowDiff, hiDiff);
    var atr = this.constructAverage_dtut4e$(averageType, this.constructTrueRange_t0cfja$(data), length, length);
    return new ArithmeticFunction(new ArithmeticFunction(this.constructAverage_dtut4e$(averageType, dm, length, length), this.C_100_0, ArithmeticOperation$MULT_getInstance()), atr, ArithmeticOperation$DIV_ZERO_getInstance());
  };
  CommonFunctions.prototype.constructADX_3dj0x8$ = function (data, length, averageType) {
    var dx = new DirectionalIndexFunction(this.constructDirectionalIndex_ixau0l$(data, length, true, averageType), this.constructDirectionalIndex_ixau0l$(data, length, false, averageType));
    var adx = this.constructAverage_dtut4e$(averageType, dx, length, 2 * length | 0);
    return WindowFunction_init_0(adx, 0, true);
  };
  CommonFunctions.prototype.constructRSI_fo9dvd$ = function (priceSourceFunction, length, averageType) {
    var net = this.constructAverage_dtut4e$(averageType, new DiffPrevFunction(priceSourceFunction), length, length);
    var tot = this.constructAverage_dtut4e$(averageType, new AbsFunction(new DiffPrevFunction(priceSourceFunction)), length, length);
    var chgRatio = new ArithmeticFunction(net, tot, ArithmeticOperation$DIV_ZERO_getInstance());
    return WindowFunction_init_0(new ArithmeticFunction(this.C_50_0, new ArithmeticFunction(chgRatio, this.C_1_0, ArithmeticOperation$PLUS_getInstance()), ArithmeticOperation$MULT_getInstance()), 0, true);
  };
  CommonFunctions.prototype.constructAverage_dtut4e$ = function (averageType, source, length, offset) {
    if (offset === void 0)
      offset = null;
    var result;
    switch (averageType.name) {
      case 'SIMPLE':
        result = new MovingAverageSimple(source, length);
        break;
      case 'WILDERS':
        result = new WildersAverage(source, length);
        break;
      case 'WEIGHTED':
        result = new MovingAverageWeighted(source, length);
        break;
      case 'EXPONENTIAL':
        result = offset == null ? new MovingAverageExponential(source, length) : new MovingAverageExponential(source, length, offset);
        break;
      default:Kotlin.noWhenBranchMatched();
        break;
    }
    return result;
  };
  CommonFunctions.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'CommonFunctions',
    interfaces: []
  };
  var CommonFunctions_instance = null;
  function CommonFunctions_getInstance() {
    if (CommonFunctions_instance === null) {
      new CommonFunctions();
    }
    return CommonFunctions_instance;
  }
  function ConstantFunction(value) {
    this.value_y113ss$_0 = value;
  }
  ConstantFunction.prototype.calculateAt = function (index) {
    return this.value_y113ss$_0;
  };
  Object.defineProperty(ConstantFunction.prototype, 'ownPastOffset', {
    get: function () {
      return 0;
    }
  });
  Object.defineProperty(ConstantFunction.prototype, 'prefetchSize', {
    get: function () {
      return 0;
    }
  });
  Object.defineProperty(ConstantFunction.prototype, 'childFunctions', {
    get: function () {
      return emptyList();
    }
  });
  ConstantFunction.prototype.dataChanged = function (changes) {
    return changes.firstIndexChanged;
  };
  ConstantFunction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ConstantFunction',
    interfaces: [IFunction]
  };
  function CumulativeSumFunction(src) {
    AbstractCachingFunction.call(this);
    this.src_0 = src;
  }
  Object.defineProperty(CumulativeSumFunction.prototype, 'childFunctions', {
    get: function () {
      return listOf_0(this.src_0);
    }
  });
  CumulativeSumFunction.prototype.getValueInternal_za3lpa$ = function (index) {
    var v = this.src_0.calculateAt(index);
    if (isNaN_0(v)) {
      v = 0.0;
    }
    if (index === 0) {
      return v;
    }
    return this.calculateAt(index - 1 | 0) + v;
  };
  CumulativeSumFunction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CumulativeSumFunction',
    interfaces: [AbstractCachingFunction]
  };
  function CumulativeSumWithinSessionFunction(data, src) {
    AbstractCachingFunction.call(this);
    this.data_0 = data;
    this.src_0 = src;
  }
  Object.defineProperty(CumulativeSumWithinSessionFunction.prototype, 'childFunctions', {
    get: function () {
      return listOf_0(this.src_0);
    }
  });
  CumulativeSumWithinSessionFunction.prototype.getValueInternal_za3lpa$ = function (index) {
    var v = this.src_0.calculateAt(index);
    if (isNaN_0(v)) {
      v = 0.0;
    }
    var firstItemIndex = this.getFirstItemInTradingSessionIndex_0(index);
    if (firstItemIndex === -1) {
      return kotlin_js_internal_DoubleCompanionObject.NaN;
    }
    if (firstItemIndex === index) {
      return v;
    }
    return this.calculateAt(index - 1 | 0) + v;
  };
  CumulativeSumWithinSessionFunction.prototype.getFirstItemInTradingSessionIndex_0 = function (index) {
    var item = this.data_0.getTradeItem(index);
    if (item != null) {
      var session = this.getSessionForTimestamp_0(item.getTime());
      if (session != null) {
        if (index === 0) {
          return index;
        }
        var prevItem = this.data_0.getTradeItem(index - 1 | 0);
        if (prevItem != null && prevItem.getTime() >= session.getFrom()) {
          return this.getFirstItemInTradingSessionIndex_0(index - 1 | 0);
        }
        return index;
      }
    }
    return -1;
  };
  function CumulativeSumWithinSessionFunction$getSessionForTimestamp$lambda(closure$timestamp, this$CumulativeSumWithinSessionFunction) {
    return function (session) {
      return this$CumulativeSumWithinSessionFunction.timestampInSessionCompare_0(closure$timestamp, session);
    };
  }
  CumulativeSumWithinSessionFunction.prototype.getSessionForTimestamp_0 = function (timestamp) {
    var index = binarySearch_0(this.data_0.sessions, void 0, void 0, CumulativeSumWithinSessionFunction$getSessionForTimestamp$lambda(timestamp, this));
    if (index >= 0) {
      return this.data_0.sessions.get_za3lpa$(index);
    }
    return null;
  };
  CumulativeSumWithinSessionFunction.prototype.timestampInSessionCompare_0 = function (timestamp, session) {
    if (session.getFrom() <= timestamp && timestamp < session.getTo()) {
      return 0;
    }
    if (timestamp < session.getFrom()) {
      return 1;
    }
    return -1;
  };
  CumulativeSumWithinSessionFunction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CumulativeSumWithinSessionFunction',
    interfaces: [AbstractCachingFunction]
  };
  function DiffDivPrevFunction(srcFunc) {
    AbstractCachingFunction.call(this);
    this.srcFunc_0 = srcFunc;
  }
  Object.defineProperty(DiffDivPrevFunction.prototype, 'ownPastOffset', {
    get: function () {
      return 1;
    }
  });
  Object.defineProperty(DiffDivPrevFunction.prototype, 'childFunctions', {
    get: function () {
      return listOf_0(this.srcFunc_0);
    }
  });
  DiffDivPrevFunction.prototype.getValueInternal_za3lpa$ = function (index) {
    if (index === 0) {
      return kotlin_js_internal_DoubleCompanionObject.NaN;
    }
    var last = this.srcFunc_0.calculateAt(index);
    var prev = this.srcFunc_0.calculateAt(index - 1 | 0);
    if (isNaN_0(prev)) {
      prev = 0.0;
    }
    return Kotlin.compareTo(prev, 0.0) !== 0 ? (last - prev) / prev : 0.0;
  };
  DiffDivPrevFunction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DiffDivPrevFunction',
    interfaces: [AbstractCachingFunction]
  };
  function DiffPrevFunction(srcFunc, distance) {
    if (distance === void 0)
      distance = 1;
    AbstractCachingFunction.call(this);
    this.srcFunc_0 = srcFunc;
    this.distance_0 = distance;
  }
  Object.defineProperty(DiffPrevFunction.prototype, 'childFunctions', {
    get: function () {
      return listOf_0(this.srcFunc_0);
    }
  });
  Object.defineProperty(DiffPrevFunction.prototype, 'ownPastOffset', {
    get: function () {
      return 1;
    }
  });
  DiffPrevFunction.prototype.getValueInternal_za3lpa$ = function (index) {
    if ((index - this.distance_0 | 0) < 0) {
      return kotlin_js_internal_DoubleCompanionObject.NaN;
    }
    var last = this.srcFunc_0.calculateAt(index);
    var prev = this.srcFunc_0.calculateAt(index - this.distance_0 | 0);
    return last - prev;
  };
  DiffPrevFunction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DiffPrevFunction',
    interfaces: [AbstractCachingFunction]
  };
  function DirectionalIndexFunction(diPlus, diMinus) {
    AbstractCachingFunction.call(this);
    this.diPlus_0 = diPlus;
    this.diMinus_0 = diMinus;
  }
  Object.defineProperty(DirectionalIndexFunction.prototype, 'childFunctions', {
    get: function () {
      return listOf([this.diPlus_0, this.diMinus_0]);
    }
  });
  DirectionalIndexFunction.prototype.getValueInternal_za3lpa$ = function (index) {
    return this.diValue_0(this.diPlus_0.calculateAt(index), this.diMinus_0.calculateAt(index));
  };
  DirectionalIndexFunction.prototype.diValue_0 = function (dip, dim) {
    if (isNaN_0(dim) || isNaN_0(dip))
      return kotlin_js_internal_DoubleCompanionObject.NaN;
    if (dip + dim > 0) {
      var x = dip - dim;
      return 100 * Math_0.abs(x) / (dip + dim);
    }
     else
      return 0.0;
  };
  DirectionalIndexFunction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DirectionalIndexFunction',
    interfaces: [AbstractCachingFunction]
  };
  function DirectionalMovementFunction(mainDiff, auxDiff) {
    AbstractCachingFunction.call(this);
    this.mainDiff_0 = mainDiff;
    this.auxDiff_0 = auxDiff;
  }
  Object.defineProperty(DirectionalMovementFunction.prototype, 'childFunctions', {
    get: function () {
      return listOf([this.mainDiff_0, this.auxDiff_0]);
    }
  });
  DirectionalMovementFunction.prototype.getValueInternal_za3lpa$ = function (index) {
    return this.dmValue_0(this.mainDiff_0.calculateAt(index), this.auxDiff_0.calculateAt(index));
  };
  DirectionalMovementFunction.prototype.dmValue_0 = function (md, ad) {
    var tmp$;
    if (isNaN_0(md) || isNaN_0(ad)) {
      tmp$ = kotlin_js_internal_DoubleCompanionObject.NaN;
    }
     else if (md > ad && md > 0) {
      tmp$ = md;
    }
     else {
      tmp$ = 0.0;
    }
    return tmp$;
  };
  DirectionalMovementFunction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DirectionalMovementFunction',
    interfaces: [AbstractCachingFunction]
  };
  function DisplacementFunction(srcFunc, displacement) {
    this.srcFunc_0 = srcFunc;
    this.displacement_0 = displacement;
    this.dataLength_0 = 0;
  }
  Object.defineProperty(DisplacementFunction.prototype, 'childFunctions', {
    get: function () {
      return this.srcFunc_0.childFunctions;
    }
  });
  DisplacementFunction.prototype.calculateAt = function (index) {
    if ((index + this.displacement_0 | 0) < 0 || (index + this.displacement_0 | 0) >= this.dataLength_0) {
      return kotlin_js_internal_DoubleCompanionObject.NaN;
    }
    return this.srcFunc_0.calculateAt(index + this.displacement_0 | 0);
  };
  Object.defineProperty(DisplacementFunction.prototype, 'ownPastOffset', {
    get: function () {
      return this.srcFunc_0.ownPastOffset - this.displacement_0 | 0;
    }
  });
  Object.defineProperty(DisplacementFunction.prototype, 'prefetchSize', {
    get: function () {
      return this.srcFunc_0.prefetchSize;
    }
  });
  DisplacementFunction.prototype.dataChanged = function (changes) {
    this.dataLength_0 = changes.newDataLength;
    var b = this.srcFunc_0.dataChanged(changes);
    return Math_0.max(0, b);
  };
  DisplacementFunction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DisplacementFunction',
    interfaces: [IFunction]
  };
  function DorseyTrendFunction(price, stdDeviation, trend) {
    DorseyTrendFunction$Companion_getInstance();
    AbstractCachingFunction.call(this);
    this.price_0 = price;
    this.stdDeviation_0 = stdDeviation;
    this.trend_0 = trend;
  }
  function DorseyTrendFunction$Companion() {
    DorseyTrendFunction$Companion_instance = this;
    this.DEVIATION_PERIOD = 10;
  }
  DorseyTrendFunction$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var DorseyTrendFunction$Companion_instance = null;
  function DorseyTrendFunction$Companion_getInstance() {
    if (DorseyTrendFunction$Companion_instance === null) {
      new DorseyTrendFunction$Companion();
    }
    return DorseyTrendFunction$Companion_instance;
  }
  function DorseyTrendFunction$Trend(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function DorseyTrendFunction$Trend_initFields() {
    DorseyTrendFunction$Trend_initFields = function () {
    };
    DorseyTrendFunction$Trend$UP_instance = new DorseyTrendFunction$Trend('UP', 0);
    DorseyTrendFunction$Trend$DOWN_instance = new DorseyTrendFunction$Trend('DOWN', 1);
  }
  var DorseyTrendFunction$Trend$UP_instance;
  function DorseyTrendFunction$Trend$UP_getInstance() {
    DorseyTrendFunction$Trend_initFields();
    return DorseyTrendFunction$Trend$UP_instance;
  }
  var DorseyTrendFunction$Trend$DOWN_instance;
  function DorseyTrendFunction$Trend$DOWN_getInstance() {
    DorseyTrendFunction$Trend_initFields();
    return DorseyTrendFunction$Trend$DOWN_instance;
  }
  DorseyTrendFunction$Trend.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Trend',
    interfaces: [Enum]
  };
  function DorseyTrendFunction$Trend$values() {
    return [DorseyTrendFunction$Trend$UP_getInstance(), DorseyTrendFunction$Trend$DOWN_getInstance()];
  }
  DorseyTrendFunction$Trend.values = DorseyTrendFunction$Trend$values;
  function DorseyTrendFunction$Trend$valueOf(name) {
    switch (name) {
      case 'UP':
        return DorseyTrendFunction$Trend$UP_getInstance();
      case 'DOWN':
        return DorseyTrendFunction$Trend$DOWN_getInstance();
      default:throwISE('No enum constant com.devexperts.dxst.functions.DorseyTrendFunction.Trend.' + name);
    }
  }
  DorseyTrendFunction$Trend.valueOf_61zpoe$ = DorseyTrendFunction$Trend$valueOf;
  Object.defineProperty(DorseyTrendFunction.prototype, 'childFunctions', {
    get: function () {
      return listOf([this.price_0, this.stdDeviation_0]);
    }
  });
  DorseyTrendFunction.prototype.getValueInternal_za3lpa$ = function (index) {
    if (index < 1) {
      return kotlin_js_internal_DoubleCompanionObject.NaN;
    }
    var atIndex = this.price_0.calculateAt(index);
    var atPrevious = this.price_0.calculateAt(index - 1 | 0);
    if (isNaN_0(atIndex) || isNaN_0(atPrevious)) {
      return kotlin_js_internal_DoubleCompanionObject.NaN;
    }
    if (this.trend_0 === DorseyTrendFunction$Trend$UP_getInstance() && atIndex > atPrevious || (this.trend_0 === DorseyTrendFunction$Trend$DOWN_getInstance() && atIndex < atPrevious)) {
      return this.stdDeviation_0.calculateAt(index);
    }
    return 0.0;
  };
  DorseyTrendFunction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DorseyTrendFunction',
    interfaces: [AbstractCachingFunction]
  };
  function ETHPriceSourceFunction(dataItems, priceField, sessionSet, lastETHIndex) {
    if (lastETHIndex === void 0)
      lastETHIndex = -1;
    this.dataItems_0 = dataItems;
    this.priceField_0 = priceField;
    this.sessionSet_0 = sessionSet;
    this.lastETHIndex_0 = lastETHIndex;
  }
  Object.defineProperty(ETHPriceSourceFunction.prototype, 'childFunctions', {
    get: function () {
      return emptyList();
    }
  });
  ETHPriceSourceFunction.prototype.calculateAt = function (index) {
    return this.calculate_0(index);
  };
  ETHPriceSourceFunction.prototype.calculate_0 = function (index) {
    var tmp$;
    var di = this.dataItems_0.getTradeItem(index);
    if (di != null) {
      switch (this.sessionSet_0.name) {
        case 'ONLY_LAST_FOR_ALL_CANDLES':
          tmp$ = this.getPrice_0(this.getLastETH_0());
          break;
        case 'WITHOUT_LAST':
          tmp$ = this.getPrice_0(this.getSessionForTimestamp_0(di.getTime(), true));
          break;
        case 'ONLY_LAST':
          var lastETH = this.getLastETH_0();
          if (lastETH != null && this.timestampInSessionCompare_0(di.getTime(), lastETH) === 0) {
            return this.getPrice_0(lastETH);
          }

          return kotlin_js_internal_DoubleCompanionObject.NaN;
        default:tmp$ = Kotlin.noWhenBranchMatched();
          break;
      }
    }
     else {
      return kotlin_js_internal_DoubleCompanionObject.NaN;
    }
    return tmp$;
  };
  ETHPriceSourceFunction.prototype.getLastETH_0 = function () {
    var tmp$;
    var currentTime = epochMillis();
    var lastETH;
    if (!this.isCachedZoneValid_0(currentTime)) {
      tmp$ = this.getLastETHSession_0(currentTime);
    }
     else {
      tmp$ = this.dataItems_0.ethSessions.get_za3lpa$(this.lastETHIndex_0);
    }
    lastETH = tmp$;
    return lastETH;
  };
  ETHPriceSourceFunction.prototype.getLastETHSession_0 = function (currentTime) {
    if (this.dataItems_0.ethSessions.isEmpty()) {
      return null;
    }
    var $receiver = this.dataItems_0.ethSessions;
    var indexOfFirst$result;
    indexOfFirst$break: do {
      var tmp$;
      var index = 0;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var item = tmp$.next();
        if (item.getFrom() >= currentTime.toNumber()) {
          indexOfFirst$result = index;
          break indexOfFirst$break;
        }
        index = index + 1 | 0;
      }
      indexOfFirst$result = -1;
    }
     while (false);
    var indexOfFutureSession = indexOfFirst$result;
    this.lastETHIndex_0 = indexOfFutureSession - 1 | 0;
    return this.dataItems_0.ethSessions.get_za3lpa$(this.lastETHIndex_0);
  };
  ETHPriceSourceFunction.prototype.isCachedZoneValid_0 = function (currentTime) {
    if (this.lastETHIndex_0 === -1) {
      return false;
    }
    var tradingSessionData = this.dataItems_0.ethSessions.get_za3lpa$(this.lastETHIndex_0);
    var nextZone = this.dataItems_0.ethSessions.get_za3lpa$(this.lastETHIndex_0 + 1 | 0);
    return tradingSessionData.getTo() >= currentTime.toNumber() && tradingSessionData.getFrom() >= currentTime.toNumber() || nextZone.getFrom() > this.lastETHIndex_0;
  };
  ETHPriceSourceFunction.prototype.getPrice_0 = function (session) {
    var tmp$, tmp$_0, tmp$_1;
    switch (this.priceField_0.name) {
      case 'HIGH':
        tmp$_1 = (tmp$ = session != null ? session.getHigh() : null) != null ? tmp$ : kotlin_js_internal_DoubleCompanionObject.NaN;
        break;
      case 'LOW':
        tmp$_1 = (tmp$_0 = session != null ? session.getLow() : null) != null ? tmp$_0 : kotlin_js_internal_DoubleCompanionObject.NaN;
        break;
      default:tmp$_1 = kotlin_js_internal_DoubleCompanionObject.NaN;
        break;
    }
    return tmp$_1;
  };
  function ETHPriceSourceFunction$getSessionForTimestamp$lambda(closure$timestamp, this$ETHPriceSourceFunction) {
    return function (session) {
      return this$ETHPriceSourceFunction.timestampInSessionCompare_0(closure$timestamp, session);
    };
  }
  ETHPriceSourceFunction.prototype.getSessionForTimestamp_0 = function (timestamp, excludeLast) {
    if (excludeLast === void 0)
      excludeLast = false;
    var index = binarySearch_0(this.dataItems_0.ethSessions, void 0, void 0, ETHPriceSourceFunction$getSessionForTimestamp$lambda(timestamp, this));
    if (index >= 0) {
      var tradingSessionData = this.dataItems_0.ethSessions.get_za3lpa$(index);
      if (excludeLast) {
        var lastETHSession = this.getLastETH_0();
        if (lastETHSession != null && this.timestampInSessionCompare_0(timestamp, lastETHSession) === 0) {
          return null;
        }
      }
      return tradingSessionData;
    }
    return null;
  };
  ETHPriceSourceFunction.prototype.timestampInSessionCompare_0 = function (timestamp, session) {
    if (session.getFrom() <= timestamp && timestamp < session.getTo()) {
      return 0;
    }
    if (timestamp < session.getFrom()) {
      return 1;
    }
    return -1;
  };
  Object.defineProperty(ETHPriceSourceFunction.prototype, 'dataLength', {
    get: function () {
      return this.dataItems_0.dataLength;
    }
  });
  Object.defineProperty(ETHPriceSourceFunction.prototype, 'ownPastOffset', {
    get: function () {
      return 0;
    }
  });
  Object.defineProperty(ETHPriceSourceFunction.prototype, 'prefetchSize', {
    get: function () {
      return 0;
    }
  });
  ETHPriceSourceFunction.prototype.dataChanged = function (changes) {
    var b = this.dataItems_0.dataLength - 1 | 0;
    return Math_0.max(0, b);
  };
  ETHPriceSourceFunction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ETHPriceSourceFunction',
    interfaces: [IFunction]
  };
  function Equals(source, equalsTo, ifEqualsResult, ifNotEqualsResult) {
    AbstractCachingFunction.call(this);
    this.source_0 = source;
    this.equalsTo_0 = equalsTo;
    this.ifEqualsResult_0 = ifEqualsResult;
    this.ifNotEqualsResult_0 = ifNotEqualsResult;
  }
  Object.defineProperty(Equals.prototype, 'childFunctions', {
    get: function () {
      return listOf([this.source_0, this.equalsTo_0, this.ifEqualsResult_0, this.ifNotEqualsResult_0]);
    }
  });
  Equals.prototype.getValueInternal_za3lpa$ = function (index) {
    var equalsToValue = this.equalsTo_0.calculateAt(index);
    var sourceValue = this.source_0.calculateAt(index);
    return Kotlin.compareTo(equalsToValue, sourceValue) === 0 ? this.ifEqualsResult_0.calculateAt(index) : this.ifNotEqualsResult_0.calculateAt(index);
  };
  Equals.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Equals',
    interfaces: [AbstractCachingFunction]
  };
  function Floor(source) {
    AbstractCachingFunction.call(this);
    this.source_0 = source;
  }
  Object.defineProperty(Floor.prototype, 'childFunctions', {
    get: function () {
      return setOf(this.source_0);
    }
  });
  Floor.prototype.getValueInternal_za3lpa$ = function (index) {
    var x = this.source_0.calculateAt(index);
    return Math_0.floor(x);
  };
  Floor.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Floor',
    interfaces: [AbstractCachingFunction]
  };
  function FullRangeStandardDeviationFunction(srcFunc, period) {
    StandardDeviationFunction.call(this, srcFunc, period);
    this.calculatedResult_0 = kotlin_js_internal_DoubleCompanionObject.NaN;
  }
  Object.defineProperty(FullRangeStandardDeviationFunction.prototype, 'ownPastOffset', {
    get: function () {
      return 0;
    }
  });
  FullRangeStandardDeviationFunction.prototype.dataChangedInternalHook_4an1kt$ = function (changes) {
    this.length = changes.newDataLength;
    this.calculatedResult_0 = kotlin_js_internal_DoubleCompanionObject.NaN;
    return 0;
  };
  FullRangeStandardDeviationFunction.prototype.getValueInternal_za3lpa$ = function (index) {
    if (isNaN_0(this.calculatedResult_0)) {
      this.calculatedResult_0 = StandardDeviationFunction.prototype.getValueInternal_za3lpa$.call(this, this.length - 1 | 0);
    }
    return this.calculatedResult_0;
  };
  FullRangeStandardDeviationFunction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FullRangeStandardDeviationFunction',
    interfaces: [StandardDeviationFunction]
  };
  function HighestAllFunction(srcFunc) {
    HighestFunction.call(this, srcFunc, 1);
    this.calculatedResult_0 = kotlin_js_internal_DoubleCompanionObject.NaN;
  }
  Object.defineProperty(HighestAllFunction.prototype, 'ownPastOffset', {
    get: function () {
      return 0;
    }
  });
  HighestAllFunction.prototype.dataChangedInternalHook_4an1kt$ = function (changes) {
    this.length = changes.newDataLength;
    this.calculatedResult_0 = kotlin_js_internal_DoubleCompanionObject.NaN;
    return 0;
  };
  HighestAllFunction.prototype.getValueInternal_za3lpa$ = function (index) {
    if (isNaN_0(this.calculatedResult_0)) {
      this.calculatedResult_0 = HighestFunction.prototype.getValueInternal_za3lpa$.call(this, this.length - 1 | 0);
    }
    return this.calculatedResult_0;
  };
  HighestAllFunction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HighestAllFunction',
    interfaces: [HighestFunction]
  };
  function HighestFunction(srcFunc, period) {
    BackRangeDependentFunction.call(this, srcFunc, period);
  }
  HighestFunction.prototype.processRange_gf7tl1$ = function (srcLatestValues) {
    var tmp$;
    var max = srcLatestValues[0];
    tmp$ = this.length - 1 | 0;
    for (var i = 1; i <= tmp$; i++) {
      if (srcLatestValues[i] > max)
        max = srcLatestValues[i];
    }
    return max;
  };
  HighestFunction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HighestFunction',
    interfaces: [BackRangeDependentFunction]
  };
  function HighestHighPeriod(srcFunc, length) {
    BackRangeDependentFunction.call(this, srcFunc, length);
  }
  HighestHighPeriod.prototype.processRange_gf7tl1$ = function (srcLatestValues) {
    var priceSourceLength = srcLatestValues.length;
    var hhPosition = 0;
    var hh = srcLatestValues[0];
    for (var i = 0; i < priceSourceLength; i++) {
      var currentValue = srcLatestValues[i];
      if (currentValue >= hh) {
        hh = currentValue;
        hhPosition = i;
      }
    }
    return priceSourceLength - (hhPosition + 1) | 0;
  };
  HighestHighPeriod.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HighestHighPeriod',
    interfaces: [BackRangeDependentFunction]
  };
  function IfFunction(predicate, predicateFn, yesFn, noFn) {
    AbstractCachingFunction.call(this);
    this.predicate_0 = predicate;
    this.predicateFn_0 = predicateFn;
    this.yesFn_0 = yesFn;
    this.noFn_0 = noFn;
  }
  Object.defineProperty(IfFunction.prototype, 'childFunctions', {
    get: function () {
      return listOf([this.predicateFn_0, this.yesFn_0, this.noFn_0]);
    }
  });
  Object.defineProperty(IfFunction.prototype, 'ownPastOffset', {
    get: function () {
      return 1;
    }
  });
  IfFunction.prototype.getValueInternal_za3lpa$ = function (index) {
    if (this.predicate_0(this.predicateFn_0.calculateAt(index))) {
      return this.yesFn_0.calculateAt(index);
    }
     else {
      return this.noFn_0.calculateAt(index);
    }
  };
  IfFunction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'IfFunction',
    interfaces: [AbstractCachingFunction]
  };
  function IntradaySumFunction(srcFunc, length) {
    BackRangeDependentFunction.call(this, srcFunc, length, true);
  }
  IntradaySumFunction.prototype.processRange_gf7tl1$ = function (srcLatestValues) {
    var tmp$;
    var ret = 0.0;
    for (tmp$ = 0; tmp$ !== srcLatestValues.length; ++tmp$) {
      var value = srcLatestValues[tmp$];
      if (!isNaN_0(value) && value > 0.0) {
        ret += value;
      }
    }
    return ret;
  };
  IntradaySumFunction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'IntradaySumFunction',
    interfaces: [BackRangeDependentFunction]
  };
  function InvertFunction(tradeDataHolder, srcFunction) {
    this.tradeDataHolder_0 = tradeDataHolder;
    this.srcFunction_0 = srcFunction;
  }
  Object.defineProperty(InvertFunction.prototype, 'childFunctions', {
    get: function () {
      return listOf_0(this.srcFunction_0);
    }
  });
  Object.defineProperty(InvertFunction.prototype, 'ownPastOffset', {
    get: function () {
      return 0;
    }
  });
  Object.defineProperty(InvertFunction.prototype, 'prefetchSize', {
    get: function () {
      return 0;
    }
  });
  InvertFunction.prototype.calculateAt = function (index) {
    return -this.srcFunction_0.calculateAt(index);
  };
  InvertFunction.prototype.dataChanged = function (changes) {
    var b = this.tradeDataHolder_0.dataLength - 1 | 0;
    return Math_0.max(0, b);
  };
  InvertFunction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'InvertFunction',
    interfaces: [IFunction]
  };
  function LimitFunction(tradeDataHolder, srcFunction, limit) {
    this.tradeDataHolder_0 = tradeDataHolder;
    this.srcFunction_0 = srcFunction;
    this.limit_0 = limit;
  }
  Object.defineProperty(LimitFunction.prototype, 'childFunctions', {
    get: function () {
      return listOf_0(this.srcFunction_0);
    }
  });
  Object.defineProperty(LimitFunction.prototype, 'ownPastOffset', {
    get: function () {
      return 0;
    }
  });
  Object.defineProperty(LimitFunction.prototype, 'prefetchSize', {
    get: function () {
      return 0;
    }
  });
  LimitFunction.prototype.calculateAt = function (index) {
    var tmp$;
    if ((this.tradeDataHolder_0.dataLength - index | 0) > this.limit_0) {
      tmp$ = kotlin_js_internal_DoubleCompanionObject.NaN;
    }
     else {
      tmp$ = this.srcFunction_0.calculateAt(index);
    }
    return tmp$;
  };
  LimitFunction.prototype.dataChanged = function (changes) {
    var b = this.tradeDataHolder_0.dataLength - 1 | 0;
    return Math_0.max(0, b);
  };
  LimitFunction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LimitFunction',
    interfaces: [IFunction]
  };
  function LinearDeviationFunction(srcFunc, period) {
    BackRangeDependentFunction.call(this, srcFunc, period);
  }
  LinearDeviationFunction.prototype.processRange_gf7tl1$ = function (srcLatestValues) {
    var i;
    var length = this.length;
    var sum = srcLatestValues[0];
    i = 1;
    while (i < length) {
      sum += srcLatestValues[i];
      i = i + 1 | 0;
    }
    var avg = sum / length;
    var x = srcLatestValues[0] - avg;
    var sumDiff = Math_0.abs(x);
    i = 1;
    while (i < length) {
      var tmp$ = sumDiff;
      var x_0 = srcLatestValues[i] - avg;
      sumDiff = tmp$ + Math_0.abs(x_0);
      i = i + 1 | 0;
    }
    return sumDiff / length;
  };
  LinearDeviationFunction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LinearDeviationFunction',
    interfaces: [BackRangeDependentFunction]
  };
  function LinearRegressionCurveFunction(srcFunc, period) {
    BackRangeDependentFunction.call(this, srcFunc, period);
  }
  LinearRegressionCurveFunction.prototype.processRange_gf7tl1$ = function (srcLatestValues) {
    var count = this.length;
    if (count < 1)
      return kotlin_js_internal_DoubleCompanionObject.NaN;
    if (count === 1)
      return srcLatestValues[0];
    var sumX = 0.0;
    var sumY = 0.0;
    var sumXX = 0.0;
    var sumXY = 0.0;
    for (var i = 0; i < count; i++) {
      var index = i + 1 | 0;
      sumX += index;
      sumY += srcLatestValues[i];
      sumXX += Kotlin.imul(index, index);
      sumXY += index * srcLatestValues[i];
    }
    var b = (count * sumXY - sumX * sumY) / (count * sumXX - sumX * sumX);
    var a = (sumY - b * sumX) / count;
    return b * count + a;
  };
  LinearRegressionCurveFunction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LinearRegressionCurveFunction',
    interfaces: [BackRangeDependentFunction]
  };
  function LnDivPrevFunction(srcFunc) {
    AbstractCachingFunction.call(this);
    this.srcFunc_0 = srcFunc;
  }
  Object.defineProperty(LnDivPrevFunction.prototype, 'childFunctions', {
    get: function () {
      return listOf_0(this.srcFunc_0);
    }
  });
  Object.defineProperty(LnDivPrevFunction.prototype, 'ownPastOffset', {
    get: function () {
      return 1;
    }
  });
  LnDivPrevFunction.prototype.getValueInternal_za3lpa$ = function (index) {
    var tmp$;
    if (index === 0) {
      return kotlin_js_internal_DoubleCompanionObject.NaN;
    }
    var last = this.srcFunc_0.calculateAt(index);
    var prev = this.srcFunc_0.calculateAt(index - 1 | 0);
    if (Kotlin.compareTo(prev, 0.0) !== 0) {
      tmp$ = log(last / prev, math.E);
    }
     else {
      tmp$ = 0.0;
    }
    return tmp$;
  };
  LnDivPrevFunction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LnDivPrevFunction',
    interfaces: [AbstractCachingFunction]
  };
  function LogarithmFunction(src) {
    AbstractCachingFunction.call(this);
    this.src_0 = src;
  }
  Object.defineProperty(LogarithmFunction.prototype, 'childFunctions', {
    get: function () {
      return listOf_0(this.src_0);
    }
  });
  LogarithmFunction.prototype.getValueInternal_za3lpa$ = function (index) {
    return log(this.src_0.calculateAt(index), math.E);
  };
  LogarithmFunction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LogarithmFunction',
    interfaces: [AbstractCachingFunction]
  };
  function LowestFunction(srcFunc, period) {
    BackRangeDependentFunction.call(this, srcFunc, period);
  }
  LowestFunction.prototype.processRange_gf7tl1$ = function (srcLatestValues) {
    var tmp$;
    var min = srcLatestValues[0];
    tmp$ = this.length - 1 | 0;
    for (var i = 1; i <= tmp$; i++) {
      if (srcLatestValues[i] < min)
        min = srcLatestValues[i];
    }
    return min;
  };
  LowestFunction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LowestFunction',
    interfaces: [BackRangeDependentFunction]
  };
  function LowestLowPeriod(srcFunc, length) {
    BackRangeDependentFunction.call(this, srcFunc, length);
  }
  LowestLowPeriod.prototype.processRange_gf7tl1$ = function (srcLatestValues) {
    var tmp$;
    var priceSourceLength = srcLatestValues.length;
    var llPosition = 0;
    var ll = srcLatestValues[0];
    tmp$ = priceSourceLength - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      var currentValue = srcLatestValues[i];
      if (currentValue <= ll) {
        ll = currentValue;
        llPosition = i;
      }
    }
    return priceSourceLength - (llPosition + 1) | 0;
  };
  LowestLowPeriod.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LowestLowPeriod',
    interfaces: [BackRangeDependentFunction]
  };
  function MapFunction(tradeDataHolder, src, mapFunction) {
    this.tradeDataHolder_0 = tradeDataHolder;
    this.src_0 = src;
    this.mapFunction_0 = mapFunction;
  }
  Object.defineProperty(MapFunction.prototype, 'childFunctions', {
    get: function () {
      return listOf_0(this.src_0);
    }
  });
  Object.defineProperty(MapFunction.prototype, 'ownPastOffset', {
    get: function () {
      return 0;
    }
  });
  Object.defineProperty(MapFunction.prototype, 'prefetchSize', {
    get: function () {
      return 0;
    }
  });
  MapFunction.prototype.calculateAt = function (index) {
    return this.mapFunction_0(this.src_0.calculateAt(index));
  };
  MapFunction.prototype.dataChanged = function (changes) {
    var b = this.tradeDataHolder_0.dataLength - 1 | 0;
    return Math_0.max(0, b);
  };
  MapFunction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MapFunction',
    interfaces: [IFunction]
  };
  function MapToOneFunction(dataItems, series) {
    this.dataItems_0 = dataItems;
    this.series_0 = series;
  }
  MapToOneFunction.prototype.calculateAt = function (index) {
    var current = this.series_0.calculateAt(index);
    return isFinite(current) ? 1.0 : kotlin_js_internal_DoubleCompanionObject.NaN;
  };
  Object.defineProperty(MapToOneFunction.prototype, 'childFunctions', {
    get: function () {
      return listOf_0(this.series_0);
    }
  });
  Object.defineProperty(MapToOneFunction.prototype, 'ownPastOffset', {
    get: function () {
      return 0;
    }
  });
  Object.defineProperty(MapToOneFunction.prototype, 'prefetchSize', {
    get: function () {
      return 0;
    }
  });
  MapToOneFunction.prototype.dataChanged = function (changes) {
    var b = this.dataItems_0.dataLength - 1 | 0;
    return Math_0.max(0, b);
  };
  MapToOneFunction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MapToOneFunction',
    interfaces: [IFunction]
  };
  function MaxValueFunction(functions) {
    AbstractCachingFunction.call(this);
    var tmp$;
    this.functions_0 = Kotlin.isArray(tmp$ = functions) ? tmp$ : throwCCE();
  }
  Object.defineProperty(MaxValueFunction.prototype, 'childFunctions', {
    get: function () {
      return listOf(this.functions_0.slice());
    }
  });
  MaxValueFunction.prototype.getValueInternal_za3lpa$ = function (index) {
    var tmp$, tmp$_0;
    var largest = this.functions_0[0].calculateAt(index);
    tmp$ = this.functions_0;
    for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
      var func = tmp$[tmp$_0];
      var currentFuncValue = func.calculateAt(index);
      if (isNaN_0(currentFuncValue)) {
        largest = kotlin_js_internal_DoubleCompanionObject.NaN;
        break;
      }
      if (currentFuncValue > largest) {
        largest = currentFuncValue;
      }
    }
    return largest;
  };
  MaxValueFunction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MaxValueFunction',
    interfaces: [AbstractCachingFunction]
  };
  function MinValueFunction(functions) {
    AbstractCachingFunction.call(this);
    var tmp$;
    this.functions_0 = Kotlin.isArray(tmp$ = functions) ? tmp$ : throwCCE();
  }
  Object.defineProperty(MinValueFunction.prototype, 'childFunctions', {
    get: function () {
      return listOf(this.functions_0.slice());
    }
  });
  MinValueFunction.prototype.getValueInternal_za3lpa$ = function (index) {
    var tmp$, tmp$_0;
    var min = this.functions_0[0].calculateAt(index);
    tmp$ = this.functions_0;
    for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
      var func = tmp$[tmp$_0];
      var value = func.calculateAt(index);
      if (isNaN_0(value)) {
        min = kotlin_js_internal_DoubleCompanionObject.NaN;
        break;
      }
      if (value < min) {
        min = value;
      }
    }
    return min;
  };
  MinValueFunction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MinValueFunction',
    interfaces: [AbstractCachingFunction]
  };
  function MoneyFlowFunction(priceFunc, volumeFunc, positive) {
    AbstractCachingFunction.call(this);
    this.priceFunc_0 = priceFunc;
    this.volumeFunc_0 = volumeFunc;
    this.positive_0 = positive;
  }
  Object.defineProperty(MoneyFlowFunction.prototype, 'ownPastOffset', {
    get: function () {
      return 1;
    }
  });
  Object.defineProperty(MoneyFlowFunction.prototype, 'childFunctions', {
    get: function () {
      return listOf([this.priceFunc_0, this.volumeFunc_0]);
    }
  });
  MoneyFlowFunction.prototype.getValueInternal_za3lpa$ = function (index) {
    if (index === 0)
      return kotlin_js_internal_DoubleCompanionObject.NaN;
    var price = this.priceFunc_0.calculateAt(index);
    var prevPrice = this.priceFunc_0.calculateAt(index - 1 | 0);
    var volume = this.volumeFunc_0.calculateAt(index);
    return this.moneyFlowValue_0(price, prevPrice, volume);
  };
  MoneyFlowFunction.prototype.moneyFlowValue_0 = function (price, prevPrice, volume) {
    if (this.positive_0) {
      if (price > prevPrice)
        return price * volume;
      else
        return 0.0;
    }
     else {
      return price * volume;
    }
  };
  MoneyFlowFunction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MoneyFlowFunction',
    interfaces: [AbstractCachingFunction]
  };
  function MovingAverageExponential(srcFunc, period, startOffset) {
    if (startOffset === void 0)
      startOffset = 0;
    AbstractCachingFunction.call(this);
    this.srcFunc_0 = srcFunc;
    this.period_0 = period;
    this.startOffset_0 = startOffset;
    this.percent_0 = 2.0 / (this.period_0 + 1 | 0);
  }
  Object.defineProperty(MovingAverageExponential.prototype, 'ownPastOffset', {
    get: function () {
      return this.period_0 - 1 | 0;
    }
  });
  Object.defineProperty(MovingAverageExponential.prototype, 'childFunctions', {
    get: function () {
      return listOf_0(this.srcFunc_0);
    }
  });
  MovingAverageExponential.prototype.getValueInternal_za3lpa$ = function (index) {
    var tmp$, tmp$_0;
    if (index < (this.period_0 - 1 + this.startOffset_0 | 0)) {
      tmp$_0 = kotlin_js_internal_DoubleCompanionObject.NaN;
    }
     else {
      if (index === (this.period_0 - 1 + this.startOffset_0 | 0)) {
        var sum = this.srcFunc_0.calculateAt(this.startOffset_0);
        tmp$ = this.period_0;
        for (var i = 1; i < tmp$; i++) {
          sum += this.srcFunc_0.calculateAt(i + this.startOffset_0 | 0);
        }
        tmp$_0 = sum / this.period_0;
      }
       else {
        var srcValue = this.srcFunc_0.calculateAt(index);
        var prevEMA = this.calculateAt(index - 1 | 0);
        tmp$_0 = prevEMA + this.percent_0 * (srcValue - prevEMA);
      }
    }
    return tmp$_0;
  };
  Object.defineProperty(MovingAverageExponential.prototype, 'prefetchSize', {
    get: function () {
      return (4 * this.period_0 | 0) + this.startOffset_0 | 0;
    }
  });
  MovingAverageExponential.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MovingAverageExponential',
    interfaces: [AbstractCachingFunction]
  };
  function MovingAverageSimple(srcFunc, period) {
    BackRangeDependentFunction.call(this, srcFunc, period);
  }
  MovingAverageSimple.prototype.processRange_gf7tl1$ = function (srcLatestValues) {
    var tmp$;
    var length = this.length;
    var sum = srcLatestValues[0];
    tmp$ = length - 1 | 0;
    for (var i = 1; i <= tmp$; i++) {
      sum += srcLatestValues[i];
    }
    return sum / length;
  };
  MovingAverageSimple.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MovingAverageSimple',
    interfaces: [BackRangeDependentFunction]
  };
  function MovingAverageSmoothed(srcFunc, length, startOffset) {
    if (startOffset === void 0)
      startOffset = 0;
    AbstractCachingFunction.call(this);
    this.srcFunc_0 = srcFunc;
    this.length_0 = length;
    this.startOffset_0 = startOffset;
  }
  Object.defineProperty(MovingAverageSmoothed.prototype, 'childFunctions', {
    get: function () {
      return listOf_0(this.srcFunc_0);
    }
  });
  Object.defineProperty(MovingAverageSmoothed.prototype, 'ownPastOffset', {
    get: function () {
      return this.length_0 - 1 | 0;
    }
  });
  MovingAverageSmoothed.prototype.getValueInternal_za3lpa$ = function (index) {
    var tmp$, tmp$_0;
    if (index < (this.length_0 - 1 + this.startOffset_0 | 0)) {
      return kotlin_js_internal_DoubleCompanionObject.NaN;
    }
    if (index === (this.length_0 - 1 + this.startOffset_0 | 0)) {
      var sum = this.srcFunc_0.calculateAt(this.startOffset_0);
      tmp$ = this.length_0;
      for (var i = 1; i < tmp$; i++) {
        sum += this.srcFunc_0.calculateAt(i + this.startOffset_0 | 0);
      }
      tmp$_0 = sum / this.length_0;
    }
     else {
      var src = this.srcFunc_0.calculateAt(index);
      tmp$_0 = (this.calculateAt(index - 1 | 0) * (this.length_0 - 1 | 0) + src) / this.length_0;
    }
    return tmp$_0;
  };
  MovingAverageSmoothed.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MovingAverageSmoothed',
    interfaces: [AbstractCachingFunction]
  };
  function MovingAverageWeighted(srcFunc, length) {
    BackRangeDependentFunction.call(this, srcFunc, length);
  }
  MovingAverageWeighted.prototype.processRange_gf7tl1$ = function (srcLatestValues) {
    var tmp$;
    var length = this.length;
    var denominator = Kotlin.imul(length, length + 1 | 0) / 2 | 0;
    var total = 0.0;
    tmp$ = length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      var weigth = i + 1 | 0;
      total += weigth * srcLatestValues[i];
    }
    return total / denominator;
  };
  MovingAverageWeighted.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MovingAverageWeighted',
    interfaces: [BackRangeDependentFunction]
  };
  function NegativeVolumeIndexFunction(volumeFunction, closeFunction) {
    AbstractCachingFunction.call(this);
    this.volumeFunction_0 = volumeFunction;
    this.closeFunction_0 = closeFunction;
  }
  Object.defineProperty(NegativeVolumeIndexFunction.prototype, 'childFunctions', {
    get: function () {
      return listOf([this.volumeFunction_0, this.closeFunction_0]);
    }
  });
  NegativeVolumeIndexFunction.prototype.getValueInternal_za3lpa$ = function (index) {
    if (index === 0)
      return 100.0;
    var volume = this.volumeFunction_0.calculateAt(index);
    var close = this.closeFunction_0.calculateAt(index);
    if (isNaN_0(volume) || isNaN_0(close)) {
      return kotlin_js_internal_DoubleCompanionObject.NaN;
    }
    var prevVolume = this.volumeFunction_0.calculateAt(index - 1 | 0);
    var prevClose = this.closeFunction_0.calculateAt(index - 1 | 0);
    var prevNVI = this.calculateAt(index - 1 | 0);
    return prevNVI + (this.isDivisionNeeded_0(volume, close, prevVolume, prevClose) ? 100.0 * ((close - prevClose) / prevClose) : 0.0);
  };
  NegativeVolumeIndexFunction.prototype.isDivisionNeeded_0 = function (volume, close, prevVolume, prevClose) {
    return !isNaN_0(volume) && !isNaN_0(close) && volume < prevVolume && Kotlin.compareTo(prevClose, 0.0) !== 0;
  };
  NegativeVolumeIndexFunction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NegativeVolumeIndexFunction',
    interfaces: [AbstractCachingFunction]
  };
  function NotZero(srcFunc) {
    AbstractCachingFunction.call(this);
    this.srcFunc_0 = srcFunc;
    this.notZeroFn_0 = null;
    this.notZeroFn_0 = new ArithmeticFunction(this.srcFunc_0, new ConstantFunction(0.0), ArithmeticOperation$MAX_getInstance());
  }
  NotZero.prototype.getValueInternal_za3lpa$ = function (index) {
    return this.notZeroFn_0.calculateAt(index);
  };
  Object.defineProperty(NotZero.prototype, 'childFunctions', {
    get: function () {
      return listOf_0(this.srcFunc_0);
    }
  });
  NotZero.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NotZero',
    interfaces: [AbstractCachingFunction]
  };
  function PredicateFunction(tradeDataHolder, guardFunction, srcFunction, predicate) {
    this.tradeDataHolder_0 = tradeDataHolder;
    this.guardFunction_0 = guardFunction;
    this.srcFunction_0 = srcFunction;
    this.predicate_0 = predicate;
  }
  Object.defineProperty(PredicateFunction.prototype, 'childFunctions', {
    get: function () {
      return listOf_0(this.srcFunction_0);
    }
  });
  Object.defineProperty(PredicateFunction.prototype, 'ownPastOffset', {
    get: function () {
      return 0;
    }
  });
  Object.defineProperty(PredicateFunction.prototype, 'prefetchSize', {
    get: function () {
      return 0;
    }
  });
  PredicateFunction.prototype.calculateAt = function (index) {
    var tmp$;
    if (this.predicate_0(this.guardFunction_0.calculateAt(index))) {
      tmp$ = this.srcFunction_0.calculateAt(index);
    }
     else {
      tmp$ = kotlin_js_internal_DoubleCompanionObject.NaN;
    }
    return tmp$;
  };
  PredicateFunction.prototype.dataChanged = function (changes) {
    var b = this.tradeDataHolder_0.dataLength - 1 | 0;
    return Math_0.max(0, b);
  };
  PredicateFunction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PredicateFunction',
    interfaces: [IFunction]
  };
  function PriceAggregatedSourceFunction(data, type, price, displace) {
    if (displace === void 0)
      displace = 0;
    this.data_0 = data;
    this.type_0 = type;
    this.price_0 = price;
    this.displace_0 = displace;
  }
  PriceAggregatedSourceFunction.prototype.calculateAt = function (index) {
    var di = this.data_0.getAggregatedTradeItem(index, this.type_0, this.displace_0);
    if (di != null) {
      return this.calculate_0(di);
    }
    return kotlin_js_internal_DoubleCompanionObject.NaN;
  };
  Object.defineProperty(PriceAggregatedSourceFunction.prototype, 'prefetchSize', {
    get: function () {
      return -this.displace_0 | 0;
    }
  });
  PriceAggregatedSourceFunction.prototype.calculate_0 = function (di) {
    var tmp$, tmp$_0, tmp$_1;
    switch (this.price_0.name) {
      case 'OPEN':
        tmp$_1 = di.getOpen();
        break;
      case 'CLOSE':
        tmp$_1 = di.getClose();
        break;
      case 'HIGH':
        tmp$_1 = di.getHigh();
        break;
      case 'LOW':
        tmp$_1 = di.getLow();
        break;
      case 'IMP_VOLATILITY':
        tmp$_1 = (tmp$ = di.getImpVolatility()) != null ? tmp$ : 0.0;
        break;
      case 'MEDIAN':
        tmp$_1 = (di.getHigh() + di.getLow()) / 2;
        break;
      case 'TYPICAL':
        tmp$_1 = (tmp$_0 = di.getVwap()) != null ? tmp$_0 : (di.getHigh() + di.getLow() + di.getClose()) / 3;
        break;
      case 'OHLC_AVERAGE':
        tmp$_1 = (di.getOpen() + di.getHigh() + di.getLow() + di.getClose()) / 4;
        break;
      case 'VOLUME':
        tmp$_1 = di.getVolume();
        break;
      default:tmp$_1 = Kotlin.noWhenBranchMatched();
        break;
    }
    var ret = tmp$_1;
    return ret;
  };
  Object.defineProperty(PriceAggregatedSourceFunction.prototype, 'dataLength', {
    get: function () {
      return this.data_0.dataLength;
    }
  });
  Object.defineProperty(PriceAggregatedSourceFunction.prototype, 'childFunctions', {
    get: function () {
      return emptyList();
    }
  });
  Object.defineProperty(PriceAggregatedSourceFunction.prototype, 'ownPastOffset', {
    get: function () {
      return 0;
    }
  });
  PriceAggregatedSourceFunction.prototype.dataChanged = function (changes) {
    var b = this.data_0.dataLength - 1 | 0;
    return Math_0.max(0, b);
  };
  PriceAggregatedSourceFunction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PriceAggregatedSourceFunction',
    interfaces: [IFunction]
  };
  function PriceSourceFunction(dataItems, priceField) {
    this.dataItems_0 = dataItems;
    this.priceField_0 = priceField;
  }
  Object.defineProperty(PriceSourceFunction.prototype, 'childFunctions', {
    get: function () {
      return emptyList();
    }
  });
  PriceSourceFunction.prototype.calculateAt = function (index) {
    return this.calculate_0(index);
  };
  PriceSourceFunction.prototype.calculate_0 = function (index) {
    var di = this.dataItems_0.getTradeItem(index);
    if (di != null) {
      return this.getPrice_0(di);
    }
     else {
      return kotlin_js_internal_DoubleCompanionObject.NaN;
    }
  };
  PriceSourceFunction.prototype.getPrice_0 = function (di) {
    var tmp$, tmp$_0, tmp$_1;
    switch (this.priceField_0.name) {
      case 'OPEN':
        tmp$_1 = di.getOpen();
        break;
      case 'HIGH':
        tmp$_1 = di.getHigh();
        break;
      case 'LOW':
        tmp$_1 = di.getLow();
        break;
      case 'CLOSE':
        tmp$_1 = di.getClose();
        break;
      case 'IMP_VOLATILITY':
        tmp$_1 = (tmp$ = di.getImpVolatility()) != null ? tmp$ : 0.0;
        break;
      case 'MEDIAN':
        tmp$_1 = (di.getHigh() + di.getLow()) / 2;
        break;
      case 'TYPICAL':
        tmp$_1 = (tmp$_0 = di.getVwap()) != null ? tmp$_0 : (di.getHigh() + di.getLow() + di.getClose()) / 3;
        break;
      case 'OHLC_AVERAGE':
        tmp$_1 = (di.getOpen() + di.getHigh() + di.getLow() + di.getClose()) / 4;
        break;
      case 'VOLUME':
        tmp$_1 = di.getVolume();
        break;
      default:tmp$_1 = Kotlin.noWhenBranchMatched();
        break;
    }
    return tmp$_1;
  };
  Object.defineProperty(PriceSourceFunction.prototype, 'dataLength', {
    get: function () {
      return this.dataItems_0.dataLength;
    }
  });
  Object.defineProperty(PriceSourceFunction.prototype, 'ownPastOffset', {
    get: function () {
      return 0;
    }
  });
  Object.defineProperty(PriceSourceFunction.prototype, 'prefetchSize', {
    get: function () {
      return 0;
    }
  });
  PriceSourceFunction.prototype.dataChanged = function (changes) {
    var b = this.dataItems_0.dataLength - 1 | 0;
    return Math_0.max(0, b);
  };
  PriceSourceFunction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PriceSourceFunction',
    interfaces: [IFunction]
  };
  function RelativeVolatilityFunction(price, length) {
    RelativeVolatilityFunction$Companion_getInstance();
    AbstractCachingFunction.call(this);
    this.rvFunction_0 = null;
    var upAvg = RelativeVolatilityFunction$Companion_getInstance().constructUpAvg_0(price, length);
    var downAvg = RelativeVolatilityFunction$Companion_getInstance().constructDownAvg_0(price, length);
    var upPlusDown = new ArithmeticFunction(upAvg, downAvg, ArithmeticOperation$PLUS_getInstance());
    var ifUpPlusDownEqualsZero = new ConstantFunction(50.0);
    var ifUpPlusDownNotEqualsZero = new ArithmeticFunction(new ArithmeticFunction(RelativeVolatilityFunction$Companion_getInstance().C_100, upAvg, ArithmeticOperation$MULT_getInstance()), upPlusDown, ArithmeticOperation$DIV_getInstance());
    this.rvFunction_0 = new Equals(upPlusDown, new ZeroFunction(), ifUpPlusDownEqualsZero, ifUpPlusDownNotEqualsZero);
  }
  Object.defineProperty(RelativeVolatilityFunction.prototype, 'childFunctions', {
    get: function () {
      return listOf_0(this.rvFunction_0);
    }
  });
  RelativeVolatilityFunction.prototype.getValueInternal_za3lpa$ = function (index) {
    return this.rvFunction_0.calculateAt(index);
  };
  function RelativeVolatilityFunction$Companion() {
    RelativeVolatilityFunction$Companion_instance = this;
    this.C_100 = new ConstantFunction(100.0);
    this.C_1 = new ConstantFunction(1.0);
  }
  RelativeVolatilityFunction$Companion.prototype.constructUpAvg_0 = function (price, length) {
    var deviationFunction = new StandardDeviationFunction(price, DorseyTrendFunction$Companion_getInstance().DEVIATION_PERIOD);
    var trendUp = new DorseyTrendFunction(price, deviationFunction, DorseyTrendFunction$Trend$UP_getInstance());
    return new WildersAverage(trendUp, length);
  };
  RelativeVolatilityFunction$Companion.prototype.constructDownAvg_0 = function (price, length) {
    var deviationFunction = new StandardDeviationFunction(price, DorseyTrendFunction$Companion_getInstance().DEVIATION_PERIOD);
    var trendDown = new DorseyTrendFunction(price, deviationFunction, DorseyTrendFunction$Trend$DOWN_getInstance());
    return new WildersAverage(trendDown, length);
  };
  RelativeVolatilityFunction$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var RelativeVolatilityFunction$Companion_instance = null;
  function RelativeVolatilityFunction$Companion_getInstance() {
    if (RelativeVolatilityFunction$Companion_instance === null) {
      new RelativeVolatilityFunction$Companion();
    }
    return RelativeVolatilityFunction$Companion_instance;
  }
  RelativeVolatilityFunction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RelativeVolatilityFunction',
    interfaces: [AbstractCachingFunction]
  };
  function SeriesCrossingPoints(dataItems, firstSeries, secondSeries, revert, offset) {
    this.dataItems_0 = dataItems;
    this.firstSeries_0 = firstSeries;
    this.secondSeries_0 = secondSeries;
    this.revert_0 = revert;
    this.offset_0 = offset;
  }
  SeriesCrossingPoints.prototype.calculateAt = function (index) {
    if (index < this.offset_0) {
      return kotlin_js_internal_DoubleCompanionObject.NaN;
    }
    var currentFirstSeries = this.firstSeries_0.calculateAt(index);
    var prevFirstSeries = this.firstSeries_0.calculateAt(index - 1 | 0);
    var currentSecondSeries = this.secondSeries_0.calculateAt(index);
    var prevSecondSeries = this.secondSeries_0.calculateAt(index - 1 | 0);
    if (this.revert_0) {
      if (currentSecondSeries > currentFirstSeries && prevSecondSeries < prevFirstSeries) {
        return currentSecondSeries;
      }
       else {
        return kotlin_js_internal_DoubleCompanionObject.NaN;
      }
    }
     else {
      if (currentFirstSeries > currentSecondSeries && prevFirstSeries < prevSecondSeries) {
        return currentFirstSeries;
      }
       else {
        return kotlin_js_internal_DoubleCompanionObject.NaN;
      }
    }
  };
  Object.defineProperty(SeriesCrossingPoints.prototype, 'childFunctions', {
    get: function () {
      return listOf([this.firstSeries_0, this.secondSeries_0]);
    }
  });
  Object.defineProperty(SeriesCrossingPoints.prototype, 'ownPastOffset', {
    get: function () {
      return 0;
    }
  });
  Object.defineProperty(SeriesCrossingPoints.prototype, 'prefetchSize', {
    get: function () {
      return 0;
    }
  });
  SeriesCrossingPoints.prototype.dataChanged = function (changes) {
    var b = this.dataItems_0.dataLength - 1 | 0;
    return Math_0.max(0, b);
  };
  SeriesCrossingPoints.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SeriesCrossingPoints',
    interfaces: [IFunction]
  };
  function SessionSet(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function SessionSet_initFields() {
    SessionSet_initFields = function () {
    };
    SessionSet$WITHOUT_LAST_instance = new SessionSet('WITHOUT_LAST', 0);
    SessionSet$ONLY_LAST_instance = new SessionSet('ONLY_LAST', 1);
    SessionSet$ONLY_LAST_FOR_ALL_CANDLES_instance = new SessionSet('ONLY_LAST_FOR_ALL_CANDLES', 2);
  }
  var SessionSet$WITHOUT_LAST_instance;
  function SessionSet$WITHOUT_LAST_getInstance() {
    SessionSet_initFields();
    return SessionSet$WITHOUT_LAST_instance;
  }
  var SessionSet$ONLY_LAST_instance;
  function SessionSet$ONLY_LAST_getInstance() {
    SessionSet_initFields();
    return SessionSet$ONLY_LAST_instance;
  }
  var SessionSet$ONLY_LAST_FOR_ALL_CANDLES_instance;
  function SessionSet$ONLY_LAST_FOR_ALL_CANDLES_getInstance() {
    SessionSet_initFields();
    return SessionSet$ONLY_LAST_FOR_ALL_CANDLES_instance;
  }
  SessionSet.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SessionSet',
    interfaces: [Enum]
  };
  function SessionSet$values() {
    return [SessionSet$WITHOUT_LAST_getInstance(), SessionSet$ONLY_LAST_getInstance(), SessionSet$ONLY_LAST_FOR_ALL_CANDLES_getInstance()];
  }
  SessionSet.values = SessionSet$values;
  function SessionSet$valueOf(name) {
    switch (name) {
      case 'WITHOUT_LAST':
        return SessionSet$WITHOUT_LAST_getInstance();
      case 'ONLY_LAST':
        return SessionSet$ONLY_LAST_getInstance();
      case 'ONLY_LAST_FOR_ALL_CANDLES':
        return SessionSet$ONLY_LAST_FOR_ALL_CANDLES_getInstance();
      default:throwISE('No enum constant com.devexperts.dxst.functions.SessionSet.' + name);
    }
  }
  SessionSet.valueOf_61zpoe$ = SessionSet$valueOf;
  function SignFunction(srcFunc) {
    AbstractCachingFunction.call(this);
    this.srcFunc_0 = srcFunc;
  }
  Object.defineProperty(SignFunction.prototype, 'childFunctions', {
    get: function () {
      return listOf_0(this.srcFunc_0);
    }
  });
  SignFunction.prototype.getValueInternal_za3lpa$ = function (index) {
    return this.signValue_0(this.srcFunc_0.calculateAt(index));
  };
  SignFunction.prototype.signValue_0 = function (value) {
    return value < 0 ? -1.0 : value > 0 ? 1.0 : 0.0;
  };
  SignFunction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SignFunction',
    interfaces: [AbstractCachingFunction]
  };
  function SimpleWeightedSumFunction(srcFunc, period) {
    BackRangeDependentFunction.call(this, srcFunc, period);
  }
  SimpleWeightedSumFunction.prototype.processRange_gf7tl1$ = function (srcLatestValues) {
    var tmp$;
    var sum = 0.0;
    var weight = this.length;
    tmp$ = this.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      sum += weight * srcLatestValues[i];
      weight = weight - 1 | 0;
    }
    return sum;
  };
  SimpleWeightedSumFunction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SimpleWeightedSumFunction',
    interfaces: [BackRangeDependentFunction]
  };
  function StandardDeviationFunction(srcFunc, period) {
    BackRangeDependentFunction.call(this, srcFunc, period);
  }
  StandardDeviationFunction.prototype.processRange_gf7tl1$ = function (srcLatestValues) {
    var length = this.length;
    var average = srcLatestValues[0];
    for (var i = 1; i < length; i++) {
      average += srcLatestValues[i];
    }
    average /= length;
    var stdDev = 0.0;
    for (var i_0 = 0; i_0 < length; i_0++) {
      var diff = srcLatestValues[i_0] - average;
      stdDev += diff * diff;
    }
    var x = stdDev / length;
    return Math_0.sqrt(x);
  };
  StandardDeviationFunction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StandardDeviationFunction',
    interfaces: [BackRangeDependentFunction]
  };
  function StandardErrorOfEstimationFunction(srcFunc, period) {
    BackRangeDependentFunction.call(this, srcFunc, period);
  }
  StandardErrorOfEstimationFunction.prototype.processRange_gf7tl1$ = function (srcLatestValues) {
    var tmp$, tmp$_0;
    var length = this.length;
    var result = 0.0;
    if (length <= 2) {
      return result;
    }
    var avgX = length * (length - 1 | 0) * 0.5 / length;
    var avgY = srcLatestValues[0];
    tmp$ = length - 1 | 0;
    for (var i = 1; i <= tmp$; i++) {
      avgY += srcLatestValues[i];
    }
    avgY /= length;
    var sumDxSqr = 0.0;
    var sumDySqr = 0.0;
    var sumDxDy = 0.0;
    tmp$_0 = length - 1 | 0;
    for (var i_0 = 0; i_0 <= tmp$_0; i_0++) {
      var v = srcLatestValues[i_0];
      var dx = i_0 - avgX;
      var dy = v - avgY;
      sumDxSqr = sumDxSqr + dx * dx;
      sumDySqr = sumDySqr + dy * dy;
      sumDxDy = sumDxDy + dx * dy;
    }
    result = (sumDySqr - sumDxDy * sumDxDy / sumDxSqr) / (length - 2 | 0);
    if (result > 0) {
      var x = result;
      return Math_0.sqrt(x);
    }
    return result;
  };
  StandardErrorOfEstimationFunction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StandardErrorOfEstimationFunction',
    interfaces: [BackRangeDependentFunction]
  };
  function SumFunction(srcFunc, period) {
    BackRangeDependentFunction.call(this, srcFunc, period);
  }
  SumFunction.prototype.processRange_gf7tl1$ = function (srcLatestValues) {
    var tmp$;
    var sum = srcLatestValues[0];
    tmp$ = this.length - 1 | 0;
    for (var i = 1; i <= tmp$; i++) {
      sum += srcLatestValues[i];
    }
    return sum;
  };
  SumFunction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SumFunction',
    interfaces: [BackRangeDependentFunction]
  };
  function TrueRangeFunction(low, close, high) {
    AbstractCachingFunction.call(this);
    this.low_0 = low;
    this.close_0 = close;
    this.high_0 = high;
  }
  Object.defineProperty(TrueRangeFunction.prototype, 'childFunctions', {
    get: function () {
      return listOf([this.low_0, this.close_0, this.high_0]);
    }
  });
  TrueRangeFunction.prototype.getValueInternal_za3lpa$ = function (index) {
    var tmp$;
    var thisLow = this.low_0.calculateAt(index);
    var thisHigh = this.high_0.calculateAt(index);
    if (index === 0) {
      var x = thisHigh - thisLow;
      tmp$ = Math_0.abs(x);
    }
     else {
      var prevClose = this.close_0.calculateAt(index - 1 | 0);
      tmp$ = this.getTrueRangeValue_0(thisLow, thisHigh, prevClose);
    }
    return tmp$;
  };
  TrueRangeFunction.prototype.getTrueRangeValue_0 = function (low, high, prevClose) {
    var x = high - low;
    var tmp$ = Math_0.abs(x);
    var x_0 = high - prevClose;
    var tmp$_0 = Math_0.abs(x_0);
    var x_1 = prevClose - low;
    var b = Math_0.abs(x_1);
    var b_0 = Math_0.max(tmp$_0, b);
    return Math_0.max(tmp$, b_0);
  };
  TrueRangeFunction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TrueRangeFunction',
    interfaces: [AbstractCachingFunction]
  };
  function WildersAverage(srcFunc, length) {
    AbstractCachingFunction.call(this);
    this.srcFunc_0 = srcFunc;
    this.length_0 = length;
  }
  Object.defineProperty(WildersAverage.prototype, 'childFunctions', {
    get: function () {
      return listOf_0(this.srcFunc_0);
    }
  });
  WildersAverage.prototype.getValueInternal_za3lpa$ = function (index) {
    var v = this.srcFunc_0.calculateAt(index);
    if (index === 0) {
      return v;
    }
     else {
      var prev = this.calculateAt(index - 1 | 0);
      if (isNaN_0(prev) && isNaN_0(v)) {
        return kotlin_js_internal_DoubleCompanionObject.NaN;
      }
       else if (isNaN_0(prev) && !isNaN_0(v)) {
        return v;
      }
       else if (!isNaN_0(prev) && isNaN_0(v)) {
        return kotlin_js_internal_DoubleCompanionObject.NaN;
      }
       else {
        return (v + (this.length_0 - 1 | 0) * prev) / this.length_0;
      }
    }
  };
  Object.defineProperty(WildersAverage.prototype, 'prefetchSize', {
    get: function () {
      return 7 * this.length_0 | 0;
    }
  });
  WildersAverage.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'WildersAverage',
    interfaces: [AbstractCachingFunction]
  };
  function WindowFunction() {
    this.srcFunction_0 = null;
    this.beginIndex_0 = 0;
    this.endIndex_0 = 2147483647;
    this.relativeToDataEnd_0 = 0;
    this.isRelativeToDataEnd_0 = false;
  }
  WindowFunction.prototype.calculateAt = function (index) {
    return index >= this.beginIndex_0 && index < this.endIndex_0 ? this.srcFunction_0.calculateAt(index) : kotlin_js_internal_DoubleCompanionObject.NaN;
  };
  Object.defineProperty(WindowFunction.prototype, 'ownPastOffset', {
    get: function () {
      return this.srcFunction_0.ownPastOffset;
    }
  });
  Object.defineProperty(WindowFunction.prototype, 'childFunctions', {
    get: function () {
      return this.srcFunction_0.childFunctions;
    }
  });
  Object.defineProperty(WindowFunction.prototype, 'prefetchSize', {
    get: function () {
      return this.srcFunction_0.prefetchSize;
    }
  });
  WindowFunction.prototype.dataChanged = function (changes) {
    if (this.isRelativeToDataEnd_0)
      this.endIndex_0 = changes.newDataLength + this.relativeToDataEnd_0 | 0;
    return this.srcFunction_0.dataChanged(changes);
  };
  WindowFunction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'WindowFunction',
    interfaces: [IFunction]
  };
  function WindowFunction_init(srcFunction, beginIndex, endIndex, $this) {
    $this = $this || Object.create(WindowFunction.prototype);
    WindowFunction.call($this);
    if (endIndex <= 0) {
      throw IllegalArgumentException_init('negative end index ' + toString(endIndex));
    }
    if (beginIndex > endIndex) {
      throw IllegalArgumentException_init('begin index ' + beginIndex + ' is greater than end index ' + endIndex);
    }
    $this.srcFunction_0 = srcFunction;
    $this.beginIndex_0 = beginIndex;
    $this.endIndex_0 = endIndex;
    return $this;
  }
  function WindowFunction_init_0(srcFunction, endIndex, relativeToDataEnd, $this) {
    $this = $this || Object.create(WindowFunction.prototype);
    WindowFunction.call($this);
    if (!relativeToDataEnd && endIndex <= 0) {
      throw IllegalArgumentException_init('negative end index ' + toString(endIndex));
    }
    $this.isRelativeToDataEnd_0 = relativeToDataEnd;
    if ($this.isRelativeToDataEnd_0)
      $this.relativeToDataEnd_0 = endIndex;
    else
      $this.endIndex_0 = endIndex;
    $this.srcFunction_0 = srcFunction;
    return $this;
  }
  function ZeroFunction() {
    ConstantFunction.call(this, 0.0);
  }
  ZeroFunction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ZeroFunction',
    interfaces: [ConstantFunction]
  };
  function AbstractCachingFunction() {
    this.values_6jlq0z$_0 = null;
    this.values_6jlq0z$_0 = ArrayList_init_0(1000);
  }
  AbstractCachingFunction.prototype.calculateAt = function (index) {
    if (index < 0) {
      return kotlin_js_internal_DoubleCompanionObject.NaN;
    }
    var lastCalculatedIndex = this.values_6jlq0z$_0.size - 1 | 0;
    while (lastCalculatedIndex < index) {
      lastCalculatedIndex = lastCalculatedIndex + 1 | 0;
      this.values_6jlq0z$_0.add_11rb$(this.getValueInternal_za3lpa$(lastCalculatedIndex));
    }
    return this.values_6jlq0z$_0.get_za3lpa$(index);
  };
  AbstractCachingFunction.prototype.dataChanged = function (changes) {
    var tmp$;
    var a = changes.firstIndexChanged;
    var b = this.dataChangedInternalHook_4an1kt$(changes);
    var recalcStartIndex = Math_0.min(a, b);
    tmp$ = this.childFunctions.iterator();
    while (tmp$.hasNext()) {
      var f = tmp$.next();
      var childRecalcStartIndex = f.dataChanged(changes);
      if (childRecalcStartIndex < recalcStartIndex) {
        recalcStartIndex = childRecalcStartIndex;
      }
    }
    var removedFromLeft = changes.removedFromLeft;
    if (removedFromLeft > 0) {
      if (this.values_6jlq0z$_0.size > removedFromLeft) {
        this.values_6jlq0z$_0.subList_vux9f0$(0, removedFromLeft).clear();
      }
       else {
        this.values_6jlq0z$_0.clear();
      }
    }
    var b_0 = recalcStartIndex;
    recalcStartIndex = Math_0.max(0, b_0);
    if (this.values_6jlq0z$_0.size > recalcStartIndex) {
      this.values_6jlq0z$_0.subList_vux9f0$(recalcStartIndex, this.values_6jlq0z$_0.size).clear();
    }
    return recalcStartIndex;
  };
  AbstractCachingFunction.prototype.dataChangedInternalHook_4an1kt$ = function (changes) {
    return changes.firstIndexChanged;
  };
  Object.defineProperty(AbstractCachingFunction.prototype, 'ownPastOffset', {
    get: function () {
      return 0;
    }
  });
  Object.defineProperty(AbstractCachingFunction.prototype, 'prefetchSize', {
    get: function () {
      return 0;
    }
  });
  AbstractCachingFunction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AbstractCachingFunction',
    interfaces: [IFunction]
  };
  function BackRangeDependentFunction(srcFunc, length, considerPartlyNaNArrays) {
    if (considerPartlyNaNArrays === void 0)
      considerPartlyNaNArrays = false;
    AbstractCachingFunction.call(this);
    this.srcFunc_3v3y71$_0 = srcFunc;
    this.considerPartlyNaNArrays_if9h67$_0 = considerPartlyNaNArrays;
    this.length_ew3vb7$_0 = 0;
    this.srcLatestValues_ss4yki$_0 = null;
    this.length = length;
  }
  Object.defineProperty(BackRangeDependentFunction.prototype, 'length', {
    get: function () {
      return this.length_ew3vb7$_0;
    },
    set: function (length) {
      if (length <= 0) {
        throw IllegalArgumentException_init('Illegal back range length (' + length + '). Should be non-zero positive.');
      }
      this.length_ew3vb7$_0 = length;
    }
  });
  Object.defineProperty(BackRangeDependentFunction.prototype, 'childFunctions', {
    get: function () {
      return listOf_0(this.srcFunc_3v3y71$_0);
    }
  });
  Object.defineProperty(BackRangeDependentFunction.prototype, 'ownPastOffset', {
    get: function () {
      return this.length - 1 | 0;
    }
  });
  BackRangeDependentFunction.prototype.getValueInternal_za3lpa$ = function (index) {
    var tmp$;
    if (index < (this.length - 1 | 0)) {
      return kotlin_js_internal_DoubleCompanionObject.NaN;
    }
    if (this.srcLatestValues_ss4yki$_0 == null || ensureNotNull(this.srcLatestValues_ss4yki$_0).length !== this.length) {
      this.srcLatestValues_ss4yki$_0 = new Float64Array(this.length);
    }
    tmp$ = this.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      var v = this.srcFunc_3v3y71$_0.calculateAt(index + 1 - this.length + i | 0);
      if (!this.considerPartlyNaNArrays_if9h67$_0 && isNaN_0(v))
        return kotlin_js_internal_DoubleCompanionObject.NaN;
      ensureNotNull(this.srcLatestValues_ss4yki$_0)[i] = v;
    }
    return this.processRange_gf7tl1$(ensureNotNull(this.srcLatestValues_ss4yki$_0));
  };
  BackRangeDependentFunction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BackRangeDependentFunction',
    interfaces: [AbstractCachingFunction]
  };
  function DynamicMomentumIndexFunction(priceSourceFunction, dynamicLength, lowerLimit, upperLimit, averageType) {
    AbstractCachingFunction.call(this);
    this.priceSourceFunction_0 = priceSourceFunction;
    this.dynamicLength_0 = dynamicLength;
    this.lowerLimit_0 = lowerLimit;
    this.upperLimit_0 = upperLimit;
    this.averageType_0 = averageType;
    this.rsiCache_0 = null;
    this.rsiCache_0 = HashMap_init_0(abs(this.upperLimit_0 - this.lowerLimit_0 | 0));
  }
  Object.defineProperty(DynamicMomentumIndexFunction.prototype, 'childFunctions', {
    get: function () {
      var children = ArrayList_init_0(this.rsiCache_0.size + 2 | 0);
      children.addAll_brywnq$(this.rsiCache_0.values);
      children.add_11rb$(this.priceSourceFunction_0);
      children.add_11rb$(this.dynamicLength_0);
      return children;
    }
  });
  DynamicMomentumIndexFunction.prototype.getValueInternal_za3lpa$ = function (index) {
    var length = numberToInt(this.dynamicLength_0.calculateAt(index));
    if (length < this.lowerLimit_0) {
      length = this.lowerLimit_0;
    }
     else if (length > this.upperLimit_0) {
      length = this.upperLimit_0;
    }
    var rsi = this.rsiCache_0.get_11rb$(length);
    if (rsi == null) {
      rsi = CommonFunctions_getInstance().constructRSI_fo9dvd$(this.priceSourceFunction_0, length, this.averageType_0);
      var $receiver = this.rsiCache_0;
      var key = length;
      var value = rsi;
      $receiver.put_xwzc9p$(key, value);
    }
    return rsi.calculateAt(index);
  };
  DynamicMomentumIndexFunction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DynamicMomentumIndexFunction',
    interfaces: [AbstractCachingFunction]
  };
  function FractalOperation(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function FractalOperation_initFields() {
    FractalOperation_initFields = function () {
    };
    FractalOperation$UP_instance = new FractalOperation('UP', 0);
    FractalOperation$DOWN_instance = new FractalOperation('DOWN', 1);
  }
  var FractalOperation$UP_instance;
  function FractalOperation$UP_getInstance() {
    FractalOperation_initFields();
    return FractalOperation$UP_instance;
  }
  var FractalOperation$DOWN_instance;
  function FractalOperation$DOWN_getInstance() {
    FractalOperation_initFields();
    return FractalOperation$DOWN_instance;
  }
  FractalOperation.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FractalOperation',
    interfaces: [Enum]
  };
  function FractalOperation$values() {
    return [FractalOperation$UP_getInstance(), FractalOperation$DOWN_getInstance()];
  }
  FractalOperation.values = FractalOperation$values;
  function FractalOperation$valueOf(name) {
    switch (name) {
      case 'UP':
        return FractalOperation$UP_getInstance();
      case 'DOWN':
        return FractalOperation$DOWN_getInstance();
      default:throwISE('No enum constant com.devexperts.dxst.functions.hardcoded.FractalOperation.' + name);
    }
  }
  FractalOperation.valueOf_61zpoe$ = FractalOperation$valueOf;
  function KaufmanNamaFunction(nsmooth, xPrice) {
    AbstractCachingFunction.call(this);
    this.nsmooth_0 = nsmooth;
    this.xPrice_0 = xPrice;
  }
  Object.defineProperty(KaufmanNamaFunction.prototype, 'childFunctions', {
    get: function () {
      return listOf([this.nsmooth_0, this.xPrice_0]);
    }
  });
  KaufmanNamaFunction.prototype.getValueInternal_za3lpa$ = function (index) {
    var prev = this.calculateAt(index - 1 | 0);
    if (isNaN_0(prev) || Kotlin.compareTo(prev, 0.0) !== 1) {
      prev = 0.0;
    }
    return prev + this.nsmooth_0.calculateAt(index) * (this.xPrice_0.calculateAt(index) - prev);
  };
  KaufmanNamaFunction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KaufmanNamaFunction',
    interfaces: [AbstractCachingFunction]
  };
  function LinearRegressionFunction(srcFunc) {
    AbstractCachingFunction.call(this);
    this.srcFunc_0 = srcFunc;
    this.b_0 = 0;
    this.a_0 = 0;
  }
  Object.defineProperty(LinearRegressionFunction.prototype, 'childFunctions', {
    get: function () {
      return listOf_0(this.srcFunc_0);
    }
  });
  LinearRegressionFunction.prototype.dataChangedInternalHook_4an1kt$ = function (changes) {
    this.a_0 = kotlin_js_internal_DoubleCompanionObject.NaN;
    this.b_0 = kotlin_js_internal_DoubleCompanionObject.NaN;
    return 0;
  };
  LinearRegressionFunction.prototype.getValueInternal_za3lpa$ = function (index) {
    if (isNaN_0(this.a_0) || isNaN_0(this.b_0)) {
      this.calculateCoefficients_0();
    }
    return this.a_0 + this.b_0 * index;
  };
  LinearRegressionFunction.prototype.calculateCoefficients_0 = function () {
    var tmp$;
    var n = this.srcFunc_0.dataLength;
    var sumX = 0.0;
    var sumY = 0.0;
    var sumXY = 0.0;
    var sumXX = 0.0;
    tmp$ = this.srcFunc_0.dataLength - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      var price = this.srcFunc_0.calculateAt(i);
      sumX += i;
      sumY += price;
      sumXY += i * price;
      sumXX += Kotlin.imul(i, i);
    }
    this.b_0 = (n * sumXY - sumX * sumY) / (n * sumXX - sumX * sumX);
    this.a_0 = (sumY - this.b_0 * sumX) / n;
  };
  LinearRegressionFunction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LinearRegressionFunction',
    interfaces: [AbstractCachingFunction]
  };
  function ParabolicSarFunction(highFunc, lowFunc, factorInc, maxFactor) {
    AbstractCachingFunction.call(this);
    this.highFunc_0 = highFunc;
    this.lowFunc_0 = lowFunc;
    this.factorInc_0 = factorInc;
    this.maxFactor_0 = maxFactor;
    this.extrema_0 = ArrayList_init();
    this.extreme_0 = 0;
    this.factor_0 = 0;
    this.factor_0 = this.factorInc_0;
  }
  Object.defineProperty(ParabolicSarFunction.prototype, 'childFunctions', {
    get: function () {
      return listOf([this.highFunc_0, this.lowFunc_0]);
    }
  });
  Object.defineProperty(ParabolicSarFunction.prototype, 'ownPastOffset', {
    get: function () {
      return 1;
    }
  });
  ParabolicSarFunction.prototype.dataChangedInternalHook_4an1kt$ = function (changes) {
    var removed = changes.removedFromLeft;
    var firstChangedIndex = changes.firstIndexChanged;
    if (removed > 0 && !this.extrema_0.isEmpty()) {
      var it = this.extrema_0.iterator();
      while (it.hasNext()) {
        var ex = it.next();
        if (ex.index < removed) {
          it.remove();
        }
         else {
          ex.index = ex.index - removed | 0;
        }
      }
    }
    var it_0 = this.extrema_0.listIterator_za3lpa$(this.extrema_0.size);
    while (it_0.hasPrevious()) {
      var ex_0 = it_0.previous();
      if (ex_0.index >= firstChangedIndex) {
        it_0.remove();
      }
       else {
        break;
      }
    }
    var recalculateIndex = 0;
    if (!this.extrema_0.isEmpty()) {
      var ex_1 = this.extrema_0.get_za3lpa$(this.extrema_0.size - 1 | 0);
      recalculateIndex = ex_1.index + 1 | 0;
      this.extreme_0 = ex_1.value;
      this.factor_0 = this.factorInc_0;
    }
    return recalculateIndex;
  };
  ParabolicSarFunction.prototype.getValueInternal_za3lpa$ = function (index) {
    if (index === 0) {
      this.extreme_0 = this.highFunc_0.calculateAt(0);
      this.extrema_0.clear();
      this.extrema_0.add_11rb$(new ParabolicSarFunction$Extremum(0, this.lowFunc_0.calculateAt(0), false));
      return this.lowFunc_0.calculateAt(0);
    }
    var ex = this.extrema_0.get_za3lpa$(this.extrema_0.size - 1 | 0);
    var downtrend = ex.isMaximum;
    var v = this.calculateAt(index - 1 | 0);
    var previousSAR = isNaN_0(v) ? ex.value : v;
    var currentHigh = this.highFunc_0.calculateAt(index);
    var currentLow = this.lowFunc_0.calculateAt(index);
    if (isNaN_0(currentHigh) || isNaN_0(currentLow)) {
      return kotlin_js_internal_DoubleCompanionObject.NaN;
    }
    var currentSAR;
    if (downtrend) {
      if (previousSAR < currentHigh) {
        downtrend = false;
        currentSAR = this.extreme_0;
        this.extrema_0.add_11rb$(new ParabolicSarFunction$Extremum(index, this.extreme_0, downtrend));
        this.extreme_0 = currentHigh;
        this.factor_0 = this.factorInc_0;
      }
       else {
        if (currentLow < this.extreme_0) {
          this.extreme_0 = currentLow;
          var a = this.factor_0 + this.factorInc_0;
          var b = this.maxFactor_0;
          this.factor_0 = Math_0.min(a, b);
        }
        var b_0 = previousSAR + this.factor_0 * (this.extreme_0 - previousSAR);
        currentSAR = Math_0.max(currentHigh, b_0);
      }
    }
     else {
      if (previousSAR > currentLow) {
        downtrend = true;
        currentSAR = this.extreme_0;
        this.extrema_0.add_11rb$(new ParabolicSarFunction$Extremum(index, this.extreme_0, downtrend));
        this.extreme_0 = currentLow;
        this.factor_0 = this.factorInc_0;
      }
       else {
        if (currentHigh > this.extreme_0) {
          this.extreme_0 = currentHigh;
          var a_0 = this.factor_0 + this.factorInc_0;
          var b_1 = this.maxFactor_0;
          this.factor_0 = Math_0.min(a_0, b_1);
        }
        var b_2 = previousSAR + this.factor_0 * (this.extreme_0 - previousSAR);
        currentSAR = Math_0.min(currentLow, b_2);
      }
    }
    return currentSAR;
  };
  function ParabolicSarFunction$Extremum(index, value, isMaximum) {
    this.index = index;
    this.value = value;
    this.isMaximum = isMaximum;
  }
  ParabolicSarFunction$Extremum.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Extremum',
    interfaces: []
  };
  ParabolicSarFunction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ParabolicSarFunction',
    interfaces: [AbstractCachingFunction]
  };
  function SchaffTrendFrac(range, fastK, offset) {
    AbstractCachingFunction.call(this);
    this.range_0 = range;
    this.fastK_0 = fastK;
    this.offset_0 = offset;
  }
  Object.defineProperty(SchaffTrendFrac.prototype, 'childFunctions', {
    get: function () {
      return listOf([this.range_0, this.fastK_0]);
    }
  });
  SchaffTrendFrac.prototype.getValueInternal_za3lpa$ = function (index) {
    if (this.range_0.calculateAt(index) > 0) {
      return this.fastK_0.calculateAt(index);
    }
     else if (index > this.offset_0) {
      return this.calculateAt(index - 1 | 0);
    }
     else if (index === this.offset_0 && index >= 0) {
      return 0.0;
    }
    return kotlin_js_internal_DoubleCompanionObject.NaN;
  };
  SchaffTrendFrac.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SchaffTrendFrac',
    interfaces: [AbstractCachingFunction]
  };
  function SpearmansRho(srcFunc, length) {
    BackRangeDependentFunction.call(this, srcFunc, length);
  }
  SpearmansRho.prototype.getRank_0 = function (values, length, i) {
    var rank = 0;
    for (var j = 0; j < length; j++) {
      if (this.getOffset_0(values, i, length - 1 | 0) > this.getOffset_0(values, length - j - 1 | 0) || (Kotlin.compareTo(this.getOffset_0(values, i), this.getOffset_0(values, length - j - 1 | 0)) === 0 && i <= (length - j - 1 | 0))) {
        rank = rank + 1 | 0;
      }
    }
    return rank;
  };
  SpearmansRho.prototype.getOffset_0 = function (values, offset, max) {
    if (max === void 0)
      max = values.length;
    var offset_0 = offset;
    if (max > values.length) {
      throw IllegalArgumentException_init("max can't be greater then length of values");
    }
    if (offset_0 > max) {
      offset_0 = max;
    }
    return values[values.length - offset_0 - 1 | 0];
  };
  SpearmansRho.prototype.processRange_gf7tl1$ = function (srcLatestValues) {
    var length = this.length;
    var sum = 0.0;
    for (var i = 0; i < length; i++) {
      var $receiver = length - i - this.getRank_0(srcLatestValues, length, i);
      sum += Math_0.pow($receiver, 2.0);
    }
    var sumMultBy6 = sum * 6;
    var denominator = length * (Math_0.pow(length, 2.0) - 1);
    var div = sumMultBy6 / denominator;
    return 1 - div;
  };
  SpearmansRho.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SpearmansRho',
    interfaces: [BackRangeDependentFunction]
  };
  function SwingIndexRatio(dataItems) {
    AbstractCachingFunction.call(this);
    this.dataItems_0 = dataItems;
  }
  Object.defineProperty(SwingIndexRatio.prototype, 'childFunctions', {
    get: function () {
      return emptyList();
    }
  });
  SwingIndexRatio.prototype.getValueInternal_za3lpa$ = function (index) {
    var result = kotlin_js_internal_DoubleCompanionObject.NaN;
    if (index < 1) {
      return result;
    }
    var today = this.dataItems_0.getTradeItem(index);
    var yDay = this.dataItems_0.getTradeItem(index - 1 | 0);
    if (today == null || yDay == null)
      return kotlin_js_internal_DoubleCompanionObject.NaN;
    var x = today.getHigh() - yDay.getClose();
    var highMinusYClose = Math_0.abs(x);
    var x_0 = today.getLow() - yDay.getClose();
    var lowMinusYClose = Math_0.abs(x_0);
    var x_1 = yDay.getClose() - yDay.getOpen();
    var constPart = Math_0.abs(x_1) / 4;
    var x_2 = today.getHigh() - today.getLow();
    var highMinusLow = Math_0.abs(x_2);
    if (highMinusYClose > lowMinusYClose && highMinusYClose > highMinusLow) {
      result = constPart + highMinusYClose - lowMinusYClose / 2;
    }
     else if (lowMinusYClose > highMinusYClose && lowMinusYClose > highMinusLow) {
      result = constPart + lowMinusYClose - highMinusYClose / 2;
    }
     else {
      result = constPart + highMinusLow;
    }
    return result;
  };
  SwingIndexRatio.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SwingIndexRatio',
    interfaces: [AbstractCachingFunction]
  };
  function WilliamsADFunction(dataItems) {
    AbstractCachingFunction.call(this);
    this.dataItems_0 = dataItems;
  }
  Object.defineProperty(WilliamsADFunction.prototype, 'childFunctions', {
    get: function () {
      return emptyList();
    }
  });
  WilliamsADFunction.prototype.getValueInternal_za3lpa$ = function (index) {
    if (index === 0) {
      return kotlin_js_internal_DoubleCompanionObject.NaN;
    }
    return this.calculateToday_0(index) + this.getYesterday_0(index);
  };
  WilliamsADFunction.prototype.getYesterday_0 = function (index) {
    var yesterdayValue = this.calculateAt(index - 1 | 0);
    return isNaN_0(yesterdayValue) ? 0.0 : yesterdayValue;
  };
  WilliamsADFunction.prototype.calculateToday_0 = function (index) {
    if (index <= 0) {
      return 0.0;
    }
    var today = this.dataItems_0.getTradeItem(index);
    var yesterdayDay = this.dataItems_0.getTradeItem(index - 1 | 0);
    if (today == null || yesterdayDay == null)
      return kotlin_js_internal_DoubleCompanionObject.NaN;
    var todayClose = today.getClose();
    var todayLow = today.getLow();
    var todayHigh = today.getHigh();
    var yesterdayClose = yesterdayDay.getClose();
    var result;
    if (todayClose > yesterdayClose) {
      result = todayClose - Math_0.min(yesterdayClose, todayLow);
    }
     else if (todayClose < yesterdayClose) {
      result = todayClose - Math_0.max(yesterdayClose, todayHigh);
    }
     else {
      result = 0.0;
    }
    return result;
  };
  WilliamsADFunction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'WilliamsADFunction',
    interfaces: [AbstractCachingFunction]
  };
  function WilliamsFractalFilter(priceSource, sequenceCount, operation) {
    AbstractCachingFunction.call(this);
    this.priceSource_0 = priceSource;
    this.sequenceCount_0 = sequenceCount;
    this.operation_0 = operation;
  }
  Object.defineProperty(WilliamsFractalFilter.prototype, 'childFunctions', {
    get: function () {
      return listOf_0(this.priceSource_0);
    }
  });
  WilliamsFractalFilter.prototype.getValueInternal_za3lpa$ = function (index) {
    var isFractal = (index - this.sequenceCount_0 | 0) >= 0 && (index + this.sequenceCount_0 | 0) < this.priceSource_0.dataLength;
    switch (this.operation_0.name) {
      case 'UP':
        isFractal = (isFractal && WilliamsFractalUtils_getInstance().isFractal_aw7rc4$(index, this.priceSource_0, WilliamsFractalUtils_getInstance().FRACTAL_UP_COMPARATOR, this.sequenceCount_0));
        break;
      case 'DOWN':
        isFractal = (isFractal && WilliamsFractalUtils_getInstance().isFractal_aw7rc4$(index, this.priceSource_0, WilliamsFractalUtils_getInstance().FRACTAL_DOWN_COMPARATOR, this.sequenceCount_0));
        break;
    }
    return isFractal ? this.priceSource_0.calculateAt(index) : kotlin_js_internal_DoubleCompanionObject.NaN;
  };
  WilliamsFractalFilter.prototype.dataChangedInternalHook_4an1kt$ = function (changes) {
    var b = changes.firstIndexChanged - this.sequenceCount_0 | 0;
    return Math_0.max(0, b);
  };
  WilliamsFractalFilter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'WilliamsFractalFilter',
    interfaces: [AbstractCachingFunction]
  };
  function ZigZagFunction(src, threshold) {
    AbstractCachingFunction.call(this);
    this.src_0 = src;
    this.threshold_0 = threshold;
    this.dataLength_0 = 0;
    this.extrema_0 = null;
    this.extrema_0 = ArrayList_init();
  }
  ZigZagFunction.prototype.dataChangedInternalHook_4an1kt$ = function (changes) {
    this.dataLength_0 = changes.newDataLength;
    var removed = changes.removedFromLeft;
    var firstChangedIndex = changes.firstIndexChanged;
    if (this.extrema_0.size > 2) {
      if (removed !== 0) {
        this.removeInvisibleExtrema_0(removed);
      }
      if (!this.extrema_0.isEmpty()) {
        this.removeUnneededExtrema_0(firstChangedIndex);
      }
    }
     else {
      this.extrema_0.clear();
    }
    if (this.extrema_0.isEmpty()) {
      return 0;
    }
     else {
      var lastExtrema = this.extrema_0.get_za3lpa$(this.extrema_0.size - 1 | 0);
      return lastExtrema.index + 1 | 0;
    }
  };
  ZigZagFunction.prototype.removeUnneededExtrema_0 = function (firstChangedIndex) {
    while (!this.extrema_0.get_za3lpa$(this.extrema_0.size - 1 | 0).realExtremum) {
      this.extrema_0.removeAt_za3lpa$(this.extrema_0.size - 1 | 0);
    }
    if (this.extrema_0.get_za3lpa$(this.extrema_0.size - 1 | 0).index >= firstChangedIndex) {
      while (!this.extrema_0.isEmpty() && this.extrema_0.get_za3lpa$(this.extrema_0.size - 1 | 0).index >= firstChangedIndex) {
        this.extrema_0.removeAt_za3lpa$(this.extrema_0.size - 1 | 0);
      }
    }
    if (Kotlin.compareTo(this.threshold_0, 0.0) === 0 && !this.extrema_0.isEmpty()) {
      this.extrema_0.removeAt_za3lpa$(this.extrema_0.size - 1 | 0);
    }
  };
  ZigZagFunction.prototype.removeInvisibleExtrema_0 = function (removed) {
    var v = this.getValue_0(removed);
    if (!isNaN_0(v)) {
      var it = this.extrema_0.iterator();
      while (it.hasNext()) {
        var ex = it.next();
        if (ex.index < removed) {
          it.remove();
        }
         else {
          ex.index = ex.index - removed | 0;
        }
      }
      if (this.extrema_0.size > 1) {
        var ex_0 = this.extrema_0.get_za3lpa$(0);
        if (ex_0.index !== 0) {
          this.extrema_0.add_wxm5ur$(0, new ZigZagFunction$Extremum(0, v, !ex_0.isMaximum, false));
        }
      }
       else {
        this.extrema_0.clear();
      }
    }
     else {
      this.extrema_0.clear();
    }
  };
  Object.defineProperty(ZigZagFunction.prototype, 'childFunctions', {
    get: function () {
      return listOf_0(this.src_0);
    }
  });
  ZigZagFunction.prototype.getValueInternal_za3lpa$ = function (index) {
    if (this.extrema_0.isEmpty() && !this.initiallyFill_0()) {
      this.fillExtremaUp_0();
    }
    if (this.extrema_0.get_za3lpa$(this.extrema_0.size - 1 | 0).index < index && index < this.dataLength_0) {
      this.fillExtremaUp_0();
    }
    return this.getValue_0(index);
  };
  ZigZagFunction.prototype.getValue_0 = function (index) {
    var tmp$;
    tmp$ = this.extrema_0.size;
    for (var i = 1; i < tmp$; i++) {
      var extremum1 = this.extrema_0.get_za3lpa$(i - 1 | 0);
      var extremum2 = this.extrema_0.get_za3lpa$(i);
      if (index >= extremum1.index && index <= extremum2.index) {
        var dividend = (index - extremum1.index | 0) * (extremum2.value - extremum1.value);
        var divisor = extremum2.index - extremum1.index | 0;
        return dividend / divisor + extremum1.value;
      }
    }
    return kotlin_js_internal_DoubleCompanionObject.NaN;
  };
  ZigZagFunction.prototype.initiallyFill_0 = function () {
    var initialValue;
    initialValue = this.src_0.calculateAt(0);
    var v = initialValue;
    var highestHigh = v;
    var lowestLow = v;
    var lowestIndex = 0;
    var highestIndex = 0;
    var currentIndex = 1;
    var found = false;
    while (currentIndex < this.dataLength_0) {
      v = this.src_0.calculateAt(currentIndex);
      if (v > highestHigh) {
        highestHigh = v;
        highestIndex = currentIndex;
        if (highestHigh / lowestLow > 1 + this.threshold_0) {
          if (lowestIndex !== 0) {
            this.extrema_0.add_11rb$(new ZigZagFunction$Extremum(0, initialValue, true, false));
          }
          this.extrema_0.add_11rb$(new ZigZagFunction$Extremum(lowestIndex, lowestLow, false, true));
          found = true;
          break;
        }
      }
      if (v < lowestLow) {
        lowestLow = v;
        lowestIndex = currentIndex;
        if (highestHigh / lowestLow > 1 + this.threshold_0) {
          if (highestIndex !== 0) {
            this.extrema_0.add_11rb$(new ZigZagFunction$Extremum(0, initialValue, false, false));
          }
          this.extrema_0.add_11rb$(new ZigZagFunction$Extremum(highestIndex, highestHigh, true, true));
          found = true;
          break;
        }
      }
      currentIndex = currentIndex + 1 | 0;
    }
    if (!found) {
      this.extrema_0.add_11rb$(new ZigZagFunction$Extremum(0, initialValue, v < initialValue, false));
      this.extrema_0.add_11rb$(new ZigZagFunction$Extremum(currentIndex - 1 | 0, v, v >= initialValue, false));
      return true;
    }
     else {
      return false;
    }
  };
  ZigZagFunction.prototype.fillExtremaUp_0 = function () {
    var extremum = this.extrema_0.get_za3lpa$(this.extrema_0.size - 1 | 0);
    var lastExtremum = extremum.value;
    var lastExtremumIndex = extremum.index;
    var uptrend = !extremum.isMaximum;
    var currentIndex = lastExtremumIndex + 1 | 0;
    var v = 0.0;
    while (currentIndex < this.dataLength_0) {
      v = this.src_0.calculateAt(currentIndex);
      if (uptrend) {
        if (v > lastExtremum) {
          lastExtremum = v;
          lastExtremumIndex = currentIndex;
        }
         else if (v / lastExtremum < 1 - this.threshold_0) {
          this.extrema_0.add_11rb$(new ZigZagFunction$Extremum(lastExtremumIndex, lastExtremum, uptrend, true));
          lastExtremum = v;
          lastExtremumIndex = currentIndex;
          uptrend = false;
        }
      }
       else {
        if (v < lastExtremum) {
          lastExtremum = v;
          lastExtremumIndex = currentIndex;
        }
         else if (v / lastExtremum > 1 + this.threshold_0) {
          this.extrema_0.add_11rb$(new ZigZagFunction$Extremum(lastExtremumIndex, lastExtremum, uptrend, true));
          lastExtremum = v;
          lastExtremumIndex = currentIndex;
          uptrend = true;
        }
      }
      currentIndex = currentIndex + 1 | 0;
    }
    if (Kotlin.compareTo(v, lastExtremum) !== 0) {
      this.extrema_0.add_11rb$(new ZigZagFunction$Extremum(lastExtremumIndex, lastExtremum, uptrend, false));
      uptrend = !uptrend;
    }
    this.extrema_0.add_11rb$(new ZigZagFunction$Extremum(currentIndex - 1 | 0, v, uptrend, false));
  };
  function ZigZagFunction$Extremum(index, value, isMaximum, realExtremum) {
    this.index = index;
    this.value = value;
    this.isMaximum = isMaximum;
    this.realExtremum = realExtremum;
  }
  ZigZagFunction$Extremum.prototype.toString = function () {
    return (this.realExtremum ? 'true ' : 'false ') + (this.isMaximum ? 'maximum ' : 'minimum ') + toString(this.value) + ' at ' + toString(this.index);
  };
  ZigZagFunction$Extremum.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Extremum',
    interfaces: []
  };
  ZigZagFunction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ZigZagFunction',
    interfaces: [AbstractCachingFunction]
  };
  function CountdownFunction(dataItems, setup, oppositeSetup, countdown, setupBarLength, countdownBarLength) {
    AbstractCachingFunction.call(this);
    this.dataItems_0 = dataItems;
    this.setup_0 = setup;
    this.oppositeSetup_0 = oppositeSetup;
    this.countdown_0 = countdown;
    this.setupBarLength_0 = setupBarLength;
    this.countdownBarLength_0 = countdownBarLength;
  }
  Object.defineProperty(CountdownFunction.prototype, 'childFunctions', {
    get: function () {
      return listOf_0(this.setup_0);
    }
  });
  CountdownFunction.prototype.getValueInternal_za3lpa$ = function (index) {
    var tmp$, tmp$_0;
    if (index < 2) {
      return kotlin_js_internal_DoubleCompanionObject.NaN;
    }
    var currentCandle = this.dataItems_0.getTradeItem(index);
    var twoCandlesAgo = this.dataItems_0.getTradeItem(index - 2 | 0);
    if (currentCandle == null || twoCandlesAgo == null) {
      return kotlin_js_internal_DoubleCompanionObject.NaN;
    }
    switch (this.countdown_0.name) {
      case 'BUY':
        tmp$ = currentCandle.getClose() <= twoCandlesAgo.getLow();
        break;
      case 'SELL':
        tmp$ = currentCandle.getClose() >= twoCandlesAgo.getHigh();
        break;
      default:tmp$ = Kotlin.noWhenBranchMatched();
        break;
    }
    var isCounting = tmp$;
    var setupValue = this.setup_0.calculateAt(index);
    var prevValue = this.calculateAt(index - 1 | 0);
    if (isFinite(setupValue) && setupValue === this.setupBarLength_0 && isFinite(prevValue)) {
      var i = index - numberToInt(this.setupBarLength_0) | 0;
      while (this.setup_0.calculateAt(i) !== this.setupBarLength_0) {
        i = i - 1 | 0;
      }
      var prevSetupSize = this.calculateSetupSize_0(i);
      var currentSetupSize = this.calculateSetupSize_0(index);
      if (prevSetupSize <= currentSetupSize && currentSetupSize < 1.618 * prevSetupSize) {
        return isCounting ? 1.0 : -1.0;
      }
    }
     else if (isFinite(setupValue) && setupValue === this.setupBarLength_0) {
      return isCounting ? 1.0 : -1.0;
    }
    if (this.oppositeSetup_0.calculateAt(index) === this.setupBarLength_0) {
      return kotlin_js_internal_DoubleCompanionObject.NaN;
    }
    if (isFinite(prevValue) && prevValue < this.countdownBarLength_0) {
      if (prevValue > 0) {
        if (isCounting) {
          tmp$_0 = prevValue + 1.0;
        }
         else {
          tmp$_0 = -prevValue;
        }
      }
       else {
        if (isCounting) {
          tmp$_0 = -prevValue + 1.0;
        }
         else {
          tmp$_0 = prevValue;
        }
      }
      return tmp$_0;
    }
    return kotlin_js_internal_DoubleCompanionObject.NaN;
  };
  CountdownFunction.prototype.calculateSetupSize_0 = function (setupEndIndex) {
    var tmp$, tmp$_0, tmp$_1;
    var low = kotlin_js_internal_DoubleCompanionObject.MAX_VALUE;
    var high = kotlin_js_internal_DoubleCompanionObject.MIN_VALUE;
    tmp$ = setupEndIndex - numberToInt(this.setupBarLength_0) | 0;
    tmp$_0 = setupEndIndex + 1 | 0;
    for (var i = tmp$; i <= tmp$_0; i++) {
      tmp$_1 = this.dataItems_0.getTradeItem(i);
      if (tmp$_1 == null) {
        continue;
      }
      var item = tmp$_1;
      if (item.getHigh() > high) {
        high = item.getHigh();
      }
      if (item.getLow() < low) {
        low = item.getLow();
      }
    }
    return high - low;
  };
  CountdownFunction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CountdownFunction',
    interfaces: [AbstractCachingFunction]
  };
  function PerfectCountdownFunction(dataItems, countdownFunction, countdownType, setupBarLength, countdownBarLength) {
    AbstractCachingFunction.call(this);
    this.dataItems_0 = dataItems;
    this.countdownFunction_0 = countdownFunction;
    this.countdownType_0 = countdownType;
    this.setupBarLength_0 = setupBarLength;
    this.countdownBarLength_0 = countdownBarLength;
  }
  Object.defineProperty(PerfectCountdownFunction.prototype, 'childFunctions', {
    get: function () {
      return listOf_0(this.countdownFunction_0);
    }
  });
  PerfectCountdownFunction.prototype.getValueInternal_za3lpa$ = function (index) {
    var tmp$;
    var currentCountdown = this.countdownFunction_0.calculateAt(index);
    if (isFinite(currentCountdown) && currentCountdown === this.countdownBarLength_0) {
      var i = index - 1 | 0;
      var temp = this.countdownFunction_0.calculateAt(i);
      while (temp !== this.setupBarLength_0 - 1) {
        i = i - 1 | 0;
        temp = this.countdownFunction_0.calculateAt(i);
      }
      var currentCandle = ensureNotNull(this.dataItems_0.getTradeItem(index));
      var countdownEightCandle = ensureNotNull(this.dataItems_0.getTradeItem(i));
      switch (this.countdownType_0.name) {
        case 'BUY':
          tmp$ = currentCandle.getLow() >= countdownEightCandle.getClose();
          break;
        case 'SELL':
          tmp$ = currentCandle.getHigh() <= countdownEightCandle.getClose();
          break;
        default:tmp$ = Kotlin.noWhenBranchMatched();
          break;
      }
      var isPerfect = tmp$;
      if (isPerfect)
        return 1.0;
    }
    return kotlin_js_internal_DoubleCompanionObject.NaN;
  };
  PerfectCountdownFunction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PerfectCountdownFunction',
    interfaces: [AbstractCachingFunction]
  };
  function PerfectSetupFunction(data, setupFunction, setup, setupBarLength) {
    this.data_0 = data;
    this.setupFunction_0 = setupFunction;
    this.setup_0 = setup;
    this.setupBarLength_0 = setupBarLength;
  }
  PerfectSetupFunction.prototype.calculateAt = function (index) {
    var tmp$;
    if (index < 2) {
      return kotlin_js_internal_DoubleCompanionObject.NaN;
    }
    var currentBuySetup = this.setupFunction_0.calculateAt(index);
    if (currentBuySetup === this.setupBarLength_0) {
      var currentCandle = this.data_0.getTradeItem(index);
      var prevCandle = this.data_0.getTradeItem(index - 1 | 0);
      var twoCandlesAgo = this.data_0.getTradeItem(index - 2 | 0);
      var threeCandlesAgo = this.data_0.getTradeItem(index - 3 | 0);
      if (currentCandle == null || twoCandlesAgo == null || prevCandle == null || threeCandlesAgo == null) {
        return kotlin_js_internal_DoubleCompanionObject.NaN;
      }
      switch (this.setup_0.name) {
        case 'BUY':
          tmp$ = currentCandle.getLow() <= twoCandlesAgo.getLow() || prevCandle.getLow() <= threeCandlesAgo.getLow() ? 1.0 : kotlin_js_internal_DoubleCompanionObject.NaN;
          break;
        case 'SELL':
          tmp$ = currentCandle.getHigh() >= twoCandlesAgo.getHigh() || prevCandle.getHigh() >= threeCandlesAgo.getHigh() ? 1.0 : kotlin_js_internal_DoubleCompanionObject.NaN;
          break;
        default:tmp$ = Kotlin.noWhenBranchMatched();
          break;
      }
      return tmp$;
    }
    return kotlin_js_internal_DoubleCompanionObject.NaN;
  };
  Object.defineProperty(PerfectSetupFunction.prototype, 'childFunctions', {
    get: function () {
      return listOf_0(this.setupFunction_0);
    }
  });
  Object.defineProperty(PerfectSetupFunction.prototype, 'ownPastOffset', {
    get: function () {
      return 0;
    }
  });
  Object.defineProperty(PerfectSetupFunction.prototype, 'prefetchSize', {
    get: function () {
      return 0;
    }
  });
  PerfectSetupFunction.prototype.dataChanged = function (changes) {
    var b = this.data_0.dataLength - 1 | 0;
    return Math_0.max(0, b);
  };
  PerfectSetupFunction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PerfectSetupFunction',
    interfaces: [IFunction]
  };
  function TDBuySell(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function TDBuySell_initFields() {
    TDBuySell_initFields = function () {
    };
    TDBuySell$BUY_instance = new TDBuySell('BUY', 0);
    TDBuySell$SELL_instance = new TDBuySell('SELL', 1);
  }
  var TDBuySell$BUY_instance;
  function TDBuySell$BUY_getInstance() {
    TDBuySell_initFields();
    return TDBuySell$BUY_instance;
  }
  var TDBuySell$SELL_instance;
  function TDBuySell$SELL_getInstance() {
    TDBuySell_initFields();
    return TDBuySell$SELL_instance;
  }
  TDBuySell.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TDBuySell',
    interfaces: [Enum]
  };
  function TDBuySell$values() {
    return [TDBuySell$BUY_getInstance(), TDBuySell$SELL_getInstance()];
  }
  TDBuySell.values = TDBuySell$values;
  function TDBuySell$valueOf(name) {
    switch (name) {
      case 'BUY':
        return TDBuySell$BUY_getInstance();
      case 'SELL':
        return TDBuySell$SELL_getInstance();
      default:throwISE('No enum constant com.devexperts.dxst.functions.tdsequential.TDBuySell.' + name);
    }
  }
  TDBuySell.valueOf_61zpoe$ = TDBuySell$valueOf;
  function PriceFlipFunction(dataItems, flip) {
    this.dataItems_0 = dataItems;
    this.flip_0 = flip;
  }
  Object.defineProperty(PriceFlipFunction.prototype, 'childFunctions', {
    get: function () {
      return emptyList();
    }
  });
  PriceFlipFunction.prototype.calculateAt = function (index) {
    return this.calculate_0(index);
  };
  PriceFlipFunction.prototype.calculate_0 = function (index) {
    var tmp$;
    var di = this.dataItems_0.getTradeItem(index);
    if (di != null && index > 4) {
      var first = this.dataItems_0.getTradeItem(index - 5 | 0);
      var second = this.dataItems_0.getTradeItem(index - 4 | 0);
      var lastButOne = this.dataItems_0.getTradeItem(index - 1 | 0);
      if (first == null || second == null || lastButOne === null) {
        return kotlin_js_internal_DoubleCompanionObject.NaN;
      }
      switch (this.flip_0.name) {
        case 'BUY':
          tmp$ = di.getClose() > second.getClose() && lastButOne.getClose() < first.getClose() ? 1.0 : kotlin_js_internal_DoubleCompanionObject.NaN;
          break;
        case 'SELL':
          tmp$ = di.getClose() < second.getClose() && lastButOne.getClose() > first.getClose() ? 1.0 : kotlin_js_internal_DoubleCompanionObject.NaN;
          break;
        default:tmp$ = Kotlin.noWhenBranchMatched();
          break;
      }
      return tmp$;
    }
    return kotlin_js_internal_DoubleCompanionObject.NaN;
  };
  Object.defineProperty(PriceFlipFunction.prototype, 'dataLength', {
    get: function () {
      return this.dataItems_0.dataLength;
    }
  });
  Object.defineProperty(PriceFlipFunction.prototype, 'ownPastOffset', {
    get: function () {
      return 0;
    }
  });
  Object.defineProperty(PriceFlipFunction.prototype, 'prefetchSize', {
    get: function () {
      return 0;
    }
  });
  PriceFlipFunction.prototype.dataChanged = function (changes) {
    var b = this.dataItems_0.dataLength - 1 | 0;
    return Math_0.max(0, b);
  };
  PriceFlipFunction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PriceFlipFunction',
    interfaces: [IFunction]
  };
  function SetupFunction(dataItems, flipFunction, setup, setupBarLength) {
    AbstractCachingFunction.call(this);
    this.dataItems_0 = dataItems;
    this.flipFunction_0 = flipFunction;
    this.setup_0 = setup;
    this.setupBarLength_0 = setupBarLength;
  }
  Object.defineProperty(SetupFunction.prototype, 'childFunctions', {
    get: function () {
      return listOf_0(this.flipFunction_0);
    }
  });
  SetupFunction.prototype.getValueInternal_za3lpa$ = function (index) {
    var tmp$;
    if (index < 4) {
      return kotlin_js_internal_DoubleCompanionObject.NaN;
    }
    var currentCandle = this.dataItems_0.getTradeItem(index);
    var fourCandlesAgo = this.dataItems_0.getTradeItem(index - 4 | 0);
    if (currentCandle == null || fourCandlesAgo == null) {
      return kotlin_js_internal_DoubleCompanionObject.NaN;
    }
    var prevValue = this.calculateAt(index - 1 | 0);
    if (isFinite(prevValue) && prevValue < this.setupBarLength_0) {
      switch (this.setup_0.name) {
        case 'BUY':
          tmp$ = currentCandle.getClose() < fourCandlesAgo.getClose() ? prevValue + 1.0 : kotlin_js_internal_DoubleCompanionObject.NaN;
          break;
        case 'SELL':
          tmp$ = currentCandle.getClose() > fourCandlesAgo.getClose() ? prevValue + 1.0 : kotlin_js_internal_DoubleCompanionObject.NaN;
          break;
        default:tmp$ = Kotlin.noWhenBranchMatched();
          break;
      }
      var currentValue = tmp$;
      if (isFinite(currentValue)) {
        return currentValue;
      }
    }
    if (isFinite(this.flipFunction_0.calculateAt(index))) {
      return 1.0;
    }
    return kotlin_js_internal_DoubleCompanionObject.NaN;
  };
  SetupFunction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SetupFunction',
    interfaces: [AbstractCachingFunction]
  };
  function TDSupportResistance(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function TDSupportResistance_initFields() {
    TDSupportResistance_initFields = function () {
    };
    TDSupportResistance$Support_instance = new TDSupportResistance('Support', 0);
    TDSupportResistance$Resistance_instance = new TDSupportResistance('Resistance', 1);
  }
  var TDSupportResistance$Support_instance;
  function TDSupportResistance$Support_getInstance() {
    TDSupportResistance_initFields();
    return TDSupportResistance$Support_instance;
  }
  var TDSupportResistance$Resistance_instance;
  function TDSupportResistance$Resistance_getInstance() {
    TDSupportResistance_initFields();
    return TDSupportResistance$Resistance_instance;
  }
  TDSupportResistance.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TDSupportResistance',
    interfaces: [Enum]
  };
  function TDSupportResistance$values() {
    return [TDSupportResistance$Support_getInstance(), TDSupportResistance$Resistance_getInstance()];
  }
  TDSupportResistance.values = TDSupportResistance$values;
  function TDSupportResistance$valueOf(name) {
    switch (name) {
      case 'Support':
        return TDSupportResistance$Support_getInstance();
      case 'Resistance':
        return TDSupportResistance$Resistance_getInstance();
      default:throwISE('No enum constant com.devexperts.dxst.functions.tdsequential.TDSupportResistance.' + name);
    }
  }
  TDSupportResistance.valueOf_61zpoe$ = TDSupportResistance$valueOf;
  function SupportResistanceFunction(dataItems, setup, tdst, setupBarLength) {
    AbstractCachingFunction.call(this);
    this.dataItems_0 = dataItems;
    this.setup_0 = setup;
    this.tdst_0 = tdst;
    this.setupBarLength_0 = setupBarLength;
  }
  Object.defineProperty(SupportResistanceFunction.prototype, 'childFunctions', {
    get: function () {
      return listOf_0(this.setup_0);
    }
  });
  SupportResistanceFunction.prototype.getValueInternal_za3lpa$ = function (index) {
    var tmp$, tmp$_0;
    tmp$ = this.dataItems_0.getTradeItem(index);
    if (tmp$ == null) {
      return kotlin_js_internal_DoubleCompanionObject.NaN;
    }
    var currentCandle = tmp$;
    if (this.setup_0.calculateAt(index) === this.setupBarLength_0) {
      switch (this.tdst_0.name) {
        case 'Support':
          tmp$_0 = currentCandle.getHigh();
          break;
        case 'Resistance':
          tmp$_0 = currentCandle.getLow();
          break;
        default:tmp$_0 = Kotlin.noWhenBranchMatched();
          break;
      }
      return tmp$_0;
    }
    var prevValue = this.calculateAt(index - 1 | 0);
    if (isFinite(prevValue)) {
      return prevValue;
    }
    return kotlin_js_internal_DoubleCompanionObject.NaN;
  };
  SupportResistanceFunction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SupportResistanceFunction',
    interfaces: [AbstractCachingFunction]
  };
  function Comparator$ObjectLiteral_1(closure$comparison) {
    this.closure$comparison = closure$comparison;
  }
  Comparator$ObjectLiteral_1.prototype.compare = function (a, b) {
    return this.closure$comparison(a, b);
  };
  Comparator$ObjectLiteral_1.$metadata$ = {kind: Kind_CLASS, interfaces: [Comparator]};
  function WilliamsFractalUtils() {
    WilliamsFractalUtils_instance = this;
    this.FRACTAL_UP_COMPARATOR = new Comparator$ObjectLiteral_1(WilliamsFractalUtils$FRACTAL_UP_COMPARATOR$lambda);
    this.FRACTAL_DOWN_COMPARATOR = new Comparator$ObjectLiteral_1(WilliamsFractalUtils$FRACTAL_DOWN_COMPARATOR$lambda);
  }
  WilliamsFractalUtils.prototype.getTipSegmentStartIndex_hw6yz2$ = function (index, source, comparator) {
    var indexValue = source.calculateAt(index);
    if (isNaN_0(indexValue))
      return -1;
    if (index > 0) {
      for (var i = index; i >= 1; i--) {
        var previousValue = source.calculateAt(i - 1 | 0);
        if (isNaN_0(previousValue)) {
          return -1;
        }
        var comparison = comparator.compare(previousValue, indexValue);
        if (comparison < 0) {
          return i;
        }
         else if (comparison > 0) {
          return -1;
        }
      }
    }
    return 0;
  };
  WilliamsFractalUtils.prototype.getTipSegmentEndIndex_hw6yz2$ = function (index, source, comparator) {
    var indexValue = source.calculateAt(index);
    if (isNaN_0(indexValue))
      return -1;
    var i = index;
    while (true) {
      if ((i + 1 | 0) >= source.dataLength) {
        return -1;
      }
      var nextValue = source.calculateAt(i + 1 | 0);
      if (isNaN_0(nextValue)) {
        return -1;
      }
      var comparison = comparator.compare(nextValue, indexValue);
      if (comparison < 0) {
        return i;
      }
       else if (comparison > 0) {
        return -1;
      }
      i = i + 1 | 0;
    }
  };
  WilliamsFractalUtils.prototype.getNextTipSegmentStartIndex_aw7rc4$ = function (index, source, comparator, sequenceCount) {
    var tmp$;
    var indexValue = source.calculateAt(index);
    if (isNaN_0(indexValue)) {
      return -1;
    }
    var currentTipSegmentEnd = this.getTipSegmentEndIndex_hw6yz2$(index, source, comparator);
    if (currentTipSegmentEnd < 0) {
      return -1;
    }
    tmp$ = currentTipSegmentEnd + sequenceCount - 1 | 0;
    for (var i = currentTipSegmentEnd; i <= tmp$; i++) {
      if ((i + 1 | 0) >= source.dataLength) {
        return -1;
      }
      var nextValue = source.calculateAt(i + 1 | 0);
      if (isNaN_0(nextValue)) {
        return -1;
      }
      var comparison = comparator.compare(nextValue, indexValue);
      if (comparison === 0) {
        return i + 1 | 0;
      }
       else if (comparison > 0) {
        return -1;
      }
    }
    return -1;
  };
  WilliamsFractalUtils.prototype.getPreviousTipSegmentEndIndex_aw7rc4$ = function (index, source, comparator, sequenceCount) {
    var tmp$;
    var indexValue = source.calculateAt(index);
    if (isNaN_0(indexValue)) {
      return -1;
    }
    var currentTipSegmentStart = this.getTipSegmentStartIndex_hw6yz2$(index, source, comparator);
    if (currentTipSegmentStart < 0) {
      return -1;
    }
    tmp$ = currentTipSegmentStart - sequenceCount + 1 | 0;
    for (var i = currentTipSegmentStart; i >= tmp$; i--) {
      if (i < 1)
        return -1;
      var previousValue = source.calculateAt(i - 1 | 0);
      if (isNaN_0(previousValue)) {
        return -1;
      }
      var comparison = comparator.compare(previousValue, indexValue);
      if (comparison === 0) {
        return i - 1 | 0;
      }
       else if (comparison > 0) {
        return -1;
      }
    }
    return -1;
  };
  WilliamsFractalUtils.prototype.isStartSlopeEnd_aw7rc4$ = function (index, source, comparator, sequenceCount) {
    var tmp$;
    if (index < sequenceCount) {
      return false;
    }
    var indexValue = source.calculateAt(index);
    if (isNaN_0(indexValue)) {
      return false;
    }
    tmp$ = index - sequenceCount + 1 | 0;
    for (var i = index; i >= tmp$; i--) {
      var previousValue = source.calculateAt(i - 1 | 0);
      if (isNaN_0(previousValue)) {
        return false;
      }
      var comparison = comparator.compare(previousValue, indexValue);
      if (comparison >= 0) {
        return false;
      }
    }
    return true;
  };
  WilliamsFractalUtils.prototype.isEndSlopeStart_aw7rc4$ = function (index, source, comparator, sequenceCount) {
    var tmp$;
    var indexValue = source.calculateAt(index);
    if (isNaN_0(indexValue)) {
      return false;
    }
    tmp$ = index + sequenceCount - 1 | 0;
    for (var i = index; i <= tmp$; i++) {
      if ((i + 1 | 0) >= source.dataLength) {
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
    return true;
  };
  WilliamsFractalUtils.prototype.isFractal_aw7rc4$ = function (index, source, comparator, sequenceCount) {
    if (index < 0)
      return false;
    var segmentEndIndex = this.getTipSegmentEndIndex_hw6yz2$(index, source, comparator);
    if (segmentEndIndex !== index)
      return false;
    var segmentStart = this.getTipSegmentStartIndex_hw6yz2$(index, source, comparator);
    if (segmentStart < 0)
      return false;
    var firstSegmentEndIndex = index;
    var previousSegmentEndIndex = this.getPreviousTipSegmentEndIndex_aw7rc4$(firstSegmentEndIndex, source, comparator, sequenceCount);
    while (previousSegmentEndIndex >= 0) {
      firstSegmentEndIndex = previousSegmentEndIndex;
      previousSegmentEndIndex = this.getPreviousTipSegmentEndIndex_aw7rc4$(firstSegmentEndIndex, source, comparator, sequenceCount);
    }
    if (firstSegmentEndIndex !== segmentEndIndex)
      return false;
    var firstSegmentStartIndex = this.getTipSegmentStartIndex_hw6yz2$(firstSegmentEndIndex, source, comparator);
    if (firstSegmentStartIndex < 0 || !this.isStartSlopeEnd_aw7rc4$(firstSegmentStartIndex, source, comparator, sequenceCount))
      return false;
    var lastSegmentStartIndex = index;
    var nextSegmentStartIndex = this.getNextTipSegmentStartIndex_aw7rc4$(lastSegmentStartIndex, source, comparator, sequenceCount);
    while (nextSegmentStartIndex >= 0) {
      lastSegmentStartIndex = nextSegmentStartIndex;
      nextSegmentStartIndex = this.getNextTipSegmentStartIndex_aw7rc4$(lastSegmentStartIndex, source, comparator, sequenceCount);
    }
    var lastSegmentEndIndex = this.getTipSegmentEndIndex_hw6yz2$(lastSegmentStartIndex, source, comparator);
    return lastSegmentEndIndex >= 0 && this.isEndSlopeStart_aw7rc4$(lastSegmentEndIndex, source, comparator, sequenceCount);
  };
  function WilliamsFractalUtils$FRACTAL_UP_COMPARATOR$lambda(o1, o2) {
    return Kotlin.compareTo(o1, o2);
  }
  function WilliamsFractalUtils$FRACTAL_DOWN_COMPARATOR$lambda(o1, o2) {
    return -Kotlin.compareTo(o1, o2) | 0;
  }
  WilliamsFractalUtils.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'WilliamsFractalUtils',
    interfaces: []
  };
  var WilliamsFractalUtils_instance = null;
  function WilliamsFractalUtils_getInstance() {
    if (WilliamsFractalUtils_instance === null) {
      new WilliamsFractalUtils();
    }
    return WilliamsFractalUtils_instance;
  }
  function epochMillis() {
    return Kotlin.Long.fromNumber(Date.now());
  }
  var package$com = _.com || (_.com = {});
  var package$devexperts = package$com.devexperts || (package$com.devexperts = {});
  var package$dxst = package$devexperts.dxst || (package$devexperts.dxst = {});
  package$dxst.DxStudies = DxStudies;
  AbstractCandleTradeDataHolder.CandleImpl = AbstractCandleTradeDataHolder$CandleImpl;
  Object.defineProperty(AbstractCandleTradeDataHolder, 'Companion', {
    get: AbstractCandleTradeDataHolder$Companion_getInstance
  });
  var package$api = package$dxst.api || (package$dxst.api = {});
  package$api.AbstractCandleTradeDataHolder = AbstractCandleTradeDataHolder;
  Object.defineProperty(AggregationTypeEnum, 'DEFAULT', {
    get: AggregationTypeEnum$DEFAULT_getInstance
  });
  Object.defineProperty(AggregationTypeEnum, 'DAY', {
    get: AggregationTypeEnum$DAY_getInstance
  });
  Object.defineProperty(AggregationTypeEnum, 'WEEK', {
    get: AggregationTypeEnum$WEEK_getInstance
  });
  Object.defineProperty(AggregationTypeEnum, 'MONTH', {
    get: AggregationTypeEnum$MONTH_getInstance
  });
  Object.defineProperty(AggregationTypeEnum, 'Companion', {
    get: AggregationTypeEnum$Companion_getInstance
  });
  package$api.AggregationTypeEnum = AggregationTypeEnum;
  Object.defineProperty(AverageTypeEnum, 'SIMPLE', {
    get: AverageTypeEnum$SIMPLE_getInstance
  });
  Object.defineProperty(AverageTypeEnum, 'WILDERS', {
    get: AverageTypeEnum$WILDERS_getInstance
  });
  Object.defineProperty(AverageTypeEnum, 'WEIGHTED', {
    get: AverageTypeEnum$WEIGHTED_getInstance
  });
  Object.defineProperty(AverageTypeEnum, 'EXPONENTIAL', {
    get: AverageTypeEnum$EXPONENTIAL_getInstance
  });
  Object.defineProperty(AverageTypeEnum, 'Companion', {
    get: AverageTypeEnum$Companion_getInstance
  });
  package$api.AverageTypeEnum = AverageTypeEnum;
  CandleDataExpander.CandleDataItemClone = CandleDataExpander$CandleDataItemClone;
  package$api.CandleDataExpander = CandleDataExpander;
  package$api.CandleDataItem = CandleDataItem;
  CandleDataStore.MergeResult_init_8be2vx$ = CandleDataStore$CandleDataStore$MergeResult_init;
  CandleDataStore.MergeResult_init_sg8r5x$ = CandleDataStore$CandleDataStore$MergeResult_init_0;
  CandleDataStore.MergeResult = CandleDataStore$MergeResult;
  Object.defineProperty(CandleDataStore, 'Companion', {
    get: CandleDataStore$Companion_getInstance
  });
  package$api.CandleDataStore = CandleDataStore;
  package$api.CandleTradeDataHolder = CandleTradeDataHolder;
  package$api.ChangeListener = ChangeListener;
  package$api.Changes = Changes;
  package$api.DataItemsView = DataItemsView;
  package$api.IFunction = IFunction;
  Object.defineProperty(PriceFieldEnum, 'OPEN', {
    get: PriceFieldEnum$OPEN_getInstance
  });
  Object.defineProperty(PriceFieldEnum, 'HIGH', {
    get: PriceFieldEnum$HIGH_getInstance
  });
  Object.defineProperty(PriceFieldEnum, 'LOW', {
    get: PriceFieldEnum$LOW_getInstance
  });
  Object.defineProperty(PriceFieldEnum, 'CLOSE', {
    get: PriceFieldEnum$CLOSE_getInstance
  });
  Object.defineProperty(PriceFieldEnum, 'IMP_VOLATILITY', {
    get: PriceFieldEnum$IMP_VOLATILITY_getInstance
  });
  Object.defineProperty(PriceFieldEnum, 'MEDIAN', {
    get: PriceFieldEnum$MEDIAN_getInstance
  });
  Object.defineProperty(PriceFieldEnum, 'TYPICAL', {
    get: PriceFieldEnum$TYPICAL_getInstance
  });
  Object.defineProperty(PriceFieldEnum, 'OHLC_AVERAGE', {
    get: PriceFieldEnum$OHLC_AVERAGE_getInstance
  });
  Object.defineProperty(PriceFieldEnum, 'VOLUME', {
    get: PriceFieldEnum$VOLUME_getInstance
  });
  Object.defineProperty(PriceFieldEnum, 'Companion', {
    get: PriceFieldEnum$Companion_getInstance
  });
  package$api.PriceFieldEnum = PriceFieldEnum;
  package$api.StudiesSet = StudiesSet;
  Object.defineProperty(Study, 'Companion', {
    get: Study$Companion_getInstance
  });
  package$api.Study = Study;
  Object.defineProperty(StudyBuilder, 'Companion', {
    get: StudyBuilder$Companion_getInstance
  });
  package$api.StudyBuilder = StudyBuilder;
  package$api.StudyCalculator = StudyCalculator;
  package$api.StudyDataHolder = StudyDataHolder;
  package$api.StudyDataItem = StudyDataItem;
  Object.defineProperty(StudyParam, 'Companion', {
    get: StudyParam$Companion_getInstance
  });
  package$api.StudyParam = StudyParam;
  package$api.TradeDataHolder = TradeDataHolder;
  package$api.TradeDataItem = TradeDataItem;
  package$api.TradingSessionData = TradingSessionData;
  var package$builders = package$dxst.builders || (package$dxst.builders = {});
  package$builders.ADX = ADX;
  Object.defineProperty(ADXR, 'Companion', {
    get: ADXR$Companion_getInstance
  });
  package$builders.ADXR = ADXR;
  package$builders.AccelerationDeceleration = AccelerationDeceleration;
  package$builders.AccumulationDistribution = AccumulationDistribution;
  Object.defineProperty(Aroon, 'Companion', {
    get: Aroon$Companion_getInstance
  });
  package$builders.Aroon = Aroon;
  Object.defineProperty(AroonOscillator, 'Companion', {
    get: AroonOscillator$Companion_getInstance
  });
  package$builders.AroonOscillator = AroonOscillator;
  package$builders.AverageTrueRange = AverageTrueRange;
  package$builders.AwesomeOscillator = AwesomeOscillator;
  package$builders.BollingerBands = BollingerBands;
  Object.defineProperty(CCI, 'Companion', {
    get: CCI$Companion_getInstance
  });
  package$builders.CCI = CCI;
  Object.defineProperty(CenterOfGravityOscillator, 'Companion', {
    get: CenterOfGravityOscillator$Companion_getInstance
  });
  package$builders.CenterOfGravityOscillator = CenterOfGravityOscillator;
  Object.defineProperty(ChaikinOscillator, 'Companion', {
    get: ChaikinOscillator$Companion_getInstance
  });
  package$builders.ChaikinOscillator = ChaikinOscillator;
  Object.defineProperty(ChaikinVolatility, 'Companion', {
    get: ChaikinVolatility$Companion_getInstance
  });
  package$builders.ChaikinVolatility = ChaikinVolatility;
  package$builders.ChandeMomentumOscillator = ChandeMomentumOscillator;
  package$builders.CommoditySelection = CommoditySelection;
  package$builders.Comparative = Comparative;
  package$builders.DEMA = DEMA;
  package$builders.DMI = DMI;
  Object.defineProperty(DayOpenClose, 'Companion', {
    get: DayOpenClose$Companion_getInstance
  });
  package$builders.DayOpenClose = DayOpenClose;
  package$builders.DeMarker = DeMarker;
  package$builders.DetrendedPriceOsc = DetrendedPriceOsc;
  Object.defineProperty(DynamicMomentumIndex, 'Companion', {
    get: DynamicMomentumIndex$Companion_getInstance
  });
  package$builders.DynamicMomentumIndex = DynamicMomentumIndex;
  package$builders.EMA = EMA;
  package$builders.Elder = Elder;
  Object.defineProperty(EnvelopeCommon, 'Companion', {
    get: EnvelopeCommon$Companion_getInstance
  });
  package$builders.EnvelopeCommon = EnvelopeCommon;
  package$builders.EnvelopeEMA = EnvelopeEMA;
  package$builders.EnvelopeSMA = EnvelopeSMA;
  package$builders.EnvelopeSMMA = EnvelopeSMMA;
  package$builders.EnvelopeWMA = EnvelopeWMA;
  Object.defineProperty(FastStochastic, 'Companion', {
    get: FastStochastic$Companion_getInstance
  });
  package$builders.FastStochastic = FastStochastic;
  Object.defineProperty(FibonacciBollingerBands, 'Companion', {
    get: FibonacciBollingerBands$Companion_getInstance
  });
  package$builders.FibonacciBollingerBands = FibonacciBollingerBands;
  package$builders.ForceIndex = ForceIndex;
  Object.defineProperty(ForecastOscillator, 'Companion', {
    get: ForecastOscillator$Companion_getInstance
  });
  package$builders.ForecastOscillator = ForecastOscillator;
  Object.defineProperty(FullStochastic, 'Companion', {
    get: FullStochastic$Companion_getInstance
  });
  package$builders.FullStochastic = FullStochastic;
  Object.defineProperty(GTRAP, 'Companion', {
    get: GTRAP$Companion_getInstance
  });
  package$builders.GTRAP = GTRAP;
  package$builders.GatorOscillator = GatorOscillator;
  package$builders.HLVolatility = HLVolatility;
  Object.defineProperty(Ichimoku, 'Companion', {
    get: Ichimoku$Companion_getInstance
  });
  package$builders.Ichimoku = Ichimoku;
  package$builders.ImpliedVolatility = ImpliedVolatility;
  Object.defineProperty(ImpliedVolatilityGauge, 'Companion', {
    get: ImpliedVolatilityGauge$Companion_getInstance
  });
  package$builders.ImpliedVolatilityGauge = ImpliedVolatilityGauge;
  Object.defineProperty(Inertia, 'Companion', {
    get: Inertia$Companion_getInstance
  });
  package$builders.Inertia = Inertia;
  Object.defineProperty(IntradayMomentumIndex, 'Companion', {
    get: IntradayMomentumIndex$Companion_getInstance
  });
  package$builders.IntradayMomentumIndex = IntradayMomentumIndex;
  package$builders.KRI = KRI;
  Object.defineProperty(package$builders, 'nfastend', {
    get: function () {
      return nfastend;
    }
  });
  Object.defineProperty(package$builders, 'nslowend', {
    get: function () {
      return nslowend;
    }
  });
  Object.defineProperty(package$builders, 'notZero', {
    get: function () {
      return notZero;
    }
  });
  package$builders.KaufmanMovingAverage = KaufmanMovingAverage;
  Object.defineProperty(KeltnerChannels, 'Companion', {
    get: KeltnerChannels$Companion_getInstance
  });
  package$builders.KeltnerChannels = KeltnerChannels;
  package$builders.LinearRegression = LinearRegression;
  Object.defineProperty(LinearRegressionChannel, 'Companion', {
    get: LinearRegressionChannel$Companion_getInstance
  });
  package$builders.LinearRegressionChannel = LinearRegressionChannel;
  Object.defineProperty(LinearRegressionSlope, 'Companion', {
    get: LinearRegressionSlope$Companion_getInstance
  });
  package$builders.LinearRegressionSlope = LinearRegressionSlope;
  Object.defineProperty(MACD, 'Companion', {
    get: MACD$Companion_getInstance
  });
  package$builders.MACD = MACD;
  package$builders.MarketFacilitationIndex = MarketFacilitationIndex;
  Object.defineProperty(MassIndex, 'Companion', {
    get: MassIndex$Companion_getInstance
  });
  package$builders.MassIndex = MassIndex;
  package$builders.MedianPrice = MedianPrice;
  package$builders.Momentum = Momentum;
  Object.defineProperty(MoneyFlowIndex, 'Companion', {
    get: MoneyFlowIndex$Companion_getInstance
  });
  package$builders.MoneyFlowIndex = MoneyFlowIndex;
  package$builders.NegativeVolumeIndex = NegativeVolumeIndex;
  package$builders.OnBalanceVolume = OnBalanceVolume;
  Object.defineProperty(Oscillator, 'Companion', {
    get: Oscillator$Companion_getInstance
  });
  package$builders.Oscillator = Oscillator;
  Object.defineProperty(ParabolicSAR, 'Companion', {
    get: ParabolicSAR$Companion_getInstance
  });
  package$builders.ParabolicSAR = ParabolicSAR;
  package$builders.PercentChange = PercentChange;
  Object.defineProperty(PercentOfResistance, 'Companion', {
    get: PercentOfResistance$Companion_getInstance
  });
  package$builders.PercentOfResistance = PercentOfResistance;
  Object.defineProperty(PercentagePriceOscillator, 'Companion', {
    get: PercentagePriceOscillator$Companion_getInstance
  });
  package$builders.PercentagePriceOscillator = PercentagePriceOscillator;
  Object.defineProperty(PivotPoints, 'Companion', {
    get: PivotPoints$Companion_getInstance
  });
  package$builders.PivotPoints = PivotPoints;
  Object.defineProperty(PriceChannel, 'Companion', {
    get: PriceChannel$Companion_getInstance
  });
  package$builders.PriceChannel = PriceChannel;
  Object.defineProperty(PriceOscillator, 'Companion', {
    get: PriceOscillator$Companion_getInstance
  });
  package$builders.PriceOscillator = PriceOscillator;
  package$builders.PriceVolumeTrend = PriceVolumeTrend;
  package$builders.ROC = ROC;
  package$builders.RankCorrelationIndex = RankCorrelationIndex;
  Object.defineProperty(RelativeStrengthIndex, 'Companion', {
    get: RelativeStrengthIndex$Companion_getInstance
  });
  package$builders.RelativeStrengthIndex = RelativeStrengthIndex;
  package$builders.RelativeVigorIndex = RelativeVigorIndex;
  package$builders.RelativeVigorIndexSMA = RelativeVigorIndexSMA;
  Object.defineProperty(RelativeVolatilityIndex, 'Companion', {
    get: RelativeVolatilityIndex$Companion_getInstance
  });
  package$builders.RelativeVolatilityIndex = RelativeVolatilityIndex;
  package$builders.SMA = SMA;
  package$builders.SMMA = SMMA;
  Object.defineProperty(SROC, 'Companion', {
    get: SROC$Companion_getInstance
  });
  package$builders.SROC = SROC;
  Object.defineProperty(STARCBands, 'Companion', {
    get: STARCBands$Companion_getInstance
  });
  package$builders.STARCBands = STARCBands;
  Object.defineProperty(SchaffTrendCycle, 'Companion', {
    get: SchaffTrendCycle$Companion_getInstance
  });
  package$builders.SchaffTrendCycle = SchaffTrendCycle;
  Object.defineProperty(SlowStochastic, 'Companion', {
    get: SlowStochastic$Companion_getInstance
  });
  package$builders.SlowStochastic = SlowStochastic;
  package$builders.StandardDeviation = StandardDeviation;
  Object.defineProperty(StandardDeviationChannel, 'Companion', {
    get: StandardDeviationChannel$Companion_getInstance
  });
  package$builders.StandardDeviationChannel = StandardDeviationChannel;
  Object.defineProperty(StandardErrorBands, 'Companion', {
    get: StandardErrorBands$Companion_getInstance
  });
  package$builders.StandardErrorBands = StandardErrorBands;
  package$builders.StdDevVolatility = StdDevVolatility;
  Object.defineProperty(StudyBuilderFactory, 'WILLIAMS_FRACTAL', {
    get: StudyBuilderFactory$WILLIAMS_FRACTAL_getInstance
  });
  Object.defineProperty(StudyBuilderFactory, 'PERCENTAGE_PRICE_OSCILLATOR', {
    get: StudyBuilderFactory$PERCENTAGE_PRICE_OSCILLATOR_getInstance
  });
  Object.defineProperty(StudyBuilderFactory, 'DYNAMIC_MOMENTUM_INDEX', {
    get: StudyBuilderFactory$DYNAMIC_MOMENTUM_INDEX_getInstance
  });
  Object.defineProperty(StudyBuilderFactory, 'WILLIAMS_AD', {
    get: StudyBuilderFactory$WILLIAMS_AD_getInstance
  });
  Object.defineProperty(StudyBuilderFactory, 'PRICE_OSCILLATOR', {
    get: StudyBuilderFactory$PRICE_OSCILLATOR_getInstance
  });
  Object.defineProperty(StudyBuilderFactory, 'PERCENT_CHANGE', {
    get: StudyBuilderFactory$PERCENT_CHANGE_getInstance
  });
  Object.defineProperty(StudyBuilderFactory, 'LINEAR_REGRESSION_SLOPE', {
    get: StudyBuilderFactory$LINEAR_REGRESSION_SLOPE_getInstance
  });
  Object.defineProperty(StudyBuilderFactory, 'LINEAR_REGRESSION_CHANNEL', {
    get: StudyBuilderFactory$LINEAR_REGRESSION_CHANNEL_getInstance
  });
  Object.defineProperty(StudyBuilderFactory, 'COMMODITY_SELECTION', {
    get: StudyBuilderFactory$COMMODITY_SELECTION_getInstance
  });
  Object.defineProperty(StudyBuilderFactory, 'LINEAR_REGRESSION', {
    get: StudyBuilderFactory$LINEAR_REGRESSION_getInstance
  });
  Object.defineProperty(StudyBuilderFactory, 'INERTIA', {
    get: StudyBuilderFactory$INERTIA_getInstance
  });
  Object.defineProperty(StudyBuilderFactory, 'KRI', {
    get: StudyBuilderFactory$KRI_getInstance
  });
  Object.defineProperty(StudyBuilderFactory, 'RANK_CORRELATION_INDEX', {
    get: StudyBuilderFactory$RANK_CORRELATION_INDEX_getInstance
  });
  Object.defineProperty(StudyBuilderFactory, 'SWING_ACCUMULATION', {
    get: StudyBuilderFactory$SWING_ACCUMULATION_getInstance
  });
  Object.defineProperty(StudyBuilderFactory, 'AROON_OSCILLATOR', {
    get: StudyBuilderFactory$AROON_OSCILLATOR_getInstance
  });
  Object.defineProperty(StudyBuilderFactory, 'AROON', {
    get: StudyBuilderFactory$AROON_getInstance
  });
  Object.defineProperty(StudyBuilderFactory, 'SWING_INDEX', {
    get: StudyBuilderFactory$SWING_INDEX_getInstance
  });
  Object.defineProperty(StudyBuilderFactory, 'STARCBANDS', {
    get: StudyBuilderFactory$STARCBANDS_getInstance
  });
  Object.defineProperty(StudyBuilderFactory, 'FORECAST_OSCILLATOR', {
    get: StudyBuilderFactory$FORECAST_OSCILLATOR_getInstance
  });
  Object.defineProperty(StudyBuilderFactory, 'KELTNER_CHANNELS', {
    get: StudyBuilderFactory$KELTNER_CHANNELS_getInstance
  });
  Object.defineProperty(StudyBuilderFactory, 'TEMA', {
    get: StudyBuilderFactory$TEMA_getInstance
  });
  Object.defineProperty(StudyBuilderFactory, 'TYPICAL_PRICE', {
    get: StudyBuilderFactory$TYPICAL_PRICE_getInstance
  });
  Object.defineProperty(StudyBuilderFactory, 'DEMA', {
    get: StudyBuilderFactory$DEMA_getInstance
  });
  Object.defineProperty(StudyBuilderFactory, 'MEDIAN_PRICE', {
    get: StudyBuilderFactory$MEDIAN_PRICE_getInstance
  });
  Object.defineProperty(StudyBuilderFactory, 'FULL_STOCHASTIC', {
    get: StudyBuilderFactory$FULL_STOCHASTIC_getInstance
  });
  Object.defineProperty(StudyBuilderFactory, 'STANDARD_ERROR_BANDS', {
    get: StudyBuilderFactory$STANDARD_ERROR_BANDS_getInstance
  });
  Object.defineProperty(StudyBuilderFactory, 'PERCENT_OF_RESISTANCE', {
    get: StudyBuilderFactory$PERCENT_OF_RESISTANCE_getInstance
  });
  Object.defineProperty(StudyBuilderFactory, 'CENTER_OF_GRAVITY_OSCILLATOR', {
    get: StudyBuilderFactory$CENTER_OF_GRAVITY_OSCILLATOR_getInstance
  });
  Object.defineProperty(StudyBuilderFactory, 'ACCELERATION_DECELERATION', {
    get: StudyBuilderFactory$ACCELERATION_DECELERATION_getInstance
  });
  Object.defineProperty(StudyBuilderFactory, 'ACCUMULATION_DISTRIBUTION', {
    get: StudyBuilderFactory$ACCUMULATION_DISTRIBUTION_getInstance
  });
  Object.defineProperty(StudyBuilderFactory, 'ADX', {
    get: StudyBuilderFactory$ADX_getInstance
  });
  Object.defineProperty(StudyBuilderFactory, 'ADXR', {
    get: StudyBuilderFactory$ADXR_getInstance
  });
  Object.defineProperty(StudyBuilderFactory, 'AVERAGE_TRUE_RANGE', {
    get: StudyBuilderFactory$AVERAGE_TRUE_RANGE_getInstance
  });
  Object.defineProperty(StudyBuilderFactory, 'AWESOME_OSCILLATOR', {
    get: StudyBuilderFactory$AWESOME_OSCILLATOR_getInstance
  });
  Object.defineProperty(StudyBuilderFactory, 'BOLLINGER_BANDS', {
    get: StudyBuilderFactory$BOLLINGER_BANDS_getInstance
  });
  Object.defineProperty(StudyBuilderFactory, 'CCI', {
    get: StudyBuilderFactory$CCI_getInstance
  });
  Object.defineProperty(StudyBuilderFactory, 'CHAIKIN_OSCILLATOR', {
    get: StudyBuilderFactory$CHAIKIN_OSCILLATOR_getInstance
  });
  Object.defineProperty(StudyBuilderFactory, 'CHAIKIN_VOLATILITY', {
    get: StudyBuilderFactory$CHAIKIN_VOLATILITY_getInstance
  });
  Object.defineProperty(StudyBuilderFactory, 'CHANDE_MOMENTUM_OSCILLATOR', {
    get: StudyBuilderFactory$CHANDE_MOMENTUM_OSCILLATOR_getInstance
  });
  Object.defineProperty(StudyBuilderFactory, 'DE_MARKER', {
    get: StudyBuilderFactory$DE_MARKER_getInstance
  });
  Object.defineProperty(StudyBuilderFactory, 'DETRENDED_PRICE_OSC', {
    get: StudyBuilderFactory$DETRENDED_PRICE_OSC_getInstance
  });
  Object.defineProperty(StudyBuilderFactory, 'DMI', {
    get: StudyBuilderFactory$DMI_getInstance
  });
  Object.defineProperty(StudyBuilderFactory, 'ELDER', {
    get: StudyBuilderFactory$ELDER_getInstance
  });
  Object.defineProperty(StudyBuilderFactory, 'EMA', {
    get: StudyBuilderFactory$EMA_getInstance
  });
  Object.defineProperty(StudyBuilderFactory, 'ENVELOPE_EMA', {
    get: StudyBuilderFactory$ENVELOPE_EMA_getInstance
  });
  Object.defineProperty(StudyBuilderFactory, 'ENVELOPE_SMA', {
    get: StudyBuilderFactory$ENVELOPE_SMA_getInstance
  });
  Object.defineProperty(StudyBuilderFactory, 'ENVELOPE_SMMA', {
    get: StudyBuilderFactory$ENVELOPE_SMMA_getInstance
  });
  Object.defineProperty(StudyBuilderFactory, 'ENVELOPE_WMA', {
    get: StudyBuilderFactory$ENVELOPE_WMA_getInstance
  });
  Object.defineProperty(StudyBuilderFactory, 'FAST_STOCHASTIC', {
    get: StudyBuilderFactory$FAST_STOCHASTIC_getInstance
  });
  Object.defineProperty(StudyBuilderFactory, 'FORCE_INDEX', {
    get: StudyBuilderFactory$FORCE_INDEX_getInstance
  });
  Object.defineProperty(StudyBuilderFactory, 'GATOR_OSCILLATOR', {
    get: StudyBuilderFactory$GATOR_OSCILLATOR_getInstance
  });
  Object.defineProperty(StudyBuilderFactory, 'HLVOLATILITY', {
    get: StudyBuilderFactory$HLVOLATILITY_getInstance
  });
  Object.defineProperty(StudyBuilderFactory, 'ICHIMOKU', {
    get: StudyBuilderFactory$ICHIMOKU_getInstance
  });
  Object.defineProperty(StudyBuilderFactory, 'INTRADAY_MOMENTUM_INDEX', {
    get: StudyBuilderFactory$INTRADAY_MOMENTUM_INDEX_getInstance
  });
  Object.defineProperty(StudyBuilderFactory, 'MACD', {
    get: StudyBuilderFactory$MACD_getInstance
  });
  Object.defineProperty(StudyBuilderFactory, 'MARKET_FACILITATION_INDEX', {
    get: StudyBuilderFactory$MARKET_FACILITATION_INDEX_getInstance
  });
  Object.defineProperty(StudyBuilderFactory, 'MASS_INDEX', {
    get: StudyBuilderFactory$MASS_INDEX_getInstance
  });
  Object.defineProperty(StudyBuilderFactory, 'MOMENTUM', {
    get: StudyBuilderFactory$MOMENTUM_getInstance
  });
  Object.defineProperty(StudyBuilderFactory, 'MONEY_FLOW_INDEX', {
    get: StudyBuilderFactory$MONEY_FLOW_INDEX_getInstance
  });
  Object.defineProperty(StudyBuilderFactory, 'NEGATIVE_VOLUME_INDEX', {
    get: StudyBuilderFactory$NEGATIVE_VOLUME_INDEX_getInstance
  });
  Object.defineProperty(StudyBuilderFactory, 'ON_BALANCE_VOLUME', {
    get: StudyBuilderFactory$ON_BALANCE_VOLUME_getInstance
  });
  Object.defineProperty(StudyBuilderFactory, 'DAY_OPEN_CLOSE', {
    get: StudyBuilderFactory$DAY_OPEN_CLOSE_getInstance
  });
  Object.defineProperty(StudyBuilderFactory, 'OSCILLATOR', {
    get: StudyBuilderFactory$OSCILLATOR_getInstance
  });
  Object.defineProperty(StudyBuilderFactory, 'PARABOLIC_SAR', {
    get: StudyBuilderFactory$PARABOLIC_SAR_getInstance
  });
  Object.defineProperty(StudyBuilderFactory, 'PIVOT_POINTS', {
    get: StudyBuilderFactory$PIVOT_POINTS_getInstance
  });
  Object.defineProperty(StudyBuilderFactory, 'PRICE_CHANNEL', {
    get: StudyBuilderFactory$PRICE_CHANNEL_getInstance
  });
  Object.defineProperty(StudyBuilderFactory, 'PRICE_VOLUME_TREND', {
    get: StudyBuilderFactory$PRICE_VOLUME_TREND_getInstance
  });
  Object.defineProperty(StudyBuilderFactory, 'RELATIVE_STRENGTH_INDEX', {
    get: StudyBuilderFactory$RELATIVE_STRENGTH_INDEX_getInstance
  });
  Object.defineProperty(StudyBuilderFactory, 'RELATIVE_VIGOR_INDEX', {
    get: StudyBuilderFactory$RELATIVE_VIGOR_INDEX_getInstance
  });
  Object.defineProperty(StudyBuilderFactory, 'RELATIVE_VIGOR_INDEX_SMA', {
    get: StudyBuilderFactory$RELATIVE_VIGOR_INDEX_SMA_getInstance
  });
  Object.defineProperty(StudyBuilderFactory, 'RELATIVE_VOLATILITY_INDEX', {
    get: StudyBuilderFactory$RELATIVE_VOLATILITY_INDEX_getInstance
  });
  Object.defineProperty(StudyBuilderFactory, 'ROC', {
    get: StudyBuilderFactory$ROC_getInstance
  });
  Object.defineProperty(StudyBuilderFactory, 'SLOW_STOCHASTIC', {
    get: StudyBuilderFactory$SLOW_STOCHASTIC_getInstance
  });
  Object.defineProperty(StudyBuilderFactory, 'SMA', {
    get: StudyBuilderFactory$SMA_getInstance
  });
  Object.defineProperty(StudyBuilderFactory, 'SMMA', {
    get: StudyBuilderFactory$SMMA_getInstance
  });
  Object.defineProperty(StudyBuilderFactory, 'SROC', {
    get: StudyBuilderFactory$SROC_getInstance
  });
  Object.defineProperty(StudyBuilderFactory, 'SCHAFF_TREND_CYCLE', {
    get: StudyBuilderFactory$SCHAFF_TREND_CYCLE_getInstance
  });
  Object.defineProperty(StudyBuilderFactory, 'STANDARD_DEVIATION_CHANNEL', {
    get: StudyBuilderFactory$STANDARD_DEVIATION_CHANNEL_getInstance
  });
  Object.defineProperty(StudyBuilderFactory, 'STANDARD_DEVIATION', {
    get: StudyBuilderFactory$STANDARD_DEVIATION_getInstance
  });
  Object.defineProperty(StudyBuilderFactory, 'STD_DEV_VOLATILITY', {
    get: StudyBuilderFactory$STD_DEV_VOLATILITY_getInstance
  });
  Object.defineProperty(StudyBuilderFactory, 'TIME_SERIES_FORECAST', {
    get: StudyBuilderFactory$TIME_SERIES_FORECAST_getInstance
  });
  Object.defineProperty(StudyBuilderFactory, 'TMA', {
    get: StudyBuilderFactory$TMA_getInstance
  });
  Object.defineProperty(StudyBuilderFactory, 'TRIPLE_EMA', {
    get: StudyBuilderFactory$TRIPLE_EMA_getInstance
  });
  Object.defineProperty(StudyBuilderFactory, 'TRUE_STRENGTH_INDEX', {
    get: StudyBuilderFactory$TRUE_STRENGTH_INDEX_getInstance
  });
  Object.defineProperty(StudyBuilderFactory, 'ULTIMATE_OSCILLATOR', {
    get: StudyBuilderFactory$ULTIMATE_OSCILLATOR_getInstance
  });
  Object.defineProperty(StudyBuilderFactory, 'VERTICAL_HORIZONTAL_FILTER', {
    get: StudyBuilderFactory$VERTICAL_HORIZONTAL_FILTER_getInstance
  });
  Object.defineProperty(StudyBuilderFactory, 'VWAP', {
    get: StudyBuilderFactory$VWAP_getInstance
  });
  Object.defineProperty(StudyBuilderFactory, 'WEIGHTED_CLOSE', {
    get: StudyBuilderFactory$WEIGHTED_CLOSE_getInstance
  });
  Object.defineProperty(StudyBuilderFactory, 'WILDERS_SMOOTHING', {
    get: StudyBuilderFactory$WILDERS_SMOOTHING_getInstance
  });
  Object.defineProperty(StudyBuilderFactory, 'WILLIAMS_ALLIGATOR', {
    get: StudyBuilderFactory$WILLIAMS_ALLIGATOR_getInstance
  });
  Object.defineProperty(StudyBuilderFactory, 'WILLIAMS_PERCENT_RANGE', {
    get: StudyBuilderFactory$WILLIAMS_PERCENT_RANGE_getInstance
  });
  Object.defineProperty(StudyBuilderFactory, 'WMA', {
    get: StudyBuilderFactory$WMA_getInstance
  });
  Object.defineProperty(StudyBuilderFactory, 'ZIG_ZAG', {
    get: StudyBuilderFactory$ZIG_ZAG_getInstance
  });
  Object.defineProperty(StudyBuilderFactory, 'COMPARATIVE', {
    get: StudyBuilderFactory$COMPARATIVE_getInstance
  });
  Object.defineProperty(StudyBuilderFactory, 'IMPLIED_VOLATILITY', {
    get: StudyBuilderFactory$IMPLIED_VOLATILITY_getInstance
  });
  Object.defineProperty(StudyBuilderFactory, 'IMPLIED_VOLATILITY_GAUGE', {
    get: StudyBuilderFactory$IMPLIED_VOLATILITY_GAUGE_getInstance
  });
  Object.defineProperty(StudyBuilderFactory, 'TD_SEQUENTIAL', {
    get: StudyBuilderFactory$TD_SEQUENTIAL_getInstance
  });
  Object.defineProperty(StudyBuilderFactory, 'GTRAP', {
    get: StudyBuilderFactory$GTRAP_getInstance
  });
  Object.defineProperty(StudyBuilderFactory, 'KAUFMAN_MOVING_AVERAGE', {
    get: StudyBuilderFactory$KAUFMAN_MOVING_AVERAGE_getInstance
  });
  Object.defineProperty(StudyBuilderFactory, 'WAVE_TREND_WITH_CROSSES', {
    get: StudyBuilderFactory$WAVE_TREND_WITH_CROSSES_getInstance
  });
  Object.defineProperty(StudyBuilderFactory, 'FIBONACCI_BOLLINGER_BANDS', {
    get: StudyBuilderFactory$FIBONACCI_BOLLINGER_BANDS_getInstance
  });
  Object.defineProperty(StudyBuilderFactory, 'WAVE_TREND', {
    get: StudyBuilderFactory$WAVE_TREND_getInstance
  });
  Object.defineProperty(StudyBuilderFactory, 'Companion', {
    get: StudyBuilderFactory$Companion_getInstance
  });
  package$builders.StudyBuilderFactory = StudyBuilderFactory;
  Object.defineProperty(SwingAccumulation, 'Companion', {
    get: SwingAccumulation$Companion_getInstance
  });
  package$builders.SwingAccumulation = SwingAccumulation;
  Object.defineProperty(SwingIndex$PriceValue, 'TODAY_CLOSE', {
    get: SwingIndex$PriceValue$TODAY_CLOSE_getInstance
  });
  Object.defineProperty(SwingIndex$PriceValue, 'TODAY_OPEN', {
    get: SwingIndex$PriceValue$TODAY_OPEN_getInstance
  });
  Object.defineProperty(SwingIndex$PriceValue, 'TODAY_HIGH', {
    get: SwingIndex$PriceValue$TODAY_HIGH_getInstance
  });
  Object.defineProperty(SwingIndex$PriceValue, 'TODAY_LOW', {
    get: SwingIndex$PriceValue$TODAY_LOW_getInstance
  });
  Object.defineProperty(SwingIndex$PriceValue, 'YESTERDAY_OPEN', {
    get: SwingIndex$PriceValue$YESTERDAY_OPEN_getInstance
  });
  Object.defineProperty(SwingIndex$PriceValue, 'YESTERDAY_CLOSE', {
    get: SwingIndex$PriceValue$YESTERDAY_CLOSE_getInstance
  });
  Object.defineProperty(SwingIndex$PriceValue, 'YESTERDAY_HIGH', {
    get: SwingIndex$PriceValue$YESTERDAY_HIGH_getInstance
  });
  Object.defineProperty(SwingIndex$PriceValue, 'YESTERDAY_LOW', {
    get: SwingIndex$PriceValue$YESTERDAY_LOW_getInstance
  });
  SwingIndex.PriceValue = SwingIndex$PriceValue;
  Object.defineProperty(SwingIndex, 'Companion', {
    get: SwingIndex$Companion_getInstance
  });
  package$builders.SwingIndex = SwingIndex;
  package$builders.TDSequential = TDSequential;
  package$builders.TEMA = TEMA;
  package$builders.TMA = TMA;
  Object.defineProperty(TimeSeriesForecast, 'Companion', {
    get: TimeSeriesForecast$Companion_getInstance
  });
  package$builders.TimeSeriesForecast = TimeSeriesForecast;
  package$builders.TripleEMA = TripleEMA;
  Object.defineProperty(TrueStrengthIndex, 'Companion', {
    get: TrueStrengthIndex$Companion_getInstance
  });
  package$builders.TrueStrengthIndex = TrueStrengthIndex;
  package$builders.TypicalPrice = TypicalPrice;
  Object.defineProperty(UltimateOscillator, 'Companion', {
    get: UltimateOscillator$Companion_getInstance
  });
  package$builders.UltimateOscillator = UltimateOscillator;
  package$builders.VWAP = VWAP;
  package$builders.VerticalHorizontalFilter = VerticalHorizontalFilter;
  package$builders.WMA = WMA;
  Object.defineProperty(WaveTrend, 'Companion', {
    get: WaveTrend$Companion_getInstance
  });
  package$builders.WaveTrend = WaveTrend;
  Object.defineProperty(WaveTrendWithCrosses, 'Companion', {
    get: WaveTrendWithCrosses$Companion_getInstance
  });
  package$builders.WaveTrendWithCrosses = WaveTrendWithCrosses;
  package$builders.WeightedClose = WeightedClose;
  package$builders.WildersSmoothing = WildersSmoothing;
  package$builders.WilliamsAD = WilliamsAD;
  Object.defineProperty(WilliamsAlligator, 'Companion', {
    get: WilliamsAlligator$Companion_getInstance
  });
  package$builders.WilliamsAlligator = WilliamsAlligator;
  Object.defineProperty(WilliamsFractal, 'Companion', {
    get: WilliamsFractal$Companion_getInstance
  });
  package$builders.WilliamsFractal = WilliamsFractal;
  Object.defineProperty(WilliamsPercentRange, 'Companion', {
    get: WilliamsPercentRange$Companion_getInstance
  });
  package$builders.WilliamsPercentRange = WilliamsPercentRange;
  Object.defineProperty(ZigZag, 'Companion', {
    get: ZigZag$Companion_getInstance
  });
  package$builders.ZigZag = ZigZag;
  var package$functions = package$builders.functions || (package$builders.functions = {});
  package$functions.AbsFunctionStudy = AbsFunctionStudy;
  Object.defineProperty(ArithmeticFunctionStudy, 'Companion', {
    get: ArithmeticFunctionStudy$Companion_getInstance
  });
  package$functions.ArithmeticFunctionStudy = ArithmeticFunctionStudy;
  Object.defineProperty(BuyingPressureStudy, 'Companion', {
    get: BuyingPressureStudy$Companion_getInstance
  });
  package$functions.BuyingPressureStudy = BuyingPressureStudy;
  Object.defineProperty(CloseLocationValueFunctionStudy, 'Companion', {
    get: CloseLocationValueFunctionStudy$Companion_getInstance
  });
  package$functions.CloseLocationValueFunctionStudy = CloseLocationValueFunctionStudy;
  package$functions.CumulativeSumFunctionStudy = CumulativeSumFunctionStudy;
  package$functions.DiffDivPrevFunctionStudy = DiffDivPrevFunctionStudy;
  package$functions.DiffPrevFunctionStudy = DiffPrevFunctionStudy;
  Object.defineProperty(DirectionalIndexFunctionStudy, 'Companion', {
    get: DirectionalIndexFunctionStudy$Companion_getInstance
  });
  package$functions.DirectionalIndexFunctionStudy = DirectionalIndexFunctionStudy;
  Object.defineProperty(DirectionalMovementFunctionStudy, 'Companion', {
    get: DirectionalMovementFunctionStudy$Companion_getInstance
  });
  package$functions.DirectionalMovementFunctionStudy = DirectionalMovementFunctionStudy;
  package$functions.DisplacementFunctionStudy = DisplacementFunctionStudy;
  Object.defineProperty(DorseyTrendFunctionStudy, 'Companion', {
    get: DorseyTrendFunctionStudy$Companion_getInstance
  });
  package$functions.DorseyTrendFunctionStudy = DorseyTrendFunctionStudy;
  Object.defineProperty(DynamicMomentumIndexDynamicLength, 'Companion', {
    get: DynamicMomentumIndexDynamicLength$Companion_getInstance
  });
  package$functions.DynamicMomentumIndexDynamicLength = DynamicMomentumIndexDynamicLength;
  package$functions.FullRangeStandardDeviationFunctionStudy = FullRangeStandardDeviationFunctionStudy;
  package$functions.HighestAllFunctionStudy = HighestAllFunctionStudy;
  package$functions.HighestFunctionStudy = HighestFunctionStudy;
  package$functions.HighestHighPeriodStudy = HighestHighPeriodStudy;
  package$functions.IntradaySumFunctionStudy = IntradaySumFunctionStudy;
  package$functions.LinearDeviationFunctionStudy = LinearDeviationFunctionStudy;
  package$functions.LinearRegressionCurveFunctionStudy = LinearRegressionCurveFunctionStudy;
  package$functions.LnDivPrevFunctionStudy = LnDivPrevFunctionStudy;
  package$functions.LogarithmFunctionStudy = LogarithmFunctionStudy;
  package$functions.LowestFunctionStudy = LowestFunctionStudy;
  package$functions.LowestLowPeriodStudy = LowestLowPeriodStudy;
  Object.defineProperty(MaxValueFunctionStudy, 'Companion', {
    get: MaxValueFunctionStudy$Companion_getInstance
  });
  package$functions.MaxValueFunctionStudy = MaxValueFunctionStudy;
  Object.defineProperty(MinValueFunctionStudy, 'Companion', {
    get: MinValueFunctionStudy$Companion_getInstance
  });
  package$functions.MinValueFunctionStudy = MinValueFunctionStudy;
  Object.defineProperty(MoneyFlowFunctionStudy, 'Companion', {
    get: MoneyFlowFunctionStudy$Companion_getInstance
  });
  package$functions.MoneyFlowFunctionStudy = MoneyFlowFunctionStudy;
  package$functions.MovingAverageExponentialStudy = MovingAverageExponentialStudy;
  package$functions.MovingAverageSimpleStudy = MovingAverageSimpleStudy;
  Object.defineProperty(MovingAverageSmoothedStudy, 'Companion', {
    get: MovingAverageSmoothedStudy$Companion_getInstance
  });
  package$functions.MovingAverageSmoothedStudy = MovingAverageSmoothedStudy;
  package$functions.MovingAverageWeightedStudy = MovingAverageWeightedStudy;
  Object.defineProperty(NegativeVolumeIndexFunctionStudy, 'Companion', {
    get: NegativeVolumeIndexFunctionStudy$Companion_getInstance
  });
  package$functions.NegativeVolumeIndexFunctionStudy = NegativeVolumeIndexFunctionStudy;
  Object.defineProperty(PriceAggregationSourceFunctionStudy, 'Companion', {
    get: PriceAggregationSourceFunctionStudy$Companion_getInstance
  });
  package$functions.PriceAggregationSourceFunctionStudy = PriceAggregationSourceFunctionStudy;
  package$functions.PriceSourceFunctionStudy = PriceSourceFunctionStudy;
  package$functions.RelativeVolatilityFunctionStudy = RelativeVolatilityFunctionStudy;
  package$functions.SignFunctionStudy = SignFunctionStudy;
  package$functions.SimpleWeightedSumFunctionStudy = SimpleWeightedSumFunctionStudy;
  package$functions.StandardDeviationFunctionStudy = StandardDeviationFunctionStudy;
  package$functions.StandardErrorOfEstimationFunctionStudy = StandardErrorOfEstimationFunctionStudy;
  package$functions.SumFunctionStudy = SumFunctionStudy;
  Object.defineProperty(TrueRangeFunctionStudy, 'Companion', {
    get: TrueRangeFunctionStudy$Companion_getInstance
  });
  package$functions.TrueRangeFunctionStudy = TrueRangeFunctionStudy;
  package$functions.WildersAverageStudy = WildersAverageStudy;
  Object.defineProperty(WindowFunctionStudy, 'Companion', {
    get: WindowFunctionStudy$Companion_getInstance
  });
  package$functions.WindowFunctionStudy = WindowFunctionStudy;
  var package$hardcoded = package$functions.hardcoded || (package$functions.hardcoded = {});
  package$hardcoded.LinearRegressionFunctionStudy = LinearRegressionFunctionStudy;
  Object.defineProperty(ParabolicSarFunctionStudy, 'Companion', {
    get: ParabolicSarFunctionStudy$Companion_getInstance
  });
  package$hardcoded.ParabolicSarFunctionStudy = ParabolicSarFunctionStudy;
  package$hardcoded.SpearmansRhoStudy = SpearmansRhoStudy;
  package$hardcoded.SwingIndexRatioStudy = SwingIndexRatioStudy;
  Object.defineProperty(ZigZagFunctionStudy, 'Companion', {
    get: ZigZagFunctionStudy$Companion_getInstance
  });
  package$hardcoded.ZigZagFunctionStudy = ZigZagFunctionStudy;
  var package$compatibility = package$dxst.compatibility || (package$dxst.compatibility = {});
  package$compatibility.Function = Function;
  Object.defineProperty(package$compatibility, 'MathUtils', {
    get: MathUtils_getInstance
  });
  var package$functions_0 = package$dxst.functions || (package$dxst.functions = {});
  package$functions_0.AbsFunction = AbsFunction;
  package$functions_0.ArithmeticFunction = ArithmeticFunction;
  Object.defineProperty(ArithmeticOperation, 'PLUS', {
    get: ArithmeticOperation$PLUS_getInstance
  });
  Object.defineProperty(ArithmeticOperation, 'MINUS', {
    get: ArithmeticOperation$MINUS_getInstance
  });
  Object.defineProperty(ArithmeticOperation, 'MULT', {
    get: ArithmeticOperation$MULT_getInstance
  });
  Object.defineProperty(ArithmeticOperation, 'DIV', {
    get: ArithmeticOperation$DIV_getInstance
  });
  Object.defineProperty(ArithmeticOperation, 'DIV_ZERO', {
    get: ArithmeticOperation$DIV_ZERO_getInstance
  });
  Object.defineProperty(ArithmeticOperation, 'MIDPOINT', {
    get: ArithmeticOperation$MIDPOINT_getInstance
  });
  Object.defineProperty(ArithmeticOperation, 'MAX', {
    get: ArithmeticOperation$MAX_getInstance
  });
  Object.defineProperty(ArithmeticOperation, 'DIFF_DIV_SUM_ZERO', {
    get: ArithmeticOperation$DIFF_DIV_SUM_ZERO_getInstance
  });
  Object.defineProperty(ArithmeticOperation, 'ABSDIFF_DIV_SUM', {
    get: ArithmeticOperation$ABSDIFF_DIV_SUM_getInstance
  });
  Object.defineProperty(ArithmeticOperation, 'DIFF_DIV_RIGHT', {
    get: ArithmeticOperation$DIFF_DIV_RIGHT_getInstance
  });
  Object.defineProperty(ArithmeticOperation, 'DIFF_DIV_LEFT', {
    get: ArithmeticOperation$DIFF_DIV_LEFT_getInstance
  });
  Object.defineProperty(ArithmeticOperation, 'POW', {
    get: ArithmeticOperation$POW_getInstance
  });
  package$functions_0.ArithmeticOperation = ArithmeticOperation;
  package$functions_0.BuyingPressure = BuyingPressure;
  package$functions_0.CloseLocationValueFunction = CloseLocationValueFunction;
  package$functions_0.CombineFunction = CombineFunction;
  Object.defineProperty(package$functions_0, 'CommonFunctions', {
    get: CommonFunctions_getInstance
  });
  package$functions_0.ConstantFunction = ConstantFunction;
  package$functions_0.CumulativeSumFunction = CumulativeSumFunction;
  package$functions_0.CumulativeSumWithinSessionFunction = CumulativeSumWithinSessionFunction;
  package$functions_0.DiffDivPrevFunction = DiffDivPrevFunction;
  package$functions_0.DiffPrevFunction = DiffPrevFunction;
  package$functions_0.DirectionalIndexFunction = DirectionalIndexFunction;
  package$functions_0.DirectionalMovementFunction = DirectionalMovementFunction;
  package$functions_0.DisplacementFunction = DisplacementFunction;
  Object.defineProperty(DorseyTrendFunction, 'Companion', {
    get: DorseyTrendFunction$Companion_getInstance
  });
  Object.defineProperty(DorseyTrendFunction$Trend, 'UP', {
    get: DorseyTrendFunction$Trend$UP_getInstance
  });
  Object.defineProperty(DorseyTrendFunction$Trend, 'DOWN', {
    get: DorseyTrendFunction$Trend$DOWN_getInstance
  });
  DorseyTrendFunction.Trend = DorseyTrendFunction$Trend;
  package$functions_0.DorseyTrendFunction = DorseyTrendFunction;
  package$functions_0.ETHPriceSourceFunction = ETHPriceSourceFunction;
  package$functions_0.Equals = Equals;
  package$functions_0.Floor = Floor;
  package$functions_0.FullRangeStandardDeviationFunction = FullRangeStandardDeviationFunction;
  package$functions_0.HighestAllFunction = HighestAllFunction;
  package$functions_0.HighestFunction = HighestFunction;
  package$functions_0.HighestHighPeriod = HighestHighPeriod;
  _.IfFunction = IfFunction;
  package$functions_0.IntradaySumFunction = IntradaySumFunction;
  package$functions_0.InvertFunction = InvertFunction;
  package$functions_0.LimitFunction = LimitFunction;
  package$functions_0.LinearDeviationFunction = LinearDeviationFunction;
  package$functions_0.LinearRegressionCurveFunction = LinearRegressionCurveFunction;
  package$functions_0.LnDivPrevFunction = LnDivPrevFunction;
  package$functions_0.LogarithmFunction = LogarithmFunction;
  package$functions_0.LowestFunction = LowestFunction;
  package$functions_0.LowestLowPeriod = LowestLowPeriod;
  package$functions_0.MapFunction = MapFunction;
  package$functions_0.MapToOneFunction = MapToOneFunction;
  package$functions_0.MaxValueFunction = MaxValueFunction;
  package$functions_0.MinValueFunction = MinValueFunction;
  package$functions_0.MoneyFlowFunction = MoneyFlowFunction;
  package$functions_0.MovingAverageExponential = MovingAverageExponential;
  package$functions_0.MovingAverageSimple = MovingAverageSimple;
  package$functions_0.MovingAverageSmoothed = MovingAverageSmoothed;
  package$functions_0.MovingAverageWeighted = MovingAverageWeighted;
  package$functions_0.NegativeVolumeIndexFunction = NegativeVolumeIndexFunction;
  _.NotZero = NotZero;
  package$functions_0.PredicateFunction = PredicateFunction;
  package$functions_0.PriceAggregatedSourceFunction = PriceAggregatedSourceFunction;
  package$functions_0.PriceSourceFunction = PriceSourceFunction;
  Object.defineProperty(RelativeVolatilityFunction, 'Companion', {
    get: RelativeVolatilityFunction$Companion_getInstance
  });
  package$functions_0.RelativeVolatilityFunction = RelativeVolatilityFunction;
  package$functions_0.SeriesCrossingPoints = SeriesCrossingPoints;
  Object.defineProperty(SessionSet, 'WITHOUT_LAST', {
    get: SessionSet$WITHOUT_LAST_getInstance
  });
  Object.defineProperty(SessionSet, 'ONLY_LAST', {
    get: SessionSet$ONLY_LAST_getInstance
  });
  Object.defineProperty(SessionSet, 'ONLY_LAST_FOR_ALL_CANDLES', {
    get: SessionSet$ONLY_LAST_FOR_ALL_CANDLES_getInstance
  });
  package$functions_0.SessionSet = SessionSet;
  package$functions_0.SignFunction = SignFunction;
  package$functions_0.SimpleWeightedSumFunction = SimpleWeightedSumFunction;
  package$functions_0.StandardDeviationFunction = StandardDeviationFunction;
  package$functions_0.StandardErrorOfEstimationFunction = StandardErrorOfEstimationFunction;
  package$functions_0.SumFunction = SumFunction;
  package$functions_0.TrueRangeFunction = TrueRangeFunction;
  package$functions_0.WildersAverage = WildersAverage;
  package$functions_0.WindowFunction_init_y92xk1$ = WindowFunction_init;
  package$functions_0.WindowFunction_init_wlsyhm$ = WindowFunction_init_0;
  package$functions_0.WindowFunction = WindowFunction;
  package$functions_0.ZeroFunction = ZeroFunction;
  var package$abstracts = package$functions_0.abstracts || (package$functions_0.abstracts = {});
  package$abstracts.AbstractCachingFunction = AbstractCachingFunction;
  package$abstracts.BackRangeDependentFunction = BackRangeDependentFunction;
  var package$hardcoded_0 = package$functions_0.hardcoded || (package$functions_0.hardcoded = {});
  package$hardcoded_0.DynamicMomentumIndexFunction = DynamicMomentumIndexFunction;
  Object.defineProperty(FractalOperation, 'UP', {
    get: FractalOperation$UP_getInstance
  });
  Object.defineProperty(FractalOperation, 'DOWN', {
    get: FractalOperation$DOWN_getInstance
  });
  package$hardcoded_0.FractalOperation = FractalOperation;
  _.KaufmanNamaFunction = KaufmanNamaFunction;
  package$hardcoded_0.LinearRegressionFunction = LinearRegressionFunction;
  package$hardcoded_0.ParabolicSarFunction = ParabolicSarFunction;
  package$hardcoded_0.SchaffTrendFrac = SchaffTrendFrac;
  package$hardcoded_0.SpearmansRho = SpearmansRho;
  package$hardcoded_0.SwingIndexRatio = SwingIndexRatio;
  package$hardcoded_0.WilliamsADFunction = WilliamsADFunction;
  package$hardcoded_0.WilliamsFractalFilter = WilliamsFractalFilter;
  package$hardcoded_0.ZigZagFunction = ZigZagFunction;
  var package$tdsequential = package$functions_0.tdsequential || (package$functions_0.tdsequential = {});
  package$tdsequential.CountdownFunction = CountdownFunction;
  package$tdsequential.PerfectCountdownFunction = PerfectCountdownFunction;
  package$tdsequential.PerfectSetupFunction = PerfectSetupFunction;
  Object.defineProperty(TDBuySell, 'BUY', {
    get: TDBuySell$BUY_getInstance
  });
  Object.defineProperty(TDBuySell, 'SELL', {
    get: TDBuySell$SELL_getInstance
  });
  package$tdsequential.TDBuySell = TDBuySell;
  package$tdsequential.PriceFlipFunction = PriceFlipFunction;
  package$tdsequential.SetupFunction = SetupFunction;
  Object.defineProperty(TDSupportResistance, 'Support', {
    get: TDSupportResistance$Support_getInstance
  });
  Object.defineProperty(TDSupportResistance, 'Resistance', {
    get: TDSupportResistance$Resistance_getInstance
  });
  package$tdsequential.TDSupportResistance = TDSupportResistance;
  package$tdsequential.SupportResistanceFunction = SupportResistanceFunction;
  var package$util = package$dxst.util || (package$dxst.util = {});
  Object.defineProperty(package$util, 'WilliamsFractalUtils', {
    get: WilliamsFractalUtils_getInstance
  });
  package$util.epochMillis = epochMillis;
  nfastend = 0.666;
  nslowend = 0.0645;
  notZero = notZero$lambda;
  Kotlin.defineModule('dxstudies', _);
  return _;
}));
