import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'

export default defineConfig({
   plugins: [react(), dts({})],
   build: {
      lib: {
         entry: resolve(__dirname, 'src/index.ts'),
         name: 'ReactFeatureFlag',
         fileName: (format) => `index.${format}.js`,
      },
      rollupOptions: {
         external: ['react'],
      },
   },
})
