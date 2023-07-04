/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { Observable } from 'rxjs';
export type Adapter<A> = [(a: A) => void, Observable<A>];
export declare const createAdapter: <A>() => Adapter<A>;
