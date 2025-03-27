import React from "react";
import { Skip } from "../types/SkipType";
import { Button, Typography } from "@mui/material";

interface FooterProps {
    selectedSkip: Skip;
}

const Footer = ({ selectedSkip }: FooterProps) => {
    const totalPrice = selectedSkip.price_before_vat + (selectedSkip.price_before_vat * selectedSkip.vat) / 100;

    return (
        <div>
            <div>
                <Typography variant="h6">{selectedSkip.size} Yard Skip</Typography>
                <Typography variant="subtitle1">£{totalPrice.toFixed(2)} - {selectedSkip.hire_period_days} day hire</Typography>
            </div>
            <div className="space-x-2">
                <Button variant="outlined" color="secondary">Back</Button>
                <Button variant="contained" color="primary">Continue</Button>
            </div>
        </div>
    );
};

export default Footer;
