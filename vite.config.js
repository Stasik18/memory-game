import { defineConfig } from 'vite'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  build: {
    sourcemap: true,
  },
  base: '/memory-game/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
    },
  },
})
