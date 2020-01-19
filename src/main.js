import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import importExtend from "./plugins/importExtend";

Vue.config.productionTip = false;
Vue.use(importExtend);

Vue.prototype.log = function() {
  console.log("%c ┌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌", "color:red");
  console.log("%c ╎ %c " + arguments[0], "color:red", "color:#33aa11");
};
Vue.prototype.logs = function() {
  console.log("%c ╎ %c " + arguments[0], "color:red", "color:orange");
};
Vue.prototype.logEnd = function() {
  console.log("%c ╎ %c " + arguments[0], "color:red", "color:#33cc99", "");
  console.log("%c └╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌", "color:red");
};
// 注册 获取回调
Vue.prototype.$electron.ipcRenderer.on("asynchronous-reply", (event, arg) => {
  Vue.prototype.logEnd(`[异步回调] %c${arg}`);
});
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
