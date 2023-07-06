/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
/**
 * @typedef {Object} TThrottlingOptions
 * @property {Boolean} [leading]
 * @property {Boolean} [trailing]
 */
/**
 * Returns a function, that, when invoked, will only be triggered at most once during a given window of time.
 * Normally, the throttled function will run as much as it can, without ever going more than once per wait
 * duration; but if you’d like to disable the execution on the leading edge, pass {leading: false}.
 * To disable execution on the trailing edge, pass {trailing: false}.
 */
export default function throttle<F extends Function>(func: F, wait?: any, options?: any): F;
