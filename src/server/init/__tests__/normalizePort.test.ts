import {normalizePort} from '../normalizePort'

describe('normalizePort', () => {
    it('returns number if it is a number', () => {
        expect(normalizePort('1')).toEqual(1)
    })
    it('returns the string if it is not a number', () => {
        expect(normalizePort('test')).toEqual('test')
    })
    it('returns false', () => {
        expect(normalizePort('-1')).toEqual(false)
    })
})