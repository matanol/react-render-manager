# React Render Manager ✨

Manage your `JSX` render conditions in more cleaner and consistent way.

## Features:

-  🧼 Clean and consistent logic of rendering multiple render conditions
-  🚀 Feels natural with server state management libraries such as <a href="https://www.npmjs.com/package/react-query">react-query</a> / <a href="https://www.npmjs.com/package/swr">SWR</a> / <a href="https://www.npmjs.com/package/@apollo/client">apollo</a>
-  ✅ 100% `TypeScript`, types are generic (you can have your own states type)

## Example with react-query:

```jsx
import { useQuery } from 'react-query'
import RenderManager from 'react-render-manager'

const PostsPage = () => {
   const { data, isError, isLoading } = useQuery('getPosts', getPosts)
   const states = {
      isError,
      isLoading,
      isEmpty: !data.length,
   }

   return (
      <RenderManager states={states}>
         {{
            isError: <ErrorMessage />,
            isLoading: <SkeletonLoader />,
            isEmpty: <NoResults />,
            default: <Posts posts={data} />,
         }}
      </RenderManager>
   )
}
```

## Install:

yarn:

```shell
yarn add react-render-manager
```

npm:

```shell
npm i react-render-manager
```

## Important notes:

> The order of the keys in the children is important and will determine which state will be rendered first if its true.

> Make sure to provide only string keys, as other keys might change the ordering of the keys in the object.

## Override the default state type:

> The type of the rendered children is dynamically determened by the type of the `states` prop, by default it's `DefaultRenderManagerStates` type.

```jsx
import RenderManager, { DefaultRenderManagerStates } from 'react-render-manager'

const App = () => {
   const states: DefaultRenderManagerStates = {
      isError,
      isLoading,
   }

   return (
      <RenderManager states={states}>
         {{
            isError: <h1>Error!</h1>,
            isLoading: <h1>Loading...</h1>,
            default: <h1>Default</h1>,
         }}
      </RenderManager>
   )
}
```

Override the default type:

```jsx
interface CustomRenderManagerStates {
   loading: boolean;
   error: boolean;
}

const App = () => {
   const states: CustomRenderManagerStates = {
      error,
      loading,
   }

   return (
      <RenderManager states={states}>
         {{
            error: <h1>Error!</h1>,
            loading: <h1>Loading...</h1>,
            default: <h1>Default</h1>,
         }}
      </RenderManager>
   )
}
```

Other way:

```jsx
   const states = {
      error,
      loading,
   }

   return (
      <RenderManager<CustomRenderManagerStates> states={states}>
         {{
            error: <h1>Error!</h1>,
            loading: <h1>Loading...</h1>,
            default: <h1>Default</h1>,
         }}
      </RenderManager>
   )
```

You can also create reusable custom render manager:

> Now you must provide `loading` & `error` states (they are required in the interface)

```jsx
import RenderManager, { RenderManagerProps } from 'react-render-manager'

interface CustomRenderManagerStates {
   loading: boolean
   error: boolean
}

export const CustomRenderManager = (
   props: RenderManagerProps<CustomRenderManagerStates>
) => <RenderManager {...props} />
```
