/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React from 'react';
export type LoadingState = 'initial' | 'started' | 'done';
export type ChartLoadingState = Record<string, LoadingState>;
export interface ProgressBarLoaderProps {
    readonly loadingState: ChartLoadingState;
}
export declare const ProgressBarLoader: React.NamedExoticComponent<ProgressBarLoaderProps>;
