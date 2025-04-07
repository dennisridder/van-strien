<template>
  <div v-editable="blok" class="item-Testimonials">
    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/11.0.5/swiper-bundle.min.js"
      integrity="sha512-Ysw1DcK1P+uYLqprEAzNQJP+J4hTx4t/3X2nbVwszao8wD+9afLjBQYjz7Uk4ADP+Er++mJoScI42ueGtQOzEA=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    ></script>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/11.0.5/swiper-bundle.min.css"
      integrity="sha512-rd0qOHVMOcez6pLWPVFIv7EfSdGKLt+eafXh4RO/12Fgr41hDQxfGvoi1Vy55QIVcQEujUE1LQrATCLl2Fs+ag=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
    <div class="swiper testimonials">
      <div class="swiper-wrapper">
        <component
          :is="blok.component | dashify"
          v-for="blok in blok.testimonials"
          :key="blok._uid"
          :blok="blok"
          class="swiper-slide"
        ></component>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    blok: Object
  },
  mounted() {
    document.addEventListener("DOMContentLoaded", () => {
      setTimeout(() => this.initSwiper(), 1)
    })
  },
  methods: {
    initSwiper() {
      // eslint-ignore
      const swiper = new Swiper(".swiper.testimonials", {
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        loop: true,
        slidesPerView: 1
      })

      swiper.init()
    }
  }
}
</script>

<style lang="sass">
@import '~/assets/styles/variables.sass'

.item-Testimonials
  text-align: left
  --swiper-pagination-bottom: 0
  --swiper-pagination-color: $landing-dark
  --swiper-pagination-bullet-size: 12px
  --swiper-pagination-bullet-inactive-color: transparent
  --swiper-pagination-bullet-inactive-opacity: 1

  blockquote
    margin-bottom: 1rem

  .swiper-pagination
    text-align: left

  .swiper-pagination-bullet
    border: 1px solid $landing-dark

  .swiper-pagination-bullet-active
    background-color: $landing-dark
</style>
