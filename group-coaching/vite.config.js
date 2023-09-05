import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/quoteapi": {
        target: "https://zenquotes.io/api/quotes",
        changeOrigin: true,
        secure: false,
        rewrite: path => path.replace(/^\/quoteapi/, '')
      },
    },
  },
})