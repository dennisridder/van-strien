import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default {
  // watch: {
  //   $route() {
  //     this.rotateElement()
  //     this.horizontalScrollElement()
  //   }
  // },
  mounted() {
    this.rotateElement()
    this.horizontalScrollElement()
  },
  methods: {
    horizontalScrollElement() {
      // Get page width
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
    },
    rotateElement() {
      // Get doc height
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
        // rotateTimeline.set(el, {
        //   rotation: 0,
        //   duration: 0,
        //   ease: "none"
        // })
        rotateTimeline.to(el, {
          rotation: 360 * rotations,
          ease: "none"
        })
      })
    }
  }
}
