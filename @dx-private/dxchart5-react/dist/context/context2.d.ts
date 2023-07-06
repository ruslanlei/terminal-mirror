/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { Monad2 } from 'fp-ts/Monad';
import { Reader } from 'fp-ts/Reader';
import { Sink } from '../utils/sink';
import { ProductLeft, ProductMap } from '../utils/typeclasses/product-left-coproduct-left.utils';
export declare const URI = "@devexperts/dx-utils//Context";
export type URI = typeof URI;
declare module 'fp-ts/HKT' {
    interface URItoKind2<E, A> {
        [URI]: Context<E, A>;
    }
}
/**
 * Main type of context framework.
 * @doc-tags fp
 */
export interface Context<E, A> extends Reader<E, Sink<A>> {
}
export declare const instanceContext: Monad2<URI> & ProductLeft<URI>;
/**
 * Context reader functions.
 * @doc-tags fp
 */
export declare const context: {
    sequenceT: <E, T extends Context<E, any>[]>(...t: T & {
        readonly 0: Context<E, any>;
    }) => Context<E, { [K in keyof T]: [T[K]] extends [Context<E, infer A>] ? A : never; }>;
    sequenceArray: <E_1, A_1>(ta: Context<E_1, A_1>[]) => Context<E_1, A_1[]>;
    combine: ProductMap<"@devexperts/dx-utils//Context">;
    defer: <E_2 extends object, A_2, K_1 extends keyof E_2>(fa: Context<E_2, A_2>, ...keys: K_1[]) => Context<Omit<E_2, K_1>, Context<Pick<E_2, K_1>, A_2>>;
    key: <A_3>() => <K_2 extends PropertyKey>(key: K_2) => Context<Record<K_2, A_3>, A_3>;
    extract: () => Context<unknown, any>;
    ap: <E_3, A_4, B>(fab: Context<E_3, (a: A_4) => B>, fa: Context<E_3, A_4>) => Context<E_3, B>;
    URI: "@devexperts/dx-utils//Context";
    map: <E_4, A_5, B_1>(fa: Context<E_4, A_5>, f: (a: A_5) => B_1) => Context<E_4, B_1>;
    of: <E_5, A_6>(a: A_6) => Context<E_5, A_6>;
    chain: <E_6, A_7, B_2>(fa: Context<E_6, A_7>, f: (a: A_7) => Context<E_6, B_2>) => Context<E_6, B_2>;
    productLeft: <EA, A_8, EB, B_3>(fa: Context<EA, A_8>, fb: Context<EB, B_3>) => Context<EA & EB, [A_8, B_3]>;
};
