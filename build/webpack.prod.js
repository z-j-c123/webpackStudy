let WebpackMerge = require("webpack-merge");
let commonConfig = require("./webpack.common.js");
let prodConfig = {
    mode: "production",
    // devtool: 'cheap-module-source-map',
}
module.exports = WebpackMerge.merge(commonConfig, prodConfig)