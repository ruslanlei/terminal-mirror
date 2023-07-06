/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
interface UseChangeStatusWithDelay {
    isOpening: boolean;
    isOpened: boolean;
    openToggle: () => void;
}
export declare const useChangeStatusWithDelay: (duration?: number, initIsOpened?: boolean, handler?: (isOpened: boolean) => void) => UseChangeStatusWithDelay;
export {};
