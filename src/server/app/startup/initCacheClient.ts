import { CacheServerClient } from '../../../cacheServerClient';
import { express } from '../dependencies';
import { IApplicationConfiguration } from '../types';

export const initCacheClient = (app: express.Application, config: IApplicationConfiguration) => {
    CacheServerClient.init({
        cacheServerUrl: config.memoryCacheUrl
    });
}