import React, { useEffect } from 'react'
import { Image, Heading, Text, VStack } from '@chakra-ui/react'
import FullScreenSection from './FullScreenSection'
import TextTyper from './TextTyper'
import GLOBE from 'vanta/src/vanta.globe'

const bio1 = 'An AI enthusiast and a full-stack developer'
const bio2 = 'specialised in React and NestJS'
const avatarsrc = 'images/mehdi.jpg'
const LandingSection = () => {
    return (
        <FullScreenSection justifyContent="center" alignItems="center">
            <VStack spcaing={10}>
                <Text id="egg">you found the easter egg &#x1F389;</Text>
                <Image
                    fetchpriority="high"
                    id="avatar"
                    borderRadius="full"
                    boxSize="250px"
                    src={avatarsrc}
                    alt="Mehdi Cherif"
                />
                <Heading
                    id="landing-text"
                    marginTop="45px"
                    style={{ fontFamily: 'Laila', whiteSpace: 'pre-wrap' }}
                    size="xl"
                >
                    <center>
                        <h2>Hello, I am <span style={{color:'rgba(250, 47, 142, 1)',fontWeight:'bold'}}>Mehdi !</span> </h2>
                        <TextTyper
                            text={  bio1 + '\n' + bio2}
                            interval={100}
                            Markup="span"
                        />
                    </center>
                </Heading>
                );
            </VStack>
        </FullScreenSection>
    )
}

export default LandingSection
