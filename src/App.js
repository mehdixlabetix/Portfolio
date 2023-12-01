import {ChakraProvider} from '@chakra-ui/react'
import Header from './components/Header'
import LandingSection from './components/LandingSection'
import {AlertProvider} from './context/alertContext'
import Alert from './components/Alert'
import Scroll from './components/Scroll'
import {lazy, Suspense, useEffect} from 'react'
import theme from './components/Theme'
import GLOBE from 'vanta/src/vanta.globe'
import NET from 'vanta/src/vanta.net'
import WhoAmI from './components/WhoAmI'
import {motion} from 'framer-motion'


const LazySkills = lazy(() => import('./components/Levels'))
const LazyProjects = lazy(() => import('./components/ProjectsSection'))
const LazyContactMe = lazy(() => import('./components/ContactMeSection'))
const LazyFooter = lazy(() => import('./components/Footer'))

function App() {
    useEffect(() => {

        GLOBE({
            el: '#vanta',
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            zIndex: 0,
            scale: 0.7,
            scaleMobile: 1.0,
            backgroundColor: 0x2b2b2c,
        })

    }, [])
    useEffect(() => {
        setTimeout(() => {
            NET({
                el: "#vanta2",
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 1.00,
                scaleMobile: 1.00,
                maxDistance: 16.00,
                backgroundColor: 0x2b2b2c,
            })
        }, 1500)
    }, [])
    return (
        <ChakraProvider theme={theme}>
            <AlertProvider>
                <>
                    <main id="main">
                        <Header/>
                        {window.innerWidth > 745 && <Scroll/>}
                        <div id="vanta">
                            <LandingSection/>
                            <WhoAmI/>
                        </div>

                        <div id="vanta2">
                            <Suspense fallback={<div> still Loading</div>}>

                                <section>
                                    <LazySkills/>
                                    <LazyProjects/>
                                </section>

                            </Suspense>

                            <Suspense fallback={<div>hummm</div>}>
                                <LazyContactMe/>
                            </Suspense>
                        </div>
                        <Suspense fallback={<div>omg</div>}>
                            <LazyFooter/>
                        </Suspense>
                        <Alert/>
                    </main>

                    <motion.div
                        className="slide-out"
                        initial={{scaleY: 1}}
                        animate={{scaleY: 0}}
                        exit={{scaleY: 0}}
                        transition={{
                            duration: 0.8,
                            ease: [0.8, 0.2, 0.2, 1],
                        }}
                    />
                </>
            </AlertProvider>
        </ChakraProvider>
    )
}

export default App
