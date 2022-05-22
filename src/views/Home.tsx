import { FC, useEffect } from 'react';
import { logout } from '../features/auth/authSlice';
import { NewUser } from '../features/auth/models/NewUser';
import { dataLoading } from '../features/data/dataSlice';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';

const Home: FC = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);
  const { topRatedMovies } = useAppSelector((state) => state.data);

  useEffect(() => {
    dispatch(dataLoading());
  }, [dispatch]);

  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <>
      <h1>Welcome {`${user?.firstName} ${user?.lastName}`}</h1>
      <button onClick={handleLogout}>Logout</button>
      <h2>Top Rated Movies</h2>
      <ul>
        {topRatedMovies?.map((movie) => (
          <li key={movie.id}>
            {movie.id} - {movie.title}
          </li>
        ))} 
      </ul>
    </>
  );
};

export default Home;
