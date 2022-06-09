import { createContext, useState } from "react";
import {createTheme} from '@mui/material/styles';

const ThemeContext =  createContext();

const ThemeProvider = ({children})=>{

    const theme = createTheme({
        palette: {
        primary: {
            light: '#B7D1B2',
            main: '#71996a',
            dark: '#293D26',
            contrastText: '#DBE6D9',
        },
        secondary: {
            light: '#edcc9b',
            main: '#eddea3',
            dark: '#B99B69',
            contrastText: '#edcc9b',
        },
        },
    });
    
    return (
        <ThemeContext.Provider value={theme}> 
            {children}
        </ThemeContext.Provider>
    )
}
export { ThemeContext }
export default ThemeProvider