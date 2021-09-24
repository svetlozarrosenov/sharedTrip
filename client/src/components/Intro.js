import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from 'swiper';

import "swiper/swiper-bundle.min.css";

import '../css/Intro.css';

SwiperCore.use([Autoplay]);


class Intro extends React.Component {
    render(){
        return (
            <div className="intro">
                <Swiper
                        spaceBetween={50}
                        slidesPerView={1}
                        loop={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false
                        }}
                        >
                        <SwiperSlide>
                            <div className="intro__container" style={{ backgroundImage: "url(/intro2.jpg)" }}>
                                <div className="intro__inner">
                                    <h1 className="intro__title">Shared Trip!</h1>

                                    <p className="intro__content">
                                        Share trips!
                                        Share Emotions!
                                        Share Dreams!
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
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
                        </SwiperSlide>
                    </Swiper>
            </div>
        );
    }
} 

export default Intro;