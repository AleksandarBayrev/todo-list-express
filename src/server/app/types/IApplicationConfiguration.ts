import { IAssets } from './IAssets'

export interface IApplicationConfiguration {
    applicationName: string
    viewsPath: string
    publicStaticRoutePath: string
    contentType: string
    assets: IAssets
    memoryCacheUrl: string
    bodyLimit: string
    environmentConfigFilename: string
}