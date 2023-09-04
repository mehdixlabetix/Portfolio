import {AbsoluteCenter, Box, ChakraProvider, Divider} from '@chakra-ui/react'
import Header from './components/Header'
import LandingSection from './components/LandingSection'
import { AlertProvider } from './context/alertContext'
import Alert from './components/Alert'
import Scroll from "./components/Scroll";
import {lazy, Suspense, useEffect} from "react";
import theme from "./components/Theme";
import GLOBE from "vanta/src/vanta.globe";
import WhoAmI from "./components/WhoAmI";

const LazyMe = lazy(() => import('./components/WhoAmI'));
const LazySkills= lazy(() => import('./components/Levels'));
const LazyProjects= lazy(() => import('./components/ProjectsSection'));
const LazyContactMe= lazy(() => import('./components/ContactMeSection'));
const LazyFooter= lazy(() => import('./components/Footer'));

function App() {
  useEffect(() => {
    GLOBE({
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

    })
  }, []);

  return (
      <ChakraProvider theme={theme}>
        <AlertProvider>
          <main
              id="main"
          >
            <Header  />
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
        </AlertProvider>
      </ChakraProvider>
  )
}

export default App
