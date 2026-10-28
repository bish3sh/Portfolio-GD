import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import './Contact.css'
import Reveal from './Reveal'

// Replace these with the values from your EmailJS dashboard
const SERVICE_ID = 'service_ub4p16a'
const TEMPLATE_ID = 'template_d1klgwn'
const PUBLIC_KEY = '4MXXuJtZJExhm2MRh'

const Contact = () => {
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
        setStatus('success')
        formRef.current.reset()
        setTimeout(() => setStatus('idle'), 4000)
      })
      .catch((err) => {
        console.error('EmailJS error:', err)
        setStatus('error')
        setTimeout(() => setStatus('idle'), 4000)
      })
  }

  return (
    <section className="contact-section" id="contact-section">
      <div className="contact-container">
        <Reveal className="contact-intro" delay={0}>
          <p>Thank you for stopping by!</p>
          <h2>Let's connect!</h2>
        </Reveal>

        <Reveal className="contact-content" delay={150}>
          <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" required />
            <input type="email" name="email" placeholder="Email" required />
            <textarea name="message" rows="6" placeholder="Message" required />

            <button type="submit" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'success' && (
              <p className="form-status success">Message sent! I'll get back to you soon.</p>
            )}
            {status === 'error' && (
              <p className="form-status error">Something went wrong. Please try again or email me directly.</p>
            )}
          </form>
        </Reveal>

        <footer className="contact-footer">
          <div className="footer-content">
            <p className="footer-copyright">© 2026 {' '}</p>
            <p className="footer-email">Bishesh Maharjan</p>
            <p className="footer-time">
              {new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })} 
            </p>
          </div>
        </footer>
      </div>
    </section>
  )
}

export default Contact