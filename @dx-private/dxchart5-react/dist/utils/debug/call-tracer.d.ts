/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
/**
 * Proxy for object that contains functions.
 * When function is called - proxy records the invocation to storage.
 * @param container - object's business meaning
 * @param obj - object to proxy
 * @doc-tags tricky,debug
 */
export declare function callTracerProxy<T extends object>(container: string, obj: T): T;
