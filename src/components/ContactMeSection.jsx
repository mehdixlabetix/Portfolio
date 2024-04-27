import React, { useEffect } from 'react'
import { useFormik } from 'formik'
import {
    Box,
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Heading,
    HStack,
    Input,
    Select,
    Textarea,
    VStack,
} from '@chakra-ui/react'
import * as Yup from 'yup'
import FullScreenSection from './FullScreenSection'
import useSubmit from '../hooks/useSubmit'
import { useAlertContext } from '../context/alertContext'
import { useInView } from 'framer-motion'
import Lottie from 'lottie-react'
import contact from '../anim/contact.json'

const LandingSection = () => {
    const { isLoading, response, submit } = useSubmit()
    const { onOpen } = useAlertContext()
    useEffect(() => {
        if (response) {
            onOpen(response.type, response.message)
            if (response.type === 'success') {
                formik.resetForm()
            }
        }
    }, [response])
    const formik = useFormik({
        initialValues: { firstName: '', email: '', type: '', comment: '' },
        onSubmit: (values) => {
            submit('https://example.com', values)
        },
        validationSchema: Yup.object({
            firstName: Yup.string().required('Required'),
            email: Yup.string()
                .email('Invalid email address')
                .required('Required'),
            comment: Yup.string()
                .required('Required')
                .min(25, 'Must be at least 25 characters!'),
        }),
    })
    const ref = React.useRef(null)
    const isInView = useInView(ref, { once: true })

    return (
        <FullScreenSection spacing={8} id="contact">
            <VStack
                id="contact-me"
                w="1024px"
                p={32}
                ref={ref}
                style={{
                    opacity: isInView ? 1 : 0,
                    transition: 'all 1.5s ease-in-out 0.85s',
                    zIndex: 2,
                }}
            >
                <HStack
                    width="50%"
                    style={{
                        backgroundColor: 'rgba(245, 40, 145, 0.8)',
                        borderRadius: '30px',
                        height: '70px',
                        marginBottom: '30px',
                    }}
                >
                    <Heading
                        width="100%"
                        as="h1"
                        id="contact-me-section"
                        color={'black'}
                    >
                        Contact me
                    </Heading>
                    <Lottie
                        id="bear"
                        animationData={contact}
                        loop={true}
                        style={{ width: '80%' }}
                    />
                </HStack>{' '}
                <Box id="contact-me-form" p={6} rounded="md" w="100%">
                    <form onSubmit={formik.handleSubmit}>
                        <VStack spacing={4}>
                            <FormControl
                                variant="floating"
                                isInvalid={
                                    formik.errors.firstName &&
                                    formik.touched.firstName
                                }
                            >
                                <FormLabel htmlFor="firstName">Name</FormLabel>
                                <Input
                                    {...formik.getFieldProps('firstName')}
                                    id="firstName"
                                    name="firstName"
                                />
                                <FormErrorMessage>
                                    {formik.errors.firstName}
                                </FormErrorMessage>
                            </FormControl>
                            <FormControl
                                variant="floating"
                                isInvalid={
                                    formik.errors.email && formik.touched.email
                                }
                            >
                                <FormLabel htmlFor="email">
                                    Email Address
                                </FormLabel>
                                <Input
                                    {...formik.getFieldProps('email')}
                                    id="email"
                                    name="email"
                                    type="email"
                                />
                                <FormErrorMessage>
                                    {formik.errors.email}
                                </FormErrorMessage>
                            </FormControl>
                            <FormControl>
                                <FormLabel htmlFor="type">
                                    Type of enquiry
                                </FormLabel>
                                <Select
                                    id="type"
                                    name="type"
                                    {...formik.getFieldProps('type')}
                                >
                                    <option value="hireMe">
                                        Freelance project proposal
                                    </option>
                                    <option value="other">Other</option>
                                </Select>
                            </FormControl>
                            <FormControl
                                variant="floating"
                                isInvalid={
                                    formik.errors.comment &&
                                    formik.touched.comment
                                }
                            >
                                <FormLabel htmlFor="comment">
                                    Your message
                                </FormLabel>
                                <Textarea
                                    {...formik.getFieldProps('comment')}
                                    id="comment"
                                    name="comment"
                                    height={250}
                                />
                                <FormErrorMessage>
                                    {formik.errors.comment}
                                </FormErrorMessage>
                            </FormControl>
                            <Button
                                isLoading={isLoading}
                                type="submit"
                                colorScheme="pink"
                                width="400px"
                            >
                                Submit
                            </Button>
                        </VStack>
                    </form>
                </Box>
            </VStack>
        </FullScreenSection>
    )
}

export default LandingSection
