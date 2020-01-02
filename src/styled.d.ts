import 'styled-components'

declare module 'styled-components' {
    export interface DefaultLayout {
        columns?: number | string,
        alignment?: string,
        autoRows?: number | string,
        templateRows?: string
    }
}