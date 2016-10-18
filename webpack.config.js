module.exports = {
    entry: './src/main.tsx',
    output: {
        filename: './public/bundle.js'
    },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
    },
    module: {
        loaders: [
            // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
            {
                test: /\.tsx?$/, loader: 'ts-loader',
                // exclude: [/node_modules/, /public/],
                // include: ['./src']
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader!autoprefixer-loader",
                exclude: [/node_modules/, /public/]
            },
        ]
    },
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
};