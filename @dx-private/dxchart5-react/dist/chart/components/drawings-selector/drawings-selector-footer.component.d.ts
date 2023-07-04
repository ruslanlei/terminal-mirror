/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { FC } from 'react';
import { ToolbarDictionary } from '../../../config/localization/toolbar';
export interface DrawingSelectorFooterProps {
    readonly isVisibilityButtonEnabled: boolean;
    readonly visibilityButtonText: string;
    readonly onVisibilityButtonClick: () => void;
    readonly isClearButtonEnabled: boolean;
    readonly clearButtonText: string;
    readonly onClearButtonClick: () => void;
    readonly localization: ToolbarDictionary;
}
export declare const DrawingSelectorFooter: FC<DrawingSelectorFooterProps>;
