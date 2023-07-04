/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
/**
 * Pure render checker
 * @param {object} props
 * @param {object} state
 * @param {object} newProps
 * @param {object} newState
 * @returns {boolean}
 */
export declare function shouldComponentUpdate(props: {}, state: {}, newProps: {}, newState: {}): boolean;
/**
 * Pure render recorator
 */
export declare function PURE<T extends Function>(target: T): T;
