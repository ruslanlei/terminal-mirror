import { DeepPartial } from '@terminal/common/utils/typescript';
import { TableRecord } from '../../../components/table/index';
import { TableRowState } from '../../../components/table/tableRow';
export declare const createEmptyRecord: (id?: string | number) => TableRecord;
export declare const mixTableRecordData: (record: DeepPartial<TableRecord>, data: DeepPartial<TableRecord>['data']) => DeepPartial<TableRecord>;
export declare const mixTableRecordChildren: (record: DeepPartial<TableRecord>, children: DeepPartial<TableRecord>['children']) => {
    children: any[];
    id?: string | number | undefined;
    data?: {
        [x: string]: any;
    } | undefined;
    state?: TableRowState | (TableRowState | undefined)[] | undefined;
};
export declare const collectTableRecord: <TR extends TableRecord<string, Record<string, any>, any>, P>(mixins: {
    data: ((payload: P) => DeepPartial<TR>["data"])[];
    state?: ((payload: P) => TableRowState[])[] | undefined;
    children?: ((payload: P) => DeepPartial<TR>["children"])[] | undefined;
}, payload: P, record: DeepPartial<TR>) => TR;
