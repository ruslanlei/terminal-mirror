/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { Sink as SinkImport } from '../utils/sink';
export type Sink<A> = SinkImport<A>;
export declare const newSink: <A>(value: A, effects: import("rxjs").Observable<unknown>) => import("../utils/adt/sink.utils").Sink1<"Observable", A>;
