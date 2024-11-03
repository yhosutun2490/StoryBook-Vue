/** @type { import('@storybook/vue3').Preview } */
import { type Preview, setup } from '@storybook/vue3'
import PrimeVue from 'primevue/config'
import { registerPlugins } from "../src/plugins";
import { withVuetifyTheme,DEFAULT_THEME } from './withVuetifyTheme.decorator';
import { fn } from '@storybook/test';
setup((app) => {
  app.use(PrimeVue,{ unstyled: true })
  registerPlugins(app)
})

export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Global theme for components",
    defaultValue: DEFAULT_THEME,
    toolbar: {
      icon: "paintbrush",
      // Array of plain string values or MenuItem shape (see below)
      items: [
        { value: "light", title: "Light", left: "🌞" },
        { value: "dark", title: "Dark", left: "🌛" },
      ],
      // Change title based on selected value
      dynamicTitle: true,
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: "fullscreen",
};

export const decorators = [withVuetifyTheme];

