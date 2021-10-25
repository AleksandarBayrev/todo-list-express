/**
 * Normalize a port into a number, string, or false.
 */

import {Port} from './types'

export const normalizePort = (val: string): Port => {
    const port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}