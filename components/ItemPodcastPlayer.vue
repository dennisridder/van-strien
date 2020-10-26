<template>
  <div class="item-PodcastPlayer">
    <iframe
      width="100%"
      height="166"
      scrolling="no"
      frameborder="no"
      allow="autoplay"
      :src="`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${trackId}&color=%23ff5500&auto_play=false&show_artwork=${showArtwork}&hide_related=true&show_playcount=false&show_comments=false&show_user=${showUser}&show_reposts=false&show_teaser=true`"
    ></iframe>
  </div>
</template>

<script>
export default {
  props: {
    blok: Object
  },
  data() {
    return {
      showUser: true,
      showArtwork: true,
      trackId: ""
    }
  },
  mounted() {
    this.init()
    console.log(this.blok)
  },
  methods: {
    init() {
      this.showUser = this.blok.show_user
      this.showArtwork = this.blok.show_artwork
      this.trackId = this.blok.track_number
    }
  }
}
</script>

<style lang="sass">
@import '~/assets/styles/variables.sass'

.item
  &-PodcastPlayer
    width: 100%
</style>
