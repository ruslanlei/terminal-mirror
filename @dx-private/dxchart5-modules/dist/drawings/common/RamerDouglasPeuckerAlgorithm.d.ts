/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { ViewPoint } from '../model/DrawingViewModel';
/**
 * Implementation of Ramer–Douglas–Peucker. Used for brush and highlighter drawings.
 * @param points
 * @param epsilon
 * @doc-tags math,tricky
 */
export declare function simplify(points: ViewPoint[], epsilon: number): ViewPoint[];
