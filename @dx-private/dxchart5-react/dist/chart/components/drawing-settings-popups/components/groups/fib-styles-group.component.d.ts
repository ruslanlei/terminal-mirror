/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React from 'react';
import { FibonacciPart } from '@dx-private/dxchart5-modules/dist/drawings/figures/model/Figure';
import { ControlProps } from '../../../../../chart-kit/Control/Control';
export interface FibonacciStylesGroupsProps extends ControlProps<FibonacciPart[]> {
    readonly palette: string[];
    readonly step?: number;
    readonly precision?: number;
    readonly multiplier?: number;
}
export declare const FibonacciStylesGroup: React.NamedExoticComponent<FibonacciStylesGroupsProps>;
