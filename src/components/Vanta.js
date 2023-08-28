import React, { useState, useEffect, useRef } from 'react'
import CLOUDS from 'vanta/dist/vanta.birds.min'
// Make sure window.THREE is defined, e.g. by including three.min.js in the document head using a <script> tag
useEffect(() => {
    const script1 = document.createElement('script')
    const script2 = document.createElement('script')
    script1.src = 'three.r134.min.js'
    script1.async = true
    script2.src = 'vanta.clouds.min.js'
    script2.async = true
    document.body.appendChild(script1)
    document.body.appendChild(script2)

    return () => {
        document.body.removeChild(script1)
        document.body.removeChild(script2)
    }
}, [])
const Vanta = (children) => {
    const [vantaEffect, setVantaEffect] = useState(null)
    const myRef = useRef(null)
    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(
                CLOUDS({
                    el: myRef.current,
                })
            )
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy()
        }
    }, [vantaEffect])
    return <div ref={myRef}>{children}</div>
}
export default Vanta
