const path = require('path');
const root = path.resolve(__dirname);
const isProd = 'production' === process.env['NODE_ENV'] ? true : false;
const isDev = !isProd;
const devPort = 9000;

const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    mode: isProd ? 'production' : 'development',
    entry: {
        index: './src/index.ts'
    },
    output: {
        path: path.resolve(root, 'dist'),
        filename: isProd ?
            'static/js/[name].js' : 'static/js/[name]-[hash].js'
    },
    devServer: {
        port: devPort,
        progress: true,
        contentBase: false, //已经拷贝
        compress: true
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [{
                from: 'src/assets',
                to: '.',
                globOptions: {
                    ignore: ["**/README.md"] // 不拷贝README
                }
            }, ]
        }),
        new HtmlWebpackPlugin({
            template: 'src/index.html', // 模板HTML文件路径
            filename: 'index.html', // 打包后HTML文件名称
            minify: { // 优化操作
                removeAttributeQuotes: isProd, // 删除多余的双引号
                collapseWhitespace: isProd, // 删除换行
                hash: isDev
            }
        }),
        new OpenBrowserPlugin({
            url: `http://localhost:${devPort}/`
        }),
        new MiniCssExtractPlugin({
            filename: isProd ?
                'static/style/[name].css' : 'static/style/[name]-[hash].css'
        }),
        new VueLoaderPlugin()
    ],
    resolve: {
        extensions: ['.ts', '.js', '.vue'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    module: {
        rules: [{
                test: /\.json5$/,
                loader: 'json5-loader'
            },
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'ts-loader',
                    options: {
                        appendTsSuffixTo: [/\.vue$/]
                    }
                }]
            },
            {
                test: /\.(png|jpe?g|gif|icon?)$/i,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 1024 * 8, // 小于8KB则返回base64字符串
                        name: isProd ?
                            'static/images/[name].[ext]' : 'static/images/[name]-[hash].[ext]'
                    }
                }]
            },
            {
                test: /\.(sa|sc|c)ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.vue$/i,
                loader: 'vue-loader'
            }
        ]
    }
};