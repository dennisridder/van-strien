import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default {
  mounted() {
    this.rotateElement()
  },
  methods: {
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
      var rotations = height / window.innerHeight / 2
      // Scrolltrigger animation
      var array = document.querySelectorAll(".rotate")
      array.forEach((el) => {
        let rotateTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: el,
            scrub: 0.33,
            start: "top top",
            end: `+=${height}`,
            ease: "none"
          }
        })
        rotateTimeline.set(el, {
          rotation: 0,
          duration: 0,
          ease: "none"
        })
        rotateTimeline.to(el, {
          rotation: 360 * rotations,
          ease: "none"
        })
      })
    }
  }
}
