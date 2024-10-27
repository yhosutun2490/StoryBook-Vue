/** @type { import('@storybook/vue3').Preview } */
import { type Preview, setup } from '@storybook/vue3'
import {setup} from '@storybook/vue3'

import PrimeVue from 'primevue/config'

setup((app) => {
  app.use(PrimeVue)
})

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
}
export default preview
