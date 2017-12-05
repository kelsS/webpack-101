// module exports object
// 

// // Module export with SCSS
// module.exports = {
//     entry: './src/main.js',
//     output: {
//         path: __dirname + '/build',
//         filename: 'bundle.js'
//     },
//     // object
//     module: {
//         // array of objects that describes all of the loaders being used
//         loaders: [
//             {
//                 //js extension finder
//                 test: /\.js$/,
//                 // run webpack only on these files
//                 exclude: /(node_modules)/,
//                 //do not run webpack on these fils
//                 // include:
//                 loader: 'babel-loader',
//                 // set equal to an object. Used to set babel presets
//                 query: {
//                     presets: ['es2015', 'react']
//                     // create .babelrc file to set presets
//                 }
//             },
//             // add another loader for inlining images which reduces http requests
//             {
//                 test: /\.(png|jpg)$/,
//                 // if an image is bigger than 20kb the loader will create a direct url to the asset
//                 loader: 'url-loader?limit=20000'
//             },
//             {
//                 // add another loader object for scss
//                 test: /\.scss$/,
//                 loader: 'style-loader!css-loader!sass-loader'
//                 // ! piping in css-loader and ! piping sass-loader
//             }
//         ]
//     }
// };

// Code Splitting - Multiple Entry Points | Separate bundles for separate pages | Load only code we need


// var webpack = require('webpack');
// // a part of nodejs - lets you create paths
// var path = require('path');
// // have to optin to use CommonChunks plugin
// var CommonChunksPlugin = require('./node_modules/webpack/lib/optimize/CommonsChunkPlugin');

// module.exports = {
//     entry: {
//         about: './dist/about',
//         contact: './dist/contact',
//         // code from different libraries - use array
//         vendor: ['react', 'react-dom']
//     },
//     output: {
//         path: path.join(__dirname, 'build'),
//         filename: '[name].bundle.js' // [] - var for file name
//     },
//     // object
//     module: {
//         // array of objects that describes all of the loaders being used
//         loaders: [
//             {
//                 //js extension finder
//                 test: /\.js$/,
//                 // run webpack only on these files
//                 exclude: /(node_modules)/,
//                 //do not run webpack on these fils
//                 // include:
//                 loader: 'babel-loader',
//                 // set equal to an object. Used to set babel presets
//                 query: {
//                     presets: ['es2015', 'react']
//                     // create .babelrc file to set presets
//                 }
//             },
//             // add another loader for inlining images which reduces http requests
//             {
//                 test: /\.(png|jpg)$/,
//                 // if an image is bigger than 20kb the loader will create a direct url to the asset
//                 loader: 'url-loader?limit=20000'
//             },
//             {
//                 // add another loader object for scss
//                 test: /\.scss$/,
//                 loader: 'style-loader!css-loader!sass-loader'
//                 // ! piping in css-loader and ! piping sass-loader
//             }
//         ]
//     },
//     // add plugins array
//     plugins: [
//         new CommonChunksPlugin(
//             {
//             //    name: 'common', filename: 'common.bundle.js',
//                name: 'vendor', filename: 'vendor.bundle.js'
//             }
//         )
//     ]
// };

// CommonChunksPlugin will look for reused code and will create a separate bundle with common code and then will create a bundle of common code and load page specific code first

// Webpack Config with Web Dev Server
var webpack = require('webpack');



module.exports = {
    entry: './dist/app.js',
    output: {
        path: __dirname + '/build',
        filename: 'app.bundle.js'
    },
    // dev server config
    devServer: {
        // true runs directly in browser
        // false runs in iframe
        inline: true,
        // where is content coming from
        contentBase: './build',
        //specify port
        port: 3002
    },
    // object
    module: {
        // array of objects that describes all of the loaders being used
        loaders: [
            {
                //js extension finder
                test: /\.js$/,
                // run webpack only on these files
                exclude: /(node_modules)/,
                //do not run webpack on these fils
                // include:
                loader: 'babel-loader',
                // set equal to an object. Used to set babel presets
                query: {
                    presets: ['es2015', 'react']
                    // create .babelrc file to set presets
                }
            },
            // add another loader for inlining images which reduces http requests
            {
                test: /\.(png|jpg)$/,
                // if an image is bigger than 20kb the loader will create a direct url to the asset
                loader: 'url-loader?limit=20000'
            },
            {
                // add another loader object for scss
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader'
                // ! piping in css-loader and ! piping sass-loader
            }
        ]
    }
};

// Using Coffee Script
// module.exports = {
//     entry: './src/main.coffee',
//     output: {
//         path: __dirname + '/build',
//         filename: 'bundle.js'
//     },
//     // object
//     module: {
//         // array of objects that describes all of the loaders being used
//         loaders: [
//             {
//                 //js extension finder
//                 test: /\.coffee$/,
//                 // run webpack only on these files
//                 exclude: /(node_modules)/,
//                 //do not run webpack on these fils
//                 // include:
//                 loader: 'coffee-loader',
//                 // set equal to an object. Used to set babel presets
//             }
//         ]
//     }
// };

