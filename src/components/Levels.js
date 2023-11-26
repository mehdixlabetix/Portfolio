import React from 'react'
import FullScreenSection from './FullScreenSection'
import {
    Box,
    Progress,
    Heading,
    Text,
    HStack,
    Image,
    VStack,
    ProgressLabel,
    Card,
    CardBody,
} from '@chakra-ui/react'
import { useInView } from 'framer-motion'

const skills = [
    {
        title: 'React ',
        progress: 85,
        getImageSrc: () => require('../images/React.png'),
    },
    {
        title: 'Django ',
        progress: 40,
        getImageSrc: () => require('../images/django.png'),
    },
    {
        title: 'Angular ',
        progress: 80,
        getImageSrc: () => require('../images/angular.png'),
    },
    {
        title: 'NestJS ',
        progress: 80,
        getImageSrc: () => require('../images/nestjs.png'),
    },
    {
        title: 'ROS ',
        progress: 80,
        getImageSrc: () => require('../images/ros.png'),
    },
    {
        title: 'C++ ',
        progress: 90,
        getImageSrc: () => require('../images/C.png'),
    },
    {
        title: 'Python ',
        progress: 95,
        getImageSrc: () => require('../images/python.png'),
    },
    {
        title: 'Java',
        progress: 60,
        getImageSrc: () => require('../images/java.png'),
    },
    {
        title: 'Machine Learning',
        progress: 70,
        getImageSrc: () => require('../images/ML.png'),
    },
    {
        title: 'Deep Learning',
        progress: 70,
        getImageSrc: () => require('../images/DL.png'),
    },
]

const Levels = () => {
    const ref = React.useRef(null)
    const isInView = useInView(ref, { once: true })
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
                            paddingLeft="18%"
                        >
                            <HStack spacing={20} alignItems="self-end">
                                <Image
                                    id="logos"
                                    objectPosition="center"
                                    objectFit="contain"
                                    boxSize="80px"
                                    src={skill.getImageSrc()}
                                    alt={skill.title}
                                />
                                <Text
                                    align="center"
                                    fontFamily="Bebas Neue"
                                    id="skills-title"
                                    fontSize="4xl"
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
        <FullScreenSection p={8} id="skills-gen" spacing={50}>
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
            >
                <CardBody>
                    <Heading
                        fontFamily="Libre Baskerville"
                        id="skills-head"
                        as="h1"
                        size="3xl"
                        paddingTop="20px"
                    >
                        Skills
                    </Heading>

                    <Box
                        id="skills-container"
                        display="grid"
                        gridTemplateColumns="repeat(2,500px)"
                        gridGap={6}
                        alignItems="flex-end"
                        paddingBottom="20px"
                        paddingTop="40px"
                    >
                        {skillsList.map((skill) => skill)}
                    </Box>
                </CardBody>
            </Card>
        </FullScreenSection>
    )
}

export default Levels
