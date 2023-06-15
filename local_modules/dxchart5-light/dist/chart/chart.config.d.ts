/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { PriceAxisType } from '../common/numeric-axis-labels.generator';
import { MagnetTarget } from './components/cross_tool/cross-tool.component';
import { CrossToolType } from './components/cross_tool/cross-tool.model';
import { EventType } from './components/events/events.model';
import { HighlightType } from './components/highlights/hightlights.model';
import { WaterMarkPositionType } from './components/watermark/water-mark.drawer';
import { TimeFormatWithDuration } from './components/x_axis/time/parser/time-formats.model';
import { DateTimeFormatConfig } from './config/labels.config';
import { DrawerType } from './drawers/drawing-manager';
import { DateTimeFormatter, TimeFormatterConfig } from './time.formatter';
import { DeepPartial, tobject } from './utils';
import { MergeOptions } from './utils/merge.utils';
export declare const MAIN_FONT = "Open Sans Semibold, sans-serif";
export interface BarTypes {
    candle: unknown;
    bar: unknown;
    line: unknown;
    area: unknown;
    scatterPlot: unknown;
    hollow: unknown;
    histogram: unknown;
    baseline: unknown;
    trend: unknown;
}
export type BarType = keyof BarTypes;
export declare const LastBarRedrawableBarTypes: BarType[];
export declare const isLastBarRedrawAvailable: (type: BarType) => boolean;
/**
 * Full chart-core default config.
 * @doc-tags chart-core,default-config
 * @doc-tags-name getDefaultConfig=xl
 */
export declare const getDefaultConfig: () => FullChartConfig;
/**
 * Merges a partial chart configuration object with a default chart configuration object.
 * @param {PartialChartConfig} config - The partial chart configuration object to merge.
 * @param {FullChartConfig} defaultConfig - The default chart configuration object to merge with.
 * @returns {FullChartConfig} - The merged chart configuration object.
 */
export declare function mergeWithDefaultConfig(config: PartialChartConfig, defaultConfig?: FullChartConfig): FullChartConfig;
/**
 * Merges a partial chart configuration object with the default configuration object and returns a new object with the merged values.
 * @param {PartialChartConfig} config - The partial chart configuration object to merge with the default configuration object.
 * @param {FullChartConfig} defaultConfig - The default chart configuration object to merge with the partial configuration object. If not provided, the default configuration object will be retrieved using getDefaultConfig() function.
 * @returns {FullChartConfig} - A new object with the merged values of the partial and default configuration objects.
 * @todo Implement deep copy of the partial configuration object before merging.
 */
export declare function mergeWithDefaultConfigCopy(config: PartialChartConfig, defaultConfig?: FullChartConfig): FullChartConfig;
/**
 * This function rewrites the properties of an object with the properties of another object.
 * @param {object} current - The object to be rewritten.
 * @param {object} newObj - The object containing the new properties.
 * @returns {void}
 */
export declare function rewrite(current: tobject, newObj: tobject): void;
/**
 * This function is intended to be used for merging config objects
 * Current chart architecture with passing references to same config between different parts of the system makes this function unusable
 * TODO: Think about replacing direct references in constructor argument with functions that returns config.
 * E.g. ChartBootstrap passes direct reference to config to ChartDrawer
 * Once reference updated in ChartBootstrap, it's not updated in ChartDrawer, it's still pointing to the previous version of config
 */
