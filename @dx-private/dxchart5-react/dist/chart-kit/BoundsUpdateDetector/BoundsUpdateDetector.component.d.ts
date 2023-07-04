/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React from 'react';
export interface TSize {
    width: number;
    height: number;
}
export interface TBoundsUpdateDetectorProps {
    onUpdate: (size: TSize) => void;
    children: any;
}
export declare class BoundsUpdateDetector extends React.Component<TBoundsUpdateDetectorProps> {
    private size;
    componentDidMount(): void;
    getSize(): {
        width: number;
        height: number;
    };
    componentDidUpdate(prevProps: TBoundsUpdateDetectorProps, prevState: TBoundsUpdateDetectorProps): void;
    render(): any;
}
