import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import * as path from 'path';
import svgr from 'vite-plugin-svgr'; 
//https://dev.to/cassidoo/importing-svg-files-as-react-components-with-vite-l3n

// https://vitejs.dev/config/
export default defineConfig({
  assetsInclude: ['**/*.mid'],
  plugins: [react(), svgr(),], 
  base: '/lofi-bytes-app/',
  build: {
    sourcemap: false,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
  },
  test: {
    css: false,
    include: ['src/**/__tests__/*'],
    globals: true,
    environment: 'jsdom',
    setupFiles: 'src/setupTests.ts',
    clearMocks: true,
  },
});
