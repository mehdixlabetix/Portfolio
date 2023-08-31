import { ChakraProvider } from '@chakra-ui/react'
import Header from './components/Header'
import LandingSection from './components/LandingSection'
import { AlertProvider } from './context/alertContext'
import Alert from './components/Alert'
import Scroll from "./components/Scroll";
import {lazy,Suspense} from "react";
const LazyMe = lazy(() => import('./components/WhoAmI'));
const LazySkills= lazy(() => import('./components/Levels'));
const LazyProjects= lazy(() => import('./components/ProjectsSection'));
const LazyContactMe= lazy(() => import('./components/ContactMeSection'));
const LazyFooter= lazy(() => import('./components/Footer'));

function App() {

  return (
      <ChakraProvider>
        <AlertProvider>
          <main
              style={{
                backgroundImage:
                    'linear-gradient(#f4985a, #f1515e)',
              }}
              id="main"
          >
            <Header  />
            {window.innerWidth>745 && <Scroll />}
            <LandingSection />
            <Suspense fallback={<div>Loading...</div>}>
              <LazyMe />
            </Suspense>
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
