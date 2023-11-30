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
import React from 'react'
import { useInView } from 'framer-motion'

const steps = [
    { title: 'First' },
    { title: 'Second' },
    { title: 'Third' },
    { title: 'Fourth' },
]

function Example() {
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
        >
            {steps.map((step, index) => (
                <Step key={index}>
                    <StepIndicator id="step">
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
