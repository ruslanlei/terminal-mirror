/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
/**
 * Executes a callback on subscription to this observable
 * Can be used in vm's effect to specify logic which should be executed on vm subscription
 * @param onSubscribe
 * @returns
 */
export declare const onSubscribe: (onSubscribe: () => void) => import("rxjs").Observable<never[]>;
