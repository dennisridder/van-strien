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
        <blok-item-door :image="item.cover_image" :alt="item.title" />
        <h2 v-if="item.title">{{ item.title }}</h2>
        <button>Lees meer</button>
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
    // console.log("BLOG GRID", this.blok, this.herinneringen)
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

.section-BlogGrid
  &_Wrapper
    display: flex
    flex-wrap: wrap
  &_Item
    flex-basis: 50%
    border: $testborder
</style>
