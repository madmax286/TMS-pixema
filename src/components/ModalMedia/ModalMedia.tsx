import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Player } from "video-react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  FreeMode,
  Thumbs,
  Mousewheel
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import './modalMedia.css'

const ModalMedia = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const screenshots = useSelector(({ screenshots }) => screenshots);
  const trailer = useSelector(({ trailer }) => trailer);

  return (
    <>
    <div className="modal-media">
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        modules={[FreeMode, Navigation, Thumbs, Mousewheel, Pagination]}
        spaceBetween={10}
        // pagination={{ clickable: true }}
        navigation={true}        
        grabCursor={true}
        keyboard={{
            enabled: true,
        }}
        mousewheel={true}
        thumbs={{ swiper: thumbsSwiper }}
        className="mySwiper1"
      >
        {screenshots[0].map((e: any, id: number) => (
          <SwiperSlide key={id}>
            <img className="" src={e.image} alt={e.image} />
          </SwiperSlide>
        ))}
        {trailer[0].map((e: any, id: number) => (
          <SwiperSlide key={id}>
            <Player poster={e.preview}>
              <source src={e.data.max} />
            </Player>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        modules={[FreeMode, Navigation, Thumbs, Mousewheel, Pagination]}
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        mousewheel={true}
        freeMode={true}
        navigation={true}
        grabCursor={true}
        watchSlidesProgress={true}
        className="mySwiper2"
      >
        {screenshots[0].map((e: any, id: number) => (
          <SwiperSlide key={id}>
            <img className="" src={e.image} alt={e.image} />
          </SwiperSlide>
        ))}
        {trailer[0].map((e: any, id: number) => (
          <SwiperSlide key={id}>
            <Player poster={e.preview}>
              <source src={e.data.max} />
            </Player>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </>
  );
};

export default ModalMedia;
