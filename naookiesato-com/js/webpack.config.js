var debug = process.env.NODE_ENV !== "production";
var webpack = require("webpack");

module.exports = {
    context: __dirname,
    devtool: debug ? "inline-sourcemap" : null.var debug = process.env.NODE_ENV !== "production",
    entry:  "./port_listener.js",
    output: {
        path: __dirname,
        filename: "port_listener.min.js",
    }
    plugins: debug ? [] : [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
    ],
};
