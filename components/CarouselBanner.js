import {Img} from "@chakra-ui/react";
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {Autoplay, Navigation} from 'swiper';

import 'swiper/css';
import "swiper/css/navigation"

SwiperCore.use([Autoplay, Navigation]);

export default function CarouselBanner() {

    // Fast delay only for
    const autoPlaySettings = {
        "delay": 3000,
        "disableOnInteraction": false
    }
    const paginationSettings = {
        "clickable": true
    }

    return (
        <Swiper
            spaceBetween={0}
            loop={true}
            centeredSlides={true}
            autoplay={autoPlaySettings}
            pagination={paginationSettings}
            navigation={true}
        >
            <SwiperSlide>
                <Img src="/images/banner.jpg"/>
            </SwiperSlide>
            <SwiperSlide>
                <Img src="/images/banner.jpg"/>
            </SwiperSlide>
            <SwiperSlide>
                <Img src="/images/banner.jpg"/>
            </SwiperSlide>
        </Swiper>
    )
}