import { buildRenderProps } from './buildRenderProps'

describe('buildRenderProps', () => {
    it('returns correct props', () => {
        expect(buildRenderProps({title: 'test', footer: 'test', js: ['/js/app.js'], css: ['/css/app.css'], header: 'test'})).toEqual({
            title: 'test',
            footer: 'test',
            css: ['/css/app.css'],
            js: ['/js/app.js'],
            header: 'test'
        })
    })
    it('returns correct props (title is uppercase)', () => {
        expect(buildRenderProps({title: 'test', footer: 'test', js: ['/js/app.js'], css: ['/css/app.css'], header: 'test'}, {titleUpperCase: true})).toEqual({
            title: 'TEST',
            footer: 'test',
            css: ['/css/app.css'],
            js: ['/js/app.js'],
            header: 'test'
        })
    })
})