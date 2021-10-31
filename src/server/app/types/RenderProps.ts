export type RenderProps = {
    title: string
    footer: string
    js: string[]
    css: string[]
    header: string
    loggedIn: string
    hostUrl: string
}

export type buildRenderPropsOptions = {
    titleUpperCase: boolean
}