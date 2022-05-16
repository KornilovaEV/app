
import React, { useState } from "react";
import styled, {ThemeProvider} from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./Themes";
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Box from '@mui/material/Box';



const StylesApp = styled.div`
`

function Icon() {
    const [theme, setTheme] = useState('dark');
    const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')};

    return (
        <Box
    sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'text.primary',
        borderRadius: 1,
        p: 0.5,
        
    }}
    >
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <GlobalStyles />
        <StylesApp>
            <IconButton sx={{ ml: 0, background: 'none'}} onClick={() => themeToggler()} color="inherit">
            {
            theme === 'light' ? <Brightness7Icon /> : <Brightness4Icon />
            }
            </IconButton>
        </StylesApp>
        </ThemeProvider>  
        </Box>      
    )
}

export {Icon};