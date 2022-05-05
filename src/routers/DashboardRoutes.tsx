import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../views/Home';
import Login from '../views/Login';

const DashboardRoutes = () => (
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/login' element={<Login />} />

    <Route path='*' element={<Navigate to='/' />} />
  </Routes>
);

export default DashboardRoutes;
