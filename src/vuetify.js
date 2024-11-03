import VuetiFyPaginator from "./components/VuetiFy/VuetiFyPaginator.vue";
// Plugins
import { registerPlugins } from '@/plugins'

// 添加 install 方法
export default  {
  install: (app)=> {
    registerPlugins(app)
    app.component("VuetiFy-Paginator", VuetiFyPaginator);

  }
}

export {VuetiFyPaginator}
