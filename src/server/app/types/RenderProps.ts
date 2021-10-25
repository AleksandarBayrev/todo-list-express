export type RenderProps = {
    title: string
    footer: string
    js: string[]
    css: string[]
    header: string
    loggedIn: boolean
}

export type buildRenderPropsOptions = {
    titleUpperCase: boolean
}