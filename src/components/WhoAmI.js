import React, {useRef} from 'react'
import {Heading, VStack, Text, HStack} from '@chakra-ui/react'
import FullScreenSection from './FullScreenSection'
import {useInView} from "framer-motion";

const WhoAmI = () => {
   const ref=useRef(null)
    const isInView = useInView(ref,{once:true});
    return (
        <FullScreenSection justifyContent="center" alignItems="center">
            <VStack id="whoami" ref={ref} style={{
                transform: isInView && window.innerWidth>740 ? "none" : "translateX(-200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 1.5s ease-in-out 0.85s" }}  >

                <Heading
                    size="3xl"
                    id="whoami-heading"
                    paddingBottom="50px"
                    style={{ whiteSpace: 'pre' }}
                >
                    <center> Who am I really ?</center>
                </Heading>
                <Text   id="whoami-text" style={{ fontFamily: 'Comfortaa'}} fontSize="2xl" paddingBottom="20px" paddingLeft="5px">
                    {' '}
                      I'm a student studying software engineering at INSAT. I have
                    a passion, for both AI and full stack development. I find
                    joy in working on the front and back end aspects of software
                    development all while continuously learning and embracing
                    the excitement that comes with it. It all revolves around
                    being a student, an AI enthusiast, a full stack developer
                    and someone who values the journey of learning and finding
                    enjoyment throughout the process.I also have an experience
                    in the field of embedded systems and robotics as i have worked
                    on participating in the international competition of Eurobot.
                </Text>
                <HStack spacing={5}>

                    <Text  id="whoami-emojis" fontSize="5xl" >&#x1F4BB;</Text>
                    <Text  id="whoami-emojis" fontSize="5xl" >&#x1F916;</Text>
                    <Text  id="whoami-emojis" fontSize="5xl" >&#x1F603;</Text>
                    <Text  id="whoami-emojis" fontSize="5xl" >&#x2B50;</Text>
                    <Text  id="whoami-emojis" fontSize="5xl" >&#x1F30C;</Text>
                    <Text  id="whoami-emojis" fontSize="5xl" >&#x1F525;</Text>

                </HStack>
            </VStack>
        </FullScreenSection>
    )
}

export default WhoAmI
