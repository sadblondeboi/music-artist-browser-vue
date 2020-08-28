import VueRouter from "vue-router";

import Artist from "../views/Artist.vue";
import Homepage from "../views/Homepage.vue";
import Album from "../views/Album.vue";
// import About from "../views/AlbumPage/About.vue";
// import Lyrics from "../views/AlbumPage/Lyrics.vue";

export const routes = [
  {
    name: "home",
    path: "/",
    component: Homepage,
  },
  {
    name: "artist",
    path: "/artist/:id",
    component: Artist,
  },
  {
    name: "album",
    path: "/album/:id",
    component: Album
  }
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export { router };
