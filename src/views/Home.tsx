import { FC, useEffect } from 'react';
import { NewUser } from '../features/auth/models/NewUser';
import { dataLoading } from '../features/data/dataSlice';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import Carousel from '../features/home/carousel/Carousel';
import ResponsiveAppBar from '../features/home/NavBar/ResponsiveAppBar';
import Intro from '../features/home/intro/Intro';
import ResponsiveFooter from '../features/home/footer/ResponsiveFooter'
import { apiEntity } from '../services/services';


const Home: FC = () => {
  // const dispatch = useAppDispatch();
  // const { user } = useAppSelector((state) => state.auth);
  // const { topRatedMovies } = useAppSelector((state) => state.data);
  // // console.log(user);
  // // console.log(topRatedMovies);
  
  // useEffect(() => {
  //   dispatch(dataLoading());
  // }, [dispatch]);
  
  return (
    <>
      <ResponsiveAppBar />
      <Intro entity={apiEntity.topRatedTv}/>
      <Carousel entity={apiEntity.popularMovies} categoryTitle={'Popular movies'} />
      <Carousel entity={apiEntity.topRatedMovies} categoryTitle={'Top Rated Movies'}/>
      <Carousel entity={apiEntity.popularTv} categoryTitle={'Popular TV'}/>
      <Carousel entity={apiEntity.topRatedTv} categoryTitle={'Top Rated TV'}/>
      <ResponsiveFooter />
    </>
  );
};

export default Home;
