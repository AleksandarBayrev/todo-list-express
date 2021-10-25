import NodeCache from 'node-cache';

export const environmentVariablesCache = new NodeCache({
    stdTTL: 0,
    deleteOnExpire: false
});