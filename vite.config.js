import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig({
  plugins: [
    vue(),
    vueDevTools()
  ],
  build: {
    cssCodeSplit: false, // 🔗 El CSS se embebe dentro del JS
    assetsInlineLimit: 100000000, // 🔗 Embebe imágenes pequeñas como base64
    rollupOptions: {
      output: {
        inlineDynamicImports: true
      }
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
