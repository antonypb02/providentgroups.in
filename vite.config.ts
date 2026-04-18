import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// 🔧 MODIFIED — inject CRA-style env for Google Apps Script URL (Vite does not expose process.env by default)
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [react()],
    define: {
      'process.env.REACT_APP_GOOGLE_SCRIPT_URL': JSON.stringify(
        env.REACT_APP_GOOGLE_SCRIPT_URL ?? ''
      ),
    },
  }
})
