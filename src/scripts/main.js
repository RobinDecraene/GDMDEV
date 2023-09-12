import './menu/menu';
import './footer/footer';
import 'swiper/css';
import './swiper/swiper';

import gsap from "gsap";
import {
  aboutAnimations
} from './animations/about_animations';
import {
  contactAnimations
} from './animations/contact_animations';
import {
  indexAnimations
} from './animations/index_animations';

const masterTimeline = gsap.timeline();

masterTimeline
  .add(aboutAnimations)
  .add(contactAnimations)
  .add(indexAnimations);