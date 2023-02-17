import { uuid } from '@/utils/uuid';
import { DeepPartial } from '@/utils/typescript';
import { TableRecord } from '@/components/core/table/index';
import { compose, reduceRight } from '@/utils/fp';
import { TableRowState } from '@/components/core/table/tableRow';

export const createEmptyRecord = (id?: string | number): TableRecord => ({
  id: id || uuid(),
  data: {},
});

export const mixTableRecordData = (
  record: DeepPartial<TableRecord>,
  data: DeepPartial<TableRecord>['data'],
): DeepPartial<TableRecord> => ({
  ...record,
  data: {
    ...record.data,
    ...data,
  },
});

export const mixTableRecordChildren = (
  record: DeepPartial<TableRecord>,
  children: DeepPartial<TableRecord>['children'],
) => ({
  ...record,
  children: [
    ...(record?.children ? record.children : []),
    ...children,
  ],
});

const mixTableRecordState = (
  record: DeepPartial<TableRecord>,
  states: TableRowState[],
) => ({
  ...record,
  state: [
    ...(record?.state ? record.state : []),
    ...states,
  ],
});

export const collectTableRecord = <TR extends TableRecord, P>(
  mixins: {
    data: ((payload: P) => DeepPartial<TR>['data'])[],
    state?: ((payload: P) => TableRowState[])[],
    children?: ((payload: P) => DeepPartial<TR>['children'])[],
  },
  payload: P,
  record: DeepPartial<TR>,
): TR => compose(
  reduceRight(
    mixins?.children || [],
    (
      record: DeepPartial<TR>,
      mixin: (payload: P) => DeepPartial<TR>['children'],
    ) => mixTableRecordChildren(record, mixin(payload)),
  ),
  reduceRight(
    mixins?.state || [],
    (
      record: DeepPartial<TR>,
      mixin: (payload: P) => TableRowState[],
    ) => mixTableRecordState(record, mixin(payload)),
  ),
  reduceRight(
    mixins.data,
    (
      record: DeepPartial<TR>,
      mixin: (payload: P) => DeepPartial<TR>['data'],
    ) => mixTableRecordData(record, mixin(payload)),
  ),
)(record) as TR;
