<template>
  <div  id="burger"
        :class="{ 'active' : isBurgerActive }"
        @click.prevent="toggle">
    <slot></slot>
        <button class="burger-button" title="Menu">
            <span class="burger-bar burger-bar--1"></span>
            <span class="burger-bar burger-bar--2"></span>
            <span class="burger-bar burger-bar--3"></span>
        </button>

  </div>
</template>

<script>
import { store, mutations } from '@/store.js'

export default {
    methods: {
        toggle() {
            mutations.toggleNav();
        }
    },
    computed: {
        isBurgerActive() {
            return store.isNavOpen
        }
    },
}
</script>

<style scoped> 
    button {
        cursor: pointer;
        border: none;
        background: url(../../assets/menu_icon.svg) no-repeat;
        background-position: center center;
    }

    button:focus {
        outline: 0;
    }
</style>