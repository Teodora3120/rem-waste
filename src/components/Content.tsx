import { Container, Typography, Alert, CircularProgress, Box } from "@mui/material";
import Grid from '@mui/material/Grid';
import SkipCard from "./SkipCard";
import { Skip } from "../types/SkipType";
import { Dispatch, SetStateAction } from "react";
interface ContentProps {
    skips: Skip[];
    loading: boolean;
    error: string | null;
    setSelectedSkip: Dispatch<SetStateAction<Skip | null>>
}

const Content = ({ skips, loading, error, setSelectedSkip }: ContentProps) => {
    return (
        <Container sx={{ mt: 4 }}>
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
                            <Grid key={skip.id} size={{ xs: 12, md: 6, sm: 6, lg: 3 }} >
                                <div onClick={() => setSelectedSkip(skip)} className="cursor-pointer">
                                    <SkipCard skip={skip} />
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
