import Vue from "vue";

export const store = Vue.observable({
    isNavOpen: false,
    actualArtist: {},
    actualAlbum: {},
    actualTrack: {},
})

export const mutations = {
    toggleNav() {
        store.isNavOpen = !store.isNavOpen;
    },
    closeNav() {
        store.isNavOpen = false;
    },
    setActualArtist(payload) {
        store.actualArtist = payload;
    },
    setActualAlbum(payload) {
        store.actualAlbum = payload;
    },
    setActualTrack(payload) {
        store.actualTrack = payload;
    },
}