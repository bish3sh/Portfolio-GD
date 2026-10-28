import React from 'react'
import './Project.css'
import Reveal from './Reveal'
import img1 from '../assets/design-works/1.jpg'
import img2 from '../assets/design-works/2.png'
import img3 from '../assets/design-works/3.png'
import img4 from '../assets/design-works/4.jpg'
import img5 from '../assets/design-works/5.png'
import img6 from '../assets/design-works/6.png'
import img7 from '../assets/design-works/7.png'
import img8 from '../assets/design-works/8.png'
import img9 from '../assets/design-works/9.png'

// ─────────────────────────────────────────────────────────────
// Placeholder generator so the layout renders before you add art.
// Replace each `image` with your own imports, e.g.
//   import kitkat from '../assets/kitkat.jpg'
// ─────────────────────────────────────────────────────────────
const ph = (label, bg, fg = '#fff') =>
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="800" viewBox="0 0 600 800">
       <rect width="600" height="800" fill="${bg}"/>
       <text x="300" y="410" font-family="Arial Black, Arial, sans-serif" font-size="54"
             fill="${fg}" text-anchor="middle">${label}</text>
     </svg>`
  )

// `id` maps to a CSS class (t-a, t-b …) that places the picture in the collage grid.
const works = [
  { id: 'a', title: 'Snack Ad', image: img1, link: '' },
  { id: 'b', title: 'Movie Poster', image: img2, link: '' },
  { id: 'c', title: 'Chocolate Ad', image: img3, link: '' },
  { id: 'd', title: 'Grand Opening', image: img4, link: '' },
  { id: 'e', title: 'Product Promo', image: img5, link: '' },
  { id: 'f', title: 'Sports Edit', image: img6, link: '' },
  { id: 'g', title: 'Noodles Pack', image: img7, link: '' },
  { id: 'h', title: 'Athlete Poster', image: img8, link: '' },
  { id: 'i', title: 'Cafe Menu', image: img9, link: '' },
]

const DesignWorks = () => {
  return (
    <section className="design-works">
      <div className="dw-board">
        <Reveal className="dw-title-wrap">
          <h2 className="dw-title">
            My <span>Designs</span>
            {/* <span className="dw-script">Designs</span> */}
          </h2>
        </Reveal>

        {works.map((w, i) => {
          const hasLink = Boolean(w.link)
          const Tag = hasLink ? 'a' : 'div'
          const linkProps = hasLink
            ? { href: w.link, target: '_blank', rel: 'noopener noreferrer', 'aria-label': `Open ${w.title}` }
            : {}

          return (
            <Reveal key={w.id} className={`dw-tile t-${w.id}`} delay={i * 80}>
              <Tag
                className="dw-card"
                tabIndex={hasLink ? undefined : 0}
                {...linkProps}
              >
                <img src={w.image} alt={w.title} />
              </Tag>
            </Reveal>
          )
        })}
      </div>
      <div className="design-btn-container">
        <button className="design-cta" onClick={() => window.open('https://drive.google.com/drive/folders/1vRYVXv4xDJDW7Xp8--DRTJI2f1xFy1vW', '_blank', 'noopener,noreferrer')}>MORE DESIGNS</button>
      </div>
    </section>

  )
}

export default DesignWorks