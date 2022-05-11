import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ResponsiveAppBar from './ResponsiveAppBar';

const theme = createTheme({
  palette: {
    neutral: {
      main: '#111',
      contrastText: '#fff',
    },
  },
});

declare module '@mui/material/styles' {
  interface Palette {
    neutral: Palette['primary'];
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    neutral?: PaletteOptions['primary'];
  }
}

// Update the Button's color prop options
declare module '@mui/material/AppBar' {
  interface ButtonPropsColorOverrides {
    neutral: true;
  }
}

export default function CustomColor() {
  return (
    <ThemeProvider theme={theme}>
        <ResponsiveAppBar />

      {/* <Button color="neutral" variant="contained">
        neutral
      </Button> */}
    </ThemeProvider>
  );
}
