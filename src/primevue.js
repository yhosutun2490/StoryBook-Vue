import Paginator from "./components/Paginator/Paginator.vue"
// 添加 install 方法
export default {
  install(Vue) {
    Vue.component('CustomPaginator', Paginator); // 註冊組件
  }
};
export {Paginator}
