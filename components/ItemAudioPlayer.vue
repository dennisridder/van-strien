<template>
  <div class="item-AudioPlayer">
    <figure>
      <audio id="audioPlayer" preload="none">
        <source :src="blok.audio.filename" type="audio/mpeg" />
        Your browser does not support the <code>audio</code> element.
      </audio>
      <div
        id="audioPlayButton"
        class="item-AudioPlayer_Button"
        @click="playAudio()"
      >
        <div
          v-if="audio === 'stopped' || audio === 'paused'"
          class="icon icon-Audio"
          v-html="require('~/assets/images/icon-play.svg?include')"
        />
        <div
          v-else
          class="icon icon-Audio"
          v-html="require('~/assets/images/icon-stop.svg?include')"
        />
      </div>
    </figure>
  </div>
</template>

<script>
export default {
  props: {
    blok: Object
  },
  data() {
    return {
      audio: "stopped"
    }
  },
  mounted() {
    console.log("AUDIO BLOK", this.blok)
  },
  methods: {
    playAudio() {
      var audio = document.getElementById("audioPlayer")
      if (this.audio === "stopped" || this.audio === "paused") {
        audio.play()
        this.audio = "playing"
        console.log("AUDIO PLAYING", this.audio)
      } else if (this.audio === "playing") {
        audio.pause()
        this.audio = "paused"
        console.log("AUDIO PAUSED", this.audio)
      }
    }
  }
}
</script>

<style lang="sass">
@import '~/assets/styles/variables.sass'

.item
  &-AudioPlayer
    width: 16.75%
    &_Button
      cursor: pointer
      color: $white
      width: 100%
      text-align: center
      img
        widht: 100%
</style>
