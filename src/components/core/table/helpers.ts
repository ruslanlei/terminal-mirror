import { uuid } from '@/utils/uuid';
import { DeepPartial } from '@/utils/typescript';
import { TableRecord } from '@/components/core/table/index';

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
