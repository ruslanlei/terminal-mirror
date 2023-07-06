/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
export interface PriceDiffGeneratorConfig {
    readonly volatility?: number;
}
/**
 * Creates price diff generator which calculates diff according the following formula:
 * diff = (1 - volatility / 2) + volatility * Math.random()
 * @doc-tags tricky
 * @param config
 */
export declare function createPriceDiffGenerator(config?: PriceDiffGeneratorConfig): Generator<number, void, unknown>;
