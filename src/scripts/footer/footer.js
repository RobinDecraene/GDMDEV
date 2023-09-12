import SplitType from 'split-type';
import gsap from "gsap";
import {
  ScrollTrigger
} from 'gsap/ScrollTrigger';
import {
  Power1
} from "gsap";

gsap.registerPlugin(ScrollTrigger);

const footerText = new SplitType('.footer--p-style', {
  types: 'chars'
})


const footerTextTween = gsap.from(footerText.chars, {
  y: 300,
  duration: 1,
  stagger: {
    amount: 0.4,
    ease: Power1.easeOut,
    from: "random"
  },

  scrollTrigger: {
    trigger: footerText.chars,
    toggleActions: "restart none none reset",
    start: "top 80%",
    end: "bottom top"
  }
})

const footerLiTween = gsap.from(".footer--li-style", {
  y: 30,
  duration: 1,
  ease: Power1.easeOut,
  scrollTrigger: {
    trigger: ".footer--li-style",
    toggleActions: "restart none none reset",
    start: "top bottom",
    end: "bottom top"
  }
})