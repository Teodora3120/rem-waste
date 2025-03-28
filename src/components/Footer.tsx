import { Skip } from "../types/SkipType";
import { Button, Typography, Container } from "@mui/material";
import Grid from '@mui/material/Grid2';


interface FooterProps {
    selectedSkip: Skip | null;
}

const Footer = ({ selectedSkip }: FooterProps) => {
    if (!selectedSkip) return <></>;
    const totalPrice = selectedSkip.price_before_vat + (selectedSkip.price_before_vat * selectedSkip.vat) / 100;

    return (
        <div className="text-white py-4 fixed bottom-0 left-0 w-full footer-color">
            <Container>
                <Grid container alignItems="center" justifyContent="space-between">
                    <Grid size={6} className="flex items-center space-x-3">
                        <Typography
                            variant="h6"
                            className="text-gray-300"
                            sx={{
                                fontSize: { xs: '0.7rem', sm: '0.8rem', md: '0.9rem', lg: '1rem', xl: '1.1rem' }
                            }}
                        >
                            {selectedSkip.size} Yard Skip
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            className="text-gray-400"
                            sx={{
                                fontSize: { xs: '0.6rem', sm: '0.7rem', md: '0.8rem', lg: '0.9rem', xl: '1rem' },
                                paddingTop: { xs: '3px', sm: '3px', md: '3px', lg: '3px' }
                            }}
                        >
                            £{totalPrice.toFixed(2)} - {selectedSkip.hire_period_days} day hire
                        </Typography>
                    </Grid>

                    <Grid size={6} className="flex justify-end space-x-4">
                        <Button variant="outlined" color="inherit" size="small">
                            Back
                        </Button>
                        <Button variant="contained" color="primary" size="small">
                            Continue
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Footer;
