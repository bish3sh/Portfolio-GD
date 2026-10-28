import React, { useState } from 'react'
import './Navbar.css'


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    {/* Left Section - Logo & Info */}
                    <div className="navbar-left">
                        <div className="navbar-logo">
                            <div className="logo-icon">B</div>
                            <span>Bishesh Maharjan</span>
                        </div>
                    </div>

                    {/* Right Section - Social & CTA (Desktop Only) */}
                    <div className="navbar-right">
                        <a href="https://github.com/bish3sh" className="icon-btn" aria-label="Github" target="_blank" rel="noopener noreferrer">
                            <i className='bx bxl-github'></i>
                        </a>
                        {/* <a href="mailto:maharjanbishesh8@gmail.com" className="icon-btn" aria-label="Email" target="_blank" rel="noopener noreferrer">
                            ✉
                        </a> */}
                        <a href="https://www.linkedin.com/in/bishesh-maharjan" className="icon-btn" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                            in
                        </a>
                        <button className="cta-btn" onClick={() => window.open('/Bishesh-CV.pdf', '_blank')}>
                            Resume
                        </button>
                    </div>

                    {/* Hamburger */}
                    <button 
                        className={`hamburger ${isOpen ? 'active' : ''}`}
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="mobile-menu">
                    <div className="mobile-menu-content">
                        <a
                            href="https://github.com/bish3sh"
                            className="mobile-icon-btn"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setIsOpen(false)}
                        >
                            <i className='bx bxl-github'></i>
                            <span>Github</span>
                        </a>
                        <a href="#contact-section" className="mobile-icon-btn" onClick={() => setIsOpen(false)}>
                            ✉
                            <span>Email</span>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/bishesh-maharjan"
                            className="mobile-icon-btn"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setIsOpen(false)}
                        >
                            in
                            <span>LinkedIn</span>
                        </a>
                        <button
                            className="mobile-cta-btn"
                            onClick={() => {
                                window.open('/Bishesh-CV.pdf', '_blank')
                                setIsOpen(false)
                            }}
                        >
                            Resume
                        </button>
                    </div>
                </div>
            )}
        </>
    )
}

export default Navbar