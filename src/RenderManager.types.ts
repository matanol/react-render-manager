import { ReactNode } from 'react'

export interface DefaultRenderManagerStates {
   isLoading?: boolean
   isFetching?: boolean
   isFirstPageLoading?: boolean
   isError?: boolean
   isEmpty?: boolean
}

export type RenderManagerChild<T> = {
   // eslint-disable-next-line no-unused-vars
   [K in keyof T]: ReactNode
} & { default: ReactNode }

export interface RenderManagerProps<T> {
   states: T
   children: RenderManagerChild<T>
}
