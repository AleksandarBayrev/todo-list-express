import { cacheInstance } from './cacheInstance'

describe('cacheInstance', () => {
    it('sets cache item', () => {
        cacheInstance.set('1', 'test')
        expect(cacheInstance.has('1')).toEqual(true)
    })
    it('gets cache item', () => {
        cacheInstance.set('1', 'test')
        expect(cacheInstance.has('1')).toEqual(true)
        expect(cacheInstance.get('1')).toEqual('test')
    })
})