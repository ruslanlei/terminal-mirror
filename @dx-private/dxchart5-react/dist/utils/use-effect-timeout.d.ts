/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
/**
 * Fixes the async useEffect problem.
 * https://stackoverflow.com/questions/53949393/cant-perform-a-react-state-update-on-an-unmounted-component
 * @param callbackFn
 * @param timeout
 */
export declare const useEffectTimeout: (callbackFn: () => void, timeout: number) => void;
