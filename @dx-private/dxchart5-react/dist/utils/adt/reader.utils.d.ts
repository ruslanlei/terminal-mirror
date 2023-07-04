/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { Reader, reader as fptsreader, URI } from 'fp-ts/Reader';
import { ProductLeft } from '../typeclasses/product-left-coproduct-left.utils';
import { MonadReader } from '../typeclasses/monad-reader';
export declare const reader: typeof fptsreader & ProductLeft<URI> & MonadReader<URI>;
export declare const sequenceTReader: <E, T extends Reader<E, any>[]>(...t: T & {
    readonly 0: Reader<E, any>;
}) => Reader<E, { [K in keyof T]: [T[K]] extends [Reader<E, infer A>] ? A : never; }>;
export declare const combineReader: import("../typeclasses/product-left-coproduct-left.utils").ProductMap<"Reader">;
export declare const deferReader: <E extends object, A, K extends keyof E>(fa: Reader<E, A>, ...keys: K[]) => Reader<Omit<E, K>, Reader<Pick<E, K>, A>>;
export type ReaderEnvType<F extends Reader<any, any>> = F extends Reader<infer E, infer A> ? E : never;
export type ReaderValueType<F extends Reader<any, any>> = F extends Reader<infer E, infer A> ? A : never;
