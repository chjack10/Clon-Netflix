import { Link } from 'react-router-dom';
import { login } from '../features/auth/authSlice';
import { LoginUser } from '../features/auth/models/LoginUser';
import { useAppDispatch } from '../hooks/hooks';

const loginUser: LoginUser = {
  email: 'moka@gmail.com',
  password: 'moka123',
};

const Login = () => {
  const dispatch = useAppDispatch();

  const handleLogin = () => {
    dispatch(login(loginUser));
  };
  return (
    <>
      <button onClick={handleLogin}>Login</button>
      <Link to="/auth/register">Aún no estás registrado?</Link>
    </>
  );
};
export default Login;
