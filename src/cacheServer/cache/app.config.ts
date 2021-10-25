import { IApplicationConfiguration } from './types'

export const appConfig: IApplicationConfiguration = {
    applicationName: 'Todo List Cache',
    contentType: 'application/json',
    bodyLimit: '100mb',
    cacheDefaults: {
        stdTTL: 60,
        checkperiod: 1
    }
}