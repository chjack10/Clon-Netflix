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

import { useAppSelector } from '../../../hooks/hooks';


const Intro = () => {
  const { topRatedMovies } = useAppSelector((state) => state.data);
  
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      pagination={{ clickable: true }}
      // autoplay={{
      //   delay: 2500,
      //   disableOnInteraction: false,
      // }}
      >
        {topRatedMovies?.map((entity)=>(
          <SwiperSlide>
              <IntroCard key={entity.id} title={entity.original_title} overview={entity.overview}/>
          </SwiperSlide>
        ))}
    </Swiper>
)}

export default Intro

