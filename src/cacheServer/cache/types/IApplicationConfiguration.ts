import { NodeCache } from '../dependencies';

export interface IApplicationConfiguration {
    applicationName: string
    contentType: string
    bodyLimit: string
    cacheDefaults: NodeCache.Options
}