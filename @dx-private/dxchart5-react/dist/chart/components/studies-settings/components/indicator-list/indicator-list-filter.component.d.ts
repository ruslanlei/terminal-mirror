/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import * as React from 'react';
import { Localization } from '../../../../../config/localization/localization';
interface IndicatorListFilterProps {
    handleTextFilterChange: (value?: string) => void;
    value: string;
    localization: Localization;
    onCreateNewScript: () => void;
    dxScriptEnabled: boolean;
}
export declare const IndicatorListFilter: React.NamedExoticComponent<IndicatorListFilterProps>;
export {};
