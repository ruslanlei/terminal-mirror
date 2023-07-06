/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { FunctionN, Lazy } from 'fp-ts/function';
import { Predicate } from 'fp-ts/Predicate';
import { Monad2 } from 'fp-ts/Monad';
import { Foldable2 } from 'fp-ts/Foldable';
import { Alt2 } from 'fp-ts/Alt';
import { Extend2 } from 'fp-ts/Extend';
import { Traversable2 } from 'fp-ts/Traversable';
import { Bifunctor2 } from 'fp-ts/Bifunctor';
import { Option } from 'fp-ts/Option';
import { Either } from 'fp-ts/Either';
import { Eq } from 'fp-ts/Eq';
import { Alternative2 } from 'fp-ts/Alternative';
import { Ord } from 'fp-ts/Ord';
import { Semigroup } from 'fp-ts/Semigroup';
import { Monoid } from 'fp-ts/Monoid';
import { Show } from 'fp-ts/Show';
export declare const URI = "RemoteData";
export type URI = typeof URI;
declare module 'fp-ts/HKT' {
    interface URItoKind2<E, A> {
        RemoteData: RemoteData<E, A>;
    }
}
export interface RemoteProgress {
    readonly loaded: number;
    readonly total: Option<number>;
}
export interface RemoteInitial {
    readonly _tag: 'RemoteInitial';
}
export interface RemotePending {
    readonly _tag: 'RemotePending';
    readonly progress: Option<RemoteProgress>;
}
export interface RemoteFailure<E> {
    readonly _tag: 'RemoteFailure';
    readonly error: E;
}
export interface RemoteSuccess<A> {
    readonly _tag: 'RemoteSuccess';
    readonly value: A;
}
/**
 * Represents a value of one of four possible types (a disjoint union)
 *
 * An instance of {@link RemoteData} is either an instance of {@link RemoteInitial}, {@link RemotePending}, {@link RemoteFailure} or {@link RemoteSuccess}
 *
 * A common use of {@link RemoteData} is as an alternative to `Either` or `Option` supporting initial and pending states (fits best with [RXJS]{@link https://github.com/ReactiveX/rxjs/}).
 *
 * Note: {@link RemoteInitial}, {@link RemotePending} and {@link RemoteFailure} are commonly called "Left" part in jsDoc.
 *
 * @see https://medium.com/@gcanti/slaying-a-ui-antipattern-with-flow-5eed0cfb627b
 *
 */
export type RemoteData<E, A> = RemoteInitial | RemotePending | RemoteFailure<E> | RemoteSuccess<A>;
export declare const failure: <E = never, A = never>(error: E) => RemoteData<E, A>;
export declare const success: <E = never, A = never>(value: A) => RemoteData<E, A>;
export declare const pending: RemoteData<never, never>;
export declare const progress: (progress: RemoteProgress) => RemoteData<never, never>;
export declare const initial: RemoteData<never, never>;
/**
 * Returns true only if {@link RemoteData} is {@link RemoteFailure}
 */
export declare const isFailure: <E>(data: RemoteData<E, unknown>) => data is RemoteFailure<E>;
/**
 * Returns true only if {@link RemoteData} is {@link RemoteSuccess}
 */
export declare const isSuccess: <A>(data: RemoteData<unknown, A>) => data is RemoteSuccess<A>;
/**
 * Returns true only if {@link RemoteData} is {@link RemotePending}
 */
export declare const isPending: (data: RemoteData<unknown, unknown>) => data is RemotePending;
/**
 * Returns true only if {@link RemoteData} is {@link RemoteInitial}
 */
export declare const isInitial: (data: RemoteData<unknown, unknown>) => data is RemoteInitial;
/**
 * Takes a default value as an argument.
 * If this {@link RemoteData} is "Left" part it will return default value.
 * If this {@link RemoteData} is {@link RemoteSuccess} it will return it's value ("wrapped" value, not default value)
 *
 * Note: Default value should be the same type as {@link RemoteData} (internal) value, if you want to pass different type as default, use {@link fold}.
 *
 * @example
 * getOrElse(() => 999)(some(1)) // 1
 * getOrElseValue(() => 999)(initial) // 999
 */
export declare const getOrElse: <L, A>(f: Lazy<A>) => (ma: RemoteData<L, A>) => A;
/**
 * Needed for "unwrap" value from {@link RemoteData} "container".
 * It applies a function to each case in the data structure.
 *
 * @example
 * const onInitial = () => "it's initial"
 * const onPending = () => "it's pending"
 * const onFailure = (err) => "it's failure"
 * const onSuccess = (data) => `${data + 1}`
 * const f = fold(onInitial, onPending, onFailure, onSuccess)
 *
 * f(initial) // "it's initial"
 * f(pending) // "it's pending"
 * f(failure(new Error('error text'))) // "it's failure"
 * f(success(21)) // '22'
 */
