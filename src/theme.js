import {createTheme} from '@mui/material/styles';

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

export default theme;