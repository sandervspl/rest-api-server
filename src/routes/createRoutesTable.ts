import { table } from 'table';

export default (data) => {
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
