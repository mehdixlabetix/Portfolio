import { ChakraProvider } from '@chakra-ui/react'
import Header from './components/Header'
import LandingSection from './components/LandingSection'
import ProjectsSection from './components/ProjectsSection'
import ContactMeSection from './components/ContactMeSection'
import Footer from './components/Footer'
import { AlertProvider } from './context/alertContext'
import Alert from './components/Alert'
import CLOUDS from 'vanta/src/vanta.clouds'
import React, { useEffect } from 'react'
import Levels from './components/Levels'
import WhoAmI from './components/WhoAmI'
import Scroll from "./components/Scroll";
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
                    <LandingSection />
                    <WhoAmI />
                    <Levels />
                    <ProjectsSection />
                    <ContactMeSection />
                    <Scroll />
                    <Footer />
                    <Alert />
                </main>
            </AlertProvider>
        </ChakraProvider>
    )
}

export default App
