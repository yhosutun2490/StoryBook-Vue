import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite';
import Vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
import {PrimeVueResolver} from '@primevue/auto-import-resolver';


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    Vue({template: { transformAssetUrls }}),
    Components({
      resolvers: [
        PrimeVueResolver()
      ]
    }),
    // https://github.com/vuetifyjs/vuetify-loader/tree/master/packages/vite-plugin#readme
    Vuetify({
        autoImport: true,
        styles: {
          configFile: 'src/styles/settings.scss',
        },
      }),
  ],
  // 可以多個元件進入打包和匯出模組
  // build: {
  //   lib: {
  //     entry: {
  //       combined: resolve(__dirname, 'src/combined.js') // 合併打包
  //     },
  //     name: 'custom-ui-lib',
  //     formats: ['es', 'cjs'],
  //     fileName: (format) => `custom-ui-lib.${format}.js`
  //   },
  // },
  build: {
    rollupOptions: {
      input: {
        primevue: resolve(__dirname, 'src/primevue.js'),
        vuetify: resolve(__dirname, 'src/vuetify.js')
      },
      output: [
        {
          format: 'es',
          dir: 'dist',
          entryFileNames: '[name].es.js'
        },
        {
          format: 'cjs',
          dir: 'dist',
          entryFileNames: '[name].cjs.js'
        }
      ]
    },
    lib: {
      entry: {
        combined: resolve(__dirname, 'src/combined.js') // 合併打包
      },
      formats: ['es', 'cjs'],
      fileName: (format) => `combined-lib.${format}.js`
    }
  },

  rollupOptions: {
    // make sure to externalize deps that shouldn't be bundled
    // into your library
    external: ['vue', 'primevue'],
    output: {
      globals: {
        vue: 'Vue',
      }
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    }
  },
})