export declare function immutableMerge<T>(base: Partial<T>, override: Partial<T>, options: MergeOptions): T;
export interface DateFormat {
    format: string;
    super: string;
}
export interface DateFormats {
    minute: DateFormat;
    day: DateFormat;
}
export interface FullChartColors {
    candleTheme: CandleTheme;
    activeCandleTheme: CandleTheme;
    barTheme: LineStyleTheme;
    lineTheme: LineStyleTheme;
    areaTheme: AreaStyleTheme;
    chartAreaTheme: ChartAreaTheme;
    scatterPlot: ScatterPlotStyle;
    baseLineTheme: BaselineStyleTheme;
    histogram: HistogramColors;
    highlights: Record<HighlightType, HighlightsColors>;
    volume: VolumeColors;
    secondaryChartTheme: SecondaryChartTheme[];
    waterMarkTheme: {
        firstRowColor: string;
        secondRowColor: string;
        thirdRowColor: string;
    };
    highLowTheme: {
        highColor: string;
        lowColor: string;
    };
    yAxis: {
        backgroundColor: string;
        backgroundHoverColor: string;
        zeroPercentLine: string;
        labelTextColor: string;
        labelInvertedTextColor: string;
        labelBoxColor: string;
        labelDescriptionFillColor: string;
        rectLabelTextColor: string;
        rectLabelInvertedTextColor: string;
    };
    xAxis: {
        backgroundColor: string;
        labelTextColor: string;
    };
    crossTool: {
        lineColor: string;
        labelBoxColor: string;
        labelTextColor: string;
    };
    events: {
        earnings: EventColors;
        dividends: EventColors;
        splits: EventColors;
        'conference-calls': EventColors;
    };
    navigationMap: {
        buttonColor: string;
        knotColor: string;
        sliderColor: string;
        backgroundColor: string;
        buttonArrowColor: string;
        knotLineColor: string;
        knotBorderColor: string;
        timeLabelsTextColor: string;
        mapFillColor: string;
        mapGradientTopColor?: string;
        mapGradientBottomColor?: string;
        mapColor: string;
    };
    instrumentInfo: {
        textColor: string;
    };
    paneResizer: {
        lineColor: string;
        bgColor: string;
        bgHoverColor: string;
    };
    labels: YAxisLabelsColors;
}
export interface DateFormatter {
    applyPattern?: (pattern: string) => string;
    createFormatterFunction?: (pattern: string) => DateTimeFormatter;
    utcTimeOverride?: {
        pattern?: string;
        test?: (pattern: string) => void;
    };
}
/**
 * The main configuration file for chart-core.
 * Includes all components' configurations, global configs like dateFormatter, and colors.
 */
