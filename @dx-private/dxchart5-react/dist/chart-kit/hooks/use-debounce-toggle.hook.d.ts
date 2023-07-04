/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { Lazy } from 'fp-ts/function';
/**
 * TODO describe
 * @param initial
 * @param wait
 * @doc-tags utility,hooks
 */
export declare const useDebounceToggle: (initial?: boolean, wait?: number) => [boolean, Lazy<void>];
