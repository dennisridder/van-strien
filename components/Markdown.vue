<template>
  <div class="markdown" v-html="compiledMarkdown"></div>
</template>

<script>
// https://marked.js.org/
const marked = require("marked")
const renderer = new marked.Renderer()

marked.setOptions({
  renderer: new marked.Renderer(),
  breaks: true
})

renderer.link = function (href, title, text) {
  return (
    '<a target="_blank" href="' +
    href +
    '" title="' +
    text +
    '">' +
    text +
    "</a>"
  )
}

export default {
  name: "MarkdownItem",
  props: {
    input: String
  },
  computed: {
    compiledMarkdown: function () {
      return marked(this.input, { renderer: renderer })
    }
  }
}
</script>

<style lang="sass">
.markdown
  p
    white-space: pre-line
    margin-bottom: 1.5em
  p:last-child
    margin-bottom: 0
// Prefer style handling by cascading css (typography.sass) as much as possible.
</style>
