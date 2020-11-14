<template>
  <div class="section-Wrapper section-Page">
    <component
      :is="blok.component | dashify"
      v-for="blok in story.content.body"
      :key="blok._uid"
      :blok="blok"
    ></component>
    <!-- SHARE CONTENT -->
    <section class="section section-Share section-BlogContentFooter">
      <div class="section-Share_Content">
        <div class="markdown">
          <h3 class="typeTextCaps">Deel mijn herinnering</h3>
        </div>
        <!-- prettier-ignore -->
        <div class="section-Share_Items">
          <a class="section-Share_Item typeLink" 
          :href="`https://twitter.com/share?url=https://www.annevanstrien.nl/${story.full_slug}&text=${story.name}`" target="_blank"
            rel="noreferrer" title="share on linkedin">Twitter</a>
          <a
            class="section-Share_Item typeLink"
            :href="`http://www.linkedin.com/shareArticle?mini=true&url=https://www.annevanstrien.nl/${story.full_slug}&title=${story.name}&source=annevanstrien.nl`"
            target="_blank"
            rel="noreferrer"
            title="share on linkedin"
            >LinkedIn</a
          >
        </div>
      </div>
    </section>
    <!-- RELATED CONTENT -->
    <section class="section section-Related section-BlogContentFooter">
      <div class="section-Related_Content">
        <div class="markdown">
          <h3 class="typeTextCaps">
            andere herinneringen die je interessant zult vinden
          </h3>
        </div>
        <div class="section-Related_Items">
          <nuxt-link
            v-for="(item, i) in filteredHerinneringen"
            :key="i"
            :to="'/herinnering/' + item.id"
            class="section-Related_Item"
          >
            <blok-item-door :image="item.cover_image" :alt="item.title" />
          </nuxt-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import storyblokLivePreview from "@/mixins/storyblokLivePreview"
import onPageLoad from "@/mixins/onPageLoad"
import { mapState } from "vuex"

export default {
  mixins: [onPageLoad, storyblokLivePreview],
  asyncData(context) {
    let endpoint = `cdn/stories/herinneringen/${context.params.slug}`
    let version =
      context.query._storyblok || context.isDev ? "draft" : "published"
    return context.app.$storyapi
      .get(endpoint, {
        version: version,
        cv: context.store.state.cacheVersion
      })
      .then((res) => {
        return res.data
      })
      .catch((res) => {
        if (!res.response) {
          console.error(res)
          context.error({
            statusCode: 404,
            message: "Failed to receive content form api"
          })
        } else {
          console.error(res.response.data)
          context.error({
            statusCode: res.response.status,
            message: res.response.data
          })
        }
      })
  },
  data() {
    return {
      story: { content: {} },
      filteredHerinneringen: []
    }
  },
  computed: {
    ...mapState({
      herinneringen: (state) => state.herinneringen.list
    })
  },
  mounted() {
    this.filterHerinneringen()
  },
  methods: {
    filterHerinneringen() {
      var array = this.herinneringen.slice(1)
      this.shuffle(array)
      var filtered = array.filter((el) => el.id !== this.story.slug)
      this.filteredHerinneringen = filtered.slice(0, 2)
    },
    shuffle(values) {
      for (var i = values.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1))
        var temp = values[i]
        values[i] = values[j]
        values[j] = temp
      }
      return values
    }
  },
  head() {
    return {
      title: this.story.name + " — Anne van Strien"
    }
  }
}
</script>

<style lang="sass">
@import '~/assets/styles/variables.sass'

.section
  &-BlogContentFooter
      position: relative
      display: flex
      justify-content: space-around
  &-Share
      &_Content
        padding: var(--spacing-section-vertical) var(--spacing-section-horizontal)
        width: 100%
        max-width: $max-blog-content
        > div
          margin-bottom: 1.5rem
        > div:last-child
          margin-bottom: 0
      &_Item
        display: block
        color: $yellow !important
        p, a
          color: $yellow !important
        &:first-child
          margin-bottom: 1em
  &-Related
      &_Content
        padding: var(--spacing-section-vertical) var(--spacing-section-horizontal)
        padding-top: 0
        width: 100%
        max-width: $max-blog-content
        > div
          margin-bottom: 1.5rem
        > div:last-child
          margin-bottom: 0
      &_Items
        display: flex
      &_Item
        width: 5.5rem
        margin-right: 2.5rem
</style>
