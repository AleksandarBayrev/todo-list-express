import { NodeCache } from '../dependencies'
import { GetResponse } from '../types'

export const buildGetResponse = (itemKey: string, cacheInstance: NodeCache): GetResponse => {
    const item = cacheInstance.get(itemKey) as string
    const ttl = cacheInstance.getTtl(itemKey)
    return {
        itemKey,
        itemData: item ? JSON.parse(item) : null,
        ttl: ttl || null,
        accessTime: new Date().toISOString()
    }
}