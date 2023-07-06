/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { Option } from 'fp-ts/Option';
export declare const getQueryParam: (param: string) => Option<string>;
export declare const getQueryParamArray: (param: string) => Option<Array<string>>;
