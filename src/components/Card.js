import { Heading, HStack, Image, Text, VStack } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Stack } from '@chakra-ui/react'
import {useInView} from "framer-motion";
let n=0;
const Carte = ({ id,title, description, imageSrc,link}) => {
    n=n+1;
    const ref = React.useRef(null);
    const isInView = useInView(ref,{once:true});

    return (

        <Card id="project" borderRadius="10px" height="600px"
              ref={ref}
              style={{
                  transform: ( window.innerWidth>780) ?((id%2)? ( isInView  ? "none" : "translateX(200px)"): ( isInView ? "none" : "translateX(-200px)")):"none",

                  opacity: isInView ? 1 : 0,
                  transition: "all 1s ease-in-out 0.7s"}}>
            <CardHeader id="project-header" >
                <Image id="project-image" alt={title} width="600px" height="290" src={imageSrc} borderRadius="10px 10px 0px 0px" />
            </CardHeader>

            <CardBody id="project-body" >
                <Stack mt="6" spacing="3" >
                    <Heading id="project-title" size="md">{title}</Heading>
                    <Text>{description}</Text>
                </Stack>
            </CardBody>
            <CardFooter >

                    <a href={link} >
                        <HStack justifyContent="center">
                        <Text id="project-footer-text" fontSize="lg" as="b">Learn more
                        </Text>
                        <FontAwesomeIcon
                                         icon={faArrowRight} size="1x"/>
                        </HStack></a>
            </CardFooter>
        </Card>

    )
}

export default Carte
