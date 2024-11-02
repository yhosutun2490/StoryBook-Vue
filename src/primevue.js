import Paginator from "./components/Paginator/Paginator.vue"
import MyButton from "./components/MyButton/MyButton.vue";
import PrimeVue from "primevue/config";
// 添加 install 方法
export default  {
  install: (app)=> {
    app.use(PrimeVue,{ unstyled: true })
    app.component("CustomPaginator", Paginator);
    app.component("MyButton", MyButton);

  }
}

export {Paginator,MyButton}
