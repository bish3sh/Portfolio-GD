import React from 'react'
import './Hero.css'

const Hero = () => {
  const scrollToIntro = () => {
    document.getElementById('intro-section')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Oh <span>Heyyyy!</span>,<br />Nice To Meet You!</h1>
        <p className="hero-subtitle">I <span>DESIGN</span> THINGS THAT MAKE PEOPLE'S LIVES A LITTLE EASIER.</p>
        <button className="hero-cta" onClick={scrollToIntro}>GET TO KNOW ME</button>
      </div>
    </div>
  )
}

export default Hero