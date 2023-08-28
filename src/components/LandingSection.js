import React from 'react'
import { Image, Heading, VStack } from '@chakra-ui/react'
import FullScreenSection from './FullScreenSection'
import useText from '../hooks/useText'

const greeting = 'Hello, I am Mehdi!'
const bio1 = 'An AI enthusiast and a full-stack developer'
const bio2 = 'specialised in React and NestJS'
const avatarsrc = 'images/mehdi.jpg'

const LandingSection = () => {
    return (
        <FullScreenSection justifyContent="center" alignItems="center">
            <VStack spcaing={10}>
                <Image
                    borderRadius="full"
                    boxSize="350px"
                    src={avatarsrc}
                    alt="Mehdi Cherif"
                />
                <Heading marginTop="25px" style={{ fontFamily: 'Cinzel' ,whiteSpace: 'pre-wrap' }} size="xl" >
                    <center>

                        {useText(greeting + '\n' + bio1 + '\n' + bio2)}
                    </center>
                </Heading>
                );
            </VStack>
        </FullScreenSection>
    )
}

export default LandingSection
