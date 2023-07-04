/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { DxScriptProvider } from '../dx-script-provider';
import { DxScriptStudiesDataProvider } from './dx-script-studies-data-provider';
import { DxStudiesProvider } from './dx-studies-provider';
import { StudiesDataProvider } from './studies-data-provider';
export declare const createCombinedStudiesProvider: (dxScript: DxScriptStudiesDataProvider, dxStudy: StudiesDataProvider, dxStudiesProvider: DxStudiesProvider, dxScriptProvider: DxScriptProvider) => StudiesDataProvider;
