/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React, { ComponentType, ReactElement } from 'react';
export interface ChartToolbarProps {
    readonly loadedPercentage?: number;
    readonly container: Element | null;
    readonly className?: string;
    readonly buttons: ReactElement[];
    readonly MainInstrumentComponent?: ComponentType<Record<string, any>>;
}
export declare const ChartToolbar: React.MemoExoticComponent<(props: ChartToolbarProps) => JSX.Element>;
