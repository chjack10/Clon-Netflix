import { Link } from 'react-router-dom';
// import { login } from '../features/auth/authSlice';
import { LoginUser } from '../features/auth/models/LoginUser';
// import { useAppDispatch } from '../hooks/hooks';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../hooks/hooks';

import { login, register, reset } from '../features/auth/authSlice';

import { useAppDispatch } from '../hooks/hooks';
import SignInSide from '../components/login/SignInSide';
import ThemeContext from '../context/ThemeContext';
import SignUpSide from '../components/login/SignUpSide';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Error from '../components/login/Error';

const Login = () => {
  const navigate = useNavigate();
  const { isLoading, isError, user } = useAppSelector((state) => state.auth);

  user && navigate('/', { replace: true });

  const [showSignUpForm, setShowSignUpForm] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const user = {
      email: data.get('email') as string,
      password: data.get('password') as string,
      firstName: data.get('firstName') as string,
      lastName: data.get('lastName') as string,
    };

    if (showSignUpForm) {
      dispatch(register(user));
    } else {
      dispatch(login(user));
    }
  };

  return (
    <ThemeContext dark>
      <Grid container component="main" sx={{ height: '100vh' }}>
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
            <Typography component="h1" variant="h5">
              {(showSignUpForm && 'Sign Up') || 'Sign In'}
            </Typography>
            <Box component='form' onSubmit={handleSubmit} sx={{ mt: 3 }}>
              {showSignUpForm ? (
                <SignUpSide
                  setShowSignUpForm={setShowSignUpForm}
                  loading={isLoading}
                />
              ) : (
                <SignInSide
                  setShowSignUpForm={setShowSignUpForm}
                  loading={isLoading}
                />
              )}
            </Box>

            {isError && (
              <Error message={'There was an error. Please try again.'} />
            )}
          </Box>
        </Grid>
      </Grid>
    </ThemeContext>
  );
};

export default Login;
