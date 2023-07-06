/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { either } from 'fp-ts';
import { AggregationPeriod } from '../../model/aggregation.model';
import { ValidationError } from '../../view-models/utils/validators';
export interface ChartPeriodProps {
    readonly allPeriods: AggregationPeriod[];
    readonly addPeriod: (period: string) => either.Either<ValidationError, void>;
    readonly removePeriod: (period: AggregationPeriod) => void;
    readonly selectedPeriod: AggregationPeriod;
    readonly onPeriodSelect: (type: AggregationPeriod) => void;
}
export declare const ChartAggregationPeriodDropdown: (props: ChartPeriodProps) => JSX.Element;
