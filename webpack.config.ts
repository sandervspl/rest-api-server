import webpack from 'webpack';
import path from 'path';
import nodeExternals from 'webpack-node-externals';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';

const config: webpack.Configuration = {
  cache: true,
  mode: 'production',
  target: 'node',
  externals: [nodeExternals()],
  entry: {
    server: './src/Server.ts',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'server.js',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        include: [path.resolve(__dirname, 'src')],
        loader: 'babel-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.ts'],
    plugins: [
      new TsconfigPathsPlugin(),
    ],
  },
};

module.exports = config;
