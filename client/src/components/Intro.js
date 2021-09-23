import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// import 'swiper/css';
import '../css/Intro.css';

class Intro extends React.Component {
    render(){
        return (
            <div className="intro">
                <div className="shell">
                <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      ...
    </Swiper>
                    <div className="intro__container" style={{ backgroundImage: "url(/intro.jpg)" }}>
                        <div className="intro__inner">
                            <h1 className="intro__title">Shared Trip!</h1>

                            <p className="intro__content">
                                Share trips!
                                Share Emotions!
                                Share Dreams!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
} 

export default Intro;