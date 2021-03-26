const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const copyWebpackPlugin = require("copy-webpack-plugin");
const { argv } = require("process");
//tout crée par moi
module.exports = (env, argv)=>{
    const config =  {
        entry: "./app/main.js",
        output:{
            filename: "bundle.js",
            path : path.resolve(__dirname, "dist"),
        }, 
        plugins:[
            new copyWebpackPlugin({
                patterns:[{from: "views", to: "views"}]
            }),
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
                title: "Paris Events",
                template: "index.html",
            }),
        ],
        module:{
            rules: [
                {
                    test: /\.js$/i,
                    exclude: /node_modules/,
                    use: ["babel-loader"],
                },
                {
                    test: /\.css$/i,
                    use: ["style-loader", "css-loader"],
                },
                {
                    test: /\.(png|jpg|jpeg|gif|svg)$/i,
                    type: "asset/resource"
                }
            ]
        }
    }
    // si on n'est pas en prod, activer la source map
	if (argv.mode === 'development') {
		config.devtool = "source-map";
	}
	return config;
};