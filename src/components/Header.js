import React, { useEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faEnvelope,
    faSchoolCircleXmark,
} from '@fortawesome/free-solid-svg-icons'
import {
    faGithub,
    faLinkedin,
    faMedium,
    faStackOverflow,
} from '@fortawesome/free-brands-svg-icons'
import { Box, HStack } from '@chakra-ui/react'

const socials = [
    {
        icon: faEnvelope,
        url: 'mailto:mehdi.cherif@insat.ucar.tn',
    },
    {
        icon: faGithub,
        url: 'https://github.com/mehdixlabetix',
    },
    {
        icon: faLinkedin,
        url: 'https://www.linkedin.com/in/mehdi-cherif-31b1ba204/',
    },
]

const Header = () => {
    let translation = useRef(null)
    let prevScrollY = 0
    const handleScroll = () => {
        const scrollY = window.scrollY
        let scrolling = scrollY - prevScrollY <= 0 ? 0 : -200
        translation.current.style.transform = 'translateY(' + scrolling + 'px)'
        prevScrollY = scrollY
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [translation])
    const handleClick = (anchor) => () => {
        const id = `${anchor}-section`
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            })
        }
    }

    return (
        <Box
            position="fixed"
            top={0}
            left={0}
            right={0}
            translateY={0}
            transitionProperty="transform"
            transitionDuration=".3s"
            transitionTimingFunction="ease-in-out"
            backgroundColor="#18181b"
            ref={translation}
        >
            <Box color="white" maxWidth="1280px" margin="0 auto">
                <HStack
                    px={16}
                    py={4}
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <nav>
                        <HStack spacing={8}>
                            {
                                /* Add social media links based on the `socials` data */
                                socials.map((social) => {
                                    return (
                                        <a href={social.url}>
                                            <FontAwesomeIcon
                                                icon={social.icon}
                                                size="2x"
                                            />
                                        </a>
                                    )
                                })
                            }
                        </HStack>
                    </nav>
                    <nav>
                        <HStack spacing={8}>
                            {/* Add links to Projects and Contact me section */}
                            <a href="#contact-me-section">Contact me</a>
                            <a href="#projects-section">Projects</a>
                        </HStack>
                    </nav>
                </HStack>
            </Box>
        </Box>
    )
}
export default Header
