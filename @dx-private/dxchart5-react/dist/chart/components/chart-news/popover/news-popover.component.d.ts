/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React from 'react';
import { HoveredNews } from '../../../view-models/news/news.view-model';
import { CKPopoverProps } from '../../../../chart-kit/Popover/Popover.component';
export interface NewsContainerProps {
    readonly news: HoveredNews;
}
export declare const NewsPopoverWrapper: React.NamedExoticComponent<NewsPopoverProps>;
export interface NewsPopoverProps extends CKPopoverProps {
    readonly news: HoveredNews;
}
export declare const NewsPopover: React.NamedExoticComponent<NewsPopoverProps>;
