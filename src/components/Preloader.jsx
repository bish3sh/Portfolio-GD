import React, { useEffect, useState } from 'react'
import './Preloader.css'
import loadingGif from '../assets/loading.gif'

const Preloader = ({ children }) => {
    // Check sessionStorage synchronously on first render so there's
    // no flash of the loader on refreshes within the same session.
    const [isLoading, setIsLoading] = useState(() => {
        return sessionStorage.getItem('hasVisited') !== 'true'
    })

    useEffect(() => {
        if (!isLoading) return

        const MIN_DISPLAY_TIME = 2800 // ms - tweak to taste
        const startTime = Date.now()

        const finishLoading = () => {
            const elapsed = Date.now() - startTime
            const remaining = Math.max(MIN_DISPLAY_TIME - elapsed, 0)

            setTimeout(() => {
                sessionStorage.setItem('hasVisited', 'true')
                setIsLoading(false)
            }, remaining)
        }

        if (document.readyState === 'complete') {
            finishLoading()
        } else {
            window.addEventListener('load', finishLoading)
            return () => window.removeEventListener('load', finishLoading)
        }
    }, [isLoading])

    if (!isLoading) {
        return children
    }

    return (
        <div className="preloader">
            <img src={loadingGif} alt="Loading" className="preloader-gif" />
        </div>
    )
}

export default Preloader