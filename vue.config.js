


module.exports = {
  devServer: {
    proxy: {
      '/api':{
        target: 'http://127.0.0.1:3000',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
// module.exports = {
//   devServer: {
//     proxy: {
//       '/api':{
//         target: 'http://localhost:3000',
//         changeOrigin: true,
//         ws: true,
//         pathRewrite: {
//           '^/api': 'http://localhost:3000'
//         }
//       }
//     }
//   }
// }