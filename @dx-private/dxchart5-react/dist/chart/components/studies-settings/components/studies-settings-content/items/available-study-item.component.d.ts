/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React from 'react';
import { TStudySettings } from '../../../../../model/studies.model';
import { Localization } from '../../../../../../config/localization/localization';
export interface AvailableStudyItemProps {
    readonly study: TStudySettings;
    readonly index: number;
    readonly isActive: boolean;
    readonly portal: HTMLElement;
    readonly studyTitle: string;
    readonly handleSelectStudy: (id: string, uuid: string) => void;
    readonly handleAddStudy: (id: string, uuid: string) => void;
    readonly onDeleteScript: (id: string) => void;
    readonly onEditScript: (id: string) => void;
    readonly dxScriptEnabled: boolean;
    readonly addStudyButtonEnabled: boolean;
    readonly localization: Localization;
    readonly isDragging: boolean;
}
export declare const AvailableStudyItem: React.MemoExoticComponent<React.ForwardRefExoticComponent<AvailableStudyItemProps & React.RefAttributes<HTMLDivElement>>>;
