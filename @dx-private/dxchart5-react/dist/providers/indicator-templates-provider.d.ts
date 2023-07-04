/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { TStudyLine, TStudyParameter } from '../chart/model/studies.model';
export type IndicatorTemplates = IndicatorTemplate[];
export interface IndicatorTemplate extends IndicatorTemplateNamed {
    id: string;
}
export interface IndicatorTemplateStudySettings {
    id: string;
    parameters: Array<TStudyParameter>;
    lines: Array<TStudyLine>;
    overlaying: boolean;
}
export interface IndicatorTemplateNamed {
    studies: IndicatorTemplateStudySettings[];
    name: string;
}
export interface IndicatorsTemplateProvider {
    /**
     * Creates the new template. Returns either the ID or error.
     * @param template - new indicator template to create
     */
    createTemplate(template: IndicatorTemplateNamed): Promise<string>;
    deleteTemplate(id: string): Promise<void>;
    updateTemplate(template: IndicatorTemplate): Promise<void>;
    getTemplates(): Promise<IndicatorTemplates>;
}
