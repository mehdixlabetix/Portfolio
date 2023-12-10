import React from 'react'
import FullScreenSection from './FullScreenSection'
import {Box, Card, CardBody, Heading, HStack, Image, Text, VStack,} from '@chakra-ui/react'
import {useInView} from 'framer-motion'
import reactImage from '../images/React.png'
import djangoImage from '../images/django.png'
import angularImage from '../images/angular.png'
import nestjsImage from '../images/nestjs.png'
import rosImage from '../images/ros.png'
import cImage from '../images/C.png'
import pythonImage from '../images/python.png'
import javaImage from '../images/java.png'
import MLImage from '../images/ML.png'
import DLImage from '../images/DL.png'

const skills = [
    {
        title: 'React ',
        progress: 85,
        getImageSrc: () => reactImage,
    },
    {
        title: 'Django ',
        progress: 40,
        getImageSrc: () => djangoImage,
    },
    {
        title: 'Angular ',
        progress: 80,
        getImageSrc: () => angularImage,
    },
    {
        title: 'NestJS ',
        progress: 80,
        getImageSrc: () => nestjsImage,
    },
    {
        title: 'ROS ',
        progress: 80,
        getImageSrc: () => rosImage,
    },
    {
        title: 'C++ ',
        progress: 90,
        getImageSrc: () => cImage,
    },
    {
        title: 'Python ',
        progress: 95,
        getImageSrc: () => pythonImage,
    },
    {
        title: 'Java',
        progress: 60,
        getImageSrc: () => javaImage,
    },
    {
        title: 'Machine Learning',
        progress: 70,
        getImageSrc: () => MLImage,
    },
    {
        title: 'Deep Learning',
        progress: 70,
        getImageSrc: () => DLImage,
    },
]

const Levels = () => {
    const ref = React.useRef(null)
    const isInView = useInView(ref, {once: true})
    const skillsList = React.useMemo(
        () =>
            skills
                .sort(function (a, b) {
                    return b.progress - a.progress
                })
                .map((skill) => {
                    return (
                        <VStack
                            alignItems="left"
                            spacing={1}
                            key={skill.title}
                            paddingLeft="15%"
                            id="logoVstack"
                        >
                            <HStack id="logoHstack" spacing={10} alignItems="self-end">
                                <Image
                                    id="logos"
                                    objectPosition="center"
                                    objectFit="contain"
                                    boxSize="50px"
                                    src={skill.getImageSrc()}
                                    alt={skill.title}
                                />
                                <Text
                                    align="center"
                                    fontFamily="Bebas Neue"
                                    id="skills-title"
                                    fontSize="2xl"
                                >
                                    {skill.title}
                                </Text>
                            </HStack>
                        </VStack>
                    )
                }),
        [skills]
    )
    return (
        <FullScreenSection  id="skills-gen">
            <Card
                ref={ref}
                style={{
                    transform:
                        isInView && window.innerWidth > 740
                            ? 'none'
                            : 'translateX(200px)',
                    opacity: isInView ? 1 : 0,
                    transition: 'all 1s ease-in-out 0.85s',
                }}
                id="skills"
                borderRadius="40px"
                width="90%"
                marginTop="10%"
            >
                <CardBody>
                    <Heading
                        fontFamily="Libre Baskerville"
                        id="skills-head"
                        as="h1"
                        size="xl"
                        paddingTop="20px"
                    >
                        Skills
                    </Heading>

                    <Box
                        id="skills-container"
                        display="grid"
                        gridTemplateColumns="repeat(2,400px)"
                        gridGap={5}
                        alignItems="flex-end"
                        paddingBottom="20px"
                        paddingTop="30px"
                    >
                        {skillsList.map((skill) => skill)}
                    </Box>
                </CardBody>
            </Card>
        </FullScreenSection>
    )
}

export default Levels
