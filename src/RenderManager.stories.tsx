import { ComponentMeta } from '@storybook/react'
import RenderManager from './RenderManager'
import { DefaultRenderManagerStates } from './RenderManager.types'

export default {
   title: 'RenderManager',
   component: RenderManager,
} as ComponentMeta<typeof RenderManager>

export const _RenderManager = () => {
   const states: DefaultRenderManagerStates = {
      isError: false,
      isLoading: true,
      isEmpty: false,
   }

   return (
      <RenderManager states={states}>
         {{
            isError: <h1>Error!</h1>,
            isLoading: <h1>Loading...</h1>,
            isEmpty: <h1>Empty</h1>,
            default: <h1>Rendered :) </h1>,
         }}
      </RenderManager>
   )
}
