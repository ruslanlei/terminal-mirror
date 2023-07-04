/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
/**
 * Checks if property was changed during re-render.
 * Use in any component and read console.
 *
 * Example:
 * checkPropChanged(isOpened, 'isOpened')
 *
 * @param prop - prop to check
 * @param name - duplicate prop name
 * @doc-tags debug
 */
export declare function checkPropChanged(prop: any, name: string): void;
