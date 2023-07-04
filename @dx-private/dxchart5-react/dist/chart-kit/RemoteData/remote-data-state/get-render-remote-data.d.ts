/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
/// <reference types="react" />
import { TRenderRemoteDataProps, TRenderRemoteDataMainProps, TRenderRemoteDataStates } from './render-remote-data.component';
export declare const getRenderRemoteData: <L>(dataStates: TRenderRemoteDataStates<L>) => <A>(props: TRenderRemoteDataMainProps<L, A>) => import("react").CElement<TRenderRemoteDataProps<L, A>, import("react").Component<TRenderRemoteDataProps<L, A>, any, any>>;
