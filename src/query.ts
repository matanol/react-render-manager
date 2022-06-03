import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// eslint-disable-next-line import/prefer-default-export
export const api = createApi({
   baseQuery: fetchBaseQuery({
      baseUrl: 'https://jsonplaceholder.typicode.com/posts',
   }),
   reducerPath: 'api',
   tagTypes: ['Post'],
   endpoints: (build) => ({
      getPosts: build.query<any[], void>({
         query: () => ({ method: 'GET', url: '' }),
         providesTags: ['Post'],
      }),
      addPost: build.mutation<string, any>({
         query: () => ({ method: 'POST', url: '' }),
         invalidatesTags: (result) => (result ? ['Post'] : []),
      }),
   }),
})
