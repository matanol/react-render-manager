import { describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import RenderManager from './RenderManager'
import { DefaultRenderManagerStates } from './RenderManager.types'
import {
   mockChildren,
   mockStates,
   MOCK_CONTENT_TEST_ID,
} from './RenderManager.mock'

export const TestRenderManager = ({
   states,
}: {
   states: DefaultRenderManagerStates
}) => <RenderManager states={states}>{mockChildren}</RenderManager>

describe(RenderManager.name, () => {
   test('it renders without crashing', () => {
      render(<TestRenderManager states={mockStates} />)
   })

   test('it renders the correct state', () => {
      const states: DefaultRenderManagerStates = {
         isError: false,
         isLoading: true,
         isEmpty: false,
      }

      render(<TestRenderManager states={states} />)
      const elementRef = screen.getByTestId(MOCK_CONTENT_TEST_ID)
      expect(elementRef.textContent).toBe('Loading')
   })

   test('it renders the correct order', () => {
      const states: DefaultRenderManagerStates = {
         isError: true,
         isLoading: true,
         isEmpty: false,
      }

      render(<TestRenderManager states={states} />)
      const elementRef = screen.getByTestId(MOCK_CONTENT_TEST_ID)
      expect(elementRef.textContent).toBe('Error')
   })

   test('it renders the default state', () => {
      const states: DefaultRenderManagerStates = {
         isError: false,
         isLoading: false,
         isEmpty: false,
      }

      render(<TestRenderManager states={states} />)
      const elementRef = screen.getByTestId(MOCK_CONTENT_TEST_ID)
      expect(elementRef.textContent).toBe('Default')
   })
})
