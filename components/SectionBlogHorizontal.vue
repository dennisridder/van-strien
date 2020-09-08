<template>
  <section class="section section-BlogHorizontal">
    <ul class="section section-BlogHorizontal_Wrapper">
      <nuxt-link
        v-for="(item, i) in filteredHerinneringen"
        :key="i"
        :to="'/herinneringen/' + item.id"
        class="section section-BlogHorizontal_Item"
      >
        <blok-item-door :image="item.cover_image" :alt="item.title" />
        <h2 v-if="item.title">{{ item.title }}</h2>
        <button>Lees meer</button>
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
    console.log("BLOG HORIZONTAL", this.blok, this.herinneringen)
  },
  methods: {
    filterHerinneringen() {
      var array = this.herinneringen.slice(1)
      this.filteredHerinneringen = array
    }
  }
}
</script>

<style lang="sass" scoped>
@import '~/assets/styles/variables.sass'

.section-BlogHorizontal
    padding: var(--spacing-three) var(--spacing-sides)
    background: $lightyellow
    overflow-x: auto
    ul
        display: flex
        flex-wrap: nowrap
        li
            margin-right: var(--spacing-five)
            &:nth-last-child(2)
                margin-right: var(--spacing-sides)
    &_Final
        padding-right: 1px
</style>
