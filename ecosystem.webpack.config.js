const { getAppName, getCacheAppName } = require('./ecosystem.appnames');

module.exports = {
    apps: [
        {
            name: getAppName(),
            script: './bundle/server.js',
            instances: 'max',
            exec_mode: 'cluster'
        },
        {
            name: getCacheAppName(),
            script: './bundle/cacheServer.js',
            instances: '1',
        }
    ]
}