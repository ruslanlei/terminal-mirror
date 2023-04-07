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

export class Maybe<T> implements Monad<T>/* , Traversable<T> */ {
  private readonly $value: T | null | undefined;

  get isNothing() {
    return this.$value === null || this.$value === undefined;
  }

  get isJust() {
    return !this.isNothing;
  }

  constructor(x: T | null | undefined) {
    this.$value = x;
  }

  // ----- Utils

  log<U>(
    ...args: any[]
  ): Maybe<U> {
    console.log(...args);
    return this as Maybe<any>;
  }

  // ----- Pointed Maybe
  static of<U>(x: U | null | undefined) {
    return new Maybe<U>(x);
  }

  // ----- Functor Maybe
  map<U>(fn: (x: T) => U): Maybe<U> {
    return this.isNothing ? this as Maybe<any> : Maybe.of<U>(fn(this.$value as T));
  }

  // ----- Applicative Maybe
  ap<U>(f: Maybe<(x: T) => U>): Maybe<U> {
    return this.isNothing ? this as Maybe<any> : f.map((fn) => fn(this.$value as T));
  }

  // ----- Monad Maybe
  chain<U>(fn: (x: T) => U): U {
    return this.map(fn).join();
  }

  join(): T {
    return this.isNothing ? (this as unknown as Maybe<T>).$value as T : this.$value as T;
  }

  getOrElse(defaultValue: T): T {
    return this.isNothing ? defaultValue : this.$value as T;
  }
}
