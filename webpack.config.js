const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// css 파일 추출 플러그인입니다
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// build 폴더 자동 정리를 위한 플러그인 입니다

module.exports = {
  entry: "./src/content.js",
  output: {
    filename: "content.bundle.js",
    path: path.resolve(__dirname + "/dist")
  },
  devServer: {
    contentBase: path.resolve("./dist"),
    index: "index.html",
    port: 9000
    // 변경 사항 자동 적용을 위한 설정입니다
  },
  mode: "none",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: "/node_modules",
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader,'css-loader']
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [{
            loader: "file-loader",
            options: {
                // publicPath:"./dist/",
                name:"[name].[ext]",
            }
        }],
    },
    ]
    // js, jsx, html, css 파일 번들링 관련 설정입니다
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css'
    }),
    new CleanWebpackPlugin()
    // 플러그인 설정들입니다
  ]
};