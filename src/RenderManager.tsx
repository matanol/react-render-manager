import {
   DefaultRenderManagerStates,
   RenderManagerProps,
} from './RenderManager.types'

function RenderManager<T = DefaultRenderManagerStates>({
   states,
   children,
   fallbackChildren,
}: RenderManagerProps<T>) {
   if (!children?.default) {
      return null
   }

   const combinedChildren = {
      ...(fallbackChildren ?? {}),
      ...children,
   }

   const childrenKeys = Object.keys(combinedChildren) as (keyof T)[]
   const childKeyToRender = childrenKeys.find((key) => states[key])

   return <>{combinedChildren[childKeyToRender ?? 'default']}</>
}

export default RenderManager
