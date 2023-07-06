/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import * as React from 'react';
import { ComponentType } from 'react';
export interface TDataStateErrorMainProps<L> {
    error: L;
}
export declare const RemoteDataState: <A>(props: import("./render-remote-data.component").TRenderRemoteDataMainProps<unknown, A>) => React.CElement<import("./render-remote-data.component").TRenderRemoteDataProps<unknown, A>, React.Component<import("./render-remote-data.component").TRenderRemoteDataProps<unknown, A>, any, any>>;
export declare const createRemoteDataState: (DataStateNoData?: ComponentType, DataStateFailure?: ComponentType<TDataStateErrorMainProps<unknown>>, DataStatePending?: ComponentType) => <A>(props: import("./render-remote-data.component").TRenderRemoteDataMainProps<unknown, A>) => React.CElement<import("./render-remote-data.component").TRenderRemoteDataProps<unknown, A>, React.Component<import("./render-remote-data.component").TRenderRemoteDataProps<unknown, A>, any, any>>;
