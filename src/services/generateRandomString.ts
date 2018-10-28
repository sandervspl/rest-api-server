export const generateRandomString = (length: number) => {
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  return Array.from({ length }).reduce(
    text => (text += possible.charAt(Math.floor(Math.random() * possible.length))),
    ''
  );
};
