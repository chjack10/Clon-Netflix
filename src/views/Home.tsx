import { logout } from '../features/auth/authSlice';
import { NewUser } from '../features/auth/models/NewUser';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';

const Home = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.user);
  console.log(user);

  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <>
      <h1>Welcome {user?.name}</h1>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
};

export default Home;
