import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { grey } from '@mui/material/colors';

const col = [
    {
    value: 'Books',
    label: 'Books',
    },
    {
    value: 'Wine',
    label: 'Wine',
    },
    {
    value: 'Stamps',
    label: 'Stamps',
    },
    {
    value: 'Cars',
    label: 'Cars',
    },
];


export function Set() {
    const [currency, setCurrency] = React.useState("Books");

    const handleChange = (event) => {
        setCurrency(event.target.value);
    };

    return (
        <Box 
        component="form"
        style={{
            height: "3.7ch",
            background: grey[50], 
            width: "6.5ch",
            "& .MuiTextFieldRoot": { m: 1}
        }}
        noValidate
        autoComplete="off"
        >
        <div>
            <TextField
            id="outlined-select-currency"
            select
            value={currency}
            onChange={handleChange}
            >
            {col.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                {option.label}
                </MenuItem>
            ))}
            </TextField>
        </div>
        </Box>
    );
}
