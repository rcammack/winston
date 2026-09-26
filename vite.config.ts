import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { parse } from 'yaml'
import { contentSchema } from './src/content-schema.ts'

// https://vite.dev/config/
export default defineConfig({
  base: '/winston/',
  plugins: [
    {
      name: 'validated-yaml-content',
      enforce: 'pre',
      transform(source, id) {
        if (!id.endsWith('.yaml')) return

        const content = contentSchema.parse(parse(source))
        return `export default ${JSON.stringify(content)}`
      },
    },
    react(),
  ],
})
