/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { Dispatch, SetStateAction } from 'react';
import { Lazy } from 'fp-ts/function';
/**
 * TODO describe
 * @param initial
 * @doc-tags utility,hooks
 */
export declare const useToggle: (initial?: boolean) => [boolean, Lazy<void>, Dispatch<SetStateAction<boolean>>];
