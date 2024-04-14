import nodeExternals from 'webpack-node-externals';
import path from 'path';

// import { webpack } from '@webpack-cli/webpack-cli';

// export default {
//     mode: 'development',
//     target: 'node',
//     externals: [nodeExternals()],
//     entry: './src/Button.cjs',
//     output: {
//         filename: 'bundle.js',
//         chunkFormat: 'module', // Add this line
//         module: true, // Add this line to enable the outputModule experiment
//         libraryTarget: "module",
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.(js|jsx)$/,
//                 exclude: /node_modules/,
//                 use: {
//                     loader: 'babel-loader',
//                     options: {
//                         presets: ['@babel/preset-env', '@babel/preset-react'],
//                     },
//                 },
//             },
//         ],
//     },
//     experiments: {
//         outputModule: true, // Add this line to enable the outputModule experiment
//     },

// };



export default {
    mode: 'development', // or 'production' for production build
    entry: './src/Button.js', // Entry point of your application
    output: {
        // path: path.resolve(__dirname, 'dist'),
        //         filename: 'bundle.js',
        chunkFormat: 'module', // Add this line
        //         module: true, // Add this line to enable the outputModule experiment
        //         libraryTarget: "module",

        filename: 'bundle.js',
        libraryTarget: 'module', // Output format as ES module
        environment: {
            module: true,
        },
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    experiments: {
        outputModule: true, // Enable experimental output module support
    },
    target: 'node', // Target environment for Node.js
};