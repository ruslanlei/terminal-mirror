/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React from 'react';
import { CKSelectboxAnchorProps } from '../../../chart-kit/Selectbox/SelectboxAnchor.component';
import { AggregationPeriod } from '../../model/aggregation.model';
export declare const PeriodAnchor: React.FC<CKSelectboxAnchorProps>;
export declare const getAnchorString: (period: AggregationPeriod) => string;
