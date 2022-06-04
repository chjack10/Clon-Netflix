import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';

interface SignInSideProps {
  setShowSignUpForm: (arg: boolean) => void;
  loading: boolean;
}

const SignInSide = ({ setShowSignUpForm, loading }: SignInSideProps) => {
  const showSignUp = () => setShowSignUpForm(true);

  return (
    <>
      <TextField
        margin='normal'
        type='email'
        color='error'
        fullWidth
        id='email'
        label='Email Address'
        name='email'
        autoComplete='email'
        autoFocus
        required
        inputProps={{
          maxLength: 50,
          minLength: 6,
        }}
        disabled={loading}
      />
      <TextField
        margin='normal'
        color='error'
        fullWidth
        name='password'
        label='Password'
        type='password'
        id='password'
        autoComplete='current-password'
        required
        inputProps={{
          maxLength: 50,
          minLength: 6,
        }}
        disabled={loading}
      />
      <FormControlLabel
        control={<Checkbox value='remember' color='error' />}
        label='Remember me'
      />
      <Button
        type='submit'
        fullWidth
        variant='contained'
        color='error'
        sx={{ mt: 3, mb: 2 }}
        disabled={loading}
      >
        Sign In
      </Button>
      <Grid container>
        <Grid container item justifyContent='flex-end'>
          <Link
            component='button'
            variant='body2'
            onClick={showSignUp}
            underline='hover'
          >
            Don't have an account? Sign Up
          </Link>
        </Grid>
      </Grid>
    </>
  );
};
export default SignInSide;