export declare const fold: <E, A, B>(onInitial: () => B, onPending: (progress: Option<RemoteProgress>) => B, onFailure: (error: E) => B, onSuccess: (value: A) => B) => (ma: RemoteData<E, A>) => B;
/**
 * A more concise way to "unwrap" values from {@link RemoteData} "container".
 * It uses fold in its implementation, collapsing `onInitial` and `onPending` on the `onNone` handler.
 * When fold's `onInitial` returns, `onNode` is called with `none`.
 *
 * @example
 * const onNone = (progressOption) => "no data to show"
 * const onFailure = (err) => "sorry, the request failed"
 * const onSuccess = (data) => `result is: ${data + 1}`
 * const f = fold(onInitial, onPending, onFailure, onSuccess)
 *
 * f(initial) // "no data to show"
 * f(pending) // "no data to show"
 * f(failure(new Error('error text'))) // "sorry, the request failed"
 * f(success(21)) // "result is: 22"
 */
export declare const fold3: <E, A, R>(onNone: (progress: Option<RemoteProgress>) => R, onFailure: (e: E) => R, onSuccess: (a: A) => R) => (fa: RemoteData<E, A>) => R;
/**
 * One more way to fold (unwrap) value from {@link RemoteData}.
 * `Left` part will return `null`.
 * {@link RemoteSuccess} will return value.
 *
 * For example:
 *
 * `success(2).toNullable() will return 2`
 *
 * `initial.toNullable() will return null`
 *
 * `pending.toNullable() will return null`
 *
 * `failure(new Error('error text)).toNullable() will return null`
 *
 */
export declare const toNullable: <L, A>(ma: RemoteData<L, A>) => A | null;
export declare const toUndefined: <L, A>(ma: RemoteData<L, A>) => A | undefined;
export declare function fromOption<L, A>(option: Option<A>, error: Lazy<L>): RemoteData<L, A>;
/**
 * Convert {@link RemoteData} to {@link Option}
 * `Left` part will be converted to {@link None}.
 * {@link RemoteSuccess} will be converted to {@link Some}.
 *
 * @example
 * toOption(success(2)) // some(2)
 * toOption(initial) // none
 * toOption(pending) // none
 * toOption(failure(new Error('error text'))) // none
 */
export declare function toOption<E, A>(data: RemoteData<E, A>): Option<A>;
/**
 * Creates {@link RemoteData} from {@link Either}
 */
export declare const fromEither: <E, A>(ea: Either<E, A>) => RemoteData<E, A>;
/**
 * Convert {@link RemoteData} to `Either`.
 * `Left` part will be converted to `Left<L>`.
 * Since {@link RemoteInitial} and {@link RemotePending} do not have `L` values,
 * you must provide a value of type `L` that will be used to construct
 * the `Left<L>` for those two cases.
 * {@link RemoteSuccess} will be converted to `Right<R>`.
 *
 * @example:
 * const f = toEither(
 * 		() => new Error('Data not fetched'),
 * 		() => new Error('Data is fetching')
 * )
 * f(success(2)) // right(2)
 * f(initial) // right(Error('Data not fetched'))
 * f(pending) // right(Error('Data is fetching'))
 * f(failure(new Error('error text'))) // right(Error('error text'))
 */
export declare function toEither<E>(onInitial: () => E, onPending: () => E): <A>(data: RemoteData<E, A>) => Either<E, A>;
export declare function fromPredicate<L, A>(predicate: Predicate<A>, whenFalse: FunctionN<[A], L>): FunctionN<[A], RemoteData<L, A>>;
/**
 * Create {@link RemoteData} from {@link ProgressEvent}
 * @param event
 */
export declare function fromProgressEvent(event: ProgressEvent): RemoteData<never, never>;
/**
 * Compare values and returns `true` if they are identical, otherwise returns `false`.
 * `Left` part will return `false`.
 * {@link RemoteSuccess} will call {@link Eq.equals}.
 *
 * If you want to compare {@link RemoteData}'s values better use {@link getEq} or {@link getOrd} helpers.
 *
 */
export declare function elem<A>(E: Eq<A>): (a: A, fa: RemoteData<unknown, A>) => boolean;
/**
 * Takes a predicate and apply it to {@link RemoteSuccess} value.
 * `Left` part will return `false`.
 */
export declare function exists<A>(p: Predicate<A>): (fa: RemoteData<unknown, A>) => boolean;
/**
 * Maps this RemoteFailure error into RemoteSuccess if passed function `f` return {@link Some} value, otherwise returns self
 */
