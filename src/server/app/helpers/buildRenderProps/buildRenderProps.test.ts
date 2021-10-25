import { buildRenderProps } from './buildRenderProps'

describe('buildRenderProps', () => {
    it('returns correct props', () => {
        expect(buildRenderProps({title: 'test', footer: 'test', js: ['/js/app.js'], css: ['/css/app.css'], header: 'test', loggedIn: false})).toEqual({
            title: 'test',
            footer: 'test',
            css: ['/css/app.css'],
            js: ['/js/app.js'],
            header: 'test',
            loggedIn: false
        })
    })
    it('returns correct props (title is uppercase)', () => {
        expect(buildRenderProps({title: 'test', footer: 'test', js: ['/js/app.js'], css: ['/css/app.css'], header: 'test', loggedIn: false}, {titleUpperCase: true})).toEqual({
            title: 'TEST',
            footer: 'test',
            css: ['/css/app.css'],
            js: ['/js/app.js'],
            header: 'test',
            loggedIn: false
        })
    })
})