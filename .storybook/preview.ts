/** @type { import('@storybook/vue3').Preview } */
import { type Preview, setup } from '@storybook/vue3'
import PrimeVue from 'primevue/config'
import { fn } from '@storybook/test';
setup((app) => {
  app.use(PrimeVue)
})

const preview: Preview = {
  parameters: {
    actions: { 
      // argTypesRegex: '^on[A-Z].*' 
      // 移除 argTypesRegex，並顯式定義 action
      onClick: fn(),
      onMouseOver: fn(),
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
}
export default preview
