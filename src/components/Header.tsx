/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';
import { Stepper, Step, StepLabel, Box, Typography, Container, useMediaQuery, useTheme } from '@mui/material';
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

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    const stepIcons = [
        <PostcodeIcon />,
        <WasteTypeIcon />,
        <SelectSkipIcon />,
        <PermitCheckIcon />,
        <ChooseDateIcon />,
        <PaymentIcon />
    ];

    const visibleSteps = isMobile ? steps.slice(activeStep, activeStep + 2) : steps;
    const visibleIcons = isMobile ? stepIcons.slice(activeStep, activeStep + 2) : stepIcons;

    return (
        <Container>
            <Box className="w-full" sx={{ pt: 4 }}>
                <Stepper activeStep={activeStep} alternativeLabel sx={{ overflowX: "auto" }}>
                    {steps.map((label, index) => (
                        <Step key={index}>
                            <StepLabel
                                icon={stepIcons[index]}
                                sx={{
                                    color: activeStep >= index ? 'primary.light' : 'primary.dark',
                                    cursor: activeStep >= index ? 'pointer' : 'not-allowed',
                                    '&:hover': {
                                        cursor: activeStep >= index ? 'pointer' : 'not-allowed',
                                    },
                                }}
                            >
                                <Typography variant="body1" className={`text-nowrap text-${activeStep >= index ? 'white' : 'zinc-400'}`}>{label}</Typography>
                            </StepLabel>
                        </Step>
                    ))}
                </Stepper>

                <Box sx={{ pt: 4 }} display="flex" justifyContent="center" alignItems="center">
                    {activeStep === 0 && (
                        <div >
                            <Typography variant="h5" className="font-semibold text-zinc-400">Postcode Step</Typography>
                        </div>
                    )}

                    {activeStep === 1 && (
                        <div>
                            <Typography variant="h5" className="font-semibold text-zinc-400">Waste Type Step</Typography>
                        </div>
                    )}

                    {activeStep === 2 && (
                        <div className='text-center'>
                            <Typography variant="h5" className="font-semibold text-zinc-200">Choose Your Skip Size</Typography>
                            <Typography sx={{ pt: 2 }} variant="body2" className="text-gray-600 text-zinc-400">Select the skip size that best suits your needs</Typography>
                        </div>
                    )}

                    {activeStep === 3 && (
                        <div>
                            <Typography variant="h5" className="font-semibold text-zinc-400">Permit Check Step</Typography>
                        </div>
                    )}

                    {activeStep === 4 && (
                        <div>
                            <Typography variant="h5" className="font-semibold text-zinc-400">Choose Date Step</Typography>
                        </div>
                    )}

                    {activeStep === 5 && (
                        <div>
                            <Typography variant="h5" className="font-semibold text-zinc-400">Payment Step</Typography>
                        </div>
                    )}
                </Box>
            </Box >
        </Container>
    );
};

export default Header;
