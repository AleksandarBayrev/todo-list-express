export type ServerErrorCodes = 'EACCES' | 'EADDRINUSE'

export type Port = string | number | boolean

export interface INetworkAddress {
    port: string
}

export interface IServerError {
    syscall: string
    code: ServerErrorCodes
}

export interface IServerConfiguration {
    port: string
}

export type EventListeners = 'error' | 'listening'

export interface IServer {
    listen: (port: Port) => void
    on: (event: EventListeners, callback: Function) => void
    address: () => string | INetworkAddress
}