import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/hash-navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import ActionAreaCard from './ActionAreaCard';


const Carousel = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={10}
      slidesPerView={3}
      navigation
    //   pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    //   onSwiper={(swiper) => console.log(swiper)}
    //   onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <ActionAreaCard />
      </SwiperSlide>
      <SwiperSlide>
        <ActionAreaCard />
      </SwiperSlide>
      <SwiperSlide>
        <ActionAreaCard />
      </SwiperSlide>
      <SwiperSlide>
        <ActionAreaCard />
      </SwiperSlide>
      ...
    </Swiper>
)}

export default Carousel

