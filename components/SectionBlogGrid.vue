<template>
  <section v-editable="blok" class="section section-BlogGrid">
    <ul class="section-BlogGrid_Wrapper">
      <nuxt-link
        v-for="(item, i) in filteredHerinneringen"
        :key="i"
        :to="'/herinneringen/' + item.id"
        tag="li"
        class="section-BlogGrid_Item"
      >
        <div class="section-BlogGrid_Item_Content">
          <blok-item-door :image="item.cover_image" :alt="item.title" />
          <h2 v-if="item.title" class="typeTextCaps">{{ item.title }}</h2>
          <markdown class="typeText lineClamp" :input="item.excerpt" />
          <div class="button typeLink yellow">Lees meer</div>
        </div>
      </nuxt-link>
    </ul>
  </section>
</template>

<script>
import { mapState } from "vuex"

export default {
  props: {
    blok: Object
  },
  data() {
    return {
      filteredHerinneringen: []
    }
  },
  computed: {
    // prettier-ignore
    ...mapState({
      herinneringen: state => state.herinneringen.list
    })
  },
  mounted() {
    this.filterHerinneringen()
  },
  methods: {
    filterHerinneringen() {
      var array = this.herinneringen.slice(1)
      this.filteredHerinneringen = array
    }
  }
}
</script>

<style lang="sass">
@import '~/assets/styles/variables.sass'

.section-BlogGrid
  &_Wrapper
    display: flex
    flex-wrap: wrap
  &_Item
    display: flex
    justify-content: space-around
    flex-basis: 50%
    padding: var(--spacing-section-vertical) var(--spacing-section-horizontal)
    padding-bottom: 0
    .markdown
      width: calc(100% + #{var(--spacing-section-horizontal)})
    @media screen and (max-width: $breakpoint-mobile)
      flex-basis: 100%
      padding-left: calc(2 * #{var(--spacing-section-horizontal)})
      padding-right: calc(2 * #{var(--spacing-section-horizontal)})
    &:last-child
      padding-bottom: var(--spacing-section-vertical)
    &_Number
      position: absolute
      left: 0
      top: 0
      z-index: +1
      transform: translateY(-25%)
    &_Content
      position: relative
      max-width: 25vw
      cursor: pointer
      @media screen and (max-width: $breakpoint-mobile)
        max-width: 100%
      .item-Door, h2, .markdown
        margin-bottom: var(--spacing-item-vertical)
</style>
