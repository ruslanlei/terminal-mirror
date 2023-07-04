/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { FC } from 'react';
import { RemoteData } from '../../../utils/remote-data';
export interface RenderRemoteDataProps<L, A> {
    data: RemoteData<L, A>;
    Success: FC<{
        value: A;
    }>;
    Failure?: FC;
    noData?: (value: A) => boolean;
}
export declare const RenderRemoteData: <L, A>(props: RenderRemoteDataProps<L, A>) => JSX.Element | null;
