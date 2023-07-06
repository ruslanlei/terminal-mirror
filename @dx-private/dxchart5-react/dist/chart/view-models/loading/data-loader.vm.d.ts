/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { Property } from '../../../utils/property.utils';
import { Sink } from '../../../utils/sink';
export interface DataLoaderVM {
    /**
     * If data is in loading state
     */
    isLoading: Property<boolean>;
    /**
     * Set the loading state.
     */
    setDataIsLoading: (state: boolean) => void;
}
/**
 * DataLoaderVM is responsible for enabling/disabling loading state (spinner or fading)
 * @doc-tags chart-react,loading,
 */
export declare const createDataLoaderVM: () => Sink<DataLoaderVM>;
