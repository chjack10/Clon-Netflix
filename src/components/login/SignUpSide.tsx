import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';

interface SignUpSideProps {
  setShowSignUpForm: (arg: boolean) => void;
}

const SignUpSide = ({ setShowSignUpForm }: SignUpSideProps) => {
  const handleSignIn = () => setShowSignUpForm(false);

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
            inputProps={{
              maxLength: 50,
            }}
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
            inputProps={{
              maxLength: 50,
            }}
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
            inputProps={{
              maxLength: 50,
            }}
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
            inputProps={{
              maxLength: 50,
            }}
          />
        </Grid>
      </Grid>
      <Button
        type='submit'
        fullWidth
        variant='contained'
        sx={{ mt: 3, mb: 2 }}
        color='error'
      >
        Sign Up
      </Button>
      <Grid container justifyContent='flex-end'>
        <Grid item>
          <Link
            component='button'
            variant='body2'
            onClick={handleSignIn}
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
