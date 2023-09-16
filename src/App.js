import {AbsoluteCenter, Box, ChakraProvider, Divider} from '@chakra-ui/react'
import Header from './components/Header'
import LandingSection from './components/LandingSection'
import { AlertProvider } from './context/alertContext'
import Alert from './components/Alert'
import Scroll from "./components/Scroll";
import {lazy, Suspense, useState, useEffect, useRef} from "react";
import theme from "./components/Theme";
import GLOBE from "vanta/src/vanta.globe";
import WhoAmI from "./components/WhoAmI";
import PacmanLoader from "react-spinners/PacmanLoader";
import { motion, AnimatePresence } from "framer-motion"
import Lottie from "lottie-react";
import code from "./anim/code.json"

const LazySkills= lazy(() => import('./components/Levels'));
const LazyProjects= lazy(() => import('./components/ProjectsSection'));
const LazyContactMe= lazy(() => import('./components/ContactMeSection'));
const LazyFooter= lazy(() => import('./components/Footer'));
function App() {
    const [loading,setLoading]=useState(false);
    const [done,setDone]=useState(false);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setDone(true);
        }, 2700);
    }, []);
  useEffect(() => {
   setTimeout(()=> {GLOBE({
      el: "#vanta",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      zIndex: 0,
      scale: 0.70,
      scaleMobile: 1.00,
      backgroundColor: 0x2b2b2c,

    })},2750)
  }, []);
const ref=useRef()
  return (
      <AnimatePresence mode="wait">
          {loading ? (
              <AnimatePresence mode="wait"><>
               <center>   <Lottie id="bear" animationData={code} loop={true}  style={{width:"45%",height:"15%"}}/></center>

              <motion.div
              className="slide-out"
              initial={{scaleY:1}}
          animate={{scaleY:0}}
          exit={{scaleY:0}}
          transition={{duration:1,ease:[0.22,1,0.36,1]}}/>
              </></AnimatePresence>

             ):(
                  <ChakraProvider  theme={theme}>
              <AlertProvider>
             <><main
                 id="main"
                      >
            <Header/>
            {window.innerWidth>745 && <Scroll />}
            <div id="vanta">
            <LandingSection />
           <WhoAmI/>
            </div>
              <Box  height="30px" >
              <Divider orientation="horizontal"/>
              </Box>
            <Suspense fallback={<div> still Loading</div>}>
              <section>
                <LazySkills />
                <LazyProjects />
              </section>
            </Suspense>

            <Suspense fallback={<div>hummm</div>}>

                <LazyContactMe />
            </Suspense>
            <Suspense fallback={<div>omg</div>}>
              <LazyFooter />
            </Suspense>
            <Alert />
             </main>

                 <motion.div
                     className="slide-out"
                     initial={{scaleY:1}}
                     animate={{scaleY:0}}
                     exit={{scaleY:0}}
                     transition={{duration:0.8,ease:[0.8,0.2,0.2,1]}}/>
             </>
              </AlertProvider>
                  </ChakraProvider>
              )}

      </AnimatePresence>)
}

export default App
