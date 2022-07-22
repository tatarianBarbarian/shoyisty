import { defineConfig } from 'vite'
import reactPlugin from '@vitejs/plugin-react'

export default defineConfig({
  base: '',
  plugins: [reactPlugin(
    {
      jsxImportSource: "@emotion/react",
      babel: {
        plugins: ["@emotion/babel-plugin"],
      }
    }
  )],
})
