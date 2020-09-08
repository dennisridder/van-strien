<template>
  <footer class="footer">
    <div class="footer-Top">
      <div class="footer-Top_Content">
        <div class="footer-Top_Community">
          <div>Meld je aan voor de nieuwsbrief</div>
          <div>Join the community</div>
        </div>
        <div class="footer-Top_Mail">
          <input type="text" />
          <button>Send</button>
        </div>
      </div>
    </div>
    <div class="footer-Bottom">
      <div class="footer-Bottom_Content">
        <div class="footer-Bottom_Logo"></div>
        <div class="footer-Bottom_Item">
          <a href="">link</a>
          <a href="">link</a>
        </div>
        <div class="footer-Bottom_Item">
          <a href="">link</a>
          <a href="">link</a>
        </div>
        <div class="footer-Bottom_Item">
          <a href="">link</a>
          <a href="">link</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style lang="sass" scoped>
@import '~/assets/styles/variables.sass'

.footer
  display: flex
  flex-direction: column
  &-Top, &-Bottom
    padding: var(--spacing-two)
    &_Content
      display: flex
      justify-content: space-around
  &-Top
    background: $yellow
    &_Mail, &_Community
      display: flex
      flex-direction: column
  &-Bottom
    background: $black
</style>
