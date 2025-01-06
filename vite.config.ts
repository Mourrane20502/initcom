import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  assetsInclude: ['**/*.png'], 

  plugins: [react()],
  server : {
    port : 5000
  }
})
