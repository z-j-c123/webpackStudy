let webpack = require("webpack");       //获取webpack插件的主函数
let WebpackMerge = require("webpack-merge");
let commonConfig = require("./webpack.common.js");
let devConfig = {
    mode: "development",
    devtool: 'eval-cheap-module-source-map',
    devServer:{
        //我们自己在使用webpack开发的时候，搭建的一个临时服务器
        contentBase: "./bundle",
        //临时服务器的资源根目录
        open: true, //运行了webpack-dev-server自动打开浏览器并进入该服务器地址
        port: 9527,  //设置端口号
        hot: true,  //开启hot module replacement功能
        hotOnly: true   //即便ＨＭＲ不生效，浏览器也不会刷新
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
    ]
}
module.exports = WebpackMerge.merge(commonConfig, devConfig);