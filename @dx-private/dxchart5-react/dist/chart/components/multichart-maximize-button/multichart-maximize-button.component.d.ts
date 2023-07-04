/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React from 'react';
import { ToolbarDictionary } from '../../../config/localization/toolbar';
export interface MaximizeChartButtonProps {
    readonly onClick: () => void;
    readonly isMaximized: boolean;
    readonly className?: string;
    readonly localization: ToolbarDictionary;
}
export declare const MaximizeChartButton: React.MemoExoticComponent<(props: MaximizeChartButtonProps) => JSX.Element>;
