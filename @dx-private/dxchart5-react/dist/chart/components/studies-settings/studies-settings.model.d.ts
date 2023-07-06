/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { Option } from 'fp-ts/Option';
import { StudyParamSelectableType, TStudySettings } from '../../model/studies.model';
export * from '../../model/studies.model';
export interface StudyParamSelectableTypeOptions extends Array<{
    value: StudyParamSelectableType;
    caption: string;
}> {
}
export declare const getStudyById: (studies: TStudySettings[], id: string) => Option<TStudySettings>;
export declare const getStudyByUUID: (studies: TStudySettings[], uuid: string) => Option<TStudySettings>;
