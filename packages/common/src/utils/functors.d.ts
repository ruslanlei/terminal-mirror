interface Functor<T> {
    map<U>(fn: (x: T) => U): Functor<U>;
}
interface Applicative<T> extends Functor<T> {
    ap<U>(f: Applicative<(x: T) => U>): Applicative<U>;
}
interface Monad<T> extends Applicative<T> {
    chain<U>(fn: (x: T) => Monad<U>): Monad<U>;
    join(): T;
}
export declare class Maybe<T> implements Monad<T> {
    private readonly $value;
    get isNothing(): boolean;
    get isJust(): boolean;
    constructor(x: T | null | undefined);
    log<U>(...args: any[]): Maybe<U>;
    static of<U>(x: U | null | undefined): Maybe<U>;
    map<U>(fn: (x: T) => U): Maybe<U>;
    ap<U>(f: Maybe<(x: T) => U>): Maybe<U>;
    chain<U>(fn: (x: T) => U): U;
    join(): T;
    getOrElse(defaultValue: T): T;
}
export {};
