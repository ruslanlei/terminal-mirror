/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
declare function errorLog(...args: any[]): void;
export declare const dconsole: {
    log: (...args: any[]) => void;
    warn: (...args: any[]) => void;
    error: typeof errorLog;
};
export {};
