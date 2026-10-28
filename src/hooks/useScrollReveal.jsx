import { useEffect, useRef, useState } from 'react'

// Reusable hook: returns a ref to attach to a section,
// and a boolean that flips to true once that section scrolls into view.
const useScrollReveal = (options = {}) => {
    const ref = useRef(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const el = ref.current
        if (!el) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    observer.unobserve(el) // animate in once, then stop watching
                }
            },
            {
                threshold: 0.15,
                rootMargin: '0px 0px -80px 0px',
                ...options,
            }
        )

        observer.observe(el)

        return () => observer.disconnect()
    }, [])

    return [ref, isVisible]
}

export default useScrollReveal
