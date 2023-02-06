import { uuid } from '@/utils/uuid';
import { DeepPartial } from '@/utils/typescript';
import { TableRecord } from '@/components/core/table/index';
import { compose, reduce } from '@/utils/fp';

export const createEmptyRecord = (id?: string | number): TableRecord => ({
  id: id || uuid(),
  data: {},
});

export const setDataToTableRecord = <TR extends TableRecord>(
  record: DeepPartial<TR>,
  data: DeepPartial<TR>['data'],
): DeepPartial<TR> => ({
    ...record,
    data: {
      ...record.data,
      ...data,
    },
  });

export const setChildrenToTableRecord = <TR extends TableRecord>(
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
) => compose(
    reduce(
      childrenMixins,
      (
        record: DeepPartial<TR>,
        mixin: (payload: P) => DeepPartial<TR>['children'],
      ) => setChildrenToTableRecord(record, mixin(payload)),
    ),
    reduce(
      mixins,
      (
        record: DeepPartial<TR>,
        mixin: (payload: P) => DeepPartial<TR>['data'],
      ) => setDataToTableRecord(record, mixin(payload)),
    ),
  )(record);
