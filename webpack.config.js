const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports={
  mode: 'development',
  entry: './src/index.js',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'TodoList',
    }),
  ],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpeg|jpg|svg|gif|webp)$/i,
        type: 'asset/resource',
      },
    ],
  },
};
