/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { Option } from 'fp-ts/Option';
export declare const sequenceTOption: <T extends Option<any>[]>(...t: T & {
    readonly 0: Option<any>;
}) => Option<{ [K in keyof T]: [T[K]] extends [Option<infer A>] ? A : never; }>;
export type OptionType<FA extends Option<any>> = FA extends Option<infer A> ? A : never;
