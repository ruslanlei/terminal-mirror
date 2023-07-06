/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { StudyParamAggregationType, StudyParamAverageType, StudyParamPriceType, StudyParameterType, StudyParamSelectableTypeOptions } from '../../studies-settings.model';
export declare const studyParamAggregationTypeOptions: StudyParamAggregationType[];
export declare const studyParamAverageTypeOptions: StudyParamAverageType[];
export declare const studyParamPriceTypeOptions: StudyParamPriceType[];
export declare const mapStudyParamTypeToOptions: (type: StudyParameterType) => StudyParamSelectableTypeOptions;
export declare const selectableOptions: {};
