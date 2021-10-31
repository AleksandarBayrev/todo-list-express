import NodeCache from 'node-cache'
export const LoginCache = new NodeCache({
    stdTTL: 0,
    deleteOnExpire: false
})