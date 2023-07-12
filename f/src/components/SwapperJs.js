import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import "./Styles/swaperjsStyle.css";

// Import Swiper styles
SwiperCore.use([Navigation, Autoplay]);

function SwapperJs({ images }) {
    return (
        <>
            <div className="swaper-container-x">
                <div className="swaper-container-y">
                    <Swiper navigation={true} loop={true} autoplay={{ delay: 3000 }} className="mySwiper">
                        {images.map((image, index) => (
                            <SwiperSlide key={index}>
                                <img src={image} alt={`Slide ${index + 1}`} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </>
    );
}

export default SwapperJs;
