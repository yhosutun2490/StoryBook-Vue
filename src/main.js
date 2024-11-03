import './assets/main.css'

import { createApp } from 'vue'
import PrimeVue from "primevue/config";
// Plugins
import { registerPlugins } from '@/plugins'
import App from './App.vue'

const app = createApp(App)
app.use(PrimeVue, { unstyled: true });
registerPlugins(app)
app.mount('#app')
