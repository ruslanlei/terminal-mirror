/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { Observable } from 'rxjs';
import { Property } from './property.utils';
type Callback<A> = (value: A) => void;
export interface CallbackAdapter<A> {
    setValue: (a: A) => void;
    value: Property<A>;
    registerCallback: (callback: Callback<A>) => void;
    unregisterCallback: (callback: Callback<A>) => void;
    handleCallbacksEffect: Observable<unknown>;
}
export declare const createCallbackAdapter: <A>(initial: A, cmp?: (a: A, b: A) => boolean) => CallbackAdapter<A>;
export {};
