import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import { router } from "./router/router";
import VueFilterDateFormat from "@vuejs-community/vue-filter-date-format";

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(VueFilterDateFormat);

new Vue({
  el: "#app",
  router,
  render: (h) => h(App),
}).$mount("#app");
