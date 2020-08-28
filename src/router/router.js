import VueRouter from "vue-router";

import Artist from "../views/Artist.vue";
import Homepage from "../views/Homepage.vue";
import AlbumPage from "../views/AlbumPage.vue";
import About from "../views/AlbumPage/About.vue";
import Lyrics from "../views/AlbumPage/Lyrics.vue";

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
    path: "/artist/album/:id",
    component: AlbumPage,
    children: [
      {
        name: "album",
        path: "/",
        component: About,
      },
      {
        path: ":trackLink",
        component: Lyrics,
      },
    ],
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export { router };
