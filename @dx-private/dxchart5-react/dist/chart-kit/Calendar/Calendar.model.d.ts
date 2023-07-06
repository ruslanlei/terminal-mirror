/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
export declare enum RangeSide {
    From = 0,
    To = 1
}
export interface DateRangeValue {
    readonly from: Date | undefined;
    readonly to: Date | undefined;
}
