import NodeCache from 'node-cache'
export const TodosCache = new NodeCache({
    stdTTL: 0,
    deleteOnExpire: false
})