import { FC } from 'react'
import {
   DefaultRenderManagerStates,
   RenderManagerChildren,
} from './RenderManager.types'

export const mockStates: DefaultRenderManagerStates = {
   isError: false,
   isLoading: true,
   isEmpty: false,
}

export const MOCK_CONTENT_TEST_ID = 'mock-content'

export const MockContent: FC = ({ children }) => (
   <h1 data-testid={MOCK_CONTENT_TEST_ID}>{children}</h1>
)

export const mockChildren: RenderManagerChildren<DefaultRenderManagerStates> = {
   isError: <MockContent>Error</MockContent>,
   isLoading: <MockContent>Loading</MockContent>,
   isEmpty: <MockContent>Empty</MockContent>,
   default: <MockContent>Default</MockContent>,
}
