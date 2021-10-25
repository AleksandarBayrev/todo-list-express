const path = require('path');
const baseConfig = require('./webpack.config');

module.exports = {
    ...baseConfig,
    entry: './build/server/server.js', // make sure this matches the main root of your code 
    output: {
        path: path.join(__dirname, 'bundle'), // this can be any path and directory you want
        filename: 'server.js',
    }
};