import { describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import RenderManager from './RenderManager'
import { DefaultRenderManagerStates } from './RenderManager.types'
import {
   mockChildren,
   mockStates,
   MOCK_CONTENT_TEST_ID,
} from './RenderManager.mock'

export const RenderManagerMock = ({
   states,
}: {
   states: DefaultRenderManagerStates
}) => <RenderManager states={states}>{mockChildren}</RenderManager>

describe(RenderManager.name, () => {
   test('renders without crashing', () => {
      render(<RenderManagerMock states={mockStates} />)
   })

   test('renders the correct state', () => {
      const states: DefaultRenderManagerStates = {
         isError: false,
         isLoading: true,
         isEmpty: false,
      }

      render(<RenderManagerMock states={states} />)
      const elementRef = screen.getByTestId(MOCK_CONTENT_TEST_ID)
      expect(elementRef.textContent).toBe('Loading')
   })

   test('renders the correct order', () => {
      const states: DefaultRenderManagerStates = {
         isError: true,
         isLoading: true,
         isEmpty: false,
      }

      render(<RenderManagerMock states={states} />)
      const elementRef = screen.getByTestId(MOCK_CONTENT_TEST_ID)
      expect(elementRef.textContent).toBe('Error')
   })

   test('renders the default state', () => {
      const states: DefaultRenderManagerStates = {
         isError: false,
         isLoading: false,
         isEmpty: false,
      }

      render(<RenderManagerMock states={states} />)
      const elementRef = screen.getByTestId(MOCK_CONTENT_TEST_ID)
      expect(elementRef.textContent).toBe('Default')
   })

   test('renders null if there is no default render', () => {
      const WRAPPER_TEST_ID = 'wrapper-test-id'
      render(
         <div data-testid={WRAPPER_TEST_ID}>
            {/* @ts-ignore - for users who are not using TS */}
            <RenderManager states={mockStates}>{{}}</RenderManager>
         </div>
      )
      const elementRef = screen.getByTestId(WRAPPER_TEST_ID)
      expect(elementRef).toBeEmptyDOMElement()
   })
})
