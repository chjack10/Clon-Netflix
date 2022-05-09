import { createTheme, ThemeProvider } from '@mui/material/styles';

interface ThemeContextProps {
  children: React.ReactNode;
  dark?: boolean;
}

const lightTheme = createTheme({ palette: { mode: 'light' } });
const darkTheme = createTheme({ palette: { mode: 'dark' } });

const ThemeContext = ({ children, dark }: ThemeContextProps) => (
  <ThemeProvider theme={dark ? darkTheme : lightTheme}>
    {children}
  </ThemeProvider>
);

export default ThemeContext;
