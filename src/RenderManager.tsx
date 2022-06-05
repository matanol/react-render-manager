import {
   DefaultRenderManagerStates,
   RenderManagerProps,
} from './RenderManager.types'

function RenderManager<T = DefaultRenderManagerStates>({
   states,
   children,
}: RenderManagerProps<T>) {
   if (!children && typeof children !== 'object') {
      return null
   }

   const childrenKeys = Object.keys(children) as (keyof T)[]
   const childKeyToRender = childrenKeys.find((key) => states[key])

   return <>{children[childKeyToRender ?? 'default']}</>
}

export default RenderManager
