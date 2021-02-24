let path = require("path"); //引用node的path模块
let htmlWebpackPlugin = require("html-webpack-plugin");
let { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
    entry: {
        index: "./src/js/index.js"
    },
    //指定出口文件
    output: {
        // filename: "main.js",
        // publicPath: "./dist",
        path: path.resolve(__dirname, "../bundle")
    },
    devServer: {
        //我们自己在使用webpack开发的时候，搭建的一个临时服务器
        contentBase: "./bundle",
        //临时服务器的资源根目录
        open: true, //运行了webpack-dev-server自动打开浏览器并进入该服务器地址
        port: 9527,  //设置端口号
        hot: true,  //开启hot module replacement功能
        hotOnly: true   //即便ＨＭＲ不生效，浏览器也不会刷新
    },
    module: {
        rules: [
            {
                test: /\.(jpg|jpeg|png|gif|weap)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        outputPath: "./images",
                        name: "[name].[ext]"
                    }
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 2
                        }
                    },
                    "sass-loader",
                    "postcss-loader",
                ]
            },
            {
                test: /\.js$/,
                loader: "babel-loader",
            }
        ]
    },
    optimization: {
        usedExports: true,
        splitChunks: {      //webpack自动完成代码分割
            chunks: "all",
            cacheGroups: {
                vendors: false,
                default: false
            }
        }
    },
    plugins: [
        new htmlWebpackPlugin({
            template: "./src/html/template.html"
        }),
        new CleanWebpackPlugin(),
    ]
}
