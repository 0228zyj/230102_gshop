import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 按需引入部分组件
import { Button , Header , Cell , Swipe , SwipeItem} from 'mint-ui';
Vue.component(Button.name, Button);
Vue.component(Header.name, Header);
Vue.component(Cell.name, Cell);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
