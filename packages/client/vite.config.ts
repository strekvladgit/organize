import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import checker from 'vite-plugin-checker'

export default defineConfig({
  plugins: [react(),
    checker({
      typescript: true,
    }),
  ],
  server: {
    port: 3000,
  },
  base: '',
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/components'),
      '@services': path.resolve(__dirname, './src/utils'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@layouts': path.resolve(__dirname, './src/layouts'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@images': path.resolve(__dirname, './public/images'),
      '@assets': path.resolve(__dirname, './src/assets'),
    },
  },
})
