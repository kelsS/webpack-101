// module exports object
// 

// Module export with SCSS
module.exports = {
    entry: './src/main.js',
    output: {
        path: __dirname + '/build',
        filename: 'bundle.js'
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

