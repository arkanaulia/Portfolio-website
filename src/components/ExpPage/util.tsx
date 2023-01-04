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
    text: 'As a 3D designer for XD Kreativ, I am tasked with creating a portfolio of 3D advertising and content to increase the companys revenue. By gaining insight and utilizing my skills in 3D design, I aim to help XD Kreativ achieve greater success. I am part of the XD Collective, a team dedicated to delivering high-quality 3D design work for our clients.',
  },
  {
    img: 6,
    text: 'As the Production Manager for the International Youth Summit for Renewable Energy (IYSRE) 2021, I am in charge of managing all motion and dynamic branding elements. Additionally, it is my responsibility to ensure that my team is well-organized and comfortable in their roles.',
  },
  {
    img: 5,
    text: 'As a production manager for Indonesia Peerleader by Paragon, I was part of the founding team responsible for deciding on the visual concept and creating a standard graphic manual. I was also responsible for managing the creation of motion, video, and website content with my team at Indonesia Peerleaders by Paragon.',
  },
  {
    img: 7,
    text: 'As the Media Production Coordinator for Petrolida, I am responsible for overseeing the media team, including quality control and workload management. I also ensure that all team members are continuously learning new skills and applying them in their work.',
  },
  {
    img: 8,
    text: 'As the head of the web design team, I am responsible for overseeing the creation of a website from the beginning stages to its completion. It is my job to manage the team and ensure that we are working efficiently and effectively, despite having limited resources and a tight deadline. One of my main duties is to keep the team organized and ensure that everyone is comfortable and able to work effectively.',
  },
  {
    img: 9,
    text: 'As the Design, Documentation, and Decoration Coordinator for Schematics ITS, my responsibilities include coordinating the work of these departments and making sure that the design of our content is consistent and meets our standards.',
  },
  {
    img: 10,
    text: 'As a Motion Designer for ITS EXPO, I am introducing 3D animation and am responsible for creating both 2D and 3D motion graphics.',
  },
]

export const state = proxy({
  clicked: null,
  urls: kontol,
})
