<template>
  <footer class="footer">
    <div class="footer-Top">
      <div class="footer-Top_Content">
        <div class="footer-Top_Community">
          <div class="typeTextCaps">Meld je aan voor de nieuwsbrief</div>
          <div class="typeTitle">Join the</div>
          <div class="typeTitleItalic">community</div>
        </div>
        <div class="footer-Top_Mail">
          <input type="text" placeholder="jouw mailadres" />
          <div class="button typeLink offwhite">
            <a>Send</a>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-Bottom">
      <div class="footer-Bottom_Content">
        <div class="footer-Bottom_Logo">
          <div
            class="icon"
            v-html="require('~/assets/images/logo-rectangle.svg?include')"
          />
        </div>
        <div class="footer-Bottom_Item">
          <a
            :href="`mailto:${general[0].content.email}`"
            target="_blank"
            rel="noreferrer"
            title="email"
            class="typeLink"
          >
            {{ general[0].content.email }}
          </a>
          <a
            :href="`tel:0031${general[0].content.phone}`"
            target="_blank"
            rel="noreferrer"
            title="phone"
            class="typeLink"
          >
            00{{ general[0].content.phone }}
          </a>
        </div>
        <div class="footer-Bottom_Item">
          <a
            :href="general[0].content.instagram"
            target="_blank"
            rel="noreferrer"
            title="instagram"
            class="typeLink"
          >
            instagram
          </a>
          <a
            :href="general[0].content.linkedin"
            target="_blank"
            rel="noreferrer"
            title="directions"
            class="typeLink"
          >
            linkedin
          </a>
        </div>
        <div class="footer-Bottom_Item">
          <nuxt-link to="/algemene-voorwaarden" class="typeLink"
            >Algemene voorwaarden</nuxt-link
          >
          <nuxt-link to="/privacy-verklaring" class="typeLink"
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
      general: (state) => state.general.list
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
    // padding: var(--spacing-two-vertical) var(--spacing-section-horizontal)
    padding: var(--spacing-section-vertical-small) var(--spacing-section-horizontal)
    &_Content
      display: flex
      align-items: flex-end
      @media screen and (max-width: $breakpoint-mobile)
        flex-direction: column
        > div
          margin-bottom: var(--spacing-one-vertical)
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
    &_Community
      margin-right: var(--spacing-three)
      > div:first-child
        margin-bottom: 1em
      > div:last-child
        align-self: flex-end
    &_Mail
      width: 100%
      max-width: 400px
      align-items: flex-start
      input
        width: 100%
        background: none
        outline: none
        border: 0
        border-bottom: 1px solid $lightyellow
        padding-bottom: 1rem
        margin-bottom: 1.25rem
        color: $lightyellow
        font-family: 'Artegra Sans Alt Medium'
        letter-spacing: 0
        &::placeholder
          color: $lightyellow
      button
        background: $lightyellow
        color: $darkbrown
  &-Bottom
    background: $darkbrown
    &_Content
      justify-content: space-between
      @media screen and (max-width: $breakpoint-mobile)
        align-items: center
        > div
          margin-bottom: 1.75rem
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
