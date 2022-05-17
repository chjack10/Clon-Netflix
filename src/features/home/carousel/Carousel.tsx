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
import { AreaCard } from './AreaCard';
import { useAppSelector } from '../../../hooks/hooks';

const Carousel = () => {
    const { topRatedMovies } = useAppSelector((state) => state.data);

  return (
      <Container maxWidth="xl" sx={{ml: 0}}>
        <h3 style={{color: 'white'}}>Category</h3>
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={0}
            slidesPerView={4.1}
            navigation
            //   pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
        >
            {topRatedMovies?.map((entity)=>(
                <SwiperSlide>
                    <AreaCard key={entity.id} title={entity.original_title}/>
                </SwiperSlide>
            ))}
        </Swiper>
      </Container>
)}

export default Carousel

