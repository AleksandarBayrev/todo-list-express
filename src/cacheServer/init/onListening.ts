/**
 * Event listener for HTTP server 'listening' event.
 */

import {debug} from './dependencies'
import {IServer} from './types';

export const onListening = (server: IServer) => {
    var addr = server.address();
    var bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    debug('Listening on ' + bind);
}