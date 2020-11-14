<template>
  <div class="section-Wrapper section-Page">
    <section class="section-Succes">
      <div class="section-Succes_Content">
        <p>
          Succes! Je hebt een bevestigings mail ontbangen.<br />
          Ga terug naar <nuxt-link to="/">home</nuxt-link>,
          <nuxt-link to="/moonlab">Moonlab</nuxt-link> of lees mijn
          <nuxt-link to="/herinneringen">herinneringen</nuxt-link>.
        </p>
      </div>
    </section>
  </div>
</template>

<style lang="sass">
@import '~/assets/styles/variables.sass'

.section
  &-Succes
    min-height: 100vh
    width: 100%
    display: flex
    justify-content: space-around
    align-items: center
    p
      display: block
      text-align: center
    a
      border-bottom: $darkbrown solid 1px
</style>
