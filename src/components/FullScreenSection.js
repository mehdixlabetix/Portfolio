import * as React from 'react'
import { VStack } from '@chakra-ui/react'
import { useEffect } from 'react'
import CLOUDS from 'vanta/src/vanta.clouds'

const FullScreenSection = ({ children, isDarkBackground, ...boxProps }) => {
    return (
        <VStack
            backgroundColor={boxProps.backgroundColor}
            color={isDarkBackground ? 'white' : 'black'}
        >
            <VStack maxWidth="1280px" minHeight="100vh" {...boxProps}>
                {children}
            </VStack>
        </VStack>
    )
}

export default FullScreenSection
