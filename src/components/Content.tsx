import { Container, Alert, CircularProgress, Box } from "@mui/material";
import Grid from '@mui/material/Grid2';
import { Skip } from "../types/SkipType";
import { Dispatch, SetStateAction } from "react";
import SkipCard from "./SkipCard";

interface ContentProps {
    skips: Skip[];
    loading: boolean;
    error: string | null;
    setSelectedSkip: Dispatch<SetStateAction<Skip | null>>;
    selectedSkip: Skip | null;
}

const Content = ({ skips, loading, error, setSelectedSkip, selectedSkip }: ContentProps) => {
    return (
        <Container sx={{ pb: 8 }}>
            {error && (
                <Alert severity="error" sx={{ mb: 3 }}>
                    {error}
                </Alert>
            )}

            {loading ? (
                <Box display="flex" justifyContent="center" alignItems="center" height="50vh">
                    <CircularProgress size={60} />
                </Box>
            ) : (
                <>
                    <Grid container spacing={3} justifyContent="center">
                        {skips.map((skip) => (
                            <Grid key={skip.id} size={{ xs: 12, md: 4, sm: 6, lg: 4, xl: 4 }}>
                                <div
                                    onClick={() => setSelectedSkip(skip)}
                                    className={`transition-transform duration-200 
                                    ${!skip.allows_heavy_waste ? "cursor-not-allowed opacity-60 pointer-events-none" : "cursor-pointer hover:scale-105"}`}
                                >
                                    <SkipCard skip={skip} selectedSkip={selectedSkip} />
                                </div>
                            </Grid>
                        ))}
                    </Grid>
                </>
            )}
        </Container>
    );
};

export default Content;
