import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import path from 'path'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    viteStaticCopy({
      targets: [{ src: 'public/manifest.json', dest: '.' }]
    })
  ],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        popup: path.resolve(__dirname, 'src/popup/index.tsx'),
        content: path.resolve(__dirname, 'src/content/index.tsx')
      },
      output: {
        entryFileNames: chunk => {
          if (chunk.name === 'content') return 'content.js'
          if (chunk.name === 'popup') return 'popup.js'
          return '[name].js'
        },
        assetFileNames: '[name].[ext]'
      }
    }
  }
})
