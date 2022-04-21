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
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              import: false,
              modules: true,
            },
          },
        ],
        include: /\.module\.scss$/,
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        exclude: /\.module\.scss$/,
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
