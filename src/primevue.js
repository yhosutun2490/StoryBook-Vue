import Paginator from "./components/Paginator/Paginator.vue"
import PrimeVue from "primevue/config";
// 添加 install 方法
export default  {
  install: (app)=> {
    app.use(PrimeVue,{ unstyled: true })
    app.component("CustomPaginator", Paginator);
  }
}

export {Paginator}
