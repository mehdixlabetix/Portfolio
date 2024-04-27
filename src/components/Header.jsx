import React, { useEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { Box, HStack } from '@chakra-ui/react'

const socials = [
    {
        name: 'Mail',
        icon: faEnvelope,
        url: 'mailto:mehdi.cherif@insat.ucar.tn',
    },
    { name: 'Github', icon: faGithub, url: 'https://github.com/mehdixlabetix' },
    {
        name: 'Linkedin',
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
            id="header"
            position="fixed"
            top={0}
            left={0}
            right={0}
            translateY={0}
            transitionProperty="transform"
            transitionDuration=".1s"
            transitionTimingFunction="ease"
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
                    <nav id="header-socials">
                        <HStack spacing={8}>
                            {socials.map((social) => {
                                return (
                                    <a
                                        aria-label={
                                            'Reachout using' + social.name
                                        }
                                        key={social.name}
                                        href={social.url}
                                    >
                                        <FontAwesomeIcon
                                            icon={social.icon}
                                            size="2x"
                                        />
                                    </a>
                                )
                            })}
                        </HStack>
                    </nav>
                    <nav id="header-links">
                        <HStack spacing={8}>
                            <a href="#skills-gen">Skills</a>
                            <a href="#projects-section">Projects</a>
                            <a href='/Mehdi_Cherif_EN.pdf' ref='noopener noreferrer' target='_blank'>Resume</a>
                            <a href="#contact-me-section">Contact me</a>
                        </HStack>
                    </nav>
                </HStack>
            </Box>
        </Box>
    )
}
export default Header
