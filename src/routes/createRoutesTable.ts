import { table } from 'table';

export default (data) => {
  const config = {
    columns: {
      0: {
        alignment: 'left',
        width: 25,
      },
      1: {
        width: 15,
      },
    },
  };

  const headers = ['ROUTE', 'METHOD'];
  const _table = [headers, ...data];

  console.info(table(_table, config));
};
