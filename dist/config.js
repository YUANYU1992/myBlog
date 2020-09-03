module.exports = {
  title: 'yuan',
  description: '这是钮旭明的测试项目啊哈哈',
  base: '/myBlog/',
  configureWebpack: {
    resolve: {
      alias: {
        '@alias': './assets/'
      }
    }
  },
}