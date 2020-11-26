import VueRouter from "vue-router";

import Homepage from "../views/Homepage.vue";
import Album from "../views/Album.vue";
import Song from "../views/Song.vue";

import AlbumFull from "../views/AlbumFull/Main.vue";
import AlbumAbout from "../views/AlbumFull/About.vue";
import AlbumArtist from "../views/AlbumFull/Artist.vue";
import AlbumSongs from "../views/AlbumFull/Songs.vue";

export const routes = [
  {
    name: "home",
    path: "/",
    component: Homepage,
  },
  {
    name: "album",
    path: "/album-cover/:id",
    component: Album,
  },
  {
    path: "/album/:id/",
    component: AlbumFull,
    children: [
      {
        name: "album-about",
        path: "/",
        component: AlbumAbout,
      },
      {
        name: "album-songs",
        path: "/album/:id/songs",
        component: AlbumSongs,
      },
      {
        name: "album-artist",
        path: "/album/:id/artist",
        component: AlbumArtist,
      },
    ],
  },
  {
    name: "song",
    path: "/album/:id/:songId",
    component: Song,
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export { router };
