const path = require('path');
const resolve = dir => path.resolve(__dirname, dir);
module.exports = {
  mode: 'production',
  entry: './src/index.js',
  resolve: {
    // 设置别名
    alias: {
      '@': resolve('src')// 这样配置后 @ 可以指向 src 目录
    }
  },
  mode: 'development',
  module: {
    rules: [
      // {
      //   test: /\.vue$/,
      //   loader: 'vue-loader'
      // },
      // 它会应用到普通的 `.js` 文件
      // 以及 `.vue` 文件中的 `<script>` 块
      {
        test: /\.(js|vue)$/,
        loader: 'babel-loader'
      },
      // 它会应用到普通的 `.css` 文件
      // 以及 `.vue` 文件中的 `<style>` 块
      // {
      //   test: /\.css$/,
      //   use: [
      //     'vue-style-loader',
      //     'css-loader'
      //   ]
      // }
    ]
  },
  // plugins: [
  //   // 请确保引入这个插件来施展魔法
  //   new VueLoaderPlugin()
  // ]
};