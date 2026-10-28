import React from 'react'
import './Timeline.css'
import Reveal from './Reveal'

const timelineData = [
    {
        date: '2019 - 2021',
        title: 'GIHE',
        text: '+2 in Science field in GIHE college'
    },
    {
        date: '2021 - 2025',
        title: 'Kantipur City College',
        text: 'Bachelor in Computer Application(IT) in Kantipur City College'
    },
    {
        date: '2024 - 2025',
        title: 'Arete Viva SEO',
        text: 'UI/UX Designer'
    },
    {
        date: '2025 - 2026',
        title: 'RABS International',
        text: 'Lead Designer'
    },
    {
        date: '2026',
        title: 'Chitra Tech',
        text: 'Frontend Developer Intern'
    },
]

const Timeline = () => {
  return (
    <div className='timeline'>
      <h2 className="heading">Timeline</h2>
      <p className='heading-description'>Every great journey starts with curiosity!</p>
      <div className="timeline-items">
        {timelineData.map((item, i) => (
          <Reveal key={item.title} className="timeline-item" delay={i * 150}>
            <div className="timeline-dot"></div>
            <div className="timeline-date">{item.date}</div>
            <div className="timeline-content">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
              <p className='tail-description'>The journey goes on!!! Smarter, Bolder, Inspiring.</p>

    </div>
  )
}

export default Timeline
