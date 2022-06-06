import { ReactNode } from 'react'

export interface DefaultRenderManagerStates {
   isLoading?: boolean
   isFetching?: boolean
   isFirstPageLoading?: boolean
   isError?: boolean
   isEmpty?: boolean
}

export type RenderManagerChildrenBase<T> = {
   // eslint-disable-next-line no-unused-vars
   [K in keyof T]: ReactNode
}

export type RenderManagerChildren<T> = RenderManagerChildrenBase<T> & {
   default: ReactNode
}

export interface RenderManagerProps<T> {
   /** The states of the render conditions */
   states: T
   /** The render output (by the keys order) based on the `states` prop */
   children: RenderManagerChildren<T>
   /** default fallback render output, if no children keys provided */
   fallbackChildren?: RenderManagerChildrenBase<T>
}
