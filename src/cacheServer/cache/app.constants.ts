export enum Environment {
    Development = 'development',
    Production = 'production'
}

export const AvailableRoutes = {
    availableRoutes: {
        '/': {
            methods: ['GET']
        },
        '/add': {
            methods: ['POST']
        },
        '/get': {
            methods: ['GET']
        },
        '/count': {
            methods: ['GET']
        }
    }
}