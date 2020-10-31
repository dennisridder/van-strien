import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default {
  mounted() {
    this.rotateElement()
    this.scrollSlowLanding()
    this.scrollSlowDoor()
    this.horizontalScrollElement()
  },
  methods: {
    scrollSlowDoor() {
      setTimeout(function () {
        var targets = document.querySelectorAll(".scrollSlow-Door")
        targets.forEach((el) => {
          // Don't fire on the horizontal scrolling elements
          if (
            el.parentElement.parentElement.classList[0] ==
            "section-BlogHorizontal_Item"
          ) {
            return
          } else if (
            el.parentElement.parentElement.parentElement.parentElement
              .parentElement.parentElement.classList[0] ==
            "section-Popup_Container"
          ) {
            return
          } else {
            gsap.set(el, {
              yPercent: -10
            })
            gsap.to(el, {
              yPercent: 10,
              ease: "none",
              scrollTrigger: {
                trigger: el,
                scrub: true,
                start: "top bottom",
                end: "bottom top"
              }
            })
          }
        })
      }, 200)
    },
    scrollSlowLanding() {
      setTimeout(function () {
        var targets = document.querySelectorAll(".scrollSlow-Landing")
        targets.forEach((el) => {
          gsap.to(el, {
            yPercent: 10,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              scrub: true,
              start: "top top",
              end: "bottom top"
            }
          })
        })
      }, 200)
    },
    horizontalScrollElement() {
      // Get page width
      setTimeout(function () {
        var width = window.innerWidth / 3
        // Get el
        var array = document.querySelectorAll(".horizontalScroll")
        array.forEach((el) => {
          let horizontalTimeline = gsap.timeline({
            scrollTrigger: {
              trigger: el,
              scrub: 0,
              start: "top bottom",
              end: "bottom top",
              ease: "none"
            }
          })
          horizontalTimeline.set(el, {
            x: 0
          })
          horizontalTimeline.to(el, {
            x: -width
          })
        })
      }, 200)
    },
    rotateElement() {
      // Get doc height
      setTimeout(function () {
        var body = document.body,
          html = document.documentElement
        var height = Math.max(
          body.scrollHeight,
          body.offsetHeight,
          html.clientHeight,
          html.scrollHeight,
          html.offsetHeight
        )
        // Calc number of rotations
        var rotations = height / (window.innerHeight * 3)
        var container = document.querySelector("main")
        // Scrolltrigger animation
        var array = document.querySelectorAll(".rotate")
        array.forEach((el) => {
          let rotateTimeline = gsap.timeline({
            scrollTrigger: {
              trigger: container,
              scrub: 0,
              start: "top top",
              end: "bottom bottom",
              ease: "none"
            }
          })
          rotateTimeline.to(el, {
            rotation: 360 * rotations,
            ease: "none"
          })
        })
      }, 200)
    }
  }
}
