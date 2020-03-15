import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Home from './views/Home.vue';
import Homepage from './views/Homepage.vue'
import ArtistPage from './views/ArtistPage.vue';
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
    component: ArtistPage,
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
