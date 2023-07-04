/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { Option } from 'fp-ts/Option';
export interface Suggest {
    symbol: string;
    description?: string;
    sortIndex: number;
    type: string;
    priceIncrements: number[];
    tradingHours?: string;
    tradable?: boolean;
}
export declare const getSuggest: (symbol: string) => (suggests: Suggest[]) => Option<Suggest>;
export declare const nextSuggest: (selectedId: Option<string>) => (suggests: Suggest[]) => Option<Suggest>;
export declare const prevSuggest: (selectedId: Option<string>) => (suggests: Suggest[]) => Option<Suggest>;
