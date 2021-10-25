import { PUBLIC_FOLDER, VIEWS_FOLDER } from './app.constants'
import { path } from './dependencies'
import { IApplicationConfiguration } from './types'

export const appConfig: IApplicationConfiguration = {
    applicationName: 'Todo List',
    viewsPath: path.join(__dirname, VIEWS_FOLDER),
    publicStaticRoutePath: path.join(__dirname, PUBLIC_FOLDER),
    contentType: 'application/json',
    assets: {
        css: ['/css/style.css'],
        js: ['/js/index.js']
    },
    memoryCacheUrl: 'http://localhost:3001',
    bodyLimit: '100mb',
    environmentConfigFilename: 'environment.config'
}