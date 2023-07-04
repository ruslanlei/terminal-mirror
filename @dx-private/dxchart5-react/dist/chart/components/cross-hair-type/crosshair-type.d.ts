/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React from 'react';
import { ChartSettings } from '../../model/chart.model';
export interface CrosshairTypeProps {
    readonly className?: string;
    readonly onValueChange: (value: ChartSettings, undoable: boolean) => void;
    readonly value: ChartSettings;
}
export declare const CrosshairType: React.MemoExoticComponent<(props: CrosshairTypeProps) => JSX.Element>;
