import { serverConfig } from "../../../server.config"
import { express } from "../../dependencies"
import { getHostname } from "./getHostname"
describe('getHostname', () => {
    it('returns without port', () => {
        expect(getHostname({ hostname: 'test', protocol: 'http' } as express.Request, '80')).toEqual('http://test/')
    })
    it('returns with server port', () => {
        expect(getHostname({ hostname: 'test', protocol: 'http' } as express.Request)).toEqual(`http://test:${serverConfig.port}/`)
    })
    it('returns with server port', () => {
        expect(getHostname({ hostname: 'test', protocol: 'http' } as express.Request, '3535')).toEqual(`http://test:3535/`)
    })
})