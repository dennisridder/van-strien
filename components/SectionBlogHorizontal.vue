<template>
  <section v-editable="blok" class="section section-BlogHorizontal">
    <ul class="section section-BlogHorizontal_Wrapper horizontalScroll">
      <nuxt-link
        v-for="(item, i) in filteredHerinneringen"
        :key="i"
        :to="item.content.full_slug"
        tag="li"
        class="section-BlogHorizontal_Item"
      >
        <blok-item-door :image="item.cover_image" :alt="item.title" />
        <h2 v-if="item.title" class="typeTextCaps">{{ item.title }}</h2>
        <div class="button typeLink yellow">
          <nuxt-link :to="item.content.full_slug">Lees meer</nuxt-link>
        </div>
      </nuxt-link>
      <li class="section-BlogHorizontal_Final"></li>
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
      var array = this.herinneringen.slice(1, 8)
      this.filteredHerinneringen = array
    }
  }
}
</script>

<style lang="sass">
@import '~/assets/styles/variables.sass'

.section-BlogHorizontal
    padding: var(--spacing-section-vertical) var(--spacing-section-horizontal)
    padding-left: 33vw
    background: $lightyellow
    overflow-x: auto
    ul
        display: flex
        flex-wrap: nowrap
        background: $lightyellow
        li
            margin-right: var(--spacing-four)
            cursor: pointer
            .typeTextCaps
              margin-top: var(--spacing-item-vertical)
              margin-bottom: var(--spacing-item-vertical)
            &:nth-last-child(2)
                margin-right: var(--spacing-section-horizontal)
    &_Final
        padding-right: 1px
</style>
