import { NodeCache } from '../dependencies'
import { DeleteResponse } from '../types'

export const buildDeleteResponse = (itemKey: string, deletedItem: any, cacheInstance: NodeCache): DeleteResponse => {
    return {
        itemKey,
        deletedItem,
        deleted: cacheInstance.has(itemKey) === false,
        accessTime: new Date().toISOString()
    }
}