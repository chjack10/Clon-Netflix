import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import Home from '../views/Home';
import Login from '../views/Login';
import Register from '../views/Register';
import { PrivateRoutes } from './PrivateRoutes';
import { PublicRoutes } from './PublicRoutes';

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<PrivateRoutes />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="/auth" element={<PublicRoutes />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
      <Route path="*" element={<Navigate to="/auth/login" />} />
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
