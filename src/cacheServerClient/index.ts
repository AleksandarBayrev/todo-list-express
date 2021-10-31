import axios from 'axios'

export type CacheServerClient = {
    add(key: string, item: any): any;
    get(key: string): any;
    remove(key: string): any;
    init(options: InitOptions): void
}

type InitOptions = {
    cacheServerUrl: string
}

type Endpoint = 'add' | 'get' | 'remove'

enum CacheServerClientErrors {
    NOT_INITIALIZED = 'CacheServerClient not initialized!'
}

const config = {headers:{'Content-Type': 'application/json'}}

export const CacheServerClient: CacheServerClient = (() => {
    let isInitialized = false;
    let cacheServerUrl = '';

    const buildUrl = (endpoint: Endpoint, itemKey?: string) => {
        let url = ''
        switch (endpoint) {
            case 'add':
                url = `${cacheServerUrl}/${endpoint}`
                break;

            case 'get':
                url = `${cacheServerUrl}/${endpoint}?itemKey=${itemKey}`
                break;
            case 'remove':
                url = `${cacheServerUrl}/${endpoint}?itemKey=${itemKey}`
                break;
        }
        return url
    }

    const add = async (key: string, item: any) => {
        if (!isInitialized) {
            throw CacheServerClientErrors.NOT_INITIALIZED;
        }
        
        try {
            return await axios.post(buildUrl('add'), {
                itemKey: key,
                itemData: item
            }, config);
        } catch (error) {
            return handleError(error)
        }
    }

    const get = async (key: string) => {
        if (!isInitialized) {
            throw CacheServerClientErrors.NOT_INITIALIZED;
        }

        try {
            return await axios.get(buildUrl('get', key)).then(x => x.data);
        } catch (error) {
            return handleError(error)
        }
    }

    const remove = async (key: string) => {
        if (!isInitialized) {
            throw CacheServerClientErrors.NOT_INITIALIZED;
        }

        try {
            return await axios.get(buildUrl('remove', key), config).then(x => x.data);
        } catch (error) {
            return handleError(error)
        }
    }

    const init = (options: InitOptions) => {
        cacheServerUrl = options.cacheServerUrl
        isInitialized = true
    }

    const handleError = (error: any) => ({
        status: 'INTERNAL_CACHE_SERVER_ERROR',
        error
    })

    return {
        add,
        get,
        remove,
        init
    }
})()