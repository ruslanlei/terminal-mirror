/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { Localization } from '../../../../../config/localization/localization';
import * as React from 'react';
export interface StudiesSettingsContentHeaderProps {
    readonly localization: Localization;
    readonly onCreateNewScript: () => void;
    readonly filterString: string;
    readonly handleTextFilterChange: (value?: string) => void;
    readonly dxScriptEnabled: boolean;
}
export declare const StudiesSettingsContentHeader: React.NamedExoticComponent<StudiesSettingsContentHeaderProps>;
