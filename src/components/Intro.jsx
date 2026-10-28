import React from 'react'
import './Intro.css'
import bishImage from '../assets/bish1.jpg'
import softwareIcons from '../assets/software-icons.png'
import Reveal from './Reveal'

const Intro = () => {
  return (
    <div className='home' id='intro-section'>
      <div className="home-main">
        <div className="home-content">
          <Reveal as="h1" delay={0}>Hi, I'm <span>Bishesh</span> </Reveal>
          <h3 className="text-animation" delay={150}>A <span></span></h3>
          <Reveal as="p" delay={300}>
            I strive to design interfaces that are not only stunning and appealing on the eye, but also highly functional and contain visual storytelling.
          </Reveal>
          <Reveal className="software-icons" delay={450}>
            <img src={softwareIcons} alt="Software I use: Photoshop, Illustrator, Lightroom, Premiere Pro, PicsArt, Canva" />
          </Reveal>
        </div>
        <Reveal className="home-img" delay={200}>
          <img src={bishImage} alt="Bishesh" />
        </Reveal>
      </div>
    </div>
  )
}

export default Intro