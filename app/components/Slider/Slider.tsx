import React from 'react'
import styled from 'styled-components';

// swiper
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow, A11y } from 'swiper';
 
// swiper css
import 'swiper/swiper.min.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Slider.css';


const ImageContainer = styled.div`
    width: 100%;
    height: 100px;

    border: 1px solid #000;

`

const Slider = () => {
    const settings: SwiperProps = {
        modules: [Navigation, Pagination, A11y, EffectCoverflow],
        effect: 'coverflow',
        slidesPerView: 3,
        spaceBetween: 20,
        navigation: true,
        pagination: {
            clickable: true,
            type: 'bullets',
        },
        loop: true // verificar
    }

    return (
        <Swiper
            {...settings}
        >
            <SwiperSlide>
                <ImageContainer>
                </ImageContainer>
            </SwiperSlide>
            <SwiperSlide>
                <ImageContainer>
                </ImageContainer>
            </SwiperSlide>
            <SwiperSlide>
                <ImageContainer>
                </ImageContainer>
            </SwiperSlide>
            <SwiperSlide>
                <ImageContainer>
                </ImageContainer>
            </SwiperSlide>
        </Swiper>
    )
}

export default Slider;