import { Container, Typography, Alert, CircularProgress, Box } from "@mui/material";
import Grid from '@mui/material/Grid';
import SkipCard from "./SkipCard";
import { Skip } from "../types/SkipType";
interface ContentProps {
    skips: Skip[];
    loading: boolean;
    error: string | null;
}

const Content = ({ skips, loading, error }: ContentProps) => {
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
                                <SkipCard skip={skip} />
                            </Grid>
                        ))}
                    </Grid>
                </>
            )}
        </Container>
    );
};

export default Content;
