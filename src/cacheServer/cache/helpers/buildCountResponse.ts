import { NodeCache } from '../dependencies'
import { CountResponse } from '../types'

export const buildCountResponse = (cacheInstance: NodeCache): CountResponse => {
    return {
        count: cacheInstance.keys().length,
        accessTime: new Date().toISOString()
    }
}