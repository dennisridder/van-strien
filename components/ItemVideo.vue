<template>
  <div v-editable="blok" class="item item-Videoplayer">
    <div class="item-Videoplayer_Outer">
      <div :id="blok._uid" class="item-Videoplayer_Outer">
        <PlayerYoutube
          v-if="blok.format == 'youtube'"
          :videoid="blok.video_id"
          :autoplay="autoplayValue"
          title=""
          class="item-Videoplayer_Youtube"
        />
        <PlayerVimeo
          v-if="blok.format == 'vimeo'"
          :videoid="blok.video_id"
          :autoplay="autoplayValue"
          title=""
          class="item-Videoplayer_Vimeo"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    blok: Object
  },
  data() {
    return {
      autoplayValue: ""
    }
  },
  mounted() {
    this.checkAutoplay()
  },
  methods: {
    checkAutoplay() {
      if (this.blok.autoplay === false) {
        this.autoplayValue = "0"
      } else {
        this.autoplayValue = "1&mute=1"
      }
    }
  }
}
</script>

<style lang="sass">
.item
  &-Videoplayer
    &_Outer
      position: relative
      padding-bottom: 56.25% //16:9
      height: 0
    video
      width: 100% !important
      height: auto !important
    iframe
      position: absolute
      top: 0
      left: 0
      width: 100%
      height: 100%
</style>
