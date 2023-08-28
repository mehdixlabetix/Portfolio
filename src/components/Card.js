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
        <Card  borderRadius="10px">
            <CardHeader>
                <Image src={imageSrc} borderRadius="md" />
            </CardHeader>

            <CardBody>
                <Stack mt="6" spacing="3">
                    <Heading size="md">{title}</Heading>
                    <Text>{description}</Text>
                </Stack>
            </CardBody>
            <CardFooter>

                    <a href={link}>
                        <HStack justifyContent="flex-end">
                        <Text as="b">See more</Text>
                        <FontAwesomeIcon
                                         icon={faArrowRight} size="1x"/>
                        </HStack></a>
            </CardFooter>
        </Card>
    )
}

export default Carte
