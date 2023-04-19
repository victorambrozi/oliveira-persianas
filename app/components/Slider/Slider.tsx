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
		height: 20rem;

    > img {
        width: 100%;
				height: 100%;
        object-fit: cover;
    }

`

const Slider = () => {
	const imagesSlider = [slider1, slider2, slider3, slider4, slider5, slider6]
	const settings: SwiperProps = {
		modules: [Navigation, Pagination, A11y, Autoplay],
		slidesPerView: 4,
		spaceBetween: 30,
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