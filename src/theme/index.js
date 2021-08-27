import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { MaterialPalleteColours } from './Colors';
import { typography } from './Typography';


const theme = createTheme({
    overrides: {
        pallete: MaterialPalleteColours,
        typography,
    }
});

export default function MaterialThemeWrapper({children}) {
    // we can use the light dark theme modal. If we need
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}