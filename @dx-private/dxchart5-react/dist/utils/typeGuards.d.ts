/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
export declare function notEmpty<T>(value: T | null | undefined): value is T;
export declare function hasOwnProperty<X extends Record<string, any>, Y extends PropertyKey>(obj: X, prop: Y): obj is X & Record<Y, unknown>;
export declare function isEventWithComposedPath(event: Event): event is PointerEvent;
