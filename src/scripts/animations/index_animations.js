import {
  ScrollTrigger
} from 'gsap/ScrollTrigger';
import gsap from "gsap";
import SplitType from 'split-type';
import {
  Power1
} from "gsap";

gsap.registerPlugin(ScrollTrigger);

export const indexAnimations = () => {
  const home1Timeline = gsap.timeline({
    delay: 0.5
  });

  const home2Timeline = gsap.timeline({
    scrollTrigger: {
      trigger: "#indexDoubleImg img",
      toggleActions: "restart none none reset",
      start: "top center",
      end: "bottom top"
    }
  });

  home1Timeline
    .to('.h1--home-style, .p--header-home', {
      duration: 2,
      opacity: 1
    })
    .to('.home--loading-animation', {
      duration: 1,
      opacity: 0
    })
    .play();

  home2Timeline
    .from("#indexDoubleImg img", {
      duration: 1,
      y: -250
    })
    .from("#line", {
      duration: 1,
      opacity: 0,
    });

  const elements = gsap.utils.toArray("[data-animation='fade']");

  elements.forEach(el =>
    gsap.from(el, {
      opacity: 0,
      y: 20,
      scrollTrigger: {
        trigger: el,
        start: "center 100%",
        toggleActions: "restart none none reset",
      }
    }));


  const indexPinned = new SplitType('#appear', {
    types: 'lines'
  });
  const indexPinnedTween = gsap.from(indexPinned.lines, {
    opacity: 0,
    y: 60,
    duration: 0.6,
    stagger: {
      amount: 0.4,
      ease: Power1.easeOut,
    },
    scrollTrigger: {
      trigger: indexPinned.lines,
      toggleActions: "restart none none reset",
      start: "top center",
      end: "bottom top"
    }
  });

  const appear = gsap.to("#appear", {
    scrollTrigger: {
      trigger: "#appear",
      pin: "#appear",
      start: "top top",
      end: "+=1700",
      scrub: 2,
    }
  });

  const pinned = gsap.to("#view", {
    opacity: 0,
    scrollTrigger: {
      trigger: "#view",
      pin: "#view",
      start: "top top",
      end: "+=740",
      scrub: 2,
    }
  });

  const floatingZoom = gsap.from("#floatingZoom img", {
    scale: 1.2,
    duration: 1.5,
    scrollTrigger: {
      trigger: '#floatingZoom img',
      toggleActions: "restart none none reset",
      start: "top center",
      end: "bottom top"
    }
  });

  const indexZoom = gsap.from("#indexZoom img", {
    scale: 1.2,
    duration: 1.5,
    scrollTrigger: {
      trigger: '#indexZoom img',
      toggleActions: "restart none none reset",
      start: "top center",
      end: "bottom top"
    }
  });

}