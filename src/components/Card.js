import { Heading, HStack, Image, Text, VStack } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Stack } from '@chakra-ui/react'

const Carte = ({ title, description, imageSrc,link}) => {
    // Implement the UI for the Card component according to the instructions.
    // You should be able to implement the component with the elements imported above.
    // Feel free to import other UI components from Chakra UI if you wish to.
    return (
        <Card id="project" borderRadius="10px" height="600px">
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
                        <Text id="project-footer-text" fontSize="lg" as="b">learn more
                        </Text>
                        <FontAwesomeIcon
                                         icon={faArrowRight} size="1x"/>
                        </HStack></a>
            </CardFooter>
        </Card>

    )
}

export default Carte
