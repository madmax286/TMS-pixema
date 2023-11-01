import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Player, BigPlayButton, ControlBar, PlayToggle  } from "video-react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  FreeMode,
  Thumbs,
  Mousewheel,
} from "swiper/modules";
import { Swiper, SwiperSlide, useSwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/thumbs";
import "./modalMedia.css";

const ModalMedia = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const screenshots = useSelector(({ screenshots }) => screenshots);
  const trailer = useSelector(({ trailer }) => trailer);

  return (
    <>
      <div className="modal-media">
        <Swiper
          modules={[FreeMode, Navigation, Thumbs, Mousewheel, Pagination]}
          spaceBetween={10}
          navigation={true}
          keyboard={{
            enabled: true,
          }}
          mousewheel={true}
          thumbs={{ swiper: thumbsSwiper }}
          className="mySwiper2"
        >
          {screenshots[0].map((e: any, id: number) => (
            <SwiperSlide key={id}>
              <img className="swiper-image" src={e.image} alt={e.image} />
            </SwiperSlide>
          ))}
          {trailer[0].map((e: any, id: number) => (
            <SwiperSlide key={id}>
              {({ isActive }) => (
                <div className="video">
                  {isActive && (
                    <Player autoPlay={isActive} poster={e.preview}>
                      <source src={e.data.max} />
                      <BigPlayButton position="center" />
                      <ControlBar autoHide={true}>
                          {/* <PlayToggle /> */}
                      </ControlBar>
                    </Player>
                  )}
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          modules={[FreeMode, Navigation, Thumbs, Mousewheel, Pagination]}
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={6}
          mousewheel={true}
          freeMode={true}
          grabCursor={true}
          watchSlidesProgress
          className="mySwiper"
        >
          {screenshots[0].map((e: any, id: number) => (
            <SwiperSlide key={id}>
              <img className="" src={e.image} alt={e.image} />
            </SwiperSlide>
          ))}
          {trailer[0].map((e: any, id: number) => (
            <SwiperSlide key={id}>
              <img src={e.preview} alt={e.preview} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default ModalMedia;
