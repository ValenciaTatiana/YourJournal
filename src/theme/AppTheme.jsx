import { CssBaseline } from "@mui/material"
import { ThemeProvider } from "@emotion/react";
import { lilaTheme } from "./lilaTheme";

export const AppTheme = ({children}) => {
    return (
        <ThemeProvider theme={lilaTheme}>
            <CssBaseline />
            {/* The children components will be rendered here */}
            {children}
        </ThemeProvider>
    )
}