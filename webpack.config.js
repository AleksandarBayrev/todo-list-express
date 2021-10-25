const nodeExternals = require('webpack-node-externals');

module.exports = {
    mode: 'production',
    target: 'node',
    externals: [nodeExternals()], // removes node_modules from your final bundle
    optimization: {
        minimize: true, // enabling this reduces file size and readability
    },
};