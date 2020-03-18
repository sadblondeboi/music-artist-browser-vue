import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Home from './views/Home.vue';
import Homepage from './views/Homepage.vue'
import AlbumPage from './views/AlbumPage.vue';
Vue.config.productionTip = false;
// const db = require("@/models/Artists.json");
Vue.use(VueRouter);

const routes = [
  { 
    path: '/', 
    component: Homepage 
  } , { 
    path: '/:id',
    component: Home,
  } , { 
    path: '/:id/:albumLink', 
    component: AlbumPage,
  }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
}).$mount('#app')
