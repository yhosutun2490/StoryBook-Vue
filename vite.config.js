import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite';
import {PrimeVueResolver} from '@primevue/auto-import-resolver';


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [
        PrimeVueResolver()
      ]
    })
  ],
  // 可以多個元件進入打包和匯出模組
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname,'src/primevue.js'),
      name: 'custom-primevue-lib',
      formats: ['es','cjs'] , // 模組的種類 JS es module/common js
      // the proper extensions will be added
      fileName: (format)=>`custom-primevue-lib.${format}.js`,},
  },


  rollupOptions: {
    // make sure to externalize deps that shouldn't be bundled
    // into your library
    external: ["vue","primevue"],
    output: {
      // Provide global variables to use in the UMD build
      // for externalized deps
      globals: {
        vue: "Vue",
        primevue: 'PrimeVue'
      },
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
})
