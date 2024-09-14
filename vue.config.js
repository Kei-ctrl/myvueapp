
// vue.config.js
module.exports = {
  // transpileDependencies: true, // 必要に応じてコメントアウトまたは削除
  pages: {
    index: {
      entry: 'src/main.js', // エントリーポイントを指定
      template: 'public/index.html',
      filename: 'index.html',
      title: 'My App',
    },
  },
};


