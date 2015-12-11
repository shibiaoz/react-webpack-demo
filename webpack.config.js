/**
 * http://www.html-js.com/article/The-front-four-basic-skills-shuoxuedouchang%202931
 * http://www.infoq.com/cn/articles/react-and-webpack
 * http://www.infoq.com/cn/react1/
 * @type {[type]}
 */
var webpack = require('webpack');
// var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
var path = require('path');
module.exports = {
    //指定打包的入口文件，每有一个键值对，就是一个入口文件
    entry: {
        //配置打包结果，path定义了输出的文件夹，
        //filename则定义了打包结果文件的名称，
        //filename里面的[name]会由entry中的键（这里是entry1和entry2）替换
        entry: './index.jsx',
    },
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js'
    },
    /**
     * 定义了对模块的处理逻辑，这里可以用loaders定义了一系列的加载器，
     * 以及一些正则。当需要加载的文件匹配test的正则时，
     * 就会调用后面的loader对文件进行处理，这正是webpack强大的原因。
     * 比如这里定义了凡是.js结尾的文件都是用babel-loader做处理，
     * 而.jsx结尾的文件会先经过jsx-loader处理，然后经过babel-loader处理。
     * 当然这些loader也需要通过npm install安装
     *
     *
     * 加载器之间的级联是通过感叹号来连接
     */
    module: {
        loaders: [
        {
            test: /\.jsx$/,
            loader: 'babel-loader',
            query: {
                "presets": ["es2015", "react"]
            },
            exclude: /node_modules/
        },
        {
            test: /\.js$/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015']
            },
            exclude: /node_modules/
        }]
    },

    /**
     * resolve：定义了解析模块路径时的配置，常用的就是extensions，
     * 可以用来指定模块的后缀，这样在引入模块时就不需要写后缀了，会自动补全
     */
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    // plugins: [commonsPlugin]
};
