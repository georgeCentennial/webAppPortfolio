import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build:{
    manifest: true,
    rollupOptions: {
      input: "./src/main.jsx"
      // input: "./MainRouter.jsx"
    },
  }
})
