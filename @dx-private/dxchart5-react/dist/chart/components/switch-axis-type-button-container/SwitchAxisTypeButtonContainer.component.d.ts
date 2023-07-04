/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React from 'react';
import { Localization } from '../../../config/localization/localization';
export interface SwitchAxisButtonsProps {
    readonly onPercentButtonClick: () => void;
    readonly isPercentButtonActive: boolean;
    readonly onLogButtonClick: () => void;
    readonly isLogButtonActive: boolean;
    readonly top: number;
    readonly localization: Localization;
}
export declare const SwitchAxisTypeButtonsContainer: React.NamedExoticComponent<SwitchAxisButtonsProps>;
