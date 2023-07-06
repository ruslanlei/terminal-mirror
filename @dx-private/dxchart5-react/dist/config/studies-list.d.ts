/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { TRawStudySettings } from '../chart/model/studies.model';
import { StudiesDictionary } from './localization/studies';
export type StudiesList = TRawStudySettings[];
/**
 * List of all studies.
 * @doc-tags chart-react,default-config,studies
 */
export declare const DEFAULT_STUDIES_LIST: (studiesDictionary?: StudiesDictionary) => StudiesList;
