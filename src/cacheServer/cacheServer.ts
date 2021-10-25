/**
 * Module dependencies.
 */

import { app } from './cache'
import { normalizePort, http, onListening, onError, IServerError, IServer, Port } from './init'
import { serverConfig } from './cacheServer.config'
import { DEFAULT_PORT } from './cacheServer.constants'

/**
 * Get port from configuration and store in Express.
 */

const port: Port = normalizePort(serverConfig.port || DEFAULT_PORT);
app.set('port', port);

/**
 * Create HTTP server.
 */

const server: IServer = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

console.log(`Starting cache server...`);
server.listen(port);
server.on('error', (error: IServerError) => onError(error, port));
server.on('listening', () => onListening(server));