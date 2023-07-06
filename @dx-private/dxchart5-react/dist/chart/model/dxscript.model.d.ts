/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { SuccessCompileResponse, TDxScriptWithoutCode } from '../../providers/dx-script-provider';
import { ColorsPool } from '../../utils/colorspool/ColorsPool';
import { TStudyLine, TStudyParameter, TStudySettings } from './studies.model';
export declare const mapScript2StudySettings: (script: TDxScriptWithoutCode, study?: TStudySettings) => TStudySettings;
export declare const mapScriptParams: (study: TStudySettings, response: SuccessCompileResponse) => TStudyParameter[];
export declare const mapScriptLines: (study: TStudySettings, response: SuccessCompileResponse, colorsPool: ColorsPool) => TStudyLine[];
