/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { Candle } from '@dx-private/dxchart5-light/dist/chart/model/candle.model';
export interface CandlesGeneratorConfig {
    readonly quantity: number;
    readonly startPrice: number;
    readonly startTimestamp: number;
    readonly period: number;
    readonly candleSize: number;
    readonly candleDiversity: number;
    readonly highLowSize: number;
    readonly highLowDiversity: number;
    readonly volumeSize: number;
    readonly volumeDiversity: number;
    readonly avgTrendLength: {
        readonly up: number;
        readonly down: number;
        readonly sw: number;
    };
    readonly randomSeed: number;
}
export declare const defaultConfig: CandlesGeneratorConfig;
export declare const generateCandle: (timestamp: number, open: number, type: 'bear' | 'bull' | 'doji', config: CandlesGeneratorConfig, random: () => number) => Candle;
export declare function mergeCandleGeneratorConfig(config: Partial<CandlesGeneratorConfig>, defaultConf?: CandlesGeneratorConfig): CandlesGeneratorConfig;
/**
 * Generates mock candles data.
 *
 *   quantity - avg number of candles
 *   startY - avg candle Y to start generation with
 *   avgCandleSize - avg size of candle
 *   avgTrendLength:
 *     sw - avg length of SIDEWAYS trend
 *     down - avg length of DOWN trend
 *     up - avg length of UP trend
 *   withVolume - add random volumes or not
 *
 * @return Array<Candle>
 * @param _config
 */
export declare const generateCandles: (_config?: Partial<CandlesGeneratorConfig>) => Candle[];
