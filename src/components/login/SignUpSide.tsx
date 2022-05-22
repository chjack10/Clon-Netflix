import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';

interface SignUpSideProps {
  setShowSignUpForm: (arg: boolean) => void;
  loading: boolean;
}

const SignUpSide = ({ setShowSignUpForm, loading }: SignUpSideProps) => {
  const showSignIn = () => setShowSignUpForm(false);

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            autoComplete='given-name'
            color='error'
            name='firstName'
            fullWidth
            id='firstName'
            label='First Name'
            autoFocus
            required
            inputProps={{
              maxLength: 50,
              minLength: 3,
            }}
            disabled={loading}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            color='error'
            fullWidth
            id='lastName'
            label='Last Name'
            name='lastName'
            autoComplete='family-name'
            required
            inputProps={{
              maxLength: 50,
              minLength: 3,
            }}
            disabled={loading}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            color='error'
            fullWidth
            id='email'
            label='Email Address'
            name='email'
            autoComplete='email'
            required
            inputProps={{
              maxLength: 50,
              minLength: 6,
            }}
            disabled={loading}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            color='error'
            fullWidth
            name='password'
            label='Password'
            type='password'
            id='password'
            autoComplete='new-password'
            required
            inputProps={{
              maxLength: 50,
              minLength: 6,
            }}
            disabled={loading}
          />
        </Grid>
      </Grid>
      <Button
        type='submit'
        fullWidth
        variant='contained'
        sx={{ mt: 3, mb: 2 }}
        color='error'
        disabled={loading}
      >
        Sign Up
      </Button>
      <Grid container justifyContent='flex-end'>
        <Grid item>
          <Link
            component='button'
            variant='body2'
            onClick={showSignIn}
            underline='hover'
          >
            Already have an account? Sign in
          </Link>
        </Grid>
      </Grid>
    </>
  );
};

export default SignUpSide;
