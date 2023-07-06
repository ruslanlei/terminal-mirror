/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
export declare const yAxisDictionary: {
    auto: string;
    lockPrice: string;
    fit: {
        studies: string;
        orders: string;
        positions: string;
    };
    axisType: {
        regular: string;
        percent: string;
        logarithmic: string;
    };
    axisAlign: {
        title: string;
        right: string;
        left: string;
    };
    labelsAndLines: string;
    labels: {
        lastPrice: string;
        studies: string;
        bidAsk: string;
        highLow: string;
        prevDayClose: string;
        prePostMarket: string;
    };
    scale: {
        inverse: string;
        lock: string;
    };
    descriptions: string;
    countDownToBarClose: string;
    fullChartSettings: string;
    buttons: {
        a11y_percent: string;
        a11y_logarithmic: string;
        a11y_regular: string;
        a11y_scaleType: string;
        a11y_sideAlign: string;
    };
};
export type YAxisDictionary = typeof yAxisDictionary;
