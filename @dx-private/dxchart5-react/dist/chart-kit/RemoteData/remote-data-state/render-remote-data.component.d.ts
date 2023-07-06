/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { ComponentType, Component } from 'react';
import { RemoteData } from '../../../utils/remote-data';
export interface TDataStateErrorMainProps<L> {
    error: L;
}
export interface TRenderRemoteDataStates<L> {
    DataStateNoData: ComponentType;
    DataStateFailure: ComponentType<TDataStateErrorMainProps<L>>;
    DataStatePending: ComponentType;
}
export interface TRenderRemoteDataMainProps<L, A> {
    data: RemoteData<L, A>;
    success: (data: A) => JSX.Element;
    noData?: (data: A) => boolean;
}
export type TRenderRemoteDataProps<L, A> = TRenderRemoteDataStates<L> & TRenderRemoteDataMainProps<L, A>;
export declare class RenderRemoteData<L, A> extends Component<TRenderRemoteDataProps<L, A>> {
    render(): JSX.Element;
    private renderPending;
    private renderSuccess;
    private renderFailure;
}
