<template>
  <footer class="footer">
    <!-- <div class="footer-Top">
      <div class="footer-Top_Content">
        <div class="footer-Top_Community">
          <div class="typeTextCaps">Meld je aan voor de nieuwsbrief</div>
          <div class="typeTitle">Drops of</div>
          <div class="typeTitleItalic">Consciousness</div>
        </div>
        <div class="footer-Top_Mail">
          <client-only>
            <form
              name="subscribe"
              method="POST"
              action="/succes"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <input type="hidden" name="form-name" value="subscribe" />
              <input
                type="text"
                required
                name="email"
                placeholder="jouw mailadres"
              />
              <input
                class="button typeLink offwhite"
                type="submit"
                value="Ontvang"
              />
            </form>
          </client-only>
        </div>
      </div>
    </div> -->
    <div class="footer-Bottom">
      <div class="footer-Bottom_Content">
        <div class="footer-Bottom_Logo">
          <nuxt-link to="/" title="Homepage">
            <div
              class="icon"
              v-html="require('~/assets/images/logo-rectangle.svg?include')"
            />
          </nuxt-link>
        </div>
        <div class="footer-Bottom_Item">
          <a
            v-if="general[0].content && general[0].content.email"
            :href="`mailto:${general[0].content.email}`"
            target="_blank"
            rel="noreferrer"
            title="email"
            class="typeLink"
          >
            {{ general[0].content.email }}
          </a>
          <a
            v-if="general[0].content && general[0].content.phone"
            :href="`tel:0031${general[0].content.phone}`"
            target="_blank"
            rel="noreferrer"
            title="bellen"
            class="typeLink"
          >
            00{{ general[0].content.phone }}
          </a>
        </div>
        <div class="footer-Bottom_Item">
          <a
            v-if="general[0].content && general[0].content.instagram"
            :href="general[0].content.instagram"
            target="_blank"
            rel="noreferrer"
            title="instagram"
            class="typeLink"
          >
            instagram
          </a>
          <a
            v-if="general[0].content && general[0].content.linkedin"
            :href="general[0].content.linkedin"
            target="_blank"
            rel="noreferrer"
            title="linkedin"
            class="typeLink"
          >
            linkedin
          </a>
        </div>
        <div v-if="footerMenu" class="footer-Bottom_Item">
          <nuxt-link
            v-for="(item, index) in footerMenu.items"
            :to="'/' + item.link.cached_url"
            class="typeLink"
            :title="item"
            v-html="item.title"
            :key="index"
          ></nuxt-link>
        </div>
        <div v-else>
          <nuxt-link
            to="/algemene-voorwaarden"
            class="typeLink"
            title="Algemene voorwaarden"
            >Algemene voorwaarden</nuxt-link
          >
          <nuxt-link
            to="/privacy-verklaring"
            class="typeLink"
            title="Privacy verklaring"
            >Privacy verklaring</nuxt-link
          >
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { mapState } from "vuex"

export default {
  computed: {
    ...mapState({
      general: (state) => state.general.list,
      menus: (state) => state.menus,
      footerMenu: (state) =>
        state.menus
          ? state.menus.list.find((menu) => menu.slug == "footer-menu")
          : false
    })
  }
}
</script>

<style lang="sass">
@import '~/assets/styles/variables.sass'

.footer
  display: flex
  flex-direction: column
  color: $lightyellow
  &-Top, &-Bottom
    padding: var(--spacing-section-vertical-small) var(--spacing-section-horizontal)
    &_Content
      display: flex
      align-items: flex-end
      @media screen and (max-width: $breakpoint-mobile)
        flex-direction: column
        > div
          margin-bottom: var(--spacing-item-vertical)
        > div:last-child
          margin-bottom: 0
  &-Top
    background: $yellow
    &_Content
      justify-content: center
      align-items: center
      @media screen and (max-width: $breakpoint-mobile)
        align-items: flex-start
    &_Mail, &_Community
      display: flex
      flex-direction: column
      max-width: 100%
    &_Community
      @media screen and (min-width: $breakpoint-mobile)
        padding-right: var(--spacing-three)
      > div
        max-width: 100%
      > div:first-child
        margin-bottom: 1em
      > div:last-child
        align-self: flex-end
        hyphens: auto
        text-align: right
    &_Mail
      width: 100%
      max-width: 400px
      align-items: flex-start
  &-Bottom
    background: $darkbrown
    &_Content
      justify-content: space-between
      @media screen and (max-width: $breakpoint-mobile)
        align-items: center
        > div
          margin-bottom: var(--spacing-item-vertical)
    &_Item
      display: flex
      flex-direction: column
      a
        margin-bottom: 1em
        @media screen and (max-width: $breakpoint-mobile)
          text-align: center
        &:last-child
          margin-bottom: 0
    &_Logo
      height: auto
      width: 6rem
      @media screen and (max-width: $breakpoint-mobile)
        width: 33vw
</style>
