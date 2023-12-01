import {Card, CardBody, CardFooter, Center, Heading, HStack, Image, Stack, Text} from '@chakra-ui/react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'
import React, {useState} from 'react'
import {useInView} from 'framer-motion'

const Carte = ({title, description, imageSrc, link}) => {
    const ref = React.useRef(null)
    const isInView = useInView(ref, {once: true})
    const [mouseCoordinates, setMouseCoordinates] = useState({x: 0, y: 0});
    const [cardCenter, setCardCenter] = useState({x: 0, y: 0}); // Initialize cardCenter

    const calculateRotationAngle = () => {

        const deltaX = mouseCoordinates.x - cardCenter.x
        const deltaY = mouseCoordinates.y - cardCenter.y
        /*const angle = Math.atan2(deltaY/100, deltaX/100)*/
        console.log("x:" + deltaX / 600 + " y:" + deltaY / 60)
        return ({x: -deltaX / 60, y: deltaY / 5})
    }
    const mouse = (event) => {
        setMouseCoordinates({
            x: event.clientX,
            y: event.clientY
        });
        if (ref.current) {
            const cardPosition = ref.current.getBoundingClientRect()
            const newCardCenter = {
                x: cardPosition.left + cardPosition.width / 2,
                y: cardPosition.top + cardPosition.height / 2
            }
            setCardCenter(newCardCenter);
        }

    }
    const reset = () => {
        setMouseCoordinates({x: cardCenter.x, y: cardCenter.y});
    };
    return (<div
        style={{
            transition: 'all 0.5s cubic-bezier(0.03, 0.9, 0.5, 0.8) 0s',
            transform: `perspective(1000px) rotateX(${calculateRotationAngle().y}deg) rotateY(${calculateRotationAngle().x}deg) scale3d(1,1,1)`,
        }}>
        <Card
            onMouseMove={mouse}
            onMouseLeave={reset}
            id="project"
            borderRadius="10px"
            height="170px"
            ref={ref}
            direction={{base: 'column', sm: 'row'}}
            overflow="hidden"
            style={{
                transform:
                    (window.outerWidth > 780
                        ? (isInView
                            ? 'none'
                            : 'translateX(100px)')
                        : 'none'),

                opacity: isInView ? 1 : 0,
                transition: 'all 1s ease-in-out 0.7s',
            }}
        >
            <Image
                onMouseMove={mouse}
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
    </div>)
}

export default Carte