export declare function recover<E, A>(f: (error: E) => Option<A>): (fa: RemoteData<E, A>) => RemoteData<E, A>;
/**
 * Recovers {@link RemoteFailure} also mapping {@link RemoteSuccess} case
 * @see {@link recover}
 */
export declare function recoverMap<E, A, B>(f: (error: E) => Option<B>, g: (value: A) => B): (fa: RemoteData<E, A>) => RemoteData<E, B>;
export declare const remoteDataInstance: Monad2<URI> & Foldable2<URI> & Traversable2<URI> & Bifunctor2<URI> & Alt2<URI> & Extend2<URI> & Alternative2<URI>;
export declare const getEq: <E, A>(EE: Eq<E>, EA: Eq<A>) => Eq<RemoteData<E, A>>;
export declare const getOrd: <E, A>(OE: Ord<E>, OA: Ord<A>) => Ord<RemoteData<E, A>>;
export declare const getSemigroup: <E, A>(SE: Semigroup<E>, SA: Semigroup<A>) => Semigroup<RemoteData<E, A>>;
export declare const getMonoid: <L, A>(SL: Semigroup<L>, SA: Semigroup<A>) => Monoid<RemoteData<L, A>>;
export declare const getShow: <E, A>(SE: Show<E>, SA: Show<A>) => Show<RemoteData<E, A>>;
declare const alt: <E, A>(that: Lazy<RemoteData<E, A>>) => (fa: RemoteData<E, A>) => RemoteData<E, A>, ap: <E, A>(fa: RemoteData<E, A>) => <B>(fab: RemoteData<E, (a: A) => B>) => RemoteData<E, B>, apFirst: <E, B>(fb: RemoteData<E, B>) => <A>(fa: RemoteData<E, A>) => RemoteData<E, A>, apSecond: <E, B>(fb: RemoteData<E, B>) => <A>(fa: RemoteData<E, A>) => RemoteData<E, B>, bimap: <E, G, A, B>(f: (e: E) => G, g: (a: A) => B) => (fa: RemoteData<E, A>) => RemoteData<G, B>, chain: <E, A, B>(f: (a: A) => RemoteData<E, B>) => (ma: RemoteData<E, A>) => RemoteData<E, B>, chainFirst: <E, A, B>(f: (a: A) => RemoteData<E, B>) => (ma: RemoteData<E, A>) => RemoteData<E, A>, duplicate: <E, A>(wa: RemoteData<E, A>) => RemoteData<E, RemoteData<E, A>>, extend: <E, A, B>(f: (wa: RemoteData<E, A>) => B) => (wa: RemoteData<E, A>) => RemoteData<E, B>, flatten: <E, A>(mma: RemoteData<E, RemoteData<E, A>>) => RemoteData<E, A>, foldMap: <M>(M: Monoid<M>) => <A>(f: (a: A) => M) => <E>(fa: RemoteData<E, A>) => M, map: <A, B>(f: (a: A) => B) => <E>(fa: RemoteData<E, A>) => RemoteData<E, B>, mapLeft: <E, G>(f: (e: E) => G) => <A>(fa: RemoteData<E, A>) => RemoteData<G, A>, reduce: <A, B>(b: B, f: (b: B, a: A) => B) => <E>(fa: RemoteData<E, A>) => B, reduceRight: <A, B>(b: B, f: (a: A, b: B) => B) => <E>(fa: RemoteData<E, A>) => B;
export { alt, ap, apFirst, apSecond, bimap, chain, chainFirst, duplicate, extend, flatten, foldMap, map, mapLeft, reduce, reduceRight, };
export declare function combine<A, L>(a: RemoteData<L, A>): RemoteData<L, [A]>;
export declare function combine<A, B, L>(a: RemoteData<L, A>, b: RemoteData<L, B>): RemoteData<L, [A, B]>;
export declare function combine<A, B, C, L>(a: RemoteData<L, A>, b: RemoteData<L, B>, c: RemoteData<L, C>): RemoteData<L, [A, B, C]>;
export declare function combine<A, B, C, D, L>(a: RemoteData<L, A>, b: RemoteData<L, B>, c: RemoteData<L, C>, d: RemoteData<L, D>): RemoteData<L, [A, B, C, D]>;
export declare function combine<A, B, C, D, E, L>(a: RemoteData<L, A>, b: RemoteData<L, B>, c: RemoteData<L, C>, d: RemoteData<L, D>, e: RemoteData<L, E>): RemoteData<L, [A, B, C, D, E]>;
export declare function combine<A, B, C, D, E, F, L>(a: RemoteData<L, A>, b: RemoteData<L, B>, c: RemoteData<L, C>, d: RemoteData<L, D>, e: RemoteData<L, E>, f: RemoteData<L, F>): RemoteData<L, [A, B, C, D, E, F]>;
