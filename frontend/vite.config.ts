import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import babel from '@rollup/plugin-babel';
import babelImport from 'vite-plugin-babel-import';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
})
