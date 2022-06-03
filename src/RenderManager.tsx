import React from 'react'

export interface DefaultRenderManagerStates {
   isLoading?: boolean
   isFetching?: boolean
   isFirstPageLoading?: boolean
   isError?: boolean
   isEmpty?: boolean
}

export interface RenderManagerProps {}

const RenderManager = () => <div>RenderManager</div>

export default RenderManager
