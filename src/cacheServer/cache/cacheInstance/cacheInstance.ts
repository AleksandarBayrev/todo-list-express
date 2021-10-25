import { appConfig } from '../app.config';
import { NodeCache } from '../dependencies'
export const cacheInstance = new NodeCache(appConfig.cacheDefaults);