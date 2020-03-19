import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Home from './views/Home.vue';
import Homepage from './views/Homepage.vue'
import AlbumPage from './views/AlbumPage.vue';
import About from './views/nested_views/About.vue';
import Lyrics from './views/nested_views/Lyrics.vue';
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
    children: [
      {
        path: '/',
        component: About
      },
      {
        path: ':trackLink',
        component: Lyrics
      }
    ]
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
