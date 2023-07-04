/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
/**
 * Exposes important chart objects to global scope.
 * Only for development mode.
 * @doc-tags debug
 */
export declare const windowGlobal: {
    multiChartVM: (obj: any) => void;
    chartVMS: (chartId: string, obj: any) => void;
    actionsHistoryVM: (obj: any) => void;
    chartReactAPI: (obj: any) => void;
    chartInstance: (chartId: string, obj: any) => void;
    callTracer: (obj: any) => void;
    quotesGenerator: (obj: any) => void;
};
