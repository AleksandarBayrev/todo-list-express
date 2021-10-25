const { getAppName, getCacheAppName } = require('./ecosystem.appnames');

module.exports = {
    apps: [
        {
            name: getAppName(),
            script: './build/server/server.js',
            instances: 'max',
            exec_mode: 'cluster',
            watch: ['./src']
        },
        {
            name: getCacheAppName(),
            script: './build/cacheServer/cacheServer.js',
            instances: '1',
            watch: ['./src']
        }
    ]
}