export interface FullChartConfig extends TimeFormatterConfig {
    /**
     * Controls how chart series are positioned horizontally and vertically.
     * Other configurations like: inverse, lockRatio etc.
     */
    scale: ChartScale;
    /**
     * Group of component configurations. Chart component is a single visual object on chart.
     * Examples: chart itself, events, x-axis, highlights, cross tool.
     */
    components: ChartComponents;
    /**
     * All colors in chart-core are configured here.
     */
    colors: FullChartColors;
    /**
     * Date and time formatting configuration.
     */
    dateFormatter?: DateFormatter;
    /**
     * Timezone to use on chart X axis labels and any other timestamps.
     * Examples: Africa/Accra, Europe/Moscow, Asia/Tehran.
     */
    timezone: string;
    /**
     * If set - chart canvas will have fixed size always.
     */
    fixedSize?: {
        width: number;
        height: number;
    };
    /**
     * Right to left mode. Used in drawings (like text drawing) calculation.
     */
    rtl: boolean;
    /**
     * Initial visual order of chart drawers. Reorder to put volumes on top of candles for example.
     */
    drawingOrder: DrawerType[];
    useUTCTimeOverride: boolean;
    animation: AnimationConfig;
    logEvents: boolean;
}
export type PartialChartConfig = DeepPartial<FullChartConfig>;
export interface ChartScale {
    /**
     * Auto scale will always fit whole chart series in viewport.
     */
    auto: boolean;
    /**
     * True - will zoom to cursor on mouse wheel. False - zoom to last candle.
     */
    zoomToCursor: boolean;
    /**
     * Locks the ratio between price/time, so when zooming it will feel like google maps.
     */
    lockPriceToBarRatio: boolean;
    /**
     * Inverses the Y scale vertically. TODO move to components.yAxis.
     */
    inverse: boolean;
    /**
     * Do auto scale (even if it's not enabled in config) after instrument change.
     */
    autoScaleOnCandles: boolean;
    /**
     * When dragging chart under specific angle - will automatically disable auto-scale.
     */
    autoScaleDisableOnDrag: AutoScaleDisableOnDrag;
    /**
     * 0..1 ratio of full viewport; 0.5 = middle, 0.75 = 3/4 of viewport
     */
    zoomSensitivity: number;
    /**
     * Defines how much items (candles) will be in viewport when chart applies basic scale
     */
    defaultViewportItems: number;
    /**
     * Adjust x viewport when y-axis width is changed, so x zoom remains the same
     */
    keepZoomXOnYAxisChange: boolean;
}
export interface AutoScaleDisableOnDrag {
    enabled: boolean;
    /**
     * The angle of mouse movement. Default - Math.PI / 9.
     */
    edgeAngle: number;
    /**
     * Distance that mouse should travel vertically in px. Default - 80.
     */
    yDiff: number;
}
export interface ChartComponents {
    chart: ChartConfigComponentsChart;
    xAxis: ChartConfigComponentsXAxis;
    yAxis: ChartConfigComponentsYAxis;
    grid: GridComponentConfig;
    volumes: ChartConfigComponentsVolumes;
    offsets: ChartConfigComponentsOffsets;
    waterMark: ChartConfigComponentsWaterMark;
    events: ChartConfigComponentsEvents;
    highLow: ChartConfigComponentsHighLow;
    crossTool: ChartConfigComponentsCrossTool;
    highlights: ChartConfigComponentsHighlights;
    navigationMap: ChartConfigComponentsNavigationMap;
    baseline: ChartConfigComponentsBaseline;
    /**
     * Horizontal resizer between panes
     */
    paneResizer: ChartConfigComponentsPaneResizer;
}
export interface ChartConfigComponentsChart {
    /**
     * The type of chart. Candle, bar, area and others.
     */
    type: BarType;
    /**
     * Shows the border of candle. Useful for hollow-candles and to increase contrast on thin candles.
     */
    showCandlesBorder: boolean;
    /**
     * Shows the border for active candle (tapped by finger on mobile devices).
     */
    showActiveCandlesBorder: boolean;
    /**
     * Shows candle wicks - high and low.
     */
    showWicks: boolean;
    candleLineWidth: number;
    barLineWidth: number;
    lineWidth: number;
    areaLineWidth: number;
    /**
     * The minimum amount of candles in viewport. It will not be possible to make fewer than that by using zoom.
     */
    minCandles: number;
    defaultZoomCandleWidth: number;
    minWidth: number;
    zoomStep: number;
    candlePaddingPercent: number;
    highlightActiveCandle: boolean;
    cursor: CursorType;
    selectedWidth: number;
    minCandlesOffset: number;
    histogram: ChartConfigComponentsHistogram;
}
export interface ChartConfigComponentsEvents {
    /**
     * Toggle events visibility.
     */
    visible: boolean;
    eventsVisibility: Record<EventType, boolean>;
    /**
     * Height of events area in pixels
     */
    height: number;
    /**
     * Configure events cursor type.
     */
    cursor: CursorType;
    /**
     * Configure x axis labels
     */
    xAxisLabelFormat: Array<DateTimeFormatConfig>;
    /**
     * Configure icons, the format is string which contains svg tag, for example:
     * '<svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
     * 		<path d="M1.06066 6.5L6.5 1.06066L11.9393 6.5L6.5 11.9393L1.06066 6.5Z" stroke="#D92C40" stroke-width="1.5"/>
     * 	</svg>'
     */
    icons?: ChartConfigComponentsEventsIcons;
}
export interface ChartConfigComponentsXAxis {
    visible: boolean;
    cursor: CursorType;
    formatsForLabelsConfig: Record<TimeFormatWithDuration, string>;
    padding: {
        top?: number;
        bottom?: number;
    };
    fontSize: number;
    fontFamily: string;
    fontStyle: string;
}
export type YAxisAlign = 'left' | 'right';
export interface ChartConfigComponentsYAxis {
    visible: boolean;
    /**
     * Type of Y axis. Currently supported 'regular', 'percent', 'logarithmic'.
     */
    type: PriceAxisType;
    /**
     * Align Y axis left or right.
     */
    align: YAxisAlign;
    /**
     * Configures the labels on Y axis.
     */
    labels: YAxisLabels;
    /**
     * Override appearance of different label types. Useful to change all labels of the same type.
     */
    typeConfig: YAxisTypeConfig;
    valueLines: number;
    /**
     * Always show zero line for percent scale.
     */
    zeroPercentLine: boolean;
    /**
     * Allow to scale chart vertically by dragging Y axis with mouse.
     */
    customScale: boolean;
    /**
     * Allows to double-click on Y axis to turn on auto-scale.
     */
    customScaleDblClick: boolean;
    width: number;
    cursor: CursorType;
    labelBoxMargin: {
        top: number;
        bottom: number;
        end: number;
        start: number;
    };
    fontSize: number;
    fontFamily: string;
}
export interface ChartConfigComponentsOffsets {
    visible: boolean;
    /**
     * Top offset, measured in percents of chart height.
     */
    top: number;
    /**
     * Left offset, measured in amount of candles.
     */
    left: number;
    /**
     * Right offset, measured in amount of candles.
     */
    right: number;
    /**
     * Bottom offset, measured in percents of chart height.
     */
    bottom: number;
}
export interface ChartConfigComponentsWaterMark {
    visible: boolean;
    /**
     * Position on the screen.
     */
    position: WaterMarkPositionType;
    offsetX: number;
    offsetY: number;
    logoWidth: number;
    logoHeight: number;
    fontFamily: string;
    /**
     * Font size for first text line.
     */
    firstRowFontSize: number;
    /**
     * Padding after first text line.
     */
    firstRowBottomPadding: number;
    /**
     * Font size for second text line.
     */
    secondRowFontSize: number;
    /**
     * Padding after second text line.
     */
    secondRowBottomPadding: number;
    /**
     * Font size for third text line.
     */
    thirdRowFontSize: number;
    /**
     * Padding after third text line.
     */
    thirdRowBottomPadding: number;
}
export interface ChartConfigComponentsHighLow {
    visible: boolean;
    /**
     * Font config of high/low labels.
     */
    font: string;
}
export interface ChartConfigComponentsCrossTool {
    /**
     * The type of cross tool.  Visibility is also contolled by type, set 'none' to hide the cross tool.
     */
    type: CrossToolType;
    /**
     * Line dash for cross tool.
     */
    lineDash: Array<number>;
    /**
     * When discrete is ON - the cross tool X coordinate will always be at the middle of candle.
     */
    discrete: boolean;
    /**
     * Cross tool Y coordinate can magnet to OHLC values of candle.
     */
    magnetTarget: MagnetTarget;
    /**
     * Format of X label config for different periods.
     */
    xAxisLabelFormat: Array<DateTimeFormatConfig>;
    /**
     * X label appearance.
     */
    xLabel: {
        padding: {
            top: number;
            bottom: number;
            right: number;
            left: number;
        };
        margin: {
            top: number;
            bottom?: number;
        };
    };
    /**
     * X label appearance.
     */
    yLabel: {
        padding: {
            top: number;
            bottom: number;
            end: number;
            start: number;
        };
        type: YAxisLabelAppearanceType;
    };
}
export interface ChartConfigComponentsHighlights {
    visible: boolean;
    /**
     * Border of highlights (session breaks for example).
     */
    border: {
        width: number;
        dash: [number, number];
    };
    fontFamily: string;
    fontSize: number;
}
export interface ChartConfigComponentsVolumes {
    visible: boolean;
    /**
     * Show volumes in overlaying mode or as sub-chart like a study.
     */
    showSeparately: boolean;
    volumeFillColor: string;
    valueLines: number;
    barCapSize: number;
    volumeBarSpace: number;
}
export interface ChartConfigComponentsHistogram {
    barCapSize: number;
}
export interface GridComponentConfig {
    visible: boolean;
    /**
     * Shows vertical grid lines.
     */
    vertical: boolean;
    /**
     * Shows horizontal grid lines.
     */
    horizontal: boolean;
    /**
     * Width of grid lines in pixels.
     */
    width: number;
    /**
     * Line dash configuration like [1,2].
     */
    dash: Array<number>;
    color?: string;
}
export interface ChartConfigComponentsNavigationMap {
    visible: boolean;
    allCandlesHistory: boolean;
    timeLabels: {
        visible: boolean;
        dateFormat: string;
        fontFamily: string;
        fontSize: number;
        padding: {
            x: number;
            y: number;
        };
    };
    cursors: {
        chart: CursorType;
        buttonLeft: CursorType;
        buttonRight: CursorType;
        leftResizer: CursorType;
        rightResizer: CursorType;
        slider: CursorType;
    };
    knots: {
        height: number;
        width: number;
        border: number;
        lineWidth: number;
    };
    minSliderWindowWidth: number;
}
export interface ChartConfigComponentsBaseline {
    cursor: CursorType;
    dragZone: number;
    height: number;
}
export interface ChartConfigComponentsPaneResizer {
    visible: boolean;
    /**
     * Height of resizer in pixels.
     */
    height: number;
    /**
     * Make the horizontal line fixed and disable resizing.
     */
    fixedMode: boolean;
    /**
     * Hover area of resizer in pixels.
     */
    dragZone: number;
    cursor: string;
}
export interface AnimationConfig {
    moveDuration: number;
    candleDuration: number;
    paneResizer: {
        bgMode: boolean;
        enabled: boolean;
        duration: number;
    };
    yAxis: {
        /**
         * Deprecated. Old hover animation on Y axis.
         */
        background: {
            enabled: boolean;
            duration: number;
        };
    };
}
export interface CandleTheme {
    upColor: string;
    downColor: string;
    noneColor: string;
    upWickColor: string;
    downWickColor: string;
    noneWickColor: string;
    borderOpacity?: number;
}
export interface HighlightsColors {
    border: string;
    background: string;
    label: string;
}
export interface EventColors {
    color: string;
}
export interface HistogramColors {
    upCap: string;
    upBottom: string;
    upBright: string;
    downCap: string;
    downBottom: string;
    downBright: string;
    noneCap: string;
    noneBottom: string;
    noneBright: string;
}
export interface VolumeColors {
    downCapColor: string;
    upCapColor: string;
    noneCapColor: string;
    downBarColor: string;
    upBarColor: string;
    noneBarColor: string;
}
export interface LineStyleTheme {
    upColor: string;
    downColor: string;
    noneColor: string;
}
export interface ScatterPlotStyle {
    mainColor: string;
}
export interface AreaStyleTheme {
    lineColor: string;
    startColor?: string;
    stopColor?: string;
}
export interface BaselineStyleTheme {
    upperSectionStrokeColor: string;
    lowerSectionStrokeColor: string;
    upperSectionFillColor: string;
    lowerSectionFillColor: string;
    baselineColor: string;
}
export interface SecondaryChartTheme {
    lineTheme: LineStyleTheme;
    areaTheme: AreaStyleTheme;
}
export interface ChartAreaTheme {
    backgroundMode: 'regular' | 'gradient';
    backgroundColor: string;
    backgroundGradientTopColor: string;
    backgroundGradientBottomColor: string;
    axisColor: string;
    gridColor: string;
}
export type ChartColors = DeepPartial<FullChartColors>;
/**
 * These labels always be in chart, even user has not set them from config.
 */
