import React from 'react'
import './Service.css'
import Reveal from './Reveal'

const services = [
    {
        title: 'Frontend Development',
        icon: 'bx bx-code-alt',
        tech: ['HTML5', 'CSS3', 'JavaScript', 'React', 'TypeScript', 'Tailwind CSS'],
    },
    {
        title: 'Backend Development',
        icon: 'bx bx-server',
        tech: ['Python', 'Java', 'C++', 'C#', 'Node.js'],
    },
    {
        title: 'UI/UX Designing',
        icon: 'bx bx-pencil',
        tech: ['Figma', 'Adobe Suite'],
    },
]

const stats = [
    { value: '1+', lines: ['Years', 'Experience'] },
    { value: '5+', lines: ['Projects', 'Completed'] },
    // { value: 'Hundreds', lines: ['of Components', 'Built'] },
    { value: 'Countless', lines: ['Interfaces', 'Designed'] },
    { value: '∞', lines: ['Ideas', 'Transformed'] },
]

const Service = () => {
    return (
        <div className='services'>

<div className="intro-stats-wrapper">
        <div className="intro-stats">
          {stats.map((s, i) => (
            <Reveal key={s.value} className="stat-item" delay={i * 100}>
              <div className="stat-value">{s.value}</div>
              <div className="stat-lines">
                {s.lines.map((line) => (
                  <span key={line}>{line}<br /></span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>



            <div className="services-container">
                {services.map((s, i) => (
                    <Reveal
                        key={s.title}
                        className="service-box"
                        delay={i * 150}
                    >
                        <div className="service-info">
                            <div className="service-default">
                                <i className={`service-icon ${s.icon}`}></i>
                                <h4>{s.title}</h4>
                            </div>

                            <ul className="service-list">
                                {s.tech.map((t) => (
                                    <li key={t}>{t}</li>
                                ))}
                            </ul>
                        </div>
                    </Reveal>
                ))}
            </div>
        </div>
    )
}

export default Service