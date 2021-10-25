const { getAppName, getCacheAppName } = require('./ecosystem.appnames');

module.exports = {
    apps: [
        {
            name: getAppName(),
            script: './build/server/server.js',
            instances: 'max',
            exec_mode: 'cluster'
        },
        {
            name: getCacheAppName(),
            script: './build/cacheServer/cacheServer.js',
            instances: '1',
        }
    ]
}