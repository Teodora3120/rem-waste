/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { Card, CardContent, Typography, Button, Chip, Box } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Skip } from "../types/SkipType";

interface SkipCardProps {
    skip: Skip;
    selectedSkip: Skip | null;
}

const SkipCard = ({ skip, selectedSkip }: SkipCardProps) => {
    const [totalPrice, setTotalPrice] = useState<number>(
        skip.price_before_vat + (skip.price_before_vat * skip.vat) / 100
    );

    return (
        <Card
            className="!bg-indigo-950 !text-white !p-4 !rounded-sm"
            sx={{
                border: selectedSkip?.id === skip.id ? "3px solid #3b82f6" : "3px solid transparent",
                transition: "border 0.3s ease-in-out",
                opacity: !skip.allows_heavy_waste ? 0.6 : 1,
            }}>
            <Box position="relative">
                <img
                    src={require('../assets/imgs/skip-img.jpeg')}
                    alt={`${skip.size} Yard Skip`}
                    className="w-full h-40"
                />
                <Chip
                    label={`${skip.size} Yards`}
                    className="absolute !top-2 !right-2 !bg-blue-800 !text-white"
                    size="small"
                />

                {!skip.allowed_on_road && (
                    <Chip label="Private Property Only" className="absolute !bottom-1 !ml-2 !bg-orange-500 !text-black" size="small" />
                )}
                {!skip.allows_heavy_waste && (
                    <Chip label="Not Suitable for Heavy Waste" className="absolute !bottom-8  !ml-2 !bg-red-500 !text-white" size="small" />
                )}
            </Box>
            <CardContent>
                <Typography variant="h6" className="text-zinc-100" sx={{ mt: 1 }}>{skip.size} Yard Skip</Typography>
                <Typography variant="body2" className="text-gray-400" sx={{ mt: 0 }}>
                    {skip.hire_period_days} day hire period
                </Typography>
                <Box sx={{ display: "inline-flex", alignItems: "center", mt: 3 }}>
                    <Typography variant="body1" className="text-blue-500">
                        £{totalPrice}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "white", ml: 1 }} component="span">
                        per week
                    </Typography>
                </Box>

                <Button
                    fullWidth
                    sx={{ mt: 1, mb: -1, cursor: !skip.allows_heavy_waste ? "not-allowed" : "pointer" }}
                    className={`!text-white ${skip.id === selectedSkip?.id ? '!bg-indigo-600' : '!bg-indigo-900 '}`}
                    endIcon={<ArrowForwardIcon />}
                    disabled={!skip.allows_heavy_waste}>

                    {skip.id === selectedSkip?.id ? "Selected" : 'Select this skip'}
                </Button>
            </CardContent>
        </Card >
    );
};

export default SkipCard;