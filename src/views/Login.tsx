import { useState } from 'react';
import Grid from '@mui/material/Grid';
import SignInSide from '../components/login/SignInSide';

import ThemeContext from '../context/ThemeContext';
import SignUpSide from '../components/login/SignUpSide';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const Login = () => {
  const [showSignUpForm, setShowSignUpForm] = useState<boolean>(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeContext dark>
      <Grid container component='main' sx={{ height: '100vh' }}>
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              'url(https://isquad.tv/wp-content/uploads/2018/08/Netflix-Background.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography component='h1' variant='h5'>
              {(showSignUpForm && 'Sign Up') || 'Sign In'}
            </Typography>
            <Box
              component='form'
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              {showSignUpForm ? (
                <SignUpSide setShowSignUpForm={setShowSignUpForm} />
              ) : (
                <SignInSide setShowSignUpForm={setShowSignUpForm} />
              )}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeContext>
  );
};

export default Login;
