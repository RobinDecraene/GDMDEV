import {
  ScrollTrigger
} from 'gsap/ScrollTrigger';
import gsap from "gsap";
import SplitType from 'split-type';
import {
  Power1
} from "gsap";

gsap.registerPlugin(ScrollTrigger);

export const contactAnimations = () => {
  const contactTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: "#stagger",
      toggleActions: "restart none none reset",
    }
  });

  const titleContact = new SplitType('#stagger', {
    types: 'chars'
  })

  const start = gsap.from(titleContact.chars, {
    y: 300,
    duration: 1,
    stagger: {
      amount: 0.4,
      ease: Power1.easeOut
    },
    scrollTrigger: {
      trigger: "#stagger",
      toggleActions: "restart none none reset",
    }

  })

  contactTimeline
    .from("#contactDoubleImg img", {
      duration: 1,
      y: -480
    })
    .from("#contactAppear", {
      duration: 1,
      y: 30,
      opacity: 0,
      ease: "power0.easIn"
    })

  const contactZoom = gsap.from("#contactZoom img", {
    scale: 1.2,
    duration: 1.5,
    scrollTrigger: {
      trigger: '#contactZoom img',
      toggleActions: "restart none none reset",
      start: "top center",
      end: "bottom top"
    }
  })
}