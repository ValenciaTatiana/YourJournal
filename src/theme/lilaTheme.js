import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';

export const lilaTheme = createTheme({
    palette: {
        primary: {
            main: '#d64bff',
        },
        secondary: {
            main: '#e488ff', // Pink
        },
        error: {
            main: red.A400, // Red
        },
    },
    // typography: {
    //     fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    //     h1: {
    //     fontSize: '2.2rem',
    //     fontWeight: 500,
    //     },
    //     h2: {
    //     fontSize: '1.8rem',
    //     fontWeight: 500,
    //     },
    // },
})
