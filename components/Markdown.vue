<template>
  <span class="markdown" v-html="compiledMarkdown" />
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
    '<a target="_blank" rel="noreferrer" href="' +
    href +
    '" title="' +
    title +
    '">' +
    text +
    "</a>"
  )
}

export default {
  name: "MarkdownItem",
  props: {
    input: String,
    skipTags: Array
  },
  computed: {
    compiledMarkdown: function () {
      let html = marked(this.input, { renderer: renderer })

      if (this.skipTags && this.skipTags.includes("p"))
        html = html.replace(/<\/?p>/g, "")

      return html
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
