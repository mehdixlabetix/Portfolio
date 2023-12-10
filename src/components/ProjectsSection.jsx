import React from 'react'
import FullScreenSection from './FullScreenSection'
import {Box, Heading, HStack, VStack,} from '@chakra-ui/react'
import Carte from './Card'
import Example from './Stepper'
import CO2Image from '../images/CO2.jpg'
import DamImage from '../images/dam2.jpg'
import SocialImage from '../images/Social-Media-App.jpeg'
import TrafficImage from '../images/nrw.png'
import AerobotixImage from '../images/img.png'

const projects = [
    {
        id: 0,
        title: 'CO2 Emissions in Rwanda\n',
        description:
            'Predicting CO2 emissions in Rwanda using machine learning. The notebook imports a dataset of historical CO2 emissions data and uses a variety of machine learning models to predict future emissions.',
        imageSrc:  CO2Image,
        link: 'https://github.com/mehdixlabetix/CO2EmissionRawanda',
    },
    {
        id: 1,
        title: 'Aerobotix Form',
        description:
            'This is a web form built using React and connected to Firebase, designed for the Aerobotix Robotics Club. The form allows users to submit their information for membership or any other relevant purposes.',
        imageSrc:  AerobotixImage,
        link: 'https://github.com/mehdixlabetix/Aerobotix',
    },
    {
        id: 2,
        title: 'Tunisian Water Level Prediction',
        description:
            'A Time Series model that predicts the level of water in multiple dams around the Tunisian country using old data. The model is built using XGBoost.',
        imageSrc:  DamImage,
        link: 'https://github.com/mehdixlabetix/Weather-Time-Series',
    },
    {
        id: 3,
        title: 'Smart Traffic Light',
        description:
            'A Traffic Signal Optimization System is a project aimed at tackling the issue of time waste in traffic by implementing an intelligent system that optimizes traffic signal timings.',
        imageSrc: TrafficImage,
        link: 'https://github.com/mehdixlabetix/NRW-Smart-Traffic-Light',
    }, {
        id: 4,
        title: 'Social Media App',
        description:
            'A Django Framework implementation of all the core features of a social media app. You can use it as a starting point for your own social media app, or you can add your own features and customizations.',
        imageSrc: SocialImage,
        link: 'https://github.com/mehdixlabetix/Social-Media-App',
    },
]

const ProjectsSection = () => {
    const projectsList = React.useMemo(
        () =>
            projects.map((project) => (
                <Carte
                    key={project.id}
                    title={project.title}
                    description={project.description}
                    imageSrc={project.imageSrc}
                    link={project.link}
                />
            )),
        []
    )
    return (
        <FullScreenSection p={8} alignItems="flex-start" spacing={8}>
            <VStack id="projects-section" spacing={20}>
                <Heading as="h1" id="projects-section-head">
                    Featured Projects
                </Heading>
                <Box p={2}
                     id="projects-container"
                     display="grid"
                     gridTemplateColumns="repeat(1,minmax(0,0.8fr))"
                     gridGap={30}
                >
                    <HStack gap={128}>
                        <Example/>
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
