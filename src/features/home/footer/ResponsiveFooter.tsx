import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Tooltip from '@mui/material/Tooltip';

import Logo from '../NavBar/Logo';
import LogoMobile from '../NavBar/LogoMobile';

const pages = [];
const settings = ['Profile', 'Account', 'Dashboard'];

const ResponsiveFooter = () => {

  return (
    <AppBar position="static"  sx={{ bgcolor: "transparent", boxShadow: 0, mt: 0 , p: 0}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1 }}>
            <Tooltip title="Open settings">
                <div> Copyrigth© 2022</div>
            </Tooltip>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 7,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 100,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <Logo />
          </Typography>

          <Typography // Mobile version
            // variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 0,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <LogoMobile />
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveFooter;


