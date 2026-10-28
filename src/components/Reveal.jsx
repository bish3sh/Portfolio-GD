import React from 'react'
import useScrollReveal from '../hooks/useScrollReveal'
import './Reveal.css'

/*
  Wrap ANY piece of content with <Reveal> to animate it in
  individually when it scrolls into view.

  Usage:
    <Reveal as="h1" className="hero-title" delay={0}>Hello</Reveal>
    <Reveal delay={150}><p>Some text</p></Reveal>

  Props:
    as       - which HTML tag to render (default: 'div')
    delay    - stagger delay in ms (default: 0)
    className - gets merged with the reveal classes, so existing
                CSS targeting that class still works normally
*/
const Reveal = ({ children, delay = 0, className = '', as: Tag = 'div', ...rest }) => {
    const [ref, isVisible] = useScrollReveal()

    return (
        <Tag
            ref={ref}
            className={`reveal ${isVisible ? 'visible' : ''} ${className}`.trim()}
            style={{ transitionDelay: `${delay}ms` }}
            {...rest}
        >
            {children}
        </Tag>
    )
}

export default Reveal