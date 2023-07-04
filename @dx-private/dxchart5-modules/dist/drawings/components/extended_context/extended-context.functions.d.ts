/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { VisibleRayFR } from '../../figures/FibonacciRays';
import { VisibleRayGannFan } from '../../figures/GannFan';
import { FibonacciPart } from '../../figures/model/Figure';
import { FarthestIntersection, SortedVisibleLevel } from '../../figures/utils/utils';
import { ViewPoint } from '../../model/DrawingViewModel';
import { Vector } from '../../model/Vector';
import { ExtendedContext } from './ExtendedContext';
import canvasProperties from './canvas-properties';
export declare function drawRayExtent<T extends {
    style: {
        extendLeft?: boolean;
        extendRight?: boolean;
    };
}>(ctx: ExtendedContext, a: Vector, b: Vector, props: T): void;
export declare function drawRayExtentStraight<T extends {
    style: {
        extendLeft?: boolean;
        extendRight?: boolean;
    };
}>(ctx: ExtendedContext, a: Vector, b: Vector, props: T): void;
export declare function calculateRaysVerticalLabelPlacement(ctx: ExtendedContext, start: ViewPoint, visibleRays: VisibleRayFR[] | VisibleRayGannFan[], intersection: FarthestIntersection): canvasProperties.PROP_LABEL_PLACEMENT_TOP | canvasProperties.PROP_LABEL_PLACEMENT_BOTTOM;
export declare const sortedVisibleLevels2: (levels: FibonacciPart[], defaultCoefficients: number[]) => SortedVisibleLevel[];
