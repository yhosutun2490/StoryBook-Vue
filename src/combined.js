import {PrimeVue,Paginator,PrimePaginator, MyButton} from './primevue';
import * as Vuetify from './vuetify';

function install(app) {
  // 使用 PrimeVue 和 Vuetify 的 install 方法
  if (PrimeVue.install) {
    app.use(PrimeVue);
  }
  if (Vuetify.install) {
    app.use(Vuetify);
  }
}

// 將 `install` 方法添加到 default export 中
export default { install, Paginator:Paginator,PrimePaginator:PrimePaginator, MyButton:MyButton};
