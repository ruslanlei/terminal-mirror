/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
export declare const useObservable: <A>(fa: import("rxjs").Observable<A>, initial: A) => A;
export declare const useDirectObservable: typeof import("./react.utils").useDirectObservable;
