import React, { useState } from 'react';
import { Stepper, Step, StepLabel, Button, Box } from '@mui/material';
import PostcodeIcon from '@mui/icons-material/LocationOn';
import WasteTypeIcon from '@mui/icons-material/Category';
import SelectSkipIcon from '@mui/icons-material/Build';
import PermitCheckIcon from '@mui/icons-material/CheckCircle';
import ChooseDateIcon from '@mui/icons-material/Event';
import PaymentIcon from '@mui/icons-material/Payment';

const Header = () => {
    const steps = ['Postcode', 'Waste Type', 'Select Skip', 'Permit Check', 'Choose Date', 'Payment'];
    const [activeStep, setActiveStep] = useState(2);

    const handleNext = () => {
        if (activeStep < steps.length - 1) {
            setActiveStep(activeStep + 1);
        }
    };

    const handleBack = () => {
        if (activeStep > 0) {
            setActiveStep(activeStep - 1);
        }
    };

    const handleSkip = () => {
        setActiveStep(activeStep + 1);
    };

    const stepIcons = [
        <PostcodeIcon />,
        <WasteTypeIcon />,
        <SelectSkipIcon />,
        <PermitCheckIcon />,
        <ChooseDateIcon />,
        <PaymentIcon />
    ];

    return (
        <Box sx={{ width: '100%' }}>
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label, index) => (
                    <Step key={index}>
                        <StepLabel
                            icon={stepIcons[index]}
                            sx={{
                                color: activeStep >= index ? 'primary.main' : 'text.secondary',
                                cursor: activeStep >= index ? 'pointer' : 'not-allowed',
                                '&:hover': {
                                    cursor: activeStep >= index ? 'pointer' : 'not-allowed',
                                },
                            }}
                        >
                            {label}
                        </StepLabel>
                    </Step>
                ))}
            </Stepper>

            <Box sx={{ p: 2 }}>
                {activeStep === 0 && (
                    <div>
                        <h2>Postcode Step</h2>
                    </div>
                )}

                {activeStep === 1 && (
                    <div>
                        <h2>Waste Type Step</h2>
                    </div>
                )}

                {activeStep === 2 && (
                    <div>
                        <h2>Choose Your Skip Size</h2>
                        <p>Select the skip size that best suits your needs</p>
                    </div>
                )}

                {activeStep === 3 && (
                    <div>
                        <h2>Permit Check Step</h2>
                    </div>
                )}

                {activeStep === 4 && (
                    <div>
                        <h2>Choose Date Step</h2>
                    </div>
                )}

                {activeStep === 5 && (
                    <div>
                        <h2>Payment Step</h2>
                    </div>
                )}
            </Box>
        </Box>
    );
};

export default Header;
