import { useState } from "react";
import { Card, CardContent, Typography, Button, Chip, Box } from "@mui/material";
import { Skip } from "../types/SkipType";

interface SkipCardProps {
    skip: Skip;
}

export const SkipCard = ({ skip }: SkipCardProps) => {
    const [totalPrice, setTotalPrice] = useState<number>(
        skip.price_before_vat + (skip.price_before_vat * skip.vat) / 100
    );

    return (
        <Card className="bg-gray-900 text-white p-4 rounded-xl">
            <Box position="relative">
                <img
                    src="/assets/skip-placeholder.jpg"
                    alt={`${skip.size} Yard Skip`}
                    className="w-full h-40 rounded-lg"
                />
                <Chip
                    label={`${skip.size} Yards`}
                    className="absolute top-2 right-2 bg-blue-500 text-white"
                />
            </Box>
            <CardContent>
                <Typography variant="h6">{skip.size} Yard Skip</Typography>
                <Typography variant="body2" className="text-gray-400">
                    {skip.hire_period_days} day hire period
                </Typography>
                <Typography variant="h6" className="text-blue-500">
                    £{totalPrice} per week
                </Typography>

                {!skip.allowed_on_road && (
                    <Chip label="Private Property Only" className="mt-1 bg-orange-500 text-black" />
                )}
                {!skip.allows_heavy_waste && (
                    <Chip label="Not Suitable for Heavy Waste" className="mt-1 bg-red-500 text-white" />
                )}

                <Button fullWidth className="mt-3 bg-gray-700 hover:bg-gray-600 text-white">
                    Select This Skip
                </Button>
            </CardContent>
        </Card>
    );
};

export default SkipCard;
