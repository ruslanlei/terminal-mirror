/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
export declare const createIdGenerator: () => string;
export declare const nextId: (generatorId: string) => number;
export declare function generateRandomId(): string;
