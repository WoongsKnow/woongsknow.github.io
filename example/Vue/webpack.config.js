const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
  mode: 'development',
  devtool: 'eval', // 배포할땐 hidden-source ? 나중에 제대로 공부하자.
  resolve: {
    extensions: ['.js', '.vue'], //확장자들을 처리하기 위함.
  },
  entry: {
    // app: './main.js',
    app: path.join(__dirname, '/main.js'),
  }, // 수많은 스크립트중 가장 메인이 되는 파일을 말한다. 하나로 합쳐질 파일의 이름이된다
  //나중에 app.js로 된다.
  module: {
    rules: [{
      test: /\.vue$/, // 파일명이 .vue로 끝나는 파일 $는 파일의 끝이라는 표현
      loader: 'vue-loader', // npm install 필요
      //user: 'vue-loader' 이것도 가능.
    }], // 어떻게 합칠지에 대한 룰. 이렇게 하면 .vue로 끝나는 파일은 vue-loader가 처리한다는 뜻
  }, // 
  plugins: [
    new VueLoaderPlugin(),
  ], // 부가적인 기능.
  output: {
    // filename: '[name].js',
    filename: 'app.js',
    path: path.join(__dirname + '/dist'), // 폴더 경로 
    // path라는 것은 현재 경로를 나타내 준다. node에서 제공하는 모듈
  },
};