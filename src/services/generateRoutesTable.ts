import { table } from 'table';

export const generateRoutesTable = (data: any) => {
  const config = {
    columns: {
      0: {
        width: 15,
      },
      1: {
        width: 25,
      },
    },
  };

  const headers = ['Method', 'Endpoint'];
  const _table = [headers, ...data];

  console.info(table(_table, config));
};
