import Vue from "vue";

export const store = Vue.observable({
    isNavOpen: false,
    actualTrack: {},
    actualArtist: {}
})

export const mutations = {
    toggleNav() {
        store.isNavOpen = !store.isNavOpen;
    },
    closeNav() {
        store.isNavOpen = false;
    },
    setActualTrack(payload) {
        store.actualTrack = payload;
    },
    setActualAlbum(payload) {
        store.actualArtist = payload;
    }
}