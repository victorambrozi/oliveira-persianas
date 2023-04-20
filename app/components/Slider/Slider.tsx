import React from 'react'
import styled from 'styled-components';
import Image from 'next/image';

// assets
import slider1 from "../../../public/slider/img-carrousel.svg";
import slider2 from "../../../public/slider/img-carrousel1.svg";
import slider3 from "../../../public/slider/img-carrousel2.svg";
import slider4 from "../../../public/slider/img-carrousel3.svg";
import slider5 from "../../../public/slider/img-carrousel4.svg";
import slider6 from "../../../public/slider/img-carrousel5.svg";
import slider7 from "../../../public/slider/img-carrousel6.svg";
import slider8 from "../../../public/slider/img-carrousel7.svg";
import slider9 from "../../../public/slider/img-carrousel8.svg";
import slider10 from "../../../public/slider/img-carrousel9.svg";

// swiper
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper';

// swiper css
import 'swiper/swiper.min.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import './Slider.css';


const ImageContainer = styled.div`
    width: 100%;

    > img {
      width: 100%;
		  height: 100%;
      object-fit: contain;
    }

`

const Slider = () => {
  const imagesSlider = [slider1, slider2, slider3, slider4, slider5, slider6, slider7, slider8, slider9, slider10];
  const settings: SwiperProps = {
    modules: [Navigation, Pagination, A11y, Autoplay],
    navigation: true,
    pagination: {
      clickable: true,
      type: 'bullets',
    },
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      320: { // width >= 320px
        slidesPerView: 1,
        spaceBetween: 20,
      },
      560: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      740: {
        slidesPerView: 3.5,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    }
  }

  return (
    <Swiper
      {...settings}
    >
      {imagesSlider.map(image => (
        <SwiperSlide>
          <ImageContainer>
            <Image src={image} alt='Imagem slider' />
          </ImageContainer>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Slider;