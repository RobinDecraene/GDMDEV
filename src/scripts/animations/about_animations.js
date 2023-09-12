import {
  ScrollTrigger
} from 'gsap/ScrollTrigger';
import gsap from "gsap";
import SplitType from 'split-type';
import {
  Power1
} from "gsap";

gsap.registerPlugin(ScrollTrigger);

export const aboutAnimations = () => {
  // dit is hoe de aboutTextFloat er normaal moet uitzien maar als ik de 2 p in een div zet doet de css raar 
  // const aboutTextFloat = new SplitType('#textFloat', {
  //   types: 'lines'
  // })

  // gsap.from(aboutTextFloat.lines, {
  //   duration: 0.8,
  //   y: 50,
  //   stagger: {
  //     amount: 0.4,
  //     ease: Power1.easeOut,
  //   },
  //   scrollTrigger: {
  //     trigger: "#textFloat",
  //     markers: true,
  //     toggleActions: "restart none none reset",
  //     start: "top center",
  //     end: "bottom top"
  //   }
  // });

  const aboutTextFloat = gsap.from('#textFloat', {
    duration: 0.8,
    y: 50,
    ease: Power1.easeOut,
    scrollTrigger: {
      trigger: "#textFloat",
      toggleActions: "restart none none reset",
      start: "top center",
      end: "bottom top"
    }
  });

  const aboutDubbelImg = gsap.from("#aboutDubbleImg img", {
    duration: 1,
    y: -250,
    scrollTrigger: {
      trigger: "#aboutDubbleImg img",
      toggleActions: "restart none none reset",
      start: "top center",
      end: "bottom top"
    }
  });


  const aboutFeatured = new SplitType('#featured', {
    types: 'lines'
  });
  const aboutFeaturedTween = gsap.from(aboutFeatured.lines, {
    opacity: 0,
    y: 60,
    duration: 0.6,
    stagger: {
      amount: 0.4,
      ease: Power1.easeOut,
    },
    scrollTrigger: {
      trigger: aboutFeatured.lines,
      toggleActions: "restart none none reset",
      start: "top center",
      end: "bottom top"
    }
  });

  const aboutLogos = gsap.to('.div--img-logos', {
    translateX: "-=1100px",
    duration: 12,
    repeat: -1,
    scrollTrigger: {
      trigger: ".div--img-logos",
      toggleActions: "restart none none reset",
      start: "top bottom",
      end: "bottom top"
    }
  });

  const whoeWeAre = gsap.from("#whoWeAre", {
    duration: 1,
    y: 30,
    ease: "power0.easeIn",
    opacity: 0.5,
    scrollTrigger: {
      trigger: "#whoWeAre",
      toggleActions: "restart none none reset",
      start: "top center",
      end: "bottom top"
    }
  });

  const aboutTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".img--melk-size",
      toggleActions: "restart none none reset",
    }
  });

  aboutTimeline
    .from("#melkImg", {
      duration: 0.8,
      y: 60,
      ease: Power1.easeOut,
    })
    .from("#melkText", {
      duration: 0.8,
      y: 60,
      ease: Power1.easeOut,
    });

  const zoomAbout = gsap.from("#aboutZoom img", {
    scale: 1.2,
    duration: 1,
    scrollTrigger: {
      trigger: '#aboutZoom img',
      toggleActions: "restart none none reset",
      start: "top center",
      end: "bottom top"
    }
  });
}