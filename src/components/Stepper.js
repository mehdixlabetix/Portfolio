import {
    Box,
    Step,
    StepDescription,
    StepIcon,
    StepIndicator,
    StepNumber,
    Stepper,
    StepSeparator,
    StepStatus,
    StepTitle,
    useSteps,
} from '@chakra-ui/react'
import { useInView } from 'framer-motion'
import React from 'react'

const steps = [
    { title: 'First' },
    { title: 'Second' },
    { title: 'Third' },
    { title: 'Fourth' },
]

function Example() {
    const ref = React.useRef(null)
    const isInView = useInView(ref, { once: true })
    const { activeStep } = useSteps({
        index: -1,
        count: steps.length,
    })

    return (
        <Stepper
            index={activeStep}
            marginLeft="-100px"
            orientation="vertical"
            height="780px"
            gap="0"
            ref={ref}
            style={{
                transform:
                    window.outerWidth > 780
                        ? isInView
                            ? 'none'
                            : 'translateX(-100px)'
                        : 'none',
                opacity: isInView ? 1 : 0,
                transition: 'all 1s ease-in-out 0.7s',
            }}
        >
            {steps.map((step, index) => (
                <Step key={index}>
                    <StepIndicator id="step"
                    >
                        <StepStatus

                            complete={<StepIcon />}
                            incomplete={<StepNumber />}
                            active={<StepNumber />}
                        />
                    </StepIndicator>

                    <StepSeparator />
                </Step>
            ))}
        </Stepper>
    )
}

export default Example
