/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import * as React from 'react';
import { TStudySettings } from '../../../../../model/studies.model';
import { Localization } from '../../../../../../config/localization/localization';
export interface AddedStudyItemProps {
    readonly study: TStudySettings;
    readonly index: number;
    readonly isActive: boolean;
    readonly portal: HTMLElement;
    readonly studyTitle: string;
    readonly onRemoveStudy: (uuid: string) => void;
    readonly onSelectStudySettings: (id: string, uuid: string) => void;
    readonly appendix?: string;
    readonly isMobile: boolean;
    readonly localization: Localization;
}
export declare const AddedStudyItem: React.MemoExoticComponent<React.ForwardRefExoticComponent<AddedStudyItemProps & React.RefAttributes<HTMLDivElement>>>;
