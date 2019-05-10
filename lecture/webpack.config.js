const path = require('path');

module.exports = {
  name: 'word-relay-setting',
  mode: 'development', //실서비스: production
  devtool: 'eval',
  resolve: {
    extensions: ['.js', '.jsx']
  },

  // 입력
  entry: {
    app: ['./client'],
  },

  module: {
    rules: [{
      // 규칙을 적용할 파일들
      test: /\.jsx?/,
      // 어떤룰? 바벨룰~
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env', '@babel/preset-react'],
        plugins: ['@babel/plugin-proposal-class-properties', 'react-hot-loader/babel'],
      },
    }],
  },

  // 출력
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js',
    publicPath: '/dist/'
  },

};