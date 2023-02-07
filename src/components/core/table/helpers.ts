import { uuid } from '@/utils/uuid';
import { DeepPartial } from '@/utils/typescript';
import { TableRecord } from '@/components/core/table/index';
import { compose, reduceRight } from '@/utils/fp';

export const createEmptyRecord = (id?: string | number): TableRecord => ({
  id: id || uuid(),
  data: {},
});

export const mixTableRecordData = <TR extends TableRecord>(
  record: DeepPartial<TR>,
  data: DeepPartial<TR>['data'],
): DeepPartial<TR> => ({
    ...record,
    data: {
      ...record.data,
      ...data,
    },
  });

export const mixTableRecordChildren = <TR extends TableRecord>(
  record: DeepPartial<TR>,
  children: DeepPartial<TR>['children'],
) => ({
    ...record,
    children: [
      ...(record?.children ? record.children : []),
      ...children,
    ],
  });

export const collectTableRecord = <TR extends TableRecord, P>(
  mixins: (
    (payload: P) => DeepPartial<TR>['data']
  )[],
  childrenMixins: (
    (payload: P) => DeepPartial<TR>['children']
  )[],
  payload: P,
  record: DeepPartial<TR>,
): TR => compose(
  reduceRight(
    childrenMixins,
    (
      record: DeepPartial<TR>,
      mixin: (payload: P) => DeepPartial<TR>['children'],
    ) => mixTableRecordChildren(record, mixin(payload)),
  ),
  reduceRight(
    mixins,
    (
      record: DeepPartial<TR>,
      mixin: (payload: P) => DeepPartial<TR>['data'],
    ) => mixTableRecordData(record, mixin(payload)),
  ),
)(record) as TR;
