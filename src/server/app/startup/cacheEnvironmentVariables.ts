import NodeCache from 'node-cache';
import {dotenv} from '../dependencies';
import {IApplicationConfiguration} from '../types';

export const cacheEnvironmentVariables = (cacheInstance: NodeCache, config: IApplicationConfiguration) => {
    const envConfig = dotenv.config({path: config.environmentConfigFilename}).parsed;
    if (envConfig) {
        Object.keys(envConfig).map(key => cacheInstance.set(key, envConfig[key]))
    }
}