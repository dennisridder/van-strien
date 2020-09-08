import Vue from "vue"
// PAGES
import Page from "~/components/Page.vue"
import PagePost from "~/components/PagePost.vue"
// SECTIONS
import SectionLanding from "~/components/SectionLanding.vue"
import SectionPassage from "~/components/SectionPassage.vue"
import SectionMessage from "~/components/SectionMessage.vue"
import SectionBlogHorizontal from "~/components/SectionBlogHorizontal.vue"
import SectionBlogGrid from "~/components/SectionBlogGrid.vue"
// ITEMS
import ItemButton from "~/components/ItemButton.vue"
import ItemCaption from "~/components/ItemCaption.vue"
import ItemDoor from "~/components/ItemDoor.vue"
import ItemQuote from "~/components/ItemQuote.vue"
import ItemSubtitle from "~/components/ItemSubtitle.vue"
import ItemText from "~/components/ItemText.vue"
import ItemTitle from "~/components/ItemTitle.vue"

// PAGES
Vue.component("blok-page", Page)
Vue.component("blok-page-post", PagePost)
// SECTIONS
Vue.component("blok-section-landing", SectionLanding)
Vue.component("blok-section-passage", SectionPassage)
Vue.component("blok-section-message", SectionMessage)
Vue.component("blok-section-blog-horizontal", SectionBlogHorizontal)
Vue.component("blok-section-blog-grid", SectionBlogGrid)
// ITEMS
Vue.component("blok-item-button", ItemButton)
Vue.component("blok-item-caption", ItemCaption)
Vue.component("blok-item-door", ItemDoor)
Vue.component("blok-item-quote", ItemQuote)
Vue.component("blok-item-subtitle", ItemSubtitle)
Vue.component("blok-item-text", ItemText)
Vue.component("blok-item-Title", ItemTitle)
