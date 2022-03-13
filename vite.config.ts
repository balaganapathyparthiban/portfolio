import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const svgrPlugin = require('vite-plugin-svgr')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svgrPlugin({
      svgrOptions: {
        icon: true,
      },
    }),
    react()
  ]
})
