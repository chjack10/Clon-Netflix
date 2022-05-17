import { FC, useEffect } from 'react';
import { NewUser } from '../features/auth/models/NewUser';
import { dataLoading } from '../features/data/dataSlice';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
// import CustomNavBar from '../features/home/navBar/CustomNavBar'
import Carousel from '../features/home/carousel/Carousel';
import ResponsiveAppBar from '../features/home/NavBar/ResponsiveAppBar';
import Intro from '../features/home/intro/Intro';
import ResponsiveFooter from '../features/home/footer/ResponsiveFooter'


const Home: FC = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);
  const { topRatedMovies } = useAppSelector((state) => state.data);
  // console.log(user);
  // console.log(topRatedMovies);
  
  useEffect(() => {
    dispatch(dataLoading());
  }, [dispatch]);
  
  return (
    <>
      <ResponsiveAppBar />
      <Intro />
      <Carousel />
      <Carousel />
      <Carousel />
      <ResponsiveFooter />
      {/* <CustomNavBar /> */}
      {/* <h1>Welcome {user?.name}</h1> */}
      {/* <h2>Top Rated Movies</h2>
      <ul>
        {topRatedMovies?.map((movie) => (
          <li>
            {movie.id} - {movie.title}
          </li>
        ))}
      </ul> */}
    </>
  );
};

export default Home;
