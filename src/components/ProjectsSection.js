import React from 'react'
import FullScreenSection from './FullScreenSection'
import { Box, Heading } from '@chakra-ui/react'
import Carte from './Card'

const projects = [
    {
        title: 'Predicting CO2 Emissions in Rwanda\n',
        description:
            'A Jupyter notebook that predicts CO2 emissions in Rwanda using machine learning. The notebook imports a dataset of historical CO2 emissions data and uses a variety of machine learning models to predict future emissions. The best model is then selected and used to generate predictions for the next year.',
        getImageSrc: () => require('../images/CO2.jpg'),
        link: "https://github.com/mehdixlabetix/CO2EmissionRawanda"
    },
    {
        title: 'Aerobotix Form',
        description:
            'This is a web form built using React and connected to Firebase, designed for the Aerobotix Robotics Club. The form allows users to submit their information for membership or any other relevant purposes.',
        getImageSrc: () => require('../images/aerobotix.jpg'),
        link: "https://github.com/mehdixlabetix/Aerobotix"
    },
    {
        title: 'Tunisian Water Level Prediction',
        description:
            'A Time Series model that predicts the level of water in multiple dams around the Tunisian country',
        getImageSrc: () => require('../images/dam.jpg'),
        link: "https://github.com/mehdixlabetix/Weather-Time-Series"
    },
    {
        title: 'Smart Traffic Light',
        description:
            'A Traffic Signal Optimization System is a project aimed at tackling the issue of time waste in traffic by implementing an intelligent system that optimizes traffic signal timings.',
        getImageSrc: () => require('../images/nrw.jpg'),
        link:"https://github.com/mehdixlabetix/NRW-Smart-Traffic-Light",
    },
]

const ProjectsSection = () => {
    return (
        <FullScreenSection p={8} alignItems="flex-start" spacing={8}>
            <Heading
                style={{ marginLeft: '40%' }}
                as="h1"
                id="projects-section"
            >
                Featured Projects
            </Heading>
            <Box
                display="grid"
                gridTemplateColumns="repeat(2,minmax(0,1fr))"
                gridGap={20}
            >
                {projects.map((project) => (
                    <Carte
                        key={project.title}
                        title={project.title}
                        description={project.description}
                        imageSrc={project.getImageSrc()}
                        link={project.link}
                    />
                ))}
            </Box>
        </FullScreenSection>
    )
}

export default ProjectsSection
