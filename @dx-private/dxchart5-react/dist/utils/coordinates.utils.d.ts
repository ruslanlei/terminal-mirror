/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
/**
 * Get relative to page coordinates of element
 * @param elem
 * @returns
 */
export declare function getCoords(elem: HTMLElement): {
    top: number;
    right: number;
    bottom: number;
    left: number;
    height: number;
    width: number;
};