export type DefaultYAxisLabelType = 'lastPrice' | 'countdownToBarClose';
/**
 * These labels are optional. If user has not set them, labels will not appear on Y-axis.
 */
export type ConfigurableYAxisLabelType = 'bidAsk' | 'highLow' | 'prevDayClose' | 'prePostMarket';
export type YAxisLabelType = DefaultYAxisLabelType | ConfigurableYAxisLabelType | string;
export type YAxisLabelMode = 'none' | 'line' | 'line-label' | 'label';
export type YAxisLabelAppearanceType = 'badge' | 'rectangle' | 'plain';
export interface YAxisLabelConfig {
    mode: YAxisLabelMode;
    type: YAxisLabelAppearanceType;
}
export interface YAxisLabelConfigWithType extends YAxisLabelConfig {
    type: YAxisLabelAppearanceType;
}
export interface YAxisLabelColorConfig {
    boxColor: string;
    textColor?: string;
    descriptionText?: string;
}
export interface YAxisLastPriceLabelColorConfig {
    boxSelected: string;
    boxPositive: string;
    boxNegative: string;
    textSelected: string;
    textNegative: string;
    textPositive: string;
}
export interface YAxisBidAskLabelColorConfig {
    bid: YAxisLabelColorConfig;
    ask: YAxisLabelColorConfig;
}
export interface YAxisHighLowLabelColorConfig {
    high: YAxisLabelColorConfig;
    low: YAxisLabelColorConfig;
}
export interface YAxisPrePostMarketLabelColorConfig {
    pre: YAxisLabelColorConfig;
    post: YAxisLabelColorConfig;
}
export interface YAxisLabels {
    descriptions: boolean;
    /**
     * Settings contains required labels ('lastPrice', 'countDownToBarClose')
     * and optional labels ('bidAsk', 'highLow', 'prevDayClose', 'prePostMarket').
     */
    settings: Record<YAxisLabelType, YAxisLabelConfig>;
}
export interface YAxisTypeConfigProps {
    rounded?: boolean;
    paddings?: {
        top: number;
        bottom: number;
        start: number;
        end: number;
    };
}
export type YAxisTypeConfig = Record<YAxisLabelAppearanceType, YAxisTypeConfigProps>;
export interface YAxisLabelsColors extends Record<YAxisLabelType, tobject> {
    lastPrice: YAxisLastPriceLabelColorConfig;
    bidAsk: YAxisBidAskLabelColorConfig;
    highLow: YAxisHighLowLabelColorConfig;
    prePostMarket: YAxisPrePostMarketLabelColorConfig;
    prevDayClose: YAxisLabelColorConfig;
}
export interface CustomIcon {
    normal: string;
    hover: string;
}
export interface ChartConfigComponentsEventsIcons {
    earnings?: CustomIcon;
    dividends?: CustomIcon;
    splits?: CustomIcon;
    conferenceCalls?: CustomIcon;
}
export type CursorType = string;
