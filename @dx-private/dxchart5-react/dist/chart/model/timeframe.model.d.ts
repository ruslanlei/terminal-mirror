/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
export type TimestampRange = [number, number];
export type TimeUnits = [number, number];
export declare const timestampRangeEq: import("fp-ts/Eq").Eq<readonly [number, number]>;
