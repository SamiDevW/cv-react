const path = require('path');

module.exports = {
    entry: './src/index.js',  // Adjust the entry point to your project's main file
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            // Add other loaders as needed (e.g., CSS, images)
        ],
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
        setupMiddlewares: (middlewares, devServer) => {
            // Add your middleware setup code here
            middlewares.unshift((req, res, next) => {
                console.log('Middleware before existing middlewares');
                next();
            });

            middlewares.push((req, res, next) => {
                console.log('Middleware after existing middlewares');
                next();
            });

            return middlewares;
        },
    },
};
