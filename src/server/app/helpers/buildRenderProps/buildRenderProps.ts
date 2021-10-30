import { buildRenderPropsOptions, RenderProps } from '../../types'

const processOptions = (props: RenderProps, options?: buildRenderPropsOptions) => {
    if (options?.titleUpperCase) {
        props.title = props.title.toLocaleUpperCase()
    }

    return props
}

export const buildRenderProps = (props: RenderProps, options?: buildRenderPropsOptions) => {
    const resultProps: RenderProps = processOptions({
        title: props.title,
        footer: props.footer,
        js: props.js,
        css: props.css,
        header: props.header,
        loggedIn: props.loggedIn,
        hostUrl: props.hostUrl
    }, options)

    return resultProps
}