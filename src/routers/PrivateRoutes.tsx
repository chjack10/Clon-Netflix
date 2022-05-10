import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '../hooks/hooks';

export const PrivateRoutes = () => {
  const { user } = useAppSelector((state) => state.auth);
  console.log(user);

  return user ? <Outlet /> : <Navigate to="/auth/login" />;
};
