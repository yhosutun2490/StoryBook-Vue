import Paginator from "./components/Paginator/Paginator.vue"
// 添加 install 方法
export function install(app) {
  app.component("Paginator-Custom", Paginator);
}
export default install
export {Paginator}
