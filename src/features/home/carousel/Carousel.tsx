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
import { useGetEntityListQuery } from '../../../services/services';

const Carousel = ({entity, categoryTitle}) => {
    const { data , error, isLoading } = useGetEntityListQuery(entity)

  return (
      <Container maxWidth="xl" sx={{ml: 0}}>
        <h3 style={{color: 'white'}}>{categoryTitle}</h3>
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={0}
            slidesPerView={4.1}
            navigation
            //   pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
        >
            {error ? (
                <Container sx={{color: 'white'}}>Oh no, there was an error</Container>
            ) : isLoading ? (
                <>Loading...</>
            ) : data ? (
                <>
                {data.results.map((entity, index)=>(
                    <SwiperSlide key={index}>
                        <AreaCard key={entity.id} title={entity.original_title || entity.name} imgPath={entity.backdrop_path || entity.poster_path}/>
                    </SwiperSlide>
                ))}
                </>
            ) : null}
        </Swiper>
      </Container>
)}

export default Carousel

