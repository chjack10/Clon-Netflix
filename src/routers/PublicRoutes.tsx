import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '../hooks/hooks';

export const PublicRoutes = () => {
  const { user } = useAppSelector((state) => state.auth);

  return user ? <Navigate to='/' replace /> : <Outlet />;
};
