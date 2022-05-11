import React from 'react';
import { register } from '../features/auth/authSlice';
import { useAppDispatch } from '../hooks/hooks';
import { Link } from 'react-router-dom';
import { RegisterFormField } from '../features/auth/models/RegisterFormField';

const registerUser: RegisterFormField = {
  name: 'Moka',
  email: 'moka@gmail.com',
  password: 'moka123',
  confirmPassword: 'moka123',
};

const Register = () => {
  const dispatch = useAppDispatch();

  const handleLogin = () => {
    dispatch(register(registerUser));
  };
  return (
    <>
      <button onClick={handleLogin}>Registro</button>
      <Link to="/auth/login">Ya estás logueado?</Link>
    </>
  );
};
export default Register;
