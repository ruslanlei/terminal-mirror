/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { EventPopoverData } from '../../view-models/events-data.view-model';
import { Option } from 'fp-ts/Option';
import { Bounds } from '../../../chart-kit/Popover/Popover.model';
export interface EventPopoverProps {
    readonly event: Option<EventPopoverData>;
    readonly bounds?: Bounds;
}
export declare const EventPopover: (props: EventPopoverProps) => JSX.Element;
