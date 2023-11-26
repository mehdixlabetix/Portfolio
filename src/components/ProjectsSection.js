import React from 'react'
import FullScreenSection from './FullScreenSection'
import {
    Box,
    Heading,
    HStack,
    Stepper,
    useSteps,
    VStack,
} from '@chakra-ui/react'
import Carte from './Card'
import { useInView } from 'framer-motion'
import Example from './Stepper'

const projects = [
    {
        id: 0,
        title: 'CO2 Emissions in Rwanda\n',
        description:
            'Predicting CO2 emissions in Rwanda using machine learning. The notebook imports a dataset of historical CO2 emissions data and uses a variety of machine learning models to predict future emissions.',
        getImageSrc: () => require('../images/CO2.jpg'),
        link: 'https://github.com/mehdixlabetix/CO2EmissionRawanda',
    },
    {
        id: 1,
        title: 'Aerobotix Form',
        description:
            'This is a web form built using React and connected to Firebase, designed for the Aerobotix Robotics Club. The form allows users to submit their information for membership or any other relevant purposes.',
        getImageSrc: () => require('../images/img.png'),
        link: 'https://github.com/mehdixlabetix/Aerobotix',
    },
    {
        id: 2,
        title: 'Tunisian Water Level Prediction',
        description:
            'A Time Series model that predicts the level of water in multiple dams around the Tunisian country using old data. The model is built using XGBoost.',
        getImageSrc: () => require('../images/dam2.jpg'),
        link: 'https://github.com/mehdixlabetix/Weather-Time-Series',
    },
    {
        id: 3,
        title: 'Smart Traffic Light',
        description:
            'A Traffic Signal Optimization System is a project aimed at tackling the issue of time waste in traffic by implementing an intelligent system that optimizes traffic signal timings.',
        getImageSrc: () => require('../images/nrw.png'),
        link: 'https://github.com/mehdixlabetix/NRW-Smart-Traffic-Light',
    },
]

const ProjectsSection = () => {
    const projectsList = React.useMemo(
        () =>
            projects.map((project) => (
                <Carte
                    key={project.title}
                    title={project.title}
                    description={project.description}
                    imageSrc={project.getImageSrc()}
                    link={project.link}
                    id={project.id}
                />
            )),
        [projects]
    )
    return (
        <FullScreenSection p={8} alignItems="flex-start" spacing={8}>
            <VStack id="projects-section" spacing={8}>
                <Heading as="h1" id="projects-section-head">
                    Featured Projects
                </Heading>
                <Box
                    id="projects-container"
                    display="grid"
                    gridTemplateColumns="repeat(1,minmax(0,0.8fr))"
                    gridGap={30}
                >
                    <HStack gap={128}>
                        <Example />
                        <VStack gap={20}>
                            {projectsList.map((project) => project)}
                        </VStack>
                    </HStack>
                </Box>
            </VStack>
        </FullScreenSection>
    )
}

export default ProjectsSection
