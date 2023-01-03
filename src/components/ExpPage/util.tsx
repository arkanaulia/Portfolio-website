import * as THREE from 'three'
import { proxy } from 'valtio'

export const damp = THREE.MathUtils.damp

const kontol = [
  {
    img: 1,
    text: 'During my internship as an interaction designer at FXMedia Singapore, I gained experience creating user interfaces for various platforms including websites, games, and VR/AR/XR technologies. I also developed skills in motion graphics and video editing.',
  },
  {
    img: 2,
    text: 'tiket.com is a multi-national company from Indonesia. I am currently interning at the product design division, where I am responsible for both 3D illustration and product design projects and classes. ',
  },
  {
    img: 3,
    text: 'I was responsible for branding, content creation, and social media strategy, as well as meeting the design requirements for judging in categories such as poster, video, and website. I also achieved first place in design documentation, website, and video categories at the international Roboboat competition in Florida, USA.',
  },
  {
    img: 4,
    text: 'As a production manager for Indonesia Peerleader by Paragon, I was part of the founding team responsible for deciding on the visual concept and creating a standard graphic manual. I was also responsible for managing the creation of motion, video, and website content with my team at Indonesia Peerleaders by Paragon.',
  },
  {
    img: 5,
    text: 'As Production Manager at the International Youth Summit for Renewable Energy (IYSRE) 2021, I was responsible for overseeing the creation of motion and dynamic branding materials, and for ensuring that my team was well-organized and comfortable.',
  },
  {
    img: 6,
    text: 'As a production manager for Indonesia Peerleader by Paragon, I was part of the founding team responsible for deciding on the visual concept and creating a standard graphic manual. I was also responsible for managing the creation of motion, video, and website content with my team at Indonesia Peerleaders by Paragon.',
  },
  {
    img: 7,
    text: 'As a production manager for Indonesia Peerleader by Paragon, I was part of the founding team responsible for deciding on the visual concept and creating a standard graphic manual. I was also responsible for managing the creation of motion, video, and website content with my team at Indonesia Peerleaders by Paragon.',
  },
]

export const state = proxy({
  clicked: null,
  urls: kontol,
})
