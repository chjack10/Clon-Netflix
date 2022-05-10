import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '../hooks/hooks';

export const PublicRoutes = () => {
  const { user } = useAppSelector((state) => state.auth);
  console.log(user);

  return user ? <Navigate to="/" /> : <Outlet />;
};
