<template>
  <div v-show="slideActive === true" class="header-Slide">
    <div class="header-Toggle_Item" @click="toggleSlide">
      <div
        class="icon"
        v-html="require('~/assets/images/icon-close.svg?include')"
      />
    </div>
    <ul class="header-Slide_Content">
      <nuxt-link to="/" tag="li">HOME</nuxt-link>
      <nuxt-link to="/moonlab" tag="li">MOON LAB PROGRAMMA</nuxt-link>
      <nuxt-link to="/herinneringen" tag="li">HERINNERINGEN</nuxt-link>
      <nuxt-link to="/over-anne" tag="li">OVER ANNE</nuxt-link>
      <nuxt-link to="/contact" tag="li">CONTACT</nuxt-link>
    </ul>
  </div>
</template>
