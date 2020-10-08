<template>
  <section>
    <component
      :is="story.content.component | dashify"
      v-if="story.content.component"
      :key="story.content._uid"
      :blok="story.content"
    ></component>
  </section>
</template>

<script>
import storyblokLivePreview from "@/mixins/storyblokLivePreview"
import onPageLoad from "@/mixins/onPageLoad"

export default {
  mixins: [onPageLoad, storyblokLivePreview],
  asyncData(context) {
    // Load the JSON from the API
    return context.app.$storyapi
      .get(`cdn/stories/${context.params.slug}`, {
        version: process.env.NODE_ENV == "production" ? "published" : "draft"
      })
      .then((res) => {
        return res.data
      })
      .catch((res) => {
        context.error({
          statusCode: res.response.status,
          message: res.response.data
        })
      })
  },
  data() {
    return { story: { content: {} } }
  },
  mounted() {
    // console.log("SLUG", this.story)
  }
}
</script>
