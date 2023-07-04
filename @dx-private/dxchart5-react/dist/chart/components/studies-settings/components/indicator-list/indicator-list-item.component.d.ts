/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React, { ReactNode } from 'react';
import { IndicatorType } from '../../../../model/studies.model';
interface IndicatorListItemProps {
    id: string;
    uuid: string;
    title: string;
    type: IndicatorType;
    active?: boolean;
    description?: string;
    link?: string;
    appendix?: string;
    overlaying: boolean;
    length: number;
    onClick: (id: string, uuid: string) => void;
    isActiveIcons?: boolean;
    onAddStudy?: (id: string, uuid: string) => void;
    className?: string;
    addStudyButtonEnabled?: boolean;
    onEditScript?: () => void;
    showDeleteButton?: boolean;
    dxScriptEnabled?: boolean;
    children?: ReactNode;
    ariaLabel?: string;
    tooltipAvailable?: boolean;
}
export interface IndicatorIconProps {
    overlaying: boolean;
    type: IndicatorType;
}
export declare const IndicatorListItem: React.MemoExoticComponent<React.ForwardRefExoticComponent<IndicatorListItemProps & React.RefAttributes<HTMLDivElement>>>;
export {};
