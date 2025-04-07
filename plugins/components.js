import Vue from "vue"
// PAGES
import Page from "~/components/Page.vue"
import PageAbout from "~/components/PageAbout.vue"
import PageContact from "~/components/PageContact.vue"
import PagePopup from "~/components/PagePopup.vue"
import PagePost from "~/components/PagePost.vue"
// SECTIONS
import SectionBlogContent from "~/components/SectionBlogContent.vue"
import SectionBlogHorizontal from "~/components/SectionBlogHorizontal.vue"
import SectionBlogGrid from "~/components/SectionBlogGrid.vue"
import SectionCollaborations from "~/components/SectionCollaborations.vue"
import SectionContact from "~/components/SectionContact.vue"
import SectionFeature from "~/components/SectionFeature.vue"
import SectionHero from "~/components/SectionHero.vue"
import SectionLanding from "~/components/SectionLanding.vue"
import SectionMarquee from "~/components/SectionMarquee.vue"
import SectionMediaText from "~/components/SectionMediaText.vue"
import SectionMessage from "~/components/SectionMessage.vue"
import SectionNewsletter from "~/components/SectionNewsletter.vue"
import SectionPassage from "~/components/SectionPassage.vue"
import SectionWeken from "~/components/SectionWeken.vue"
// ITEMS
import ItemActivecampaignForm from "~/components/ItemActivecampaignForm.vue"
import ItemAudioPlayer from "~/components/ItemAudioPlayer.vue"
import ItemButton from "~/components/ItemButton.vue"
import ItemButtonNew from "~/components/ItemButtonNew.vue"
import ItemCaption from "~/components/ItemCaption.vue"
import ItemColumn from "~/components/ItemColumn.vue"
import ItemColumns from "~/components/ItemColumns.vue"
import ItemDoor from "~/components/ItemDoor.vue"
import ItemElements from "~/components/ItemElements.vue"
import ItemElement from "~/components/ItemElement.vue"
import ItemFaq from "~/components/ItemFaq.vue"
import ItemFeature from "~/components/ItemFeature.vue"
import ItemGraphic from "~/components/ItemGraphic.vue"
import ItemLine from "~/components/ItemLine.vue"
import ItemMessage from "~/components/ItemMessage.vue"
import ItemSoundcloudPlayer from "~/components/ItemSoundcloudPlayer.vue"
import ItemPodcast from "~/components/ItemPodcast.vue"
import ItemQuote from "~/components/ItemQuote.vue"
import ItemQuestion from "~/components/ItemQuestion.vue"
import ItemSpacer from "~/components/ItemSpacer.vue"
import ItemSubtitle from "~/components/ItemSubtitle.vue"
import ItemTestimonial from "~/components/ItemTestimonial.vue"
import ItemTestimonials from "~/components/ItemTestimonials.vue"
import ItemText from "~/components/ItemText.vue"
import ItemTitle from "~/components/ItemTitle.vue"
import ItemVertical from "~/components/ItemVertical.vue"
import ItemVideo from "~/components/ItemVideo.vue"
import ItemWeek from "~/components/ItemWeek.vue"

// Reusable components
import AppButton from "~/components/AppButton.vue"

// PAGES
Vue.component("blok-page", Page)
Vue.component("blok-page-about", PageAbout)
Vue.component("blok-page-contact", PageContact)
Vue.component("blok-page-popup", PagePopup)
Vue.component("blok-page-post", PagePost)
// SECTIONS
Vue.component("blok-section-blog-content", SectionBlogContent)
Vue.component("blok-section-blog-horizontal", SectionBlogHorizontal)
Vue.component("blok-section-blog-grid", SectionBlogGrid)
Vue.component("blok-section-collaborations", SectionCollaborations)
Vue.component("blok-section-contact", SectionContact)
Vue.component("blok-section-feature", SectionFeature)
Vue.component("blok-section-hero", SectionHero)
Vue.component("blok-section-landing", SectionLanding)
Vue.component("blok-section-marquee", SectionMarquee)
Vue.component("blok-section-media-text", SectionMediaText)
Vue.component("blok-section-message", SectionMessage)
Vue.component("blok-section-newsletter", SectionNewsletter)
Vue.component("blok-section-passage", SectionPassage)
Vue.component("blok-section-weken", SectionWeken)
// ITEMS
Vue.component("blok-item-activecampaign-form", ItemActivecampaignForm)
Vue.component("blok-item-audio-player", ItemAudioPlayer)
Vue.component("blok-item-button", ItemButton)
Vue.component("blok-item-button-new", ItemButtonNew)
Vue.component("blok-item-caption", ItemCaption)
Vue.component("blok-item-column", ItemColumn)
Vue.component("blok-item-columns", ItemColumns)
Vue.component("blok-item-door", ItemDoor)
Vue.component("blok-item-elements", ItemElements)
Vue.component("blok-item-element", ItemElement)
Vue.component("blok-item-faq", ItemFaq)
Vue.component("blok-item-feature", ItemFeature)
Vue.component("blok-item-graphic", ItemGraphic)
Vue.component("blok-item-line", ItemLine)
Vue.component("blok-item-message", ItemMessage)
Vue.component("blok-item-soundcloud-player", ItemSoundcloudPlayer)
Vue.component("blok-item-podcast", ItemPodcast)
Vue.component("blok-item-quote", ItemQuote)
Vue.component("blok-item-question", ItemQuestion)
Vue.component("blok-item-spacer", ItemSpacer)
Vue.component("blok-item-subtitle", ItemSubtitle)
Vue.component("blok-item-testimonial", ItemTestimonial)
Vue.component("blok-item-testimonials", ItemTestimonials)
Vue.component("blok-item-text", ItemText)
Vue.component("blok-item-title", ItemTitle)
Vue.component("blok-item-vertical", ItemVertical)
Vue.component("blok-item-video", ItemVideo)
Vue.component("blok-item-week", ItemWeek)

// Reusable components
Vue.component("app-button", AppButton)
