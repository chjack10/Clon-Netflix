import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/hash-navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { Container } from '@mui/material';
import ActionAreaCard from '../carousel/ActionAreaCard';
import { IntroCard } from './IntroCard';
// import { AreaCard } from '../carousel/AreaCard';


const Intro = () => {
  
  return (
      <Container maxWidth="xl" sx={{ml: 0}}>
        <Swiper
        // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={0}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
        <SwiperSlide>
            <IntroCard />
        </SwiperSlide>
        <SwiperSlide>
            <IntroCard />
        </SwiperSlide>
        <SwiperSlide>
            <IntroCard />
        </SwiperSlide>
        <SwiperSlide>
            <IntroCard />
        </SwiperSlide>
        
        </Swiper>
      </Container>
)}

export default Intro

