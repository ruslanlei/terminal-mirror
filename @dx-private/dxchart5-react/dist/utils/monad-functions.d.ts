/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { Option } from 'fp-ts/Option';
import { observableOption } from 'fp-ts-rxjs';
import { Observable } from 'rxjs';
export declare const sequenceTOption: <T extends Option<any>[]>(...t: T & {
    readonly 0: Option<any>;
}) => Option<{ [K in keyof T]: [T[K]] extends [Option<infer A>] ? A : never; }>;
export declare const filterOption: <A>() => (ma: observableOption.ObservableOption<A>) => Observable<A>;
export declare const filterMapOption: <A>(source: Observable<Option<A>>) => Observable<A>;
