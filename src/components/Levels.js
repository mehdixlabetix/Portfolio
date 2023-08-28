import React from 'react'
import FullScreenSection from './FullScreenSection'
import {
    Box,
    Progress,
    Heading,
    Text,
    HStack,
    VStack,
    ProgressLabel,
    Card,
    CardBody,
} from '@chakra-ui/react'

const skills = [
    {
        title: 'React ',
        progress: 80,
    },
    {
        title: 'NestJS ',
        progress: 60,
    },
    {
        title: 'ROS ',
        progress: 80,
    },
    {
        title: 'C++ ',
        progress: 90,
    },
    {
        title: 'Python ',
        progress: 95,
    },
    {
        title: 'Java',
        progress: 60,
    },
    {
        title: 'Machine Learning',
        progress: 70,
    },
    {
        title: 'Deep Learning',
        progress: 60,
    },
]

const Levels = () => {
    return (
        <FullScreenSection p={8} id="skills-gen" spacing={50}>
            <Card id="skills" borderRadius="40px">
                <CardBody>
                    <Heading id="skills-head" as="h1" size="3xl">
                        Skills
                    </Heading>

                    <Box
                        id="skills-container"
                        display="grid"
                        gridtemplateRows="repeat(4, 200px)"
                        gridTemplateColumns="repeat(2,500px)"
                        gridGap={8}
                        paddingBottom="50px"
                        paddingTop="30px"
                    >
                        {skills
                            .sort(function (a, b) {
                                return b.progress - a.progress
                            })
                            .map((skill) => {
                                return (
                                    <VStack
                                        justifyContent="space-between"
                                        alignItems="center"
                                        spacing={5}
                                    >
                                        <Text as="b" id="skills-title" fontSize="3xl">
                                            {skill.title}
                                        </Text>

                                        <Progress
                                            id="skills-progress"
                                            borderRadius="10px"
                                            value={skill.progress}
                                            height="7"
                                            min="0"
                                            max="100"
                                            colorScheme="cyan"
                                            width="490px"
                                        >
                                            <ProgressLabel
                                                id="skills-progress-label"
                                                fontSize="2xl"
                                                color="black"
                                            >
                                                {skill.progress + '%'}
                                            </ProgressLabel>
                                        </Progress>
                                    </VStack>
                                )
                            })}
                    </Box>
                </CardBody>
            </Card>
        </FullScreenSection>
    )
}

export default Levels
