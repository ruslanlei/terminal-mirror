/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { Bounds } from '@dx-private/dxchart5-light/dist/chart/model/bounds.model';
export declare class Vector {
    x: number;
    y: number;
    constructor(x: number, y: number);
    cross(v: Vector): number;
    dot(v: Vector): number;
    add(v: Vector): Vector;
    subtract(v: Vector): Vector;
    rotate(angle: number): Vector;
    rotateRelative(angle: number, vector: Vector): Vector;
    divide(k: number): Vector;
    multiply(k: number): Vector;
    multiplyVector(v: Vector): Vector;
    equals(v: Vector, eps?: number): boolean;
    copy(): Vector;
    get angle(): number;
    rotateTo(angle: number): Vector;
    static toRad: (deg: number) => number;
    static toDeg: (rad: number) => number;
    get length(): number;
    set length(value: number);
    distance(x: number, y: number): number;
    static fitOfBound(bounds: Bounds): (v: Vector) => Vector;
}
/**
 * @param a {Array.<Vector>}
 * @param b {Array.<Vector>}
 * @returns {boolean}
 */
export declare function rectsIntersect(a: Vector[], b: Vector[]): boolean;
export declare function lineSegmentIntersection(l: Vector[], s: Vector[]): Vector | null;
export declare function raySegmentIntersection(r: Vector[], s: Vector[]): Vector | null;
export declare function segmentsIntersect(a: Vector[], b: Vector[]): boolean;
export declare function ellipseKeyPoints(a: Vector, c: Vector, e: Vector): Vector[];
export declare function parallelogramKeyPoints(a: Vector, b: Vector, e: Vector, p: Vector): Vector[];
/**
 * Whether polygon points are listed in clockwise order
 */
export declare function clockwise(p: Vector[]): boolean;
