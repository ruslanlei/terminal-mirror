/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { Observable } from 'rxjs';
export interface Property<A> extends Observable<A> {
    readonly getValue: () => A;
}
export type PropertyAdapter<A> = [(a: A) => void, Property<A>];
export declare const createPropertyAdapter: <A>(initial: A, cmp?: (a: A, b: A) => boolean) => PropertyAdapter<A>;
export declare function convertToProperty<T>(observable: Observable<T>, initValue: T): Property<T>;
