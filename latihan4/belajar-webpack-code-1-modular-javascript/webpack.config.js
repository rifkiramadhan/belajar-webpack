const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'output'),
        filename: 'bundle.js',
    },
    watch: true,
    devtool: false,
    module: {
        rules: [
            // {
            //     test: /\.css$/i,
            //     use: ['style-loader', 'css-loader']
            // },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: [
                      ['@babel/preset-env']
                    ]
                  }
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                  // Creates `style` nodes from JS strings
                  "style-loader",
                  // Translates CSS into CommonJS
                  "css-loader",
                  // Compiles Sass to CSS
                  "sass-loader",
                ],
            },  
        ]
    }
};