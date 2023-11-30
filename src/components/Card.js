import {Card, CardBody, CardFooter, Center, Heading, HStack, Image, Stack, Text} from '@chakra-ui/react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import {useInView} from 'framer-motion'

const Carte = ({id, title, description, imageSrc, link}) => {
    const ref = React.useRef(null)
    const isInView = useInView(ref, {once: true})
    return (
        <Card
            id="project"
            borderRadius="10px"
            height="170px"
            ref={ref}
            direction={{base: 'column', sm: 'row'}}
            overflow="hidden"
            style={{
                transform:
                    window.outerWidth > 780
                        ? isInView
                            ? 'none'
                            : 'translateX(100px)'
                        : 'none',
                opacity: isInView ? 1 : 0,
                transition: 'all 1s ease-in-out 0.7s',
            }}
        >
            <Image
                id="project-image"
                alt={title}
                width="340px"
                objectFit="fill"
                maxW={{base: '100%', sm: '400px'}}
                src={imageSrc}
                borderRadius="10px 0px 0px 10px"
            />

            <CardBody id="project-body">
                <Stack mt="6" spacing="3">
                    <Center>
                        <Heading id="project-title" size="md">
                            {title}
                        </Heading>
                    </Center>
                    <Center>
                        <Text fontSize={14}>{description}</Text>
                    </Center>
                </Stack>
            </CardBody>
            <CardFooter id="project-footer">
                <a href={link}>
                    <HStack justifyContent="center">
                        <Text id="project-footer-text" fontSize="lg" as="b">
                            Learn more
                        </Text>
                        <FontAwesomeIcon icon={faArrowRight} size="1x"/>
                    </HStack>
                </a>
            </CardFooter>
        </Card>
    )
}

export default Carte
