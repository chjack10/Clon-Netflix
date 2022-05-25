import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/hash-navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// import { Container } from '@mui/material';
import { IntroCard } from './IntroCard';

import { useGetEntityListQuery } from '../../../services/services';
import { Container } from '@mui/material';
import Tmdb from '../../../services/types'



const Intro = ({entity}) => {
  const { data , error, isLoading } = useGetEntityListQuery(entity)
  
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      >
        {error ? (
            <Container sx={{color: 'white'}}>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              Oh no, there was an error</Container>
        ) : isLoading ? (
            <>
            Loading...</>
        ) : data ? (
            <>
            {data.results.map((entity:Tmdb, index)=>(
              <SwiperSlide key={index}>
                <IntroCard key={entity.id} imgPath={entity.backdrop_path || entity.poster_path} title={entity.original_title || entity.name} overview={entity.overview}/>
              </SwiperSlide>
            ))}
            </>
        ) : null}
    </Swiper>
)}

export default Intro