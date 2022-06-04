import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '../hooks/hooks';

export const PrivateRoutes = () => {
  const { user } = useAppSelector((state) => state.auth);

  return user ? <Outlet /> : <Navigate to='/auth/login' replace />;
};
