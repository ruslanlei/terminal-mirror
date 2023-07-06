/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { Property } from '../../utils/property.utils';
import { DxScriptProvider, TDxScript } from '../dx-script-provider';
export declare const DXSCRIPTS_KEY = "dxscripts";
interface LSDxScriptProvider extends DxScriptProvider {
    scriptList: Property<TDxScript[]>;
    setScriptList: (scripts: TDxScript[]) => void;
}
export declare const createLocalStorageDxScriptProvider: () => LSDxScriptProvider;
export {};
