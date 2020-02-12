import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Home from './views/Home.vue';
import Homepage from './views/Homepage.vue'
import ArtistPage from './views/ArtistPage.vue';

Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [
  { path: '/Home/', component: Homepage },
  { path: '/', component: Home },
  { path: '/Artists/:link', component: ArtistPage }
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
