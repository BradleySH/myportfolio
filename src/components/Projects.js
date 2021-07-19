import React from 'react'
import "./projects.scss"
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {A11y, Navigation, Pagination, Scrollbar } from "swiper"
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

SwiperCore.use(Navigation, Pagination, Scrollbar, A11y)

export default function Projects() {


    return (
        <div className="projects-container" id="projects">
            <Swiper
                className="swiper-container"
                id="-swipe"
                tag="section"
                wrapperTag="ul"
                spaceBetween={0}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={(swiper) => console.log('slide change')}
                onReachEnd={() => console.log(`swiper has reached the end`)}
            >
      <SwiperSlide className="project1" tag="li">Project 1</SwiperSlide>
      <SwiperSlide className="project2" tag="li">Project 2</SwiperSlide>
      <SwiperSlide className="project3" tag="li">Project 3</SwiperSlide>
      ...
    </Swiper>
        </div>
    )
}
