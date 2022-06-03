import { ComponentMeta } from '@storybook/react'
import RenderManager from './RenderManager'

export default {
   title: 'RenderManager',
   component: RenderManager,
} as ComponentMeta<typeof RenderManager>

// eslint-disable-next-line no-underscore-dangle
export const _RenderManager = () => <RenderManager />
