import React from 'react'
import './App.css'
import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Intro from './components/Intro'
import Service from './components/Service'
import Project from './components/Project'
import Timeline from './components/Timeline'
import Contact from './components/Contact'

function App() {
    return (
        <Preloader>
            <Navbar />
            <Hero />
            <Intro />
            {/* <Service /> */}
            <Project />
            <Timeline />
            <Contact />
        </Preloader>
    )
}

export default App