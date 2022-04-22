const path = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  devServer: {
    port: 3000,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.scss'],
    alias: {
      components: path.resolve(__dirname, './src/components'),
      store: path.resolve(__dirname, './src/store'),
      consts: path.resolve(__dirname, './src/consts'),
      hooks: path.resolve(__dirname, './src/hooks'),
      selectors: path.resolve(__dirname, './src/selectors'),
    },
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hush].js',
  },
  plugins: [
    new HTMLWebpackPlugin({ template: './src/index.html' }),
    new CleanWebpackPlugin(),
    new ESLintPlugin({
      extensions: ['js', 'jsx', 'ts', 'tsx'],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.((c|sa|sc)ss)$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.(jpeg|jpg|png|gif|svg)/,
        use: ['file-loader'],
      },
      {
        test: /\.ts$|\.tsx$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
      },
    ],
  },
};
