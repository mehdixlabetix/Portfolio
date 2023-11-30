import {motion, useScroll, useSpring} from 'framer-motion'
import {useEffect, useRef} from 'react'

const Scroll = () => {
    let translation = useRef(null)
    let prevScrollY = 0
    let scrolling = 65.5
    const handleScroll = () => {
        const scrollY = window.scrollY
        scrolling = scrollY - prevScrollY <= 0 ? 65.5 : 0

        translation.current.style.top = scrolling + 'px'
        prevScrollY = scrollY
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [translation])

    const {scrollYProgress} = useScroll()
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 400,
        damping: 20,
        restDelta: 0.001,
    })

    return (
        <motion.div
            ref={translation}
            className="progress-bar"
            style={{
                scaleX,
                position: 'fixed',
                left: '0',
                right: '0',
                height: '10px',
                background: 'lightgrey',
                transformOrigin: '0%',
                zIndex: '3',
            }}
        />
    )
}

export default Scroll
